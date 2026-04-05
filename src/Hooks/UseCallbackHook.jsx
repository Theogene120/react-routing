import { useState } from "react"

function Search(){
    const [text, setText] = useState('')
    
    function handleInput(e){
        let input = e.currentTarget
        setText(input)
    }

    return(
        <div>
            <input onChange={(e) => handleInput(e)} className="border border-black outline-none" type="text" />
            <p>{text}</p>
        </div>
    )
    
}

// function Text(){
    
// }

export default Search