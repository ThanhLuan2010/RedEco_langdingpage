
import React from "react";

function Mission() {
  return (
    <div className="flex flex-col-reverse md:flex-row mt-[40px] md:mt-[48px] ld:mt-[54px] xl:mt-[60px] px-[20px] md:px-[5%] xl:px-[10%] gap-[7%] items-center">
      <div className="w-[100%] md:w-[40%] h-[100%] mt-[24px] md:mt-0">
        <img
          alt=""
          className="rounded-tl-[50px] rounded-br-[50px] w-[100%] h-[100%] object-fill"
          src={require("../../assets/image/aboutUs/mision1.png")}
          width={100}
          height={100}
          
        />
      </div>

      <div
        style={{ boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)" }}
        className="
        bg-white w-[100%] md:w-[60%] h-[100%] overflow-hidden
        rounded-[12px] md:rounded-[14px] lg:rounded-[16px] xl:rounded-[18px] 2xl:rounded-[20px]
        px-[12px] md:px-[20px] lg:px-[30px] xl:px-[38px] 2xl:px[48px]
        pb-[25px] xl:pb-[30px]
        pt-[16px] md:pt-[20px] 2xl:pt-[25px]
        "
      >
        <div className="justify-center flex items-center ">
          <text className="text-[24px] md:text-[30px] lg:text-[38px] 2xl:text-[48px] font-bold pb-[2px] relative text-[#00366A]">
            MISSION
            <span className="absolute bottom-0 left-[50%] translate-x-[-50%] w-[60%] h-[2px] md:h-[4px]  2xl:h-[5px] bg-[#00A859]" />
          </text>
        </div>
        <div
          className="
            mt-[16px] xl:mt-[20px]
            "
        >
          <text className="text-[14px] md:text-[15px] 2xl:text-[18px]">REDECO VIETNAM JSC will bring to customers:</text>
        </div>
        <div
          className="
          flex flex-col font-medium 
          mt-[4px] md:mt-[8px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[16px] 
          leading-[20px] md:leading-[20px] lg:leading-[22px] xl:leading-[26px] 2xl:leading-[30px] text-[14px] md:text-[15px] 2xl:text-[18px]"
        >
          <text>
            <span className="text-[10px] mr-[10px]">●</span>
            Professional services
          </text>
          <text>
            <span className="text-[10px] mr-[10px]">●</span>
            The best of quality products
          </text>
          <text>
            <span className="text-[10px] mr-[10px]">●</span>Earliest progress
          </text>
          <text>
            <span className="text-[10px] mr-[10px]">●</span>
            Reasonable price
          </text>
        </div>
      </div>
    </div>
  );
}

export default Mission;
