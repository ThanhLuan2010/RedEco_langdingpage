"use client";
import Image from "next/image";
import { useState } from "react";

const GalleryTabs = () => {
  const [activeTab, setActiveTab] = useState("our-customers");

  const renderContent = () => {
    switch (activeTab) {
      case "production":
        return (
          <>
            <div className="w-[100%] h-auto xl:flex md:flex lg:flex sm:flex hidden">
              <Image
                alt="img_gallary"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
                src={require("../../../public/image/gallary/production.png")}
              ></Image>
            </div>
            <div className="w-[100%] h-auto xl:hidden md:hidden lg:hidden sm:hidden flex">
              <Image
                alt="img_gallary"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
                src={require("../../../public/image/gallary/production2.png")}
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
                src={require("../../../public/image/gallary/our-customers.png")}
              ></Image>
            </div>
            <div className="w-[100%] h-auto xl:hidden md:hidden lg:hidden sm:hidden flex">
              <Image
                alt="img_gallary"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
                src={require("../../../public/image/gallary/our-customers2.png")}
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
                src={require("../../../public/image/gallary/office-block.png")}
              ></Image>
            </div>
            <div className="w-[100%] h-auto flex md:hidden">
              <Image
                alt="img_gallary"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
                src={require("../../../public/image/office_mobile.png")}
              ></Image>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center bg-white">
      <div className="flex xl:mt-20 md:mt-14 lg:mt-20 sm:mt-14 -mt-64 flex-col items-center mb-8">
        <h3 className="text-blueAccent lg:text-4xl xl:text-4xl md:text-4xl sm:text-3xl text-2xl font-bold">
          OUR GALLERY
        </h3>
        <div className="w-[40%] xl:h-[4px] sm:h-[2px] h-[2px] md:h-[4px] lg:h-[4px] bg-greenPrimary"></div>
      </div>
      <div
        className="relative flex justify-between rounded-full overflow-hidden xl:w-[38%] lg:w-[42%] md:w-[58%] sm:w-[70%] w-[90%] p-[2px]"
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

      <div className="xl:mt-12 sm:mt-10 mt-6 md:mt-12 lg:mt-12 w-[100%] xl:px-main md:px-main sm:px-[20px] px-[16px] lg:px-main">
        {renderContent()}
      </div>
    </div>
  );
};

const TabButton = ({ label, isActive, onClick }: any) => (
  <button
    className={`flex-1 px-4 xl:py-[8px] lg:py-[8px] md:py-[10px] sm:py-[8px] py-[8px] flex justify-center items-center text-center 
       text-[12px] md:text-[12px] lg:text-[14px] xl:text-[14px] transition-all duration-300 
      ${
        isActive
          ? "bg-gradient-to-r font-bold from-[#007BB0] to-[#00366A] text-white"
          : "text-[#00366A] font-thin"
      }
      rounded-full
    `}
    onClick={onClick}
  >
    {label}
  </button>
);

export default GalleryTabs;
