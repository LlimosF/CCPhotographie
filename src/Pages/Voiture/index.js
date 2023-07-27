import React from "react";
import Header from '../../Component/Header';
import Footer from '../../Component/Footer';
import BgFixed from "../../Component/bg-fixed/bg-fixed";
import Navtogalerie from "../../Component/nav-galerie";
import Palmares from "../../Component/Palmares";

export default function Voiture () {
  return (
    <div>
      <BgFixed />
      <Header />
      <Navtogalerie />
      <div className="container-vedette">
        <div className="container-photo container-voiture1">
          <div className="center">
            <h4>Voiture</h4>
          </div>
        </div>
        <div className="container-photo container-voiture2">
          <div className="center">
            <h4>Voiture</h4>
          </div>
        </div>
        <div className="container-photo container-voiture3">
          <div className="center">
            <h4>Voiture</h4>
          </div>
        </div>
        <div className="container-photo container-voiture4">
          <div className="center">
            <h4>Voiture</h4>
          </div>
        </div>
        <div className="container-photo container-voiture5">
          <div className="center">
            <h4>Voiture</h4>
          </div>
        </div>
        <div className="container-photo container-voiture6">
          <div className="center">
            <h4>Voiture</h4>
          </div>
        </div>
        <div className="container-photo container-voiture7">
          <div className="center">
            <h4>Voiture</h4>
          </div>
        </div>
        <div className="container-photo container-voiture8">
          <div className="center">
            <h4>Voiture</h4>
          </div>
        </div>
        <div className="container-photo container-voiture9">
          <div className="center">
            <h4>Voiture</h4>
          </div>
        </div>
        <div className="container-photo container-voiture10">
          <div className="center">
            <h4>Voiture</h4>
          </div>
        </div>
        <div className="container-photo container-voiture11">
          <div className="center">
            <h4>Voiture</h4>
          </div>
        </div>
        <div className="container-photo container-voiture12">
          <div className="center">
            <h4>Voiture</h4>
          </div>
        </div>
      </div>
      <Palmares />
      <Footer />
    </div>
  )
}