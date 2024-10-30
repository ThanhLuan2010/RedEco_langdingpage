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
  <div className="mt-[48px]">
    <Box
      flexDirection={"column"}
      display={"flex"}
      sx={{
        backgroundImage: "linear-gradient(90deg, #007BB0, #00366A)",
        paddingTop: "4%",
        paddingBottom: "8%",
        paddingX: "20px",
      }}
    >
      <div className=" relative">
        <text className="text-[24px]  md:text-[30px] lg:text-[38px] xl:text-[40px] 2xl:text-[48px] font-bold text-white">
          QUALITY STANDARD
          <span className="absolute bottom-[-5px] left-[0px] w-[25%] h-[2px] xl:h-[5px] bg-white" />
        </text>
      </div>

      <div>
        <text>
          In 2022, REDECO Vietnam was granted a quality management system
          certificate according to ISO 9001:2015 standards.
        </text>
      </div>
    </Box>
  </div>
);

export default QualityStandard;
