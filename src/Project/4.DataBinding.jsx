import React, { useState } from 'react'

const DataBinding = () => {
    const [value,setValue] = useState("");
  return (
    <>
    <input type='text' placeholder='write text' value={value} onChange={(e)=>setValue(e.target.value)} />
    <h1>{value}</h1>
    </>
  )
}

export default DataBinding