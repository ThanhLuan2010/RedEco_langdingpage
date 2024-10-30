import Image from "next/image";

function QualityContent() {
  return (
    <div className="mt-[48px] flex flex-col px-[24px]">
      <div className="justify-center flex items-center">
        <text className="text-[24px] md:text-[30px] lg:text-[38px] xl:text-[40px] 2xl:text-[48px] font-bold pb-[4px] relative text-[#00366A]">
          QUALITY
          <span className="absolute bottom-0 left-[50%] translate-x-[-50%] w-[50%] h-[2px] xl:h-[5px] bg-[#00A859]" />
        </text>
      </div>

      <text className="mt-[18px]">
        At REDECO Vietnam, monitoring and evaluation systems are implemented in
        each department to comply with quality assurance procedures. Quality is
        assured with a manufacturing and testing process that includes quality
        control at every step. From design to final assembly and testing, each
        finished part is thoroughly inspected by engineers who are personally
        responsible for the quality of the final product.
      </text>

      <div
        style={{
          backgroundColor: "rgba(255,255,255,0.9)F",
          boxShadow: "0 1px 8px rgba(0, 0, 0, 0.1)",
        }}
        className="bg-white rounded-[12px] flex flex-col mt-[26px] py-[20px] text-[15px] text-[#252724] font-medium px-[35px] leading-[20px] mx-[20px]"
      >
        <text>
          ▪ <span className="ml-[20px]">Good Skilled Engineers</span>
        </text>
        <text>
          ▪ <span className="ml-[20px]">Modern Machines</span>
        </text>
        <text>
          ▪ <span className="ml-[20px]">High-Quality Service</span>
        </text>
        <text>
          ▪ <span className="ml-[20px]">Guaranteed Products</span>
        </text>
        <text>
          ▪ <span className="ml-[20px]">Ensure 5S Level & Kaizen</span>
        </text>
      </div>

      <div
        style={{
          backgroundColor: "rgba(255,255,255,0.9)F",
          boxShadow: "0 1px 8px rgba(0, 0, 0, 0.1)",
        }}
        className="bg-white rounded-[12px] flex flex-col mt-[24px] py-[20px] text-[15px] text-[#252724] font-medium px-[35px] leading-[20px] mx-[20px]"
      >
        <text>
          ▪ <span className="ml-[20px]">Fast Support</span>
        </text>
        <text>
          ▪ <span className="ml-[20px]">Complete Solution</span>
        </text>
        <text>
          ▪ <span className="ml-[20px]">Responsibility</span>
        </text>
        <text>
          ▪ <span className="ml-[20px]">Dedication</span>
        </text>
        <text>
          ▪ <span className="ml-[20px]">Continuous Innovation</span>
        </text>
      </div>

      <div className="mt-[30px]">
        <Image
          alt=""
          src={require("../../../public/image/quality_banner1.png")}
        />
      </div>
    </div>
  );
}

export default QualityContent;
