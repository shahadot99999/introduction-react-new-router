import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Users from './components/Users/Users.jsx';
import UserDetails from './components/UserDetails/UserDetails.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/about',
        element:<About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/users',
        loader:()=>fetch('https://jsonplaceholder.typicode.com/users'),
        element:<Users></Users>
      },
      {
        path: '/user/:userId',
        loader: ({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails></UserDetails>
      }
    ]
  },
  
  {
    path: "/contact",
    element: <div>please contact with me</div>,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>,
)
