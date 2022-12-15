import React from "react";
import "./style.css"
import {Link} from "react-router-dom";

export default function ContactCompo () {
  return (
    <div>
      <p className="Avertissement"> !! Veillez à bien remplir tous les champs correctement !!</p>
      <div className="form">
        <form action="" method="get" class="form-example">
          <div className="Input">
            <label for="name" className="Label">Prénom: </label>
            <input type="text" name="name" id="name" required />
          </div>
          <div className="Input">
            <label for="name" className="Label">Nom: </label>
            <input type="text" name="name" id="name" required />
          </div>
          <div className="Input">
            <label for="email" className="Label">Adresse e-mail: </label>
            <input type="email" name="email" id="email" required />
          </div>
          <div>
            <Link to="/FormAfterPage"><input type="submit" value="Envoyer!" className="button"/></Link>
          </div>
        </form>
      </div>
    </div>
  );
}

