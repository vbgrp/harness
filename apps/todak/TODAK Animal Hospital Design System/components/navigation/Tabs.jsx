import React from 'react';
export function Tabs({items=[],value,onChange,variant='pill',style={}}){
  const [hover,setHover]=React.useState(null);
  const norm=items.map(i=>typeof i==='string'?{value:i,label:i}:i);
  const pill=variant==='pill';
  return React.createElement('div',{role:'tablist',style:{display:'flex',gap:pill?6:22,padding:pill?4:0,background:pill?'var(--line-100)':'transparent',borderRadius:'var(--radius-pill)',borderBottom:pill?'none':'1px solid var(--border-subtle)',...style}},
    norm.map(t=>{const on=t.value===value;
      return React.createElement('button',{key:t.value,role:'tab','aria-selected':on,onClick:()=>onChange&&onChange(t.value),onMouseEnter:()=>setHover(t.value),onMouseLeave:()=>setHover(null),
        style:pill?{padding:'9px 18px',border:'none',borderRadius:'var(--radius-pill)',background:on?'var(--white)':(hover===t.value?'rgba(255,255,255,.6)':'transparent'),color:on?'var(--frost-900)':'var(--text-muted)',fontFamily:'var(--font-body)',fontSize:'var(--text-sm)',fontWeight:on?'var(--fw-semibold)':'var(--fw-medium)',boxShadow:on?'var(--shadow-xs)':'none',cursor:'pointer',transition:'var(--transition-base)'}
          :{padding:'0 0 12px',border:'none',background:'transparent',borderBottom:'2.5px solid '+(on?'var(--frost-800)':'transparent'),marginBottom:-1,color:on?'var(--frost-900)':'var(--text-muted)',fontFamily:'var(--font-body)',fontSize:'var(--text-base)',fontWeight:on?'var(--fw-semibold)':'var(--fw-medium)',cursor:'pointer',transition:'var(--transition-base)'}},t.label)}));
}
