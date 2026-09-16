import React from 'react';
export function Tooltip({children,label,placement='top',style={}}){
  const [show,setShow]=React.useState(false);
  const pos=placement==='bottom'?{top:'calc(100% + 8px)'}:{bottom:'calc(100% + 8px)'};
  return React.createElement('span',{style:{position:'relative',display:'inline-flex'},onMouseEnter:()=>setShow(true),onMouseLeave:()=>setShow(false)},
    children,
    show?React.createElement('span',{style:{position:'absolute',left:'50%',transform:'translateX(-50%)',...pos,padding:'7px 11px',background:'var(--frost-950)',color:'var(--white)',fontFamily:'var(--font-body)',fontSize:'var(--text-xs)',lineHeight:1.4,borderRadius:'var(--radius-sm)',whiteSpace:'nowrap',boxShadow:'var(--shadow-md)',zIndex:60,...style}},label):null);
}
