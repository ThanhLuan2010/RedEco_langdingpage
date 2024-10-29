import Header from "@/components/Header";
import { Box } from "@mui/material";
import Thumbnail from "./Thumbnail";
import GetInTouch from "./GetInTouch";
import Footer from "@/components/Footer";

const AboutUs = () => {
  return (
    <Box display="flex" flexDirection="column">
      <Header />

      <div>
        <Thumbnail></Thumbnail>
      </div>

      <Box>
        <div className="mt-10">
          <GetInTouch></GetInTouch>
        </div>
      </Box>

      <Footer />
    </Box>
  );
};

export default AboutUs;
