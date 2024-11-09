import Footer from "../../components/Footer";
import PhoneButton from "../../components/phoneButton";
import { Box } from "@mui/material";
import { useState } from "react";
import Thumbnail from "./Thumbnail";
import GetInTouch from "./GetInTouch";

const AboutUs = () => {
  const [isStatusSubmit, setIsStatusSubmit] = useState(false);
  const [userNameSubmit, setUserNameSubmit] = useState("");


  return (
    <Box display="flex" flexDirection="column">
      <Thumbnail />
      <Box>
        <div className="mt-[30px] md:mt-[40px] flex justify-center">
          {isStatusSubmit ? (
            <div className="flex flex-col justify-center items-center w-[90%]">
              <div className="flex flex-col justify-center items-center text-center">
                <div
                  style={{
                    fontWeight: 400,
                    fontFamily: "Montserrat",
                  }}
                  className="uppercase w-[100%] xl:text-4xl lg:text-4xl md:text-4xl sm:text-2xl text-[19px]"
                >
                  DEAR{" "}
                  <span
                    style={{
                      fontWeight: 700,
                    }}
                    className=" text-[#00366A]"
                  >
                    {userNameSubmit}
                  </span>
                  , THANKS FOR REACHING OUT!
                </div>
              </div>
              <p
                style={{ fontWeight: 400 }}
                className="w-[100%] flex justify-center text-center mt-[22px] md:mt-[30px]"
              >
                Your message was submitted successfully - thanks! Our Customer
                Care Agents are working to provide you with a reply as soon as
                possible (bear in mind our working hours listed below). In the
                meantime, you can check the FAQ section or look over our new
                product collection.
              </p>
              <span
                style={{
                  fontWeight: 600,
                }}
                className="text-[#00366A] mt-[32px] md:mt-[40px] lg:mt-[40px] xl:mt-[50px] 2xl:mt-[60px]"
              >
                - The REDECO Team -
              </span>
            </div>
          ) : (
            <div id="get-in-touch">
              <GetInTouch
                setIsStatusSubmit={setIsStatusSubmit}
                setUserNameSubmit={setUserNameSubmit}
              />
            </div>
          )}
        </div>
      </Box>
      <PhoneButton />
      <Footer />
    </Box>
  );
};

export default AboutUs;
