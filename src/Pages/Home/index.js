import React from "react";
import Header from "../../Component/Header";
import Footer from "../../Component/Footer";
import Image from "../../Component/Image";
import Paragraph from "../../Component/Paragraph";
import BgFixed from "../../Component/bg-fixed/bg-fixed";

export default function Home() {
  return (
    <div className="home">
      <BgFixed />
      <Header />
      <Image />
      <Paragraph />
      <Footer />
    </div>
  );
}