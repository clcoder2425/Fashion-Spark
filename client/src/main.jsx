// // import React from 'react'
// import ReactDOM from 'react-dom/client'
// import {createBrowserRouter, RouterProvider} from "react-router-dom"
// import App from './App.jsx'
// import Home from './components/pages/Home.jsx'
// import Register from './components/pages/Register.jsx'
// import Login from './components/pages/Login.jsx'
// // import { Router } from '@mui/icons-material'


// // ReactDOM.createRoot(document.getElementById('root')).render(
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>,
// // )
// const router = createBrowserRouter([
//   {
//     path: "/",
//     children:[
//       {
//       index: true,
//       element: <Home/>
//       },
//       {
//         path: "register",
//         element: <Register/>
//       },
//       {
//         path: "login",
//         element: <Login/>
//       }
//     ]
//   }
// ]);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <RouterProvider router={router}/>
//     )

import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from './App.jsx';
import Home from './components/pages/Home.jsx';
import Register from './components/pages/Register.jsx';
import Login from './components/pages/Login.jsx';
// import Cart from './components/pages/Cart.jsx';

const router = (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login />} />
    {/* <Route path="/cart" element={<Cart />} /> */}
  </Routes>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>{router}</Router>
);
