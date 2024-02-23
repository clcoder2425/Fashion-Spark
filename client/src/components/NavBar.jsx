// This file is the NavTabs component. It is used to create the navigation tabs at the top of the page.


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
          Home
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
        <a id ='nav-button'
          href="#Cart"
          onClick={() => handlePageChange('Cart')}
          // Check to see if the currentPage is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Cart' ? 'nav-link active' : 'nav-link'}
        >
         Cart
        </a>
      </li>
    </ul>
  );
}

export default NavBar;

  
 



