import React from 'react';
import { Icon } from './Icon.jsx';
const S={sm:32,md:40,lg:48};
export function IconButton({name='x',size='md',variant='quiet',label,disabled=false,style={},...rest}){
  const [h,setH]=React.useState(false);
  const d=S[size]||S.md;
  const v={quiet:{background:h?'var(--frost-300)':'var(--action-quiet-bg)',color:'var(--frost-900)',border:'1px solid transparent'},
    outline:{background:h?'var(--frost-100)':'var(--white)',color:'var(--frost-900)',border:'1.5px solid var(--frost-300)'},
    ghost:{background:h?'var(--frost-100)':'transparent',color:'var(--frost-800)',border:'1px solid transparent'},
    solid:{background:h?'var(--frost-900)':'var(--frost-800)',color:'var(--white)',border:'1px solid transparent'}}[variant];
  return React.createElement('button',{...rest,'aria-label':label||name,disabled,onMouseEnter:()=>setH(true),onMouseLeave:()=>setH(false),
    style:{display:'inline-flex',alignItems:'center',justifyContent:'center',width:d,height:d,borderRadius:'var(--radius-pill)',cursor:disabled?'not-allowed':'pointer',opacity:disabled?.45:1,transition:'var(--transition-base)',...v,...style}},
    React.createElement(Icon,{name,size:Math.round(d*0.5)}));
}
