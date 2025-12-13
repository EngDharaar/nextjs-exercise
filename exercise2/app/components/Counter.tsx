import React, {  useState } from 'react'
import Timer from './Timer'

const Counter = () => {
    const [count,setCount]=useState(0)
  return (
    <div>
        <p>{count}</p>
        <button 
        onClick={()=>setCount(count+1)}
        className='bg-blue-600 p-2 rounded text-white'
        >increment </button>
        <Timer/>
    </div>
  )
}

export default Counter