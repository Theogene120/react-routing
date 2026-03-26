import useFetch from "./useFetch";

function CustomHook(){
    const [data] = useFetch("https://jsonplaceholder.typicode.com/todos")

    return (
        <ul className="ml-10 flex flex-col gap-4 list-disc">
            {
                data && 
                data.map(item => <li className="" id={item.id}>{item.title}</li>)
            }
        </ul>
    )
}

export default CustomHook