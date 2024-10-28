"use client";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "./Banner";
import { Box } from "@mui/material";
import QualityContent from "./QualityContent";
import Capacity from "./Capacity";

export default function Home() {
  return (
    <Box display="flex" flexDirection="column" sx={{ height: "100vh",display:"flex",alignItems:"center" }}>
      <Header />
      <Banner />
      <QualityContent/>
      <Capacity/>
      <Footer />
    </Box>
  );
}
