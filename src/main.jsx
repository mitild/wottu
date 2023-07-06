import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './routes/Router'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import DataContextProvider from './context/Context'
import Theme from '../theme/Theme'
import UserContextProvider from './context/userContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Theme>
    <UserContextProvider>
      <DataContextProvider>
        <RouterProvider router={ Router } />
      </DataContextProvider>
    </UserContextProvider>
  </Theme>
)
