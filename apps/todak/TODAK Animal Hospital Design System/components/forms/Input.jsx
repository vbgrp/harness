import React from 'react';
import { Icon } from '../core/Icon.jsx';
export function Input({icon,invalid=false,disabled=false,style={},...rest}){
  const [foc,setFoc]=React.useState(false);
  const input=React.createElement('input',{...rest,disabled,onFocus:e=>{setFoc(true);rest.onFocus&&rest.onFocus(e)},onBlur:e=>{setFoc(false);rest.onBlur&&rest.onBlur(e)},
    style:{...{width:'100%',height:46,padding:'0 14px',fontFamily:'var(--font-body)',fontSize:'var(--text-base)',color:'var(--text-body)',background:'var(--white)',border:'1.5px solid var(--border-field)',borderRadius:'var(--radius-field)',boxShadow:'var(--inset-field)',outline:'none',transition:'var(--transition-base)'},paddingLeft:icon?42:14,borderColor:invalid?'var(--danger-500)':(foc?'var(--frost-600)':'var(--border-field)'),boxShadow:foc?'var(--ring-focus)':'var(--inset-field)',background:disabled?'var(--line-100)':'var(--white)',...style}});
  if(!icon) return input;
  return React.createElement('span',{style:{position:'relative',display:'block'}},
    React.createElement('span',{key:'i',style:{position:'absolute',left:14,top:'50%',transform:'translateY(-50%)',color:'var(--ink-400)',pointerEvents:'none'}},React.createElement(Icon,{name:icon,size:18})),
    input);
}
