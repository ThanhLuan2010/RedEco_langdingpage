import { Box } from "@mui/material";
import Image from "next/image";

export default function Banner() {
  return (
    <div className="relative">
      <div className="w-full h-[100%] relative">
        <Box width={"100vw"} height={"100%"} sx={{ position: "relative" }}>
          <Image
            style={{ width: "100%", height: "100%" }}
            alt="banner"
            src={require("../../../public/image/quality_banner.png")}
          />
          <Box
            sx={{
              backgroundColor: "#00366A",
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
              position: "absolute",
              opacity: 0.6,
            }}
          />
        </Box>

        <div className="absolute top-0 h-[100%] flex flex-col justify-center px-[20px] md:px-[5%] xl:px-[10%] text-white overflow-hidden">
          <text className="font-bold text-[20px] sm:text-[30px] md:text-[40px] lg:text-[45px] xl:text-[50px] leading-[30px] md:leading-[40px] lg:leading-[73.14px]">
            We <span style={{ color: "#39E63D" }}>Provide</span> The Best
          </text>
          <text className="font-bold text-[20px] sm:text-[30px] md:text-[40px] lg:text-[45px] xl:text-[50px] leading-[30px] md:leading-[40px] lg:leading-[73.14px] flex lg:hidden">
            industrial solution
          </text>

          <text className="font-bold text-[20px] sm:text-[30px] md:text-[40px] lg:text-[45px] xl:text-[50px] leading-[30px] md:leading-[40px] lg:leading-[73.14px] lg:flex hidden">
            industrial solution for business
          </text>

          <text className="md:mt-[18px] 2xl:mt-[32px] xl:mb-[40px] hidden md:flex">
            We have almost 8+ years of experience for helping industrial
            services and business solutions
          </text>

          <div className="flex gap-[20px] xl:gap-[35px] mt-[32px] md:mt-[18px] 2xl:mt-[35px] w-[50vw] md:w-[50%] lg:w-[40vw]">
            <button className="bg-gradient-to-r from-[#28FF90] -7.86% to-[#00954F] 67.26% py-[10px] md:py-[15px] xl:py-[20px] rounded-[8px] text-[9px] md:text-[12px] ld:text-[16px] xl:text-[20px] w-[50%] font-bold">
              OUR SERVICES
            </button>

            <button className="py-[10px] rounded-[8px] w-[50%] border-[1px] border-[#F0F0F0] font-bold text-[9px] md:text-[12px] ld:text-[16px] xl:text-[20px]">
              CONTACT US
            </button>
          </div>
        </div>
      </div>
      <div className="gap-[24px] px-[20px] md:px-[5%] xl:px-[10%] md:translate-y-[-50%] flex flex-col md:flex-row w-[100%] mt-[24px]">
        <div
          style={{
            backgroundColor: "rgba(255,255,255,0.9)F",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          }}
          className="
          w-[100%]
          md:w-[31.5%] 
          rounded:[20px] 
          flex md:flex-col
          rounded-[12px] 
          h-[12vh] md:h-[22vh] 
          lg:h-[32vh] xl:h-[42vh]
          2xl:h-[50vh] item-center
        bg-white md:justify-center 
          items-center
          "
        >
          <div className="w-[40%] md:w-[100%] h-[65%] md:h-[50%] md:pt-[20px]  justify-center flex items-center">
            <Image
              alt=""
              src={require("../../../public/image/ic_quality.png")}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </div>
          <div className="w-[60%] md:w-[80%] h-[50%] flex md:justify-center items-center text-[18px]">
            <text className="font-semibold text-[#00366A] text-center text-[16px] md:text-[18px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px]">
              Product Integrity
            </text>
          </div>
        </div>

        <div
          style={{
            backgroundColor: "rgba(255,255,255,0.9)F",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          }}
          className="
          w-[100%]
          md:w-[31.5%] 
          rounded:[20px] 
          flex md:flex-col
          rounded-[12px] 
          h-[12vh] md:h-[22vh] 
          lg:h-[32vh] xl:h-[42vh]
          2xl:h-[50vh] item-center
        bg-white md:justify-center 
          items-center
          "
        >
          <div className="w-[40%] md:w-[100%] h-[65%] md:h-[50%] md:pt-[20px]  justify-center flex items-center">
            <Image
              alt=""
              src={require("../../../public/image/ic_quality.png")}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </div>
          <div className="w-[60%] md:w-[80%] h-[50%] flex md:justify-center items-center text-[18px]">
            <text className="font-semibold text-[#00366A] text-center text-[16px] md:text-[18px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px]">
              Product Integrity
            </text>
          </div>
        </div>

        <div
          style={{
            backgroundColor: "rgba(255,255,255,0.9)F",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          }}
          className="
          w-[100%]
          md:w-[31.5%] 
          rounded:[20px] 
          flex md:flex-col
          rounded-[12px] 
          h-[12vh] md:h-[22vh] 
          lg:h-[32vh] xl:h-[42vh]
          2xl:h-[50vh] item-center
        bg-white md:justify-center 
          items-center
          "
        >
          <div className="w-[40%] md:w-[100%] h-[65%] md:h-[50%] md:pt-[20px]  justify-center flex items-center">
            <Image
              alt=""
              src={require("../../../public/image/ic_quality.png")}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </div>
          <div className="w-[60%] md:w-[80%] h-[50%] flex md:justify-center items-center text-[18px]">
            <text className="font-semibold text-[#00366A] text-center text-[16px] md:text-[18px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px]">
              Product Integrity
            </text>
          </div>
        </div>
      
      </div>
    </div>
  );
}
