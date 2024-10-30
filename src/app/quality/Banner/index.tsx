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
  `;

  return (
    <div className="relative">
      <div className="w-full relative">
        <Box width={"100vw"} height={"20vh"} sx={{ position: "relative" }}>
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
            <text className=" hidden md:flex xl:ml-4 md:ml-1">
              {" "}
              for business
            </text>
          </text>
          <text className="mt-[32px] xl:mb-[80px] hidden md:flex">
            We have almost 8+ years of experience for helping industrial
            services and business solutions
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
      </div>
      <div className=" px-[20px] md:px-[10%] md:translate-y-[50px] flex flex-col md:flex-row w-[100%]">
        <div
          style={{
            backgroundColor: "rgba(255,255,255,0.9)F",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          }}
          className="w-[100%] md:w-[31.5%] rounded:[20px] flex md:flex-col mt-[24px] rounded-[12px] h-[12vh] item-center bg-white"
        >
          <div className="w-[40%] justify-center flex items-center">
            <Image
              alt=""
              src={require("../../../public/image/ic_quality.png")}
              style={{
                width: "100%",
                height: "65%",
                objectFit: "contain",
              }}
            />
          </div>
          <div className="w-[70%] flex  items-center text-[18px]">
            <text className="font-semibold text-[#00366A] text-center text-[18px]">
              Product Integrity
            </text>
          </div>
        </div>

        <div
          style={{
            backgroundColor: "rgba(255,255,255,0.9)F",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          }}
          className="w-[100%] md:w-[31.5%] rounded:[20px] flex md:flex-col mt-[24px] rounded-[12px] h-[12vh] item-center bg-white"
        >
          <div className="w-[40%] justify-center flex items-center">
            <Image
              alt=""
              src={require("../../../public/image/ic_quality2.png")}
              style={{
                width: "100%",
                height: "65%",
                objectFit: "contain",
              }}
            />
          </div>
          <div className="w-[70%] flex  items-center text-[18px]">
            <text className="font-semibold text-[#00366A] text-center text-[18px]">
              Precision
            </text>
          </div>
        </div>

        <div
          style={{
            backgroundColor: "rgba(255,255,255,0.9)F",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          }}
          className="w-[100%] md:w-[31.5%] rounded:[20px] flex md:flex-col mt-[24px] rounded-[12px] h-[12vh] item-center bg-white"
        >
          <div className="w-[40%] justify-center flex items-center">
            <Image
              alt=""
              src={require("../../../public/image/ic_quality3.png")}
              style={{
                width: "100%",
                height: "65%",
                objectFit: "contain",
              }}
            />
          </div>
          <div className="w-[70%] flex  items-center text-[18px]">
            <text className="font-semibold text-[#00366A] text-center text-[18px]">
              Certification
            </text>
          </div>
        </div>
      </div>
    </div>
  );
}
