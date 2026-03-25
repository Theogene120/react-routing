import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <>
      {/* Navbar */}
      <nav className='m-5 flex gap-10 font-semibold text-lg'>
        <Link className='hover:underline hover:text-purple-500' to="/">Home</Link>
        <Link className='hover:underline hover:text-purple-500' to="/about">About</Link>
        <Link className='hover:underline hover:text-purple-500' to="/contact">Contact</Link>
        <Link className='hover:underline hover:text-purple-500' to="/product">Product</Link>
        
      </nav>

      {/* THIS is where pages will appear */}
      <Outlet />

      {/* Footer */}
      <footer className='font-extralight text-sm text-center mt-40'>
        This footer now works on all pages 😎
      </footer>
    </>
  );
}

export default Layout;