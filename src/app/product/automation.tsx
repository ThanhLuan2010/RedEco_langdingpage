import { Typography } from "antd";
import Image from "next/image";

function Automation() {
  return (
    <div className="">
      <div className="flex justify-center mt-20">
        <Typography
          style={{
            fontSize: "2rem",
            lineHeight: "50px",
            fontFamily: "Montserrat",
            fontWeight: "700",
            position: "relative",
            paddingBottom: "10px",
            color: "#00366A",
          }}
        >
          <span
            className="xl:text-[2rem] 2xl:text-[48px] sm:px-[10px] px-[10px] lg:px-[0px] md:px-[0px] xl:px-[0px] flex text-center md:text-[2rem] lg:text-[2rem] 
          sm:text-[28px] justify-center items-center w-[100%] text-[28px]"
          >
            AUTOMATION
          </span>
          <span
            className="lg:h-[5px] xl:h-[5px] md:h-[5px] sm:h-[3px] h-[3px]"
            style={{
              position: "absolute",
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: "100px",
              backgroundColor: "#00A859",
            }}
          />
        </Typography>
      </div>

      <div className="xl:px-[10%] lg:px-[10%] md:px-[10%] sm:px-[6%] px-[4%] mt-[20px] md:mt-[50px] xl:mt-[70px]">
        <div className="border-[2px] xl:flex md:flex lg:flex sm:hidden hidden border-[#00366A] p-[20px] rounded-[12px]">
          <Image
            src={"/image/automation_banner.png"}
            alt=""
            width={100}
            unoptimized
            height={100}
            className="w-[100%] h-[100%]"
          />
        </div>
        <div className="xl:flex lg:flex md:flex hidden overflow-hidden h-[80vh] gap-[35px] mt-[70px]">
          <div className="gap-[35px] overflow-hidden w-[40%] flex flex-col">
            <div className="h-[55%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
              <Image
                alt=""
                unoptimized
                src={"/image/automation1.png"}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
                width={100}
                height={100}
                className="transition-transform duration-300 ease-in-out hover:scale-125"
              />
            </div>
            <div className="h-[45%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
              <Image
                alt=""
                unoptimized
                src={"/image/automation3.png"}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
                className="transition-transform duration-300 ease-in-out hover:scale-125"
                width={100}
                height={100}
              />
            </div>
          </div>

          <div className="gap-[35px] overflow-hidden w-[35%] flex flex-col">
            <div className="h-[55%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
              <Image
                alt=""
                unoptimized
                src={"/image/automation2.png"}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
                className="transition-transform duration-300 ease-in-out hover:scale-125"
                width={100}
                height={100}
              />
            </div>
            <div className="h-[45%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
              <Image
                unoptimized
                alt=""
                src={"/image/automation4.png"}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
                className="transition-transform duration-300 ease-in-out hover:scale-125"
                width={100}
                height={100}
              />
            </div>
          </div>

          <div className="gap-[35px] overflow-hidden w-[25%] flex flex-col">
            <div className="h-[100%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
              <Image
                unoptimized
                alt=""
                src={"/image/automation5.png"}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
                className="transition-transform duration-300 ease-in-out hover:scale-125"
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>

        <div className="md:hidden w-[100%] flex-col flex gap-4 h-[80vh] mt-[30px]">
          <div className="flex h-[50%] gap-4">
            <div className="gap-4 overflow-hidden w-[50%] h-[100%] flex flex-col">
              <div className=" border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px] h-[50%]">
                <Image
                  alt=""
                  unoptimized
                  src={"/image/automation2.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  className="transition-transform duration-300 ease-in-out hover:scale-125"
                  width={100}
                  height={100}
                />
              </div>
              <div className="border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px] h-[50%]">
                <Image
                  alt=""
                  src={"/image/automation4.png"}
                  unoptimized
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  className="transition-transform duration-300 ease-in-out hover:scale-125"
                  width={100}
                  height={100}
                />
              </div>
            </div>

            <div className="h-[100%] w-[50%] border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px] object-fill">
              <Image
                unoptimized
                alt=""
                src={"/image/automation5.png"}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "fill",
                }}
                className="transition-transform duration-300 ease-in-out hover:scale-125"
                width={100}
                height={100}
              />
            </div>
          </div>

          <div className="w-[100%] h-[50%] flex flex-col gap-4">
            <div className="border-[2px] border-[#00366A] p-[20px] rounded-[12px] h-[50%]">
              <Image
                src={"/image/automation_banner.png"}
                alt=""
                width={100}
                unoptimized
                height={100}
                className="w-[100%] h-[100%]"
              />
            </div>

            <div className="gap-4 h-[50%] overflow-hidden w-[100%] flex">
              <div className="h-[100%] w-[50%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white ">
                <Image
                  alt=""
                  unoptimized
                  src={"/image/automation3.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  className="transition-transform duration-300 ease-in-out hover:scale-125"
                  width={100}
                  height={100}
                />
              </div>
              <div className="h-[100%] w-[50%]  border-[2px] border-[#00366A] rounded-[12px] bg-white ">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/automation1.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  className="transition-transform duration-300 ease-in-out hover:scale-125"
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
