import React from "react";
import "./../Vedette/style.css"
import Vedette1 from "./../../media/Vedette1.jpg";
import Vedette2 from "./../../media/Vedette2.jpg";
import Vedette4 from "./../../media/Vedette4.jpg";
import Vedette5 from './../../media/Vedette3.jpeg';
import Vedette6 from "./../../media/Vedette6.jpg";
import Vedette7 from "./../../media/Vedette7.jpeg";
import Vedette8 from "./../../media/Vedette8.webp";
import Vedette9 from "./../../media/Vedette9.jpeg";
import Vedette10 from "./../../media/Vedette10.jfif";
import Vedette11 from "./../../media/Vedette11.jpeg";

export default function Vedette () {
  return (
    <div className="Vedette">
      <div className="Vedette1">
        <img src={Vedette1} alt="Choix 1 des vedettes" className="VedetteTop"/>
        <h3 className="VedetteTitle">1. Shooting</h3>
      </div>
      <div className="Vedette2">
        <img src={Vedette2} alt="Choix 2 des vedettes" className="VedetteTop"/>
        <h3 className="VedetteTitle">2. Chill</h3>
      </div>
      <div className="Vedette4">
        <img src={Vedette4} alt="Choix 3 des vedettes" className="VedettePic"/>
        <h3 className="VedetteTitle">3. Feu d'artifice</h3>
      </div>
      <div className="Vedette5">
        <img src={Vedette5} alt="Choix 4 des vedettes" className="VedettePic"/>
        <h3 className="VedetteTitle">4. Lecture</h3>
      </div>
      <div className="Vedette6">
        <img src={Vedette6} alt="Choix 5 des vedettes" className="VedettePic"/>
        <h3 className="VedetteTitle">5. Nature</h3>
      </div>
      <div className="Vedette7">
        <img src={Vedette7} alt="Choix 6 des vedettes" className="VedetteTop"/>
        <h3 className="VedetteTitle">6. Nikon S300</h3>
      </div>
      <div className="Vedette8">
        <img src={Vedette8} alt="Choix 7 des vedettes" className="VedetteTop"/>
        <h3 className="VedetteTitle">7. Studio Photo</h3>
      </div> 
      <div className="Vedette9">
        <img src={Vedette9} alt="Choix 8 des vedettes" className="VedettePic"/>
        <h3 className="VedetteTitle PaddingBottom">8. Bangkok</h3>
      </div>
      <div className="Vedette10">
        <img src={Vedette10} alt="Choix 9 des vedettes" className="VedettePic"/>
        <h3 className="VedetteTitle PaddingBottom">9. Dubai</h3>
      </div>
      <div className="Vedette11">
        <img src={Vedette11} alt="Choix 10 des vedettes" className="VedettePic"/>
        <h3 className="VedetteTitle PaddingBottom">10. New York</h3>
      </div>
    </div>
  );
}