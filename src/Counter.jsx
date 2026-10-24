import React from 'react'
import "./Counter.css"

export const Counter = () => {
  return (
    <div className="counter-card">

        <div className="icon">＋</div>

        <h1>Counter</h1>
        <p>Click the buttons to change the value</p>

        <div className="counter-display">
            <span id="count">0</span>
        </div>

        <div className="buttons">
            <button className="btn minus">−</button>
            <button className="btn plus">+</button>
        </div>
    </div>
  )
}

export default Counter