import React ,{useState}from 'react'
//Using useState with object
export default function HookCounterThree() {

    //Both the properties of name is not merged by useState :. below line throws an error
    const[name,setName]=useState({firstName:'',lastName:''})
  return (
    <form>
        {/*The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.  */}
      <input type='text'
       value={name.firstName}
        onChange={e=>setName({...name,firstName: e.target.value})}>
        </input>
      <input type='text'
       value={name.lastName} 
       onChange={e=>setName({...name,lastName: e.target.value})}>
       </input>
      <h2>Your First Name is - {name.firstName}</h2>
      <h2>Your Last Name is - {name.lastName}</h2>
      <h3>{JSON.stringify(name)}</h3>
    </form>
  )
}
