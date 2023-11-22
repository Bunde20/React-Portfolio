import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App'
import AboutMe from './pages/AboutMe'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Resume from './pages/Resume'
import NotFound from './pages/Error'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { 
        index: true, 
        element: <AboutMe /> 
      },
      { 
        path: '/Projects', 
        element: <Projects /> 
      },
      { 
        path: '/Contact', 
        element: <Contact /> 
      },
      { 
        path: '/Resume', 
        element: <Resume /> 
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

