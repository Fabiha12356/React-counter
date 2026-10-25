import React from 'react'
import { useState } from 'react'
import "./Counter.css"

export const Counter = () => {

    let [count , setCount] = useState(0)

//   function :-
    let Add = () =>{
      setCount(count = count + 1)
        console.log(count);
    }

    let Sub = () =>{
       setCount(count = count - 1)
        console.log(count);
    }



  return (
    <div className="counter-card">

        <h1>Counter</h1>
        <p>Click the buttons to change the value</p>

        <div className="counter-display">
            <span id="count">{count}</span>
        </div>
        <div className="buttons">
            <button className="btn minus" onClick={Sub}>−</button>
            <button className="btn plus" onClick={Add}>+</button>
        </div>
    </div>
  )
}

export default Counter