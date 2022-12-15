import React from 'react';
import './../Galerie/style.css';
import Tri from '../../Component/Tri';
import Header from '../../Component/Header';
import Footer from '../../Component/Footer';
import Vedette from '../../Component/Vedette';

export default function Galerie() {
  return (
    <div className='Mariage'>
      <Header />
      <Tri />
      <h2>Photos vedettes</h2>
      <Vedette />
      <Footer />
    </div>
  );
}