window.INFF_DATA_SOURCES = {
  years:[2020,2021,2022,2023,2024,2025],
  institutions:[
    {
      id:'ds1', institution:'Federal Inland Revenue Service (FIRS)', type:'Domestic Public', domains:['Tax Revenues','VAT','CIT','PIT proxies'], frequency:'Monthly', completeness:94, metadata:92, latestUpdate:'2025-Q4', definitions:'Comprehensive', quality:'Strong', notes:'Main source for federal tax categories and compliance indicators.'
    },
    {
      id:'ds2', institution:'Nigeria Customs Service', type:'Domestic Public', domains:['Customs Duties','Excise','Trade levies'], frequency:'Monthly', completeness:89, metadata:84, latestUpdate:'2025-Q4', definitions:'Good', quality:'Strong', notes:'Supports customs and excise duty tracking and border revenue diagnostics.'
    },
    {
      id:'ds3', institution:'Budget Office of the Federation', type:'Domestic Public', domains:['Budget allocations','Special funds','Planned vs required financing'], frequency:'Quarterly', completeness:86, metadata:78, latestUpdate:'2025-Q4', definitions:'Moderate', quality:'Moderate', notes:'Key source for financing plans, appropriations and fund structure.'
    },
    {
      id:'ds4', institution:'Debt Management Office (DMO)', type:'Domestic Public', domains:['Treasury Bills','Bonds','Sukuk','Debt stock'], frequency:'Quarterly', completeness:93, metadata:90, latestUpdate:'2025-Q4', definitions:'Comprehensive', quality:'Strong', notes:'Covers cost, maturity and instrument-level borrowing data.'
    },
    {
      id:'ds5', institution:'Central Bank of Nigeria (CBN)', type:'Domestic Public', domains:['Banking flows','Intervention programmes','Macro context'], frequency:'Monthly', completeness:82, metadata:76, latestUpdate:'2025-Q4', definitions:'Moderate', quality:'Moderate', notes:'Useful for domestic private finance and macro-financial triangulation.'
    },
    {
      id:'ds6', institution:'National Bureau of Statistics (NBS)', type:'Domestic Public', domains:['GDP','State indicators','Price indices'], frequency:'Quarterly', completeness:88, metadata:91, latestUpdate:'2025-Q4', definitions:'Comprehensive', quality:'Strong', notes:'Anchor source for GDP normalisation, denominators and comparable state series.'
    },
    {
      id:'ds7', institution:'Office of the Accountant-General', type:'Domestic Public', domains:['Fiscal outturns','Treasury flows','Special accounts'], frequency:'Quarterly', completeness:79, metadata:70, latestUpdate:'2025-Q3', definitions:'Moderate', quality:'Watchlist', notes:'Some lag in reconciliation and differing coding for earmarked accounts.'
    },
    {
      id:'ds8', institution:'National Pension Commission (PenCom)', type:'Domestic Private', domains:['Pension assets','Mandatory savings schemes'], frequency:'Quarterly', completeness:85, metadata:83, latestUpdate:'2025-Q4', definitions:'Good', quality:'Strong', notes:'Supports pension and long-term domestic finance assessment.'
    },
    {
      id:'ds9', institution:'Nigerian Exchange / SEC filings', type:'Domestic Private', domains:['Capital markets','Listed corporates','ESG issuances'], frequency:'Quarterly', completeness:77, metadata:73, latestUpdate:'2025-Q4', definitions:'Moderate', quality:'Moderate', notes:'Useful for capital market depth and corporate finance mapping.'
    },
    {
      id:'ds10', institution:'World Bank & AfDB portfolios', type:'International Public', domains:['Sovereign loans','Development projects','Guarantees'], frequency:'Quarterly', completeness:81, metadata:86, latestUpdate:'2025-Q4', definitions:'Good', quality:'Strong', notes:'External public finance tracker with project-level metadata.'
    },
    {
      id:'ds11', institution:'UN agencies & pooled funds', type:'International Public', domains:['Grants','Technical assistance','Thematic funds'], frequency:'Semi-Annual', completeness:72, metadata:80, latestUpdate:'2025-H2', definitions:'Moderate', quality:'Moderate', notes:'Coverage varies by agency and coding standard.'
    },
    {
      id:'ds12', institution:'Climate finance reporting partners', type:'International Private', domains:['Climate funds','Impact investors','Blended vehicles'], frequency:'Annual', completeness:68, metadata:74, latestUpdate:'2025', definitions:'Basic', quality:'Watchlist', notes:'Project tagging and concessionality fields remain uneven.'
    }
  ],
  completenessTrend:[70,72,76,79,82,84],
  metadataTrend:[60,64,68,72,76,80],
  updateFrequencyMix:[
    {label:'Monthly', value:4},
    {label:'Quarterly', value:6},
    {label:'Semi-Annual', value:1},
    {label:'Annual', value:1}
  ],
  integrityAlerts:[
    {level:'High', title:'Stale reconciliation for selected treasury and special account series', detail:'Latest full reconciliation in dummy data is one period behind target update cadence.'},
    {level:'Medium', title:'Incomplete metadata for some sub-national IGR datasets', detail:'Definitions and collection methods are not standardised across reporting entities.'},
    {level:'Medium', title:'Climate finance tagging not yet fully harmonised', detail:'Co-financing and concessionality fields differ across contributing partners.'},
    {level:'Low', title:'Some institution-level completeness below 75%', detail:'Mostly affects private and international blended-finance datasets.'}
  ],
  glossary:[
    {term:'Completeness', definition:'Share of expected fields or reporting units received for a dataset within the reporting cycle.'},
    {term:'Metadata coverage', definition:'Extent to which dataset definitions, methodologies, units and caveats are documented and accessible.'},
    {term:'Update frequency', definition:'Expected cadence at which the contributing institution refreshes the dataset used by the portal.'},
    {term:'Data integrity status', definition:'Composite qualitative signal combining timeliness, completeness, metadata and reconciliation quality.'}
  ]
};
