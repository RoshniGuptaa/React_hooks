import React,{useState,useCallback} from 'react'
import Count from './Count'
import Button from './Button'
import Title from './Title'


export default function ParentComponent() {
    const[age,setAge]=useState(30)
const[salary,setSalary]=useState(30000)


const incrementAge=useCallback(()=>{
    setAge(age+1)
},[age])

const incrementSalary=useCallback(()=>{
    setSalary(salary+1000)
},[salary])
  return (
    <div>
      <Title></Title>
      <Count text="Age" count={age}></Count>
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Count text="Salary" count={salary}></Count>
      <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  )
}
