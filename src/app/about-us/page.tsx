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
        <div className="mt-32">
          <GetInTouch></GetInTouch>
        </div>
      </Box>
    </Box>
  );
};

export default AboutUs;
