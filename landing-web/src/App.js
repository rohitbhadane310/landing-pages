import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Features from "./components/Features";
import Consultation from "./components/Consultation";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Gallery/>
      <Features/>
      <Consultation/>
      <Footer/>
    </>
  );
};

export default App;
