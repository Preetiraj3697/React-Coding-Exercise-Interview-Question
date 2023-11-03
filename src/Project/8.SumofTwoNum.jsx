import React, { useState } from 'react'

const SumofTwoNum = () => {
    const [number1,setNumber1] = useState('');
    const [number2,setNumber2] = useState('');
    const [total,setTotal] = useState(0);
    const handleAdd = () =>{
        const newTotal = number1+number2;
        setTotal(newTotal);
    }
  return (
    <> 
    <div>SumofTwoNum</div>
    <input type='number' value={number1} onChange={(e)=>setNumber1(+e.target.value)} />
    <input type='number' value={number2} onChange={(e)=>setNumber2(+e.target.value)} />
    <button type="submit" onClick={handleAdd}>Add</button>
    <div>total:{total}</div>
    </>
   
    
  )
}

export default SumofTwoNum