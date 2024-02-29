

import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from './App.jsx';
import Home from './components/pages/Home.jsx';
import Register from './components/pages/Register.jsx';
import Login from './components/pages/Login.jsx';
import Cart from './components/pages/Cart.jsx';

const router = (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login />} />
    <Route path="/cart" element={<Cart />} />
  </Routes>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>{router}</Router>
);
