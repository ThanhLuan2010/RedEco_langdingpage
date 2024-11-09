import { Box } from "@mui/material";


const QualityStandard = () => (
  <div className="mt-[48px] md:mt-[68px] lg:mt-[88px] xl:110px 2xl:mt-[140px]">
    <Box
      flexDirection={"column"}
      display={"flex"}
      sx={{
        backgroundImage: "linear-gradient(90deg, #007BB0, #00366A)",
        // paddingX: "20px",
        height: "100%",
      }}
    >
      <div className="h-[100%] px-[20px] md:px-[5%] xl:px-[10%] hidden md:flex justify-center items-center">
        <div className="w-1/2 flex flex-col justify-center py-[36px] md:py-[56px] lg:py-[76px] xl:py-[96px] 2xl:py-[104px]">
          <div className="w-[80%]">
            <div className="relative">
              <text className="text-[24px] md:text-[30px] lg:text-[38px] 2xl:text-[40px]  font-bold text-white">
                QUALITY STANDARD
                <span className="absolute md:bottom-[-5px] left-[0px] w-[25%] h-[2px] xl:h-[5px] bg-white" />
              </text>
            </div>
            <div className="mt-[28px] md:mt-[32px] lg:mt-[35px] 2xl:mt-[40px]">
              <text className="text-[white] 2xl:text-[20px] xl:text-[18px] md:text-[16px]">
                In 2022, REDECO Vietnam was granted a quality management system
                certificate according to ISO 9001:2015 standards.
              </text>
            </div>
          </div>

          <div className="mt-[50px] w-[80%]">
            <img
              
              alt=""
              style={{ width: "100%", height: "100%" }}
              src={require("../../../assets/image/logo-gray.png")}
              width={100}
              height={100}
            />
          </div>
        </div>

        <div className="w-1/2 h-[100%] items-center flex justify-center">
          <div className="w-[65%] h-[80%] flex justify-center items-center">
            <img
              
              style={{ height: "100%", width: "100%", objectFit: "contain" }}
              alt=""
              src={require("../../../assets/image/iso-text.png")}
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>

      <div className="px-[20px] py-[36px] flex md:hidden flex-col">
        <div className="relative">
          <text className="text-[24px] sm:text-[28px] md:text-[30px] lg:text-[38px] xl:text-[40px] 2xl:text-[48px] font-bold text-white">
            QUALITY STANDARD
            <span className="absolute bottom-[-0px] left-[0px] w-[20%] h-[2px] xl:h-[5px] bg-white" />
          </text>
        </div>
        <div className="flex gap-[20px] mt-[20px] md:hidden">
          <div className="w-[60%] ">
            <text className="text-[white] text-[13px]">
              In 2022, REDECO Vietnam was granted a quality management system
              certificate according to ISO 9001:2015 standards.
            </text>
            <img
              
              alt=""
              className="mt-[10px] w-[100%]"
              src={require("../../../assets/image/logo-gray.png")}
              width={100}
              height={100}
            />
          </div>
          <div className="w-[40%]">
            <img
              
              alt=""
              src={require("../../../assets/image/iso-text.png")}
              width={100}
              height={100}
              className="w-[100%]"
            />
          </div>
        </div>
      </div>
    </Box>
  </div>
);

export default QualityStandard;
