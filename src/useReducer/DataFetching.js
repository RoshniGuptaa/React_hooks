import axios from 'axios'
import React ,{useReducer,useEffect}from 'react'

const initialState={
    loading:true,
    error:false,
    post:{}
}

const reducer=(state,action)=>{
    switch(action.type)
    {
        case "FETCH_SUCCESS":
            return{
                loading:false,
                post:action.payload,
                error:''

            }
        case "FETCH_FAILURE":
            return{
                loading:false,
                post:{},
                error:"error while fetchind data.........."
            }
        default :return state
    }
}


export default function DataFetching() {
    const [state,dispatch]=useReducer(reducer,initialState)

    useEffect(()=>
        { axios.get('https://jsonplaceholder.typicode.com/posts/1')
          .then(response=>{
            dispatch({type:"FETCH_SUCCESS" ,payload:response.data})
          })
          .catch(error=>{
            dispatch({type:"FETCH_FAILURE"})
          })
        },[])
  return (
    <div>
      {state.loading?'loading':state.post.title}
      {state.error?state.error:null}
    </div>
  )
}
