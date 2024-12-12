"use client";
import { Typography } from "antd";

import React, { useEffect, useState } from "react";

function OtherProduct({ otherTab }: { otherTab?: string }) {
  const [activeTab, setActiveTab] = useState("MANIPULATOR TABLE");

  const categories: any = [
    "MANIPULATOR TABLE",
    "ALUMINUM CASTING",
    "JIG PRODUCTS",
    "INDUSTRIAL TROLLEY",
  ];

  useEffect(() => {
    if (otherTab) {
      setActiveTab(otherTab);
    }
  }, [otherTab]);

  const renderProducts = () => {
    if (activeTab == "MANIPULATOR TABLE") {
      return (
        <>
          {/* Desktop */}
          <div className="xl:flex lg:flex md:flex sm:hidden hidden border-[1px] md:border-[2px] border-[#00366A] p-[12px] rounded-[8px] mt-[60px] bg-white">
            <img
              src={require("../../assets/image/banner-otherProduct.png")}
              alt=""
              width={100}
              height={100}
              className="w-[100%] h-[100%]"
            />
          </div>

          {/* Mobile */}
          <div className="flex flex-col gap-[20px] xl:gap-[35px] mt-[20px]">
            <div className="h-[100%] md:hidden sm:flex flex overflow-hidden border-[1px] md:border-[2px] border-[#00366A] rounded-[8px] bg-white p-[10px]">
              <img
                alt=""
                src={require("../../assets/image/other-product_mobile.png")}
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
            <div className="h-[100%] xl:hidden lg:hidden md:hidden sm:flex flex overflow-hidden border-[1px] md:border-[2px] border-[#00366A] rounded-[8px] bg-white p-[10px]">
              <img
                alt=""
                src={require("../../assets/image/other-product_mobile1.png")}
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
            <div className="h-[100%] xl:hidden lg:hidden md:hidden sm:flex flex overflow-hidden border-[1px] md:border-[2px] border-[#00366A] rounded-[8px] bg-white p-[10px]">
              <img
                alt=""
                src={require("../../assets/image/other-product_mobile2.png")}
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
            <div className="h-[100%] xl:hidden lg:hidden md:hidden sm:flex flex overflow-hidden border-[1px] md:border-[2px] border-[#00366A] rounded-[8px] bg-white p-[10px]">
              <img
                alt=""
                src={require("../../assets/image/other-product_mobile3.png")}
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
          {/* Desktop */}
          <div className="md:flex hidden overflow-hidden h-[40vh] gap-[20px] xl:gap-[35px] mt-[20px]">
            <div className="gap-[20px] xl:gap-[35px] overflow-hidden w-1/3 flex flex-col">
              <div className="h-[100%] overflow-hidden border-[1px] md:border-[2px] border-[#00366A] rounded-[8px] bg-white p-[30px]">
                <img
                  alt=""
                  src={require("../../assets/image/other-product1.png")}
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

            <div className="gap-[20px] xl:gap-[35px] overflow-hidden w-1/3 flex flex-col">
              <div className="h-[100%] overflow-hidden border-[1px] md:border-[2px] border-[#00366A] rounded-[8px] bg-white p-[30px]">
                <img
                  alt=""
                  src={require("../../assets/image/other-product2.png")}
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

            <div className="gap-[20px] xl:gap-[35px] overflow-hidden w-1/3 flex flex-col">
              <div className="h-[100%] overflow-hidden border-[1px] md:border-[2px] border-[#00366A] rounded-[8px] bg-white p-[30px]">
                <img
                  alt=""
                  src={require("../../assets/image/other-product3.png")}
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

    if (activeTab == "ALUMINUM CASTING") {
      return (
        <>
          {/* Desktop */}
          <div className="xl:flex md:flex lg:flex sm:hidden hidden overflow-hidden h-[80vh] gap-[35px] mt-[60px]">
            <div className="gap-[35px] overflow-hidden w-[50%] flex flex-col">
              <div className="h-[50%] overflow-hidden border-[1px] md:border-[2px] border-[#00366A] rounded-[8px] bg-white p-[50px]">
                <img
                  alt=""
                  src={require("../../assets/image/other_product2.1.png")}
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

              <div className="h-[50%] overflow-hidden border-[1px] md:border-[2px] border-[#00366A] rounded-[8px] bg-white p-[50px]">
                <img
                  alt=""
                  src={require("../../assets/image/other_product2.2.png")}
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

            <div className="gap-[35px] overflow-hidden w-[25%] flex flex-col">
              <div className="h-[50%] overflow-hidden border-[1px] md:border-[2px] border-[#00366A] rounded-[8px] bg-white p-[60px]">
                <img
                  alt=""
                  src={require("../../assets/image/other_product2.3.png")}
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
              <div className="h-[50%] overflow-hidden border-[1px] md:border-[2px] border-[#00366A] rounded-[8px] bg-white p-[50px]">
                <img
                  alt=""
                  src={require("../../assets/image/other_product2.4.png")}
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

            <div className="gap-[35px] overflow-hidden w-[25%] flex flex-col">
              <div className="h-[50%] overflow-hidden border-[1px] md:border-[2px] border-[#00366A] rounded-[8px] bg-white p-[50px]">
                <img
                  alt=""
                  src={require("../../assets/image/other_product2.5.png")}
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
              <div className="h-[50%] overflow-hidden border-[1px] md:border-[2px] border-[#00366A] rounded-[8px] bg-white p-[50px]">
                <img
                  alt=""
                  src={require("../../assets/image/other_product2.6.png")}
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
          <div className="xl:hidden md:hidden lg:hidden flex flex-col sm:flex-col gap-[20px] xl:gap-[35px] mt-5 md:mt-10 xl:mt-[35px]">
            <div className=" overflow-hidden w-[100%] flex flex-col">
              <div className="h-[20%] flex justify-center items-center overflow-hidden border-[1px] md:border-[2px] border-[#00366A] rounded-[8px] bg-white p-[50px]">
                <img
                  alt=""
                  src={require("../../assets/image/other_product2.1.png")}
                  style={{
                    width: "60%",
                    objectFit: "contain",
                  }}
                  width={100}
                  height={100}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                />
              </div>
            </div>
            <div className="overflow-hidden w-[100%] flex flex-col">
              <div className="h-[20%] flex justify-center items-center overflow-hidden border-[1px] md:border-[2px] border-[#00366A] rounded-[8px] bg-white p-[50px]">
                <img
                  alt=""
                  src={require("../../assets/image/other_product2.2.png")}
                  style={{
                    width: "60%",
                    objectFit: "contain",
                  }}
                  width={100}
                  height={100}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                />
              </div>
            </div>
            <div className="gap-[20px] xl:gap-[35px] overflow-hidden w-[100%] flex">
              <div className="h-30%] w-[50%] overflow-hidden border-[1px] md:border-[2px] border-[#00366A] rounded-[8px] bg-white p-[50px]">
                <img
                  alt=""
                  src={require("../../assets/image/other_product2.3.png")}
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
              <div className="h-[30%] w-[50%] overflow-hidden border-[1px] md:border-[2px] border-[#00366A] rounded-[8px] bg-white p-[50px]">
                <img
                  alt=""
                  src={require("../../assets/image/other_product2.5.png")}
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
            <div className="gap-[20px] xl:gap-[35px] overflow-hidden w-[100%] flex">
              <div className="h-30%] w-[50%] overflow-hidden border-[1px] md:border-[2px] border-[#00366A] rounded-[8px] bg-white p-[50px]">
                <img
                  alt=""
                  src={require("../../assets/image/other_product2.4.png")}
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
              <div className="h-[30%] w-[50%] overflow-hidden border-[1px] md:border-[2px] border-[#00366A] rounded-[8px] bg-white p-[50px]">
                <img
                  alt=""
                  src={require("../../assets/image/other_product2.6.png")}
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

    if (activeTab === "JIG PRODUCTS") {
      return (
        <>
          {/* Desktop */}
          <div className="xl:flex md:flex lg:flex hidden sm:hidden overflow-hidden h-[80vh] gap-[35px] mt-[60px]">
            <div className="gap-[35px] overflow-hidden w-[25%] flex flex-col">
              <div className="h-[45%] overflow-hidden border-[1px] md:border-[2px] border-[#00366A] rounded-[8px] bg-white p-[30px]">
                <img
                  alt=""
                  src={require("../../assets/image/other_product3.1.png")}
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
              <div className="h-[55%] overflow-hidden border-[1px] md:border-[2px] border-[#00366A] rounded-[8px] bg-white p-[30px]">
                <img
                  alt=""
                  src={require("../../assets/image/other_product3.2.png")}
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

            <div className="gap-[35px] overflow-hidden w-[25%] flex flex-col">
              <div className="h-[35%] overflow-hidden border-[1px] md:border-[2px] border-[#00366A] rounded-[8px] bg-white p-[30px]">
                <img
                  alt=""
                  src={require("../../assets/image/other_product3.3.png")}
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
              <div className="h-[65%] overflow-hidden border-[1px] md:border-[2px] border-[#00366A] rounded-[8px] bg-white p-[30px]">
                <img
                  alt=""
                  src={require("../../assets/image/other_product3.4.png")}
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

            <div className="gap-[35px] overflow-hidden w-[25%] flex flex-col">
              <div className="h-[50%] overflow-hidden border-[1px] md:border-[2px] border-[#00366A] rounded-[8px] bg-white p-[30px]">
                <img
                  alt=""
                  src={require("../../assets/image/other_product3.7.png")}
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
              <div className="h-[50%] overflow-hidden border-[1px] md:border-[2px] border-[#00366A] rounded-[8px] bg-white p-[30px]">
                <img
                  alt=""
                  src={require("../../assets/image/other_product3.8.png")}
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

            <div className="gap-[35px] overflow-hidden w-[25%] flex flex-col">
              <div className="h-[65%] overflow-hidden border-[1px] md:border-[2px] border-[#00366A] rounded-[8px] bg-white p-[30px]">
                <img
                  alt=""
                  src={require("../../assets/image/other_product3.5.png")}
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
              <div className="h-[35%] overflow-hidden border-[1px] md:border-[2px] border-[#00366A] rounded-[8px] bg-white p-[30px]">
                <img
                  alt=""
                  src={require("../../assets/image/other_product3.6.png")}
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
          <div className="xl:hidden lg:hidden md:hidden sm:flex flex overflow-hidden h-[120vh] gap-[20px] xl:gap-[35px] mt-[20px]">
            <div className="gap-[20px] xl:gap-[35px] overflow-hidden w-[50%] flex flex-col">
              <div className="h-[60%] overflow-hidden border-[1px] md:border-[2px] border-[#00366A] rounded-[8px] bg-white p-[30px]">
                <img
                  alt=""
                  src={require("../../assets/image/other_product3.1.png")}
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
              <div className="h-[50%] overflow-hidden border-[1px] md:border-[2px] border-[#00366A] rounded-[8px] bg-white p-[30px]">
                <img
                  alt=""
                  src={require("../../assets/image/other_product3.2.png")}
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
              <div className="h-[60%] overflow-hidden border-[1px] md:border-[2px] border-[#00366A] rounded-[8px] bg-white p-[30px]">
                <img
                  alt=""
                  src={require("../../assets/image/other_product3.5.png")}
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
              <div className="h-[50%] overflow-hidden border-[1px] md:border-[2px] border-[#00366A] rounded-[8px] bg-white p-[30px]">
                <img
                  alt=""
                  src={require("../../assets/image/other_product3.6.png")}
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

            <div className="gap-[20px] xl:gap-[35px] overflow-hidden w-[50%] flex flex-col">
              <div className="h-[60%] overflow-hidden border-[1px] md:border-[2px] border-[#00366A] rounded-[8px] bg-white p-[30px]">
                <img
                  alt=""
                  src={require("../../assets/image/other_product3.3.png")}
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
              <div className="h-[50%] overflow-hidden border-[1px] md:border-[2px] border-[#00366A] rounded-[8px] bg-white p-[30px]">
                <img
                  alt=""
                  src={require("../../assets/image/other_product3.4.png")}
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
              <div className="h-[60%] overflow-hidden border-[1px] md:border-[2px] border-[#00366A] rounded-[8px] bg-white p-[30px]">
                <img
                  alt=""
                  src={require("../../assets/image/other_product3.7.png")}
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
              <div className="h-[50%] overflow-hidden border-[1px] md:border-[2px] border-[#00366A] rounded-[8px] bg-white p-[30px]">
                <img
                  alt=""
                  src={require("../../assets/image/other_product3.8.png")}
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

    if (activeTab == "INDUSTRIAL TROLLEY") {
      return (
        <div className="flex flex-col overflow-hidden h-[80vh] gap-[20px] xl:gap-[35px] mt-[60px]">
          {/* Desktop */}
          <div className="xl:flex md:flex lg:flex sm:hidden hidden gap-[35px] h-[43%] w-[100%]">
            <div className="xl:w-[50%] lg:w-[50%] md:w-[50%] sm:w-[100%] w-[100%] overflow-hidden border-[1px] md:border-[2px] border-[#00366A] rounded-[8px] bg-white p-[12px]">
              <img
                alt=""
                src={require("../../assets/image/other_product4.1.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "fill",
                }}
                width={100}
                height={100}
              />
            </div>

            <div className="xl:w-[50%] lg:w-[50%] md:w-[50%] sm:w-[100%] w-[100%]  overflow-hidden border-[1px] md:border-[2px] border-[#00366A] rounded-[8px] bg-white p-[12px]">
              <img
                alt=""
                src={require("../../assets/image/other_product4.2.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "fill",
                }}
                width={100}
                height={100}
              />
            </div>
          </div>

          <div className="xl:flex md:flex lg:flex sm:hidden hidden gap-[20px] xl:gap-[35px] h-[57%] overflow-hidden">
            <div className="w-1/3 overflow-hidden border-[1px] md:border-[2px] border-[#00366A] rounded-[8px] bg-white p-[50px]">
              <img
                alt=""
                src={require("../../assets/image/other_product4.3.png")}
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
            <div className="w-1/3 overflow-hidden border-[1px] md:border-[2px] border-[#00366A] rounded-[8px] bg-white p-[50px]">
              <img
                alt=""
                src={require("../../assets/image/other_product4.4.png")}
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
            <div className="w-1/3 overflow-hidden border-[1px] md:border-[2px] border-[#00366A] rounded-[8px] bg-white p-[50px]">
              <img
                alt=""
                src={require("../../assets/image/other_product4.5.png")}
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
          {/* Mobile */}
          <div className="xl:hidden md:hidden lg:hidden sm:flex-col flex flex-col gap-[20px] xl:gap-[35px] h-[240vh] overflow-hidden">
            {/* TOP */}

            {/* TOP 1 */}
            <div className="xl:w-[50%] lg:w-[50%] md:w-[50%] sm:w-[100%] h-[240%] w-[100%] overflow-hidden border-[1px] md:border-[2px] border-[#00366A] rounded-[8px] bg-white p-[8px]">
              <img
                alt=""
                src={require("../../assets/image/other_product4.1.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "fill",
                }}
                width={100}
                height={100}
                className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
              />
            </div>

            {/* TOP 2 */}
            <div className="xl:w-[50%] lg:w-[50%] md:w-[50%] sm:w-[100%] h-[240%] w-[100%]  overflow-hidden border-[1px] md:border-[2px] border-[#00366A] rounded-[8px] bg-white p-[8px]">
              <img
                alt=""
                src={require("../../assets/image/other_product4.2.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "fill",
                }}
                width={100}
                height={100}
                className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
              />
            </div>

            {/* TOP 3*/}
            <div className="overflow-hidden border-[1px] md:border-[2px] border-[#00366A] h-[240%] rounded-[8px] bg-white p-[10px]">
              <img
                alt=""
                src={require("../../assets/image/other_product4.3.png")}
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

            {/* Botton */}
            <div className="flex gap-[20px] xl:gap-[35px]">
              <div className="overflow-hidden w-[50%] border-[1px] md:border-[2px] border-[#00366A] rounded-[8px] bg-white p-[50px]">
                <img
                  alt=""
                  src={require("../../assets/image/other_product4.4.png")}
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
              <div className="overflow-hidden w-[50%] border-[1px] md:border-[2px] border-[#00366A] rounded-[8px] bg-white p-[50px]">
                <img
                  alt=""
                  src={require("../../assets/image/other_product4.5.png")}
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
        </div>
      );
    }
  };

  return (
    <div>
      <div className="relative flex justify-center mt-10 md:mt-20 xl:mt-24">
        <Typography
          style={{
            fontFamily: "Montserrat",
            fontWeight: "700",
            position: "relative", // Để định vị đường viền
            color: "#00366A",
          }}
        >
          <span
            className="xl:text-[35px] 2xl:text-[48px] sm:px-[10px]
          px-[10px] lg:px-[0px] md:px-[0px] xl:px-[0px] flex text-center md:text-[2rem] lg:text-[35px] sm:text-[28px] justify-center items-center w-[100%] text-[28px]"
          >
             OTHER PRODUCTS
          </span>
          {/* Đường viền */}
          <span
            className="xl:h-[4px] 2xl:h-[5px] md:h-[4px] h-[3px] bottom-[2px] md:bottom-0"
            style={{
              position: "absolute",
              left: "50%", // Căn giữa theo chiều ngang
              transform: "translateX(-50%)", // Căn chỉnh chính xác vị trí giữa
              width: "20%", // Chiều rộng của đường viền (ngắn hơn width chữ)
              backgroundColor: "#00A859", // Màu sắc của đường viền
            }}
          />
        </Typography>
        
      </div>

      <div className="mt-[20px] md:mt-[30px] xl:mt-[40px]">
        <div className="xl:px-[10%] lg:px-[10%] md:px-[10%] sm:px-[6%] px-[4%]">
          <div className="flex justify-center ">
            <div
              className="relative rounded-[40px] overflow-hidden xl:w-[80%] lg:w-[48%] md:w-[64%] w-[100%] 
              border-transparent bg-gradient-to-r from-[#007BB0] to-[#00366A]"
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
          <div>{renderProducts()}</div>
        </div>
      </div>
    </div>
  );
}

export default OtherProduct;

const TabButton = ({ label, isActive, onClick }: any) => (
  <button
    className={`flex-1 px-4  py-[8px] md:py-[10px] xl:py-[16px] text-center 
       text-[10px] md:text-[12px] lg:text-[14px] uppercase  xl:text-[18px] transition-all duration-300 
      ${
        isActive
          ? "bg-gradient-to-r font-bold from-[#007BB0] to-[#00366A] text-white"
          : "text-[#00366A] font-medium md:font-bold"
      }
      rounded-full 
    `}
    onClick={onClick}
  >
    {label}
  </button>
);
