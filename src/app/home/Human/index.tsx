import { Box } from "@mui/material";
import { Carousel } from "antd";
import "./styles.css";
import styled from "styled-components";

const products = [
  { name: "human1", imageUrl: require("../../../assets/image/human1.png") },
  { name: "human2", imageUrl: require("../../../assets/image/human2.png") },
  { name: "human3", imageUrl: require("../../../assets/image/human3.png") },
  { name: "human4", imageUrl: require("../../../assets/image/human4.png") },
  { name: "human5", imageUrl: require("../../../assets/image/human5.png") },
  { name: "human6", imageUrl: require("../../../assets/image/human6.png") },
];

const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 3, // Số slides mặc định
  slidesToScroll: 3,
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
const StyledCarousel = styled(Carousel)`
 .ant-carousel {
    touch-action: pan-y; /* Chỉ cho phép cuộn dọc mà không bị can thiệp */
  }
`;

const Human = () => (
  <div className="flex flex-col justify-center items-center pt-[40px] sm:pt-[50px] md:pt-[70px] lg:pt-[90px] xl:pt-[110px] 2xl:pt-[120px] px-[20px] md:px-[5%] xl:px-[10%] bg-[#F7F9F9]">
    <text className="text-[24px] md:text-[1.5rem] lg:text-[2rem] xl:text-[2.5rem] font-bold text-[#00366A] relative">
      HUMAN RESOURCES
      <span className="absolute bottom-[-2px] left-[50%] translate-x-[-50%] w-[30%] h-[2px] xl:h-[4px] 2xl:h-[5px] bg-[#00A859]" />
    </text>
    {/* <Box marginTop={"50px"} width={"100%"}> */}
    <div className="w-[100%] mt-[24px] md:mt-[60px] xl:mt-[60px] relative">
      <StyledCarousel swipeToSlide {...settings} autoplaySpeed={2950} speed={1950} autoplay dots={false}  draggable={false}>
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
              <img
                style={{ objectFit: "contain" }}
                alt={product.name}
                src={product.imageUrl}
                width={100}
                className="w-[100%]"
                height={100}
                
              />
            </Box>
          </div>
        ))}
      </StyledCarousel>
      <div className="w-[100%] absolute top-0 left-0 h-full bg-red-500 opacity-0"></div>
    </div>

    {/* </Box> */}
  </div>
);

export default Human;
