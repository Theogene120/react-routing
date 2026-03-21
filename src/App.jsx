
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
    <nav className='m-5 flex gap-10 font-semibold text-lg '>
      <Link className='hover:underline hover:text-purple-500' to="/">Home</Link>
      <Link className='hover:underline hover:text-purple-500' to="/about">About</Link>
    </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;