import { useState } from 'react';
import NavBar from './NavBar'; 
import Home from './pages/Home';
import Register from './pages/Register';
import Search from './pages/Search';
import ShoppingCart from './pages/ProductList';
import SignIn from './pages/SignIn';



export default function AppContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Register') {
      return <Register />;
    }
    if (currentPage === 'SignIn') {
      return <SignIn />;
    }
    if (currentPage=== 'ShoppingCart') {
      return <ShoppingCart />;
    }
    return <Home/>
    
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      <main className="mx-3">{renderPage()}</main>
    </div>
  );
}
