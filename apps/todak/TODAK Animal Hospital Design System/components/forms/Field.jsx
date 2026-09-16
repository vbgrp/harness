import React from 'react';
export function Field({label,hint,error,required=false,children,style={}}){
  return React.createElement('label',{style:{display:'block',...style}},
    label?React.createElement('span',{key:'l',style:{display:'block',marginBottom:7,fontFamily:'var(--font-body)',fontSize:'var(--text-sm)',fontWeight:'var(--fw-semibold)',color:'var(--ink-900)'}},label,required?React.createElement('span',{style:{color:'var(--spicy-500)',marginLeft:3}},'*'):null):null,
    children,
    error?React.createElement('span',{key:'e',style:{display:'block',marginTop:6,fontSize:'var(--text-xs)',color:'var(--danger-500)'}},error)
      :(hint?React.createElement('span',{key:'h',style:{display:'block',marginTop:6,fontSize:'var(--text-xs)',color:'var(--text-faint)'}},hint):null));
}
