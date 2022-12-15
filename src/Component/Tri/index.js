import React from "react";
import './../Tri/style.css';
import {Link} from 'react-router-dom';

export default function Tri () {
  return (
    <div>
      <nav className="TriNav">
        <ul className="TriUl">
          <Link to="/Galerie"><li className="TriLi">Vedette</li></Link>
          <Link to="/Mariage"><li className="TriLi">Mariage</li></Link>
          <Link to="/Grossesse"><li className="TriLi">Grossesse</li></Link>
          <Link to="/Bebe"><li className="TriLi">Bébé</li></Link>
          <Link to="/Famille"><li className="TriLi">Famille</li></Link>
          <Link to="/Bapteme"><li className="TriLi">Baptême</li></Link>
          <Link to="/Couple"><li className="TriLi">Couple</li></Link>
        </ul>
      </nav>
    </div>
  );
}