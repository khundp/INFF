window.INFF_P4_PARTNERS_DATA = {
  kpis: [
    { label:'Contributing partners', value:'14', sub:'Partners actively contributing finance, TA or policy support in the selected view', delta:'Broad coordination base', deltaClass:'kd-good', cardClass:'kc-1' },
    { label:'Total contribution value', value:'$4.8B', sub:'Cumulative value represented across finance, policy and technical assistance packages', delta:'2020–2025 series', deltaClass:'kd-info', cardClass:'kc-2' },
    { label:'Technical assistance share', value:'28%', sub:'Share of the contribution mix represented by advisory, analytics and capacity support', delta:'Complementary to finance', deltaClass:'kd-warn', cardClass:'kc-3' },
    { label:'Linked reforms', value:'19', sub:'Reforms and outcomes currently linked to partner contribution packages', delta:'Reform-linked tracking', deltaClass:'kd-info', cardClass:'kc-4' }
  ],
  trend: {
    labels:['2020','2021','2022','2023','2024','2025'],
    series:[
      {label:'Finance', data:[420,580,690,860,1010,1240], borderColor:'#5B9FA6', backgroundColor:'rgba(91,159,166,.12)', fill:true},
      {label:'Technical assistance', data:[120,145,168,190,228,260], borderColor:'#D4956A', backgroundColor:'rgba(212,149,106,.12)', fill:false},
      {label:'Policy support', data:[68,74,82,91,102,118], borderColor:'#B08AC9', backgroundColor:'rgba(176,138,201,.12)', fill:false}
    ]
  },
  typeMix: [
    {label:'Finance', value:66, color:'#5B9FA6'},
    {label:'TA', value:28, color:'#D4956A'},
    {label:'Policy', value:6, color:'#B08AC9'}
  ],
  sectorFocus: [
    {label:'Public finance', value:76, color:'#5B9FA6'},
    {label:'Infrastructure', value:68, color:'#D4956A'},
    {label:'Social sectors', value:54, color:'#7AAF8A'},
    {label:'Climate', value:41, color:'#6B8CAE'},
    {label:'Private investment', value:59, color:'#B08AC9'},
    {label:'Data systems', value:37, color:'#A89F7A'}
  ],
  themes: [
    { title:'Domestic resource mobilisation reform', detail:'Policy support, technical assistance and digital systems financing linked to stronger revenue administration outcomes.', pill:'revenue', pillClass:'teal' },
    { title:'Blended finance and PPP pipeline', detail:'Guarantee design, transaction advisory and catalytic finance linked to private investment mobilisation outcomes.', pill:'private capital', pillClass:'amber' },
    { title:'Subnational INFF readiness', detail:'State diagnostics, budget alignment support and peer learning linked to stronger readiness scores.', pill:'states', pillClass:'blue' },
    { title:'Monitoring and dashboard systems', detail:'Data architecture and review process support linked to more reliable accountability reporting.', pill:'accountability', pillClass:'purple' }
  ],
  partners: [
    { partner:'UNDP', group:'Multilateral', contributionTags:['Technical assistance','Policy support'], amount:620, type:'TA | Policy', value:'$620M', sector:'Governance, data, SDG finance', reforms:'INFF coordination; dashboard systems', outcomes:'Review quality and reform tracking' },
    { partner:'World Bank', group:'Multilateral', contributionTags:['Finance','Policy support'], amount:1450, type:'Finance | Policy', value:'$1.45B', sector:'Public finance, social sectors', reforms:'DRM reform; expenditure efficiency', outcomes:'Gap reduction and service delivery outcomes' },
    { partner:'AfDB', group:'Multilateral', contributionTags:['Finance','Technical assistance'], amount:890, type:'Finance | TA', value:'$890M', sector:'Infrastructure, energy', reforms:'Green finance; infrastructure pipeline', outcomes:'Investment mobilisation' },
    { partner:'EU', group:'Bilateral / regional', contributionTags:['Policy support','Technical assistance'], amount:410, type:'Policy | TA', value:'$410M', sector:'Governance, climate', reforms:'Budget transparency; green taxonomy', outcomes:'Policy and reform alignment' },
    { partner:'UNICEF', group:'UN agency', contributionTags:['Technical assistance'], amount:180, type:'TA', value:'$180M', sector:'Social protection, child-focused budgeting', reforms:'Outcome budgeting', outcomes:'Human capital results' },
    { partner:'Private Investor Platform', group:'Private platform', contributionTags:['Finance'], amount:760, type:'Finance', value:'$760M', sector:'Infrastructure, agriculture', reforms:'PPP transactions', outcomes:'Private capital mobilisation' }
  ]
};
