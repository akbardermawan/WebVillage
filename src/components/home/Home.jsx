import React from "react";
import Hero from "./components/Hero";
import Footer from "../footer/Footer";
import Intro from "./components/Intro";
import BodyHome from "./components/BodyHome";
import Contact from "./components/Contact";
import SliderHome from "./components/SliderHome";

const Home = () => {
  return (
    <div>
      <Hero />
      <Intro />
      <BodyHome />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
