import React from 'react';
import { Icon } from './Icon.jsx';
export function Tag({children,selected=false,onRemove,onClick,style={},...rest}){
  const [h,setH]=React.useState(false);
  return React.createElement('span',{...rest,onClick,onMouseEnter:()=>setH(true),onMouseLeave:()=>setH(false),
    style:{display:'inline-flex',alignItems:'center',gap:6,padding:'7px 14px',borderRadius:'var(--radius-pill)',fontFamily:'var(--font-body)',fontSize:'var(--text-sm)',fontWeight:'var(--fw-medium)',cursor:onClick?'pointer':'default',background:selected?'var(--frost-800)':(h&&onClick?'var(--frost-100)':'var(--white)'),color:selected?'var(--white)':'var(--ink-600)',border:'1px solid '+(selected?'var(--frost-800)':'var(--border-subtle)'),transition:'var(--transition-base)',...style}},
    children,
    onRemove?React.createElement('span',{key:'x',onClick:e=>{e.stopPropagation();onRemove(e)},style:{display:'inline-flex',cursor:'pointer',opacity:.7}},React.createElement(Icon,{name:'x',size:13})):null);
}
