import React from "react";
import Palmares from "../../Component/Palmares";

export default function Paragraph () {
  return (
    <div className="">
      <div className="container-text">
        <p className="text">
          Charles Cantin est un photographe talentueux et passionné, capturant la beauté du monde à travers son objectif. 
        </p>
        <p className="text">  
          Son style artistique unique se distingue par des compositions équilibrées et des jeux de lumière subtils qui donnent vie à ses sujets.
        </p>
        <p className="text">   
          Que ce soit en pleine nature, dans des rues animées ou lors d'événements spéciaux, Charles a le don de saisir l'instant décisif avec une sensibilité émotionnelle remarquable.
        </p>
        <p className="text">
          Son travail artistique explore les détails souvent négligés et les émotions sincères, laissant transparaître une histoire fascinante derrière chaque image. 
        </p>
        <p className="text">  
          Avec un œil perspicace et une passion sans limites pour son art, Charles Cantin continue d'inspirer et d'émerveiller les spectateurs par sa vision photographique exceptionnelle.
        </p>
      </div>
      <div className="container-vedette">
        <div className="container-photo container-p1">
          <div className="center">
            <h4>Tokyo</h4>
          </div>
        </div>
        <div className="container-photo container-p2">
          <div className="center">
            <h4>Chicago</h4>
          </div>
        </div>
        <div className="container-photo container-p3">
          <div className="center">
            <h4>Paris</h4>
          </div>
        </div>
        <div className="container-photo container-p4">
          <div className="center">
            <h4>New-york</h4>
          </div>
        </div>
        <div className="container-photo container-p5">
          <div className="center">
            <h4>Londres</h4>
          </div>
        </div>
        <div className="container-photo container-p6">
          <div className="center">
            <h4>Los Angeles</h4>
          </div>
        </div>
        <div className="container-photo container-p7">
          <div className="center">
            <h4>Moskva</h4>
          </div>
        </div>
        <div className="container-photo container-p8">
          <div className="center">
            <h4>Washington</h4>
          </div>
        </div>
        <div className="container-photo container-p9">
          <div className="center">
            <h4>Monaco</h4>
          </div>
        </div>
        <div className="container-photo container-p10">
          <div className="center">
            <h4>Dubai</h4>
          </div>
        </div>
        <div className="container-photo container-p11">
          <div className="center">
            <h4>Thera</h4>
          </div>
        </div>
        <div className="container-photo container-p12">
          <div className="center">
            <h4>Barcelone</h4>
          </div>
        </div>
      </div>
      <Palmares />
    </div>
  );
}