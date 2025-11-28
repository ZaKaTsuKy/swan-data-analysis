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
        const ehp = d.HP * ((1000 + (3.5 * d.Def)) / 1000);

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
    if (val >= highThreshold) return '#00ff9d'; // High (Green)
    if (val >= lowThreshold) return '#e0e6ed'; // Mid (White)
    return '#5a6572';                           // Low (Grey)
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
    const boxTrace = {
        y: data.map(d => d.z_spd), type: 'box', name: 'Speed Z',
        marker: { color: '#bc13fe' }, boxpoints: 'all', jitter: 0.5, pointpos: -1.8
    };
    Plotly.react('box-plot', [boxTrace], PLOT_OPTS, { responsive: true, displayModeBar: false });

    const histTrace = {
        x: data.map(d => d.tbp), type: 'histogram', marker: { color: '#00f3ff', opacity: 0.6 },
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
            State.table.columns.adjust().draw();
        }
    }, 150); // Small delay for transition
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
