import React from 'react';
import { Icon } from '../core/Icon.jsx';
export function Select({options=[],placeholder,invalid=false,disabled=false,style={},...rest}){
  const [foc,setFoc]=React.useState(false);
  return React.createElement('span',{style:{position:'relative',display:'block'}},
    React.createElement('select',{...rest,disabled,onFocus:()=>setFoc(true),onBlur:()=>setFoc(false),
      style:{...{width:'100%',height:46,padding:'0 14px',fontFamily:'var(--font-body)',fontSize:'var(--text-base)',color:'var(--text-body)',background:'var(--white)',border:'1.5px solid var(--border-field)',borderRadius:'var(--radius-field)',boxShadow:'var(--inset-field)',outline:'none',transition:'var(--transition-base)'},appearance:'none',paddingRight:40,cursor:disabled?'not-allowed':'pointer',color:'var(--text-body)',borderColor:invalid?'var(--danger-500)':(foc?'var(--frost-600)':'var(--border-field)'),boxShadow:foc?'var(--ring-focus)':'var(--inset-field)',background:disabled?'var(--line-100)':'var(--white)',...style}},
      placeholder?React.createElement('option',{key:'ph',value:''},placeholder):null,
      options.map(o=>{const v=typeof o==='string'?o:o.value,l=typeof o==='string'?o:o.label;return React.createElement('option',{key:v,value:v},l)})),
    React.createElement('span',{key:'c',style:{position:'absolute',right:14,top:'50%',transform:'translateY(-50%)',color:'var(--ink-400)',pointerEvents:'none'}},React.createElement(Icon,{name:'chevron-down',size:18})));
}
