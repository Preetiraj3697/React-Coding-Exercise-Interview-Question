/**
  Challenge: Make the button functional
  A click on button should toggle (show/hide) the string `Toggle Challenge` each time it is pressed
  
  Solution: https://codepen.io/angelo_jin/pen/abLwyrL
  Video for reference: https://youtu.be/VzNNjNmbXpY
**/

import { useState } from "react";

const DisplayElement = () => {
    const [show,setShow] = useState(true);
    // const handleChange = () => {
    //   if(show){
    //     setShow(false)
    //   }else{
    //     setShow(true)
    //   }
    // }
    // return (
    //   <>
    //     <button onClick={handleChange}>{show ? "Hide Element Below" : "Show Element Below"}</button>
  
    //     {show ? <div>Toggle Challenge</div> : ""}
    //   </>
    // );
    return(
    <>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide Element Below" : "Show Element Below"}
      </button>

      {show && <div>Toggle Challenge</div>}
    </>
    )
}
export default DisplayElement;