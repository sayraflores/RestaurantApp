import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {

  return (
    <>
  <div className='navbar'> 
  <h2 className='logo'>Cozy Cuisine </h2>
    <ul>
    <li><Link to='/'>Home</Link></li>
      <li><Link to='/Friends'>Friends</Link></li>
      <li><Link to='/Restaurant'>Restaurant</Link></li>

    </ul>
    </div>
    </>
  )
}

export default Navbar;