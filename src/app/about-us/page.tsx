"use client";
import React, { useEffect } from "react";
import Banner from "./Banner";
import Content from "./content";
import StatisticalData from "./statisticalData";
import Vison from "./Vison.index";
import Mission from "./Mission";
import ScopeOfService from "./ScopeOfService";
import Customer from "./Customer";
import Commit from "./Commit";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useRouter } from 'next/navigation';
import PhoneButton from "@/components/phoneButton";
function About() {
  const router = useRouter();
  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      const targetElement = document.querySelector(hash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [router]);

  return (
    <div>
      <Banner />
      <Content />
      <StatisticalData />
      <Vison />
      <Mission />
      <div id="scope-of-service">
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
