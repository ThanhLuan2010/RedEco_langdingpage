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
        <div className="flex overflow-hidden h-[90vh] gap-[35px] mt-[70px]">
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
      );
    }
    if (activeTab === "Category 02") {
      return (
        <div className="flex overflow-hidden h-[90vh] gap-[35px] mt-[70px]">
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
      );
    }
    if (activeTab === "Category 03") {
      return (
        <div className="flex overflow-hidden h-[90vh] gap-[35px] mt-[70px]">
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
      );
    }
  };

  return (
    <div>
      <div className="flex gap-[50px] h-[90vh]">
        <div className="w-[65%] flex flex-col gap-[50px] h-[100%]">
          <Image
            src={require("../../public/image/product_banner1.png")}
            alt=""
            style={{ height: "100%" }}
          />
          <div className="bg-gradient-to-l from-[#007BB0] to-[#00366A]  h-[60px]" />
        </div>

        <div className="w-[35%] flex flex-col gap-[50px] h-[100%]">
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

      <div className="relative flex justify-center mt-20">
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
          MACHINE COMPONENTS & DETAIL
          {/* Đường viền */}
          <span
            style={{
              position: "absolute",
              bottom: 0, // Đặt đường viền sát dưới chữ
              left: "50%", // Căn giữa theo chiều ngang
              transform: "translateX(-50%)", // Căn chỉnh chính xác vị trí giữa
              width: "100px", // Chiều rộng của đường viền (ngắn hơn width chữ)
              height: "5px", // Độ dày của đường viền
              backgroundColor: "#00A859", // Màu sắc của đường viền
            }}
          />
        </Typography>
      </div>

      <div className="mt-[40px]">
        <div className="px-[10%]">
          <div className="flex justify-center ">
            <div
              className="relative  rounded-full 
    overflow-hidden xl:w-[40%] lg:w-[48%] md:w-[64%] w-[70%] border-transparent bg-gradient-to-r from-[#007BB0] to-[#00366A]  "
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
       text-[9px] md:text-[12px] lg:text-[14px] xl:text-[14px]  text-base transition-all duration-300 
      ${
        isActive
          ? "bg-gradient-to-r from-[#007BB0] to-[#00366A] text-white"
          : "text-[#00366A]"
      }
      rounded-full font-bold
    `}
    onClick={onClick}
  >
    {label}
  </button>
);
