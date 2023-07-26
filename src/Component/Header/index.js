import React from 'react';
import {Link} from 'react-router-dom';
import Burger from './../../media/BurgerBar.png';

export default function Header () {
  return (
    <div className="header">
      <nav className="navbar container">
        <Link to="/"><h1>Charles Cantin</h1></Link>
        <input type="checkbox" id="toggler" />
        <label for="toggler"><img src={Burger} className="burgerLogo" alt="Menu burger"></img></label>
        <div className="menu">
          <ul className="list">
            <li className="LiNavTop"><Link to="/" className="LinkNav">Accueil</Link></li>
            <li className="LiNavTop"><Link to="/galerie" className="LinkNav">Galerie</Link></li>
            <li className="LiNavTop"><Link to="/tarifs" className="LinkNav">Tarifs</Link></li>
            <li className="LiNavTop"><Link to="/contact" className="LinkNav">Contact</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
