import { createRoot } from 'react-dom/client'


import './index.css'
import React, { StrictMode } from 'react'
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
import Theme from './Theme'



// Redux staff

import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import AppRedux from './AppRedux'
import userReducer from './feactures/user'


const store = configureStore({
  reducer: {  // function that hold information of current state and the action that will be implemented on that state
    user: userReducer,
  }
})

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <AppRedux />
  </Provider>
)

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <Theme />
//   </StrictMode>
// )



