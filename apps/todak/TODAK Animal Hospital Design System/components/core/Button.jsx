import React from 'react';
import { Icon } from './Icon.jsx';
const SIZES={sm:{h:36,px:14,fs:'var(--text-sm)',gap:6,icon:16},md:{h:46,px:20,fs:'var(--text-base)',gap:8,icon:18},lg:{h:56,px:28,fs:'var(--text-md)',gap:10,icon:20}};
const VARIANTS={
 primary:{background:'var(--action-primary-bg)',color:'var(--action-primary-fg)',border:'1px solid transparent',boxShadow:'var(--shadow-cta)'},
 secondary:{background:'var(--frost-700)',color:'var(--white)',border:'1px solid transparent',boxShadow:'var(--shadow-brand)'},
 outline:{background:'var(--white)',color:'var(--frost-700)',border:'1.5px solid var(--frost-700)',boxShadow:'var(--shadow-xs)'},
 quiet:{background:'var(--frost-100)',color:'var(--frost-700)',border:'1px solid transparent',boxShadow:'none'},
 ghost:{background:'transparent',color:'var(--frost-700)',border:'1px solid transparent',boxShadow:'none'}};
const HOVER={primary:{background:'var(--action-primary-bg-hover)'},secondary:{background:'var(--frost-800)'},outline:{background:'var(--frost-100)',borderColor:'var(--frost-800)'},quiet:{background:'var(--frost-300)'},ghost:{background:'var(--frost-100)'}};
export function Button({children,variant='primary',size='md',icon,iconRight,block=false,disabled=false,as='button',style={},...rest}){
  const [h,setH]=React.useState(false),[p,setP]=React.useState(false);
  const s=SIZES[size]||SIZES.md;
  const base={display:block?'flex':'inline-flex',width:block?'100%':'auto',alignItems:'center',justifyContent:'center',gap:s.gap,height:s.h,padding:'0 '+s.px+'px',fontFamily:'var(--font-body)',fontSize:s.fs,fontWeight:'var(--fw-semibold)',letterSpacing:'var(--ls-normal)',borderRadius:'var(--radius-pill)',cursor:disabled?'not-allowed':'pointer',opacity:disabled?.45:1,transition:'background var(--dur-base) var(--ease-soft),transform var(--dur-fast) var(--ease-soft),box-shadow var(--dur-base) var(--ease-soft)',transform:p?'scale(.97)':'none',...VARIANTS[variant],...(h&&!disabled?HOVER[variant]:null),...style};
  return React.createElement(as,{...rest,disabled:as==='button'?disabled:undefined,style:base,onMouseEnter:()=>setH(true),onMouseLeave:()=>{setH(false);setP(false)},onMouseDown:()=>setP(true),onMouseUp:()=>setP(false)},
    icon?React.createElement(Icon,{name:icon,size:s.icon,key:'i'}):null,
    React.createElement('span',{key:'t'},children),
    iconRight?React.createElement(Icon,{name:iconRight,size:s.icon,key:'r'}):null);
}
