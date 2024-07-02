import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import './index.css'
import { ErrorPage } from './error'
import { ProfilePage, SearchPage } from './routes'

const router = createBrowserRouter([
  {
    path: '/',
    element: <SearchPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/:profileId',
    element: <ProfilePage />,
    errorElement: <ErrorPage />,
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
