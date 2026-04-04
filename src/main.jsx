import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App'
import { About } from './App'
import URLParams from './URLParams'
import CustomHook from './CustomHook'
import { useNavigate } from 'react-router-dom'



createRoot(document.getElementById('root')).render(
  <URLParams />
)



function Test() {
  const [count, setCount] = React.useState(0);
  const [text, setText] = React.useState("");

  const expensiveCalculation = (num) => {
    console.log("Calculating...");
    return num * 2;
  };

  const result = React.useMemo(() => {
    return expensiveCalculation(count);
  }, [count]);

  return (
    <>
      <h1>Result: {result}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <input className='ml-2 border border-black outline-none' value={text} onChange={(e) => setText(e.target.value)} />
    </>
  );
}

function LogIn() {
  const navigate = useNavigate()
  
  function handleSubmit(e) {
    e.preventDefault()
    // different logic
    navigate('/dashboard', {relative: true})
  }
}