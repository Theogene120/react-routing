import React from "react";

const useFetch = (url) => {
    const [data, setData] = React.useState(null)

    React.useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => setData(data))
    }, [url])

    return [data]
}

export default useFetch;