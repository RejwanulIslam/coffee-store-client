import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Addcoffe from './compments/AddCoffe.jsx';
import UpdateCoffe from './compments/UpdateCoffe.jsx';
import CoffeeCard from './compments/CoffeeCard.jsx';
import SignUp from './compments/SignUp.jsx';
import SignIn from './compments/SignIn.jsx';
import Authprovider from './provider/Authprovider.jsx';
import User from './compments/User.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch('http://localhost:5000/coffee')
  },
  {
    path: "/addCoffe",
    element: <Addcoffe></Addcoffe>
  },
  {
    path: "/updateCoffe/:id",
    element: <UpdateCoffe></UpdateCoffe>,
    loader:({params})=>fetch(`http://localhost:5000/coffee/${params.id}`)
  },
  {
    path:"/signup",
    element:<SignUp></SignUp>
  },
  {
    path:"/signin",
    element:<SignIn></SignIn>
  },
  {
    path:"/users",
    element:<User></User>,
    loader:()=>fetch('http://localhost:5000/users')
  }

]);




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authprovider>
    <RouterProvider router={router} />

    </Authprovider>
  </StrictMode>,
)
