import React from 'react';
import { Icon } from './Icon.jsx';
const TONES={brand:['var(--frost-100)','var(--frost-900)'],mint:['var(--mint-100)','var(--mint-700)'],accent:['var(--buttercup-100)','#8A6604'],cta:['var(--spicy-100)','var(--spicy-700)'],calm:['var(--frost-100)','var(--frost-900)'],neutral:['var(--line-100)','var(--ink-600)']};
export function Badge({children,tone='brand',icon,solid=false,style={},...rest}){
  const [bg,fg]=TONES[tone]||TONES.brand;
  return React.createElement('span',{...rest,style:{display:'inline-flex',alignItems:'center',gap:6,padding:'4px 10px',background:solid?fg:bg,color:solid?'var(--white)':fg,borderRadius:'var(--radius-pill)',fontFamily:'var(--font-body)',fontSize:'var(--text-xs)',fontWeight:'var(--fw-semibold)',lineHeight:1.5,whiteSpace:'nowrap',...style}},
    icon?React.createElement(Icon,{name:icon,size:13,key:'i'}):null,children);
}
