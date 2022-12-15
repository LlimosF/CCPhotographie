import React from "react";
import Couple1 from "./../../media/Couple1.jpg";
import Couple2 from "./../../media/Couple2.jpg";

export default function CouplePic () {
  return (
    <div className="Vedette">
      <div className="Vedette1">
        <img src={Couple1} alt="Choix 1 de la séléction couple" className="VedetteTop"/>
        <h3 className="VedetteTitle">1. Paris</h3>
      </div>
      <div className="Vedette2">
        <img src={Couple1} alt="Choix 2 de la séléction couple"  className="VedetteTop"/>
        <h3 className="VedetteTitle">2. Lyon</h3>
      </div>
      <div className="Vedette4">
        <img src={Couple2} alt="Choix 3 de la séléction couple"  className="VedettePic"/>
        <h3 className="VedetteTitle">3. Toulouse</h3>
      </div>
      <div className="Vedette5">
        <img src={Couple2} alt="Choix 4 de la séléction couple"  className="VedettePic"/>
        <h3 className="VedetteTitle">4. Marseille</h3>
      </div>
      <div className="Vedette6">
        <img src={Couple2} alt="Choix 5 de la séléction couple"  className="VedettePic"/>
        <h3 className="VedetteTitle">5. Metz</h3>
      </div>
      <div className="Vedette7">
        <img src={Couple1} alt="Choix 6 de la séléction couple" className="VedetteTop"/>
        <h3 className="VedetteTitle">6. Madrid</h3>
      </div>
      <div className="Vedette8">
        <img src={Couple1} alt="Choix 7 de la séléction couple" className="VedetteTop"/>
        <h3 className="VedetteTitle">7. Turin</h3>
      </div>
      <div className="Vedette9">
        <img src={Couple2} alt="Choix 8 de la séléction couple"  className="VedettePic"/>
        <h3 className="VedetteTitle PaddingBottom">8. Washington</h3>
      </div>
      <div className="Vedette10">
        <img src={Couple2} alt="Choix 9 de la séléction couple"  className="VedettePic"/>
        <h3 className="VedetteTitle PaddingBottom">9. Honolulu</h3>
      </div>
      <div className="Vedette11">
        <img src={Couple2} alt="Choix 10 de la séléction couple"  className="VedettePic"/>
        <h3 className="VedetteTitle PaddingBottom">10. Portland</h3>
      </div>
    </div>
  );
}