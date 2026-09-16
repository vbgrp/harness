import React from 'react';
import { Icon } from '../core/Icon.jsx';
const TONE={success:{bg:'var(--mint-100)',fg:'var(--mint-700)',icon:'check-circle'},info:{bg:'var(--frost-100)',fg:'var(--frost-900)',icon:'info'},warning:{bg:'var(--buttercup-100)',fg:'#8A6604',icon:'alert-triangle'},error:{bg:'var(--spicy-100)',fg:'var(--spicy-700)',icon:'alert-circle'}};
export function Toast({children,tone='success',title,icon,onClose,style={}}){
  const t=TONE[tone]||TONE.success;
  return React.createElement('div',{role:'status',style:{display:'flex',alignItems:'flex-start',gap:12,padding:'14px 16px',background:t.bg,border:'1px solid rgba(34,43,56,.06)',borderRadius:'var(--radius-md)',boxShadow:'var(--shadow-sm)',fontFamily:'var(--font-body)',maxWidth:420,...style}},
    React.createElement('span',{key:'i',style:{color:t.fg,marginTop:1}},React.createElement(Icon,{name:icon||t.icon,size:20})),
    React.createElement('div',{key:'b',style:{flex:1}},
      title?React.createElement('div',{style:{fontSize:'var(--text-sm)',fontWeight:'var(--fw-semibold)',color:'var(--ink-900)',marginBottom:2}},title):null,
      React.createElement('div',{style:{fontSize:'var(--text-sm)',lineHeight:'var(--lh-normal)',color:'var(--text-muted)'}},children)),
    onClose?React.createElement('span',{key:'x',onClick:onClose,style:{cursor:'pointer',color:'var(--ink-400)'}},React.createElement(Icon,{name:'x',size:16})):null);
}
