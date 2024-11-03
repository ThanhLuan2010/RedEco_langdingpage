"use client";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "./Banner";
import { Box } from "@mui/material";
import HomeProducts from "./Products";
import WhoWeAre from "./WhoWeAre/page";
import Human from "./Human";
import QualityStandard from "./QualityStandard";
import Customer from "./Customer";
import News from "./News";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import PhoneButton from "@/components/phoneButton";
export default function Home() {
  const router = useRouter();
  useEffect(() => {
    // Lấy hash từ URL (VD: #targetComponent)
    const hash = window.location.hash;
    if (hash) {
      // Cuộn đến thành phần có ID tương ứng với hash
      const targetElement = document.querySelector(hash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [router]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{ height: "100vh" }}
      bgcolor={"#F7F9F9"}
    >
      <div className="pt-[10vh]"></div>
      <Header />
      <Banner />
      <HomeProducts />
      <div className="pt-[40px] xl:pt-[120px] bg-[#F7F9F9]">
        <WhoWeAre />
      </div>

      <div className="">
        <Human />
      </div>
      <QualityStandard />
      <Box paddingTop={"8%"} bgcolor={"#F7F9F9"}>
        <Customer />
      </Box>
      <News />
      <PhoneButton />
      <Footer />
    </Box>
  );
}
