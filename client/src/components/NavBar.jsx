// This file is the NavTabs component. It is used to create the navigation tabs at the top of the page.
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Styles/NavBar.css';

function NavBar({ currentPage, handlePageChange }) {
  return (

    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a 
          href="#Home" 
          onClick={() => handlePageChange('Home')}
         // Check to see if the currentPage is `About me`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Fashion Spark
        </a>
      </li>
      <li className="nav-item">
        <a 
          href="#Login"
          onClick={() => handlePageChange('Login')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Login' ? 'nav-link active' : 'nav-link'}
        >
          Login
        </a>
      </li>
      <li className="nav-item">
        <a 
          href="#Register"
          onClick={() => handlePageChange('REgister')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Register' ? 'nav-link active' : 'nav-link'}
        >
          Register
        </a>
      </li>
      <li className="nav-item">
        <a 
          href="#Cart"
          onClick={() => handlePageChange('Cart')}
          className={currentPage === 'Cart' ? 'nav-link active' : 'nav-link'}
        >
          <FontAwesomeIcon icon={faShoppingCart} /> Cart
        </a>
      </li>
    </ul>
  );
}

export default NavBar;

  
 



