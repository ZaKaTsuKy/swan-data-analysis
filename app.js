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
}
