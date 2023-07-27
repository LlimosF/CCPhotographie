import React from "react";
import Trophee from "./../../media/trophee.png";
import Etoiles from "./../../media/evaluation.png";

export default function Palmares () {
  return (
    <div>
      <div className="container-concours">
        <h3 className="title">palmarès</h3>
        <ul className="ul-trophee">
          <li><img src={Trophee} className="trophee"></img>2023 Champion de France</li>
          <li><img src={Trophee} className="trophee"></img>2023 Champion d'Europe</li>
          <li><img src={Trophee} className="trophee"></img>2022 Champion de France</li>
          <li><img src={Trophee} className="trophee"></img>2021 Champion de France</li>
          <li><img src={Trophee} className="trophee"></img>2020 Champion de France</li>
          <li><img src={Trophee} className="trophee"></img>2019 Champion d'Europe</li>
        </ul>
      </div>
      <div className="container-link">
        <button className="link-to">Besoin d'un devis ?</button>
      </div>
      <div className="evaluation">
        <img src={Etoiles} className="img-note"></img>
      </div>
    </div>
  )
}