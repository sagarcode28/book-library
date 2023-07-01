import React from 'react';
import Navbar from '../Navbar/Navbar';
import Searchform from '../Searchform/Searchform';
import './Header.css';

function Header() {
  return (
    <div className='holder'>
      <header className='header'>
        <Navbar />
        <div className='header-content flex flex-c text-center text-white'>
          <h2 className='header-title text-capitalize'>Find your book of choice.</h2><br />
          <p className='header-text fs-18 fw-3'>Search any Book around the World and get the Information about the Book. Write the first word of Book Name and get the Results.</p>
          <Searchform />
        </div>
      </header>
    </div>
  )
}

export default Header