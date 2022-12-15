import React from 'react';
import './../Footer/style.css';
import Instagram from "./../../media/instagram.png";
import Facebook from "./../../media/facebook.png";

export default function Footer(){
  return (
    <div className="foot">
      <div className='insta'>
        <a href="https://www.instagram.com/f.lmss/?hl=fr"><img src={Instagram} alt="Instagram" className='insta'/></a>
      </div>
      <p className='copyright'>Copyright 2022 Florian Llimos</p>
      <div className='fb'>
        <a href="https://www.facebook.com/florian.llimos/"><img src={Facebook} alt="Facebook" className='fb'/></a>
      </div>
    </div>
  );
}