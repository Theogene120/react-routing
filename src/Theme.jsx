import { createContext, useContext, useState } from "react"


function Child1() {
    return(
        <p>Hello from child one</p>
    )
}

function Child2() {
    const {dark ,toggleDark} = useContext(UseContext)
    return(
        <div>
            <p className= {`${dark ? "bg-red-500":""}`}>Hello from child two</p>
            <button onClick={toggleDark}>Dark</button>
        </div>

    )
}

const UseContext = createContext()
export default function Theme(){
    
    const [dark, setDark] = useState(false)
    const toggleDark = () => setDark(!dark)



    return (
        <UseContext.Provider value= {{dark, toggleDark}}>
        <div>
        <Child1/>
        <Child2/>
        </div>
        </UseContext.Provider>
    )
}