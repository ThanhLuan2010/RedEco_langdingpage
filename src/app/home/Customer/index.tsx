import React from "react";
import { Carousel, Row, Col, Typography } from "antd";
import styled from "styled-components";
import Image from "next/image";
import { Box } from "@mui/material";

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

const Customer = () => (
  <Box
    justifyContent={"center"}
    flexDirection={"column"}
    alignItems={"center"}
    display={"flex"}
    sx={{
      backgroundImage:"linear-gradient(90deg, #007BB0, #00366A)",
      paddingTop:"4%",
      paddingBottom:"8%"
    }}
  >
    <Typography
      style={{
        fontSize: "2.5rem",
        lineHeight: "50px",
        fontFamily: "Montserrat",
        fontWeight: "700",
        position: "relative", // Để định vị đường viền
        paddingBottom: "10px", // Khoảng cách giữa chữ và border
        color:"white"
      }}
    >
      OUR CUSTOMER
      {/* Đường viền */}
      <span
        style={{
          position: "absolute",
          bottom: 0, // Đặt đường viền sát dưới chữ
          left: "50%", // Căn giữa theo chiều ngang
          transform: "translateX(-50%)", // Căn chỉnh chính xác vị trí giữa
          width: "100px", // Chiều rộng của đường viền (ngắn hơn width chữ)
          height: "5px", // Độ dày của đường viền
          backgroundColor: "#00A859", // Màu sắc của đường viền
        }}
      />
    </Typography>
    <Box marginTop={"60px"} width={"80%"}>
      <Carousel slidesToShow={4} slidesToScroll={4} dots={false} autoplay>
        {products.map((product, index) => (
          <div key={index}>
            <Box
              sx={{
                backgroundColor:"white",
                marginRight:"30px",
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                paddingY:"20px",
                borderRadius:"7px",
                borderWidth:"2px",
                borderColor:"#00366A"
              }}
            >
              <Image
                style={{
                  objectFit: "contain",
                  height: "80px",
                  width:"80%"
                }}
                alt={product.name}
                src={product.imageUrl}
              />
            </Box>
          </div>
        ))}
      </Carousel>
    </Box>
  </Box>
);

export default Customer;
