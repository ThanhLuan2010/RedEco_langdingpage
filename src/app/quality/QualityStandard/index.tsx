import { Box } from "@mui/material";
import { Carousel } from "antd";
import Image from "next/image";

const products = [
  { name: "customer", imageUrl: require("../../../public/image/customer.png") },
  {
    name: "customer1",
    imageUrl: require("../../../public/image/customer1.png"),
  },
  {
    name: "customer2",
    imageUrl: require("../../../public/image/customer2.png"),
  },
  {
    name: "customer3",
    imageUrl: require("../../../public/image/customer3.png"),
  },
  {
    name: "customer4",
    imageUrl: require("../../../public/image/customer4.png"),
  },
  {
    name: "customer5",
    imageUrl: require("../../../public/image/customer5.png"),
  },
  {
    name: "customer6",
    imageUrl: require("../../../public/image/customer6.png"),
  },
  {
    name: "customer8",
    imageUrl: require("../../../public/image/customer8.png"),
  },
  {
    name: "customer9",
    imageUrl: require("../../../public/image/customer9.png"),
  },
  {
    name: "customer10",
    imageUrl: require("../../../public/image/customer10.png"),
  },
  {
    name: "customer11",
    imageUrl: require("../../../public/image/customer11.png"),
  },
  {
    name: "customer12",
    imageUrl: require("../../../public/image/customer12.png"),
  },
  {
    name: "customer13",
    imageUrl: require("../../../public/image/customer13.png"),
  },
  {
    name: "customer14",
    imageUrl: require("../../../public/image/customer14.png"),
  },
  {
    name: "customer15",
    imageUrl: require("../../../public/image/customer15.png"),
  },
  {
    name: "customer16",
    imageUrl: require("../../../public/image/customer16.png"),
  },
];

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
        slidesToShow: 3, // Hiển thị 2 slides
      },
    },
    {
      breakpoint: 576, // Mobile (tối đa 576px)
      settings: {
        slidesToShow: 2, // Hiển thị 1 slide
      },
    },
  ],
};

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
          <div>
            <div className="relative">
              <text className="text-[24px]  md:text-[30px] lg:text-[38px] xl:text-[40px] 2xl:text-[48px] font-bold text-white">
                QUALITY STANDARD
                <span className="absolute bottom-[-5px] left-[0px] w-[25%] h-[2px] xl:h-[5px] bg-white" />
              </text>
            </div>
            <div className="mt-[28px] md:mt-[32px] lg:mt-[35px] 2xl:mt-[40px]">
              <text className="text-[white] 2xl:text-[20px] xl:text-[18px] md:text-[16px]">
                In 2022, REDECO Vietnam was granted a quality management system
                certificate according to ISO<br className="hidden md:flex"/> 9001:2015 standards.
              </text>
            </div>
          </div>

          <div className="mt-[50px] w-[80%]">
            <Image
              alt=""
              style={{ width: "100%", height: "100%" }}
              src={require("../../../public/image/logo-gray.png")}
            />
          </div>
        </div>

        <div className="w-1/2 h-[100%] items-center flex justify-center">
          <div className="w-[50%] h-[80%] flex justify-center items-center">
            <Image
              style={{ height: "100%", width: "100%", objectFit: "contain" }}
              alt=""
              src={require("../../../public/image/iso-text.png")}
            />
          </div>
        </div>
      </div>

      <div className="px-[20px] py-[36px] flex md:hidden flex-col">
        <div className="relative">
          <text className="text-[24px] sm:text-[28px] md:text-[30px] lg:text-[38px] xl:text-[40px] 2xl:text-[48px] font-bold text-white">
            QUALITY STANDARD
            <span className="absolute bottom-[-5px] left-[0px] w-[25%] h-[2px] xl:h-[5px] bg-white" />
          </text>
        </div>
        <div className="flex gap-[20px] mt-[20px] md:hidden">
          <div className="w-[60%] ">
            <text className="text-[white]">
              In 2022, REDECO Vietnam was granted a quality management system
              certificate according to ISO 9001:2015 standards.
            </text>
            <Image
              alt=""
              className="mt-[10px]"
              src={require("../../../public/image/logo-gray.png")}
            />
          </div>
          <div className="w-[40%]">
            <Image alt="" src={require("../../../public/image/iso-text.png")} />
          </div>
        </div>
      </div>
    </Box>
  </div>
);

export default QualityStandard;
