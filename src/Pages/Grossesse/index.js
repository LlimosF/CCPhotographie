import React from "react";
import Header from "../../Component/Header";
import Footer from "../../Component/Footer";
import Tri from "../../Component/Tri";
import GrossessePic from "../../Component/GrossessePic";

export default function Grossesse () {
  return (
    <div className="Mariage">
      <Header />
      <Tri />
      <h2>Grossesse</h2>
      <GrossessePic />
      <Footer />
    </div>
  );
}