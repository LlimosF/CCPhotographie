import React from 'react';
import {Link} from 'react-router-dom';
import './../NavbarMobile/style.css';
import HeaderNavbar from '../HeaderNavbar';
import Footer from '../Footer';

export default function NavbarMobile () {
  return (
    <div className='Navbar'>
      <HeaderNavbar />
      <nav>
        <ul className='NavUl'>
          <Link to="/"><li className='first NavLi'>Accueil</li></Link>
          <Link to="/Galerie"><li className='NavLi'>Galerie</li></Link>
          <Link to="/Tarifs"><li className='NavLi'>Tarifs</li></Link>
          <Link to="/Contact"><li className='NavLi'>Contact</li></Link>
        </ul>
      </nav>
      <Footer />
    </div>
  )
}