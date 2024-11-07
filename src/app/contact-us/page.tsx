"use client";
import Footer from "@/components/Footer";
import PhoneButton from "@/components/phoneButton";
import { Box } from "@mui/material";
import dynamic from "next/dist/shared/lib/dynamic";
import { useState } from "react";

const AboutUs = () => {
  const [isStatusSubmit, setIsStatusSubmit] = useState(false);
  const [userNameSubmit, setUserNameSubmit] = useState("");

  const ThumbnailComponent = dynamic(() => import("./Thumbnail"), {
    ssr: false,
  });
  const GetInTouchComponent = dynamic(() => import("./GetInTouch"), {
    ssr: false,
  });

  return (
    <Box display="flex" flexDirection="column">
      <ThumbnailComponent />

      <Box>
        <div className="mt-10 flex justify-center">
          {isStatusSubmit ? (
            <div className="flex flex-col justify-center items-center w-[90%]">
              <div className="flex flex-col justify-center items-center text-center">
                <div
                  style={{
                    fontWeight: 400,
                    fontFamily: "Montserrat",
                  }}
                  className="uppercase w-[100%] xl:text-4xl lg:text-4xl md:text-4xl sm:text-2xl text-2xl"
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
                  , THANKS FOR
                  <p className="mt-2">REACHING OUT!</p>
                </div>
              </div>
              <p
                style={{ fontWeight: 400 }}
                className="w-[80%] flex justify-center text-center mt-8"
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
                className="text-[#00366A] mt-14"
              >
                - The REDECO Team -
              </span>
            </div>
          ) : (
            <div id="get-in-touch">
              <GetInTouchComponent
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
