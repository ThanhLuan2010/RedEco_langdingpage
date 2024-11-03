"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React, { useEffect, useState } from "react";
import Banner from "./banner";
import Machine from "./machine";
import Automation from "./automation";
import PlasticProduct from "./plasticProduct";
import Silicon from "./silicon";
import OtherProduct from "./otherProducts";
import { useRouter } from "next/navigation";
import TopBanner from "./TopBaner";
import PhoneButton from "@/components/phoneButton";

function Product() {
  const arrBanner = [
    require("../../../public/image/product_carousel1.png"),
    require("../../../public/image/product_carousel2.png"),
    require("../../../public/image/product_carousel3.png"),
  ];

  const arrBanner2 = [
    require("../../../public/image/banner-plastic1.png"),
    require("../../../public/image/banner-plastic2.png"),
    require("../../../public/image/banner-plastic3.png"),
  ];
  const router = useRouter();

  const [tab, setTab] = useState<string>("");
  const [otherTab, setOtherTab] = useState<string>("");

  useEffect(() => {
    // Lấy hash từ URL (VD: #targetComponent)
    const hash = window.location.hash;

    if (hash) {
      const id = hash?.split(".")[1];
      const tabName =
        id == "1"
          ? "VACUUM SUCTION CUP"
          : id == "2"
          ? "SILICONE RUBBER DETAIL"
          : id == "3"
          ? "SILICONE RUBBER GASKET"
          : id == "4"?"INDUSTRIAL KEYBOARD":null
      const tabOther =
        id == "5"
          ? "MANIPULATOR TABLE"
          : id == "6"
          ? "ALUMINUM CASTING"
          : id == "7"
          ? "JIG PRODUCTS"
          : id == "8"
          ? "INDUSTRIAL TROLLEY"
          : null;
      if (tabName) {
        setTab(tabName);
      }
      if (tabOther) {
        setOtherTab(tabOther);
      }
      // Cuộn đến thành phần có ID tương ứng với hash
      const targetElement = document.querySelector(hash?.split(".")[0]);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [router]);

  return (
    <div className="bg-[#F7F9F9] pt-[10vh]">
      <Header />
      <div>
      <TopBanner />
      </div>
      <div id="machine-details">
        <Machine />
      </div>
      <Banner data={arrBanner} />
      <div id="automation">
        <Automation />
      </div>
      <div id="plastic-injection">
        <PlasticProduct />
      </div>
      <Banner data={arrBanner2} />
      <div id="silicone-rubber">
        <Silicon tab={tab} />
      </div>
      <div id="other-products">
        <OtherProduct otherTab={otherTab} />
      </div>
      <PhoneButton />
      <Footer />
    </div>
  );
}

export default Product;
