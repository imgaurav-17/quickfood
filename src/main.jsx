import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Body from './components/Body.jsx'
// import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Resturantmenu from './components/Resturantmenu.jsx'

const About = lazy(() => import('./components/About.jsx'))

const approuter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
      {
        path: '/',
        element: <Body/>,
      },
      {
        path: '/about',
        element: <Suspense><About /></Suspense>,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/resturantmenu/:resid',
        element: <Resturantmenu />,
      }
    ]
  }
]
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={approuter}/>
  </StrictMode>,
)

