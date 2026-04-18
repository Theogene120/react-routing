import { useDispatch } from "react-redux";
import { login, logout } from "../feactures/user";

function Login() {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-center mt-10">
      <button className="border border-black p-4 bg-gray-300"
      onClick={() => {dispatch(login({name: 'Theo', age: 20, email: 'theo@gmail.com'}))}}
      >LogIn</button>
      <button className="border border-black p-4 bg-gray-300" onClick={() => {dispatch(logout())}}>Logout</button>
    </div>
  );
}

export default Login;
