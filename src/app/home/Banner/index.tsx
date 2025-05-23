"use client";
import { Box } from "@mui/material";
import { Carousel } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styled from "styled-components";

const StyledCarousel = styled(Carousel)`
  .slick-dots {
    display: flex !important;
    justify-content: center;
    align-items: center;
  }

  .slick-dots li {
    margin: 0 10px;
  }

  .slick-dots li.slick-active {
    margin-left: 0px;
    margin-right: 15px;
  }

  .slick-dots li button {
    background-color: white;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    transition: all 0.3s ease-in-out;
    border: none;
    opacity: 1;
    bottom: 22px;
  }

  .slick-dots li.slick-active button {
    background: linear-gradient(90deg, #28ff90, #00954f);
    width: 40px;
    height: 20px;
    border-radius: 20px;
    border: none;
    bottom: 24px;
  }

  @media (max-width: 768px) {
    .slick-dots {
      display: none !important;
    }
  }
`;

export default function Banner() {
  const router = useRouter();

  return (
    <div className="h-[90vh]">
      <Box sx={{ width: "100vw", position: "relative" }}>
        <div className="hidden md:block">
          <StyledCarousel autoplay autoplaySpeed={2000}>
            {[
              "/image/banner1.png",
              "/image/banner2.png",
              "/image/banner3.png",
              "/image/banner4.png",
            ].map((src, index) => (
              <Box key={index} width={"100vw"} height={"100%"}>
                <Image
                  style={{ width: "100%", height: "100%" }}
                  alt={`banner-${index + 1}`}
                  width={100}
                  height={100}
                  src={src}
                  unoptimized
                />
              </Box>
            ))}
          </StyledCarousel>
        </div>

        <div className="md:hidden">
          <Box  width={"100vw"} height={"100%"}>
            <Image
              style={{ width: "100%", height: "100%" }}
              alt={`banner`}
              width={100}
              height={100}
              src={"/image/banner1.png"}
              unoptimized
            />
          </Box>
        </div>

        {/* Nội dung trên Carousel */}
        <Box
          sx={{
            position: "absolute",
            top: "0",
            left: "10%",
            width: "80%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            color: "white",
            overflow: "hidden",
          }}
        >
          <text className="font-bold text-[20px] sm:text-[30px] md:text-[40px] lg:text-[45px] 2xl:text-[50px] leading-[30px] lg:leading-[60px] 2xl:leading-[73.14px]">
            We <span style={{ color: "#28FF90" }}>Provide</span> The Best
          </text>
          <text className="font-bold text-[20px] sm:text-[30px] md:text-[40px] lg:text-[45px] 2xl:text-[50px] leading-[30px] lg:leading-[60px] 2xl:leading-[73.14px] flex">
            industrial solution
            <text className=" hidden md:flex xl:ml-4 md:ml-1">
              for business
            </text>
          </text>
          <text className="mt-[32px] lg:mb-[50px] 2xl:mb-[80px] hidden md:flex">
            We have almost 8+ years of experience for helping industrial
            services and business solutions
          </text>

          <div className="flex gap-[20px] xl:gap-[35px] mt-[25px] sm:mt-[35px] w-[65%] md:w-[50%] lg:w-[45%] z-20">
            <button
              onClick={() => router.push("/about-us#scope-of-service")}
              className="bg-gradient-to-br from-[#28FF90] -7.86% to-[#00954F] 67.26% py-[10px] lg:py-[10px] 2xl:py-[20px] rounded-[8px] text-[9px] md:text-[12px] ld:text-[16px] xl:text-[20px] w-[50%] font-bold"
            >
              OUR SERVICES
            </button>

            <button
              onClick={() => router.push("/contact-us#get-in-touch")}
              className="py-[10px]  2xl:py-[20px] rounded-[8px] w-[50%] border-[1px] border-[#F0F0F0] font-bold text-[9px] md:text-[12px] ld:text-[16px] xl:text-[17px] 2xl:text-[20px]"
            >
              CONTACT US
            </button>
          </div>
        </Box>

        <div className="absolute bottom-0 left-0 w-full bg-[#00366A] opacity-[0.1] h-[100%] z-10"></div>
      </Box>
    </div>
  );
}
