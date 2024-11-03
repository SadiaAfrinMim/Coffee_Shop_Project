import React from 'react';
import App from '../App';
import {
    createBrowserRouter
  } from "react-router-dom";
import Layout from '../layout/Layout';
import Home from '../Pages/Home';
import Coffes from '../Pages/Coffes';
import Dashboard from '../Pages/Dashboard';
import Coffeecard from '../components/Coffeecard';
import CoffeDeatails from '../Pages/CoffeDeatails';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children:[{
        path: "/",
        element:<Home></Home>,
        loader: ()=>fetch("../categories.json"),
        children:[
          {
            path:"/",
            element:<Coffeecard></Coffeecard>,
            loader: ()=>fetch("../coffees.json"),
          },
          {
            path:"/category/:category",
            element:<Coffeecard></Coffeecard>,
            loader: ()=>fetch("../coffees.json"),
          }
        ]
      },
      {
        path:"/coffee",
        element:<Coffes></Coffes>,
        loader: ()=>fetch("../coffees.json"),
      },
      {
        path:"/dashboard",
        element:<Dashboard></Dashboard>
      },
      
      {
        path:"/coffee/:id",
        element:<CoffeDeatails></CoffeDeatails>,
        loader: ()=>fetch("../coffees.json"),
      },
      
    ]
    },
  ]);

export default router;