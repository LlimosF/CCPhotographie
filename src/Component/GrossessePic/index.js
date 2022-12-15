import React from "react";
import Grossesse2 from "./../../media/Grossesse2.jpg";
import Grossesse3 from "./../../media/Grossesse3.jpg";

export default function GrossessePic () {
  return (
    <div className="Vedette">
      <div className="Vedette1">
        <img src={Grossesse3} alt="Choix 1 de la séléction grossesse" className="VedetteTop"/>
        <h3 className="VedetteTitle">1. 2022</h3>
      </div>
      <div className="Vedette2">
        <img src={Grossesse3} alt="Choix 2 de la séléction grossesse"  className="VedetteTop"/>
        <h3 className="VedetteTitle">2. 2022</h3>
      </div>
      <div className="Vedette4">
        <img src={Grossesse2} alt="Choix 3 de la séléction grossesse"  className="VedettePic"/>
        <h3 className="VedetteTitle">3. 2021</h3>
      </div>
      <div className="Vedette5">
        <img src={Grossesse2} alt="Choix 4 de la séléction grossesse"  className="VedettePic"/>
        <h3 className="VedetteTitle">4. 2021</h3>
      </div>
      <div className="Vedette6">
        <img src={Grossesse2} alt="Choix 5 de la séléction grossesse"  className="VedettePic"/>
        <h3 className="VedetteTitle">5. 2021</h3>
      </div>
      <div className="Vedette7">
        <img src={Grossesse3} alt="Choix 6 de la séléction grossesse" className="VedetteTop"/>
        <h3 className="VedetteTitle">6. 2020</h3>
      </div>
      <div className="Vedette8">
        <img src={Grossesse3} alt="Choix 7 de la séléction grossesse" className="VedetteTop"/>
        <h3 className="VedetteTitle">7. 2018</h3>
      </div>
      <div className="Vedette9">
        <img src={Grossesse2} alt="Choix 8 de la séléction grossesse"  className="VedettePic"/>
        <h3 className="VedetteTitle PaddingBottom">8. 2018</h3>
      </div>
      <div className="Vedette10">
        <img src={Grossesse2} alt="Choix 9 de la séléction grossesse"  className="VedettePic"/>
        <h3 className="VedetteTitle PaddingBottom">9. 2017</h3>
      </div>
      <div className="Vedette11">
        <img src={Grossesse2} alt="Choix 10 de la séléction grossesse"  className="VedettePic"/>
        <h3 className="VedetteTitle PaddingBottom">10. 2015</h3>
      </div>
    </div>
  );
}