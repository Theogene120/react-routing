import useLocalStorage from "./useLocalStorage"

function Custom() {
    const [value, setValue] = useLocalStorage('myInput', '')

    function handleInput(e) {
        let input = e.currentTarget.value
        setValue(input)
    }

    return (
        <div>
            <input className="outline-none border border-black bg-sky-400" onChange={handleInput} type="text" />
            <p>{value}</p>
        </div>
    )
}

export default Custom