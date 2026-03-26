import useFetch from "./useFetch";

function CustomHook(){
    const [data] = useFetch("https://jsonplaceholder.typicode.com/todos")

    return (
        <>
            {
                data && 
                data.map(item => <p id={item.id}>{item.title}</p>)
            }
        </>
    )
}

export default CustomHook