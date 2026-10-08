'use client';
import React,{useState} from 'react';
import {BookOpen,BrainCircuit,GraduationCap,Languages,ShieldCheck,Users,Clock3,CalendarDays} from 'lucide-react';

type Block={start:string;end:string;title:string;category:string;minutes:number};
type Day={id:string;name:string;minutes:number;blocks:Block[]};
type Pillar={id:string;title:string;description:string;minutes:number;color:string};
type Routine={title:string;intro:string;history:string;daily_commitment_hours:number;weekly_minutes:number;days:Day[];pillars:Pillar[]};
const icons:Record<string,React.ElementType>={engineering:BookOpen,languages:Languages,academic:GraduationCap,foundations:BrainCircuit,certifications:ShieldCheck,leadership:Users};
const duration=(n:number)=>`${Math.floor(n/60)}h${n%60?String(n%60).padStart(2,'0'):''}`;

export default function StudyRoutine({routine}:{routine:Routine}){
 const [selected,setSelected]=useState('mon');
 if(!routine?.days?.length)return null;
 const day=routine.days.find(d=>d.id===selected)||routine.days[0];
 const pillar=(id:string)=>routine.pillars.find(p=>p.id===id);
 return <div className="study-routine" id="routine">
  <div className="routine-heading"><div><span className="routine-kicker"><CalendarDays size={16}/> THE LEARNING ROUTINE</span><h3>{routine.title}</h3></div><span className="routine-history">7+ years of consistent learning</span></div>
  <div className="routine-intro-grid">
   <div className="routine-commitment"><span className="routine-label">A DAILY COMMITMENT</span><div className="routine-hours">{routine.daily_commitment_hours}<span>hours</span></div><p>Protected time.<br/>Every single day.</p><div className="routine-week"><strong>7</strong><span>days a week</span></div></div>
   <div className="routine-practice"><p className="routine-intro">{routine.intro}</p><div className="routine-pillars">{routine.pillars.map(p=>{const Icon=icons[p.id]||BookOpen;return <div key={p.id}><span className="routine-icon" style={{color:p.color}}><Icon size={20}/></span><div><h4>{p.title}</h4><p>{p.description}</p></div></div>})}</div></div>
  </div>
  <div className="routine-calendar">
   <div className="routine-calendar-heading"><div><span className="routine-kicker">A WEEK, BY DESIGN</span><h4>How I make room for learning.</h4></div><p>Recurring plan · São Paulo time</p></div>
   <div className="routine-day-tabs" role="tablist" aria-label="Choose a study day">{routine.days.map((d,i)=><button key={d.id} type="button" id={`day-${d.id}`} role="tab" aria-selected={d.id===day.id} aria-controls="routine-day-panel" tabIndex={d.id===day.id?0:-1} onClick={()=>setSelected(d.id)} onKeyDown={e=>{let n=i;if(e.key==='ArrowRight')n=(i+1)%7;else if(e.key==='ArrowLeft')n=(i+6)%7;else if(e.key==='Home')n=0;else if(e.key==='End')n=6;else return;e.preventDefault();setSelected(routine.days[n].id);document.getElementById(`day-${routine.days[n].id}`)?.focus()}}><span>{d.name.slice(0,3)}</span><small>{duration(d.minutes)}</small></button>)}</div>
   <div id="routine-day-panel" className="routine-day-panel" role="tabpanel" aria-labelledby={`day-${day.id}`} tabIndex={0}>
    <div className="routine-day-summary"><h4>{day.name}</h4><span><Clock3 size={16}/>{duration(day.minutes)} planned</span></div>
    <div className="routine-day-flow" aria-hidden="true">{day.blocks.map(b=><span key={b.start} style={{flex:b.minutes,background:pillar(b.category)?.color}} title={b.title}/>)}</div>
    <ol className="routine-blocks">{day.blocks.map(b=>{const Icon=icons[b.category]||BookOpen;return <li key={b.start}><time>{b.start}<small>{b.end}</small></time><span className="routine-block-icon" style={{color:pillar(b.category)?.color}}><Icon size={19}/></span><div><strong>{b.title}</strong><span>{b.minutes} minutes</span></div></li>})}</ol>
    {day.id==='sat'&&<p className="routine-break">A break is reserved from 06:45 to 08:30 before language review, leadership and academic study.</p>}
   </div>
   <div className="routine-calendar-footer"><p><strong>From intention to consistency.</strong> Daily English, rotating language groups and a dedicated review block complement engineering and leadership study.</p><span>Current plan from 12 Oct 2026.<br/>6h15–7h of scheduled study per day.</span></div>
  </div>
 </div>
}
