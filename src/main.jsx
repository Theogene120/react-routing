import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App'
import { About } from './App'
import URLParams from './URLParams'



createRoot(document.getElementById('root')).render(
  <Test />
)


import { useState, useRef, useEffect } from 'react';

function Test() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <p>Type in the input field: </p>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
    </>
  );
}