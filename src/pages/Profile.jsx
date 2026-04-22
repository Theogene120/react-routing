import { useSelector } from "react-redux"



function Profile(){

    const user = useSelector((state) => state.user.value)
    const themeColor = useSelector((state) => state.theme.value)

    return (
        <div className={`text-center mt-10`} style={{color: themeColor}}>
            <div className="text-blue-500 text-2xl font-bold">Profile Page</div>
            <p className="text-lg">Name : {user.name}</p>
            <p className="text-lg">Age : {user.age}</p>
            <p className="text-lg">Email : {user.email}</p>
        </div>
    )
}

export default Profile