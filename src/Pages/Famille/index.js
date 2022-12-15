import React from "react";
import Header from "../../Component/Header";
import Footer from "../../Component/Footer";
import Tri from "../../Component/Tri";
import FamillePic from "../../Component/FamillePic";

export default function Famille () {
  return (
    <div className="Mariage">
      <Header />
      <Tri />
      <h2>Famille</h2>
      <FamillePic />
      <Footer />
    </div>
  );
}