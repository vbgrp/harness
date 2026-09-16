const { Card, Tabs, Tag, Badge, Button, Icon, Toast } = window.TODAKAnimalHospitalDesignSystem_299606;
const DETAIL={
 '예방접종':[['강아지 종합백신 (DHPPL)','5주 간격 3회 · 이후 매년 1회'],['고양이 3종 백신','3~4주 간격 3회 · 이후 매년 1회'],['광견병','매년 1회 · 법정 접종'],['켄넬코프','산책·호텔 이용 전 권장']],
 '건강검진':[['기본 검진','신체검사 + 혈액 기본 15종'],['정밀 검진','혈액 30종 + 방사선 + 초음파'],['시니어 검진','7세 이상 · 심장·신장 중심'],['수술 전 검사','마취 안전성 확인 필수']],
 '치과':[['구강 검진','치석·치주염 단계 확인'],['스케일링','마취 전 정밀 검사 후 진행'],['발치','치근 상태에 따라 결정'],['홈케어 상담','칫솔질 교육 포함']]};
function ServicesPage({onNav}){
  const [tab,setTab]=React.useState('예방접종');
  return (<main>
    <div style={{background:'var(--frost-100)',borderBottom:'1px solid var(--border-subtle)'}}>
      <div style={{maxWidth:'var(--max-content)',margin:'0 auto',padding:'56px 32px 44px'}}>
        <div style={{fontFamily:'var(--font-en)',fontSize:12,fontWeight:600,letterSpacing:'.14em',color:'var(--mint-700)'}}>MEDICAL SERVICES</div>
        <h1 style={{margin:'12px 0 0',fontSize:40,fontWeight:700,letterSpacing:'-.02em',color:'var(--frost-950)'}}>진료 안내</h1>
        <p style={{margin:'12px 0 0',fontSize:17,color:'var(--text-muted)',maxWidth:'52ch',lineHeight:1.7}}>아이의 상태와 나이에 따라 필요한 만큼만 권합니다. 비용과 소요 시간은 진료 전에 미리 안내드립니다.</p>
      </div>
    </div>
    <Section style={{marginTop:48}}>
      <Tabs variant="underline" items={Object.keys(DETAIL)} value={tab} onChange={setTab}/>
      <div style={{display:'grid',gridTemplateColumns:'1.6fr 1fr',gap:24,marginTop:32}}>
        <div style={{background:'#fff',border:'1px solid var(--border-subtle)',borderRadius:16,boxShadow:'var(--shadow-sm)',overflow:'hidden'}}>
          {DETAIL[tab].map(([t,d],i)=>(
            <div key={t} style={{display:'flex',alignItems:'center',gap:16,padding:'20px 24px',borderTop:i?'1px solid var(--border-subtle)':'none'}}>
              <span style={{display:'inline-flex',alignItems:'center',justifyContent:'center',width:40,height:40,borderRadius:9999,background:'var(--frost-100)',color:'var(--frost-800)',flex:'0 0 auto'}}><Icon name="syringe" size={19}/></span>
              <div style={{flex:1}}>
                <div style={{fontSize:16,fontWeight:600,color:'var(--ink-900)'}}>{t}</div>
                <div style={{fontSize:14,color:'var(--text-muted)',marginTop:2}}>{d}</div>
              </div>
              <Button variant="quiet" size="sm" onClick={()=>onNav('예약')}>예약</Button>
            </div>))}
        </div>
        <div style={{display:'grid',gap:16,alignContent:'start'}}>
          <Card surface="brandSoft" title="진료 전 준비" subtitle="증상이 시작된 시점, 식사·배변 변화, 복용 중인 약을 메모해 오시면 진료가 훨씬 빨라집니다."/>
          <Toast tone="info" title="점심시간 13:00–14:00">해당 시간에는 예약이 열리지 않습니다.</Toast>
          <div style={{background:'#fff',border:'1px solid var(--border-subtle)',borderRadius:16,padding:20}}>
            <div style={{fontSize:14,fontWeight:700,color:'var(--ink-900)',marginBottom:12}}>자주 찾는 항목</div>
            <div style={{display:'flex',flexWrap:'wrap',gap:8}}>
              {['중성화','피부','설사','슬개골','심장','건강검진'].map(t=><Tag key={t}>{t}</Tag>)}
            </div>
          </div>
          <div style={{display:'flex',alignItems:'center',gap:10}}><Badge tone="cta" icon="siren">응급</Badge><span style={{fontSize:14,color:'var(--text-muted)'}}>호흡 곤란·경련은 바로 전화 주세요.</span></div>
        </div>
      </div>
    </Section>
  </main>);
}
Object.assign(window,{ServicesPage});
