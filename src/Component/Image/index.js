import React from 'react';
import LogoPhoto from './../../media/LogoPhoto.png';
import './../Image/style.css'

export default function Image () {
  return (
    <div>
      <img src={LogoPhoto} alt="Mon logo" className='Logo'/>
    </div>
  )
}