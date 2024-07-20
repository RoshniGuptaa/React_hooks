import React,{useState,useEffect} from 'react'
import axios from 'axios'
 // fetching data from an API and displaying it as a list of posts
export default function DataFetching() {
    const[post,setPost]=useState({})
    const [id,setId]=useState(1)
    const [idButton,setIdButton]=useState(1)

    const handleClick=()=>{
        setIdButton(id)
    }
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idButton}`)
       .then(res=>
        {
            console.log(res) 
            setPost(res.data)})
       .catch(err=>console.log(err))
    },[idButton])


  return (
    <div>
        <input type="text" key='id' onChange={e=>setId(e.target.value)} ></input>
        <button type='submit' onClick={handleClick}>Submit</button>
        <h1>{post.title}</h1>

      {/*  For list of posts
       <ul>
        {
            posts.map(post=><li key={post.id}>{post.title}</li>)
        }
      </ul> */}
      {/* For ingle post with respect to id */}
      <h1>{post.title}</h1>
    </div>
  )
}
