import React from "react";
import Header from '../../Component/Header';
import Footer from '../../Component/Footer';
import BgFixed from "../../Component/bg-fixed/bg-fixed";
import Navtogalerie from "../../Component/nav-galerie";
import Palmares from "../../Component/Palmares";

export default function Street () {
  return (
    <div>
      <BgFixed />
      <Header />
      <Navtogalerie />
      <div className="container-vedette">
        <div className="container-photo container-street1">
          <div className="center">
            <h4>Street</h4>
          </div>
        </div>
        <div className="container-photo container-street2">
          <div className="center">
            <h4>Street</h4>
          </div>
        </div>
        <div className="container-photo container-street3">
          <div className="center">
            <h4>Street</h4>
          </div>
        </div>
        <div className="container-photo container-street4">
          <div className="center">
            <h4>Street</h4>
          </div>
        </div>
        <div className="container-photo container-street5">
          <div className="center">
            <h4>Street</h4>
          </div>
        </div>
        <div className="container-photo container-street6">
          <div className="center">
            <h4>Street</h4>
          </div>
        </div>
        <div className="container-photo container-street7">
          <div className="center">
            <h4>Street</h4>
          </div>
        </div>
        <div className="container-photo container-street8">
          <div className="center">
            <h4>Street</h4>
          </div>
        </div>
        <div className="container-photo container-street9">
          <div className="center">
            <h4>Street</h4>
          </div>
        </div>
        <div className="container-photo container-street10">
          <div className="center">
            <h4>Street</h4>
          </div>
        </div>
        <div className="container-photo container-street11">
          <div className="center">
            <h4>Street</h4>
          </div>
        </div>
        <div className="container-photo container-street12">
          <div className="center">
            <h4>Street</h4>
          </div>
        </div>
      </div>
      <Palmares />
      <Footer />
    </div>
  )
}