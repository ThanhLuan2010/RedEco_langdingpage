import { Typography } from "antd";


function Automation() {
  return (
    <div className="">
      <div className="flex justify-center mt-[40px] md:mt-[60px] lg:mt-[80px] xl:mt-[120px] 2xl:mt-[140px]">
        <Typography
          style={{
            fontFamily: "Montserrat",
            fontWeight: "700",
            position: "relative", // Để định vị đường viền
            color: "#00366A",
          }}
        >
          <span
            className="xl:text-[35px] 2xl:text-[48px] sm:px-[10px]
          px-[10px] lg:px-[0px] md:px-[0px] xl:px-[0px] flex text-center md:text-[2rem] lg:text-[35px] sm:text-[28px] justify-center items-center w-[100%] text-[28px]"
          >
            AUTOMATION
          </span>
          {/* Đường viền */}
          <span
            className="xl:h-[4px] 2xl:h-[5px] md:h-[4px] h-[3px] bottom-[2px] md:bottom-0"
            style={{
              position: "absolute",
              left: "50%", // Căn giữa theo chiều ngang
              transform: "translateX(-50%)", // Căn chỉnh chính xác vị trí giữa
              width: "35%", // Chiều rộng của đường viền (ngắn hơn width chữ)
              backgroundColor: "#00A859", // Màu sắc của đường viền
            }}
          />
        </Typography>
      </div>

      <div className="xl:px-[10%] lg:px-[10%] md:px-[10%] sm:px-[6%] px-[4%] mt-[20px] md:mt-[50px] xl:mt-[60px]">
        <div className="border-[1px] md:border-[2px] xl:flex md:flex lg:flex hidden border-[#00366A] p-[12px] rounded-[8px]">
          <img
            src={require("../../assets/image/automation_banner.png")}
            alt=""
            width={100}
            
            height={100}
            className="w-[100%] h-[100%]"
          />
        </div>

        <div className="md:flex hidden overflow-hidden h-[80vh] gap-[35px] mt-[40px]">
          <div className="gap-[35px] overflow-hidden w-1/3 flex flex-col">
            <div className="h-[50%] overflow-hidden border-[1px] md:border-[2px] border-[#00366A] rounded-[8px] bg-white p-[30px] flex justify-center items-center">
              <img
                alt=""
                
                src={require("../../assets/image/automation1.png")}
                style={{
                  width: "80%",
                  height: "80%",
                  objectFit: "contain",
                }}
                className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                width={100}
                height={100}
              />
            </div>
            <div className="h-[50%] overflow-hidden border-[1px] md:border-[2px] border-[#00366A] rounded-[8px] bg-white p-[30px] flex justify-center items-center">
              <img
                alt=""
                
                src={require("../../assets/image/automation3.png")}
                style={{
                  width: "80%",
                  height: "80%",
                  objectFit: "contain",
                }}
                width={100}
                height={100}
                className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
              />
            </div>
          </div>

          <div className="gap-[35px] overflow-hidden w-1/3 flex flex-col">
            <div className="h-[50%] overflow-hidden border-[1px] md:border-[2px] border-[#00366A] rounded-[8px] bg-white p-[30px] flex justify-center items-center">
              <img
                alt=""
                
                src={require("../../assets/image/automation2.png")}
                style={{
                  width: "80%",
                  height: "80%",
                  objectFit: "contain",
                }}
                className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                width={100}
                height={100}
              />
            </div>
            <div className="h-[50%] overflow-hidden border-[1px] md:border-[2px] border-[#00366A] rounded-[8px] bg-white p-[30px] flex justify-center items-center">
              <img
                
                alt=""
                src={require("../../assets/image/automation4.png")}
                style={{
                  width: "80%",
                  height: "80%",
                  objectFit: "contain",
                }}
                className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                width={100}
                height={100}
              />
            </div>
          </div>

          <div className="gap-[35px] overflow-hidden w-1/3 flex flex-col">
            <div className="h-[100%] overflow-hidden border-[1px] md:border-[2px] border-[#00366A] rounded-[8px] bg-white p-[30px]">
              <img
                
                alt=""
                src={require("../../assets/image/automation5.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
                className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>

        <div className="md:hidden w-[100%] flex-col flex gap-4 h-[80vh] mt-[30px]">
          <div className="flex h-[50%] gap-4">
            <div className="gap-4 overflow-hidden w-[50%] h-[100%] flex flex-col">
              <div className=" border-[1px] md:border-[2px] border-[#00366A] rounded-[6px] bg-white p-[30px] h-[50%]">
                <img
                  alt=""
                  
                  src={require("../../assets/image/automation2.png")}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={100}
                  height={100}
                />
              </div>
              <div className="border-[1px] md:border-[2px] border-[#00366A] rounded-[6px] bg-white p-[30px] h-[50%]">
                <img
                  alt=""
                  src={require("../../assets/image/automation4.png")}
                  
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={100}
                  height={100}
                />
              </div>
            </div>

            <div className="h-[100%] w-[50%] border-[1px] md:border-[2px] border-[#00366A] rounded-[6px] bg-white p-[30px] object-fill">
              <img
                
                alt=""
                src={require("../../assets/image/automation5.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "fill",
                }}
                width={100}
                height={100}
              />
            </div>
          </div>

          <div className="w-[100%] h-[50%] flex flex-col gap-4">
            <div className="border-[1px] md:border-[2px] border-[#00366A] p-[10px] rounded-[6px] h-[50%]">
              <img
                src={require("../../assets/image/automation_banner.png")}
                alt=""
                width={100}
                
                height={100}
                className="w-[100%] h-[100%]"
              />
            </div>

            <div className="gap-4 h-[50%] overflow-hidden w-[100%] flex">
              <div className="h-[100%] w-[50%] overflow-hidden border-[1px] md:border-[2px] border-[#00366A] rounded-[6px] bg-white ">
                <img
                  alt=""
                  
                  src={require("../../assets/image/automation3.png")}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                  width={100}
                  height={100}
                />
              </div>
              <div className="h-[100%] w-[50%] border-[1px] md:border-[2px] border-[#00366A] rounded-[6px] bg-white ">
                <img
                  
                  alt=""
                  src={require("../../assets/image/automation1.png")}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
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
}

export default Automation;
