import React from 'react';
export function Radio({label,checked=false,onChange,name,value,disabled=false,style={}}){
  return React.createElement('label',{style:{display:'inline-flex',alignItems:'center',gap:10,cursor:disabled?'not-allowed':'pointer',opacity:disabled?.5:1,fontFamily:'var(--font-body)',fontSize:'var(--text-sm)',color:'var(--text-body)',...style}},
    React.createElement('input',{type:'radio',name,value,checked,disabled,onChange:e=>onChange&&onChange(value,e),style:{position:'absolute',opacity:0,width:0,height:0}}),
    React.createElement('span',{style:{display:'inline-flex',alignItems:'center',justifyContent:'center',width:22,height:22,flex:'0 0 auto',borderRadius:'var(--radius-pill)',background:'var(--white)',border:'1.5px solid '+(checked?'var(--frost-800)':'var(--border-field)'),transition:'var(--transition-base)'}},
      React.createElement('span',{style:{width:10,height:10,borderRadius:'var(--radius-pill)',background:checked?'var(--frost-800)':'transparent',transition:'var(--transition-base)'}})),
    label);
}
