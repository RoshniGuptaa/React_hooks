import React ,{useState}from 'react'

export default function HookCounter() {
    //Using useState hook ,it is a function
    const [count,setCount]=useState(0)
  return (
    <div>
      <button onClick={()=>setCount(count+1)}>Hook Count {count}</button>
    </div>
  )
}
