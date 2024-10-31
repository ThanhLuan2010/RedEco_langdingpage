import { Flex } from "antd";
import Image from "next/image";

function QualityContent() {
  return (
    <div className="mt-[48px] md:mt-[-50px] flex flex-col px-[24px] md:px-[5%] xl:px-[10%]">
      <div className="flex flex-col md:flex-row-reverse">
        <div className="w-[100%] md:w-[55%] md:mt-[5%] md:gap-[40px]">
          <div className="justify-center flex items-center">
            <text className="text-[24px] md:text-[30px] lg:text-[38px] xl:text-[40px] 2xl:text-[48px] font-bold pb-[3px] relative text-[#00366A]">
              QUALITY
              <span className="absolute bottom-0 left-[50%] translate-x-[-50%] w-[50%] h-[2px] md:h-[4px] xl:h-[5px] bg-[#00A859]" />
            </text>
          </div>
          
         <div className="mt-[18px] md:mt-[20px] lg:mt-[30px]">
         <text className="text-[#252724] font-thin">
            At REDECO Vietnam, monitoring and evaluation systems are implemented
            in each department to comply with quality assurance procedures.
            Quality is assured with a manufacturing and testing process that
            includes quality control at every step. From design to final
            assembly and testing, each finished part is thoroughly inspected by
            engineers who are personally responsible for the quality of the
            final product.
          </text>
          </div>

          <div className="flex flex-col md:flex-row">
            <div
              style={{
                backgroundColor: "rgba(255,255,255,0.9)F",
                boxShadow: "0 1px 8px rgba(0, 0, 0, 0.1)",
              }}
              className="bg-white rounded-[12px] flex flex-col mt-[26px] py-[20px] text-[15px] text-[#252724] font-medium px-[35px] leading-[20px] mx-[20px] md:mx-0"
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
          </div>
        </div>
        <div className="mt-[30px] md:mt-0 w-[100%] md:w-[45%]">
          <Image
            alt=""
            src={require("../../../public/image/quality_banner1.png")}
          />
        </div>
      </div>
    </div>
  );
}

export default QualityContent;
