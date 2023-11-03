import { useState } from "react"


const DisableButton = () => {
    const [value,setValue] = useState("");
  return (
    <>
    <input type="text" placeholder="write text" value={value} onChange={(e)=>setValue(e.target.value)} />
    <button type="submit" disabled={value.length<1}>Submit</button>
    </>
  )
}

export default DisableButton