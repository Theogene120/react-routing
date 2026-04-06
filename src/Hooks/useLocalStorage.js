import React from "react"

let useLocalStorage = (key, initialValue) => {
    const [value, setValue] = React.useState(() => {
        return localStorage.getItem(key) || initialValue
    })

    function updateValue(newValue) {
        setValue(newValue)
        localStorage.setItem(key, newValue)
    }

    return [value, updateValue]
}

export default useLocalStorage