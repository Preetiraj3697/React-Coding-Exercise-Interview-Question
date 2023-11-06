import React,{useState} from 'react'
import {FaStar} from 'react-icons/fa';
import './Star.css'
const startGenerate = (numOfStart = 5) => {
    const [selected,setSelected] = useState(0);

    return Array(numOfStart).fill()
    .map((item,i)=> <Start key={i} selected={selected>i} onSelected={()=> setSelected(i+1)}/>)
}

const Start = ({selected,onSelected}) => {
    return <FaStar className='star' color={selected ? "yellow" : "gray"} onClick={onSelected}/>
}
const StarRating2 = () => {
  return (
    <div>
        {startGenerate(5)}
    </div>
  )
}

export default StarRating2