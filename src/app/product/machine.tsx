import { TabScrollButton } from "@mui/material";
import { Typography } from "antd";
import Image from "next/image";
import React, { useState } from "react";

function Machine() {
  const [activeTab, setActiveTab] = useState("Category 01");

  const categories: any = ["Category 01", "Category 02", "Category 03"];

  const renderProduct = () => {
    if (activeTab === "Category 01") {
      return (
        <>
          <div className="xl:flex lg:flex md:flex sm:hidden hidden overflow-hidden h-[80vh] gap-[20px] xl:gap-[30px] md:mt-[50px] lg:mt-[60px] 2xl:mt-[70px]">
            <div className="gap-[30px] overflow-hidden w-[25%] flex flex-col">
              <div className="h-[55%] overflow-hidden border-[2px] border-[#00366A] rounded-[6px] md:rounded-[8px] bg-white p-[30px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/product1.1.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={100}
                  height={100}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                />
              </div>
              <div className="h-[45%] overflow-hidden border-[2px] border-[#00366A] rounded-[6px] md:rounded-[8px] bg-white p-[30px]">
                <Image
                  alt=""
                  unoptimized
                  src={"/image/product1.2.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={100}
                  height={100}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                />
              </div>
            </div>

            <div className="gap-[30px] overflow-hidden w-[25%] flex flex-col">
              <div className="h-[35%] overflow-hidden border-[2px] border-[#00366A] rounded-[6px] md:rounded-[8px] bg-white p-[30px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/product1.3.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={100}
                  height={100}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                />
              </div>
              <div className="h-[65%] overflow-hidden border-[2px] border-[#00366A] rounded-[6px] md:rounded-[8px] bg-white p-[30px]">
                <Image
                  alt=""
                  unoptimized
                  src={"/image/product1.4.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={100}
                  height={100}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                />
              </div>
            </div>

            <div className="gap-[30px] overflow-hidden w-[25%] flex flex-col">
              <div className="h-[50%] overflow-hidden border-[2px] border-[#00366A] rounded-[6px] md:rounded-[8px] bg-white p-[30px]">
                <Image
                  alt=""
                  unoptimized
                  src={"/image/product1.5.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={100}
                  height={100}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                />
              </div>
              <div className="h-[50%] overflow-hidden border-[2px] border-[#00366A] rounded-[6px] md:rounded-[8px] bg-white p-[30px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/product1.6.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={100}
                  height={100}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                />
              </div>
            </div>

            <div className="gap-[30px] overflow-hidden w-[25%] flex flex-col">
              <div className="h-[35%] overflow-hidden border-[2px] border-[#00366A] rounded-[6px] md:rounded-[8px] bg-white p-[30px]">
                <Image
                  alt=""
                  unoptimized
                  src={"/image/product1.7.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={100}
                  height={100}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                />
              </div>
              <div className="h-[65%] overflow-hidden border-[2px] border-[#00366A] rounded-[6px] md:rounded-[8px] bg-white p-[30px]">
                <Image
                  alt=""
                  unoptimized
                  src={"/image/product1.8.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={100}
                  height={100}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                />
              </div>
            </div>
          </div>
          {/* Mobile */}
          <div className="xl:hidden md:hidden lg:hidden sm:flex flex overflow-hidden h-[120vh] gap-[20px] xl:gap-[30px] mt-[30px]">
            {/* Left */}
            <div className="gap-[20px] xl:gap-[30px] overflow-hidden w-[50%] flex flex-col">
              <div className="h-[60%] overflow-hidden border-[1px] border-[#00366A] rounded-[6px] md:rounded-[8px] bg-white p-[30px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/product1.1.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={100}
                  height={100}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                />
              </div>
              <div className="h-[50%] overflow-hidden border-[1px] border-[#00366A] rounded-[6px] md:rounded-[8px] bg-white p-[30px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/product1.2.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={100}
                  height={100}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                />
              </div>
              <div className="h-[60%] overflow-hidden border-[1px] border-[#00366A] rounded-[6px] md:rounded-[8px] bg-white p-[30px]">
                <Image
                  alt=""
                  src={"/image/product1.3.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={100}
                  height={100}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                />
              </div>
              <div className="h-[50%] overflow-hidden border-[1px] border-[#00366A] rounded-[6px] md:rounded-[8px] bg-white p-[30px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/product1.4.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={100}
                  height={100}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                />
              </div>
            </div>
            {/* Right */}
            <div className="gap-[20px] xl:gap-[30px] overflow-hidden w-[50%] flex flex-col">
              <div className="h-[60%] overflow-hidden border-[1px] border-[#00366A] rounded-[6px] md:rounded-[8px] bg-white p-[30px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/product1.5.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={100}
                  height={100}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                />
              </div>
              <div className="h-[50%] overflow-hidden border-[1px] border-[#00366A] rounded-[6px] md:rounded-[8px] bg-white p-[30px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/product1.6.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={100}
                  height={100}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                />
              </div>
              <div className="h-[60%] overflow-hidden border-[1px] border-[#00366A] rounded-[6px] md:rounded-[8px] bg-white p-[30px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/product1.7.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={100}
                  height={100}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                />
              </div>
              <div className="h-[50%] overflow-hidden border-[1px] border-[#00366A] rounded-[6px] md:rounded-[8px] bg-white p-[30px]">
                <Image
                  alt=""
                  unoptimized
                  src={"/image/product1.8.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={100}
                  height={100}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                />
              </div>
            </div>
          </div>
        </>
      );
    }
    if (activeTab === "Category 02") {
      return (
        <>
          <div className="xl:flex lg:flex md:flex sm:hidden hidden overflow-hidden h-[80vh] gap-[20px] xl:gap-[30px] md:mt-[50px] lg:mt-[60px] 2xl:mt-[70px]">
            <div className="gap-[30px] overflow-hidden w-[25%] flex flex-col">
              <div className="h-[65%] overflow-hidden border-[2px] border-[#00366A] rounded-[6px] md:rounded-[8px] bg-white p-[30px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/product2.1.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={100}
                  height={100}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                />
              </div>

              <div className="h-[35%] overflow-hidden border-[2px] border-[#00366A] rounded-[6px] md:rounded-[8px] bg-white p-[30px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/product2.2.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={100}
                  height={100}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                />
              </div>
            </div>

            <div className="gap-[30px] overflow-hidden w-[25%] flex flex-col">
              <div className="h-[50%] overflow-hidden border-[2px] border-[#00366A] rounded-[6px] md:rounded-[8px] bg-white p-[30px]">
                <Image
                  alt=""
                  unoptimized
                  src={"/image/product2.3.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={100}
                  height={100}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                />
              </div>
              <div className="h-[50%] overflow-hidden border-[2px] border-[#00366A] rounded-[6px] md:rounded-[8px] bg-white p-[30px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/product2.4.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={100}
                  height={100}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                />
              </div>
            </div>

            <div className="gap-[30px] overflow-hidden w-[25%] flex flex-col">
              <div className="h-[35%] overflow-hidden border-[2px] border-[#00366A] rounded-[6px] md:rounded-[8px] bg-white p-[30px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/product2.5.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={100}
                  height={100}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                />
              </div>
              <div className="h-[65%] overflow-hidden border-[2px] border-[#00366A] rounded-[6px] md:rounded-[8px] bg-white p-[30px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/product2.6.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={100}
                  height={100}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                />
              </div>
            </div>

            <div className="gap-[30px] overflow-hidden w-[25%] flex flex-col">
              <div className="h-[45%] overflow-hidden border-[2px] border-[#00366A] rounded-[6px] md:rounded-[8px] bg-white p-[30px]">
                <Image
                  alt=""
                  unoptimized
                  src={"/image/product2.7.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={100}
                  height={100}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                />
              </div>
              <div className="h-[55%] overflow-hidden border-[2px] border-[#00366A] rounded-[6px] md:rounded-[8px] bg-white p-[30px]">
                <Image
                  alt=""
                  unoptimized
                  src={"/image/product2.8.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={100}
                  height={100}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                />
              </div>
            </div>
          </div>
          <div className="md:hidden flex overflow-hidden h-[120vh] gap-[20px] xl:gap-[30px] mt-[30px]">
            <div className="gap-[20px] xl:gap-[30px] overflow-hidden w-[50%] flex flex-col">
              <div className="h-[60%] overflow-hidden border-[1px] border-[#00366A] rounded-[6px] md:rounded-[8px] bg-white p-[30px]">
                <Image
                  alt=""
                  unoptimized
                  src={"/image/product2.1.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={100}
                  height={100}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                />
              </div>

              <div className="h-[50%] overflow-hidden border-[1px] border-[#00366A] rounded-[6px] md:rounded-[8px] bg-white p-[30px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/product2.2.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={100}
                  height={100}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                />
              </div>

              <div className="h-[60%] overflow-hidden border-[1px] border-[#00366A] rounded-[6px] md:rounded-[8px] bg-white p-[30px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/product2.3.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={100}
                  height={100}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                />
              </div>
              <div className="h-[50%] overflow-hidden border-[1px] border-[#00366A] rounded-[6px] md:rounded-[8px] bg-white p-[30px]">
                <Image
                  alt=""
                  unoptimized
                  src={"/image/product2.4.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={100}
                  height={100}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                />
              </div>
            </div>

            <div className="gap-[20px] xl:gap-[30px] overflow-hidden w-[50%] flex flex-col">
              <div className="h-[60%] overflow-hidden border-[1px] border-[#00366A] rounded-[6px] md:rounded-[8px] bg-white p-[30px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/product2.5.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={100}
                  height={100}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                />
              </div>
              <div className="h-[50%] overflow-hidden border-[1px] border-[#00366A] rounded-[6px] md:rounded-[8px] bg-white p-[30px]">
                <Image
                  alt=""
                  unoptimized
                  src={"/image/product2.6.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={100}
                  height={100}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                />
              </div>
              <div className="h-[60%] overflow-hidden border-[1px] border-[#00366A] rounded-[6px] md:rounded-[8px] bg-white p-[30px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/product2.7.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={100}
                  height={100}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                />
              </div>
              <div className="h-[50%] overflow-hidden border-[1px] border-[#00366A] rounded-[6px] md:rounded-[8px] bg-white p-[30px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/product2.8.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={100}
                  height={100}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                />
              </div>
            </div>
          </div>
        </>
      );
    }
    if (activeTab === "Category 03") {
      return (
        <>
          <div className="xl:flex lg:flex md:flex sm:hidden hidden overflow-hidden h-[80vh] gap-[20px] xl:gap-[30px] md:mt-[50px] lg:mt-[60px] 2xl:mt-[70px]">
            <div className="gap-[30px] overflow-hidden w-[25%] flex flex-col">
              <div className="h-[45%] overflow-hidden border-[2px] border-[#00366A] rounded-[6px] md:rounded-[8px] bg-white p-[30px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/product3.1.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={100}
                  height={100}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                />
              </div>
              <div className="h-[55%] overflow-hidden border-[2px] border-[#00366A] rounded-[6px] md:rounded-[8px] bg-white p-[30px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/product3.2.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={100}
                  height={100}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                />
              </div>
            </div>

            <div className="gap-[30px] overflow-hidden w-[25%] flex flex-col">
              <div className="h-[35%] overflow-hidden border-[2px] border-[#00366A] rounded-[6px] md:rounded-[8px] bg-white p-[30px]">
                <Image
                  alt=""
                  unoptimized
                  src={"/image/product3.3.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={100}
                  height={100}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                />
              </div>
              <div className="h-[65%] overflow-hidden border-[2px] border-[#00366A] rounded-[6px] md:rounded-[8px] bg-white p-[30px]">
                <Image
                  alt=""
                  unoptimized
                  src={"/image/product3.4.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={100}
                  height={100}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                />
              </div>
            </div>

            <div className="gap-[30px] overflow-hidden w-[25%] flex flex-col">
              <div className="h-[50%] overflow-hidden border-[2px] border-[#00366A] rounded-[6px] md:rounded-[8px] bg-white p-[30px]">
                <Image
                  alt=""
                  unoptimized
                  src={"/image/product3.5.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={100}
                  height={100}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                />
              </div>
              <div className="h-[50%] overflow-hidden border-[2px] border-[#00366A] rounded-[6px] md:rounded-[8px] bg-white p-[30px]">
                <Image
                  alt=""
                  unoptimized
                  src={"/image/product3.6.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={100}
                  height={100}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                />
              </div>
            </div>

            <div className="gap-[30px] overflow-hidden w-[25%] flex flex-col">
              <div className="h-[65%] overflow-hidden border-[2px] border-[#00366A] rounded-[6px] md:rounded-[8px] bg-white p-[30px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/product3.7.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={100}
                  height={100}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                />
              </div>
              <div className="h-[35%] overflow-hidden border-[2px] border-[#00366A] rounded-[6px] md:rounded-[8px] bg-white p-[30px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/product3.8.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={100}
                  height={100}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                />
              </div>
            </div>
          </div>
          {/* Mobile */}
          <div className="xl:hidden md:hidden lg:hidden sm:flex flex overflow-hidden h-[120vh] gap-[20px] xl:gap-[30px] mt-[30px]">
            <div className="gap-[20px] xl:gap-[30px] overflow-hidden w-[50%] flex flex-col">
              <div className="h-[60%] overflow-hidden border-[1px] border-[#00366A] rounded-[6px] md:rounded-[8px] bg-white p-[30px]">
                <Image
                  alt=""
                  unoptimized
                  src={"/image/product3.3.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={100}
                  height={100}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                />
              </div>
              <div className="h-[50%] overflow-hidden border-[1px] border-[#00366A] rounded-[6px] md:rounded-[8px] bg-white p-[30px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/product3.4.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={100}
                  height={100}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                />
              </div>
              <div className="h-[60%] overflow-hidden border-[1px] border-[#00366A] rounded-[6px] md:rounded-[8px] bg-white p-[30px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/product3.6.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={100}
                  height={100}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                />
              </div>
              <div className="h-[50%] overflow-hidden border-[1px] border-[#00366A] rounded-[6px] md:rounded-[8px] bg-white p-[30px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/product3.5.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={100}
                  height={100}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                />
              </div>
            </div>

            <div className="gap-[20px] xl:gap-[30px] overflow-hidden w-[50%] flex flex-col">
              <div className="h-[60%] overflow-hidden border-[1px] border-[#00366A] rounded-[6px] md:rounded-[8px] bg-white p-[30px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/product3.1.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={100}
                  height={100}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                />
              </div>
              <div className="h-[50%] overflow-hidden border-[1px] border-[#00366A] rounded-[6px] md:rounded-[8px] bg-white p-[30px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/product3.2.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={100}
                  height={100}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                />
              </div>
              <div className="h-[60%] overflow-hidden border-[1px] border-[#00366A] rounded-[6px] md:rounded-[8px] bg-white p-[30px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/product3.7.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={100}
                  height={100}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                />
              </div>
              <div className="h-[50%] overflow-hidden border-[1px] border-[#00366A] rounded-[6px] md:rounded-[8px] bg-white p-[30px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/product3.8.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={100}
                  height={100}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                />
              </div>
            </div>
          </div>
        </>
      );
    }
  };

  return (
    <div className="">
      <div className="relative flex justify-center ">
        <Typography
          style={{
            fontFamily: "Montserrat",
            fontWeight: "700",
            position: "relative", // Để định vị đường viền
            paddingBottom: "10px", // Khoảng cách giữa chữ và border
            color: "#00366A",
          }}
        >
          <span
            className="xl:text-[35px] 2xl:text-[48px] sm:px-[10px]
          px-[10px] lg:px-[0px] md:px-[0px] xl:px-[0px] flex text-center md:text-[2rem] lg:text-[35px] sm:text-[28px] justify-center items-center w-[100%] text-[24px] leading-[30px] "
          >
            MACHINE COMPONENTS & DETAILS
          </span>
          {/* Đường viền */}
          <span
            className="xl:h-[4px] 2xl:h-[5px] md:h-[4px] h-[3px]"
            style={{
              position: "absolute",
              bottom: 0, // Đặt đường viền sát dưới chữ
              left: "50%", // Căn giữa theo chiều ngang
              transform: "translateX(-50%)", // Căn chỉnh chính xác vị trí giữa
              width: "15%", // Chiều rộng của đường viền (ngắn hơn width chữ)
              backgroundColor: "#00A859", // Màu sắc của đường viền
            }}
          />
        </Typography>
      </div>

      <div className="md:mt-[30px] mt-[20px] 2xl:mt-[30px]">
        <div className="xl:px-[10%] lg:px-[10%] md:px-[10%] sm:px-[6%] px-[4%]">
          <div className="flex justify-center ">
            <div
              className="relative  rounded-full 
              overflow-hidden xl:w-[45%] 2xl:w-[40%] lg:w-[48%] md:w-[64%] w-[100%] border-transparent bg-gradient-to-r from-[#007BB0] to-[#00366A]  "
            >
              <div className="bg-white flex justify-between m-[1.1px] md:m-[2px] rounded-full">
                {categories.map((category: string, index: number) => (
                  <TabButton
                    key={index}
                    label={category}
                    isActive={activeTab === category}
                    onClick={() => setActiveTab(category)}
                  />
                ))}
              </div>
            </div>
          </div>
          {renderProduct()}
        </div>
      </div>
    </div>
  );
}

export default Machine;

const TabButton = ({ label, isActive, onClick }: any) => (
  <button
    className={`flex-1 px-4 py-[8px] 2xl:py-[16px] text-center 
       text-sm md:text-[12px] lg:text-[14px] uppercase  2xl:text-[18px] transition-all duration-300 
      ${
        isActive
          ? "bg-gradient-to-r font-bold from-[#007BB0] to-[#00366A] text-white"
          : "text-[#00366A] md:font-bold"
      }
      rounded-full 
    `}
    onClick={onClick}
  >
    {label}
  </button>
);
