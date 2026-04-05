import { useRef, useState } from "react";

export default function Timer(){
    const [count, setcount] = useState(0)
    const timerRef = useRef(null)

    function Start(){
        timerRef.current = setInterval(() => {
            setcount(prev => prev + 1)
        }, 1000);
    }

    function Stop(){
        clearInterval(timerRef.current)
    }

    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={Start}>Start</button>
            <button onClick={Stop}>Stop</button>
        </div>
    )
}