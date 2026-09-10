import React, { useState, useEffect } from "react";
import HeroAbout from "./HeroAbout";
import IntroAbout from "./IntroAbout";
import Footer from "../footer/Footer";

const About = () => {
  return (
    <div>
      <HeroAbout />
      <IntroAbout />
      <Footer />
    </div>
  );
};

export default About;
