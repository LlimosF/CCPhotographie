import React from "react";
import {Link} from 'react-router-dom';

export default function navtogalerie () {
  return (
    <div className="">
      <nav className="nav-galerie">
        <ul className="ul-galerie">
          <li><Link to="/galerie" className="link-galerie">Vedette</Link></li>
          <li><Link to="/juste-moi" className="link-galerie">Juste moi</Link></li>
          <li><Link to="/pour-deux" className="link-galerie">Pour deux</Link></li>
          <li><Link to="/famille" className="link-galerie">Famille</Link></li>
          <li><Link to="/il-était-une-fois" className="link-galerie">Il était une fois</Link></li>
          <li><Link to="/mon-bébé" className="link-galerie">Mon bébé</Link></li>
          <li><Link to="/street" className="link-galerie">Street</Link></li>
          <li><Link to="/voiture" className="link-galerie">Voiture</Link></li>
          <li><Link to="/j'immortalise-l'évènement" className="link-galerie">J'immortalise l'évènement</Link></li>
        </ul>
      </nav>
    </div>  
  )
}