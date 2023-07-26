import React from "react";
import Header from '../../Component/Header';
import Footer from '../../Component/Footer';
import BgFixed from "../../Component/bg-fixed/bg-fixed";
import Navtogalerie from "../../Component/nav-galerie";

export default function Voiture () {
  return (
    <div>
      <BgFixed />
      <Header />
      <Navtogalerie />
      <div className="container-vedette">
        <div className="container-p1">
          <div className="center">
            <h4>Tokyo</h4>
          </div>
        </div>
        <div className="container-p2">
          <div className="center">
            <h4>Chicago</h4>
          </div>
        </div>
        <div className="container-p3">
          <div className="center">
            <h4>Paris</h4>
          </div>
        </div>
        <div className="container-p4">
          <div className="center">
            <h4>New-york</h4>
          </div>
        </div>
        <div className="container-p5">
          <div className="center">
            <h4>Londres</h4>
          </div>
        </div>
        <div className="container-p6">
          <div className="center">
            <h4>Los Angeles</h4>
          </div>
        </div>
        <div className="container-p7">
          <div className="center">
            <h4>Moskva</h4>
          </div>
        </div>
        <div className="container-p8">
          <div className="center">
            <h4>Washington</h4>
          </div>
        </div>
        <div className="container-p9">
          <div className="center">
            <h4>Monaco</h4>
          </div>
        </div>
        <div className="container-p10">
          <div className="center">
            <h4>Dubai</h4>
          </div>
        </div>
        <div className="container-p11">
          <div className="center">
            <h4>Thera</h4>
          </div>
        </div>
        <div className="container-p12">
          <div className="center">
            <h4>Barcelone</h4>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}