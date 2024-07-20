import React,{useState,useEffect} from 'react'

export default function HookCounterOne() {
    const[count,setCount]=useState(0)
    const[name,setName]=useState('')
    //For conditionaly using useEffect ,we pass in secondparameter as array 
    // within Array we need to specify props and state which we have to look
    useEffect(()=>{
        console.log("UseEffect-->Updating document title....")
        document.title=`You clicked ${count} times`
    },[count])
  return (
    <div>
        <input type='text' value={name} onChange={e=>setName(e.target.value)}></input>
      <button onClick={()=>setCount(count+1)}>Clicked {count} times</button>

    </div>
  )
}
