import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <h1 className='text-5xl font-bold text-purple-600'>Hello world</h1>
  )
}

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)