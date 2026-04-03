import { BrowserRouter, Routes, Route, Link, Outlet, NavLink } from 'react-router-dom'
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

function NotFound() {
  return(
    <div>
      <h1 className='text-3xl text-center mt-20'>404 - Page Not Found</h1>
      <p className='text-lg text-center mt-4'>The page you are looking for does not exist.</p>
    </div>
  )
}


export function Product(){
  return(
    <div>
    <h1 className="text-center text-2xl font-extrabold"> This is Produnct page </h1>
    <nav className='m-5 flex gap-10 font-semibold text-lg'>
      <NavLink className={({isActive}) => isActive ? "text-purple-500" : "hover:underline"} to='/product/car'>Cars</NavLink>
      <NavLink className={({isActive}) => isActive ? "text-purple-500" : "hover:underline"} to='/product/bike'>Bikes</NavLink>
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
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;