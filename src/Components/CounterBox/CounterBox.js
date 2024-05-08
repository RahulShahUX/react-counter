import { useState } from "react";
import "./CounterBox.css";
export default function Counter() {
    const [counter, setCounter] = useState(0)
    return(
        <div className="counter-box-wrapper">  
             <h1 className="counter-box-title">React Web</h1>
            <p className="counter-number">{counter}</p>
            <div className="counter-box-row">
                <button onClick={()=>setCounter(counter-1)}>Decrement</button>
                <button onClick={()=>setCounter(counter+1)}>increment</button>
            </div>
            <div className="counter-box-row">
                <button onClick={()=>setCounter(0)}>Reset</button>
            </div>
        </div>
    )
}