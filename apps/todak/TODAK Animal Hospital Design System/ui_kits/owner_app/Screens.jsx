const { Card, Badge, Button, IconButton, Icon, Tag, Tabs, Switch, Toast, Field, Input, Select, Stepper, Logo } = window.TODAKAnimalHospitalDesignSystem_299606;

function HomeScreen({onTab}){
  return (<React.Fragment>
    <AppBar title="안녕하세요, 보호자님" action={<IconButton name="bell" variant="quiet" size="sm" label="알림"/>}/>
    <Scroll>
      <div style={{background:'var(--frost-800)',borderRadius:22,padding:20,color:'#fff',boxShadow:'var(--shadow-brand)'}}>
        <div style={{display:'flex',alignItems:'center',gap:12}}>
          <div style={{width:48,height:48,borderRadius:9999,background:'rgba(255,255,255,.16)',display:'flex',alignItems:'center',justifyContent:'center'}}><Icon name="dog" size={24}/></div>
          <div style={{flex:1}}>
            <div style={{fontSize:18,fontWeight:700}}>토리</div>
            <div style={{fontSize:13,color:'rgba(255,255,255,.8)'}}>말티즈 · 3살 · 4.2kg</div>
          </div>
          <Badge tone="accent" solid>D-3</Badge>
        </div>
        <div style={{marginTop:16,paddingTop:14,borderTop:'1px solid rgba(255,255,255,.2)',display:'flex',alignItems:'center',gap:10}}>
          <Icon name="syringe" size={18}/>
          <span style={{fontSize:14,color:'rgba(255,255,255,.9)',flex:1}}>종합백신 3차 · 9월 19일 예정</span>
        </div>
      </div>
      <div style={{display:'flex',gap:10,marginTop:16}}>
        <Button variant="primary" block icon="calendar-check" onClick={()=>onTab('예약')}>예약하기</Button>
        <Button variant="outline" icon="phone" style={{flex:'0 0 auto'}}>전화</Button>
      </div>
      <Rail title="다가오는 일정" more="전체보기"/>
      <div style={{display:'grid',gap:10}}>
        {[['syringe','종합백신 3차','9월 19일 (금) 15:30','brand'],['stethoscope','정기 건강검진','10월 4일 (토) 10:00','calm']].map(([ic,t,d,tone])=>(
          <div key={t} style={{background:'#fff',border:'1px solid var(--border-subtle)',borderRadius:16,padding:16,display:'flex',alignItems:'center',gap:14,boxShadow:'var(--shadow-xs)'}}>
            <span style={{width:40,height:40,borderRadius:9999,background:tone==='brand'?'var(--frost-100)':'var(--frost-100)',color:'var(--frost-800)',display:'flex',alignItems:'center',justifyContent:'center',flex:'0 0 auto'}}><Icon name={ic} size={19}/></span>
            <div style={{flex:1}}><div style={{fontSize:15,fontWeight:600}}>{t}</div><div style={{fontSize:13,color:'var(--text-muted)',marginTop:2}}>{d}</div></div>
            <Icon name="chevron-right" size={18} color="var(--ink-400)"/>
          </div>))}
      </div>
      <Rail title="토닥 소식"/>
      <Card surface="mint" icon="sprout" title="가을철 심장약 복용 안내" subtitle="모기가 사라지는 11월까지는 예방약을 계속 챙겨주세요." padding={18} interactive/>
      <div style={{marginTop:12}}><Toast tone="info" title="오늘 진료 19:00까지" style={{maxWidth:'none'}}>현재 대기 3명 · 예상 15분</Toast></div>
    </Scroll>
  </React.Fragment>);
}

function ReserveScreen(){
  const [step,setStep]=React.useState(0);
  const [item,setItem]=React.useState('예방접종');
  const [time,setTime]=React.useState('15:30');
  const [done,setDone]=React.useState(false);
  return (<React.Fragment>
    <AppBar title="진료 예약"/>
    <Scroll>
      <Stepper steps={['항목','시간','확인']} current={step} style={{marginBottom:22}}/>
      {done?<div style={{marginBottom:16}}><Toast tone="success" title="예약이 접수되었어요" style={{maxWidth:'none'}}>9월 18일 {time} · {item}</Toast></div>:null}
      {step===0?(<div style={{display:'grid',gap:18}}>
        <Field label="진료 항목">
          <div style={{display:'flex',flexWrap:'wrap',gap:8,marginTop:4}}>
            {['예방접종','건강검진','내과 진료','치과','피부'].map(t=><Tag key={t} selected={item===t} onClick={()=>setItem(t)}>{t}</Tag>)}
          </div>
        </Field>
        <Field label="반려동물"><Select options={['토리 · 말티즈 3살','보리 · 코숏 5살']}/></Field>
        <Field label="증상 메모" hint="선택 사항"><Input placeholder="밥을 잘 안 먹어요"/></Field>
        <Button block icon="arrow-right" onClick={()=>setStep(1)}>시간 선택</Button>
      </div>):null}
      {step===1?(<div style={{display:'grid',gap:18}}>
        <div>
          <div style={{fontSize:14,fontWeight:600,marginBottom:10}}>9월 18일 (수)</div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:8}}>
            {['09:30','10:00','10:30','11:00','14:00','14:30','15:00','15:30','16:00'].map(t=>{const full=t==='11:00'||t==='15:00',on=t===time;
              return <button key={t} disabled={full} onClick={()=>setTime(t)} style={{height:46,borderRadius:12,border:'1.5px solid '+(on?'var(--frost-800)':'var(--border-field)'),background:on?'var(--frost-800)':(full?'var(--line-100)':'#fff'),color:on?'#fff':(full?'var(--text-faint)':'var(--ink-900)'),fontFamily:'var(--font-en)',fontSize:15,fontWeight:600,textDecoration:full?'line-through':'none',cursor:full?'not-allowed':'pointer'}}>{t}</button>})}
          </div>
        </div>
        <div style={{display:'flex',gap:10}}><Button variant="ghost" onClick={()=>setStep(0)}>이전</Button><Button block icon="arrow-right" onClick={()=>setStep(2)}>다음</Button></div>
      </div>):null}
      {step===2?(<div style={{display:'grid',gap:16}}>
        <Card title="예약 확인" padding={20}>
          <div style={{display:'grid',gap:10,fontSize:14}}>
            {[['반려동물','토리'],['진료 항목',item],['날짜','9월 18일 (수)'],['시간',time]].map(([k,v])=>(
              <div key={k} style={{display:'flex',justifyContent:'space-between'}}><span style={{color:'var(--text-muted)'}}>{k}</span><span style={{fontWeight:600}}>{v}</span></div>))}
          </div>
        </Card>
        <Card surface="calm" icon="info" title="예약 변경" subtitle="진료 3시간 전까지 앱에서 변경할 수 있어요." padding={18}/>
        <div style={{display:'flex',gap:10}}><Button variant="ghost" onClick={()=>setStep(1)}>이전</Button><Button block icon="check" onClick={()=>{setDone(true);setStep(0)}}>예약 신청</Button></div>
      </div>):null}
    </Scroll>
  </React.Fragment>);
}

function RecordScreen(){
  const [tab,setTab]=React.useState('진료');
  const REC={'진료':[['2026.08.12','피부 진료','외이염 초기 · 점이약 7일','mint'],['2026.05.03','건강검진','혈액 15종 정상','mint'],['2026.02.20','내과 진료','장염 · 수액 처치','neutral']],
    '접종':[['2026.09.19','종합백신 3차','예정','accent'],['2026.08.22','종합백신 2차','완료','mint'],['2026.07.25','종합백신 1차','완료','mint']],
    '처방':[['2026.08.12','점이약 (7일)','1일 2회 · 양쪽 귀','neutral'],['2026.08.12','경구 항생제','1일 1회 · 식후','neutral']]};
  return (<React.Fragment>
    <AppBar title="진료 기록" action={<IconButton name="download" variant="quiet" size="sm" label="내려받기"/>}/>
    <Scroll>
      <div style={{background:'#fff',border:'1px solid var(--border-subtle)',borderRadius:18,padding:16,display:'flex',alignItems:'center',gap:14,boxShadow:'var(--shadow-xs)'}}>
        <span style={{width:46,height:46,borderRadius:9999,background:'var(--frost-100)',color:'var(--frost-800)',display:'flex',alignItems:'center',justifyContent:'center'}}><Icon name="dog" size={23}/></span>
        <div style={{flex:1}}><div style={{fontSize:16,fontWeight:700}}>토리</div><div style={{fontSize:13,color:'var(--text-muted)'}}>말티즈 · 3살 · 4.2kg</div></div>
        <Badge tone="mint" icon="check">건강 양호</Badge>
      </div>
      <div style={{marginTop:18}}><Tabs items={Object.keys(REC)} value={tab} onChange={setTab}/></div>
      <div style={{display:'grid',gap:10,marginTop:16}}>
        {REC[tab].map(([d,t,s,tone])=>(
          <div key={d+t} style={{background:'#fff',border:'1px solid var(--border-subtle)',borderRadius:16,padding:16,boxShadow:'var(--shadow-xs)'}}>
            <div style={{display:'flex',alignItems:'center',gap:8}}>
              <span style={{fontFamily:'var(--font-en)',fontSize:12,color:'var(--text-faint)'}}>{d}</span>
              <Badge tone={tone}>{tone==='accent'?'예정':'완료'}</Badge>
            </div>
            <div style={{fontSize:15,fontWeight:600,marginTop:8}}>{t}</div>
            <div style={{fontSize:13,color:'var(--text-muted)',marginTop:3}}>{s}</div>
          </div>))}
      </div>
    </Scroll>
  </React.Fragment>);
}

function AlertScreen(){
  const [a,setA]=React.useState(true),[b,setB]=React.useState(true),[c,setC]=React.useState(false);
  return (<React.Fragment>
    <AppBar title="알림"/>
    <Scroll>
      <div style={{display:'grid',gap:10}}>
        <Toast tone="warning" title="접종 예정일이 다가와요" style={{maxWidth:'none'}}>토리 · 종합백신 3차 · 3일 뒤</Toast>
        <Toast tone="success" title="예약이 확정되었어요" style={{maxWidth:'none'}}>9월 18일(수) 15:30 · 예방접종</Toast>
        <Toast tone="info" title="검진 결과가 등록되었어요" style={{maxWidth:'none'}}>기록 탭에서 확인해 주세요.</Toast>
      </div>
      <Rail title="알림 설정"/>
      <div style={{background:'#fff',border:'1px solid var(--border-subtle)',borderRadius:16,padding:'6px 18px',boxShadow:'var(--shadow-xs)'}}>
        {[['접종·재진 알림',a,setA],['예약 확인 문자',b,setB],['병원 소식 받기',c,setC]].map(([l,v,set],i)=>(
          <div key={l} style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'14px 0',borderTop:i?'1px solid var(--border-subtle)':'none'}}>
            <span style={{fontSize:15}}>{l}</span><Switch checked={v} onChange={set}/>
          </div>))}
      </div>
      <div style={{marginTop:24,display:'flex',flexDirection:'column',alignItems:'center',gap:8,opacity:.6}}>
        <Logo variant="symbol" height={40}/>
        <span style={{fontFamily:'var(--font-en)',fontSize:10,letterSpacing:'.14em',color:'var(--mint-700)'}}>TODAK ANIMAL HOSPITAL</span>
      </div>
    </Scroll>
  </React.Fragment>);
}
Object.assign(window,{HomeScreen,ReserveScreen,RecordScreen,AlertScreen});
