import React from "react";
import Bapteme1 from "./../../media/Bapteme1.jpg";
import Bapteme2 from "./../../media/Bapteme2.jpg";

export default function BaptemePic () {
  return (
    <div className="Vedette">
      <div className="Vedette1">
        <img src={Bapteme1} alt="Choix 1 des baptême" className="VedetteTop"/>
        <h3 className="VedetteTitle">1. Shooting</h3>
      </div>
      <div className="Vedette2">
        <img src={Bapteme1} alt="Choix 2 des baptême" className="VedetteTop"/>
        <h3 className="VedetteTitle">2. Chill</h3>
      </div>
      <div className="Vedette4">
        <img src={Bapteme2} alt="Choix 3 des baptême" className="VedettePic"/>
        <h3 className="VedetteTitle">3. Feu d'artifice</h3>
      </div>
      <div className="Vedette5">
        <img src={Bapteme2} alt="Choix 4 des baptême" className="VedettePic"/>
        <h3 className="VedetteTitle">4. Lecture</h3>
      </div>
      <div className="Vedette6">
        <img src={Bapteme2} alt="Choix 5 des baptême" className="VedettePic"/>
        <h3 className="VedetteTitle">5. Nature</h3>
      </div>
      <div className="Vedette7">
        <img src={Bapteme1} alt="Choix 6 des baptême" className="VedetteTop"/>
        <h3 className="VedetteTitle">6. Nikon S300</h3>
      </div>
      <div className="Vedette8">
        <img src={Bapteme1} alt="Choix 7 des baptême" className="VedetteTop"/>
        <h3 className="VedetteTitle">7. Studio Photo</h3>
      </div> 
      <div className="Vedette9">
        <img src={Bapteme2} alt="Choix 8 des baptême" className="VedettePic"/>
        <h3 className="VedetteTitle PaddingBottom">8. Bangkok</h3>
      </div>
      <div className="Vedette10">
        <img src={Bapteme2} alt="Choix 9 des baptême" className="VedettePic"/>
        <h3 className="VedetteTitle PaddingBottom">9. Dubai</h3>
      </div>
      <div className="Vedette11">
        <img src={Bapteme2} alt="Choix 10 des baptême" className="VedettePic"/>
        <h3 className="VedetteTitle PaddingBottom">10. New York</h3>
      </div>
    </div>
  );
}