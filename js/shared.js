/* ============================================================
   Nigeria Integrated National Financing Framework — Shared JavaScript Helpers

   CONTAINS:
   - HTML partial loader for shared UI components
   - Active navigation highlighting
   - Chart.js default configuration
   - mkChart()   : create/update a chart by canvas ID
   - barCfg()    : vertical bar chart config builder
   - hbarCfg()   : horizontal bar chart config builder
   - donutCfg()  : donut/pie chart config builder
   - fmt()       : number formatter  e.g. 2.4 → "$2.4B"
   - r1()        : round to 1 decimal place
   - trend()     : calculate % change between two values
   ============================================================ */

(function () {

  window.INFF_BASE_URL = new URL('./', document.baseURI).href;

  function ensureStickyNav() {
    if (!document.getElementById('shared-sticky-nav-fix')) {
      const style = document.createElement('style');
      style.id = 'shared-sticky-nav-fix';
      style.textContent = `
        #nav-placeholder{position:sticky;top:0;z-index:500;}
        #nav-placeholder > .topnav{position:relative !important;top:0 !important;z-index:500 !important;}
      `;
      document.head.appendChild(style);
    }
  }

  function initSharedUi() {
    const includeNodes = Array.from(document.querySelectorAll('[data-include]'));
    const jobs = includeNodes.map(async (node) => {
      const file = node.getAttribute('data-include');
      if (!file) return;
      const url = new URL(file, document.baseURI).href;
      const cacheKey = 'inff:partial:' + url;
      try {
        const cached = sessionStorage.getItem(cacheKey);
        if (cached) {
          node.innerHTML = cached;
        }
      } catch (_) {}
      if (node.innerHTML.trim()) return;
      try {
        const res = await fetch(url, { cache: 'default' });
        if (!res.ok) throw new Error(`Failed to load ${file}: ${res.status}`);
        const html = await res.text();
        node.innerHTML = html;
        try { sessionStorage.setItem(cacheKey, html); } catch (_) {}
      } catch (err) {
        console.error('Shared include failed:', err);
      }
    });

    Promise.all(jobs).then(() => {
      const navKey = document.body?.dataset?.nav || '';
      const idMap = {
        overview: 'nav-overview',
        bb: 'nav-bb',
        analytics: 'nav-analytics',
        knowledge: 'nav-knowledge',
        downloads: 'nav-downloads'
      };
      const navId = idMap[navKey];
      if (navId) {
        const activeLink = document.getElementById(navId);
        if (activeLink) activeLink.classList.add('active');
      }
      ensureStickyNav();
      manageBuildingBlockStickyStack();
      document.dispatchEvent(new CustomEvent('shared:loaded'));
    });
  }



  function manageBuildingBlockStickyStack() {
    return;
  }

  function initP1SmoothCollapse() {
    if (document.body?.dataset?.nav !== 'bb') return;
    const update = () => {
      const y = window.pageYOffset || document.documentElement.scrollTop || 0;
      document.body.classList.toggle('bb-compact', y > 52);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
  }

  document.addEventListener('DOMContentLoaded', function () {
    ensureStickyNav();
    initSharedUi();
    manageBuildingBlockStickyStack();
    initP1SmoothCollapse();
  });

  if (window.Chart) {
    Chart.defaults.font.family = "'Sora', sans-serif";
    Chart.defaults.font.size = 11;
    Chart.defaults.color = '#8888a0';
    Chart.defaults.animation = { duration: 1400, easing: 'easeOutQuart' };
    Chart.defaults.animations = {
      y: { from: 0, duration: 1400, easing: 'easeOutQuart' },
      x: { duration: 700, easing: 'easeOutQuart' }
    };
  }

  const GRID = '#eef0f3';
  window.GRID = GRID;

  window.fmt = function fmt(n, unit = 'B') {
    if (n === null || n === undefined || isNaN(n)) return '—';
    if (unit === 'B') {
      if (n >= 1000) return '$' + (n / 1000).toFixed(1) + 'T';
      if (n >= 1) return '$' + n.toFixed(1) + 'B';
      return '$' + (n * 1000).toFixed(0) + 'M';
    }
    return n.toFixed(1) + '%';
  };

  window.r1 = function r1(n) { return Math.round(n * 10) / 10; };

  window.trend = function trend(base, growth, seed) {
    return YEARS.map((_, i) => r1(base * (1 + growth * i) * (1 + (Math.sin(i * 2.1 + seed) * 0.08))));
  };

  window.mkChart = function mkChart(id, cfg) {
    if (!window.Chart) return null;
    const el = document.getElementById(id);
    if (!el) return null;
    if (el._chart) el._chart.destroy();
    const c = new Chart(el, cfg);
    el._chart = c;
    return c;
  };

  window.barCfg = function barCfg(labels, datasets, opts = {}) {
    return {type:'bar',data:{labels,datasets},options:{
      plugins:{legend:{display:false}},
      scales:{
        x:{stacked:opts.stacked||false,grid:{display:false},ticks:{font:{size:10}}},
        y:{stacked:opts.stacked||false,grid:{color:GRID},ticks:{callback:opts.yfmt||(v=>v),font:{size:10}}}
      },animation:{duration:1400,easing:'easeOutQuart'},responsive:true,maintainAspectRatio:false
    }};
  };

  window.hbarCfg = function hbarCfg(labels, datasets, opts = {}) {
    return {type:'bar',data:{labels,datasets},options:{
      indexAxis:'y',
      plugins:{legend:{display:false}},
      scales:{
        x:{grid:{color:GRID},ticks:{callback:opts.yfmt||(v=>v),font:{size:10}}},
        y:{grid:{display:false},ticks:{font:{size:10}}}
      },animation:{duration:1400,easing:'easeOutQuart'},responsive:true,maintainAspectRatio:false
    }};
  };

  window.donutCfg = function donutCfg(data, colors, cutout = '68%') {
    return {type:'doughnut',data:{datasets:[{data,backgroundColor:colors,borderWidth:0}]},
      options:{plugins:{legend:{display:false}},animation:{duration:1400,easing:'easeOutQuart'},cutout,responsive:true,maintainAspectRatio:false}};
  };

  const P = [
    '#5B9FA6',
    '#D4956A',
    '#7AAF8A',
    '#6B8CAE',
    '#B08AC9',
    '#C9956A',
    '#8AAFAA',
    '#A89F7A',
  ];
  window.P = P;
  window.PA = P.map(c => c + 'BB');

  const YEARS = [2020, 2021, 2022, 2023, 2024, 2025];
  window.YEARS = YEARS;
  window.YLABELS = YEARS.map(String);

  window.gapColor = function gapColor(pct) {
    if (pct > 60) return '#b05a4a';
    if (pct > 45) return '#D4956A';
    if (pct > 30) return '#7AAF8A';
    return '#c8e8ea';
  };
})();
