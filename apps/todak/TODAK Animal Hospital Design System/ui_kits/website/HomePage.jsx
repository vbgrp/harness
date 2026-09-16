const { Button, Card, Badge, Icon, Logo } = window.TODAKAnimalHospitalDesignSystem_299606;
const SERVICES=[
 {icon:'stethoscope',t:'건강검진',d:'나이와 견종·묘종에 맞춘 정기 검진 프로그램'},
 {icon:'syringe',t:'예방접종',d:'시기별 접종 스케줄을 문자로 챙겨드려요'},
 {icon:'heart-pulse',t:'내과 진료',d:'소화기·피부·호흡기 등 1차 진료 전반'},
 {icon:'bone',t:'치과 · 스케일링',d:'마취 전 정밀 검사 후 안전하게 진행'},
 {icon:'scissors',t:'외과 · 중성화',d:'수술 전후 보호자 상담을 꼭 거칩니다'},
 {icon:'sprout',t:'토닥 회복 케어',d:'퇴원 후 회복까지 함께 지켜봅니다'}];
function HomePage({onNav}){
  return (<main>
    <div style={{background:'linear-gradient(180deg,var(--frost-100) 0%,var(--white) 100%)',paddingBottom:8}}>
      <div style={{maxWidth:'var(--max-content)',margin:'0 auto',padding:'72px 32px 88px',display:'grid',gridTemplateColumns:'1.05fr .95fr',gap:56,alignItems:'center'}}>
        <div>
          <Badge tone="mint" icon="sprout">1차 진료 중심 동물병원</Badge>
          <h1 style={{margin:'20px 0 0',fontSize:52,fontWeight:700,letterSpacing:'-.03em',lineHeight:1.24,color:'var(--frost-950)',textWrap:'pretty'}}>작은 숨결마다 닿는<br/>따뜻한 손길,<br/><span style={{color:'var(--frost-800)'}}>마음까지 토닥이는 진료</span></h1>
          <p style={{margin:'22px 0 0',fontSize:18,lineHeight:1.7,color:'var(--text-muted)',maxWidth:'44ch'}}>차가운 병원이 아니라, 보호자와 아이 모두가 편히 숨 쉴 수 있는 공간을 만듭니다. 진료 전 충분히 설명하고, 진료 후에도 회복을 함께 지켜봅니다.</p>
          <div style={{display:'flex',gap:12,marginTop:32}}>
            <Button variant="primary" size="lg" icon="calendar-check" onClick={()=>onNav('예약')}>진료 예약하기</Button>
            <Button variant="outline" size="lg" icon="phone">02-000-0000</Button>
          </div>
          <div style={{display:'flex',gap:26,marginTop:36}}>
            {[['clock','평일 09:30–19:00'],['map-pin','○○역 3번 출구 2분'],['car','건물 뒤편 주차']].map(([i,t])=>(
              <div key={t} style={{display:'flex',alignItems:'center',gap:8,fontSize:14,color:'var(--text-muted)'}}><Icon name={i} size={17} color="var(--frost-700)"/>{t}</div>))}
          </div>
        </div>
        <div style={{position:'relative'}}>
          <Placeholder label="대표 진료 사진 (원본 이미지 미제공)" height={400} tone="mint"/>
          <div style={{position:'absolute',bottom:-24,left:-24,background:'#fff',borderRadius:20,padding:'18px 22px',boxShadow:'var(--shadow-md)',display:'flex',alignItems:'center',gap:14}}>
            <Logo variant="symbol" height={46}/>
            <div><div style={{fontSize:14,fontWeight:700,color:'var(--ink-900)'}}>오늘 진료 중</div><div style={{fontSize:12,color:'var(--text-muted)'}}>현재 대기 3명 · 예상 15분</div></div>
          </div>
        </div>
      </div>
    </div>

    <Section eyebrow="OUR CARE" title="토닥의 진료 항목" desc="1차 진료에 필요한 과정을 한 곳에서. 필요 이상의 검사나 시술은 권하지 않습니다.">
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:20}}>
        {SERVICES.map(s=><Card key={s.t} icon={s.icon} title={s.t} subtitle={s.d} interactive onClick={()=>onNav('진료안내')}/>)}
      </div>
    </Section>

    <Section eyebrow="TODAK PROMISE" title="세 가지 약속">
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:20}}>
        <Card surface="brand" icon="message-circle" title="먼저 설명합니다" subtitle="검사와 치료의 이유를 보호자가 이해할 때까지 설명한 뒤 진행합니다."/>
        <Card surface="calm" icon="hand-heart" title="덜 무섭게 만듭니다" subtitle="대기실과 진료실을 분리하고, 아이가 놀라지 않도록 천천히 다가갑니다."/>
        <Card surface="mint" icon="sprout" title="끝까지 지켜봅니다" subtitle="퇴원 이후 회복 경과를 문자와 앱으로 함께 확인합니다."/>
      </div>
    </Section>

    <Section eyebrow="MEDICAL TEAM" title="의료진" desc="보호자와 눈을 맞추고 이야기하는 진료를 지향합니다.">
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:20}}>
        {[['김토닥','대표원장 · 내과','서울대 수의학 석사'],['이새싹','진료원장 · 외과','동물 외과 전문 과정'],['박발자','진료원장 · 치과','동물 치과 수료']].map(([n,r,c])=>(
          <div key={n} style={{background:'#fff',border:'1px solid var(--border-subtle)',borderRadius:16,overflow:'hidden',boxShadow:'var(--shadow-sm)'}}>
            <Placeholder label="의료진 사진 미제공" height={190} radius={0} tone="sunken"/>
            <div style={{padding:20}}>
              <div style={{fontSize:20,fontWeight:700,color:'var(--ink-900)'}}>{n}</div>
              <div style={{fontSize:14,color:'var(--frost-800)',fontWeight:600,marginTop:4}}>{r}</div>
              <div style={{fontSize:13,color:'var(--text-muted)',marginTop:8}}>{c}</div>
            </div>
          </div>))}
      </div>
    </Section>

    <section style={{maxWidth:'var(--max-content)',margin:'96px auto 0',padding:'0 32px'}}>
      <div style={{background:'var(--frost-800)',borderRadius:28,padding:'56px 48px',display:'flex',alignItems:'center',gap:40,boxShadow:'var(--shadow-brand)'}}>
        <div style={{flex:1}}>
          <div style={{fontFamily:'var(--font-en)',fontSize:12,fontWeight:600,letterSpacing:'.14em',color:'var(--buttercup-500)'}}>RESERVATION</div>
          <h2 style={{margin:'14px 0 0',fontSize:34,fontWeight:700,letterSpacing:'-.02em',color:'#fff',lineHeight:1.34}}>기다리는 시간도 편안하도록,<br/>미리 예약해 주세요</h2>
          <p style={{margin:'14px 0 0',fontSize:16,color:'rgba(255,255,255,.8)',lineHeight:1.7}}>온라인 예약은 진료 3시간 전까지 가능합니다. 응급 상황은 바로 전화 주세요.</p>
        </div>
        <div style={{display:'flex',flexDirection:'column',gap:12}}>
          <Button variant="primary" size="lg" icon="calendar-check" onClick={()=>onNav('예약')}>예약 페이지로</Button>
          <Button variant="outline" size="lg" icon="siren">응급 전화</Button>
        </div>
      </div>
    </section>
  </main>);
}
Object.assign(window,{HomePage});
