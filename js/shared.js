/* ============================================================
   Nigeria Integrated National Financing Framework — Shared JavaScript Helpers
   
   CONTAINS:
   - Chart.js default configuration
   - mkChart()   : create/update a chart by canvas ID
   - barCfg()    : vertical bar chart config builder  
   - hbarCfg()   : horizontal bar chart config builder
   - donutCfg()  : donut/pie chart config builder
   - fmt()       : number formatter  e.g. 2.4 → "$2.4B"
   - r1()        : round to 1 decimal place
   - trend()     : calculate % change between two values
   ============================================================ */

Chart.defaults.font.family = "'Sora', sans-serif";
Chart.defaults.font.size = 11;
Chart.defaults.color = '#8888a0';
const GRID = '#eef0f3';

function fmt(n,unit='B'){
  if(n===null||n===undefined||isNaN(n))return'—';
  if(unit==='B'){
    if(n>=1000)return'$'+(n/1000).toFixed(1)+'T';
    if(n>=1)return'$'+n.toFixed(1)+'B';
    return'$'+(n*1000).toFixed(0)+'M';
  }
  return n.toFixed(1)+'%';
}
function r1(n){return Math.round(n*10)/10;}
function trend(base,growth,seed){
  return YEARS.map((_,i)=>r1(base*(1+growth*i)*(1+(Math.sin(i*2.1+seed)*0.08))));
}
function mkChart(id,cfg){
  const el=document.getElementById(id);
  if(!el)return null;
  if(el._chart)el._chart.destroy();
  const c=new Chart(el,cfg);
  el._chart=c;
  return c;
}
function barCfg(labels,datasets,opts={}){
  return{type:'bar',data:{labels,datasets},options:{
    plugins:{legend:{display:false}},
    scales:{
      x:{stacked:opts.stacked||false,grid:{display:false},ticks:{font:{size:10}}},
      y:{stacked:opts.stacked||false,grid:{color:GRID},ticks:{callback:opts.yfmt||(v=>v),font:{size:10}}}
    },responsive:true,maintainAspectRatio:false
  }};
}
function hbarCfg(labels,datasets,opts={}){
  return{type:'bar',data:{labels,datasets},options:{
    indexAxis:'y',
    plugins:{legend:{display:false}},
    scales:{
      x:{grid:{color:GRID},ticks:{callback:opts.yfmt||(v=>v),font:{size:10}}},
      y:{grid:{display:false},ticks:{font:{size:10}}}
    },responsive:true,maintainAspectRatio:false
  }};
}
function donutCfg(data,colors,cutout='68%'){
  return{type:'doughnut',data:{datasets:[{data,backgroundColor:colors,borderWidth:0}]},
    options:{plugins:{legend:{display:false}},cutout,responsive:true,maintainAspectRatio:false}};
}

/* ============================================================
   CHART COLOUR PALETTE
   These are the muted qualitative colours used in all charts.
   Change here to update charts across all pages.
   NOTE: Do NOT use purple in charts — purple is reserved
   for navigation and brand elements only.
   ============================================================ */
const P = [
  '#5B9FA6', // Dusty Teal    (primary chart colour)
  '#D4956A', // Warm Sand     (secondary)
  '#7AAF8A', // Sage Green    (tertiary)
  '#6B8CAE', // Dusty Blue    (quaternary)
  '#B08AC9', // Soft Lavender
  '#C9956A', // Terracotta
  '#8AAFAA', // Seafoam
  '#A89F7A', // Warm Olive
];


const PA = P.map(c => c + 'BB');

const YEARS   = [2020, 2021, 2022, 2023, 2024, 2025];
const YLABELS = YEARS.map(String);

/* Gap colour helper — used in geographic pages */
function gapColor(pct) {
  if (pct > 60) return '#b05a4a';
  if (pct > 45) return '#D4956A';
  if (pct > 30) return '#7AAF8A';
  return '#c8e8ea';
}
