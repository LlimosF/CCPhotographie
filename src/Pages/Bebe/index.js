import React from "react";
import Header from "../../Component/Header";
import Footer from "../../Component/Footer";
import Tri from "../../Component/Tri";
import BebePic from "../../Component/BebePic";

export default function Bebe () {
  return (
    <div className="Mariage">
      <Header />
      <Tri />
      <h2>Bébé</h2>
      <BebePic />
      <Footer />
    </div>
  );
}