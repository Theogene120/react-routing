import React , { useState } from "react"

function Search(){
    const [text, setText] = useState('Type in above input')
    
    function handleInput(e){
        let input = e.currentTarget.value
        setText(input)
    }

    let search = React.useCallback(() => {
        console.log('Search for:', text)
    }, [text])    

    return(
        <div>
            <input onChange={handleInput} className="border border-black outline-none" type="text" />
            <button onClick={search}>Search</button>
        </div>
    )
    
}

export default Search