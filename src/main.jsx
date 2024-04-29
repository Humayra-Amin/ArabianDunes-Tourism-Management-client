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
import MyList from './components/MyList/MyList';
import AuthProvider from './AuthProvider/AuthProvider';
import UserProfile from './components/UserProfile/UserProfile';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
// import AllSpot from './components/AllSpot/AllSpot';

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
        element: <ProtectedRoute>
          <AddSpot></AddSpot>,
        </ProtectedRoute>,
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
      // {
      //   path: '/allSpot',
      //   element: <AllSpot></AllSpot>,
      //   loader: ({params}) => fetch(`http://localhost:5000/tours/${params._id}`)
      // },
      {
        path: '/list',
        element: <MyList></MyList>,
      },
      {
        path: '/tours/:_id',
        element: <ProtectedRoute>
          <SpotDetails></SpotDetails>,
        </ProtectedRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/tours/${params._id}`)
      },
      {
        path: '/userprofile',
        element: <UserProfile></UserProfile>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>
)
