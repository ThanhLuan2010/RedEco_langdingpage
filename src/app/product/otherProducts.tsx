import { Typography } from "antd";
import Image from "next/image";
import React, { useState } from "react";

function OtherProduct() {
  const [activeTab, setActiveTab] = useState("MANIPULATOR TABLE");

  const categories: any = [
    "MANIPULATOR TABLE",
    "ALUMINUM CASTING",
    "JIG PRODUCTS",
    "INDUSTRIAL TROLLEY",
  ];

  const renderProducts = () => {
    if (activeTab == "MANIPULATOR TABLE") {
      return (
        <>
          <div className="border-[2px] border-[#00366A] p-[20px] rounded-[12px] mt-[70px] bg-white">
            <Image
              src={require("../../public/image/banner-otherProduct.png")}
              alt=""
            />
          </div>
          <div className="flex overflow-hidden h-[40vh] gap-[35px] mt-[40px]">
            <div className="gap-[35px] overflow-hidden w-1/3 flex flex-col">
              <div className="h-[100%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
                <Image
                  alt=""
                  src={require("../../public/image/other-product1.png")}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  className="transition-transform duration-300 ease-in-out hover:scale-125"
                />
              </div>
            </div>

            <div className="gap-[35px] overflow-hidden w-1/3 flex flex-col">
              <div className="h-[100%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
                <Image
                  alt=""
                  src={require("../../public/image/other-product2.png")}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  className="transition-transform duration-300 ease-in-out hover:scale-125"
                />
              </div>
            </div>

            <div className="gap-[35px] overflow-hidden w-1/3 flex flex-col">
              <div className="h-[100%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
                <Image
                  alt=""
                  src={require("../../public/image/other-product3.png")}
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

    if (activeTab == "ALUMINUM CASTING") {
      return (
        <div className="flex overflow-hidden h-[90vh] gap-[35px] mt-[70px]">
          <div className="gap-[35px] overflow-hidden w-[50%] flex flex-col">
            <div className="h-[50%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[50px]">
              <Image
                alt=""
                src={require("../../public/image/other_product2.1.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
                className="transition-transform duration-300 ease-in-out hover:scale-125"
              />
            </div>

            <div className="h-[50%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[50px]">
              <Image
                alt=""
                src={require("../../public/image/other_product2.2.png")}
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
            <div className="h-[50%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[60px]">
              <Image
                alt=""
                src={require("../../public/image/other_product2.3.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
                className="transition-transform duration-300 ease-in-out hover:scale-125"
              />
            </div>
            <div className="h-[50%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[50px]">
              <Image
                alt=""
                src={require("../../public/image/other_product2.4.png")}
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
            <div className="h-[50%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[50px]">
              <Image
                alt=""
                src={require("../../public/image/other_product2.5.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
                className="transition-transform duration-300 ease-in-out hover:scale-125"
              />
            </div>
            <div className="h-[50%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[50px]">
              <Image
                alt=""
                src={require("../../public/image/other_product2.6.png")}
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

    if (activeTab === "JIG PRODUCTS") {
      return (
        <div className="flex overflow-hidden h-[90vh] gap-[35px] mt-[70px]">
          <div className="gap-[35px] overflow-hidden w-[25%] flex flex-col">
            <div className="h-[45%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
              <Image
                alt=""
                src={require("../../public/image/other_product3.1.png")}
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
                src={require("../../public/image/other_product3.2.png")}
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
                src={require("../../public/image/other_product3.3.png")}
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
                src={require("../../public/image/other_product3.4.png")}
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
                src={require("../../public/image/other_product3.5.png")}
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
                src={require("../../public/image/other_product3.6.png")}
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
                src={require("../../public/image/other_product3.7.png")}
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
                src={require("../../public/image/other_product3.8.png")}
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

    if (activeTab == "INDUSTRIAL TROLLEY") {
      return (
        <div className="flex flex-col overflow-hidden h-[90vh] gap-[35px] mt-[70px]">
          <div className="flex gap-[35px] h-[43%]">
            <div className="w-[50%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[15px]">
              <Image
                alt=""
                src={require("../../public/image/other_product4.1.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "fill",
                }}
              />
            </div>

            <div className="w-[50%]  overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[15px]">
              <Image
                alt=""
                src={require("../../public/image/other_product4.2.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "fill",
                }}
              />
            </div>
          </div>

          <div className="flex  gap-[35px] h-[57%] overflow-hidden">
            <div className="w-1/3 overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[50px]">
              <Image
                alt=""
                src={require("../../public/image/other_product4.3.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
                className="transition-transform duration-300 ease-in-out hover:scale-125"
              />
            </div>
            <div className="w-1/3 overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[50px]">
              <Image
                alt=""
                src={require("../../public/image/other_product4.4.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
                className="transition-transform duration-300 ease-in-out hover:scale-125"
              />
            </div>
            <div className="w-1/3 overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[50px]">
              <Image
                alt=""
                src={require("../../public/image/other_product4.5.png")}
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
      <div className="relative flex justify-center mt-24">
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
          OTHER PRODUCT
          <span
            style={{
              position: "absolute",
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: "100px",
              height: "5px",
              backgroundColor: "#00A859",
            }}
          />
        </Typography>
      </div>

      <div className="mt-[40px]">
        <div className="px-[10%]">
          <div className="flex justify-center ">
            <div
              className="relative  rounded-full 
    overflow-hidden xl:w-[80%] lg:w-[48%] md:w-[64%] w-[70%] border-transparent bg-gradient-to-r from-[#007BB0] to-[#00366A]  "
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
          <div>{renderProducts()}</div>
        </div>
      </div>
    </div>
  );
}

export default OtherProduct;

const TabButton = ({ label, isActive, onClick }: any) => (
  <button
    className={`flex-1 px-4 xl:py-[8px] lg:py-[8px] md:py-[10px] py-[8px] text-center 
       text-[9px] md:text-[12px] lg:text-[14px] xl:text-[14px]  text-base transition-all duration-300 
      ${
        isActive
          ? "bg-gradient-to-r from-[#007BB0] to-[#00366A] text-white"
          : "text-[#00366A]"
      }
      rounded-full font-bold line-clamp-1
    `}
    onClick={onClick}
  >
    {label}
  </button>
);
