import React from 'react'

const Timer = () => {
    const now=new Date().toLocaleTimeString()
  return (
    <div>
        <p>the time is now : {now}</p>
    </div>
  )
}

export default Timer