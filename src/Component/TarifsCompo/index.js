import React from "react";
import "./../TarifsCompo/style.css";

export default function TarifsCompo () {
  return (
    <div className="Tarifs">
      <div className="Tarif1 TarifDiv">
      <p className="TarifText">Tous mes différents tarifs sont indiqués ci-dessous.</p>
        <h3 className="TitleTarifs">" Juste moi "</h3>
        <ul>
          <li className="ListTarif">Valeur: <span className="Price">130 $</span></li>
          <li className="ListTarif"><span className="DescriptionSpan">Description: </span>Séance photo pour une personne, en extérieur ou en studio.</li>
        </ul>
        <h3 className="TitleTarifs">" Pour deux "</h3>
        <ul>
          <li className="ListTarif">Valeur: <span className="Price">195 $</span></li>
          <li className="ListTarif"><span className="DescriptionSpan">Description: </span>Pour deux personnes, en extérieur ou en studio.</li>
        </ul>
        <h3 className="TitleTarifs">" Famille "</h3>
        <ul>
          <li className="ListTarif">Valeur: <span className="Price">220 $</span></li>
          <li className="ListTarif">
          <span className="DescriptionSpan">Description: </span>Pour la famille ou les amis jusqu’à 4 personnes, en extérieur ou en studio
            30 euros en supplément par personne au-delà de 4 ( hormis enfant jusqu’à 2 ans ).
          </li>
        </ul>
        <h3 className="TitleTarifs">" Il était une fois "</h3>
        <ul>
          <li className="ListTarif">Valeur: <span className="Price">160 $</span></li>
          <li className="ListTarif"><span className="DescriptionSpan">Description: </span>Photo de grossesse ( À votre domicile, en extérieur ou en studio ).</li>
        </ul>
        <h3 className="TitleTarifs">" Mon bébé "</h3>
        <ul>
          <li className="ListTarif">Valeur: <span className="Price">100 $</span></li>
          <li className="ListTarif"><span className="DescriptionSpan">Description: </span>Photo d’enfant jusqu’à 3 ans (photo à domicile).</li>
        </ul>
        <h3 className="TitleTarifs">" J’immortalise l’événement "</h3>
        <ul className="LastUl">
          <li className="ListTarif">Valeur: <span className="Price">Sur mesure</span></li>
          <li className="ListTarif"><span className="DescriptionSpan">Description: </span> Prestation de mariage ou baptême sur devis.</li>
        </ul>
      </div>
    </div>
  );
}