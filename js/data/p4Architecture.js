window.INFF_P4_ARCHITECTURE_DATA = {
  kpis: [
    { label:'Lead institutions', value:'9', sub:'Core ministries, committees, platforms and TWGs in the current governance map', delta:'Cross-government structure', deltaClass:'kd-good', cardClass:'kc-1' },
    { label:'Technical working groups', value:'4', sub:'Functional working groups translating reform priorities into pipelines and evidence', delta:'Monthly coordination rhythm', deltaClass:'kd-info', cardClass:'kc-2' },
    { label:'Development partners', value:'7', sub:'Development partners currently linked into the institutional coordination architecture', delta:'Forum participation active', deltaClass:'kd-warn', cardClass:'kc-3' },
    { label:'Private sector platforms', value:'3', sub:'Platforms feeding investment barriers and pipeline intelligence into the governance loop', delta:'Structured market feedback', deltaClass:'kd-info', cardClass:'kc-4' }
  ],
  network: {
    width: 960,
    height: 520,
    rings: [
      {cx:460, cy:260, r:168},
      {cx:460, cy:260, r:228}
    ],
    links: [
      {x1:460,y1:92,x2:460,y2:212,soft:false},
      {x1:220,y1:154,x2:340,y2:204,soft:false},
      {x1:700,y1:154,x2:580,y2:204,soft:false},
      {x1:340,y1:204,x2:460,y2:260,soft:false},
      {x1:580,y1:204,x2:460,y2:260,soft:false},
      {x1:340,y1:312,x2:460,y2:260,soft:false},
      {x1:580,y1:312,x2:460,y2:260,soft:false},
      {x1:180,y1:306,x2:340,y2:312,soft:true},
      {x1:740,y1:306,x2:580,y2:312,soft:true},
      {x1:270,y1:420,x2:340,y2:312,soft:false},
      {x1:650,y1:420,x2:580,y2:312,soft:false},
      {x1:270,y1:420,x2:650,y2:420,soft:true},
      {x1:220,y1:154,x2:460,y2:92,soft:true},
      {x1:700,y1:154,x2:460,y2:92,soft:true}
    ],
    labels: [
      {x:478, y:172, text:'strategic direction'},
      {x:600, y:224, text:'technical inputs'},
      {x:515, y:392, text:'delivery feedback'}
    ],
    nodes: [
      {id:'secretariat', category:'secretariat', x:460, y:260, r:48, fill:'#532B70', lines:['INFF','Secretariat'], role:'Central coordinating secretariat'},
      {id:'steering', category:'steering', x:460, y:92, r:34, fill:'#6B8CAE', lines:['Steering','Committee'], role:'Steering authority'},
      {id:'budget', category:'lead', x:220, y:154, r:32, fill:'#5B9FA6', lines:['Budget &','Planning'], role:'Lead ministries & agencies'},
      {id:'finance', category:'lead', x:700, y:154, r:32, fill:'#D4956A', lines:['Finance','Ministry'], role:'Lead ministries & agencies'},
      {id:'dmo', category:'lead', x:180, y:306, r:32, fill:'#7AAF8A', lines:['Debt','Management'], role:'Lead ministries & agencies'},
      {id:'partners', category:'partners', x:740, y:306, r:34, fill:'#B08AC9', lines:['Development','Partners'], role:'Development partners'},
      {id:'states', category:'state', x:270, y:420, r:32, fill:'#A89F7A', lines:['State Focal','Points'], role:'State coordination nodes'},
      {id:'private', category:'private', x:650, y:420, r:32, fill:'#C9956A', lines:['Private','Platforms'], role:'Private sector platforms'},
      {id:'tax', category:'twg', x:340, y:204, r:26, fill:'#8AAFAA', lines:['Tax','TWG'], role:'Technical working groups'},
      {id:'fin-twg', category:'twg', x:580, y:204, r:26, fill:'#8AAFAA', lines:['Finance','TWG'], role:'Technical working groups'},
      {id:'data', category:'twg', x:340, y:312, r:26, fill:'#8AAFAA', lines:['Data','TWG'], role:'Technical working groups'},
      {id:'ppp', category:'twg', x:580, y:312, r:26, fill:'#8AAFAA', lines:['PPP','TWG'], role:'Technical working groups'}
    ],
    legend: [
      {color:'#532B70', label:'Central coordinating secretariat'},
      {color:'#6B8CAE', label:'Steering authority'},
      {color:'#5B9FA6', label:'Lead ministries & agencies'},
      {color:'#8AAFAA', label:'Technical working groups'},
      {color:'#B08AC9', label:'Development partners'},
      {color:'#C9956A', label:'Private sector platforms'}
    ]
  },
  roleSummary: [
    { key:'Strategic oversight', value:'Steering committee', summary:'Sets the overall direction, resolves inter-institutional issues and confirms major priorities.' },
    { key:'Policy leadership', value:'Lead ministries', summary:'Lead institutions anchor reform ownership, fiscal alignment and policy follow-through.' },
    { key:'Technical coordination', value:'4 TWGs', summary:'Technical groups develop reform inputs, diagnostics, pipeline actions and monitoring evidence.' },
    { key:'External interface', value:'Partner and private platforms', summary:'Partner and private sector platforms channel finance, advice and delivery feedback into the coordination system.' }
  ],
  institutions: [
    { name:'Federal Ministry of Budget & Economic Planning', type:'Lead ministry', role:'Leads development plan alignment, reform prioritisation and cross-pillar results oversight', cadence:'Monthly' },
    { name:'Federal Ministry of Finance', type:'Lead ministry', role:'Anchors public finance strategy, mobilisation measures and fiscal reform coordination', cadence:'Monthly' },
    { name:'Debt Management Office', type:'Core agency', role:'Provides debt strategy inputs, financing risk analysis and market coordination support', cadence:'Bi-monthly' },
    { name:'INFF Steering Committee', type:'Steering committee', role:'Confirms priorities, resolves escalated issues and maintains whole-of-government alignment', cadence:'Quarterly' },
    { name:'Tax & Revenue TWG', type:'Technical working group', role:'Provides domestic resource mobilisation analysis, tax reform options and implementation follow-up', cadence:'Monthly' },
    { name:'Private Finance & PPP TWG', type:'Technical working group', role:'Supports pipeline preparation, de-risking instruments and private capital mobilisation measures', cadence:'Monthly' },
    { name:'Data & Monitoring TWG', type:'Technical working group', role:'Maintains indicator definitions, reporting standards and dashboard data quality', cadence:'Monthly' },
    { name:'Development Partner Forum', type:'Development partners', role:'Coordinates technical assistance, co-financing signals and policy dialogue around priority reforms', cadence:'Quarterly' },
    { name:'Private Sector Roundtable', type:'Private sector platform', role:'Feeds market intelligence, investment constraints and pipeline readiness signals into reform discussions', cadence:'Quarterly' }
  ],
  pathway: [
    { title:'1. Technical working groups', detail:'Prepare diagnostics, reform options, costing inputs and implementation issues for coordination review.', pill:'analysis', pillClass:'teal' },
    { title:'2. Secretariat synthesis', detail:'Consolidates inputs, tracks agreed actions and prepares briefing notes for decision-making.', pill:'coordination', pillClass:'purple' },
    { title:'3. Steering committee direction', detail:'Confirms sequencing, resolves coordination bottlenecks and assigns institutional follow-through.', pill:'decision', pillClass:'blue' },
    { title:'4. Delivery and feedback loop', detail:'Lead institutions, states and partners feed implementation progress and bottlenecks back into the cycle.', pill:'follow-up', pillClass:'amber' }
  ]
};
