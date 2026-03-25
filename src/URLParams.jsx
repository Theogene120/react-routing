import { BrowserRouter, Route, Routes, useParams, NavLink } from "react-router-dom";

function Info(){
    const {firstname} = useParams()

    return(
        <h1 className="ml-5 text-2xl font-extrabold">Hello, {firstname}</h1>
    )
}

function URLParams(){

    return(
        <BrowserRouter>
            <nav className='m-5 flex gap-10 font-semibold text-lg'>
                <NavLink className={({isActive}) => isActive ? "text-purple-500" : "hover:underline"} to='/John'>John</NavLink>
                <NavLink className={({isActive}) => isActive ? "text-purple-500" : "hover:underline"} to='/Peter'>Peter</NavLink>
                <NavLink className={({isActive}) => isActive ? "text-purple-500" : "hover:underline"} to='/Joseph'>Joseph</NavLink>
            </nav>
            <Routes>
                <Route path="/:firstname" element={<Info />} />
            </Routes>
        </BrowserRouter>
    )
}

export default URLParams;