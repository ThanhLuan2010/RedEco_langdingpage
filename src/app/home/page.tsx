"use client";
import PhoneButton from "@/components/phoneButton";
import { Box } from "@mui/material";
import dynamic from "next/dynamic";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
export default function Home() {
  const BannerComponent = dynamic(() => import("./Banner"), { ssr: false });
  const HomeProductsComponent = dynamic(() => import("./Products"), {
    ssr: false,
  });
  const WhoWeAreComponent = dynamic(() => import("./WhoWeAre/page"), {
    ssr: false,
  });
  const QualityStandardComponent = dynamic(() => import("./QualityStandard"), {
    ssr: false,
  });
  const CustomerComponent = dynamic(() => import("./Customer"), { ssr: false });
  const HumanComponent = dynamic(() => import("./Human"), { ssr: false });
  const NewsComponent = dynamic(() => import("./News"), { ssr: false });
  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{ height: "100vh" }}
      bgcolor={"#F7F9F9"}
    >
      <BannerComponent />
      <HomeProductsComponent />
      <div className="pt-[40px] xl:pt-[120px] bg-[#F7F9F9]">
        <WhoWeAreComponent />
      </div>

      <div className="">
        <HumanComponent />
      </div>
      <QualityStandardComponent />
      <Box paddingTop={"8%"} bgcolor={"#F7F9F9"}>
        <CustomerComponent />
      </Box>
      <NewsComponent />
      <PhoneButton />
      <Footer />
    </Box>
  );
}
