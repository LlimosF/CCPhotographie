import React from "react";
import Tri from '../../Component/Tri';
import Header from '../../Component/Header';
import Footer from '../../Component/Footer';
import BaptemePic from "../../Component/BaptemePic";

export default function Bapteme () {
  return (
    <div className="Mariage">
      <Header />
      <Tri />
      <h2>Baptême</h2>
      <BaptemePic />
      <Footer />
    </div>
  );
}