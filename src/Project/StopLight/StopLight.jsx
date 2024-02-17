import React, { useEffect, useState } from 'react'
import "./index.css"
const STOP_DELAY = 3000;
const SLOW_DELAY = 2000;
const GO_DELAY = 5000;
const StopLight = () => {
    const [state, setState] = useState("stop");

    function getStoplightClass(light) {
        return `light ${light}`+ (state === light ? " on":"")
    }
    useEffect(() => {
        if (state === 'stop') {
         setTimeout(()=> setState('go'),STOP_DELAY)   
        } else if (state === 'slow') {
            setTimeout(()=> setState('stop'),SLOW_DELAY) 
        } else {
            //go
            setTimeout(()=> setState('slow'),GO_DELAY) 
        }
    },[state])
  return (
      <div className='stop-light'>
          <div className={getStoplightClass('stop')}></div>
          <div className={getStoplightClass('slow')}></div>
          <div className={getStoplightClass('go')}></div>
      </div>
  )
}

export default StopLight