"use client";
import { Typography } from "antd";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function Silicon({ tab }: { tab?: string }) {
  const [activeTab, setActiveTab] = useState("VACUUM SUCTION CUP");

  useEffect(() => {
    if (tab) {
      setActiveTab(tab);
    }
  }, [tab]);
  const categories: any = [
    "VACUUM SUCTION CUP",
    "SILICONE RUBBER DETAIL",
    "SILICONE RUBBER GASKET",
    "INDUSTRIAL KEYBOARD",
  ];

  const renderProducts = () => {
    if (activeTab == "VACUUM SUCTION CUP") {
      return (
        <div className="mt-[40px]">
          <div className="border-[2px] border-[#00366A] p-[20px] rounded-[8px] mt-[70px] bg-white">
            <Image
              unoptimized
              src={"/image/banner-silicon.png"}
              alt=""
              width={100}
              height={100}
              className="w-[100%]"
            />
          </div>
          <>
            <div className="xl:flex lg:flex md:flex sm:hidden hidden overflow-hidden h-[45vh] 2xl:gap-[35px] gap-[30px] mt-[20px] md:mt-[30px] 2xl:mt-[40px]">
              <div className="2xl:gap-[35px] gap-[30px] overflow-hidden w-1/3 flex flex-col">
                <div className="h-1/2 overflow-hidden border-[2px] border-[#00366A] rounded-[8px] bg-white p-[30px]">
                  <Image
                    unoptimized
                    alt=""
                    src={"/image/silicon1.png"}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                    width={100}
                    className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                    height={100}
                  />
                </div>
                <div className="h-1/2 overflow-hidden border-[2px] border-[#00366A] rounded-[8px] bg-white p-[30px]">
                  <Image
                    unoptimized
                    alt=""
                    src={"/image/silicon2.png"}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                    width={100}
                    className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                    height={100}
                  />
                </div>
              </div>

              <div className="2xl:gap-[35px] gap-[30px] overflow-hidden w-1/3 flex flex-col">
                <div className="h-1/2 overflow-hidden border-[2px] border-[#00366A] rounded-[8px] bg-white p-[30px]">
                  <Image
                    unoptimized
                    alt=""
                    src={"/image/silicon3.png"}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                    width={100}
                    className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                    height={100}
                  />
                </div>
                <div className="h-1/2 overflow-hidden border-[2px] border-[#00366A] rounded-[8px] bg-white p-[30px]">
                  <Image
                    unoptimized
                    alt=""
                    src={"/image/silicon3.png"}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                    width={100}
                    className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                    height={100}
                  />
                </div>
              </div>

              <div className="2xl:gap-[35px] gap-[30px] overflow-hidden w-1/3 flex flex-col">
                <div className="h-1/2 overflow-hidden border-[2px] border-[#00366A] rounded-[8px] bg-white p-[30px]">
                  <Image
                    unoptimized
                    alt=""
                    src={"/image/silicon5.png"}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                    width={100}
                    className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                    height={100}
                  />
                </div>
                <div className="h-1/2 overflow-hidden border-[2px] border-[#00366A] rounded-[8px] bg-white p-[30px]">
                  <Image
                    unoptimized
                    alt=""
                    src={"/image/silicon6.png"}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                    width={100}
                    className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                    height={100}
                  />
                </div>
              </div>
            </div>
            {/*  Mobile  */}
            <div className="xl:hidden lg:hidden md:hidden sm:flex flex overflow-hidden h-[80vh] gap-[20px] xl:gap-[35px] mt-[20px]">
              <div className="gap-[20px] xl:gap-[35px] overflow-hidden w-[50%] flex flex-col">
                <div className="h-[50%] overflow-hidden border-[2px] border-[#00366A] rounded-[8px] bg-white p-[30px]">
                  <Image
                    unoptimized
                    alt=""
                    src={"/image/silicon1.png"}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                    width={100}
                    className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                    height={100}
                  />
                </div>
                <div className="h-[50%] overflow-hidden border-[2px] border-[#00366A] rounded-[8px] bg-white p-[30px]">
                  <Image
                    unoptimized
                    alt=""
                    src={"/image/silicon5.png"}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                    width={100}
                    className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                    height={100}
                  />
                </div>
                <div className="h-[50%] overflow-hidden border-[2px] border-[#00366A] rounded-[8px] bg-white p-[30px]">
                  <Image
                    unoptimized
                    alt=""
                    src={"/image/silicon7.png"}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                    width={100}
                    className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                    height={100}
                  />
                </div>
              </div>

              <div className="gap-[20px] xl:gap-[35px] overflow-hidden w-[50%] flex flex-col">
                <div className="h-[50%] overflow-hidden border-[2px] border-[#00366A] rounded-[8px] bg-white p-[30px]">
                  <Image
                    unoptimized
                    alt=""
                    src={"/image/silicon3.png"}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                    width={100}
                    className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                    height={100}
                  />
                </div>
                <div className="h-[50%] overflow-hidden border-[2px] border-[#00366A] rounded-[8px] bg-white p-[30px]">
                  <Image
                    unoptimized
                    alt=""
                    src={"/image/silicon2.png"}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                    width={100}
                    className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                    height={100}
                  />
                </div>
                <div className="h-[50%] overflow-hidden border-[2px] border-[#00366A] rounded-[8px] bg-white p-[30px]">
                  <Image
                    unoptimized
                    alt=""
                    src={"/image/silicon6.png"}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                    width={100}
                    className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                    height={100}
                  />
                </div>
              </div>
            </div>
          </>
        </div>
      );
    }

    if (activeTab == "SILICONE RUBBER DETAIL") {
      return (
        <>
          {/* Desktop */}
          <div className="xl:flex lg:flex md:flex sm:hidden hidden overflow-hidden h-[80vh] gap-[20px] xl:gap-[35px] mt-[70px]">
            <div className="gap-[20px] xl:gap-[35px] overflow-hidden w-[25%] flex flex-col">
              <div className="h-[65%] overflow-hidden border-[2px] border-[#00366A] rounded-[8px] bg-white p-[30px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/silicon2.1.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={100}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                  height={100}
                />
              </div>

              <div className="h-[35%] overflow-hidden border-[2px] border-[#00366A] rounded-[8px] bg-white p-[30px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/silicon2.2.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={100}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                  height={100}
                />
              </div>
            </div>

            <div className="gap-[20px] xl:gap-[35px] overflow-hidden w-[25%] flex flex-col">
              <div className="h-[40%] overflow-hidden border-[2px] border-[#00366A] rounded-[8px] bg-white p-[30px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/silicon2.3.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={100}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                  height={100}
                />
              </div>
              <div className="h-[60%] overflow-hidden border-[2px] border-[#00366A] rounded-[8px] bg-white p-[30px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/silicon2.4.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={100}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                  height={100}
                />
              </div>
            </div>

            <div className="gap-[20px] xl:gap-[35px] overflow-hidden w-[25%] flex flex-col">
              <div className="h-[50%] overflow-hidden border-[2px] border-[#00366A] rounded-[8px] bg-white p-[30px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/silicon2.5.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={100}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                  height={100}
                />
              </div>
              <div className="h-[50%] overflow-hidden border-[2px] border-[#00366A] rounded-[8px] bg-white p-[30px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/silicon2.6.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={100}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                  height={100}
                />
              </div>
            </div>

            <div className="gap-[20px] xl:gap-[35px] overflow-hidden w-[25%] flex flex-col">
              <div className="h-[45%] overflow-hidden border-[2px] border-[#00366A] rounded-[8px] bg-white p-[30px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/silicon2.7.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={100}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                  height={100}
                />
              </div>
              <div className="h-[55%] overflow-hidden border-[2px] border-[#00366A] rounded-[8px] bg-white p-[30px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/silicon2.8.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={100}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                  height={100}
                />
              </div>
            </div>
          </div>
          {/* Mobile */}
          <div className="xl:hidden md:hidden lg:hidden flex sm:flex overflow-hidden h-[110vh] gap-[20px] xl:gap-[35px] mt-[40px]">
            <div className="gap-[20px] xl:gap-[35px] overflow-hidden w-[50%] flex flex-col">
              <div className="h-[60%] overflow-hidden border-[2px] border-[#00366A] rounded-[8px] bg-white p-[30px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/silicon2.1.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={100}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                  height={100}
                />
              </div>
              <div className="h-[50%] overflow-hidden border-[2px] border-[#00366A] rounded-[8px] bg-white p-[30px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/silicon2.2.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={100}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                  height={100}
                />
              </div>
              <div className="h-[60%] overflow-hidden border-[2px] border-[#00366A] rounded-[8px] bg-white p-[30px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/silicon2.5.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={100}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                  height={100}
                />
              </div>
              <div className="h-[50%] overflow-hidden border-[2px] border-[#00366A] rounded-[8px] bg-white p-[30px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/silicon2.6.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={100}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                  height={100}
                />
              </div>
            </div>

            <div className="gap-[20px] xl:gap-[35px] overflow-hidden w-[50%] flex flex-col">
              <div className="h-[60%] overflow-hidden border-[2px] border-[#00366A] rounded-[8px] bg-white p-[30px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/silicon2.3.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={100}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                  height={100}
                />
              </div>
              <div className="h-[50%] overflow-hidden border-[2px] border-[#00366A] rounded-[8px] bg-white p-[30px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/silicon2.4.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={100}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                  height={100}
                />
              </div>
              <div className="h-[60%] overflow-hidden border-[2px] border-[#00366A] rounded-[8px] bg-white p-[30px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/silicon2.7.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={100}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                  height={100}
                />
              </div>
              <div className="h-[50%] overflow-hidden border-[2px] border-[#00366A] rounded-[8px] bg-white p-[30px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/silicon2.8.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={100}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                  height={100}
                />
              </div>
            </div>
          </div>
        </>
      );
    }

    if (activeTab == "SILICONE RUBBER GASKET") {
      return (
        <>
          {/* Desktop */}
          <div className="xl:flex md:flex lg:flex hidden sm:hidden overflow-hidden h-[80vh] gap-[35px] mt-[70px]">
            <div className="gap-[20px] xl:gap-[35px] overflow-hidden w-[50%] flex flex-col">
              <div className="h-[100%] overflow-hidden border-[2px] border-[#00366A] rounded-[8px] bg-white p-[30px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/silicon3.1.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={100}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                  height={100}
                />
              </div>
            </div>

            <div className="gap-[20px] xl:gap-[35px] overflow-hidden w-[25%] flex flex-col">
              <div className="h-[50%] overflow-hidden border-[2px] border-[#00366A] rounded-[8px] bg-white p-[30px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/silicon3.2.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={100}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                  height={100}
                />
              </div>
              <div className="h-[50%] overflow-hidden border-[2px] border-[#00366A] rounded-[8px] bg-white p-[30px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/silicon3.3.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={100}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                  height={100}
                />
              </div>
            </div>

            <div className="gap-[20px] xl:gap-[35px] overflow-hidden w-[25%] flex flex-col">
              <div className="h-[50%] overflow-hidden border-[2px] border-[#00366A] rounded-[8px] bg-white p-[30px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/silicon3.4.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={100}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                  height={100}
                />
              </div>
              <div className="h-[50%] overflow-hidden border-[2px] border-[#00366A] rounded-[8px] bg-white p-[30px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/silicon3.5.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={100}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                  height={100}
                />
              </div>
            </div>
          </div>
          {/* Mobile */}
          <div className="xl:hidden lg:hidden md:hidden sm:flex flex-col flex overflow-hidden h-[80vh] gap-[35px] mt-[40px]">
            <div className="gap-[20px] xl:gap-[35px] overflow-hidden w-[100%] flex flex-col">
              <div className="h-[100%] overflow-hidden border-[2px] border-[#00366A] rounded-[8px] bg-white p-[30px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/silicon3.1.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={100}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                  height={100}
                />
              </div>
            </div>

            <div className="gap-[20px] xl:gap-[35px] overflow-hidden w-[100%] flex">
              <div className="flex gap-[20px] xl:gap-[35px] flex-col">
                <div className="h-[60%] overflow-hidden border-[2px] flex flex-col border-[#00366A] rounded-[8px] bg-white p-[30px]">
                  <Image
                    unoptimized
                    alt=""
                    src={"/image/silicon3.2.png"}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                    width={100}
                    className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                    height={100}
                  />
                </div>
                <div className="h-[60%] overflow-hidden border-[2px] flex flex-col border-[#00366A] rounded-[8px] bg-white p-[30px]">
                  <Image
                    unoptimized
                    alt=""
                    src={"/image/silicon3.3.png"}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                    width={100}
                    className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                    height={100}
                  />
                </div>
              </div>
              <div className="flex gap-[20px] xl:gap-[35px] flex-col">
                <div className="h-[60%] overflow-hidden border-[2px] border-[#00366A] rounded-[8px] bg-white p-[30px]">
                  <Image
                    unoptimized
                    alt=""
                    src={"/image/silicon3.4.png"}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                    width={100}
                    className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                    height={100}
                  />
                </div>
                <div className="h-[60%] overflow-hidden border-[2px] border-[#00366A] rounded-[8px] bg-white p-[30px]">
                  <Image
                    unoptimized
                    alt=""
                    src={"/image/silicon3.5.png"}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                    width={100}
                    className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                    height={100}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }

    if (activeTab == "INDUSTRIAL KEYBOARD") {
      return (
        <>
          {/* Desktop */}
          <div className="md:flex lg:flex xl:flex sm:hidden hidden overflow-hidden h-[80vh] gap-[35px] mt-[70px]">
            <div className="gap-[35px] overflow-hidden w-[25%] flex flex-col">
              <div className="h-[65%] overflow-hidden border-[2px] border-[#00366A] rounded-[8px] bg-white p-[30px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/silicon4.1.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={100}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                  height={100}
                />
              </div>

              <div className="h-[35%] overflow-hidden border-[2px] border-[#00366A] rounded-[8px] bg-white p-[30px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/silicon4.2.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={100}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                  height={100}
                />
              </div>
            </div>

            <div className="gap-[35px] overflow-hidden w-[25%] flex flex-col">
              <div className="h-[40%] overflow-hidden border-[2px] border-[#00366A] rounded-[8px] bg-white p-[30px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/silicon4.3.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={100}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                  height={100}
                />
              </div>
              <div className="h-[60%] overflow-hidden border-[2px] border-[#00366A] rounded-[8px] bg-white p-[30px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/silicon4.4.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={100}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                  height={100}
                />
              </div>
            </div>

            <div className="gap-[35px] overflow-hidden w-[25%] flex flex-col">
              <div className="h-[50%] overflow-hidden border-[2px] border-[#00366A] rounded-[8px] bg-white p-[30px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/silicon4.5.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={100}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                  height={100}
                />
              </div>
              <div className="h-[50%] overflow-hidden border-[2px] border-[#00366A] rounded-[8px] bg-white p-[30px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/silicon4.6.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={100}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                  height={100}
                />
              </div>
            </div>

            <div className="gap-[35px] overflow-hidden w-[25%] flex flex-col">
              <div className="h-[45%] overflow-hidden border-[2px] border-[#00366A] rounded-[8px] bg-white p-[30px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/silicon4.7.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={100}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                  height={100}
                />
              </div>
              <div className="h-[55%] overflow-hidden border-[2px] border-[#00366A] rounded-[8px] bg-white p-[30px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/silicon4.8.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={100}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                  height={100}
                />
              </div>
            </div>
          </div>
          {/* Mobile */}
          <div className="xl:hidden md:hidden lg:hidden flex sm:flex overflow-hidden h-[120vh] gap-[20px] xl:gap-[35px] mt-[40px]">
            <div className="gap-[20px] xl:gap-[35px] overflow-hidden w-[50%] flex flex-col">
              <div className="h-[60%] overflow-hidden border-[2px] border-[#00366A] rounded-[8px] bg-white p-[30px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/silicon4.1.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={100}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                  height={100}
                />
              </div>
              <div className="h-[50%] overflow-hidden border-[2px] border-[#00366A] rounded-[8px] bg-white p-[30px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/silicon4.2.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={100}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                  height={100}
                />
              </div>
              <div className="h-[60%] overflow-hidden border-[2px] border-[#00366A] rounded-[8px] bg-white p-[30px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/silicon4.5.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={100}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                  height={100}
                />
              </div>
              <div className="h-[50%] overflow-hidden border-[2px] border-[#00366A] rounded-[8px] bg-white p-[30px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/silicon4.6.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={100}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                  height={100}
                />
              </div>
            </div>

            <div className="gap-[20px] xl:gap-[35px] overflow-hidden w-[50%] flex flex-col">
              <div className="h-[60%] overflow-hidden border-[2px] border-[#00366A] rounded-[8px] bg-white p-[30px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/silicon4.3.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={100}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                  height={100}
                />
              </div>
              <div className="h-[50%] overflow-hidden border-[2px] border-[#00366A] rounded-[8px] bg-white p-[30px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/silicon4.4.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={100}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                  height={100}
                />
              </div>
              <div className="h-[60%] overflow-hidden border-[2px] border-[#00366A] rounded-[8px] bg-white p-[30px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/silicon4.7.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={100}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                  height={100}
                />
              </div>
              <div className="h-[50%] overflow-hidden border-[2px] border-[#00366A] rounded-[8px] bg-white p-[30px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/silicon4.8.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={100}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                  height={100}
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
      <div className="relative flex justify-center mt-[60px] md:mt-[100px] xl:mt-[120px] 2xl:mt-[140px] ">
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
          <span
            className="xl:text-[35px] 2xl:text-[48px]
          px-[10px] flex text-center md:text-[2rem] lg:text-[35px] sm:text-[28px] justify-center items-center w-[100%] text-[28px]"
          >
            SILICON RUBBER PRODUCTS
          </span>
          {/* Đường viền */}
          <span
            className="xl:h-[4px] 2xl:h-[5px] md:h-[4px] h-[3px]"
            style={{
              position: "absolute",
              bottom: "5px", // Đặt đường viền sát dưới chữ
              left: "50%", // Căn giữa theo chiều ngang
              transform: "translateX(-50%)", // Căn chỉnh chính xác vị trí giữa
              width: "25%", // Chiều rộng của đường viền (ngắn hơn width chữ)
              backgroundColor: "#00A859", // Màu sắc của đường viền
            }}
          />
        </Typography>
      </div>

      <div className="2xl:mt-[30px] md:mt-[25px] mt-[20px]">
        <div className="xl:px-[10%] lg:px-[10%] md:px-[10%] sm:px-[6%] px-[4%]">
          <div className="flex justify-center ">
            <div
              className="relative  sm:rounded-[28px] rounded-[28px] xl:rounded-full lg:rounded-full md:rounded-full overflow-hidden xl:w-[80%] lg:w-[48%] md:w-[64%] w-[100%] 
              border-transparent bg-gradient-to-r from-[#007BB0] to-[#00366A]"
            >
              <div className="bg-white flex justify-between m-[2px] sm:rounded-[28px] rounded-[28px] xl:rounded-full lg:rounded-full md:rounded-full">
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

export default Silicon;
const TabButton = ({ label, isActive, onClick }: any) => (
  <button
    className={`flex-1 px-4 py-[10px] sm:px-2 2xl:py-[16px] text-center flex items-center justify-center
       text-[9px] md:text-[12px] 2xl:text-[18px] transition-all duration-300 ]"
      ${
        isActive
          ? "bg-gradient-to-r font-bold from-[#007BB0] to-[#00366A] text-white"
          : "text-[#00366A] font-bold"
      }
      rounded-[28px] md:rounded-full 
    `}
    onClick={onClick}
  >
    <text className="mx-[10px] text-center">{label}</text>
  </button>
);
