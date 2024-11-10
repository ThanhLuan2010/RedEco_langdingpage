import React from "react";
import { Carousel } from "antd";
import styled from "styled-components";

import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const StyledCarousel = styled(Carousel)`
  .slick-dots {
    display: flex !important;
    justify-content: center;
    align-items: center;
    bottom: -40px;
  }

  .slick-dots li {
    margin: 0 3px; /* Tạo khoảng cách đều cho các dot không active */
  }

  .slick-dots li.slick-active {
    margin-left: 0px; /* Không thêm khoảng cách bên trái */
    margin-right: 15px; /* Tạo khoảng cách riêng bên phải để cân đối */
  }

  .slick-dots li button {
    background-color: #dadada; /* Màu dot không active */
    width: 12px; /* Kích thước chiều rộng */
    height: 12px; /* Kích thước chiều cao */
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
    width: 35px; /* Chiều rộng dot active */
    height: 15px; /* Chiều cao dot active */
    border-radius: 20px; /* Bo tròn nhẹ cho dot dài */
    border: none;
    bottom: 12px;
    margin-right: 10px;
  }
  /* Ẩn dots khi màn hình dưới 768px */
  @media (max-width: 768px) {
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
    .slick-dots li {
      margin: 0px; /* Tạo khoảng cách đều cho các dot không active */
    }
    .slick-dots {
      bottom: -28px;
    }
    .slick-dots li.slick-active {
      margin-left: 0px; /* Không thêm khoảng cách bên trái */
      margin-right: 0px; /* Tạo khoảng cách riêng bên phải để cân đối */
      top: 1px;
    }
  }
`;

const products = [
  {
    name: "Machine Details",
    imageUrl: require("../../../assets/image/product1.png"),
    hash: "machine-details",
  },
  {
    name: "Automation",
    imageUrl: require("../../../assets/image/product2.png"),
    hash: "automation",
  },
  {
    name: "Plastic Injection",
    imageUrl: require("../../../assets/image/product3.png"),
    hash: "plastic-injection",
  },
  {
    name: "Silicone Rubber",
    imageUrl: require("../../../assets/image/product4.png"),
    hash: "silicone-rubber",
  },
  {
    name: "Other Products",
    imageUrl: require("../../../assets/image/product5.png"),
    hash: "other-products",
  },
];

const settings = {
  dots: true,
  infinite: true,
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

const CustomCarousel = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#F7F9F9] flex flex-col items-center justify-center pt-[40px] sm:pt-[50px] md:pt-[60px] lg:pt-[80px] xl:pt-[120px] 2xl:pt-[140px]">
      <text className="text-[24px] md:text-[1.5rem] lg:text-[2rem] xl:text-[2.5rem] font-bold text-[#00366A] relative">
        PRODUCTS
        <span className="absolute bottom-[-2px] left-[50%] translate-x-[-50%] w-[50%] h-[2px] xl:h-[4px] 2xl:h-[5px] bg-[#00A859]" />
      </text>

      <div className="bg-[#F7F9F9] w-full px-[20px] lg:px-[7%] xl:px-[10%] mt-[16px] md:mt-[36px] lg:mt-[50px] 2xl:mt-[60px]">
        <Box width={"100%"}>
          <StyledCarousel autoplaySpeed={2850} speed={950} style={{ height: "100%" }}  autoplay {...settings}>
            {products.map((product, index) => (
              <div
                onClick={() => navigate(`/product#${product.hash}`)}
                key={index}
                className="bg-[#F7F9F9] cursor-pointer"
              >
                <div
                  style={{
                    backgroundColor: "white",
                  }}
                  className="mx-[10px] rounded-[12px] my-[10px] h-[20vh] sm:h-[35vh] 2xl:h-[35vh] shadow-even"
                >
                  <div className="h-[100%] px-[12px] py-[12px] md:px-[20px] md:py-[20px] text-center">
                    <div className="border-[2px] border-[#00366A] rounded-[10px] flex justify-center items-center h-[70%] ">
                      <img
                        style={{
                          objectFit: "contain",
                          width: "70%",
                          height: "70%",
                        }}
                        width={100}
                        height={100}
                        alt={product.name}
                        src={product.imageUrl}
                        
                      />
                    </div>
                    <div className="h-[30%] flex justify-center items-center">
                      <text className="text-[14px] md:text-[24px] lg:text-[1.5] 2xl:text-[2em] font-semibold text-center text-[#00366A]">
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
};

export default CustomCarousel;
