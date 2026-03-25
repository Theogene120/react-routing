import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom'
import Layout from './Layout'

export function Home(){
  return (
    <h1 className='text-5xl font-bold text-purple-600 text-center'> Hello React Router </h1>
  )
}

export function About(){
  return(
    <h1 className="text-center text-2xl font-extrabold"> This is about page </h1>
  )
}

export function Contact(){
  return(
    <h1 className="text-center text-2xl font-extrabold"> This is Contact page </h1>
  )
}

function Cars(){
  return(
    <h1 className="text-center text-2xl font-extrabold"> Car section </h1>
  )
}

function Bikes(){
  return(
    <h1 className="text-center text-2xl font-extrabold"> Bike section </h1>
  )
}

export function Product(){
  return(
    <div>
    <h1 className="text-center text-2xl font-extrabold"> This is Produnct page </h1>
    <nav className='m-5 flex gap-10 font-semibold text-lg'>
      <Link className='hover:underline hover:text-purple-500' to='/product/car'>Cars</Link>
      <Link className='hover:underline hover:text-purple-500' to='/product/bike'>Bikes</Link>
    </nav>
    <Outlet />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout wraps all pages */}
        <Route path="/" element={<Layout />}>

        {/* Index route (default page) */}
        <Route index element={<Home />} />

        {/* Other pages */}
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="product" element={<Product />}>
          <Route path='car' element={<Cars />} />
          <Route path='bike' element={<Bikes />} />
        </Route>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;