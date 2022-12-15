import React from "react";
import "./../FormAfter/style.css"
import Header from "../../Component/Header";
import Footer from "../../Component/Footer";
import FormAfterCompo from "../../Component/FormAfterCompo";

export default function FormAfterPage () {
  return (
    <div className="FormAfter">
      <Header />
      <FormAfterCompo />
      <Footer />
    </div>
  );
}         