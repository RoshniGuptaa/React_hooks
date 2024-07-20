import React,{useState} from 'react'
//When you have to pass value with respect to previous set value use previous state setter
export default function HookCounterTwo() {
    const initialCount=0
    const[count,setCount]=useState(initialCount)
  return (
    <div>
        <hr/>
        Showing use of initialState of useState
        <br/>
      Count:{count}
      <br/>
      <button onClick={()=>setCount(initialCount)}>Reset</button>
      <button onClick={()=>setCount(prevCount=>prevCount+1)}>Incrment</button>
      <button onClick={()=>setCount(prevCount=>prevCount-1)}>Decrement</button>
    </div>
  )
}
