import React from 'react';
import { IconButton } from '../core/IconButton.jsx';
export function Dialog({open=false,title,description,children,footer,onClose,width=460,style={}}){
  if(!open) return null;
  return React.createElement('div',{style:{position:'fixed',inset:0,zIndex:80,display:'flex',alignItems:'center',justifyContent:'center',padding:24,background:'rgba(24,44,66,.38)',backdropFilter:'blur(3px)',animation:'none'},onClick:onClose},
    React.createElement('div',{onClick:e=>e.stopPropagation(),
      style:{width:'100%',maxWidth:width,background:'var(--surface-card)',borderRadius:'var(--radius-lg)',boxShadow:'var(--shadow-lg)',padding:28,...style}},
      React.createElement('div',{key:'h',style:{display:'flex',alignItems:'flex-start',gap:16,marginBottom:description?14:18}},
        React.createElement('div',{style:{flex:1}},
          title?React.createElement('h3',{style:{margin:0,fontFamily:'var(--font-display)',fontSize:'var(--text-lg)',fontWeight:'var(--fw-bold)',letterSpacing:'var(--ls-normal)'}},title):null,
          description?React.createElement('p',{style:{margin:'8px 0 0',fontSize:'var(--text-sm)',lineHeight:'var(--lh-normal)',color:'var(--text-muted)'}},description):null),
        onClose?React.createElement(IconButton,{name:'x',size:'sm',variant:'ghost',label:'닫기',onClick:onClose}):null),
      children,
      footer?React.createElement('div',{key:'f',style:{display:'flex',justifyContent:'flex-end',gap:10,marginTop:24}},footer):null));
}
