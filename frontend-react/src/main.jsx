import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// router
import { RouterProvider } from 'react-router-dom'
import routes from './router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* single page */}
    <RouterProvider router={routes}/> 
  </React.StrictMode>,
)
