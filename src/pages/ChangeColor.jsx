import { useState } from "react"
import { useDispatch } from "react-redux"
import { changeColor } from "../feactures/theme"


function ChangeColor() {
    const [color, setColor] = useState('')
    const dispatch = useDispatch()
    return (
        <div className="m-10 text-center gap-4 flex justify-center"> 
            <input className="outline-none border-2 p-1 border-black" type="text" onChange={(e) => setColor(e.target.value)}/>
            <button className="border-2 bg-blue-400 text-white border-black p-2 font-bold text-sm rounded-md" onClick={() => {dispatch(changeColor(color))}}>CHANGE COLOR</button>
        </div>
    )
}
export default ChangeColor