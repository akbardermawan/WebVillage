import React from "react";
import Hero from "./components/Hero";
import Footer from "../footer/Footer";
import Intro from "./components/Intro";

const Home = () => {
  return (
    <div>
      <Hero />
      <Intro />
      <Footer />
    </div>
  );
};

export default Home;
