const { Icon, Logo } = window.TODAKAnimalHospitalDesignSystem_299606;
function Phone({children,label}){
  return (<div>
    <div style={{width:390,height:800,background:'var(--white)',borderRadius:38,border:'1px solid var(--border-subtle)',boxShadow:'var(--shadow-lg)',overflow:'hidden',display:'flex',flexDirection:'column',position:'relative'}}>
      <div style={{height:44,display:'flex',alignItems:'center',justifyContent:'space-between',padding:'0 22px',fontFamily:'var(--font-en)',fontSize:13,fontWeight:600,color:'var(--ink-900)',flex:'0 0 auto'}}>
        <span>9:41</span><span style={{display:'flex',gap:6,alignItems:'center'}}><Icon name="signal" size={14}/><Icon name="wifi" size={14}/><Icon name="battery-full" size={16}/></span>
      </div>
      {children}
    </div>
    {label?<div style={{textAlign:'center',marginTop:12,fontSize:12,color:'var(--text-faint)',fontFamily:'var(--font-en)',letterSpacing:'.08em',textTransform:'uppercase'}}>{label}</div>:null}
  </div>);
}
function AppBar({title,action}){
  return (<div style={{display:'flex',alignItems:'center',gap:10,padding:'6px 20px 14px',flex:'0 0 auto'}}>
    <div style={{flex:1,fontSize:22,fontWeight:700,letterSpacing:'-.02em',color:'var(--ink-900)'}}>{title}</div>{action}
  </div>);
}
function TabBar({tab,onTab}){
  const items=[['홈','house'],['예약','calendar-check'],['기록','file-heart'],['알림','bell']];
  return (<div style={{flex:'0 0 auto',display:'flex',background:'rgba(255,255,255,.96)',borderTop:'1px solid var(--border-subtle)',padding:'8px 8px 20px',backdropFilter:'blur(8px)'}}>
    {items.map(([n,i])=>{const on=tab===n;
      return (<button key={n} onClick={()=>onTab(n)} style={{flex:1,border:'none',background:'transparent',display:'flex',flexDirection:'column',alignItems:'center',gap:4,padding:'6px 0',cursor:'pointer',color:on?'var(--frost-800)':'var(--ink-400)'}}>
        <Icon name={i} size={22} strokeWidth={on?2.4:2}/>
        <span style={{fontSize:11,fontWeight:on?700:500,fontFamily:'var(--font-body)'}}>{n}</span>
      </button>)})}
  </div>);
}
function Scroll({children}){return <div style={{flex:1,overflowY:'auto',padding:'0 20px 24px'}}>{children}</div>}
function Rail({title,more}){return (<div style={{display:'flex',alignItems:'baseline',justifyContent:'space-between',margin:'24px 0 12px'}}>
  <div style={{fontSize:16,fontWeight:700,color:'var(--ink-900)'}}>{title}</div>{more?<span style={{fontSize:13,color:'var(--frost-800)',fontWeight:600}}>{more}</span>:null}</div>)}
Object.assign(window,{Phone,AppBar,TabBar,Scroll,Rail});
