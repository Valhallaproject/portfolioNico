import React from "react";
import Header from "../components/navigation/Header";
import Footer from "../components/footer/Footer";
import Card from "../components/card/Card";
import "./style.css";

function blog() {

  return (
    <>
      <Header />
      <div className="blogContent">
        <Card />
      </div>
      <Footer />
    </>
  );
}

export default blog;
