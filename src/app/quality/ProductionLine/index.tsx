"use client";


const ProductionLine = () => {
  return (
    <div className="px-20px md:px-[5%] xl:px-[10%]">
      <div className="justify-center flex flex-col mt-[40px] md:mt-[60px] lg:mt-[72px] xl:mt-[90px] 2xl:mt-[120px] px-[20px] ">
        <div className="flex  justify-center">
          <text className="text-[24px] md:text-[30px] lg:text-[38px] 2xl:text-[48px] font-bold md:pb-[4px] relative text-[#00366A]">
            PRODUCTION LINE
            <span className="absolute bottom-0 left-[50%] translate-x-[-50%] w-[30%] md:w-[50%] h-[2px] md:h-[4px] xl:h-[5px] bg-[#00A859]" />
          </text>
        </div>

        <div className="flex justify-center">
          <text className="text-center mt-[18px] md:mt[25px] xl:mt-[30px] 2xl:mt-[36px] w-[100%] md:w-[80%] text-[14px] 2xl:text-[20px] leading-[20px] md:leading-[23px] lg:leading-[28px] 2xl:leading-[30px] text-[black]">
            At the REDECO production line, we will assemble all the parts into
            the mold and perform a thorough inspection before handing over the
            final mold to the testing department and delivering the product to
            the customer!
          </text>
        </div>

        <div className="flex flex-col md:flex-row overflow-hidden h-[80vh] gap-[18px] md:gap-[22px] lg:gap-[26px] xl:gap-[32px] 2xl:gap-[40px] mt-[32px] md:mt-[40px] 2xl:mt-[45px]">
          <div className="gap-[18px] md:gap-[22px] lg:gap-[26px] xl:gap-[32px] 2xl:gap-[40px] h-[50%] md:h-[100%] overflow-hidden w-[100%] md:w-[50%] flex flex-col">
            <div className="h-[100%] overflow-hidden border-[1px] md:border-[2px] border-[#00366A] rounded-[6px] md:rounded-[12px] bg-white p-[12px] md:p-[14px] ">
              <img
                
                alt=""
                src={require("../../../assets/image/productionLine1.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                width={100}
                height={100}
                className="rounded-[6px] md:rounded-[8px]"
                // className="transition-transform duration-300 ease-in-out hover:scale-125"
              />
            </div>
          </div>

          <div className="h-[50%] md:h-[100%] flex flex-col w-[100%] md:w-[50%] gap-[18px] md:gap-[22px] lg:gap-[26px] xl:gap-[32px] 2xl:gap-[40px]">
            <div className="gap-[18px] md:gap-[22px] lg:gap-[26px] xl:gap-[32px] 2xl:gap-[40px] h-[50%] w-[100%] flex flex-row">
              <div className="h-[100%] w-[100%] overflow-hidden border-[1px] md:border-[2px] border-[#00366A] rounded-[6px] md:rounded-[12px] bg-white p-[12px] md:p-[14px] ">
                <img
                  
                  alt=""
                  src={require("../../../assets/image/productionLine2.png")}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  className="rounded-[6px] md:rounded-[8px]"
                  width={100}
                  height={100}
                  // className="transition-transform duration-300 ease-in-out hover:scale-125"
                />
              </div>
            </div>

            <div className="gap-[18px] md:gap-[22px] lg:gap-[26px] xl:gap-[32px] 2xl:gap-[40px] h-[50%]  overflow-hidden w-[100%] flex flex-col ">
              <div className="h-[100%] overflow-hidden border-[1px] md:border-[2px] border-[#00366A] rounded-[6px] md:rounded-[12px] bg-white p-[12px] md:p-[14px] ">
                <img
                  
                  alt=""
                  src={require("../../../assets/image/productionLine3.png")}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  className="rounded-[6px] md:rounded-[8px]"
                  width={100}
                  height={100}
                  // className="transition-transform duration-300 ease-in-out hover:scale-125"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductionLine;
