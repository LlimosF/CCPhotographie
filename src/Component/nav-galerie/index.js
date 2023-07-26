import React from "react";
import {Link} from 'react-router-dom';

export default function navtogalerie () {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/juste-moi">Juste moi</Link></li>
          <li><Link to="/pour-deux">Pour deux</Link></li>
          <li><Link to="/famille">Famille</Link></li>
          <li><Link to="/il-était-une-fois">Il était une fois</Link></li>
          <li><Link to="/mon-bébé">Mon bébé</Link></li>
          <li><Link to="/street">Street</Link></li>
          <li><Link to="/voiture">Voiture</Link></li>
          <li><Link to="/j'immortalise-l'évènement">J'immortalise l'évènement</Link></li>
        </ul>
      </nav>
    </div>  
  )
}