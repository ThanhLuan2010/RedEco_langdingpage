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

export default function Home() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{ height: "100vh" }}
      bgcolor={"#F7F9F9"}
    >
      <Header />
      <div>
        <Banner />
      </div>
      <div className="">
        <HomeProducts />
      </div>

      <div className="mt-[40px] xl:mt-[120px]">
        <WhoWeAre />
      </div>

      <div className="">
        <Human />
      </div>
      <QualityStandard />
      <Box marginTop={"8%"}>
        <Customer />
      </Box>
      <Box marginTop={"8%"} display={"flex"} justifyContent={"center"}>
        <News />
      </Box>
      <Footer />
    </Box>
  );
}
