import React from "react";

function CalculateWithMemo() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const [count, setCount] = React.useState(arr)

    function handleClick(){
        setCount(prev => [...prev, prev[prev.length-1] + 1])
    }

    let sum = React.useCallback(() => {
        console.log('Calculating sum...')
        return count.reduce((sum, num) => sum + num, 0)
    }, [count])

    return(
        <>
            <p>{count.join(', ')}</p>
            <p>Sum = {sum()}</p>
            <button onClick={handleClick}>Click to increase</button>
            
        </>  
    )
}

export default CalculateWithMemo