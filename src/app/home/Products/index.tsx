import React from "react";
import { Carousel } from "antd";
import styled from "styled-components";
import Image from "next/image";
import { Box } from "@mui/material";

const StyledCarousel = styled(Carousel)`
  .slick-dots {
    display: flex !important;
    justify-content: center;
    align-items: center;
    bottom: -40px;
  }

  .slick-dots li {
    margin: 0 10px; /* Tạo khoảng cách đều cho các dot không active */
  }

  .slick-dots li.slick-active {
    margin-left: 0px; /* Không thêm khoảng cách bên trái */
    margin-right: 15px; /* Tạo khoảng cách riêng bên phải để cân đối */
  }

  .slick-dots li button {
    background-color: #f0f0f0; /* Màu dot không active */
    width: 16px; /* Kích thước chiều rộng */
    height: 16px; /* Kích thước chiều cao */
    border-radius: 50%; /* Bo tròn thành hình tròn */
    transition: all 0.3s ease-in-out; /* Hiệu ứng chuyển đổi mềm mại */
    border: none;
    opacity: 1;
    bottom: 10px;
  }

  .slick-dots li.slick-active button {
    background: linear-gradient(
      90deg,
      #007bb0,
      #00366a
    ); /* Màu gradient cho dot active */
    width: 40px; /* Chiều rộng dot active */
    height: 20px; /* Chiều cao dot active */
    border-radius: 20px; /* Bo tròn nhẹ cho dot dài */
    border: none;
    bottom: 12px;
  }
  /* Ẩn dots khi màn hình dưới 768px */
  @media (max-width: 68px) {
    .slick-dots li.slick-active button {
      width: 20px; /* Chiều rộng dot active */
      height: 8px; /* Chiều cao dot active */
    }
    .slick-dots li button {
      width: 6px; /* Kích thước chiều rộng */
      height: 6px; /* Kích thước chiều cao */
    }

    .slick-dots {
      bottom: -28px;
    }
  }
  @media (max-width: 992px) {
    .slick-dots li.slick-active button {
      width: 20px; /* Chiều rộng dot active */
      height: 8px; /* Chiều cao dot active */
    }
    .slick-dots li button {
      width: 6px; /* Kích thước chiều rộng */
      height: 6px; /* Kích thước chiều cao */
    }

    .slick-dots {
      bottom: -28px;
    }
  }

  @media (max-width: 1200px) {
    .slick-dots li.slick-active button {
      width: 20px; /* Chiều rộng dot active */
      height: 8px; /* Chiều cao dot active */
    }
    .slick-dots li button {
      width: 6px; /* Kích thước chiều rộng */
      height: 6px; /* Kích thước chiều cao */
    }

    .slick-dots {
      bottom: -28px;
    }
  }
`;

const products = [
  {
    name: "Machine Details",
    imageUrl: require("../../../public/image/product1.png"),
  },
  {
    name: "Automation",
    imageUrl: require("../../../public/image/product2.png"),
  },
  {
    name: "Plastic Injection",
    imageUrl: require("../../../public/image/product3.png"),
  },
  {
    name: "Silicone Rubber",
    imageUrl: require("../../../public/image/product4.png"),
  },
  {
    name: "Other Products",
    imageUrl: require("../../../public/image/product5.png"),
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4, // Số slides mặc định
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200, // Màn hình lớn (tối đa 1200px)
      settings: {
        slidesToShow: 3, // Hiển thị 3 slides
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
        slidesToShow: 2, // Hiển thị 1 slide
      },
    },
  ],
};

const CustomCarousel = () => (
  <div className="bg-[#F7F9F9] flex flex-col items-center justify-center mt-[40px] sm:mt-[50px] md:mt-[60px] lg:mt-[80px] xl:mt-[100px] 2xl:mt-[130px]">
    <text className="text-[24px] md:text-[1.5rem] lg:text-[2rem] xl:text-[2.5rem] font-bold text-[#00366A] relative">
      PRODUCTS
      <span className="absolute bottom-0 left-[50%] translate-x-[-50%] w-[50%] h-[2px] xl:h-[5px] bg-[#00A859]" />
    </text>
    <div className="bg-[#F7F9F9] w-full px-[20px] lg:px-[7%] xl:px-[10%] mt-[16px] md:mt-[36px] lg:mt-[56px] xl:mt-[79px]">
      <Box width={"100%"}>
        <StyledCarousel style={{ height: "100%" }} autoplay {...settings}>
          {products.map((product, index) => (
            <div key={index} className="bg-[#F7F9F9]">
              <div
                style={{ boxShadow: "0 0 10px 5px #7B7A7A0F " }}
                className="mx-[10px] rounded-[20px] my-[10px] h-[20vh] sm:h-[30vh] md:h-[35vh] lg:h-[40vh]"
              >
                <div className="h-[100%] px-[12px] py-[12px] text-center">
                  <div className="border-[2px] border-[#00366A] rounded-[12px] flex justify-center items-center h-[70%] ">
                    <Image
                      style={{
                        objectFit: "contain",
                        width: "80%",
                        height: "80%",
                      }}
                      alt={product.name}
                      src={product.imageUrl}
                    />
                  </div>
                  <div className="h-[30%] flex justify-center items-center">
                    <text className="text-[14px] md:text-[24px] lg:text-[1.5] xl:text-[2em] font-semibold text-center text-[#00366A]">
                      {product.name}
                    </text>
                  </div>
                </div>
              </div>

              {/* </Box> */}
            </div>
          ))}
        </StyledCarousel>
      </Box>
    </div>
  </div>
);

export default CustomCarousel;
