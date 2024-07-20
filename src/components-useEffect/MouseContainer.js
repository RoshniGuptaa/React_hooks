import React,{useState} from 'react'
import HookMouse from './HookMouse'
//React cleanup
export default function MouseContainer() {
    const [display,setDisplay]=useState(true)
  return (
    <div>
      <button onClick={()=>setDisplay(!display)}>Toggle Display</button>
      {display && <HookMouse/>}
    </div>
  )
}
