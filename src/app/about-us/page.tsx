import Header from "@/components/Header";
import { Box } from "@mui/material";
import Thumbnail from "./Thumbnail";
import GetInTouch from "./GetInTouch";

const AboutUs = () => {
  return (
    <Box display="flex" flexDirection="column">
      <Header />

      <Box>
        <Thumbnail></Thumbnail>
      </Box>

      <Box>
        <GetInTouch></GetInTouch>
      </Box>
    </Box>
  );
};

export default AboutUs;
