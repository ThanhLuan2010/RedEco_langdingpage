"use client";
import { Carousel } from "antd";

import React, { useState } from "react";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2, // Số slides mặc định
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 2000, // Màn hình lớn (tối đa 2000px)
      settings: {
        slidesToShow: 4, // Hiển thị 3 slides
      },
    },
    {
      breakpoint: 1200, // Màn hình lớn (tối đa 1200px)
      settings: {
        slidesToShow: 4, // Hiển thị 3 slides
      },
    },
    {
      breakpoint: 992, // Tablet (tối đa 992px)
      settings: {
        slidesToShow: 2, // Hiển thị 2 slides
      },
    },
    {
      breakpoint: 576, // Mobile (tối đa 576px)
      settings: {
        slidesToShow: 1, // Hiển thị 1 slide
      },
    },
  ],
};

function Content() {
  const [isShowMore, setIsShowMore] = useState<boolean>(false);

  const dataHistory = [
    {
      year: "2017",
      title: "REDECO Vietnam",
      description: "Redeco Vietnam established in October 2017",
    },
    {
      year: "2018",
      title: "Factory 1 Operation",
      description:
        "Set the Sales - Marketing office at address 213 Nguyen Khang",
    },
    {
      year: "2021",
      title: "Factory 2 Operation",
      description:
        "Moved business headquarters to Duc Thuong commune, Hoai Duc district",
    },
    {
      year: "2022",
      title: "Signed MoU",
      description: "REDECO receive internship to trained skills",
    },
    {
      year: "2023",
      title: "Update 5S Level",
      description: "Building Quality Control System for all factories",
    },
    {
      year: "2024",
      title: "Development",
      description: "Prepare a plan to expand twice area of the factory 2",
    },
  ];
  return (
    <>
      <div className="flex flex-col md:flex-row px-[20px] md:px-[5%] xl:px-[10%] mt-[40px] md:mt-[60px] lg:mt-[8px] xl:mt-[100px] 2xl:mt-[140px] items-end ">
        <div className="w-[100%] md:w-[50%] flex  flex-col items-center">
          <div className="justify-center flex items-center ">
            <text className="text-[24px] md:text-[30px] lg:text-[38px] xl:text-[40px] 2xl:text-[48px] font-bold md:pb-[4px] relative text-[#00366A]">
              ABOUT US
              <span className="absolute bottom-0 left-[50%] translate-x-[-50%] w-[50%] h-[2px] xl:h-[5px] bg-[#00A859]" />
            </text>
          </div>

          <div
            className="
            mt-[18px] md:mt-[28px] lg:mt-[36px] xl:mt-[40px] 2xl:mt-[46px] 
            leading-[20px] md:leading-[22px] lg:leading-[28px] 2xl:leading-[36px]
            text-[14px] md:text-[15px] lg:text-[16px] 2xl:text-[20px]
            "
          >
            <div>
              <text>
                Established in 2017, REDECO Vietnam has become a trusted name in
                supporting industries by providing high-quality machinery and
                components for manufacturing processes. We specialize in
                designing, manufacturing, and supplying equipment that enhances
                operational efficiency and production quality across various
                industries.
              </text>
            </div>

            <div className="mt-[16px]">
              <text>
                At REDECO VIETNAM, we always take reputation as a goal; we take
                pride in helping our clients achieve operational excellence
                through innovative solutions, industry expertise, and a
                customer-first approach.
              </text>
            </div>

            {isShowMore && (
              <div className="mt-[16px]">
                <text>
                  REDECO has two modern factories covering a total area of
                  1860m² while factory 1: 1000m² and factory 2: 860m², equipped
                  with a wide range of advanced machinery.
                </text>
              </div>
            )}
          </div>

          {!isShowMore && (
            <div
              className="
              relative
              rounded-[6px] md:rounded-[10px] 
              border-transparent
              bg-gradient-to-r from-[#007BB0] to-[#00366A]
              w-[30%] md:w-[40%]
              p-[1px] md:p-[2px]
              mt-[24px] md:mt-[26px] lg:mt-[32px] 2xl:mt-[48px]
              "
            >
              <div
                className="
                bg-white 
                flex justify-center 
                py-[10px] md:py-[12px] lg:py-[14px] xl:py-[14px] 2xl:py-[18px]
                rounded-[6px] md:rounded-[8px]"
              >
                <button
                  onClick={() => setIsShowMore(!isShowMore)}
                  className="text-[10px] md:text-[12px] lg:text-[14px] 2xl:text-[20px] text-[#00366A] font-semibold md:font-medium"
                >
                  MORE DETAIL
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="w-[100%] md:w-1/2 flex justify-end">
          <img
            alt=""
            src={require("../../../assets/image/aboutUs/abouu-us1.png")}
            width={100}
            height={100}
            className="w-[100%] md:w-[80%] h-[100%] object-contain mt-[40px] md:mt-0"
          />
        </div>
      </div>
      {isShowMore && (
        <div
          style={{
            backgroundImage: "url('/image/aboutUs/bg_customer.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="hidden md:flex items-center justify-center flex-col pb-[60px] md:pb-[75px] 2xl:pb-[110px] mt-[48px] md:mt-[60px] lg:mt-[80px] xl:mt-[100px] 2xl:mt-[139px] px-[20px] md:px-[5%] xl:px-[10%]"
        >
          <text className="text-[24px] md:text-[30px] lg:text-[38px] 2xl:text-[48px] font-bold relative text-white mt-[32px] md:mt-[42px] lg:mt-[53px] xl:mt-[65px] 2xl:mt-[90px]">
            REDECO’S HISTORY
            <span className="absolute bottom-0 left-[50%] translate-x-[-50%] w-[30%] md:w-[50%] h-[2px] xl:h-[5px] bg-white" />
          </text>

          <div className="grid grid-cols-3 md:gap-y-[60px] md:mt-[50px] 2xl:mt-[70px]">
            {dataHistory?.map((item: any, index: number) => (
              <div key={index} className="text-center flex flex-col">
                <text className="text-[#28FF90] text-[40px] 2xl:text-[56px] font-bold line-clamp-1">
                  {item.year}
                </text>
                <text className="text-white text-[20px] md:text-[30px] 2xl:text-[40px] font-semibold line-clamp-1">
                  {item.title}
                </text>
                <text className="text-white text-[16px] 2xl:text-[20px]  px-[10%] line-clamp-2">
                  {item.description}
                </text>
              </div>
            ))}
          </div>
        </div>
      )}

      {isShowMore && (
        <div
          style={{
            backgroundImage: "url('/image/aboutUs/bg_customer.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className=" md:hidden flex items-center justify-center flex-col pb-[60px] md:pb-[75px] 2xl:pb-[110px] mt-[48px] md:mt-[60px] lg:mt-[80px] xl:mt-[100px] 2xl:mt-[139px] px-[20px] md:px-[5%] xl:px-[10%]"
        >
          <text className="text-[24px] md:text-[30px] lg:text-[38px] xl:text-[40px] 2xl:text-[48px] font-bold relative text-white mt-[32px] md:mt-[42px] lg:mt-[53px] xl:mt-[65px] 2xl:mt-[90px]">
            REDECO’S HISTORY
            <span className="absolute bottom-0 left-[50%] translate-x-[-50%] w-[30%] md:w-[50%] h-[2px] xl:h-[5px] bg-white" />
          </text>

          <div className="grid grid-cols-1 md:gap-y-[60px] mt-[30px] md:mt-[50px] 2xl:mt-[70px]">
            <Carousel {...settings} autoplay>
              {dataHistory?.map((item: any, index: number) => (
                <div key={index} className="text-center flex flex-col w-[100%]">
                  <text className="text-[#28FF90] text-[40px] 2xl:text-[56px] font-bold line-clamp-1">
                    {item.year}
                  </text>
                  <text className="text-white text-[20px] md:text-[30px] 2xl:text-[40px] font-semibold line-clamp-1">
                    {item.title}
                  </text>
                  <text className="text-white text-[16px] 2xl:text-[20px]  px-[10%] line-clamp-2">
                    {item.description}
                  </text>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      )}

      {isShowMore && (
        <div className="flex items-center justify-center flex-col pb-[60px] md:pb-[75px] 2xl:pb-[110px] mt-[20px] md:mt-[45px] lg:mt-[50px] px-[20px] md:px-[5%] xl:px-[10%]">
          <text className="text-[24px] md:text-[30px] lg:text-[38px] xl:text-[40px] 2xl:text-[48px] font-bold relative text-[#00366A] mt-[32px] md:mt-[42px] lg:mt-[53px] xl:mt-[65px] 2xl:mt-[90px]">
            ORGANIZATIONAL CHART
            <span className="absolute bottom-0 left-[50%] translate-x-[-50%] w-[20%] md:w-[50%] h-[2px] xl:h-[5px] bg-[#00A859]" />
          </text>

          <div className="mt-[24px] md:mt-[35px] lg:mt-[50px] xl:mt-[60px] 2xlmd:mt-[80px]">
            <img
              alt=""
              src={require("../../../assets/image/aboutUs/tree.png")}
              width={100}
              height={100}
              className="w-[100%] h-[100%] object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Content;
