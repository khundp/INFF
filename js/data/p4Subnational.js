window.INFF_P4_SUBNATIONAL_DATA = {
  kpis: [
    { label:'Participating states', value:'24', sub:'States currently participating in the subnational INFF coordination process', delta:'12 advanced states', deltaClass:'kd-good', cardClass:'kc-1' },
    { label:'State-level reforms', value:'38', sub:'Reforms currently tracked across planning, budgeting, revenue and investment coordination', delta:'Pipeline view', deltaClass:'kd-info', cardClass:'kc-2' },
    { label:'Financing initiatives', value:'31', sub:'State financing initiatives and pipelines connected to the national coordination layer', delta:'Portfolio depth varies', deltaClass:'kd-warn', cardClass:'kc-3' },
    { label:'Average readiness', value:'67%', sub:'Composite readiness indicator for state INFF uptake and coordination maturity', delta:'State comparison enabled', deltaClass:'kd-info', cardClass:'kc-4' }
  ],
  statusMix: [
    {label:'Advanced', value:12, color:'#7AAF8A'},
    {label:'Progressing', value:8, color:'#F8981D'},
    {label:'Emerging', value:4, color:'#6B8CAE'}
  ],
  readinessIndicators: [
    {label:'Governance setup', value:'72%'},
    {label:'Data systems', value:'64%'},
    {label:'Financing diagnostics', value:'70%'},
    {label:'Reform pipeline', value:'61%'},
    {label:'Partner alignment', value:'68%'}
  ],
  comparisonDimensions:['governance','data','reforms','finance'],
  comparisonStates:[
    {state:'Lagos', status:'Advanced', peerGroups:['National state set','High-readiness states'], governance:83, data:79, reforms:81, finance:76},
    {state:'Kaduna', status:'Progressing', peerGroups:['National state set','High-readiness states'], governance:76, data:71, reforms:74, finance:68},
    {state:'Kano', status:'Progressing', peerGroups:['National state set'], governance:69, data:63, reforms:65, finance:60},
    {state:'Rivers', status:'Progressing', peerGroups:['National state set','High-readiness states'], governance:78, data:73, reforms:71, finance:67},
    {state:'Borno', status:'Emerging', peerGroups:['National state set','Emerging states','Conflict-affected states'], governance:58, data:49, reforms:53, finance:47}
  ],
  spotlights:[
    {status:'Advanced', peerGroups:['National state set','High-readiness states'], state:'Lagos', summary:'State coordination arrangements link reform tracking, investment pipeline management and budget follow-up.', chips:['IGR reform','PPP pipeline','Climate finance']},
    {status:'Progressing', peerGroups:['National state set','High-readiness states'], state:'Kaduna', summary:'Coordination between planning and finance institutions is supporting reform sequencing and implementation follow-up.', chips:['Budget tagging','Debt analytics']},
    {status:'Emerging', peerGroups:['National state set','Emerging states','Conflict-affected states'], state:'Borno', summary:'Readiness is improving through diagnostics, partner support and a phased institutional coordination setup.', chips:['State diagnostics','Partner TA']}
  ],
  register:[
    {state:'Lagos', status:'Advanced', peerGroups:['National state set','High-readiness states'], reforms:'Budget tagging, revenue analytics, PPP screening', initiatives:'Urban resilience, MSME finance, transport PPPs', readiness:'81%', next:'Align pipeline reporting with national portal'},
    {state:'Kaduna', status:'Progressing', peerGroups:['National state set','High-readiness states'], reforms:'Budget tagging, debt analytics, expenditure efficiency', initiatives:'Agribusiness finance, health infrastructure, SME access window', readiness:'72%', next:'Strengthen the state partner coordination forum and reporting cadence'},
    {state:'Rivers', status:'Progressing', peerGroups:['National state set','High-readiness states'], reforms:'Investment promotion reforms, climate screening', initiatives:'Energy transition projects, industrial zones', readiness:'70%', next:'Finalize readiness baseline and dashboard feeds'},
    {state:'Borno', status:'Emerging', peerGroups:['National state set','Emerging states','Conflict-affected states'], reforms:'Diagnostic scoping, budget alignment pilots', initiatives:'Resilience and recovery financing package', readiness:'52%', next:'Formalize focal point structure and data standards'}
  ]
};
