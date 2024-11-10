import PhoneButton from "../../components/phoneButton"; 
import { Box } from "@mui/material";
import Footer from "../../components/Footer";
import Banner from "./Banner";
import HomeProducts from "./Products";
import WhoWeAre from "./WhoWeAre/page";
import QualityStandard from "./QualityStandard";
import Customer from "./Customer";
import Human from "./Human";
import News from "./News";

export default function Home() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{ height: "100vh" }}
      bgcolor={"#F7F9F9"}
    >
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
