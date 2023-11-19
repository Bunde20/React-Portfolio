import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Home from './pages/Home.jsx'
import AboutMe from './pages/AboutMe.jsx'
import Projects from './pages/Projects.jsx'
import ContactMe from './pages/ContactMe.jsx'
import Resume from './pages/Resume.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { 
        path: '/', 
        element: <Home /> 
      },
      { 
        path: '/AboutMe', 
        element: <AboutMe /> 
      },
      { 
        path: '/Projects', 
        element: <Projects /> 
      },
      { 
        path: '/ContactMe', 
        element: <ContactMe /> 
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