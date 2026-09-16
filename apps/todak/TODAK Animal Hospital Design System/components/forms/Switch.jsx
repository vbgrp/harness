import React from 'react';
export function Switch({label,checked=false,onChange,disabled=false,style={}}){
  return React.createElement('label',{style:{display:'inline-flex',alignItems:'center',gap:12,cursor:disabled?'not-allowed':'pointer',opacity:disabled?.5:1,fontFamily:'var(--font-body)',fontSize:'var(--text-sm)',color:'var(--text-body)',...style}},
    React.createElement('input',{type:'checkbox',checked,disabled,onChange:e=>onChange&&onChange(e.target.checked,e),style:{position:'absolute',opacity:0,width:0,height:0}}),
    React.createElement('span',{style:{position:'relative',width:46,height:26,flex:'0 0 auto',borderRadius:'var(--radius-pill)',background:checked?'var(--mint-500)':'var(--line-200)',transition:'background var(--dur-base) var(--ease-soft)'}},
      React.createElement('span',{style:{position:'absolute',top:3,left:checked?23:3,width:20,height:20,borderRadius:'var(--radius-pill)',background:'var(--white)',boxShadow:'var(--shadow-xs)',transition:'left var(--dur-base) var(--ease-soft)'}})),
    label);
}
