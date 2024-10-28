"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Typography } from "antd";
import Image from "next/image";
import React, { useState } from "react";
import Banner from "./banner";
import Machine from "./machine";
import Automation from "./automation";
import PlasticProduct from "./plasticProduct";
import Silicon from "./silicon";
import OtherProduct from "./otherProducts";

function Product() {
  const arrBanner = [
    require("../../public/image/product_carousel1.png"),
    require("../../public/image/product_carousel2.png"),
    require("../../public/image/product_carousel3.png"),
  ];

  const arrBanner2 = [
    require("../../public/image/banner-plastic1.png"),
    require("../../public/image/banner-plastic2.png"),
    require("../../public/image/banner-plastic3.png"),
  ];
  return (
    <div className="bg-[#F7F9F9]">
      <Header />
      <Machine />
      <Banner data={arrBanner} />
      <Automation />
      <PlasticProduct />
      <Banner data={arrBanner2} />
      <Silicon />
      <OtherProduct />
      <Footer />
    </div>
  );
}

export default Product;
