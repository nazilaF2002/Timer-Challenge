import { useRef } from 'react';
import { useState } from 'react';
import ResultModal from './ResultModal';

export default function TimerChallenge({ title, targetTime }) {
  const timmer=useRef();
  const dialog=useRef();
  const [remindingTime,setRemindingTime]=useState(targetTime * 1000);
  const timmerActive = remindingTime>0 && remindingTime<targetTime *1000;
  if(remindingTime<=0){
    clearInterval(timmer.current);
    dialog.current.open();
    // setRemindingTime(targetTime*1000);
  }
const hundleStart=()=>{
 timmer.current= setInterval(() => {
  setRemindingTime(previousTime => previousTime-10);
  }, 10);
}
 function hundelStop(){
  clearInterval(timmer.current); 
  dialog.current.open();
  // setRemindingTime(targetTime*1000);
 }
 const resetTimer=()=>{
  setRemindingTime(targetTime*1000);
 }
  return (
    <>
    <ResultModal ref={dialog} targetTime={targetTime} remindingTime={remindingTime} onReset={resetTimer}/> 
    <section className="challenge">
      <h2>{title}</h2>
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? 's' : ''}
      </p>
      <p>
        <button onClick={timmerActive ? hundelStop:hundleStart}>
         {timmerActive ? 'stop':'start'} challenge
        </button>
      </p>
      <p className={timmerActive ? 'active':undefined}>
         {timmerActive ? 'Time is running...': 'Time is inactive'}
      </p>
    </section>
    </>
  );
}
 // setStartTimmer(false);