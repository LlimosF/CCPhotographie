import React from "react";
import Header from '../../Component/Header';
import Footer from '../../Component/Footer';
import BgFixed from "../../Component/bg-fixed/bg-fixed";
import Navtogalerie from "../../Component/nav-galerie";
import Palmares from "../../Component/Palmares";

export default function Famille () {
  return (
    <div>
      <BgFixed />
      <Header />
      <Navtogalerie />
      <div className="container-vedette">
        <div className="container-photo container-famille1">
          <div className="center">
            <h4>Famille</h4>
          </div>
        </div>
        <div className="container-photo container-famille2">
          <div className="center">
            <h4>Famille</h4>
          </div>
        </div>
        <div className="container-photo container-famille3">
          <div className="center">
            <h4>Famille</h4>
          </div>
        </div>
        <div className="container-photo container-famille4">
          <div className="center">
            <h4>Famille</h4>
          </div>
        </div>
        <div className="container-photo container-famille5">
          <div className="center">
            <h4>Famille</h4>
          </div>
        </div>
        <div className="container-photo container-famille6">
          <div className="center">
            <h4>Famille</h4>
          </div>
        </div>
        <div className="container-photo container-famille7">
          <div className="center">
            <h4>Famille</h4>
          </div>
        </div>
        <div className="container-photo container-famille8">
          <div className="center">
            <h4>Famille</h4>
          </div>
        </div>
        <div className="container-photo container-famille9">
          <div className="center">
            <h4>Famille</h4>
          </div>
        </div>
        <div className="container-photo container-famille10">
          <div className="center">
            <h4>Famille</h4>
          </div>
        </div>
        <div className="container-photo container-famille11">
          <div className="center">
            <h4>Famille</h4>
          </div>
        </div>
        <div className="container-photo container-famille12">
          <div className="center">
            <h4>Famille</h4>
          </div>
        </div>
      </div>
      <Palmares />
      <Footer />
    </div>
  )
}