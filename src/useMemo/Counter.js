import React ,{useState,useMemo}from 'react'

function Counter() {

    const [countOne ,setCountOne]=useState(0)
    const[countTwo,setCountTwo]=useState(0)

    const incrementOne=()=>{
        setCountOne(countOne+1)
    }
    const incrementTwo=()=>{
        setCountTwo(countTwo+2)
    }
    const isEven= useMemo(()=>{
        return countOne % 2 === 0
    },[countOne])
    
  return (
    <div>
      <div>
        <button onClick={incrementOne}>Count one-{countOne}</button>
        <span>{isEven?"Even":"Odd"}</span>
      </div>
      <div>
        <button onClick={incrementTwo}>Count one-{countTwo}</button>
      </div>
    </div>
  )
}

export default Counter
