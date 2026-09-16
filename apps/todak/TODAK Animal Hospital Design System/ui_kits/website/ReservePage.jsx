const { Card, Field, Input, Textarea, Select, Checkbox, Radio, Switch, Button, Stepper, Tag, Badge, Dialog, Toast, Icon } = window.TODAKAnimalHospitalDesignSystem_299606;
const TIMES=['09:30','10:00','10:30','11:00','11:30','14:00','14:30','15:00','15:30','16:00','16:30','17:00'];
const FULL=['11:00','15:00'];
function ReservePage(){
  const [step,setStep]=React.useState(0);
  const [item,setItem]=React.useState('예방접종');
  const [species,setSpecies]=React.useState('dog');
  const [day,setDay]=React.useState(18);
  const [time,setTime]=React.useState('15:30');
  const [agree,setAgree]=React.useState(false);
  const [remind,setRemind]=React.useState(true);
  const [open,setOpen]=React.useState(false);
  const [done,setDone]=React.useState(false);
  return (<main>
    <Section style={{marginTop:48}} eyebrow="RESERVATION" title="진료 예약">
      <div style={{maxWidth:760}}><Stepper steps={['진료 항목','날짜·시간','보호자 정보']} current={step}/></div>
      {done?<div style={{marginTop:28,maxWidth:760}}><Toast tone="success" title="예약이 접수되었어요">9월 {day}일(수) {time} · {item} · 확정 문자를 곧 보내드릴게요.</Toast></div>:null}
      <div style={{display:'grid',gridTemplateColumns:'1.5fr 1fr',gap:24,marginTop:28}}>
        <div style={{background:'#fff',border:'1px solid var(--border-subtle)',borderRadius:16,boxShadow:'var(--shadow-sm)',padding:28}}>
          {step===0?(<div style={{display:'grid',gap:22}}>
            <Field label="반려동물 종류" required>
              <div style={{display:'flex',gap:22,marginTop:4}}>
                <Radio name="sp" value="dog" label="강아지" checked={species==='dog'} onChange={setSpecies}/>
                <Radio name="sp" value="cat" label="고양이" checked={species==='cat'} onChange={setSpecies}/>
                <Radio name="sp" value="etc" label="그 외" checked={species==='etc'} onChange={setSpecies}/>
              </div>
            </Field>
            <Field label="진료 항목" required>
              <div style={{display:'flex',flexWrap:'wrap',gap:8,marginTop:4}}>
                {['예방접종','건강검진','내과 진료','치과','피부','중성화 상담'].map(t=><Tag key={t} selected={item===t} onClick={()=>setItem(t)}>{t}</Tag>)}
              </div>
            </Field>
            <Field label="이전 진료 이력" hint="처음 방문이면 비워두세요"><Select placeholder="선택해주세요" options={['처음 방문이에요','토닥에서 진료받은 적 있어요','다른 병원 진료 기록이 있어요']}/></Field>
            <div style={{display:'flex',justifyContent:'flex-end'}}><Button icon="arrow-right" onClick={()=>setStep(1)}>날짜 선택</Button></div>
          </div>):null}
          {step===1?(<div style={{display:'grid',gap:22}}>
            <div>
              <div style={{fontSize:14,fontWeight:600,marginBottom:10}}>2026년 9월</div>
              <div style={{display:'grid',gridTemplateColumns:'repeat(7,1fr)',gap:6}}>
                {['일','월','화','수','목','금','토'].map(d=><div key={d} style={{textAlign:'center',fontSize:12,color:'var(--text-faint)',paddingBottom:4}}>{d}</div>)}
                {Array.from({length:30},(_,i)=>i+1).map(d=>{const off=d<16,on=d===day;
                  return <button key={d} disabled={off} onClick={()=>setDay(d)} style={{height:40,border:'1px solid '+(on?'var(--frost-800)':'transparent'),background:on?'var(--frost-800)':(off?'transparent':'var(--line-100)'),color:on?'#fff':(off?'var(--text-faint)':'var(--ink-900)'),borderRadius:12,fontFamily:'var(--font-en)',fontSize:14,fontWeight:on?700:500,cursor:off?'not-allowed':'pointer',transition:'var(--transition-base)'}}>{d}</button>})}
              </div>
            </div>
            <div>
              <div style={{fontSize:14,fontWeight:600,marginBottom:10}}>시간 선택</div>
              <div style={{display:'grid',gridTemplateColumns:'repeat(6,1fr)',gap:8}}>
                {TIMES.map(t=>{const full=FULL.includes(t),on=t===time;
                  return <button key={t} disabled={full} onClick={()=>setTime(t)} style={{height:42,borderRadius:12,border:'1.5px solid '+(on?'var(--frost-800)':'var(--border-field)'),background:on?'var(--frost-800)':(full?'var(--line-100)':'#fff'),color:on?'#fff':(full?'var(--text-faint)':'var(--ink-900)'),fontFamily:'var(--font-en)',fontSize:14,fontWeight:600,cursor:full?'not-allowed':'pointer',textDecoration:full?'line-through':'none',transition:'var(--transition-base)'}}>{t}</button>})}
              </div>
            </div>
            <div style={{display:'flex',justifyContent:'space-between'}}><Button variant="ghost" onClick={()=>setStep(0)}>이전</Button><Button icon="arrow-right" onClick={()=>setStep(2)}>보호자 정보</Button></div>
          </div>):null}
          {step===2?(<div style={{display:'grid',gap:20}}>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16}}>
              <Field label="보호자 이름" required><Input placeholder="홍길동"/></Field>
              <Field label="연락처" required hint="예약 확인 문자를 보내드립니다"><Input icon="phone" placeholder="010-0000-0000"/></Field>
              <Field label="반려동물 이름" required><Input icon="paw-print" placeholder="토리"/></Field>
              <Field label="나이 / 체중"><Input placeholder="3살 · 4.2kg"/></Field>
            </div>
            <Field label="증상 메모" hint="편하게 적어주세요"><Textarea rows={3} placeholder="어제 저녁부터 밥을 잘 안 먹고, 기운이 없어요."/></Field>
            <Switch label="접종·재진 알림 문자 받기" checked={remind} onChange={setRemind}/>
            <Checkbox label="개인정보 수집 및 이용에 동의합니다 (필수)" checked={agree} onChange={setAgree}/>
            <div style={{display:'flex',justifyContent:'space-between'}}><Button variant="ghost" onClick={()=>setStep(1)}>이전</Button><Button icon="check" disabled={!agree} onClick={()=>setOpen(true)}>예약 신청</Button></div>
          </div>):null}
        </div>
        <div style={{display:'grid',gap:16,alignContent:'start'}}>
          <Card title="선택한 예약" padding={22}>
            <div style={{display:'grid',gap:10,fontSize:14}}>
              {[['진료 항목',item],['반려동물',{dog:'강아지',cat:'고양이',etc:'그 외'}[species]],['날짜','9월 '+day+'일 (수)'],['시간',time]].map(([k,v])=>(
                <div key={k} style={{display:'flex',justifyContent:'space-between'}}><span style={{color:'var(--text-muted)'}}>{k}</span><span style={{fontWeight:600,color:'var(--ink-900)'}}>{v}</span></div>))}
            </div>
          </Card>
          <Card surface="calm" icon="clock" title="진료 시간" subtitle="평일 09:30–19:00 · 토 09:30–15:00 · 점심 13:00–14:00 · 일요일 휴진" padding={22}/>
          <div style={{display:'flex',gap:10,alignItems:'center'}}><Badge tone="accent" icon="info">안내</Badge><span style={{fontSize:13,color:'var(--text-muted)'}}>예약 변경은 진료 3시간 전까지 가능합니다.</span></div>
        </div>
      </div>
    </Section>
    <Dialog open={open} title="예약을 확정할까요?" description={'9월 '+day+'일(수) '+time+' · '+item} onClose={()=>setOpen(false)}
      footer={<><Button variant="outline" onClick={()=>setOpen(false)}>다시 볼게요</Button><Button onClick={()=>{setOpen(false);setDone(true);setStep(0)}}>확정하기</Button></>}>
      <div style={{background:'var(--frost-100)',borderRadius:12,padding:16,display:'flex',gap:12,alignItems:'center'}}>
        <Icon name="message-square" size={20} color="var(--frost-800)"/>
        <span style={{fontSize:14,color:'var(--text-muted)'}}>확정 후 보호자 연락처로 확인 문자가 발송됩니다.</span>
      </div>
    </Dialog>
  </main>);
}
Object.assign(window,{ReservePage});
