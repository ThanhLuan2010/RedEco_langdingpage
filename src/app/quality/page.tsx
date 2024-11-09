"use client";
import PhoneButton from "../../components/phoneButton";
import Footer from "../../components/Footer";
import Banner from "./Banner";
import QualityContent from "./QualityContent";
import Capacity from "./Capacity";
import QualityStandard from "./QualityStandard";
import ProductionLine from "./ProductionLine";

export default function Home() {
    
  return (
    <div className="bg-[#F7F9F9]">
      <Banner />
      <QualityContent />
      <Capacity />
      <QualityStandard />
      <ProductionLine />
      <PhoneButton />
      <Footer />
    </div>
  );
}
