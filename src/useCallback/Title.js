import React from 'react'

 function Title() {
    console.log("Rendring Title")
  return (
    <div>
      useCallback Hook
    </div>
  )
}
export default React.memo(Title)
