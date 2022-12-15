import React from 'react';
import Header from '../../Component/Header';
import Footer from '../../Component/Footer';
import "./../Tarifs/style.css";
import TarifsCompo from '../../Component/TarifsCompo';

export default function Tarifs () {
  return (
    <div className="TarifPage">
      <Header />
      <h2 className='H2Tarif'>Tarifs</h2>
      <TarifsCompo />
      <Footer />
    </div>
  );
}