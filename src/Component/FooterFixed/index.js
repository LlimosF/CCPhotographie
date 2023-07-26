import React from 'react';
import Instagram from "./../../media/instagram.png";
import Facebook from "./../../media/facebook.png";
import Site from "./../../media/globe.png";
import Github from "./../../media/github (1).png";
import Linkedin from "./../../media/linkedin.png";

export default function FooterFixed (){
  return (
    <div className="footer-fixed">
      <div className='insta'>
        <a href="https://www.instagram.com/f.lmss/?hl=fr"><img src={Instagram} alt="Instagram" className='link-logo'/></a>
      </div>
      <div className='fb'>
        <a href="https://www.facebook.com/florian.llimos/"><img src={Facebook} alt="Facebook" className='link-logo'/></a>
      </div>
      <div className='github'>
        <a href="https://www.facebook.com/florian.llimos/"><img src={Github} alt="Facebook" className='link-logo'/></a>
      </div>
      <div className='linkedin'>
        <a href="https://www.facebook.com/florian.llimos/"><img src={Linkedin} alt="Facebook" className='link-logo'/></a>
      </div>
      <div className='site'>
        <a href="https://www.florianllimos.fr/"><img src={Site} alt="Facebook" className='link-logo'/></a>
      </div>
      <p className='copyright'>Copyright 2023 Florian Llimos</p>
    </div>
  );
}