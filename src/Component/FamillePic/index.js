import React from "react";
import Famille1 from "./../../media/Famille1.jpg";
import Famille2 from "./../../media/Famille2.jpg";

export default function FamillePic () {
  return (
    <div className="Vedette">
      <div className="Vedette1">
        <img src={Famille1} alt="Choix 1 séléction famille" className="VedetteTop"/>
        <h3 className="VedetteTitle">1. Bangkok</h3>
      </div>
      <div className="Vedette2">
        <img src={Famille1} alt="Choix 2 de la séléction famille"  className="VedetteTop"/>
        <h3 className="VedetteTitle">2. Los Angeles</h3>
      </div>
      <div className="Vedette4">
        <img src={Famille2} alt="Choix 3 de la séléction famille"  className="VedettePic"/>
        <h3 className="VedetteTitle">3. Paris</h3>
      </div>
      <div className="Vedette5">
        <img src={Famille2} alt="Choix 4 de la séléction famille"  className="VedettePic"/>
        <h3 className="VedetteTitle">4. Marseille</h3>
      </div>
      <div className="Vedette6">
        <img src={Famille2} alt="Choix 5 de la séléction famille"  className="VedettePic"/>
        <h3 className="VedetteTitle">5. Toulouse</h3>
      </div>
      <div className="Vedette7">
        <img src={Famille1} alt="Choix 6 de la séléction famille" className="VedetteTop"/>
        <h3 className="VedetteTitle">6. Lyon</h3>
      </div>
      <div className="Vedette8">
        <img src={Famille1} alt="Choix 7 de la séléction famille" className="VedetteTop"/>
        <h3 className="VedetteTitle">7. New York</h3>
      </div>
      <div className="Vedette9">
        <img src={Famille2} alt="Choix 8 de la séléction famille"  className="VedettePic"/>
        <h3 className="VedetteTitle PaddingBottom">8. Londres</h3>
      </div>
      <div className="Vedette10">
        <img src={Famille2} alt="Choix 9 de la séléction famille"  className="VedettePic"/>
        <h3 className="VedetteTitle PaddingBottom">9. Turin</h3>
      </div>
      <div className="Vedette11">
        <img src={Famille2} alt="Choix 10 de la séléction famille"  className="VedettePic"/>
        <h3 className="VedetteTitle PaddingBottom">10. Jerez</h3>
      </div>
    </div>
  );
}