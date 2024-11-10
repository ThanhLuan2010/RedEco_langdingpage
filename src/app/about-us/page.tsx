import React, { useEffect } from "react";
import Banner from "./Banner";
import Content from "./content";
import StatisticalData from "./statisticalData";
import Vison from "./Vison.index";
import Mission from "./Mission";
import ScopeOfService from "./ScopeOfService";
import Customer from "./Customer";
import Commit from "./Commit";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";

import PhoneButton from "../../components/phoneButton";
function About() {
  const navigate = useNavigate();
  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      const targetElement = document.querySelector(hash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [navigate]);

  return (
    <div>
      <Banner />
      <Content />
      <StatisticalData />
      <Vison />
      <Mission />
      <div id="scope-of-service" className="scroll-mt-[15vh]">
        <ScopeOfService />
      </div>
      <Customer />
      <Commit />
      <PhoneButton />
      <Footer />
    </div>
  );
}

export default About;
