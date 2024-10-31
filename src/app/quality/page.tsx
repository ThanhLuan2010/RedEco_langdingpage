"use client";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "./Banner";
import { Box } from "@mui/material";
import QualityContent from "./QualityContent";
import Capacity from "./Capacity";
import QualityStandard from "./QualityStandard";
import ProductionLine from "./ProductionLine";

export default function Home() {
  return (
    <div className="flex flex-col bg-[#F7F9F9]">
      <Header />
      <Banner />
      <QualityContent />
      <Capacity />
      <QualityStandard />
      <ProductionLine />
      <Footer />
    </div>
  );
}
