"use client";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "./Banner";
import { Box } from "@mui/material";
import QualityContent from "./QualityContent";
import Capacity from "./Capacity";
import QualityStandard from "./QualityStandard";
import ProductionLine from "./ProductionLine";
import PhoneButton from "@/components/phoneButton";

export default function Home() {
  return (
    <div className=" bg-[#F7F9F9] pt-[10vh]">
      <Header />
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
