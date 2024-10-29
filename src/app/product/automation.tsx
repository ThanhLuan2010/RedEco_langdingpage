import { Typography } from "antd";
import Image from "next/image";
import React, { useState } from "react";

function Automation() {
  const [selectedCategory, setSelectedCategory] =
    useState<string>("Category 01");

  const categories: any = {
    "Category 01": [
      { image: require("../../public/image/product1.1.png"), height: "60%" },
      { image: require("../../public/image/product1.2.png"), height: "40%" },
      { image: require("../../public/image/product1.3.png"), height: "50%" },
      { image: require("../../public/image/product1.4.png"), height: "50%" },
      { image: require("../../public/image/product1.5.png"), height: "50%" },
      { image: require("../../public/image/product1.6.png"), height: "50%" },
      { image: require("../../public/image/product1.7.png"), height: "50%" },
      { image: require("../../public/image/product1.8.png"), height: "50%" },
    ],
    "Category 02": [
      require("../../public/image/product2.1.png"),
      require("../../public/image/product2.2.png"),
      require("../../public/image/product2.3.png"),
      require("../../public/image/product2.4.png"),
      require("../../public/image/product2.5.png"),
      require("../../public/image/product2.6.png"),
      require("../../public/image/product2.7.png"),
      require("../../public/image/product2.8.png"),
    ],
    "Category 03": [
      require("../../public/image/product3.1.png"),
      require("../../public/image/product3.2.png"),
      require("../../public/image/product3.3.png"),
      require("../../public/image/product3.4.png"),
      require("../../public/image/product3.5.png"),
      require("../../public/image/product3.6.png"),
      require("../../public/image/product3.7.png"),
      require("../../public/image/product3.8.png"),
    ],
  };
  return (
    <div>
      <div className="relative flex justify-center mt-20">
        <Typography
          style={{
            fontSize: "2rem",
            lineHeight: "50px",
            fontFamily: "Montserrat",
            fontWeight: "700",
            position: "relative",
            paddingBottom: "10px",
            color: "#00366A",
          }}
        >
          <span className="xl:text-[2rem] sm:px-[10px] px-[10px] lg:px-[0px] md:px-[0px] xl:px-[0px] flex text-center md:text-[2rem] lg:text-[2rem] 
          sm:text-[28px] justify-center items-center w-[100%] text-[28px]">AUTOMATION</span>
          <span className="lg:h-[5px] xl:h-[5px] md:h-[5px] sm:h-[3px] h-[3px]"
            style={{
              position: "absolute",
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: "100px",
              backgroundColor: "#00A859",
            }}
          />
        </Typography>
      </div>

      <div className="mt-[40px]">
        <div className="xl:px-[10%] lg:px-[10%] md:px-[10%] sm:px-[6%] px-[4%]">
          <div className="border-[2px] xl:flex md:flex lg:flex sm:hidden hidden border-[#00366A] p-[20px] rounded-[12px]">
            <Image
              src={require("../../public/image/automation_banner.png")}
              alt=""
            />
          </div>
          <div className="xl:flex lg:flex md:flex sm:hidden hidden overflow-hidden h-[90vh] gap-[35px] mt-[70px]">
            <div className="gap-[35px] overflow-hidden w-[40%] flex flex-col">
              <div className="h-[55%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
                <Image
                  alt=""
                  src={require("../../public/image/automation1.png")}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  className="transition-transform duration-300 ease-in-out hover:scale-125"
                />
              </div>
              <div className="h-[45%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
                <Image
                  alt=""
                  src={require("../../public/image/automation3.png")}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  className="transition-transform duration-300 ease-in-out hover:scale-125"
                />
              </div>
            </div>

            <div className="gap-[35px] overflow-hidden w-[35%] flex flex-col">
              <div className="h-[55%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
                <Image
                  alt=""
                  src={require("../../public/image/automation2.png")}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  className="transition-transform duration-300 ease-in-out hover:scale-125"
                />
              </div>
              <div className="h-[45%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
                <Image
                  alt=""
                  src={require("../../public/image/automation4.png")}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  className="transition-transform duration-300 ease-in-out hover:scale-125"
                />
              </div>
            </div>

            <div className="gap-[35px] overflow-hidden w-[25%] flex flex-col">
              <div className="h-[100%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
                <Image
                  alt=""
                  src={require("../../public/image/automation5.png")}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  className="transition-transform duration-300 ease-in-out hover:scale-125"
                />
              </div>
            </div>
          </div>

          <div className="xl:hidden lg:hidden md:hidden sm:flex w-[100%] flex overflow-hidden gap-4 h-[90vh] mt-[70px]">
            <div className="gap-4 overflow-hidden w-[50%] flex flex-col">
            <div className="h-[30%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
                <Image
                  alt=""
                  src={require("../../public/image/automation2.png")}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  className="transition-transform duration-300 ease-in-out hover:scale-125"
                />
              </div>
              <div className="h-[30%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
                <Image
                  alt=""
                  src={require("../../public/image/automation4.png")}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  className="transition-transform duration-300 ease-in-out hover:scale-125"
                />
              </div>
              {/* <div className="h-[55%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
                <Image
                  alt=""
                  src={require("../../public/image/automation1.png")}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  className="transition-transform duration-300 ease-in-out hover:scale-125"
                />
              </div>
              <div className="h-[45%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
                <Image
                  alt=""
                  src={require("../../public/image/automation3.png")}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  className="transition-transform duration-300 ease-in-out hover:scale-125"
                />
              </div> */}
            </div>

            <div className=" overflow-hidden h-[100%] w-[50%] flex flex-col">
              <div className="h-[62%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
                <Image
                  alt=""
                  src={require("../../public/image/automation5.png")}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  className="transition-transform duration-300 ease-in-out hover:scale-125"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Automation;
