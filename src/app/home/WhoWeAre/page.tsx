import { useNavigate } from "react-router-dom";

function WhoWeAre() {
  const navigate = useNavigate();
  const data = [
    {
      image: require("../../../assets/image/ic_area.png"),
      title: "Area of 1860m²",
      description:
        "Established in 2017 with 2 modern factories in Hanoi, covering a total area of 1860 m². REDECO Vietnam Industrial Solutions JSC is equipped a wide range of advanced machinery ...",
    },
    {
      image: require("../../../assets/image/ic_service.png"),
      title: "Our Services",
      description:
        "REDECO Vietnam JSC offers a wide range of solution tailored as custom machinery development, conveyors and handling solutions, logistics support equipment, automation ...",
    },
    {
      image: require("../../../assets/image/ic_leading.png"),
      title: "Our Leading",
      description:
        "REDECO Vietnam JSC provide solutions to the customer in many industries, specializing in manufacturing, designing and supplying equipment in mechanical processing ...",
    },
  ];
  return (
    <div className="bg-[#F7F9F9]">
      <div className="relative w-[100%]">
        <div className="md:hidden">
          <img
            style={{
              height: "100%",
              position: "relative",
              objectFit: "fill",
              width: "100vw",
            }}
            width={100}
            height={100}
            alt="image"
            src={require("../../../assets/image/who_we_are_banner_mobile.png")}
            // src={require("../../../assetsimage/who_we_are_banner.png")}
          />
        </div>

        <div className="hidden md:flex">
          <img
            style={{
              height: "100%",
              position: "relative",
              objectFit: "fill",
              width: "100vw",
            }}
            alt="image"
            src={require("../../../assets/image/who_we_are_banner.png")}
            width={100}
            height={100}
          />
        </div>

        <div className="absolute top-0 left-0 flex flex-col text-white px-[10%] h-[100%] justify-center items-start w-[100%] lg:w-[45%]">
          <text className="text-[24px] md:text-[30px] lg:text-[40px] 2xl:text-[50px] font-bold leading-[30px] md:leading-[40px] lg:leading-[55px] xl:leading-[73px]">
            Who are we?
          </text>
          <text className="text-[12px] md:text-[14px] lg:text-[16px] xl:text-[16px] mt-[10px]  2xl:mt-[20px] leading-[14.63px] md:leading-[20px] lg:leading-[30px] xl:leading-[26px]">
            Welcome to REDECO Vietnam Industrial Solutions JSC
          </text>
          <button
            onClick={() => navigate("/about-us")}
            className="
            bg-gradient-to-br from-[#28FF90] -7.86% to-[#00954F] 67.26% 
            py-[10px] 
            rounded-[8px] 
            text-[9px] md:text-[12px] ld:text-[15px] xl:text-[16px] 2xl:text-[18px]
            mt-[25px]
            md:mt-[30px]
            lg:mt-[40px]
            w-[30%]
            md:w-[40%]
            lg:w-[65%]
            font-Montserrat
            font-semibold
            "
          >
            ABOUT US
          </button>
        </div>

        <div className="relative lg:absolute right-0 h-[100%] w-[50%] bottom-[-0px]  justify-center  hidden lg:flex">
          <div
            className="
            flex flex-col lg:flex-row lg:absolute 
            lg:left-0 h-[100%] overflow-hidden md:gap-[10px] lg:gap-[20px] xl:gap-[30px] 2xl:gap-[35px] 
            w-[100%] translate-x-[-20%] justify-center items-center cursor-pointer"
            onClick={() => navigate("/about-us")}
          >
            {data.map((item, index) => (
              <div
                className="bg-white opacity-[0.9] lg:px-[16px] 2xl:px-[20px] pb-[10px] 2xl:pb-[20px] rounded-[12px] pt-[10px] w-[100%] px-[25px] py-[25px] mt-[25px] overflow-hidden max-h-[50vh] h-[65%] 2xl:h-[60%]"
                style={{ boxShadow: "0 0 10px 5px #7B7A7A0F" }}
                key={index}
              >
                <div className="h-full ">
                  <div className="h-[80%] overflow-hidden ">
                    <div className="flex justify-between w-full items-center ">
                      <div className="xl:w-[30%] lg:w-[25%] w-[15%] ">
                        <img alt="" src={item.image} width={100} height={100} />
                      </div>
                      <p className="text-[70px] 2xltext-[80px] text-[#00366A] opacity-[0.1] font-normal leading-[100%] ">
                        0{index + 1}
                      </p>
                    </div>

                    <div className="flex flex-col mt-[20px] md:mt-[18px] lg:mt-[20px] 2xl:mt-[30px]">
                      <text className="text-[#00366A] text-[20px] md:text-[22px] 2xl:text-[32px] font-semibold leading-[100%] line-clamp-1">
                        {item.title}
                      </text>
                      <text
                        className="opacity-[0.7] mt-[10px] 
                      text-[13px] 2xl:text-[18px] line-clamp-4 lg:line-clamp-5 xl:line-clamp-[7] text-[#252724] font-extralight leading-[20px] 2xl:leading-[26px]"
                      >
                        {item.description}
                      </text>
                    </div>
                  </div>

                  <div className="flex border-[#00366a59] border-t-[1px] mt-[18px] pt-[18px] items-center">
                    <button className="text-[#00366A] text-[14px] 2xl:text-[18px] mr-[8px] flex items-center">
                      Read More
                      <div className="w-[16px] mt-[2px]">
                        <img
                          style={{ objectFit: "contain" }}
                          alt=""
                          src={require("../../../assets/image/Arrow 1.png")}
                          width={12}
                          height={1}
                          className="ml-[5px]"
                        />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-[20px] flex flex-col md:hidden">
        {data.map((item, index) => (
          <div
            className="bg-[#FFFFFFE5] lg:px-[16px] xl:px-[20px] pb-[20px] rounded-[12px] pt-[10px] w-[100%] px-[25px] py-[25px] mt-[25px] overflow-hidden"
            style={{ boxShadow: "0 0 10px 5px #7B7A7A0F" }}
            key={index}
          >
            <div className="h-full">
              <div className="h-[80%] overflow-hidden ">
                <div className="flex justify-between w-full items-center ">
                  <div className="xg:w-[30%] lg:w-[25%] w-[20%] ">
                    <img alt="" src={item.image} width={100} height={100} />
                  </div>
                  <text className="text-[80px] text-[#00366A] font-Nunito opacity-[0.08] leading-[100%] font">
                    0{index + 1}
                  </text>
                </div>

                <div className="flex flex-col mt-[20px]">
                  <text className="text-[#00366A] text-[20px] md:text-[16px] lg:text-[18px] xl:text-[20px] font-semibold leading-[24px] line-clamp-1">
                    {item.title}
                  </text>
                  <text className="mt-[12px] line-clamp-4 text-[em] leading-[20px]">
                    {item.description}
                  </text>
                </div>
              </div>

              <div className="flex border-[#00366a59] border-t-[1px] mt-[18px] pt-[18px]">
                <button className="text-[#00366A] text-[18px] mr-[8px] flex items-center ">
                  <text>Read More</text>
                  <div className="w-[16px] ml-[10px]">
                    <img
                      style={{ objectFit: "contain" }}
                      alt=""
                      src={require("../../../assets/image/Arrow 1.png")}
                      width={100}
                      height={100}
                      className="w-[100%] h-[100%]"
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhoWeAre;
