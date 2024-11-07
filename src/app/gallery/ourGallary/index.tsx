"use client";
import Image from "next/image";
import { useState } from "react";

const GalleryTabs = () => {
  const [activeTab, setActiveTab] = useState("production");

  const renderContent = () => {
    switch (activeTab) {
      case "production":
        return (
          <>
            <div className="w-[100%] h-auto xl:flex md:flex lg:flex sm:flex hidden">
              <Image
                alt="img_gallary"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
                src={"/image/gallary/production.png"}
                width={100}
                height={100}
                unoptimized
              ></Image>
            </div>
            <div className="w-[100%] h-auto xl:hidden md:hidden lg:hidden sm:hidden flex">
              <Image
                alt="img_gallary"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
                src={"/image/gallary/production2.png"}
                width={100}
                height={100}
                unoptimized
              ></Image>
            </div>
          </>
        );
      case "our-customers":
        return (
          <>
            <div className="w-[100%] h-auto xl:flex md:flex lg:flex sm:flex hidden">
              <Image
                alt="img_gallary"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
                src={"/image/gallary/our-customers.png"}
                width={100}
                height={100}
                unoptimized
              ></Image>
            </div>
            <div className="w-[100%] h-auto xl:hidden md:hidden lg:hidden sm:hidden flex">
              <Image
                alt="img_gallary"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
                src={"/image/gallary/our-customers2.png"}
                width={100}
                height={100}
                unoptimized
              ></Image>
            </div>
          </>
        );
      case "office-block":
        return (
          <div>
            <div className="w-[100%] h-auto hidden md:flex">
              <Image
                alt="img_gallary"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
                src={"/image/gallary/office-block.png"}
                width={100}
                height={100}
                unoptimized
              ></Image>
            </div>
            <div className="w-[100%] h-auto flex md:hidden">
              <Image
                alt="img_gallary"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
                src={"/image/gallary/office_mobile.png"}
                width={100}
                height={100}
                unoptimized
              ></Image>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center bg-[#F7F9F9] pt-[30px] md:pt-[40px] lg:mt-[50px]  2xl:pt-[70px]">
      <text className="text-[24px] md:text-[1.5rem] lg:text-[2rem] xl:text-[2.5rem] font-bold text-[#00366A] relative">
        OUR GALLERY
        <span className="absolute bottom-[-2px] left-[50%] translate-x-[-50%] w-[30%] h-[2px] xl:h-[4px] 2xl:h-[5px] bg-[#00A859]" />
      </text>

      <div
        className="relative flex justify-between rounded-full overflow-hidden xl:w-[38%] lg:w-[42%] md:w-[58%] sm:w-[70%] w-[90%] p-[2px] md:mt-[30px] mt-[20px] 2xl:mt-[40px]"
        style={{
          background: "linear-gradient(to right, #007BB0, #00366A)",
        }}
      >
        <div className="flex justify-between items-center rounded-full w-full h-full bg-white">
          <TabButton
            label="PRODUCTION"
            isActive={activeTab === "production"}
            onClick={() => setActiveTab("production")}
          />
          <TabButton
            label="CUSTOMERS"
            isActive={activeTab === "our-customers"}
            onClick={() => setActiveTab("our-customers")}
          />
          <TabButton
            label="OFFICE BLOCK"
            isActive={activeTab === "office-block"}
            onClick={() => setActiveTab("office-block")}
          />
        </div>
      </div>

      <div className="xl:mt-12 sm:mt-10 mt-6 md:mt-12 lg:mt-12 w-[100%] px-[20px] md:px-[5%] xl:px-[10%]">
        {renderContent()}
      </div>
    </div>
  );
};

const TabButton = ({ label, isActive, onClick }: any) => (
  <button
    className={`flex-1 px-4 py-[8px] md:py-[10px] 2xl:py-[16px] flex justify-center items-center text-center 
       text-[12px] md:text-[13px]  2xl:text-[16px] transition-all duration-300 
      ${
        isActive
          ? "bg-gradient-to-r font-bold from-[#007BB0] to-[#00366A] text-white"
          : "text-[#00366A] font-bold"
      }
      rounded-full
    `}
    onClick={onClick}
  >
    {label}
  </button>
);

export default GalleryTabs;
