import { Outlet, NavLink } from "react-router-dom";

function Layout() {
  return (
    <>
      {/* Navbar */}
      <nav className='m-5 flex gap-10 font-semibold text-lg'>
        <NavLink className={({isActive}) => isActive ? "text-purple-500" : "hover:underline"} to="/">Home</NavLink>
        <NavLink className={({isActive}) => isActive ? "text-purple-500" : "hover:underline"} to="/about">About</NavLink>
        <NavLink className={({isActive}) => isActive ? "text-purple-500" : "hover:underline"} to="/contact">Contact</NavLink>
        <NavLink className={({isActive}) => isActive ? "text-purple-500" : "hover:underline"} to="/product">Product</NavLink>
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