import React from 'react';
import Header from '../../Component/Header';
import Footer from '../../Component/Footer';
import ContactCompo from '../../Component/ContactCompo';
import "./../Contact/style.css"

export default function Contact () {
  return (
    <div className='ContactPage'>
      <Header />
      <h2 className='ContactTitle'>Me contacter</h2>
      <ContactCompo />
      <Footer />
    </div>
  );
}
