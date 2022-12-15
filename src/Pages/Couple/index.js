import React from "react";
import CouplePic from "../../Component/CouplePic";
import Tri from '../../Component/Tri';
import Header from '../../Component/Header';
import Footer from '../../Component/Footer';

export default function Couple () {
  return (
    <div className="Mariage">
      <Header />
      <Tri />
      <h2>Couple</h2>
      <CouplePic />
      <Footer />
    </div>
  )
}