import { Box, Button } from "@mui/material";
import { Col, Row, Typography } from "antd";
import Image from "next/image";
import React from "react";

function WhoWeAre() {
  return (
    <div>
      <div className="relative w-[100%]">
        <div>
          <Image
            style={{
              height: "100%",
              position: "relative",
              objectFit: "fill",
              width: "100vw",
            }}
            alt="image"
            src={require("../../../public/image/banner_who_we_are.png")}
          />
          <div className="bg-gradient-to-r from-[#007BB014] 8% to-[#00366A] 100% w-[100vw] h-[100%] absolute top-0 left-0" />
        </div>

        <div className="absolute top-0 left-0 flex flex-col text-white px-[10%] h-[100%] justify-center items-start w-[100%] lg:w-[45%]">
          <text className="text-[24px] md:text-[30px] lg:text-[40px] xl:text-[50px] font-bold leading-[30px] md:leading-[40px] lg:leading-[55px] xl:leading-[73px]">
            Who are we?
          </text>
          <text className="text-[12px] md:text-[14px] lg:text-[16px] xl:text-[16px] mt-[10px] md:mt[13px] lg:mt[18px] xl:mt-[20px] leading-[14.63px] md:leading-[20px] lg:leading-[30px] xl:leading-[26px]">
            Welcome to REDECO Vietnam Industrial Solutions JSC
          </text>
          <button
            className="
          bg-gradient-to-r from-[#28FF90] -7.86% to-[#00954F] 67.26% 
          py-[10px] 
          rounded-[8px] 
          text-[9px] 
          md:text-[20px] 
          font-bold 
          mt-[25px]
          w-[30%]
          md:w-[40%]
          lg:w-[60%]
          "
          >
            ABOUT US
          </button>
        </div>

        <div className="relative lg:absolute right-0 h-[100%] w-[50%] bottom-[-0px]  justify-center translate-y-[10%] hidden lg:flex">
          <div className="w-[100%] h-[100%] ">
            <Image
              style={{ width: "100%", height: "100%", objectFit: "fill" }}
              alt=""
              src={require("../../../public/image/who_we_are_right.png")}
            />
          </div>

          <div
            className="
           flex flex-col lg:flex-row lg:absolute 
           lg:left-0 h-[100%] overflow-hidden md:gap-[10px] lg:gap-[20px] xl:gap-[30px] 
           w-[100%] translate-x-[-20%]"
          >
            <div className="bg-white lg:px-[16px] xl:px-[20px] pb-[20px] rounded-[12px] pt-[10px] w-[33%] my-[10%] ">
              <div className="h-full">
                <div className="h-[80%] overflow-hidden">
                  <div className="flex justify-between w-full items-center">
                    <div className="xg:w-[30%] lg:w-[25%] md:w-[20%]">
                      <Image
                        alt=""
                        src={require("../../../public/image/ic_area.png")}
                      />
                    </div>
                    <text className="md:text-[2rem] lg:text-[2.5rem] xl:text-[3rem] text-[#00366A] opacity-[0.1] font-medium">
                      01
                    </text>
                  </div>

                  <div className="flex flex-col">
                    <text className="text-[#00366A] text-[16px] md:text-[16px] lg:text-[18px] xl:text-[20px] font-semibold leading-[24px] line-clamp-1">
                      Area of 1860m²
                    </text>
                    <text className="md:mt-[6px] lg:mt-[8px] xl:mt-[12px] leading-[20px] lg:text-[12px] md:text-[10px] xl:text-[17px] line-clamp-6 xl:line-clamp-[7]">
                      Established in 2017 with 2 modern factories in Hanoi,
                      covering a total area of 1860 m². REDECO Vietnam
                      Industrial Solutions JSC is equipped a wide range of
                      advanced machinery ...
                    </text>
                  </div>
                </div>

                <div className="flex border-[#00366a59] border-t-[1px] md:mt-[8px] md:pt-[8px] lg:mt-[12px] lg:pt-[16px] xl:pt-[16px] xl:mt-[16px]">
                  <button className="text-[#00366A] mr-[8px] font-normal text-[8px] md:text-[10px] lg:text-[14px] xl:text-[18px]">
                    Read More
                  </button>
                  <Image
                    style={{ objectFit: "contain" }}
                    alt=""
                    src={require("../../../public/image/Arrow 1.png")}
                  />
                </div>
              </div>
            </div>

            <div className="bg-white lg:px-[16px] xl:px-[20px] pb-[20px] rounded-[12px] pt-[10px] w-[33%] my-[10%] ">
              <div className="h-full">
                <div className="h-[80%] overflow-hidden">
                  <div className="flex justify-between w-full items-center">
                    <div className="xg:w-[30%] lg:w-[25%] md:w-[20%]">
                      <Image
                        alt=""
                        src={require("../../../public/image/ic_service.png")}
                      />
                    </div>
                    <text className="md:text-[2rem] lg:text-[2.5rem] xl:text-[3rem] text-[#00366A] opacity-[0.1] font-medium">
                      02
                    </text>
                  </div>

                  <div className="flex flex-col">
                    <text className="text-[#00366A] text-[16px] md:text-[16px] lg:text-[18px] xl:text-[20px] font-semibold leading-[24px] line-clamp-1">
                      Our Services
                    </text>
                    <text className="md:mt-[6px] lg:mt-[8px] xl:mt-[12px] leading-[20px] lg:text-[12px] md:text-[10px] xl:text-[17px] line-clamp-6 xl:line-clamp-[7]">
                      REDECO Vietnam JSC offers a wide range of solution
                      tailored as custom machinery development, conveyors and
                      handling solutions, logistics support equipment,
                      automation ...
                    </text>
                  </div>
                </div>

                <div className="flex border-[#00366a59] border-t-[1px] md:mt-[8px] md:pt-[8px] lg:mt-[12px] lg:pt-[16px] xl:pt-[16px] xl:mt-[16px]">
                  <button className="text-[#00366A] mr-[8px] font-normal text-[8px] md:text-[10px] lg:text-[14px] xl:text-[18px]">
                    Read More
                  </button>
                  <Image
                    style={{ objectFit: "contain" }}
                    alt=""
                    src={require("../../../public/image/Arrow 1.png")}
                  />
                </div>
              </div>
            </div>

            <div className="bg-white lg:px-[16px] xl:px-[20px] pb-[20px] rounded-[12px] pt-[10px] w-[33%] my-[10%] ">
              <div className="h-full">
                <div className="h-[80%] overflow-hidden">
                  <div className="flex justify-between w-full items-center">
                    <div className="xg:w-[30%] lg:w-[25%] md:w-[20%]">
                      <Image
                        alt=""
                        src={require("../../../public/image/ic_leading.png")}
                      />
                    </div>
                    <text className="md:text-[2rem] lg:text-[2.5rem] xl:text-[3rem] text-[#00366A] opacity-[0.1] font-medium">
                      03
                    </text>
                  </div>

                  <div className="flex flex-col">
                    <text className="text-[#00366A] text-[16px] md:text-[16px] lg:text-[18px] xl:text-[20px] font-semibold leading-[24px] line-clamp-1">
                      Our Leading
                    </text>
                    <text className="md:mt-[6px] lg:mt-[8px] xl:mt-[12px] leading-[20px] lg:text-[12px] md:text-[10px] xl:text-[17px] line-clamp-6 xl:line-clamp-[7]">
                      REDECO Vietnam JSC provide solutions to the customer in
                      many industries, specializing in manufacturing, designing
                      and supplying equipment in mechanical processing ...
                    </text>
                  </div>
                </div>

                <div className="flex border-[#00366a59] border-t-[1px] md:mt-[8px] md:pt-[8px] lg:mt-[12px] lg:pt-[16px] xl:pt-[16px] xl:mt-[16px]">
                  <button className="text-[#00366A] mr-[8px] font-normal text-[8px] md:text-[10px] lg:text-[14px] xl:text-[18px]">
                    Read More
                  </button>
                  <Image
                    style={{ objectFit: "contain" }}
                    alt=""
                    src={require("../../../public/image/Arrow 1.png")}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-[20px] flex lg:hidden flex-col">
        <div
          className="bg-white lg:px-[16px] xl:px-[20px] pb-[20px] rounded-[12px] pt-[10px] w-[100%] px-[25px] py-[25px] mt-[25px] overflow-hidden"
          style={{ boxShadow: "0 0 10px 5px #7B7A7A0F" }}
        >
          <div className="h-full">
            <div className="h-[80%] overflow-hidden">
              <div className="flex justify-between w-full items-center">
                <div className="xg:w-[30%] lg:w-[25%] w-[15%]">
                  <Image
                    alt=""
                    src={require("../../../public/image/ic_area.png")}
                  />
                </div>
                <text className="md:text-[2rem] lg:text-[2.5rem] text-[3rem] text-[#00366A] opacity-[0.1] font-medium">
                  01
                </text>
              </div>

              <div className="flex flex-col">
                <text className="text-[#00366A] text-[20px] md:text-[16px] lg:text-[18px] xl:text-[20px] font-semibold leading-[24px] line-clamp-1">
                  Total Area of 1860m²
                </text>
                <text className="mt-[12px] line-clamp-4 text-[em] leading-[20px]">
                  REDECO established in 2017 with 2 modern factories in Hanoi,
                  covering a total area of 1860 m². And the company is equipped
                  with a wide range of advanced machinery
                </text>
              </div>
            </div>

            <div className="flex border-[#00366a59] border-t-[1px] mt-[18px] pt-[18px]">
              <button className="text-[#00366A] text-[18px] mr-[8px]">
                Read More
              </button>
              <Image
                style={{ objectFit: "contain" }}
                alt=""
                src={require("../../../public/image/Arrow 1.png")}
              />
            </div>
          </div>
        </div>

        <div
          className="bg-white lg:px-[16px] xl:px-[20px] pb-[20px] rounded-[12px] pt-[10px] w-[100%] px-[25px] py-[25px] mt-[25px] overflow-hidden"
          style={{ boxShadow: "0 0 10px 5px #7B7A7A0F" }}
        >
          <div className="h-full">
            <div className="h-[80%] overflow-hidden">
              <div className="flex justify-between w-full items-center">
                <div className="xg:w-[30%] lg:w-[25%] w-[15%]">
                  <Image
                    alt=""
                    src={require("../../../public/image/ic_service.png")}
                  />
                </div>
                <text className="md:text-[2rem] lg:text-[2.5rem] text-[3rem] text-[#00366A] opacity-[0.1] font-medium">
                  02
                </text>
              </div>

              <div className="flex flex-col">
                <text className="text-[#00366A] text-[20px] md:text-[16px] lg:text-[18px] xl:text-[20px] font-semibold leading-[24px] line-clamp-1">
                  Our Services
                </text>
                <text className="mt-[12px] line-clamp-4 text-[em] leading-[20px]">
                  REDECO offers a wide range of solutions tailored such as
                  custom machinery development, conveyors, handling solutions,
                  logistics support equipment, automation
                </text>
              </div>
            </div>

            <div className="flex border-[#00366a59] border-t-[1px] mt-[18px] pt-[18px]">
              <button className="text-[#00366A] text-[18px] mr-[8px]">
                Read More
              </button>
              <Image
                style={{ objectFit: "contain" }}
                alt=""
                src={require("../../../public/image/Arrow 1.png")}
              />
            </div>
          </div>
        </div>

        <div
          className="bg-white lg:px-[16px] xl:px-[20px] pb-[20px] rounded-[12px] pt-[10px] w-[100%] px-[25px] py-[25px] mt-[25px] overflow-hidden"
          style={{ boxShadow: "0 0 10px 5px #7B7A7A0F" }}
        >
          <div className="h-full">
            <div className="h-[80%] overflow-hidden">
              <div className="flex justify-between w-full items-center">
                <div className="xg:w-[30%] lg:w-[25%] w-[15%]">
                  <Image
                    alt=""
                    src={require("../../../public/image/ic_leading.png")}
                  />
                </div>
                <text className="md:text-[2rem] lg:text-[2.5rem] text-[3rem] text-[#00366A] opacity-[0.1] font-medium">
                  03
                </text>
              </div>

              <div className="flex flex-col">
                <text className="text-[#00366A] text-[20px] md:text-[16px] lg:text-[18px] xl:text-[20px] font-semibold leading-[24px] line-clamp-1">
                  Our Leading
                </text>
                <text className="mt-[12px] line-clamp-4 text-[em] leading-[20px]">
                  REDECO provide solutions to the customer in many industries,
                  specializing in manufacturing, designing and supplying
                  equipment in mechanical processing
                </text>
              </div>
            </div>

            <div className="flex border-[#00366a59] border-t-[1px] mt-[18px] pt-[18px]">
              <button className="text-[#00366A] text-[18px] mr-[8px]">
                Read More
              </button>
              <Image
                style={{ objectFit: "contain" }}
                alt=""
                src={require("../../../public/image/Arrow 1.png")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhoWeAre;
