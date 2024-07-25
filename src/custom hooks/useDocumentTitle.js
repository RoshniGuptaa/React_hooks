import  { useEffect } from 'react'
//Made a custom hook useDocumentTitle
function useDocumentTitle(count) {
  useEffect(()=>{
    document.title = `clicked - ${count} `
  },[count])
}

export default useDocumentTitle
