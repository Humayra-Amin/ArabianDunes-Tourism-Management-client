import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import AddSpot from './components/AddSpot/AddSpot';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { HelmetProvider } from 'react-helmet-async';
import SpotDetails from './components/SpotDetails/SpotDetails';
import AboutUs from './components/AboutUs/AboutUs';
import Contact from './components/Contact/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/tours')
      },
      {
        path: '/addSpot',
        element: <AddSpot></AddSpot>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/aboutUs',
        element: <AboutUs></AboutUs>,
      },
      {
        path: '/contact',
        element: <Contact></Contact>,
      },
      {
        path: '/tours/:_id',
        element: <SpotDetails></SpotDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/tours/${params._id}`)
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
)
