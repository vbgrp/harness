const { Card, Button, Badge, Icon, Tabs } = window.TODAKAnimalHospitalDesignSystem_299606;
function DirectionsPage(){
  const [tab,setTab]=React.useState('지하철');
  const WAY={'지하철':'○○역 3번 출구에서 도보 2분. 출구를 나와 직진하시면 1층에 토닥 간판이 보입니다.','버스':'○○사거리 정류장 하차 (100, 271, 470). 횡단보도 건너 바로 왼쪽 건물 1층입니다.','자가용':'건물 뒤편 전용 주차장 5대 · 진료 시 2시간 무료. 만차 시 인근 공영주차장을 안내드립니다.'};
  return (<main>
    <Section style={{marginTop:48}} eyebrow="DIRECTIONS" title="오시는 길" desc="서울시 ○○구 ○○로 00, 1층 · 02-000-0000">
      <Placeholder label="약도 이미지 미제공 — 실제 지도 이미지로 교체 필요" height={340} tone="sunken"/>
      <div style={{display:'grid',gridTemplateColumns:'1.4fr 1fr',gap:24,marginTop:24}}>
        <div style={{background:'#fff',border:'1px solid var(--border-subtle)',borderRadius:16,padding:26,boxShadow:'var(--shadow-sm)'}}>
          <Tabs items={Object.keys(WAY)} value={tab} onChange={setTab} style={{display:'inline-flex'}}/>
          <p style={{margin:'20px 0 0',fontSize:16,lineHeight:1.75,color:'var(--text-body)'}}>{WAY[tab]}</p>
          <div style={{display:'flex',gap:10,marginTop:24}}><Button variant="secondary" icon="map-pin">길찾기</Button><Button variant="outline" icon="phone">전화 문의</Button></div>
        </div>
        <div style={{display:'grid',gap:16,alignContent:'start'}}>
          <Card icon="clock" title="진료 시간" padding={22}>
            <div style={{display:'grid',gap:8,fontSize:14}}>
              {[['평일','09:30 – 19:00'],['토요일','09:30 – 15:00'],['점심','13:00 – 14:00'],['일·공휴일','휴진']].map(([k,v])=>(
                <div key={k} style={{display:'flex',justifyContent:'space-between'}}><span style={{color:'var(--text-muted)'}}>{k}</span><span style={{fontFamily:'var(--font-en)',fontWeight:600}}>{v}</span></div>))}
            </div>
          </Card>
          <Card surface="mint" icon="sprout" title="대기 공간" subtitle="아이보리와 우드톤 마감, 강아지·고양이 대기 구역을 분리했습니다." padding={22}/>
        </div>
      </div>
    </Section>
  </main>);
}
Object.assign(window,{DirectionsPage});
