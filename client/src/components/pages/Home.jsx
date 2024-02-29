import React from 'react'
import Announcement from '../Announcement';
import NavBar from '../NavBar';
import Slider from '../Slider';
import Categories from '../Categories';
import Products from '../Products';
import Newsletter from '../Newsletter';
import Footer from '../Footer';


const Home = () => {
  return (
    <div>
     
        <NavBar/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Announcement/>
       
       
        <Slider/>
        <Categories/>
        <Products/>
        <Newsletter/>
        <Footer/>
    </div>
  )
};

export default Home;
