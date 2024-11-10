
import React from "react";

function Vison() {
  return (
    <div className="flex flex-col md:flex-row mt-[100px] md:mt-[130px] lg:mt-[160px] xl:mt-[190px] 2xl:mt-[240px] px-[20px] md:px-[5%] xl:px-[10%] gap-[7%]">
      <div
        style={{ boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)" }}
        className="
        bg-white w-[100%] md:w-[60%]  
        rounded-[12px] md:rounded-[14px] lg:rounded-[16px] xl:rounded-[18px] 2xl:rounded-[20px]
        px-[12px] md:px-[20px] lg:px-[30px] xl:px-[38px] 2xl:px[48px]
        pb-[25px] xl:pb-[30px]
        pt-[16px] md:pt-[20px] 2xl:pt-[25px]
        "
      >
        <div className="justify-center flex items-center ">
          <text className="text-[24px] md:text-[30px] lg:text-[38px] 2xl:text-[48px] font-bold pb-[2px] relative text-[#00366A]">
            VISION
            <span className="absolute bottom-0 left-[50%] translate-x-[-50%] w-[80%] h-[2px] md:h-[4px]  2xl:h-[5px] bg-[#00A859]" />
          </text>
        </div>
        <div
          className="
            mt-[20px] xl:mt-[24px]
            "
        >
          <text className="font-normal text-[14px] md:text-[15px] 2xl:text-[18px]">
            REDECO VIETNAM always working to develop in the direction:
          </text>
        </div>
        <div className="flex flex-col font-medium mt-[4px] md:mt-[8px] text-[14px] md:text-[15px] 2xl:text-[18px]">
          <text className="line-clamp-1 mt-[2px]">
            <span className="text-[10px] mr-[5px] md:mr-[10px] ">●</span>{" "}
            Professionalize all activities of the company
          </text>
          <text className="line-clamp-1 mt-[2px]">
            <span className="text-[10px] mr-[5px] md:mr-[10px] ">●</span>{" "}
            Continuously improve production processes
          </text>
          <text className="line-clamp-1 mt-[2px]">
            <span className="text-[10px] mr-[5px] md:mr-[10px] ">●</span>{" "}
            Innovation management processes
          </text>
          <text className="line-clamp-1 mt-[2px]">
            <span className="text-[10px] mr-[5px] md:mr-[10px] ">●</span> Build
            to training policy of HR
          </text>
        </div>
      </div>

      <div className="w-[100%] md:w-[40%] h-[100%] mt-[17px] md:mt-0">
        <img
          alt=""
          className="rounded-tl-[50px] rounded-br-[50px] w-[100%] h-[100%]"
          src={require("../../assets/image/aboutUs/vision1.png")}
          width={100}
          
          height={100}
        />
      </div>
    </div>
  );
}

export default Vison;
