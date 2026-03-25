import { BrowserRouter, Route, Routes, useParams, Link } from "react-router-dom";

function Info(){
    const {firstname} = useParams()

    return(
        <h1>Hello, {firstname}</h1>
    )
}
