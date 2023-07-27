import React from 'react';
import Header from '../../Component/Header';
import Footer from '../../Component/Footer';
import BgFixed from "../../Component/bg-fixed/bg-fixed";
import Palmares from "../../Component/Palmares";

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
      <Palmares />
      <Footer />
    </div>
  );
}
