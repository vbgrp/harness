import React from 'react';
import { Icon } from './Icon.jsx';
const SURF={white:'var(--surface-card)',sunken:'var(--surface-tint)',brandSoft:'var(--surface-brand-soft)',calm:'var(--surface-calm)',mint:'var(--surface-mint-soft)',brand:'var(--surface-brand)'};
export function Card({children,title,subtitle,icon,footer,surface='white',interactive=false,padding=24,style={},...rest}){
  const [h,setH]=React.useState(false);
  const onBrand=surface==='brand';
  return React.createElement('div',{...rest,onMouseEnter:()=>setH(true),onMouseLeave:()=>setH(false),
    style:{background:SURF[surface]||SURF.white,border:'1px solid '+(onBrand?'transparent':'var(--border-subtle)'),borderRadius:'var(--radius-card)',padding,boxShadow:interactive&&h?'var(--shadow-md)':'var(--shadow-sm)',transform:interactive&&h?'translateY(-2px)':'none',transition:'var(--transition-base)',cursor:interactive?'pointer':'default',color:onBrand?'var(--white)':'var(--text-body)',...style}},
    icon?React.createElement('div',{key:'ic',style:{display:'inline-flex',alignItems:'center',justifyContent:'center',width:44,height:44,borderRadius:'var(--radius-pill)',background:onBrand?'rgba(255,255,255,.16)':'var(--frost-100)',color:onBrand?'var(--white)':'var(--frost-800)',marginBottom:14}},React.createElement(Icon,{name:icon,size:22})):null,
    title?React.createElement('h3',{key:'t',style:{margin:'0 0 6px',fontFamily:'var(--font-display)',fontSize:'var(--text-lg)',fontWeight:'var(--fw-bold)',letterSpacing:'var(--ls-normal)',lineHeight:'var(--lh-snug)'}},title):null,
    subtitle?React.createElement('p',{key:'s',style:{margin:0,fontSize:'var(--text-sm)',lineHeight:'var(--lh-normal)',color:onBrand?'rgba(255,255,255,.82)':'var(--text-muted)'}},subtitle):null,
    children?React.createElement('div',{key:'c',style:{marginTop:title||subtitle||icon?16:0}},children):null,
    footer?React.createElement('div',{key:'f',style:{marginTop:18,paddingTop:14,borderTop:'1px solid '+(onBrand?'rgba(255,255,255,.2)':'var(--border-subtle)')}},footer):null);
}
