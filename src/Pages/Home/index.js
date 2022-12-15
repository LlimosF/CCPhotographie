import React from "react";
import Header from "../../Component/Header";
import Footer from "../../Component/Footer";
import Image from "../../Component/Image";
import Paragraph from "../../Component/Paragraph";
import './style.css';

export default function Home() {
  return (
    <div className="home">
        <Header />
        <Image />
        <Paragraph />
        <Footer />
    </div>
  );
}