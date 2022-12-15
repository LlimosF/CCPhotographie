import React from "react";
import "./../FormAfterCompo/style.css";
import {Link} from "react-router-dom";
import Logo from "../../media/LogoPhoto.png";

export default function FormAfterCompo () {
  return (
    <div>
      <h2 className="AfterTitle">Merci pour votre demande !</h2>
      <p className="Confirmation">Si votre formulaire a correctement été rempli, je reviendrais vers vous rapidement !</p>
      <div className="Link">
        <Link to="/" className="LinkBackHome">Revenir au menu principal</Link>
      </div>
      <div className="DivLogo">
        <img src={Logo} alt="" className="LogoPhoto"/>
      </div>
    </div>
  );
}