
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function Home(){
  return (
    <h1 className='text-5xl font-bold text-purple-600 text-center'>Hello React Router</h1>
  )
}

export function About(){
  return(
    <h1 className="text-center text-2xl font-extrabold">This is about page</h1>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;