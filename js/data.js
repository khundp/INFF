/* ============================================================
   Nigeria Integrated National Financing Framework — Data Module
   Split into focused files for safer maintenance.
   This file reassembles the global INFF object from:
   - js/data/meta.js
   - js/data/kpis.js
   - js/data/byYear.js
   - js/data/bySector.js
   - js/data/states.js
   - js/data/projects.js
   - js/data/reforms.js
   ============================================================ */

(function (global) {
  const parts = global.INFF_DATA_PARTS || {};

  const INFF = {
    meta: parts.meta || {},
    kpis: parts.kpis || {},
    byYear: parts.byYear || {},
    bySector: parts.bySector || {},
    states: parts.states || {},
    projects: parts.projects || [],
    reforms: parts.reforms || [],

    // ── Helpers ──
      stateList() {
        return Object.values(this.states).sort((a,b)=>a.name.localeCompare(b.name));
      },

      getNational(year, sectorCode) {
        const y = String(year || this.meta.latestYear);
        if (sectorCode && sectorCode !== 'ALL') {
          let need=0,mob=0,gap=0,dp=0,priv=0,ip=0,ipriv=0;
          Object.values(this.states).forEach(st => {
            const s = st.byYear?.[y]?.sectors?.[sectorCode];
            if(s){ need+=s.need; mob+=s.mob; gap+=s.gap; }
            const ya = st.byYear?.[y];
            if(ya){ dp+=ya.dp; priv+=ya.priv; ip+=ya.ip; ipriv+=ya.ipriv; }
          });
          const r1=n=>Math.round(n*10)/10;
          return {need:r1(need),mob:r1(mob),gap:r1(gap),
                  gapPct:need?r1(gap/need*100):0, gapClosed:need?r1(mob/need*100):0,
                  dp:r1(dp),priv:r1(priv),ip:r1(ip),ipriv:r1(ipriv)};
        }
        return this.byYear[y] || this.byYear['2025'];
      },

      getState(stateCode, year, sectorCode) {
        const st = this.states[stateCode];
        if(!st) return null;
        const y = String(year || this.meta.latestYear);
        if(sectorCode && sectorCode !== 'ALL')
          return st.byYear?.[y]?.sectors?.[sectorCode] || null;
        return st.byYear?.[y] || null;
      },

      timeSeries(metric, stateCode, sectorCode) {
        return this.meta.years.map(yr => {
          const d = stateCode
            ? this.getState(stateCode, yr, sectorCode)
            : this.getNational(yr, sectorCode);
          return d?.[metric] ?? null;
        });
      },

      getProjects(filters={}) {
        return this.projects.filter(p => {
          if(filters.state  && p.stateCode  !== filters.state)  return false;
          if(filters.sector && p.sectorCode !== filters.sector) return false;
          if(filters.status && p.status     !== filters.status) return false;
          return true;
        });
      },

  };

  global.INFF = INFF;
  if (typeof module !== 'undefined') module.exports = INFF;
})(typeof window !== 'undefined' ? window : globalThis);
