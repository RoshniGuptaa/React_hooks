import React ,{useState,useEffect}from 'react'
//Run useEffect only once ,this can be done by passing empty array
export default function HookMouse() {
    const [x,setX]=useState(0)
    const [y,setY]=useState(0)

    const logMousePosition=(e)=>{
        console.log('Mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(()=>{
        console.log('useEffect called')
        window.addEventListener('mousemove',logMousePosition)

        return ()=>{
          console.log('cleanup function called......like component unmount')
            window.removeEventListener('mousemove',logMousePosition)
        }
    },[])
  return (
    <div>
      Hoks : X-{x} , Y- {y}
    </div>
  )
}
