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
         <div className="xl:flex lg:flex md:flex sm:hidden hidden overflow-hidden h-[90vh] gap-[35px] mt-[70px]">
          <div className="gap-[35px] overflow-hidden w-[25%] flex flex-col">
            <div className="h-[55%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
              <Image
                alt=""
                src={require("../../public/image/product1.1.png")}
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
                src={require("../../public/image/product1.2.png")}
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
            <div className="h-[35%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
              <Image
                alt=""
                src={require("../../public/image/product1.3.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
                className="transition-transform duration-300 ease-in-out hover:scale-125"
              />
            </div>
            <div className="h-[65%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
              <Image
                alt=""
                src={require("../../public/image/product1.4.png")}
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
            <div className="h-[50%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
              <Image
                alt=""
                src={require("../../public/image/product1.5.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
                className="transition-transform duration-300 ease-in-out hover:scale-125"
              />
            </div>
            <div className="h-[50%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
              <Image
                alt=""
                src={require("../../public/image/product1.6.png")}
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
            <div className="h-[30%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
              <Image
                alt=""
                src={require("../../public/image/product1.7.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
                className="transition-transform duration-300 ease-in-out hover:scale-125"
              />
            </div>
            <div className="h-[70%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
              <Image
                alt=""
                src={require("../../public/image/product1.8.png")}
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
        {/* Mobile */}
          <div className="xl:hidden md:hidden lg:hidden sm:flex flex overflow-hidden h-[120vh] gap-[35px] mt-[70px]">
          {/* Left */}
          <div className="gap-[35px] overflow-hidden w-[50%] flex flex-col">
            <div className="h-[80%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
              <Image
                alt=""
                src={require("../../public/image/product1.1.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
                className="transition-transform duration-300 ease-in-out hover:scale-125"
              />
            </div>
            <div className="h-[50%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
              <Image
                alt=""
                src={require("../../public/image/product1.2.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
                className="transition-transform duration-300 ease-in-out hover:scale-125"
              />
            </div>
            <div className="h-[60%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
              <Image
                alt=""
                src={require("../../public/image/product1.3.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
                className="transition-transform duration-300 ease-in-out hover:scale-125"
              />
            </div>
            <div className="h-[40%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
              <Image
                alt=""
                src={require("../../public/image/product1.4.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
                className="transition-transform duration-300 ease-in-out hover:scale-125"
              />
            </div>
          </div>
          {/* Right */}
          <div className="gap-[35px] overflow-hidden w-[50%] flex flex-col">
            <div className="h-[50%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
              <Image
                alt=""
                src={require("../../public/image/product1.5.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
                className="transition-transform duration-300 ease-in-out hover:scale-125"
              />
            </div>
            <div className="h-[80%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
              <Image
                alt=""
                src={require("../../public/image/product1.6.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
                className="transition-transform duration-300 ease-in-out hover:scale-125"
              />
            </div>
            <div className="h-[40%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
              <Image
                alt=""
                src={require("../../public/image/product1.7.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
                className="transition-transform duration-300 ease-in-out hover:scale-125"
              />
            </div>
            <div className="h-[60%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
              <Image
                alt=""
                src={require("../../public/image/product1.8.png")}
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
        </>
      );
    }
    if (activeTab === "Category 02") {
      return (
        <>
        <div className="xl:flex lg:flex md:flex sm:hidden hidden overflow-hidden h-[90vh] gap-[35px] mt-[70px]">
          <div className="gap-[35px] overflow-hidden w-[25%] flex flex-col">
            <div className="h-[70%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
              <Image
                alt=""
                src={require("../../public/image/product2.1.png")}
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
                src={require("../../public/image/product2.2.png")}
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
            <div className="h-[50%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
              <Image
                alt=""
                src={require("../../public/image/product2.3.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
                className="transition-transform duration-300 ease-in-out hover:scale-125"
              />
            </div>
            <div className="h-[50%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
              <Image
                alt=""
                src={require("../../public/image/product2.4.png")}
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
            <div className="h-[35%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
              <Image
                alt=""
                src={require("../../public/image/product2.5.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
                className="transition-transform duration-300 ease-in-out hover:scale-125"
              />
            </div>
            <div className="h-[65%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
              <Image
                alt=""
                src={require("../../public/image/product2.6.png")}
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
            <div className="h-[45%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
              <Image
                alt=""
                src={require("../../public/image/product2.7.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
                className="transition-transform duration-300 ease-in-out hover:scale-125"
              />
            </div>
            <div className="h-[55%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
              <Image
                alt=""
                src={require("../../public/image/product2.8.png")}
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
        <div className="xl:hidden md:hidden lg:hidden sm:flex flex overflow-hidden h-[120vh] gap-[35px] mt-[70px]">
          <div className="gap-[35px] overflow-hidden w-[50%] flex flex-col">
            <div className="h-[160%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
              <Image
                alt=""
                src={require("../../public/image/product2.1.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
                className="transition-transform duration-300 ease-in-out hover:scale-125"
              />
            </div>

            <div className="h-[100%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
              <Image
                alt=""
                src={require("../../public/image/product2.2.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
                className="transition-transform duration-300 ease-in-out hover:scale-125"
              />
            </div>

            <div className="h-[140%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
              <Image
                alt=""
                src={require("../../public/image/product2.3.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
                className="transition-transform duration-300 ease-in-out hover:scale-125"
              />
            </div>
            <div className="h-[60%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
              <Image
                alt=""
                src={require("../../public/image/product2.4.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
                className="transition-transform duration-300 ease-in-out hover:scale-125"
              />
            </div>
          </div>

          <div className="gap-[35px] overflow-hidden w-[50%] flex flex-col">
            <div className="h-[100%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
              <Image
                alt=""
                src={require("../../public/image/product2.5.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
                className="transition-transform duration-300 ease-in-out hover:scale-125"
              />
            </div>
            <div className="h-[160%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
              <Image
                alt=""
                src={require("../../public/image/product2.6.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
                className="transition-transform duration-300 ease-in-out hover:scale-125"
              />
            </div>
            <div className="h-[60%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
              <Image
                alt=""
                src={require("../../public/image/product2.7.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
                className="transition-transform duration-300 ease-in-out hover:scale-125"
              />
            </div>
            <div className="h-[140%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
              <Image
                alt=""
                src={require("../../public/image/product2.8.png")}
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
        </>
      );
    }
    if (activeTab === "Category 03") {
      return (
        <>
          <div className="xl:flex lg:flex md:flex sm:hidden hidden overflow-hidden h-[90vh] gap-[35px] mt-[70px]">
          <div className="gap-[35px] overflow-hidden w-[25%] flex flex-col">
            <div className="h-[45%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
              <Image
                alt=""
                src={require("../../public/image/product3.1.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
                className="transition-transform duration-300 ease-in-out hover:scale-125"
              />
            </div>
            <div className="h-[55%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
              <Image
                alt=""
                src={require("../../public/image/product3.2.png")}
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
            <div className="h-[35%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
              <Image
                alt=""
                src={require("../../public/image/product3.3.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
                className="transition-transform duration-300 ease-in-out hover:scale-125"
              />
            </div>
            <div className="h-[65%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
              <Image
                alt=""
                src={require("../../public/image/product3.4.png")}
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
            <div className="h-[50%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
              <Image
                alt=""
                src={require("../../public/image/product3.5.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
                className="transition-transform duration-300 ease-in-out hover:scale-125"
              />
            </div>
            <div className="h-[50%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
              <Image
                alt=""
                src={require("../../public/image/product3.6.png")}
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
            <div className="h-[70%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
              <Image
                alt=""
                src={require("../../public/image/product3.7.png")}
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
                src={require("../../public/image/product3.8.png")}
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
        {/* Mobile */}
        <div className="xl:hidden md:hidden lg:hidden sm:flex flex overflow-hidden h-[120vh] gap-[35px] mt-[70px]">
          <div className="gap-[35px] overflow-hidden w-[50%] flex flex-col">
          <div className="h-[40%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
              <Image
                alt=""
                src={require("../../public/image/product3.3.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
                className="transition-transform duration-300 ease-in-out hover:scale-125"
              />
            </div>
            <div className="h-[100%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
              <Image
                alt=""
                src={require("../../public/image/product3.4.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
                className="transition-transform duration-300 ease-in-out hover:scale-125"
              />
            </div>
            <div className="h-[60%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
              <Image
                alt=""
                src={require("../../public/image/product3.6.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
                className="transition-transform duration-300 ease-in-out hover:scale-125"
              />
            </div>
            <div className="h-[50%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
              <Image
                alt=""
                src={require("../../public/image/product3.5.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
                className="transition-transform duration-300 ease-in-out hover:scale-125"
              />
            </div>
          </div>

          <div className="gap-[35px] overflow-hidden w-[50%] flex flex-col">
          <div className="h-[60%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
              <Image
                alt=""
                src={require("../../public/image/product3.1.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
                className="transition-transform duration-300 ease-in-out hover:scale-125"
              />
            </div>
            <div className="h-[100%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
              <Image
                alt=""
                src={require("../../public/image/product3.2.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
                className="transition-transform duration-300 ease-in-out hover:scale-125"
              />
            </div>
            <div className="h-[90%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
              <Image
                alt=""
                src={require("../../public/image/product3.7.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
                className="transition-transform duration-300 ease-in-out hover:scale-125"
              />
            </div>
            <div className="h-[40%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
              <Image
                alt=""
                src={require("../../public/image/product3.8.png")}
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
        </>
      );
    }
  };

  return (
    <div>
      
      <div className="flex xl:gap-[50px] lg:gap-[50px] md:gap-[50px] sm:gap-[10px] gap-[10px] h-[90vh]">
        {/* Left */}
        <div className="w-[65%] flex flex-col xl:gap-[50px] lg:gap-[50px] md:gap-[50px] sm:gap-[10px] gap-[10px] xl:h-[100%] lg:h-[100%] md:h-[100%] sm:h-[50%] h-[50%]">
          <Image
            src={require("../../public/image/product_banner1.png")}
            alt=""
            style={{ height: "100%" }}
          />
          <div className="bg-gradient-to-l from-[#007BB0] to-[#00366A]  
          xl:h-[60px] lg:h-[60px] md:h-[60px] sm:h-[20px] h-[20px] " />
        </div>

        {/* Right */}
        <div className="w-[35%] flex flex-col xl:gap-[50px] lg:gap-[50px] md:gap-[50px] sm:gap-[10px] gap-[10px] xl:h-[100%] lg:h-[100%] md:h-[100%] sm:h-[50%] h-[50%]">
          <div className="h-[100%] overflow-hidden">
            <Image
              alt=""
              src={require("../../public/image/product_banner2.png")}
              className="h-[100%] "
            />
          </div>

          <div className="h-[100%] overflow-hidden">
            <Image
              alt=""
              src={require("../../public/image/product_banner3.png")}
              className="h-[100%]"
            />
          </div>
        </div>
      </div>

      <div className="relative flex justify-center xl:mt-20 lg:mt-20 md:mt-20 sm:-mt-[90%] -mt-[300px]">
        <Typography
          style={{
            fontSize: "2rem",
            lineHeight: "50px",
            fontFamily: "Montserrat",
            fontWeight: "700",
            position: "relative", // Để định vị đường viền
            paddingBottom: "10px", // Khoảng cách giữa chữ và border
            color: "#00366A",
          }}
        >
          <span className="xl:text-[2rem] sm:px-[10px] px-[10px] lg:px-[0px] md:px-[0px] xl:px-[0px] flex text-center md:text-[2rem] lg:text-[2rem] sm:text-[28px] justify-center items-center w-[100%] text-[28px]">MACHINE COMPONENTS & DETAIL</span>
          {/* Đường viền */}
          <span className="lg:h-[5px] xl:h-[5px] md:h-[5px] sm:h-[3px] h-[3px]"
            style={{
              position: "absolute",
              bottom: 0, // Đặt đường viền sát dưới chữ
              left: "50%", // Căn giữa theo chiều ngang
              transform: "translateX(-50%)", // Căn chỉnh chính xác vị trí giữa
              width: "100px", // Chiều rộng của đường viền (ngắn hơn width chữ)
              backgroundColor: "#00A859", // Màu sắc của đường viền
            }}
          />
        </Typography>
      </div>

      <div className="mt-[40px]">
        <div className="xl:px-[10%] lg:px-[10%] md:px-[10%] sm:px-[6%] px-[4%]">
          <div className="flex justify-center ">
            <div
              className="relative  rounded-full 
    overflow-hidden xl:w-[40%] lg:w-[48%] md:w-[64%] w-[100%] border-transparent bg-gradient-to-r from-[#007BB0] to-[#00366A]  "
            >
              <div className="bg-white flex justify-between m-[2px] rounded-full">
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
    className={`flex-1 px-4 xl:py-[8px] lg:py-[8px] md:py-[10px] py-[8px] text-center 
       text-[0.8rem] md:text-[12px] lg:text-[14px] uppercase xl:text-[14px]  text-base transition-all duration-300 
      ${
        isActive
          ? "bg-gradient-to-r font-bold from-[#007BB0] to-[#00366A] text-white"
          : "text-[#00366A] font-medium"
      }
      rounded-full
    `}
    onClick={onClick}
  >
    {label}
  </button>
);