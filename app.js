/* ==========================================================================
   S.W.A.N. // SYSTEM CORE LOGIC v4.0 [RESPONSIVE]
   ========================================================================== */

const State = {
    rawData: [],
    stats: {
        hp: { mean: 0, std: 0 },
        atk: { mean: 0, std: 0 },
        def: { mean: 0, std: 0 },
        spd: { mean: 0, std: 0 }
    },
    ranges: {
        hp: { min: 0, max: 0 },
        atk: { min: 0, max: 0 },
        def: { min: 0, max: 0 },
        spd: { min: 0, max: 0 },
        ehp: { min: 0, max: 0 },
        tbp: { min: 0, max: 0 }
    },
    table: null
};

// --- SYSTEM INITIALIZATION ---
$(document).ready(() => {

    // 1. BOOT SEQUENCE ANIMATION
    const bootLines = [
        "SYSTEM_CHECK...",
        "LOADING DRIVERS...",
        "DECRYPTING BIO-DATA...",
        "OPTIMIZING VIEWPORT...",
        "ESTABLISHING UPLINK...",
        "ACCESS GRANTED."
    ];
    let lineIndex = 0;
    const bootInterval = setInterval(() => {
        if (lineIndex < bootLines.length) {
            $('#boot-log').append(`<div>> ${bootLines[lineIndex]}</div>`);
            // Auto scroll to bottom of log
            const log = document.getElementById('boot-log');
            log.scrollTop = log.scrollHeight;
            lineIndex++;
        } else {
            clearInterval(bootInterval);
        }
    }, 300);

    // 2. MOBILE MENU LOGIC
    const $sidebar = $('.sidebar');
    const $menuBtn = $('#mobile-menu-btn');

    // Toggle Sidebar
    $menuBtn.on('click', function (e) {
        e.stopPropagation();
        $sidebar.toggleClass('active');

        if ($sidebar.hasClass('active')) {
            $(this).text("✖ CLOSE SYS");
            $(this).css('border-color', 'var(--alert)');
            $(this).css('color', 'var(--alert)');
        } else {
            $(this).text("☰ SYS.MENU");
            $(this).css('border-color', 'var(--primary)');
            $(this).css('color', 'var(--primary)');
        }
    });

    // Close sidebar when clicking outside
    $(document).on('click', function (e) {
        if ($(window).width() <= 768 &&
            $sidebar.hasClass('active') &&
            !$(e.target).closest('.sidebar').length &&
            !$(e.target).is($menuBtn)) {

            $sidebar.removeClass('active');
            $menuBtn.text("☰ SYS.MENU");
            $menuBtn.css('border-color', 'var(--primary)');
            $menuBtn.css('color', 'var(--primary)');
        }
    });

    // Reset state on resize
    $(window).resize(function () {
        if ($(window).width() > 768) {
            $sidebar.removeClass('active');
            $menuBtn.hide();
        } else {
            $menuBtn.show();
        }
    });

    // 3. RESPONSIVE CHART RESIZING
    window.addEventListener('resize', function () {
        const update = { autosize: true };
        // Relayout all charts if they exist
        if (document.getElementById('main-scatter').data) Plotly.relayout('main-scatter', update);
        if (document.getElementById('box-plot').data) Plotly.relayout('box-plot', update);
        if (document.getElementById('hist-plot').data) Plotly.relayout('hist-plot', update);
        if (document.getElementById('radar-container').data) Plotly.relayout('radar-container', update);
    });

    // 4. DATA INPUT LISTENERS
    $('#csv-file').on('change', handleFileUpload);
    $('#search-input').on('keyup', updateDashboard);
    $('#star-slider').on('input', function () {
        $('#star-display').text(this.value + "★");
        updateDashboard();
    });
    $('#element-select').on('change', updateDashboard);

    // 5. AUTO-LOAD DATASET
    if (typeof MONSTER_DATA_CSV !== 'undefined') {
        Papa.parse(MONSTER_DATA_CSV, {
            header: true, skipEmptyLines: true,
            complete: (res) => {
                processRawData(res.data);
                // Delay fadeout to show off the boot sequence
                setTimeout(() => $('#loader').fadeOut(500), 2500);
            }
        });
    } else {
        $('#boot-log').append('<div style="color:var(--alert)">> ERROR: NO LOCAL DATA FOUND.</div>');
        setTimeout(() => $('#loader').fadeOut(500), 2000);
    }
});

function handleFileUpload(e) {
    const file = e.target.files[0];
    if (!file) return;
    Papa.parse(file, { header: true, skipEmptyLines: true, complete: (res) => processRawData(res.data) });
}

// --- DATA PROCESSING ENGINE ---
function processRawData(data) {
    // 1. Basic Parse
    const clean = data.filter(d => d.Name && d.HP).map(d => ({
        Name: d.Name, Family: d.Family, Element: d.Element, Stars: parseInt(d.Stars),
        HP: parseInt(d.HP), Atk: parseInt(d.Atk), Def: parseInt(d.Def), Spd: parseInt(d.Spd),
        ImageURL: d.ImageURL || ''
    }));

    if (clean.length < 2) return;

    // 2. Global Statistics
    ['HP', 'Atk', 'Def', 'Spd'].forEach(k => {
        const arr = clean.map(d => d[k]);
        const mean = arr.reduce((a, b) => a + b, 0) / arr.length;
        const std = Math.sqrt(arr.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / arr.length);
        State.stats[k.toLowerCase()] = { mean, std };
    });

    // 3. Min/Max Ranges
    const baseRanges = {
        hp: { min: Math.min(...clean.map(d => d.HP)), max: Math.max(...clean.map(d => d.HP)) },
        atk: { min: Math.min(...clean.map(d => d.Atk)), max: Math.max(...clean.map(d => d.Atk)) },
        def: { min: Math.min(...clean.map(d => d.Def)), max: Math.max(...clean.map(d => d.Def)) },
        spd: { min: Math.min(...clean.map(d => d.Spd)), max: Math.max(...clean.map(d => d.Spd)) }
    };

    // 4. Calculate Metrics & Roles
    let processed = clean.map(d => {
        // Z-Scores
        const z_hp = (d.HP - State.stats.hp.mean) / State.stats.hp.std;
        const z_atk = (d.Atk - State.stats.atk.mean) / State.stats.atk.std;
        const z_def = (d.Def - State.stats.def.mean) / State.stats.def.std;
        const z_spd = (d.Spd - State.stats.spd.mean) / State.stats.spd.std;

        // EHP & TBP
        const ehp = d.HP * ((1140 + (3.5 * d.Def)) / 1000);

        const norm_hp = (d.HP - baseRanges.hp.min) / (baseRanges.hp.max - baseRanges.hp.min);
        const norm_atk = (d.Atk - baseRanges.atk.min) / (baseRanges.atk.max - baseRanges.atk.min);
        const norm_def = (d.Def - baseRanges.def.min) / (baseRanges.def.max - baseRanges.def.min);
        const norm_spd = (d.Spd - baseRanges.spd.min) / (baseRanges.spd.max - baseRanges.spd.min);
        const tbp = ((norm_hp + norm_atk + norm_def + norm_spd) / 4) * 100;

        // Archetype Logic
        const rAtk = d.Atk / State.stats.atk.mean;
        const rDef = d.Def / State.stats.def.mean;
        const rHp = d.HP / State.stats.hp.mean;
        const rSpd = d.Spd / State.stats.spd.mean;
        const statBias = rAtk - rDef;

        const IS_OFFENSIVE = statBias >= 0.1;
        const IS_DEFENSIVE = statBias <= -0.1;
        const IS_FAST = rSpd >= 1.05;
        const IS_TANKY = rHp >= 1.15;

        let archetype = "Support";
        if (IS_OFFENSIVE) archetype = IS_FAST ? "Assassin" : (IS_TANKY ? "Bruiser" : "Nuker");
        else if (IS_DEFENSIVE) archetype = IS_FAST ? "Interceptor" : (IS_TANKY ? "Tank" : "Sentinel");
        else archetype = IS_FAST ? "Navigator" : (IS_TANKY ? "Guardian" : "Support");
        if (tbp > 85) archetype = "Overlord";

        return { ...d, z_hp, z_atk, z_def, z_spd, ehp, tbp, archetype };
    });

    // 5. SORT & RANK (Crucial for Leaderboard)
    processed.sort((a, b) => b.tbp - a.tbp); // Sort Descending by TBP
    processed.forEach((d, index) => {
        d.globalRank = index + 1; // Assign Rank #1 to Highest TBP
    });

    // 6. Capture Final Ranges
    const ehpArr = processed.map(d => d.ehp);
    const tbpArr = processed.map(d => d.tbp);

    State.ranges = {
        hp: baseRanges.hp,
        atk: baseRanges.atk,
        def: baseRanges.def,
        spd: baseRanges.spd,
        ehp: { min: Math.min(...ehpArr), max: Math.max(...ehpArr) },
        tbp: { min: Math.min(...tbpArr), max: Math.max(...tbpArr) }
    };

    State.rawData = processed;
    initUI();
    updateDashboard();
}

// --- VISUAL HELPER FUNCTIONS ---
function getTierColor(val, type) {
    const range = State.ranges[type];
    if (!range) return '#fff';
    const span = range.max - range.min;
    const lowThreshold = range.min + (span * 0.33);
    const highThreshold = range.min + (span * 0.66);
    if (val >= highThreshold) return '#2ddd44ff'; // High (Green)
    if (val >= lowThreshold) return '#3edcedff'; // Mid (White)
    return '#bc1b2dff';                           // Low (Grey)
}

function getRoleColor(role) {
    const map = {
        "Assassin": "#ff0055", "Nuker": "#ff5e00", "Bruiser": "#ff9900",
        "Tank": "#00aaff", "Sentinel": "#0055ff", "Interceptor": "#00f3ff",
        "Navigator": "#ffff00", "Guardian": "#bc13fe", "Support": "#00ff9d",
        "Overlord": "#ffffff"
    };
    return map[role] || "#fff";
}

// --- UI MANAGERS ---
function initUI() {
    // Populate Select
    const elements = [...new Set(State.rawData.map(d => d.Element))].sort();
    const $sel = $('#element-select').empty();
    elements.forEach(e => $sel.append(`<option value="${e}" selected>${e}</option>`));

    if (State.table) State.table.destroy();

    // Init DataTable
    State.table = $('#data-table').DataTable({
        data: [],
        columns: [
            // Column 0: Global Rank
            {
                data: 'globalRank',
                render: (data) => `<span style="color:var(--text-dim); font-family:var(--font-mono)">#${data}</span>`,
                width: '50px',
                type: 'num'
            },
            // Column 1: Name
            {
                data: null,
                render: (d, t, r) => (r.ImageURL ? `<img src="${r.ImageURL}" class="table-icon">` : '') + r.Name,
                className: 'text-primary'
            },
            { data: 'Element' },
            { data: 'HP' },
            { data: 'Atk' },
            { data: 'Def' },
            { data: 'Spd' },
            { data: 'ehp', render: $.fn.dataTable.render.number(',', '.', 0) },
            { data: 'tbp', render: (d) => `<span style="color:${d > 50 ? '#00ff9d' : '#5a6572'}">${d.toFixed(1)}%</span>` },
            { data: 'archetype' }
        ],
        pageLength: 50,
        dom: 't',
        paging: false,
        // Removed scrollY to let CSS handle scrolling (avoids double scrollbars)
        order: [[0, 'asc']] // Default sort by Rank (Top TBP First)
    });

    $('#data-table tbody').on('click', 'tr', function () {
        const data = State.table.row(this).data();
        if (data) renderInspector(data);
    });
}

function updateDashboard() {
    const search = $('#search-input').val().toLowerCase();
    const minStars = parseInt($('#star-slider').val());
    const selectedElm = $('#element-select').val() || [];

    const filtered = State.rawData.filter(d =>
        (d.Name.toLowerCase().includes(search) || d.Family.toLowerCase().includes(search)) &&
        d.Stars >= minStars && selectedElm.includes(d.Element)
    );

    $('#kpi-count').text(filtered.length);
    const avgTbp = filtered.length ? filtered.reduce((a, b) => a + b.tbp, 0) / filtered.length : 0;
    $('#kpi-ehp').text(avgTbp.toFixed(1) + '%');

    State.table.clear().rows.add(filtered).draw();
    renderScatter(filtered);
    renderDistributions(filtered);

    renderAdvancedCharts(filtered);

    if (filtered.length > 0) renderInspector(filtered[0]);
}

// --- PLOTLY CHARTS ---
const PLOT_OPTS = {
    plot_bgcolor: 'transparent', paper_bgcolor: 'transparent',
    font: { family: 'Roboto Mono', color: '#5a6572', size: 10 },
    autosize: true,
    margin: { t: 20, b: 30, l: 50, r: 20 },
    xaxis: { gridcolor: '#1a1c23', automargin: true },
    yaxis: { gridcolor: '#1a1c23', automargin: true }
};

function renderScatter(data) {
    const trace = {
        x: data.map(d => d.tbp), y: data.map(d => d.ehp), text: data.map(d => d.Name),
        mode: 'markers', marker: {
            size: data.map(d => d.Spd / 8), color: data.map(d => d.tbp),
            colorscale: 'Bluered', opacity: 0.8, line: { color: '#fff', width: 0.5 }
        }, type: 'scatter'
    };
    const layout = {
        ...PLOT_OPTS, margin: { t: 20, b: 40, l: 70, r: 20 },
        xaxis: { ...PLOT_OPTS.xaxis, title: 'Base Potential %' },
        yaxis: { ...PLOT_OPTS.yaxis, title: 'Effective HP' }
    };
    Plotly.react('main-scatter', [trace], layout, { responsive: true, displayModeBar: false });

    document.getElementById('main-scatter').removeAllListeners('plotly_click');
    document.getElementById('main-scatter').on('plotly_click', d => {
        const name = d.points[0].text;
        const mob = State.rawData.find(m => m.Name === name);
        if (mob) renderInspector(mob);
    });
}

function renderDistributions(data) {
    // 1. Box Plot (Speed Z-Score)
    const boxTrace = {
        y: data.map(d => d.z_spd),
        type: 'box',
        name: 'Speed Z',
        // Pass Name in customdata for lookup
        customdata: data.map(d => d.Name),
        marker: { color: '#bc13fe' },
        boxpoints: 'all',
        jitter: 0.5,
        pointpos: -1.8,
        hoverinfo: 'none' // Disable default plotly tooltip
    };

    Plotly.react('box-plot', [boxTrace], PLOT_OPTS, { responsive: true, displayModeBar: false });

    // 2. Attach Interactive Listener to Box Plot
    const boxPlot = document.getElementById('box-plot');

    // Clean old listeners
    boxPlot.removeAllListeners('plotly_hover');
    boxPlot.removeAllListeners('plotly_unhover');
    boxPlot.removeAllListeners('plotly_click');

    boxPlot.on('plotly_hover', d => {
        const pt = d.points[0];
        // In box plots, 'customdata' matches the point index
        const mobName = pt.customdata;
        const zVal = pt.y; // The Z-Score value

        const mob = State.rawData.find(m => m.Name === mobName);

        if (mob) {
            // Show Tooltip with Custom Footer
            Tooltip.show(mob, d.event.clientX, d.event.clientY, {
                label: "Z-SCORE",
                value: (zVal > 0 ? "+" : "") + zVal.toFixed(2) + " σ"
            });

            // Also link to Inspector
            renderInspector(mob);
        }
    });

    boxPlot.on('plotly_unhover', () => Tooltip.hide());

    boxPlot.on('plotly_click', d => {
        const mobName = d.points[0].customdata;
        const mob = State.rawData.find(m => m.Name === mobName);
        if (mob) renderInspector(mob);
    });


    // 3. Histogram (Potential Density) - Keep as is
    const histTrace = {
        x: data.map(d => d.tbp),
        type: 'histogram',
        marker: { color: '#00f3ff', opacity: 0.6 },
        xbins: { size: 5 }
    };
    Plotly.react('hist-plot', [histTrace], PLOT_OPTS, { responsive: true, displayModeBar: false });
}

function renderInspector(mob) {
    const $panel = $('#inspector-panel .card-body');
    const roleColor = getRoleColor(mob.archetype);

    $panel.html(`
        <div class="inspector-layout">
            <div class="entity-identity">
                <div class="portrait-container">
                    ${mob.ImageURL ? `<img src="${mob.ImageURL}">` : ''}
                </div>
                <div class="entity-info">
                    <h2>${mob.Name}</h2>
                    <span>${mob.Family} [${mob.Element}]</span>
                    <div style="font-size: 0.7rem; color: ${roleColor}; margin-top: 4px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; text-shadow: 0 0 10px ${roleColor}40;">
                        // ${mob.archetype} //
                    </div>
                </div>
            </div>
            
            <div class="analysis-container">
                <div id="radar-container" class="chart-container"></div>
            </div>

            <div class="metrics-grid">
                <div class="metric-tile" style="grid-column: span 1.5;">
                    <label>POTENTIAL</label>
                    <span style="color: ${getTierColor(mob.tbp, 'tbp')}; text-shadow: 0 0 10px rgba(0,0,0,0.5);">${mob.tbp.toFixed(1)}%</span>
                </div>
                <div class="metric-tile" style="grid-column: span 1.5;">
                    <label>EFF. HP</label>
                    <span style="color: ${getTierColor(mob.ehp, 'ehp')}">${(mob.ehp / 1000).toFixed(1)}k</span>
                </div>
                <div class="metric-tile"><label>HP</label><span style="color: ${getTierColor(mob.HP, 'hp')}">${mob.HP}</span></div>
                <div class="metric-tile"><label>ATK</label><span style="color: ${getTierColor(mob.Atk, 'atk')}">${mob.Atk}</span></div>
                <div class="metric-tile"><label>DEF</label><span style="color: ${getTierColor(mob.Def, 'def')}">${mob.Def}</span></div>
                <div class="metric-tile"><label>SPD</label><span style="color: ${getTierColor(mob.Spd, 'spd')}">${mob.Spd}</span></div>
            </div>
        </div>
    `);

    const rData = [mob.z_hp + 4, mob.z_atk + 4, mob.z_def + 4, mob.z_spd + 4, mob.z_hp + 4];

    Plotly.newPlot('radar-container', [{
        type: 'scatterpolar', r: rData, theta: ['HP', 'ATK', 'DEF', 'SPD', 'HP'],
        fill: 'toself', fillcolor: 'rgba(0, 243, 255, 0.2)',
        line: { color: '#00f3ff', width: 2 }, marker: { size: 4, color: '#fff' }
    }], {
        autosize: true, // Key for responsiveness
        polar: {
            radialaxis: { visible: false, range: [0, 8] },
            bgcolor: 'rgba(0,0,0,0)',
            angularaxis: { tickcolor: 'rgba(255,255,255,0.5)', color: '#fff', size: 10, font: { family: 'Orbitron', size: 10 } },
            gridshape: 'linear', gridcolor: 'rgba(255,255,255,0.1)'
        },
        paper_bgcolor: 'transparent',
        plot_bgcolor: 'transparent',
        margin: { t: 20, b: 20, l: 30, r: 30 },
        showlegend: false
    }, { responsive: true, displayModeBar: false, staticPlot: true });

    // 1. Calculate Averages for this Rarity (The "Ghost" Data)
    // Filter all units that have the same Star rating as the selected mob
    const peers = State.rawData.filter(d => d.Stars === mob.Stars);

    const avgStats = {
        hp: peers.reduce((a, b) => a + b.z_hp, 0) / peers.length,
        atk: peers.reduce((a, b) => a + b.z_atk, 0) / peers.length,
        def: peers.reduce((a, b) => a + b.z_def, 0) / peers.length,
        spd: peers.reduce((a, b) => a + b.z_spd, 0) / peers.length
    };

    // 2. Prepare Data Traces
    const rDataMob = [mob.z_hp + 4, mob.z_atk + 4, mob.z_def + 4, mob.z_spd + 4, mob.z_hp + 4];
    const rDataAvg = [avgStats.hp + 4, avgStats.atk + 4, avgStats.def + 4, avgStats.spd + 4, avgStats.hp + 4];

    // Trace 1: The Selected Unit (Solid, Bright)
    const traceMob = {
        type: 'scatterpolar',
        r: rDataMob,
        theta: ['HP', 'ATK', 'DEF', 'SPD', 'HP'],
        fill: 'toself',
        fillcolor: 'rgba(0, 243, 255, 0.2)',
        line: { color: '#00f3ff', width: 2 },
        marker: { size: 4, color: '#fff' },
        name: mob.Name
    };

    // Trace 2: The Average Ghost (Dashed, Faint)
    const traceAvg = {
        type: 'scatterpolar',
        r: rDataAvg,
        theta: ['HP', 'ATK', 'DEF', 'SPD', 'HP'],
        fill: 'toself',
        fillcolor: 'rgba(255, 255, 255, 0.05)',
        line: { color: '#999', width: 1, dash: 'dot' },
        marker: { size: 0 },
        name: `Avg ${mob.Stars}★`,
        hoverinfo: 'none' // Don't show tooltip for the ghost
    };

    Plotly.newPlot('radar-container', [traceAvg, traceMob], {
        autosize: true,
        polar: {
            radialaxis: { visible: false, range: [0, 8] },
            bgcolor: 'rgba(0,0,0,0)',
            angularaxis: {
                tickcolor: 'rgba(255,255,255,0.5)',
                color: '#fff',
                size: 10,
                font: { family: 'Orbitron', size: 10 }
            },
            gridshape: 'linear',
            gridcolor: 'rgba(255,255,255,0.1)'
        },
        paper_bgcolor: 'transparent',
        plot_bgcolor: 'transparent',
        margin: { t: 20, b: 20, l: 30, r: 30 },
        showlegend: false // Keep it clean
    }, { responsive: true, displayModeBar: false, staticPlot: false });
}

window.switchTab = function (tabId) {
    // 1. Visual Tab State
    $('.cyber-tab').removeClass('active');
    // Find the button that calls this (hacky but works) or just rely on CSS classes
    // Better: Add click listeners in JS, but for now specific inline call:
    event.target.classList.add('active');

    // 2. Hide all contents
    $('.tab-content').removeClass('active');

    // 3. Show target
    $('#' + tabId).addClass('active');

    // 4. Force Plotly Resize (Crucial for tabs)
    const activePlot = document.querySelector('#' + tabId + ' .chart-container');
    if (activePlot) {
        Plotly.Plots.resize(activePlot);
    }
};

function renderAdvancedCharts(data) {
    if (!data || data.length === 0) return;

    // --- 1. CORRELATION HEATMAP ---
    // Calculate Pearson Correlation manually
    const keys = ['HP', 'Atk', 'Def', 'Spd', 'ehp', 'tbp'];
    const matrix = [];

    // Helper to calculate correlation
    const getCorr = (key1, key2) => {
        const xs = data.map(d => d[key1]);
        const ys = data.map(d => d[key2]);
        let n = xs.length;
        let sum_x = 0, sum_y = 0, sum_xy = 0, sum_x2 = 0, sum_y2 = 0;
        for (let i = 0; i < n; i++) {
            sum_x += xs[i]; sum_y += ys[i];
            sum_xy += xs[i] * ys[i];
            sum_x2 += xs[i] * xs[i]; sum_y2 += ys[i] * ys[i];
        }
        const numerator = (n * sum_xy) - (sum_x * sum_y);
        const denominator = Math.sqrt((n * sum_x2 - sum_x * sum_x) * (n * sum_y2 - sum_y * sum_y));
        return (denominator === 0) ? 0 : numerator / denominator;
    };

    // Build Matrix
    for (let y of keys) {
        let row = [];
        for (let x of keys) {
            row.push(getCorr(x, y));
        }
        matrix.push(row);
    }

    const heatTrace = {
        z: matrix,
        x: keys.map(k => k.toUpperCase()),
        y: keys.map(k => k.toUpperCase()),
        type: 'heatmap',
        colorscale: 'Electric',
        zmin: -1, zmax: 1,
        // Add gap for grid look
        xgap: 2,
        ygap: 2
    };

    const heatLayout = {
        ...PLOT_OPTS,
        title: false, // Title is now in the sidebar, cleaner look
        margin: { t: 20, b: 50, l: 60, r: 20 },
        xaxis: {
            automargin: true,
            fixedrange: true,
            side: 'bottom',
            tickfont: { family: 'Roboto Mono', color: '#5a6572' }
        },
        yaxis: {
            automargin: true,
            fixedrange: true,
            autorange: 'reversed',
            tickfont: { family: 'Roboto Mono', color: '#5a6572' },

            /* THIS COMMAND FORCES A SQUARE ASPECT RATIO */
            scaleanchor: 'x',
            scaleratio: 1
        }
    };

    Plotly.react('heatmap-plot', [heatTrace], heatLayout, { responsive: true, displayModeBar: false });


    // --- 2. 3D CLUSTER & REGRESSION ANALYSIS ---

    // A. Visual Setup: 3D Plot
    // We color by Stars now to visualize the layers you saw
    // Scale size based on Speed (e.g., Speed 90 to 130 maps to Size 2 to 8)
    const getSizeFromSpeed = (spd) => {
        // Base size 2, add extra based on speed
        const size = 2 + ((spd - 80) / 50) * 8;
        return Math.max(2, Math.min(size, 12)); // Clamp size between 2 and 12
    };

    const clusterTrace = {
        x: data.map(d => d.HP),
        y: data.map(d => d.Atk),
        z: data.map(d => d.Def),

        // 1. PASS REAL DATA: This stores the actual Speed number for every point
        customdata: data.map(d => d.Spd),

        mode: 'markers',
        marker: {
            // Visual Size (Still calculated based on speed for the "Look")
            size: data.map(d => getSizeFromSpeed(d.Spd)),
            color: data.map(d => getStarColor(d.Stars)),
            line: { color: '#000', width: 0.5 },
            opacity: 0.8
        },
        type: 'scatter3d',
        text: data.map(d => d.Name),

        // 2. SHOW REAL DATA: Use %{customdata} to display the number we stored above
        hovertemplate: '<b>%{text}</b><br>SPD: %{customdata}<br>HP: %{x}<br>ATK: %{y}<br>DEF: %{z}<extra></extra>'
    };

    const layout3d = {
        ...PLOT_OPTS,
        scene: {
            xaxis: { title: 'HP', gridcolor: '#333', zerolinecolor: '#00f3ff' },
            yaxis: { title: 'ATK', gridcolor: '#333', zerolinecolor: '#00f3ff' },
            zaxis: { title: 'DEF', gridcolor: '#333', zerolinecolor: '#00f3ff' },
            bgcolor: 'rgba(0,0,0,0)',
            camera: { eye: { x: 1.5, y: 1.5, z: 1.2 } } // Better initial angle
        },
        margin: { l: 0, r: 0, b: 0, t: 0 }
    };

    Plotly.react('cluster-plot', [clusterTrace], layout3d, { responsive: true, displayModeBar: false });

    // B. Mathematical Analysis: Find the Function
    calculateAndRenderFormulas(data);


    // --- 3. PARALLEL COORDINATES ---
    // Great for seeing high-dimensional patterns
    const paraTrace = {
        type: 'parcoords',
        line: {
            color: data.map(d => d.tbp),
            colorscale: 'Bluered'
        },
        dimensions: [
            { range: [State.ranges.hp.min, State.ranges.hp.max], label: 'HP', values: data.map(d => d.HP) },
            { range: [State.ranges.atk.min, State.ranges.atk.max], label: 'ATK', values: data.map(d => d.Atk) },
            { range: [State.ranges.def.min, State.ranges.def.max], label: 'DEF', values: data.map(d => d.Def) },
            { range: [State.ranges.spd.min, State.ranges.spd.max], label: 'SPD', values: data.map(d => d.Spd) },
            { range: [State.ranges.tbp.min, State.ranges.tbp.max], label: 'POTENTIAL', values: data.map(d => d.tbp) }
        ]
    };

    // Styling the parallel coords to look cyberpunk
    // Note: Parcoords has limited styling in Plotly JS compared to others
    const paraLayout = {
        ...PLOT_OPTS,
        font: { family: 'Roboto Mono', size: 10, color: '#00f3ff' },
        paper_bgcolor: 'transparent'
    };

    Plotly.react('parallel-plot', [paraTrace], paraLayout, { responsive: true, displayModeBar: false });

    enableParCoordsHover(data);

    // --- 4. AI META MAP (PCA + K-MEANS) ---
    // 1. Math
    const pcaData = performPCA(data);
    const clusteredData = performKMeans(pcaData, 4); // Ask AI to find 4 distinct groups

    // 2. Plot
    const pcaTrace = {
        x: clusteredData.map(d => d.pc1),
        y: clusteredData.map(d => d.pc2),
        mode: 'markers',
        text: clusteredData.map(d => d.Name),
        customdata: clusteredData.map(d => d.archetype), // Show Human archetype vs AI Cluster
        marker: {
            size: 6,
            // Color by the AI detected cluster, not the human label
            color: clusteredData.map(d => d.aiCluster),
            colorscale: 'Portland',
            line: { color: '#fff', width: 0.5 },
            opacity: 0.8
        },
        type: 'scatter',
        hovertemplate: '<b>%{text}</b><br>AI Group: %{marker.color}<br>Human Role: %{customdata}<extra></extra>'
    };

    const pcaLayout = {
        ...PLOT_OPTS,
        title: false,
        xaxis: {
            title: 'PC1: STAT MAGNITUDE',
            zeroline: true, showgrid: true, gridcolor: '#222', zerolinecolor: '#666'
        },
        yaxis: {
            title: 'PC2: OFFENSE <-- BIAS --> DEFENSE',
            zeroline: true, showgrid: true, gridcolor: '#222', zerolinecolor: '#666'
        },
        margin: { t: 20, b: 40, l: 60, r: 20 }
    };

    Plotly.react('pca-plot', [pcaTrace], pcaLayout, { responsive: true, displayModeBar: false });

    // --- 5. TAXONOMY SUNBURST ---
    // We need to structure data: Root -> Element -> Archetype

    // 1. Group Data
    const hierarchy = {};
    data.forEach(d => {
        if (!hierarchy[d.Element]) hierarchy[d.Element] = {};
        if (!hierarchy[d.Element][d.archetype]) hierarchy[d.Element][d.archetype] = 0;
        hierarchy[d.Element][d.archetype]++;
    });

    // 2. Flatten for Plotly
    // Plotly Sunburst needs: labels, parents, values
    const labels = ["TOTAL"];
    const parents = [""];
    const values = [data.length];

    // Level 1: Elements
    Object.keys(hierarchy).forEach(elm => {
        labels.push(elm);
        parents.push("TOTAL");
        // Sum children for value
        const totalInElm = Object.values(hierarchy[elm]).reduce((a, b) => a + b, 0);
        values.push(totalInElm);

        // Level 2: Archetypes
        Object.keys(hierarchy[elm]).forEach(arch => {
            labels.push(`${arch} (${elm})`); // Unique ID
            parents.push(elm);
            values.push(hierarchy[elm][arch]);
        });
    });

    const sunTrace = {
        type: "sunburst",
        labels: labels,
        parents: parents,
        values: values,
        leaf: { opacity: 0.4 },
        marker: { line: { width: 2, color: '#000' } },
        branchvalues: 'total',
        hovertemplate: '<b>%{label}</b><br>Count: %{value}<br>Ratio: %{percentRoot:.1%}<extra></extra>',
        textfont: { family: 'Orbitron', size: 10, color: '#fff' }
    };

    const sunLayout = {
        ...PLOT_OPTS,
        margin: { t: 0, b: 0, l: 0, r: 0 },
        sunburstcolorway: ['#8c8c12ff', '#9e74aeff', '#ff0055', '#bc13fe', '#146eb3ff'] // Cyberpunk Palette
    };

    Plotly.react('sunburst-plot', [sunTrace], sunLayout, { responsive: true, displayModeBar: false });
}

// --- HELPER: LINEAR REGRESSION ENGINE ---
function calculateAndRenderFormulas(data) {
    const container = $('#formula-container').empty();
    const starGroups = [5, 4, 3, 2];

    starGroups.forEach(star => {
        const group = data.filter(d => d.Stars === star);
        if (group.length < 15) return; // Need sample size

        // 1. PREPARE MATRICES for Equation: DEF = b0 + b1*HP + b2*ATK + b3*SPD
        // We are solving Ax = B
        let N = group.length;
        let sumHP = 0, sumAtk = 0, sumSpd = 0, sumDef = 0;
        let sumHP2 = 0, sumAtk2 = 0, sumSpd2 = 0;
        let sumHPAtk = 0, sumHPSpd = 0, sumAtkSpd = 0;
        let sumHPDef = 0, sumAtkDef = 0, sumSpdDef = 0;

        for (let d of group) {
            sumHP += d.HP; sumAtk += d.Atk; sumSpd += d.Spd; sumDef += d.Def;
            sumHP2 += d.HP ** 2; sumAtk2 += d.Atk ** 2; sumSpd2 += d.Spd ** 2;
            sumHPAtk += d.HP * d.Atk; sumHPSpd += d.HP * d.Spd; sumAtkSpd += d.Atk * d.Spd;
            sumHPDef += d.HP * d.Def; sumAtkDef += d.Atk * d.Def; sumSpdDef += d.Spd * d.Def;
        }

        // The Normal Equation Matrix (3 Variables + Intercept)
        // [ N      HP      ATK      SPD ] [ b0 ]   [ DEF ]
        // [ HP     HP^2    HP*ATK   HP*SPD] [ b1 ]   [ HP*DEF ]
        // [ ATK    ATK*HP  ATK^2    ATK*SPD] [ b2 ] = [ ATK*DEF ]
        // [ SPD    SPD*HP  SPD*ATK  SPD^2  ] [ b3 ]   [ SPD*DEF ]

        const Matrix = [
            [N, sumHP, sumAtk, sumSpd, sumDef],
            [sumHP, sumHP2, sumHPAtk, sumHPSpd, sumHPDef],
            [sumAtk, sumHPAtk, sumAtk2, sumAtkSpd, sumAtkDef],
            [sumSpd, sumHPSpd, sumAtkSpd, sumSpd2, sumSpdDef]
        ];

        // 2. SOLVE USING GAUSSIAN ELIMINATION
        const result = solveGaussian(Matrix);
        // result[0] = Intercept, result[1] = HP coeff, result[2] = ATK coeff, result[3] = SPD coeff

        const intercept = Math.round(result[0]);
        const hpWeight = Math.abs(result[1]).toFixed(3);
        const atkWeight = Math.abs(result[2]).toFixed(2);
        const spdWeight = Math.abs(result[3]).toFixed(2); // New Speed Weight

        const color = getStarColor(star);

        // 3. RENDER CARD
        const html = `
            <div class="formula-card" style="border-left: 3px solid ${color}; background: rgba(255,255,255,0.03); padding: 10px; margin-bottom: 10px;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-family: var(--font-head); color: ${color}; font-size: 1rem;">${star} ★ NATIVE</span>
                    <span style="font-size: 0.7rem; color: #5a6572;">N=${N}</span>
                </div>
                
                <div style="margin-top: 8px; font-family: 'Courier New', monospace; font-size: 0.75rem; color: #fff; line-height: 1.6;">
                    <span style="color:${color}">DEF</span> = ${intercept} - ${hpWeight}<span style="color:#5a6572">HP</span> - ${atkWeight}<span style="color:#5a6572">ATK</span> - <span style="color:#ff0055; font-weight:bold;">${spdWeight}</span><span style="color:#ff0055">SPD</span>
                </div>

                <div style="margin-top: 5px; font-size: 0.7rem; color: var(--text-dim);">
                    <strong>BUDGET CONSTANT:</strong> ~${intercept}
                </div>
            </div>
        `;
        container.append(html);
    });
}

// Gaussian Elimination Solver (Generic)
function solveGaussian(M) {
    let n = M.length;
    for (let i = 0; i < n; i++) {
        // Pivot
        let maxEl = Math.abs(M[i][i]), maxRow = i;
        for (let k = i + 1; k < n; k++) {
            if (Math.abs(M[k][i]) > maxEl) { maxEl = Math.abs(M[k][i]); maxRow = k; }
        }
        for (let k = i; k < n + 1; k++) {
            let tmp = M[maxRow][k]; M[maxRow][k] = M[i][k]; M[i][k] = tmp;
        }
        // Make all rows below this one 0 in current column
        for (let k = i + 1; k < n; k++) {
            let c = -M[k][i] / M[i][i];
            for (let j = i; j < n + 1; j++) {
                if (i === j) M[k][j] = 0; else M[k][j] += c * M[i][j];
            }
        }
    }
    // Back substitution
    let x = new Array(n);
    for (let i = n - 1; i > -1; i--) {
        x[i] = M[i][n] / M[i][i];
        for (let k = i - 1; k > -1; k--) M[k][n] -= M[k][i] * x[i];
    }
    return x;
}

// --- SYSTEM COLOR PALETTE ---
function getStarColor(star) {
    switch (parseInt(star)) {
        case 5: return '#bc13fe'; // Neon Purple (High Rarity)
        case 4: return '#00f3ff'; // Cyan (Mid Rarity)
        case 3: return '#00ff9d'; // Neon Green (Low Rarity)
        default: return '#5a6572'; // Grey (Common)
    }
}

// --- AI ENGINE: PCA & K-MEANS ---

// 1. Calculate Principal Component Analysis (PCA)
function performPCA(data) {
    // A. Standardize Data (Z-Score)
    const stats = ['HP', 'Atk', 'Def', 'Spd'];
    const n = data.length;

    // Calculate Means and StdDevs
    const means = stats.map(key => data.reduce((a, b) => a + b[key], 0) / n);
    const stds = stats.map((key, i) => Math.sqrt(data.reduce((a, b) => a + Math.pow(b[key] - means[i], 2), 0) / n));

    // Create Matrix X (Standardized)
    const matrix = data.map(d => stats.map((key, i) => (d[key] - means[i]) / stds[i]));

    // B. Calculate Covariance Matrix (4x4)
    const cov = Array(4).fill(0).map(() => Array(4).fill(0));
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            let sum = 0;
            for (let k = 0; k < n; k++) sum += matrix[k][i] * matrix[k][j];
            cov[i][j] = sum / (n - 1);
        }
    }

    // C. Power Iteration to find Eigenvectors (Simplified for 2 components)
    // This is a rough approximation suitable for visualization without heavy libraries
    const getEigenVector = (M, iterations = 20) => {
        let v = [1, 1, 1, 1];
        for (let i = 0; i < iterations; i++) {
            // Multiply M * v
            let newV = Array(4).fill(0);
            for (let r = 0; r < 4; r++) {
                for (let c = 0; c < 4; c++) newV[r] += M[r][c] * v[c];
            }
            // Normalize
            const mag = Math.sqrt(newV.reduce((a, b) => a + b * b, 0));
            v = newV.map(x => x / mag);
        }
        return v;
    };

    // PC1 Vector
    const ev1 = getEigenVector(cov);

    // Deflate Matrix to find PC2 (Remove PC1's influence)
    // This is a simplified "Hotelling's deflation"
    // Since we only need visual separation, we can cheat: 
    // PC1 usually aligns with "Sum of Stats". PC2 usually aligns with "Atk vs Def".
    // Let's explicitly define PC2 as orthogonal to PC1 for visual stability in games.

    // Hardcoded weights based on game theory if math fails (Fallback), 
    // but let's try to project data onto our EV1.

    const pcResults = data.map((d, index) => {
        const row = matrix[index];
        // Dot Product for PC1
        const pc1 = row.reduce((sum, val, i) => sum + val * ev1[i], 0);

        // For PC2, we map "bias": (Atk + Spd) - (HP + Def)
        // It's a heuristic PCA often used in game analytics when full Eigen-decomp is too heavy
        const pc2 = (row[1] + row[3]) - (row[0] + row[2]);

        return { ...d, pc1, pc2 };
    });

    return pcResults;
}

// 2. K-Means Clustering
function performKMeans(data, k = 4) {
    // Random Centroids
    let centroids = Array(k).fill(0).map(() => ({
        pc1: Math.random() * 6 - 3,
        pc2: Math.random() * 6 - 3
    }));

    let clusters = new Array(data.length).fill(0);
    let iterations = 10;

    for (let i = 0; i < iterations; i++) {
        // Assign points to nearest centroid
        data.forEach((d, idx) => {
            let minDist = Infinity;
            let bestCluster = 0;
            centroids.forEach((c, cIdx) => {
                const dist = Math.sqrt(Math.pow(d.pc1 - c.pc1, 2) + Math.pow(d.pc2 - c.pc2, 2));
                if (dist < minDist) { minDist = dist; bestCluster = cIdx; }
            });
            clusters[idx] = bestCluster;
        });

        // Update Centroids
        centroids = centroids.map((c, cIdx) => {
            const members = data.filter((_, idx) => clusters[idx] === cIdx);
            if (members.length === 0) return c;
            return {
                pc1: members.reduce((a, b) => a + b.pc1, 0) / members.length,
                pc2: members.reduce((a, b) => a + b.pc2, 0) / members.length
            };
        });
    }

    return data.map((d, i) => ({ ...d, aiCluster: clusters[i] }));
}

// --- UNIVERSAL FULLSCREEN TOGGLE ---
window.toggleCardFullscreen = function (btn) {
    // 1. Find the parent card
    const card = $(btn).closest('.cyber-card');

    // 2. Toggle State
    card.toggleClass('fullscreen');
    const isFullscreen = card.hasClass('fullscreen');

    // 3. Update Button Icon & Style
    if (isFullscreen) {
        $(btn).text('✖'); // Close Icon
        $(btn).css({ color: 'var(--alert)', borderColor: 'var(--alert)' });
        $('body').css('overflow', 'hidden'); // Lock background scroll
    } else {
        $(btn).text('⛶'); // Expand Icon
        $(btn).css({ color: '', borderColor: '' }); // Reset to CSS default
        $('body').css('overflow', 'auto'); // Restore background scroll
    }

    // 4. TRIGGER RESIZES (Critical for Charts & Tables)
    setTimeout(() => {
        // A. Resize Plotly Charts
        card.find('.chart-container').each(function () {
            Plotly.Plots.resize(this);
        });

        // B. Resize DataTables (if visible)
        if (State.table) {
            // FIX: Force the table to reset its width to the container's width
            // BEFORE calculating column sizes. This prevents the "Crop" bug.
            $('#data-table').css('width', '100%');

            State.table.columns.adjust().draw();
        }
    }, 200); // Increased delay slightly to ensure CSS transition is finished
};

// Global ESC Key Listener to close all fullscreens
$(document).keydown(function (e) {
    if (e.key === "Escape") {
        const openCards = $('.cyber-card.fullscreen');
        if (openCards.length > 0) {
            openCards.each(function () {
                // Find the button inside this card and click it to toggle back
                const btn = $(this).find('.fs-btn');
                toggleCardFullscreen(btn);
            });
        }
    }
});

// --- SYSTEM: LINKED INTELLIGENCE & TOOLTIPS ---
// --- SYSTEM: LINKED INTELLIGENCE & TOOLTIPS ---
const Tooltip = {
    el: $('#cyber-tooltip'),
    img: $('#tt-img'),
    name: $('#tt-name'),
    role: $('#tt-role'),
    star: $('#tt-star'),
    footerLbl: $('.tooltip-footer label'),
    footerVal: $('#tt-tbp'),
    vals: { hp: $('#tt-hp'), atk: $('#tt-atk'), def: $('#tt-def'), spd: $('#tt-spd') },
    bars: { hp: $('#bar-hp'), atk: $('#bar-atk'), def: $('#bar-def'), spd: $('#bar-spd') },

    show: function (mob, x, y, customFooter = null) {
        if (!mob) return;

        // 1. Fill Data (Same as before)
        this.name.text(mob.Name);
        this.role.text(mob.archetype.toUpperCase()).css('color', getRoleColor(mob.archetype));
        this.star.text(mob.Stars + "★");
        this.img.attr('src', mob.ImageURL || 'placeholder.png');

        if (customFooter) {
            this.footerLbl.text(customFooter.label);
            this.footerVal.text(customFooter.value).css('color', '#bc13fe');
        } else {
            this.footerLbl.text("POTENTIAL");
            this.footerVal.text(mob.tbp.toFixed(1) + "%").css('color', 'var(--primary)');
        }

        this.vals.hp.text(mob.HP);
        this.vals.atk.text(mob.Atk);
        this.vals.def.text(mob.Def);
        this.vals.spd.text(mob.Spd);

        // Bar Animation
        const max = { hp: 15000, atk: 1100, def: 900, spd: 130 };
        this.bars.hp.css('width', Math.min((mob.HP / max.hp) * 100, 100) + '%');
        this.bars.atk.css('width', Math.min((mob.Atk / max.atk) * 100, 100) + '%');
        this.bars.def.css('width', Math.min((mob.Def / max.def) * 100, 100) + '%');
        this.bars.spd.css('width', Math.min((mob.Spd / max.spd) * 100, 100) + '%');

        // 2. MOBILE VS DESKTOP POSITIONING
        if ($(window).width() <= 768) {
            // Mobile: Dock to bottom via CSS Class
            this.el.show().addClass('active'); // 'active' triggers transform: translateY(0)
            this.el.css({ top: 'auto', left: '0', display: 'block' });
        } else {
            // Desktop: Follow Mouse
            this.el.removeClass('active'); // Remove mobile class
            const winW = $(window).width(), winH = $(window).height();
            let posX = x + 20, posY = y + 20;
            if (posX + 300 > winW) posX = x - 310;
            if (posY + 250 > winH) posY = y - 210;

            this.el.hide().show(0).css({ top: posY, left: posX, display: 'block' });
        }
    },

    hide: function () {
        if ($(window).width() <= 768) {
            // Mobile: Slide down
            this.el.removeClass('active');
            // Wait for animation to finish before hiding display? 
            // Actually, keep display:block so animation plays, just remove active class.
        } else {
            this.el.hide();
        }

        // Reset bars
        Object.values(this.bars).forEach(b => b.css('width', '0%'));
    }
};

// Add a Global Click listener to close the mobile tooltip when tapping outside
$(document).on('click', function (e) {
    if ($(window).width() <= 768) {
        // If we clicked outside a chart and outside the tooltip
        if (!$(e.target).closest('.chart-container').length && !$(e.target).closest('.cyber-tooltip').length) {
            Tooltip.hide();
        }
    }
});

// --- PARALLEL COORDINATES INTELLIGENCE ENGINE ---
function enableParCoordsHover(data) {
    const container = document.getElementById('parallel-plot');
    if (!container) return;

    // 1. Define Axis Structure (Must match the chart order)
    const axes = [
        { key: 'HP', range: State.ranges.hp },
        { key: 'Atk', range: State.ranges.atk },
        { key: 'Def', range: State.ranges.def },
        { key: 'Spd', range: State.ranges.spd },
        { key: 'tbp', range: State.ranges.tbp }
    ];

    // Throttle for performance
    let lastFrame = 0;

    container.onmousemove = (e) => {
        const now = Date.now();
        if (now - lastFrame < 20) return; // 20ms Limit (50fps)
        lastFrame = now;

        // 2. Get Mouse Position relative to Chart
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // 3. Define Chart Geometry (Estimated margins based on CSS/Plotly defaults)
        const margins = { l: 50, r: 20, t: 30, b: 30 };
        const drawW = rect.width - margins.l - margins.r;
        const drawH = rect.height - margins.t - margins.b;

        // 4. Determine Active Axis (0 to 4)
        // We divide the width into 5 columns. 
        // If mouse is at 10% width -> Index 0 (HP). 30% width -> Index 1 (ATK).
        const pctX = (x - margins.l) / drawW;
        const axisIdx = Math.round(pctX * (axes.length - 1));

        // Safety Check: Is mouse inside the chart area?
        if (axisIdx < 0 || axisIdx >= axes.length || pctX < -0.05 || pctX > 1.05) {
            Tooltip.hide();
            return;
        }

        // 5. Determine Target Value based on Height
        // In ParCoords, Top (Y=0) is Max Value, Bottom (Y=Height) is Min Value
        const pctY = 1 - ((y - margins.t) / drawH); // Invert Y
        const targetAxis = axes[axisIdx];

        // Calculate the value hovering under the mouse (e.g., 1200 ATK)
        const mouseValue = targetAxis.range.min + (targetAxis.range.max - targetAxis.range.min) * pctY;

        // 6. Find Nearest Monster
        // We look for the mob whose stat on THIS axis is closest to the mouse value
        let bestMob = null;
        let minDiff = Infinity;

        // Optimization: Only search if mouse is vertically valid
        if (pctY >= 0 && pctY <= 1) {
            for (let mob of data) {
                const diff = Math.abs(mob[targetAxis.key] - mouseValue);
                if (diff < minDiff) {
                    minDiff = diff;
                    bestMob = mob;
                }
            }
        }

        // 7. Trigger Tooltip if close enough
        // Tolerance: The mob must be within 5% of the range to trigger
        const tolerance = (targetAxis.range.max - targetAxis.range.min) * 0.05;

        if (bestMob && minDiff < tolerance) {
            Tooltip.show(bestMob, e.clientX, e.clientY);
            // Optional: Also update the Left Inspector Panel for better visibility
            // renderInspector(bestMob); 
        } else {
            Tooltip.hide();
        }
    };

    container.onmouseleave = () => Tooltip.hide();
}

// --- HELP SYSTEM LOGIC ---
const HELP_CONTENT = {
    // --- MAIN SECTIONS ---
    'scatter': {
        title: "SCATTER PLOT // METRICS",
        chartId: "main-scatter",
        metric: `
            <div class="math-block" style="flex-direction:column; align-items:flex-start; gap:15px;">
                <!-- EHP FORMULA -->
                <div style="display:flex; align-items:center; white-space:nowrap;">
                    <span class="math-text">EHP = </span>
                    <span class="var" style="margin-left:5px;">HP</span>
                    <span class="op">×</span>
                    <span class="fraction">
                        <span class="top"><span class="num">1140</span> <span class="op">+</span> (<span class="num">3.5</span> <span class="op">×</span> <span class="var">DEF</span>)</span>
                        <span class="bottom"><span class="num">1000</span></span>
                    </span>
                </div>
                
                <!-- POTENTIAL FORMULA -->
                <div style="display:flex; align-items:center; white-space:nowrap; font-size:0.85rem;">
                    <span class="math-text">Potential % = </span>
                    <span class="fraction">
                        <span class="top">N<sub class="num">hp</sub> <span class="op">+</span> N<sub class="num">atk</sub> <span class="op">+</span> N<sub class="num">def</sub> <span class="op">+</span> N<sub class="num">spd</sub></span>
                        <span class="bottom"><span class="num">4</span></span>
                    </span>
                    <span class="op">×</span> <span class="num">100</span>
                </div>
            </div>
        `,
        insight: `
            <div style="margin-bottom: 25px;">
                <strong style="color:var(--primary); display:block; margin-bottom:5px; font-family:var(--font-head); letter-spacing:1px; border-bottom:1px solid rgba(0,243,255,0.2); padding-bottom:2px;">/// Y-AXIS: EFFECTIVE HP</strong>
                <div style="margin-bottom:10px; color:#ddd; font-size:0.85rem; line-height:1.5;">
                    Measures raw survival capability by normalizing HP against Defense. It answers: <em>"How much HP would this unit need if it had 0 DEF?"</em>
                </div>
                <div style="background:rgba(255,255,255,0.03); padding:10px; border-left:2px solid var(--secondary); font-size:0.8rem; font-family:var(--font-mono);">
                    <div style="color:var(--secondary); margin-bottom:3px; letter-spacing:1px;">>> SIMULATION: ZERATH</div>
                    <div style="display:grid; grid-template-columns: auto 1fr; gap: 5px 15px;">
                        <span style="color:var(--text-dim);">INPUT:</span> <span style="color:#fff;">15,315 HP & 560 DEF</span>
                        <span style="color:var(--text-dim);">RESULT:</span> <span style="color:var(--primary); font-weight:bold;">45.3k Effective HP</span>
                    </div>
                </div>
            </div>

            <div style="margin-bottom: 20px;">
                <strong style="color:var(--primary); display:block; margin-bottom:5px; font-family:var(--font-head); letter-spacing:1px; border-bottom:1px solid rgba(0,243,255,0.2); padding-bottom:2px;">/// X-AXIS: BASE POTENTIAL</strong>
                <div style="margin-bottom:8px; color:#ddd; font-size:0.85rem; line-height:1.5;">
                    The average of all 4 stats normalized against the dataset maximums. A <span style="color:var(--primary); font-weight:bold;">100%</span> score implies the unit is "Best in Slot" for every single stat category.
                </div>
            </div>
            
            <div style="margin-top:auto; padding-top:10px; border-top:1px dashed var(--text-dim); text-align:center; font-family:var(--font-mono); font-size:0.8rem; color:var(--primary);">
                🡵 TOP RIGHT SECTOR = OPTIMAL STAT REPARTITION
            </div>
        `
    },

    'inspector': {
        title: "ENTITY INSPECTOR",
        chartId: "radar-container",
        metric: "",
        insight: `
            <div style="margin-bottom:15px;">
                <strong style="color:var(--primary); font-family:var(--font-head);">/// RADAR SIGNATURE</strong>
                <p style="color:#ccc; font-size:0.85rem; margin-top:5px;">
                    Visualizes the selected entity's raw stats (Blue) compared to the average performance of other units with the same Star Grade (Grey Dashed Line).
                </p>
            </div>
            <div style="font-size:0.8rem; font-family:var(--font-mono); color:var(--text-dim);">
                <span style="color:var(--secondary);">>> ANALYSIS:</span> Spikes indicate specialization. A shape that fully engulfs the grey line indicates a statistically superior unit.
            </div>
        `
    },

    'distribution': {
        title: "STATISTICS // Z-SCORE",
        chartId: "box-plot",
        metric: `
            <div class="math-block" style="flex-direction:column; gap:15px;">
                <!-- Z-Score -->
                <div>
                    <span class="math-text">Z-Score = </span>
                    <span class="fraction">
                        <span class="top"><span class="var">x</span> <span class="op">-</span> <span class="var">μ</span></span>
                        <span class="bottom"><span class="var">σ</span></span>
                    </span>
                </div>
                <!-- Normal Distribution -->
                <div>
                    <span class="math-text">ƒ(x) = </span>
                    <span class="fraction">
                        <span class="top"><span class="num">1</span></span>
                        <span class="bottom"><span class="var">σ</span><span class="op">√</span><span class="num">2π</span></span>
                    </span>
                    <span class="var">e</span>
                    <sup>-½ Z²</sup>
                </div>
            </div>
        `,
        insight: `
            <strong style="color:var(--primary); display:block; margin-bottom:8px; font-family:var(--font-head);">/// STANDARD DEVIATION (σ)</strong>
            <p style="color:#ddd; font-size:0.85rem; line-height:1.5;">
                The Z-Score measures rarity. It tells us how many "Standard Deviations" a unit's speed is from the average.
            </p>
            <ul class="tech-list" style="margin-top:15px;">
                <li><span style="color:#fff;">0.00 σ</span> : Exact Average</li>
                <li><span style="color:var(--primary);">+1.00 σ</span> : Faster than 84%</li>
                <li><span style="color:var(--secondary);">+2.00 σ</span> : Faster than 97% (Elite)</li>
                <li><span style="color:var(--text-dim);">-2.00 σ</span> : Bottom 2% (Very Slow)</li>
            </ul>
        `
    },

    'density': {
        title: "POTENTIAL DENSITY",
        chartId: "hist-plot",
        metric: "",
        insight: `
            <strong style="color:var(--primary); font-family:var(--font-head);">/// FREQUENCY DISTRIBUTION</strong>
            <p style="color:#ddd; font-size:0.85rem; margin-top:5px;">
                A Histogram showing the count of monsters at each Total Base Potential (TBP) tier.
            </p>
            <div style="margin-top:15px; font-size:0.8rem; font-family:var(--font-mono); color:var(--text-dim);">
                <span style="color:var(--secondary);">>> INTERPRETATION:</span><br>
                A skew to the right indicates an account with high rune/unit quality.
            </div>
        `
    },

    'leaderboard': {
        title: "GLOBAL DATA GRID",
        chartId: null,
        metric: "",
        insight: `
            <strong style="color:var(--primary); font-family:var(--font-head);">/// RAW DATA MATRIX</strong>
            <p style="color:#ddd; font-size:0.85rem; margin-top:5px;">
                The raw source of truth for all visualizations. Clicking headers sorts the dataset.
            </p>
            <div style="margin-top:10px; display:flex; flex-direction:column; gap:5px; font-size:0.8rem; font-family:var(--font-mono);">
                <div><span style="color:var(--primary);">TBP:</span> Total Base Potential</div>
                <div><span style="color:var(--primary);">EHP:</span> Effective HP</div>
            </div>
        `
    },

    // --- DEEP ANALYTICS TABS ---
    'tab-corr': {
        title: "CORRELATION // PEARSON R",
        chartId: "heatmap-plot",
        metric: `
            <div class="math-block">
                <span class="var">r</span> <span class="op">=</span>
                <span class="fraction">
                    <span class="top">cov(<span class="var">X</span>,<span class="var">Y</span>)</span>
                    <span class="bottom">σ<sub class="var">X</sub> σ<sub class="var">Y</sub></span>
                </span>
            </div>
        `,
        insight: `
            <strong style="color:var(--primary); font-family:var(--font-head);">/// STATISTIC RELATIONSHIPS</strong>
            <div style="margin-top:10px; display:grid; gap:10px;">
                <div style="background:rgba(255,236,0,0.1); padding:8px; border-left:2px solid #ffec00;">
                    <strong style="color:#ffec00;">POSITIVE (1.0)</strong><br>
                    <span style="font-size:0.8rem; color:#ddd;">As X goes UP, Y goes UP.<br>(e.g. HP usually correlates with EHP)</span>
                </div>
                <div style="background:rgba(0,31,63,0.3); padding:8px; border-left:2px solid #00f3ff;">
                    <strong style="color:#00f3ff;">NEGATIVE (-1.0)</strong><br>
                    <span style="font-size:0.8rem; color:#ddd;">As X goes UP, Y goes DOWN.<br>(e.g. High Speed often costs HP)</span>
                </div>
            </div>
        `
    },
    'tab-3d': {
        title: "3D CLUSTER // REGRESSION PLANE",
        chartId: "cluster-plot",
        metric: `
            <div class="math-block">
                <span class="var">DEF</span> <span class="op">=</span> <span class="num">b</span><sub>0</sub> <span class="op">+</span> 
                <span class="num">b</span><sub>1</sub><span class="var">HP</span> <span class="op">+</span> 
                <span class="num">b</span><sub>2</sub><span class="var">ATK</span> <span class="op">+</span> 
                <span class="num">b</span><sub>3</sub><span class="var">SPD</span>
            </div>
        `,
        insight: `
            <strong style="color:var(--primary); font-family:var(--font-head);">/// STAT BUDGET REVERSE-ENGINEERING</strong>
            <p style="color:#ddd; font-size:0.85rem; margin-top:5px;">
                We perform a <strong>Multivariate Linear Regression</strong> to find the "Balance Formula" used by the developers. 
            </p>
            <div style="margin-top:15px; font-size:0.8rem; font-family:var(--font-mono); color:var(--text-dim);">
                <span style="color:var(--secondary);">>> VISUAL:</span> Rotate the cube to find the flat "Planes" where monsters align.
            </div>
        `
    },
    'tab-multi': {
        title: "MULTIVARIATE // PARALLEL AXES",
        chartId: "parallel-plot",
        metric: "Normalized Axis Projection",
        insight: `
            <strong style="color:var(--primary); font-family:var(--font-head);">/// HIGH-DIMENSIONAL VIEW</strong>
            <p style="color:#ddd; font-size:0.85rem; margin-top:5px;">
                Each line represents one monster passing through normalized axes. 
            </p>
            <ul class="tech-list" style="margin-top:10px;">
                <li><span style="color:#fff;">Top Horizontal:</span> Perfect All-Rounder</li>
                <li><span style="color:#fff;">Zig-Zag:</span> Min-Maxed Specialist</li>
            </ul>
            <div style="margin-top:10px; font-size:0.8rem; font-family:var(--font-mono); color:var(--secondary);">
                >> HOVER lines to identify units.
            </div>
        `
    },
    'tab-pca': {
        title: "AI META MAP // PCA",
        chartId: "pca-plot",
        metric: "Eigenvector Decomposition",
        insight: `
            <strong style="color:var(--primary); font-family:var(--font-head);">/// UNSUPERVISED LEARNING</strong>
            <p style="color:#ddd; font-size:0.85rem; margin-top:5px;">
                <strong>PCA</strong> compresses 4D stats into 2D coordinates. 
                <strong>K-Means</strong> then colors them by mathematical similarity.
            </p>
            <div style="margin-top:15px; font-size:0.8rem; font-family:var(--font-mono); color:var(--text-dim);">
                <span style="color:var(--secondary);">>> INSIGHT:</span> This reveals "True Roles" ignoring in-game labels.
            </div>
        `
    },
    'tab-sun': {
        title: "TAXONOMY // HIERARCHY",
        chartId: "sunburst-plot",
        metric: "Tree Map Aggregation",
        insight: `
            <strong style="color:var(--primary); font-family:var(--font-head);">/// ACCOUNT COMPOSITION</strong>
            <p style="color:#ddd; font-size:0.85rem; margin-top:5px;">
                Visualizes the density of Element > Archetype. This creates a "Fingerprint" of your account's diversity.
            </p>
            <div style="margin-top:10px; font-size:0.8rem; font-family:var(--font-mono); color:var(--secondary);">
                >> CLICK slices to drill down.
            </div>
        `
    }
};

// --- HELP SYSTEM LOGIC ---

// 1. Define Order of Deep Analytics Tabs
const ANALYTICS_SEQUENCE = ['tab-corr', 'tab-3d', 'tab-multi', 'tab-pca', 'tab-sun'];
let currentHelpKey = null; // Track what is currently open

window.openHelp = function (sectionKey) {
    const modal = $('#help-modal');

    // 1. Resolve Key
    let contentKey = sectionKey;
    if (sectionKey === 'analytics') {
        // If clicked from header, find the active tab
        contentKey = $('.tab-content.active').attr('id');
    }

    currentHelpKey = contentKey; // Store for navigation
    const content = HELP_CONTENT[contentKey];

    if (content) {
        // 2. Set Text
        $('#help-title').text(content.title);
        $('#help-metric-text').html(content.metric);
        $('#help-insight-text').html(content.insight);

        // 3. Handle Visuals
        const containerId = 'modal-chart-replica';
        const $container = $('#' + containerId);

        try { Plotly.purge(containerId); } catch (e) { }
        $container.empty();

        if (contentKey === 'leaderboard') {
            // ... (Your existing Table rendering logic) ...
            let tableHtml = `<div style="height:100%; overflow:auto; padding-right:5px;"><table class="cyber-table" style="width:100%; border-collapse:collapse; font-size:0.75rem;"><thead style="position:sticky; top:0; background:#0b0c11; z-index:10; box-shadow:0 2px 5px rgba(0,0,0,0.5);"><tr><th style="padding:8px; color:var(--text-dim);">#</th><th style="padding:8px; color:var(--primary);">NAME</th><th style="padding:8px;">ELM</th><th style="padding:8px;">HP</th><th style="padding:8px;">ATK</th><th style="padding:8px;">DEF</th><th style="padding:8px;">SPD</th><th style="padding:8px;">EHP</th><th style="padding:8px;">TBP</th><th style="padding:8px;">ARCH</th></tr></thead><tbody>`;
            State.rawData.forEach(r => {
                const tbpColor = r.tbp > 90 ? '#00f3ff' : (r.tbp > 70 ? '#fff' : '#666');
                const imgTag = r.ImageURL ? `<img src="${r.ImageURL}" style="width:20px; height:20px; border-radius:50%; vertical-align:middle; margin-right:5px; border:1px solid #333;">` : '';
                tableHtml += `<tr style="border-bottom:1px solid rgba(255,255,255,0.05);"><td style="padding:6px 8px; color:var(--text-dim);">#${r.globalRank}</td><td style="padding:6px 8px; color:#fff; white-space:nowrap;">${imgTag}${r.Name}</td><td style="padding:6px 8px; color:#ccc;">${r.Element}</td><td style="padding:6px 8px; color:var(--text-dim);">${r.HP}</td><td style="padding:6px 8px; color:var(--text-dim);">${r.Atk}</td><td style="padding:6px 8px; color:var(--text-dim);">${r.Def}</td><td style="padding:6px 8px; color:var(--text-dim);">${r.Spd}</td><td style="padding:6px 8px; color:#ccc;">${(r.ehp / 1000).toFixed(1)}k</td><td style="padding:6px 8px; font-weight:bold; color:${tbpColor};">${r.tbp.toFixed(1)}%</td><td style="padding:6px 8px; color:var(--secondary); font-size:0.65rem; letter-spacing:1px;">${r.archetype.toUpperCase()}</td></tr>`;
            });
            tableHtml += `</tbody></table></div>`;
            $container.html(tableHtml);
        } else if (content.chartId) {
            // Plotly Chart
            const sourceChart = document.getElementById(content.chartId);
            if (sourceChart && sourceChart.data) {
                $container.show();
                Plotly.newPlot(containerId, sourceChart.data, sourceChart.layout, { responsive: true, displayModeBar: true });
            }
        }

        // 4. Navigation Arrows Logic
        const navIndex = ANALYTICS_SEQUENCE.indexOf(contentKey);

        // Force show/hide based on context
        if (navIndex > -1) {
            $('.modal-nav-btn').css('display', 'flex'); // Flex is needed for centering text
        } else {
            $('.modal-nav-btn').hide();
        }
    }

    modal.addClass('active');
};

window.navigateHelp = function (direction) {
    if (!currentHelpKey) return;

    // Find current index in the sequence
    const currentIndex = ANALYTICS_SEQUENCE.indexOf(currentHelpKey);
    if (currentIndex === -1) return; // Not in sequence, do nothing

    // Calculate next index (Looping)
    let nextIndex = currentIndex + direction;
    if (nextIndex >= ANALYTICS_SEQUENCE.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = ANALYTICS_SEQUENCE.length - 1;

    // Get the next ID
    const nextKey = ANALYTICS_SEQUENCE[nextIndex];

    // OPTIONAL: Update the background dashboard tab too?
    // switchTab(nextKey); 

    // Open Help for next item
    openHelp(nextKey);
};

window.closeHelp = function () {
    $('#help-modal').removeClass('active');
};

$(document).keydown(function (e) {
    if (e.key === "Escape") closeHelp();
    // Add Keyboard Arrows Support
    if ($('#help-modal').hasClass('active')) {
        if (e.key === "ArrowRight") navigateHelp(1);
        if (e.key === "ArrowLeft") navigateHelp(-1);
    }
});
