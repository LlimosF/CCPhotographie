import React from 'react';
import Header from '../../Component/Header';
import Footer from '../../Component/Footer';
import BgFixed from "../../Component/bg-fixed/bg-fixed";
import Trophee from "./../../media/trophee.png";
import etoiles from "./../../media/evaluation.png";

export default function Contact () {
  return (
    <div className='contact-page'>
      <BgFixed />
      <Header />
      <h1 className=''>Me contacter</h1>
      <form className='form'>
        <div className='bloc-form'>
          <input type='text' placeholder='Nom' required></input>
        </div>
        <div className='bloc-form'>
          <input type='text' placeholder='Prénom' required></input>
        </div>
        <div className='bloc-form'>
          <input type='email' placeholder='Adresse e-mail' required></input>
        </div>
        <div className='bloc-form'>
          <input type='number' placeholder='Numéro de téléphone' required></input>
        </div>
        <button type='submit' className='btn'>Envoyer</button>
      </form>
      <div className='contact-text'>
        <p>06 22 00 55 84</p>
        <p>web@florianllimos.fr</p>
        <p>5 rue du bonheur, 31000 Toulouse</p>
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
