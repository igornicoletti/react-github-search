import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import './index.css'
import { ErrorPage } from './error'
import { NotFoundPage, ProfileLoader, ProfilePage, RootAction, RootPage } from './routes'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path={'/'}
      action={RootAction}
      element={<RootPage />}
      errorElement={<ErrorPage />}>
      <Route errorElement={<NotFoundPage />}>
        <Route
          path={':profile'}
          loader={ProfileLoader}
          element={<ProfilePage />} />
      </Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
