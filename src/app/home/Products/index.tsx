

import React from 'react';
import { Carousel, Row, Col, Typography } from 'antd';
import styled from 'styled-components';
import Image from 'next/image';
import { Box } from '@mui/material';

const StyledCarousel = styled(Carousel)`
.slick-dots {
  display: flex !important;
  justify-content: center;
  align-items: center;
}

.slick-dots li {
  margin: 0 10px; /* Tạo khoảng cách đều cho các dot không active */
}

.slick-dots li.slick-active {
  margin-left: 0px; /* Không thêm khoảng cách bên trái */
  margin-right: 15px; /* Tạo khoảng cách riêng bên phải để cân đối */
}

.slick-dots li button {
  background-color: #F0F0F0; /* Màu dot không active */
  width: 16px; /* Kích thước chiều rộng */
  height: 16px; /* Kích thước chiều cao */
  border-radius: 50%; /* Bo tròn thành hình tròn */
  transition: all 0.3s ease-in-out; /* Hiệu ứng chuyển đổi mềm mại */
  border: none;
  opacity:1;
  bottom:10px
}

.slick-dots li.slick-active button {
  background: linear-gradient(90deg, #007BB0, #00366A); /* Màu gradient cho dot active */
  width: 40px; /* Chiều rộng dot active */
  height: 20px; /* Chiều cao dot active */
  border-radius: 20px; /* Bo tròn nhẹ cho dot dài */
  border: none;
  bottom:12px
}
`;


const products = [
  { name: 'Machine Details', imageUrl: require("../../../public/image/product1.png") },
  { name: 'Automation', imageUrl: require("../../../public/image/product2.png") },
  { name: 'Plastic Injection', imageUrl: require("../../../public/image/product3.png") },
  { name: 'Silicone Rubber', imageUrl: require("../../../public/image/product4.png") },
  { name: 'Other Products', imageUrl: require("../../../public/image/product5.png") },
];

const CustomCarousel = () => (
  <Box justifyContent={"center"} flexDirection={"column"} alignItems={"center"} display={"flex"}>
    <Typography
      style={{
        fontSize: "2.5rem",
        lineHeight: "50px",
        color: "#00366A",
        fontFamily: "Montserrat",
        fontWeight: "700",
        position: "relative", // Để định vị đường viền
        paddingBottom: "10px", // Khoảng cách giữa chữ và border
      }}
    >
      PRODUCTS
      {/* Đường viền */}
      <span
        style={{
          position: "absolute",
          bottom: 0, // Đặt đường viền sát dưới chữ
          left: "50%", // Căn giữa theo chiều ngang
          transform: "translateX(-50%)", // Căn chỉnh chính xác vị trí giữa
          width: "124px", // Chiều rộng của đường viền (ngắn hơn width chữ)
          height: "5px", // Độ dày của đường viền
          backgroundColor: "#00A859", // Màu sắc của đường viền
        }}
      />
    </Typography>
    <Box marginTop={"90px"} width={"80%"}  >
      <StyledCarousel slidesToShow={4} slidesToScroll={1} dots autoplay>
        {products.map((product, index) => (
          <div key={index}>
            <Box
              sx={{ boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)', marginX: "10px" }}
              marginY={"10px"}
              borderRadius={"20px"}
              bgcolor={"white"}
              // width={"100%"}
              marginBottom={"70px"}
              height={"auto"}
            >
              <Box sx={{ padding: "6% 6% 10% 6%" }}>
                <Box
                  sx={{
                    borderWidth: 2,
                    borderColor: "#00366A",
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                    borderRadius: "12px",
                    height:"150px"
                  }}
                >
                  <Image style={{ objectFit: "contain", maxWidth:"200px",maxHeight:"160px", }} alt={product.name} src={product.imageUrl} />
                </Box>
                <Typography
                  style={{
                    fontSize: "1.5em",
                    fontWeight: 600,
                    textAlign: "center",
                    marginTop: "15px"
                  }}
                >
                  {product.name}
                </Typography>
              </Box>
            </Box>
          </div>
        ))}
      </StyledCarousel>
    </Box>
  </Box>
);

export default CustomCarousel;