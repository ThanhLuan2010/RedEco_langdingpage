import { Box } from "@mui/material";
import { Carousel } from "antd";
import Image from "next/image";

const products = [
  { name: "human1", imageUrl: "/image/human1.png" },
  { name: "human2", imageUrl: "/image/human2.png" },
  { name: "human3", imageUrl: "/image/human3.png" },
  { name: "human4", imageUrl: "/image/human4.png" },
  { name: "human5", imageUrl: "/image/human5.png" },
];

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3, // Số slides mặc định
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1900, // Màn hình lớn (tối đa 1200px)
      settings: {
        slidesToShow: 3, // Hiển thị 3 slides
      },
    },
    {
      breakpoint: 1200, // Màn hình lớn (tối đa 1200px)
      settings: {
        slidesToShow: 3, // Hiển thị 3 slides
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

const Human = () => (
  <div className="flex flex-col justify-center items-center pt-[40px] sm:pt-[50px] md:pt-[70px] lg:pt-[90px] xl:pt-[110px] 2xl:pt-[200px] px-[20px] md:px-[5%] xl:px-[10%] bg-[#F7F9F9]">
    <text className="text-[24px] md:text-[30px] lg:text-[38px] xl:text-[40px] 2xl:text-[48px] font-bold text-[#00366A] relative">
      HUMAN RESOURCES
      <span className="absolute bottom-0 left-[50%] translate-x-[-50%] w-[50%] h-[2px] xl:h-[5px] bg-[#00A859]" />
    </text>
    <Box marginTop={"50px"} width={"100%"}>
      <Carousel {...settings} autoplay>
        {products.map((product, index) => (
          <div key={index} className="mr-[18px]">
            <Box
              sx={{
                margin: "0 10px",
                md: { margin: "0 20px" },
                xl: { margin: "0 30px" },
                "2xl": { margin: "0 40px" },
              }}
            >
              <Image
                style={{ objectFit: "contain" }}
                alt={product.name}
                src={product.imageUrl}
                width={100}
                className="w-[100%]"
                height={100}
                unoptimized
              />
            </Box>
          </div>
        ))}
      </Carousel>
    </Box>
  </div>
);

export default Human;
