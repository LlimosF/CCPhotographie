import React from 'react';
import './style.css';
import BurgerMenu from './../../media/BurgerBar.png';
import {Link} from 'react-router-dom';

export default function Header(){
  return (
    <div className="head">
      <h1>Charles Cantin Photographie</h1>
      <Link to="/NavbarMobile"><img src={BurgerMenu} alt="Bouton pour accéder au menu de navigation" className="BurgerMenu" /></Link>
      <div className='SizeNavbar'>
        <nav>
          <ul>
            <li className='LiNavBar'><Link to="/">Accueil</Link></li>
            <li className='LiNavBar'><Link to="/Galerie">Galerie</Link></li>
            <li className='LiNavBar'><Link to="/Tarifs">Tarifs</Link></li>
            <li className='LiNavBar'><Link to="/Contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}