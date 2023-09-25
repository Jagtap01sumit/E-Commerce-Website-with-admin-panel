import React from 'react';
import './App.css';
import Home from './pages/Home';
import LogInPage from './pages/LogInPage';
import SignupPage from './pages/SignupPage';
import ProductDetailPage from './pages/ProductDetailPage';

import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import CartPage from './pages/CartPage';
import CheckOut from './pages/CheckOut';
import Protected from './features/auth/components/Protected';


const router = createBrowserRouter([
  {
    path: "/",
    element: (<Protected><Home/></Protected>),
  },
  {
    path: "/login",
    element: (<LogInPage/>)
  },
  {
    path: "/signup",
    element: (<SignupPage/>)
  },
  {
    path: "/cart",
    element: (<Protected><CartPage/></Protected>)
  },
  {
    path: "/checkout",
    element: (<Protected><CheckOut/></Protected>)
  },
  {
    path: "/product-details/:id",
    element: <Protected><ProductDetailPage/></Protected>
  },
]);


function App() {
  return (
    <div className="App">
  
  <RouterProvider router={router} />
    </div>
  );
}

export default App;
