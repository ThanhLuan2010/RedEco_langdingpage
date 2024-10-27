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
    <Box display="flex" flexDirection="column" sx={{ height: "100vh" }}>
      <Header />
      <Banner />
      <Box marginTop={"140px"}>
        <HomeProducts />
      </Box>

      <Box marginTop={"95px"}>
        <WhoWeAre />
      </Box>

      <Box marginTop={"10%"}>
        <Human />
      </Box>

      <Box marginTop={"8%"}>
        <QualityStandard />
      </Box>

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
