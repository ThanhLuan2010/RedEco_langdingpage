import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import { Carousel } from "antd";

export default function Banner() {
  const StyledCarousel = styled(Carousel)`
    .slick-dots {
      display: flex !important;
      justify-content: center;
      align-items: center;
    }

    .slick-dots li {
      margin: 0 10px; /* Tạo khoảng cách đều cho các dot không active */
    }

    .slick-dots li.slick-active {
      margin-left: 0px; /* Không thêm khoảng cách bên trái */
      margin-right: 15px; /* Tạo khoảng cách riêng bên phải để cân đối */
    }

    .slick-dots li button {
      background-color: white; /* Màu dot không active */
      width: 16px; /* Kích thước chiều rộng */
      height: 16px; /* Kích thước chiều cao */
      border-radius: 50%; /* Bo tròn thành hình tròn */
      transition: all 0.3s ease-in-out; /* Hiệu ứng chuyển đổi mềm mại */
      border: none;
      opacity: 1;
      bottom: 22px;
    }

    .slick-dots li.slick-active button {
      background: linear-gradient(
        90deg,
        #28ff90,
        #00954f
      ); /* Màu gradient cho dot active */
      width: 40px; /* Chiều rộng dot active */
      height: 20px; /* Chiều cao dot active */
      border-radius: 20px; /* Bo tròn nhẹ cho dot dài */
      border: none;
      bottom: 24px;
    }
    /* Ẩn dots khi màn hình dưới 768px */
    @media (max-width: 768px) {
      .slick-dots {
        display: none !important;
      }
    }
  `;

  return (
    <Box sx={{ width: "100vw", position: "relative", height: "100%" }}>
      <StyledCarousel autoplay autoplaySpeed={2000}>
        <Box width={"100vw"} height={"100%"}>
          <Image
            style={{ width: "100%", height: "100%", objectFit: "fill" }}
            alt="banner"
            src={require("../../../public/image/banner1.png")}
          />
        </Box>
        <Box width={"100vw"} height={"100%"}>
          <Image
            style={{ width: "100%", height: "100%" }}
            alt="banner"
            src={require("../../../public/image/banner2.png")}
          />
        </Box>
        <Box width={"100vw"} height={"100%"}>
          <Image
            style={{ width: "100%", height: "100%" }}
            alt="banner"
            src={require("../../../public/image/banner3.png")}
          />
        </Box>
        <Box width={"100vw"} height={"100%"}>
          <Image
            style={{ width: "100%", height: "100%" }}
            alt="banner"
            src={require("../../../public/image/banner4.png")}
          />
        </Box>
      </StyledCarousel>
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
          zIndex: 10, // Ensure it's above the slider
          overflow: "hidden",
        }}
      >
        <text className="font-bold text-[20px] sm:text-[30px] md:text-[40px] lg:text-[45px] xl:text-[50px] leading-[30px] lg:leading-[73.14px]">
          We <span style={{ color: "#39E63D" }}>Provide</span> The Best
        </text>
        <text className="font-bold text-[20px] sm:text-[30px] md:text-[40px] lg:text-[45px] xl:text-[50px] leading-[30px] lg:leading-[73.14px] flex">
          industrial solution
          <text className=" hidden md:flex xl:ml-4 md:ml-1"> for business</text>
        </text>
        <text className="mt-[32px] xl:mb-[80px] hidden md:flex">
          We have almost 8+ years of experience for helping industrial services
          and business solutions
        </text>

        <div className="flex gap-[20px] xl:gap-[35px] mt-[35px] w-[65%] md:w-[50%] lg:w-[45%]">
          <button className="bg-gradient-to-r from-[#28FF90] -7.86% to-[#00954F] 67.26% py-[10px] md:py-[15px] xl:py-[20px] rounded-[8px] text-[9px] md:text-[12px] ld:text-[16px] xl:text-[20px] w-[50%] font-bold">
            OUR SERVICES
          </button>

          <button className="py-[10px] rounded-[8px] w-[50%] border-[1px] border-[#F0F0F0] font-bold text-[9px] md:text-[12px] ld:text-[16px] xl:text-[20px]">
            CONTACT US
          </button>
        </div>
      </Box>
    </Box>
  );
}
