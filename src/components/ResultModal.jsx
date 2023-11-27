import { useImperativeHandle } from "react";
import { useRef } from "react";
import { forwardRef } from "react";

const ResultModal= forwardRef( function ResultModal({targetTime,remindingTime,onReset},ref){
  const remindingTimeFormated = (remindingTime/1000).toFixed(2);
  const userLost = remindingTime <= 0;
  const score = Math.round((1-remindingTime/(targetTime*1000))*100);
    const dialog =useRef();
   useImperativeHandle(ref,()=>{
    return({
        open(){
            dialog.current.showModal();
        }
    });
   })

    return(
        <dialog className="result-modal" ref={dialog}  onClose={onReset}>
            {userLost && <h2> You Lost</h2>}
            {!userLost && <h2> Your Score:{score}</h2>}

            <p>the target time was <strong>{targetTime} seconds</strong></p>
            <p>you stoped the timer with <strong>{remindingTimeFormated} seconds left</strong></p>


            <form method="dialog" onSubmit={onReset}>
              <button>close</button>
            </form>
        </dialog>
       
    );
});
export default ResultModal;