import React, { useState } from 'react'
import '../index.css'
const DarkMode = () => {
    const [toggle, setToggle] = useState(false)
    const handleThemeChange = () => {
            setToggle(!toggle)
    }
    return (
        <>
            <div className={toggle ? "light" : "dark"}>
                <h1>{toggle ? "Light" : "Dark"}</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet et atque cumque veritatis aperiam sed deleniti corrupti, vero ipsa velit laborum. Porro, aliquid molestiae? Et doloremque dignissimos voluptatem quas repellat?
                Esse rerum sed consectetur repellat veritatis corrupti odit quae accusamus dolorum! Nemo repudiandae, voluptas exercitationem libero ducimus, quis qui neque quod quaerat blanditiis aperiam perferendis nobis tenetur magnam velit a.
                Qui fuga repellendus natus voluptatum distinctio harum tempore? Repellendus, enim! Tenetur voluptatum alias, consequatur itaque, totam nulla placeat a autem culpa deleniti tempora quaerat, voluptatibus porro. Minima vel nam assumenda?
                Corrupti dolore provident ullam quisquam minus. Incidunt eligendi assumenda illum eius sed, reiciendis eos provident, asperiores magni esse quisquam nobis nisi beatae est sint ipsa itaque? Impedit cumque molestiae quae!
                Consequuntur est mollitia temporibus ducimus a obcaecati aliquid vero! Optio, quo dolor? Aspernatur saepe asperiores ad laborum sunt? Cupiditate delectus laudantium repellendus nihil sapiente. Esse ab illo dolorem expedita ipsam?</p>
            </div>
            <button onClick={handleThemeChange}>{toggle ? "Dark": "Light" }</button>
        </>
      
  )
}

export default DarkMode