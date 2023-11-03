import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount] = useState(0);
  return (
    <>
    <div>Counter:{count}</div>
    <button onClick={()=>setCount(count+1)} disabled={count>=30}>Increment</button>
    <button onClick={()=>setCount(count-1)} disabled={count<=0}>Decrement</button>
    </>
  )
}

export default Counter