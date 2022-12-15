import React from "react";
import Bebe1 from "./../../media/Bebe1.jpeg";
import Bebe2 from "./../../media/Bebe2.jpg";

export default function BebePic () {
  return (
    <div className="Vedette">
      <div className="Vedette1">
        <img src={Bebe2} alt="Choix 1 de la séléction bébé" className="VedetteTop"/>
        <h3 className="VedetteTitle">1. Hippolyte</h3>
      </div>
      <div className="Vedette2">
        <img src={Bebe2} alt="Choix 2 de la séléction bébé"  className="VedetteTop"/>
        <h3 className="VedetteTitle">2. Leonardo</h3>
      </div>
      <div className="Vedette4">
        <img src={Bebe1} alt="Choix 3 de la séléction bébé"  className="VedettePic"/>
        <h3 className="VedetteTitle">3. Colin</h3>
      </div>
      <div className="Vedette5">
        <img src={Bebe1} alt="Choix 4 de la séléction bébé"  className="VedettePic"/>
        <h3 className="VedetteTitle">4. Alessandro</h3>
      </div>
      <div className="Vedette6">
        <img src={Bebe1} alt="Choix 5 de la séléction bébé"  className="VedettePic"/>
        <h3 className="VedetteTitle">5. Yven</h3>
      </div>
      <div className="Vedette7">
        <img src={Bebe2} alt="Choix 6 de la séléction bébé" className="VedetteTop"/>
        <h3 className="VedetteTitle">6. Paulo</h3>
      </div>
      <div className="Vedette8">
        <img src={Bebe2} alt="Choix 7 de la séléction bébé" className="VedetteTop"/>
        <h3 className="VedetteTitle">7. Guillaume</h3>
      </div>
      <div className="Vedette9">
        <img src={Bebe1} alt="Choix 8 de la séléction bébé"  className="VedettePic"/>
        <h3 className="VedetteTitle PaddingBottom">8. Alex</h3>
      </div>
      <div className="Vedette10">
        <img src={Bebe1} alt="Choix 9 de la séléction bébé"  className="VedettePic"/>
        <h3 className="VedetteTitle PaddingBottom">9. Jean</h3>
      </div>
      <div className="Vedette11">
        <img src={Bebe1} alt="Choix 10 de la séléction bébé"  className="VedettePic"/>
        <h3 className="VedetteTitle PaddingBottom">10. Pierre</h3>
      </div>
    </div>
  );
}