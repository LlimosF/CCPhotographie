import React from "react";
import Header from "../../Component/Header";
import Footer from "../../Component/Footer";
import Tri from '../../Component/Tri';
import MariagePic from "../../Component/MariagePic";
import './../Mariage/style.css';

export default function Mariage () {
  return (
    <div className="Mariage">
      <Header />
      <Tri />
        <h2>Mariage</h2>
        <MariagePic />
      <Footer />
    </div>
  );
}