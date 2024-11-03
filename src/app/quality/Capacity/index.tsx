"use client";
import Image from "next/image";
import { useState } from "react";

const TabButton = ({ label, isActive, onClick }: any) => (
  <button
    className={`flex-1 px-4  py-[8px] md:py-[10px] 2xl:py-[18px] text-center 
       text-[9px] md:text-[12px] 2xl:text-[16px] transition-all duration-300 
      ${
        isActive
          ? "bg-gradient-to-r from-[#007BB0] to-[#00366A] text-white"
          : "text-[#00366A]"
      }
      rounded-full font-bold px-[20px]
    `}
    onClick={onClick}
  >
    {label}
  </button>
);

const Capacity = () => {
  const [activeTab, setActiveTab] = useState("CNC MILLING MACHINE");
  const categories: any = [
    "CNC MILLING MACHINE",
    "CNC LATHE MACHINE",
    "EDM & WIRE EDM MACHINE",
  ];

  const renderProduct = () => {
    if (activeTab === "CNC MILLING MACHINE") {
      return (
        <div className="flex flex-col md:flex-row overflow-hidden h-[100%] gap-[18px] md:gap-[22px] lg:gap-[26px] xl:gap-[32px] 2xl:gap-[40px] mt-[32px] md:mt-[42px] lg:mt-[52px] xl:mt-[62px] 2xl:mt-[72px]">
          <div className="flex w-[100%] gap-[18px] md:gap-[22px] lg:gap-[26px] xl:gap-[32px] 2xl:gap-[40px]">
            <div className="gap-[18px] md:gap-[22px] lg:gap-[26px] xl:gap-[32px] 2xl:gap-[40px] overflow-hidden w-[100%] flex flex-col">
              <div className="h-[55%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[12px] md:p-[14px] lg:p-[18px] xl:p-[20px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/machine1.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  width={100}
                  height={100}
                  className="rounded-[8px]"
                />
              </div>
              <div className="h-[45%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[12px] md:p-[14px] lg:p-[18px] xl:p-[20px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/machine2.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  className="rounded-[8px]"
                  width={100}
                  height={100}
                />
              </div>
            </div>

            <div className=" gap-[18px] md:gap-[22px] lg:gap-[26px] xl:gap-[32px] 2xl:gap-[40px] overflow-hidden w-[100%] flex flex-col">
              <div className="h-[35%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[12px] md:p-[14px] lg:p-[18px] xl:p-[20px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/machine3.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  className="rounded-[8px]"
                  width={100}
                  height={100}
                />
              </div>
              <div className="h-[65%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[12px] md:p-[14px] lg:p-[18px] xl:p-[20px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/machine4.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  className="rounded-[8px]"
                  width={100}
                  height={100}
                />
              </div>
            </div>
          </div>

          <div className="flex w-[100%]  gap-[18px] md:gap-[22px] lg:gap-[26px] xl:gap-[32px] 2xl:gap-[40px]">
            <div className=" gap-[18px] md:gap-[22px] lg:gap-[26px] xl:gap-[32px] 2xl:gap-[40px] overflow-hidden w-[100%] flex flex-col">
              <div className="h-[50%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[12px] md:p-[14px] lg:p-[18px] xl:p-[20px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/machine5.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  className="rounded-[8px]"
                  width={100}
                  height={100}
                />
              </div>
              <div className="h-[50%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[12px] md:p-[14px] lg:p-[18px] xl:p-[20px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/machine6.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  className="rounded-[8px]"
                  width={100}
                  height={100}
                />
              </div>
            </div>

            <div className=" gap-[18px] md:gap-[22px] lg:gap-[26px] xl:gap-[32px] 2xl:gap-[40px] overflow-hidden w-[100%] flex flex-col">
              <div className="h-[30%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[12px] md:p-[14px] lg:p-[18px] xl:p-[20px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/machine7.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  className="rounded-[8px]"
                  width={100}
                  height={100}
                />
              </div>
              <div className="h-[70%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[12px] md:p-[14px] lg:p-[18px] xl:p-[20px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/machine8.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  className="rounded-[8px]"
                  width={100}
                  height={100}
                />
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (activeTab === "CNC LATHE MACHINE") {
      return (
        <div className="flex flex-col md:flex-row overflow-hidden h-[80vh] gap-[18px] md:gap-[22px] lg:gap-[26px] xl:gap-[32px] 2xl:gap-[40px] mt-[32px] md:mt-[42px] lg:mt-[52px] xl:mt-[62px] 2xl:mt-[72px]">
          <div className="flex flex-col  gap-[18px] md:gap-[22px] lg:gap-[26px] xl:gap-[32px] 2xl:gap-[40px]">
            <div className="gap-[18px] md:gap-[22px] lg:gap-[26px] xl:gap-[32px] 2xl:gap-[40px] h-[50%]  overflow-hidden w-[100%] flex flex-col">
              <div className="h-[100%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[12px] md:p-[14px] lg:p-[18px] xl:p-[20px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/capacity2.2.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  className="rounded-[8px]"
                  width={100}
                  height={100}
                />
              </div>
            </div>

            <div className="gap-[18px] md:gap-[22px] lg:gap-[26px] xl:gap-[32px] 2xl:gap-[40px] h-[50%] overflow-hidden w-[100%] flex flex-col">
              <div className="h-[100%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[12px] md:p-[14px] lg:p-[18px] xl:p-[20px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/capacity2.2.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  className="rounded-[8px]"
                  width={100}
                  height={100}
                />
              </div>
            </div>
          </div>

          <div className="gap-[18px] md:gap-[22px] lg:gap-[26px] xl:gap-[32px] 2xl:gap-[40px] h-[50%] md:h-[100%] overflow-hidden w-[100%] md:w-[50%] flex flex-col">
            <div className="h-[100%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[12px] md:p-[14px] lg:p-[18px] xl:p-[20px]">
              <Image
                unoptimized
                alt=""
                src={"/image/capacity2.3.png"}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                className="rounded-[8px]"
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
      );
    }
    if (activeTab === "EDM & WIRE EDM MACHINE") {
      return (
        <div className="flex flex-col md:flex-row overflow-hidden h-[80vh] gap-[18px] md:gap-[22px] lg:gap-[26px] xl:gap-[32px] 2xl:gap-[40px] mt-[32px] md:mt-[42px] lg:mt-[52px] xl:mt-[62px] 2xl:mt-[72px]">
          <div className="gap-[18px] md:gap-[22px] lg:gap-[26px] xl:gap-[32px] 2xl:gap-[40px] h-[50%] md:h-[100%] overflow-hidden w-[100%] md:w-[50%] flex flex-col">
            <div className="h-[100%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[12px] md:p-[14px] lg:p-[18px] xl:p-[20px]">
              <Image
                unoptimized
                alt=""
                src={"/image/capacity3.1.png"}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                className="rounded-[8px]"
                width={100}
                height={100}
              />
            </div>
          </div>
          <div className="flex flex-col gap-[18px] md:gap-[22px] lg:gap-[26px] xl:gap-[32px] 2xl:gap-[40px]">
            <div className="gap-[18px] md:gap-[22px] lg:gap-[26px] xl:gap-[32px] 2xl:gap-[40px] h-[50%] overflow-hidden w-[100%] flex flex-col">
              <div className="h-[100%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[12px] md:p-[14px] lg:p-[18px] xl:p-[20px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/capacity3.2.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  className="rounded-[8px]"
                  width={100}
                  height={100}
                />
              </div>
            </div>

            <div className="gap-[18px] md:gap-[22px] lg:gap-[26px] xl:gap-[32px] 2xl:gap-[40px] h-[50%] overflow-hidden w-[100%] flex flex-col">
              <div className="h-[100%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[12px] md:p-[14px] lg:p-[18px] xl:p-[20px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/capacity3.3.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  className="rounded-[8px]"
                  width={100}
                  height={100}
                />
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="px-[20px] md:px-[5%] xl:px-[10%]">
      <div className="justify-center flex items-center mt-[48px] md:mt-[60px] lg:mt-[72px] xl:mt-[90px] 2xl:mt-[120px]">
        <text className="text-[24px] md:text-[30px] lg:text-[38px] 2xl:text-[48px] font-bold pb-[4px] relative text-[#00366A]">
          CAPACITY
          <span className="absolute bottom-0 left-[50%] translate-x-[-50%] w-[50%] h-[2px] xl:h-[5px] bg-[#00A859]" />
        </text>
      </div>

      <div className="flex justify-center w-[100%] mt-[24px] ">
        <div
          className="
          relative
          rounded-full 
           md:w-[64%]
          w-[100%] sm:w-[100%] border-transparent bg-gradient-to-r from-[#007BB0] to-[#00366A]"
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
      <div className="h-[80vh]">{renderProduct()}</div>

      <div className="justify-center flex flex-col items-center mt-[48px] md:mt-[60] lg:mt-[72px] xl:mt-[90px] 2xl:mt-[120]">
        <text className="text-[24px] md:text-[30px] lg:text-[38px]  2xl:text-[48px] font-bold pb-[4px] relative text-[#00366A]">
          QUALITY CONTROL
          <span className="absolute bottom-0 left-[50%] translate-x-[-50%] w-[50%] h-[2px] xl:h-[5px] bg-[#00A859]" />
        </text>

        <text className="text-center mt-[18px] md:mx-[10%] md:text-[15px] 2xl:text-[20px]">
          Quality Control will divided into three stages based on the production
          process, including input quality control (PQC), production process
          quality control (PQC), and output quality control (OQC). Each stage
          will have a staff in charge.
        </text>

        <div className="flex flex-col md:flex-row overflow-hidden h-[80vh] gap-[18px] md:gap-[22px] lg:gap-[26px] xl:gap-[32px] 2xl:gap-[40px] mt-[32px] md:mt-[42px] w-[100%] lg:mt-[52px] xl:mt-[62px] 2xl:mt-[72px]">
          <div className="gap-[18px] md:gap-[22px] lg:gap-[26px] xl:gap-[32px] 2xl:gap-[40px] h-[50%] md:h-[100%] md:w-1/3 overflow-hidden w-[100%] flex flex-col">
            <div className="h-[100%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[12px] md:p-[14px] lg:p-[18px] xl:p-[20px]">
              <Image
                unoptimized
                alt=""
                src={"/image/quality_control1.png"}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                width={100}
                height={100}
              />
            </div>
          </div>

          <div className="h-[50%] md:h-[100%] flex flex-col md:flex-col md:w-2/3 gap-[18px] md:gap-[22px] lg:gap-[26px] xl:gap-[32px] 2xl:gap-[40px]">
            <div className="gap-[18px] md:gap-[22px] lg:gap-[26px] xl:gap-[32px] 2xl:gap-[40px] h-[50%]  w-[100%] flex flex-row">
              <div className="h-[100%] w-[50%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[12px] md:p-[14px] lg:p-[18px] xl:p-[20px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/quality_control2.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  width={100}
                  height={100}
                />
              </div>

              <div className="h-[100%] w-[50%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[12px] md:p-[14px] lg:p-[18px] xl:p-[20px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/quality_control3.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  width={100}
                  height={100}
                />
              </div>
            </div>

            <div className="gap-[18px] md:gap-[22px] lg:gap-[26px] xl:gap-[32px] 2xl:gap-[40px] h-[50%] md:h-[50%] overflow-hidden w-[100%] flex flex-col ">
              <div className="h-[100%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[12px] md:p-[14px] lg:p-[18px] xl:p-[20px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/quality_control4.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  width={100}
                  height={100}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Capacity;
