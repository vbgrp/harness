import React from 'react';
export function Textarea({invalid=false,rows=4,style={},...rest}){
  const [foc,setFoc]=React.useState(false);
  return React.createElement('textarea',{...rest,rows,onFocus:()=>setFoc(true),onBlur:()=>setFoc(false),
    style:{...{width:'100%',height:46,padding:'0 14px',fontFamily:'var(--font-body)',fontSize:'var(--text-base)',color:'var(--text-body)',background:'var(--white)',border:'1.5px solid var(--border-field)',borderRadius:'var(--radius-field)',boxShadow:'var(--inset-field)',outline:'none',transition:'var(--transition-base)'},height:'auto',padding:'12px 14px',lineHeight:'var(--lh-normal)',resize:'vertical',borderColor:invalid?'var(--danger-500)':(foc?'var(--frost-600)':'var(--border-field)'),boxShadow:foc?'var(--ring-focus)':'var(--inset-field)',...style}});
}
