import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App'
import URLParams from './URLParams'
import CustomHook from './CustomHook'
import { useNavigate } from 'react-router-dom'
import Component1 from './Hooks/ContextHook'
import Timer from './Hooks/UseRefHook'
import Counter from './Hooks/UseReducerHook'
import Search from './Hooks/UseCallbackHook'
import CalculateWithMemo from './Hooks/useMemoHook'
import Custom from './Hooks/CustomHook2'



createRoot(document.getElementById('root')).render(
  <Custom />
)



