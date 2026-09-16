const { Logo, Button, Icon, Tabs } = window.TODAKAnimalHospitalDesignSystem_299606;
const NAV=['홈','진료안내','의료진','예약','오시는 길'];
function SiteHeader({page,onNav}){
  return (<header style={{position:'sticky',top:0,zIndex:40,background:'rgba(255,255,255,.92)',backdropFilter:'blur(10px)',borderBottom:'1px solid var(--border-subtle)'}}>
    <div style={{maxWidth:'var(--max-content)',margin:'0 auto',padding:'0 32px',height:84,display:'flex',alignItems:'center',gap:32}}>
      <div onClick={()=>onNav('홈')} style={{cursor:'pointer',display:'flex',alignItems:'center',gap:12}}>
        <Logo variant="symbol" height={44}/>
        <div>
          <div style={{fontSize:18,fontWeight:700,letterSpacing:'-.02em',color:'var(--frost-900)'}}>토닥 동물병원</div>
          <div style={{fontFamily:'var(--font-en)',fontSize:9,fontWeight:600,letterSpacing:'.14em',color:'var(--mint-700)'}}>TODAK ANIMAL HOSPITAL</div>
        </div>
      </div>
      <nav style={{display:'flex',gap:4,marginLeft:'auto'}}>
        {NAV.map(n=>(<button key={n} onClick={()=>onNav(n)} style={{border:'none',background:page===n?'var(--frost-100)':'transparent',color:page===n?'var(--frost-900)':'var(--text-muted)',fontFamily:'var(--font-body)',fontSize:15,fontWeight:page===n?600:500,padding:'10px 16px',borderRadius:'var(--radius-pill)',cursor:'pointer',transition:'var(--transition-base)'}}>{n}</button>))}
      </nav>
      <div style={{display:'flex',alignItems:'center',gap:10}}>
        <div style={{textAlign:'right',lineHeight:1.3}}>
          <div style={{fontSize:11,color:'var(--text-faint)'}}>진료 문의</div>
          <div style={{fontFamily:'var(--font-en)',fontSize:17,fontWeight:700,color:'var(--frost-900)'}}>02-000-0000</div>
        </div>
        <Button variant="primary" icon="calendar-check" onClick={()=>onNav('예약')}>예약</Button>
      </div>
    </div>
  </header>);
}
function SiteFooter(){
  return (<footer style={{background:'var(--frost-900)',color:'rgba(255,255,255,.78)',marginTop:96}}>
    <div style={{maxWidth:'var(--max-content)',margin:'0 auto',padding:'56px 32px 40px',display:'grid',gridTemplateColumns:'1.4fr 1fr 1fr',gap:40}}>
      <div>
        <Logo variant="symbol" tone="white" height={58}/>
        <div style={{marginTop:16,fontSize:20,fontWeight:700,color:'#fff',letterSpacing:'-.02em',lineHeight:1.4}}>작은 숨결마다 닿는 따뜻한 손길,<br/>마음까지 토닥이는 진료</div>
      </div>
      <div style={{fontSize:14,lineHeight:2}}>
        <div style={{color:'#fff',fontWeight:600,marginBottom:8}}>진료 시간</div>
        평일 09:30 – 19:00<br/>토요일 09:30 – 15:00<br/>점심 13:00 – 14:00<br/>일요일·공휴일 휴진
      </div>
      <div style={{fontSize:14,lineHeight:2}}>
        <div style={{color:'#fff',fontWeight:600,marginBottom:8}}>찾아오시는 길</div>
        서울시 ○○구 ○○로 00, 1층<br/>주차 가능 (건물 뒤편)<br/><span style={{fontFamily:'var(--font-en)'}}>02-000-0000</span>
      </div>
    </div>
    <div style={{borderTop:'1px solid rgba(255,255,255,.14)',padding:'18px 32px',fontSize:12,textAlign:'center',color:'rgba(255,255,255,.55)'}}>© 2026 TODAK ANIMAL HOSPITAL</div>
  </footer>);
}
function Placeholder({label,height=260,radius=24,tone='calm'}){
  const bg={calm:'var(--frost-100)',mint:'var(--mint-100)',sunken:'var(--line-100)'}[tone];
  return (<div style={{height,borderRadius:radius,background:bg,border:'1px dashed var(--frost-300)',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:8,color:'var(--frost-700)'}}>
    <Icon name="image" size={26}/><div style={{fontSize:12,color:'var(--text-muted)'}}>{label}</div></div>);
}
function Section({eyebrow,title,desc,children,style={}}){
  return (<section style={{maxWidth:'var(--max-content)',margin:'0 auto',padding:'0 32px',marginTop:96,...style}}>
    {eyebrow?<div style={{fontFamily:'var(--font-en)',fontSize:12,fontWeight:600,letterSpacing:'.14em',color:'var(--mint-700)'}}>{eyebrow}</div>:null}
    {title?<h2 style={{margin:'12px 0 0',fontSize:36,fontWeight:700,letterSpacing:'-.02em',lineHeight:1.3,color:'var(--ink-900)'}}>{title}</h2>:null}
    {desc?<p style={{margin:'12px 0 0',fontSize:17,lineHeight:1.65,color:'var(--text-muted)',maxWidth:'56ch'}}>{desc}</p>:null}
    <div style={{marginTop:36}}>{children}</div>
  </section>);
}
Object.assign(window,{SiteHeader,SiteFooter,Placeholder,Section});
