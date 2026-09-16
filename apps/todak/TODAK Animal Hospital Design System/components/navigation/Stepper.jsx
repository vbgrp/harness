import React from 'react';
import { Icon } from '../core/Icon.jsx';
export function Stepper({steps=[],current=0,style={}}){
  return React.createElement('div',{style:{display:'flex',alignItems:'center',gap:0,...style}},
    steps.map((s,i)=>{const done=i<current,on=i===current;
      return React.createElement(React.Fragment,{key:i},
        i?React.createElement('span',{style:{flex:1,height:2,margin:'0 10px',background:done||on?'var(--frost-600)':'var(--line-200)',borderRadius:2}}):null,
        React.createElement('span',{style:{display:'inline-flex',alignItems:'center',gap:8}},
          React.createElement('span',{style:{display:'inline-flex',alignItems:'center',justifyContent:'center',width:28,height:28,borderRadius:'var(--radius-pill)',background:done?'var(--frost-800)':(on?'var(--white)':'var(--line-100)'),border:'1.5px solid '+(done?'var(--frost-800)':(on?'var(--frost-800)':'var(--line-200)')),color:done?'var(--white)':(on?'var(--frost-900)':'var(--text-faint)'),fontFamily:'var(--font-en)',fontSize:'var(--text-xs)',fontWeight:'var(--fw-bold)'}},
            done?React.createElement(Icon,{name:'check',size:15}):i+1),
          React.createElement('span',{style:{fontFamily:'var(--font-body)',fontSize:'var(--text-sm)',fontWeight:on?'var(--fw-semibold)':'var(--fw-medium)',color:on?'var(--ink-900)':'var(--text-muted)',whiteSpace:'nowrap'}},s)))})); 
}
