import { createRoot } from 'react-dom/client'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import './index.css'
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


import AppRedux from './AppRedux'
import userReducer from './feactures/user'

const store = configureStore({
  reducer: {
    user: userReducer,
  }
})

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <AppRedux />
  </Provider>
)



