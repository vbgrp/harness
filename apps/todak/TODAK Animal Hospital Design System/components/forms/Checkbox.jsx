import React from 'react';
import { Icon } from '../core/Icon.jsx';
export function Checkbox({label,checked=false,onChange,disabled=false,style={}}){
  return React.createElement('label',{style:{display:'inline-flex',alignItems:'center',gap:10,cursor:disabled?'not-allowed':'pointer',opacity:disabled?.5:1,fontFamily:'var(--font-body)',fontSize:'var(--text-sm)',color:'var(--text-body)',...style}},
    React.createElement('input',{type:'checkbox',checked,disabled,onChange:e=>onChange&&onChange(e.target.checked,e),style:{position:'absolute',opacity:0,width:0,height:0}}),
    React.createElement('span',{style:{display:'inline-flex',alignItems:'center',justifyContent:'center',width:22,height:22,flex:'0 0 auto',borderRadius:'7px',background:checked?'var(--frost-800)':'var(--white)',border:'1.5px solid '+(checked?'var(--frost-800)':'var(--border-field)'),color:'var(--white)',transition:'var(--transition-base)'}},checked?React.createElement(Icon,{name:'check',size:14}):null),
    label);
}
