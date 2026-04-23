window.INFF_CONSTRAINTS_DATA = {
  years: [2020, 2021, 2022, 2023, 2024, 2025],
  categories: ['Revenue','Cost of Capital','Governance','Capacity'],
  constraints: [
    {
      id:'c1',
      name:'Low non-oil tax compliance in high-growth sectors',
      category:'Revenue',
      sector:'Cross-cutting',
      geography:'National',
      severity:88,
      trend:'Worsening',
      owner:'FIRS / State IRS',
      latestYear:2025,
      supportingData:[
        {label:'Tax-to-GDP proxy', value:'7.4%', note:'below reform pathway'},
        {label:'Filing gap estimate', value:'18%', note:'dummy estimate for large taxpayers'},
        {label:'Affected flow', value:'NGN 1.2T', note:'foregone annual revenue potential'}
      ],
      reforms:['Digital taxpayer registry integration','E-invoicing expansion','Risk-based audit sequencing'],
      severityByYear:[54,58,64,71,82,88]
    },
    {
      id:'c2',
      name:'High domestic borrowing cost for infrastructure finance',
      category:'Cost of Capital',
      sector:'Infrastructure',
      geography:'National',
      severity:84,
      trend:'Persistent',
      owner:'DMO / MOF / CBN',
      latestYear:2025,
      supportingData:[
        {label:'Average domestic coupon', value:'15.8%', note:'blended dummy estimate'},
        {label:'Average maturity', value:'6.1 yrs', note:'limits refinancing flexibility'},
        {label:'Crowding-out signal', value:'High', note:'banks prefer sovereign paper'}
      ],
      reforms:['Blended finance framework','Credit enhancement facility','Domestic bond market deepening'],
      severityByYear:[57,62,66,73,79,84]
    },
    {
      id:'c3',
      name:'Fragmented reporting across earmarked and special funds',
      category:'Governance',
      sector:'Public Finance Management',
      geography:'National',
      severity:76,
      trend:'Improving slowly',
      owner:'Budget Office / OAGF',
      latestYear:2025,
      supportingData:[
        {label:'Funds outside common template', value:'11', note:'dummy count'},
        {label:'Reporting lag', value:'90 days', note:'average publication delay'},
        {label:'Metadata coverage', value:'61%', note:'definitions incomplete'}
      ],
      reforms:['Unified chart of financing accounts','Common reporting template','Quarterly fund disclosure protocol'],
      severityByYear:[77,79,81,80,78,76]
    },
    {
      id:'c4',
      name:'Weak project preparation capacity at state level',
      category:'Capacity',
      sector:'Sub-national',
      geography:'States',
      severity:81,
      trend:'Persistent',
      owner:'State Planning Commissions',
      latestYear:2025,
      supportingData:[
        {label:'Bankable pipeline ratio', value:'34%', note:'share of projects meeting appraisal standard'},
        {label:'Average prep time', value:'9 months', note:'from concept to financing-ready'},
        {label:'States with PMU gaps', value:'23', note:'dummy estimate'}
      ],
      reforms:['Project preparation facility','State PMU training window','Standard appraisal toolkit'],
      severityByYear:[64,68,72,77,79,81]
    },
    {
      id:'c5',
      name:'Limited long-term local currency finance for climate projects',
      category:'Cost of Capital',
      sector:'Climate & Environment',
      geography:'National',
      severity:73,
      trend:'Worsening',
      owner:'MOE / DFI / SEC',
      latestYear:2025,
      supportingData:[
        {label:'Available tenor', value:'< 7 yrs', note:'below typical project need'},
        {label:'Pipeline close rate', value:'29%', note:'dummy estimate'},
        {label:'FX risk pass-through', value:'High', note:'limits private participation'}
      ],
      reforms:['Green guarantee platform','Climate project aggregation vehicle','Local currency blended window'],
      severityByYear:[50,55,60,66,70,73]
    },
    {
      id:'c6',
      name:'Under-captured IGR and property-based revenues in states',
      category:'Revenue',
      sector:'Sub-national',
      geography:'States',
      severity:79,
      trend:'Persistent',
      owner:'State Internal Revenue Services',
      latestYear:2025,
      supportingData:[
        {label:'States below benchmark', value:'27', note:'dummy comparator'},
        {label:'Property register coverage', value:'41%', note:'urban parcels'},
        {label:'Potential upside', value:'NGN 520B', note:'annual estimate'}
      ],
      reforms:['GIS-enabled property rolls','IGR digitisation','State revenue benchmarking'],
      severityByYear:[59,63,67,70,75,79]
    },
    {
      id:'c7',
      name:'Incomplete donor and climate finance tagging',
      category:'Governance',
      sector:'External Finance',
      geography:'National',
      severity:67,
      trend:'Improving slowly',
      owner:'Aid Coordination Units',
      latestYear:2025,
      supportingData:[
        {label:'Externally funded projects tagged', value:'58%', note:'dummy estimate'},
        {label:'Common taxonomy adoption', value:'Partial', note:'not all partners aligned'},
        {label:'Double-counting risk', value:'Medium', note:'between climate and sector tags'}
      ],
      reforms:['Unified development finance taxonomy','Climate tagging protocol','Partner data exchange template'],
      severityByYear:[76,74,72,71,69,67]
    },
    {
      id:'c8',
      name:'Limited data analytics staffing in core financing institutions',
      category:'Capacity',
      sector:'Institutions',
      geography:'National',
      severity:64,
      trend:'Improving',
      owner:'Core MDAs',
      latestYear:2025,
      supportingData:[
        {label:'Filled analytics posts', value:'62%', note:'dummy staffing ratio'},
        {label:'Institutions with BI dashboards', value:'9/18', note:'still uneven'},
        {label:'Training completion', value:'54%', note:'staff reached in last cycle'}
      ],
      reforms:['INFF analytics academy','Shared BI service desk','Data steward designation'],
      severityByYear:[79,76,72,69,66,64]
    }
  ],
  sectorHeatmap: [
    {sector:'Education', revenue:34, cost:49, governance:62, capacity:68},
    {sector:'Health & Social Protection', revenue:39, cost:55, governance:69, capacity:72},
    {sector:'Infrastructure', revenue:46, cost:84, governance:58, capacity:61},
    {sector:'Agriculture', revenue:41, cost:53, governance:60, capacity:59},
    {sector:'Climate & Environment', revenue:37, cost:73, governance:66, capacity:57},
    {sector:'Digital & ICT', revenue:52, cost:47, governance:63, capacity:58},
    {sector:'Governance', revenue:45, cost:39, governance:76, capacity:67},
    {sector:'Social Protection', revenue:36, cost:51, governance:68, capacity:74},
    {sector:'Energy', revenue:44, cost:71, governance:57, capacity:55},
    {sector:'Water & Sanitation', revenue:38, cost:58, governance:61, capacity:64},
    {sector:'Revenue Mobilisation', revenue:88, cost:42, governance:74, capacity:63},
    {sector:'Subnational finance', revenue:79, cost:52, governance:64, capacity:81}
  ],
  reformLinks: [
    {reform:'Digital taxpayer registry integration', pillar:'Pillar 2', linkedConstraints:3, priority:'High'},
    {reform:'Blended finance framework', pillar:'Pillar 2', linkedConstraints:2, priority:'High'},
    {reform:'Unified chart of financing accounts', pillar:'Pillar 2', linkedConstraints:2, priority:'Medium'},
    {reform:'Project preparation facility', pillar:'Pillar 2', linkedConstraints:2, priority:'High'},
    {reform:'Unified development finance taxonomy', pillar:'Pillar 2', linkedConstraints:1, priority:'Medium'},
    {reform:'INFF analytics academy', pillar:'Pillar 2', linkedConstraints:1, priority:'Medium'}
  ]
};
