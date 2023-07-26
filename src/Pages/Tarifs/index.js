import React from 'react';
import Header from '../../Component/Header';
import Footer from '../../Component/Footer';
import BgFixed from "../../Component/bg-fixed/bg-fixed";
import PhotoSeul from "../../media/seul.jpg";
import PhotoCouple from "../../media/couple.jpg";
import PhotoFamille from "../../media/famille.jpg";
import PhotoGrossesse from "../../media/grossesse.jpg";
import PhotoBebe from "../../media/bebe.jpg";
import PhotoMariage from "../../media/mariage.jpg";
import PhotoStreet from "../../media/street.jpg";
import PhotoVoiture from "../../media/voiture.jpg";
import Trophee from "./../../media/trophee.png";
import etoiles from "./../../media/evaluation.png";

export default function Tarifs () {
  return (
    <div className="tarifs">
      <BgFixed />
      <Header />
      <h2 className='title'>Tarifs</h2>
      <div className='container-card'>
        <div className='card'>
          <div className='card-top'>
            <img src={PhotoSeul} className='picture-tarifs'></img>
            <h3 className='title-card'>Juste moi</h3>
          </div>
          <p><span className='span-card'>Description : </span>Séance photo pour une personne, en extérieur ou en studio.</p>
          <p className='price'>130 €</p>
        </div>  
        <div className='card'>
          <div className='card-top'>
            <img src={PhotoCouple} className='picture-tarifs'></img>
          <h3 className='title-card'>Pour deux</h3>
          </div>
          <p><span className='span-card'>Description : </span>Pour deux personnes, en extérieur ou en studio.</p>
          <p className='price'>195 €</p>
        </div>  
        <div className='card'>
          <div className='card-top'>
            <img src={PhotoFamille} className='picture-tarifs'></img>
            <h3 className='title-card'>Famille</h3>
          </div>
          <p><span className='span-card'>Description : </span>Pour la famille ou les amis jusqu’à 4 personnes.</p>
          <p className='price'>220 €</p>
        </div>
        <div className='card'>
          <div className='card-top'>
            <img src={PhotoGrossesse} className='picture-tarifs'></img>
            <h3 className='title-card'>Il était une fois</h3>
          </div>
          <p><span className='span-card'>Description : </span>Photo de grossesse ( À votre domicile, en extérieur ou en studio ).</p>
          <p className='price'>160 €</p>
        </div>
        <div className='card'>
          <div className='card-top'>
            <img src={PhotoBebe} className='picture-tarifs'></img>
            <h3 className='title-card'>Mon bébé</h3>
          </div>
          <p><span className='span-card'>Description : </span>Photo d’enfant jusqu’à 3 ans (photo à domicile).</p>
          <p className='price'>100 €</p>
        </div>
        <div className='card'>
          <div className='card-top'>
            <img src={PhotoStreet} className='picture-tarifs'></img>
            <h3 className='title-card'>Street</h3>
          </div>
          <p><span className='span-card'>Description : </span>Shooting photo dans les rues.</p>
          <p className='price'>120 €</p>
        </div>
        <div className='card'>
          <div className='card-top'>
            <img src={PhotoVoiture} className='picture-tarifs'></img>
            <h3 className='title-card'>Voiture</h3>
          </div>
          <p><span className='span-card'>Description : </span>Shooting photo sur mesure pour votre voiture.</p>
          <p className='price'>90 €</p>
        </div>
        <div className='card'>
          <div className='card-top'>
            <img src={PhotoMariage} className='picture-tarifs'></img>
            <h3 className='title-card'>J'immortalise l'évènement</h3>
          </div>
          <p><span className='span-card'>Description : </span>Prestation de mariage ou baptême sur devis.</p>
          <p className='price'>Sur mesure</p>
        </div>
      </div>
      <div className="container-concours">
          <h3 className="title">palmarès</h3>
          <ul className="ul-trophee">
            <li><img src={Trophee} className="trophee"></img>2023 Champion de France</li>
            <li><img src={Trophee} className="trophee"></img>2023 Champion d'Europe</li>
            <li><img src={Trophee} className="trophee"></img>2022 Champion de France</li>
            <li><img src={Trophee} className="trophee"></img>2021 Champion de France</li>
            <li><img src={Trophee} className="trophee"></img>2020 Champion de France</li>
            <li><img src={Trophee} className="trophee"></img>2019 Champion d'Europe</li>
          </ul>
        </div>
      <div className="container-link">
        <button className="link-to">Besoin d'un devis ?</button>
      </div>
      <div className="evaluation">
        <img src={etoiles} className="img-note"></img>
      </div>
      <Footer />
    </div>
  );
}