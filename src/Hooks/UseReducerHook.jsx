import { useReducer } from "react";

function reducer(state, action){
    switch(action.type){
        case 'increment': return {count: state.count + 1}
        case 'decrement': return {count: state.count - 1}
        case 'reset': return {count: 0}
        default: return 'Unknown Error'
    }
}

function Counter(){
    const [state, dispatch] = useReducer(reducer, {count: 0})

    return (
        <div>
            <p>Count : {state.count}</p>
            <div className="flex gag-6">
                <button className="text-3xl font-bold" onClick={() => dispatch({type: 'increment'})}>+</button>
                <button className="text-3xl font-bold" onClick={() => dispatch({type: 'decrement'})}>-</button>
                <button className="text-3xl font-bold" onClick={() => dispatch({type: 'reset'})}>reset</button>
            </div>
        </div>
    )
}

export default Counter