import React from "react";
import { Carousel, Row, Col, Typography } from "antd";
import styled from "styled-components";
import Image from "next/image";
import { Box } from "@mui/material";

const products = [
  { name: "human1", imageUrl: require("../../../public/image/human1.png") },
  { name: "human2", imageUrl: require("../../../public/image/human2.png") },
  { name: "human3", imageUrl: require("../../../public/image/human3.png") },
  { name: "human4", imageUrl: require("../../../public/image/human4.png") },
  { name: "human5", imageUrl: require("../../../public/image/human5.png") },
];

const Human = () => (
  <Box
    justifyContent={"center"}
    flexDirection={"column"}
    alignItems={"center"}
    display={"flex"}
  >
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
      HUMAN RESOURCES
      <span
        style={{
          position: "absolute",
          bottom: 0, // Đặt đường viền sát dưới chữ
          left: "50%", // Căn giữa theo chiều ngang
          transform: "translateX(-50%)", // Căn chỉnh chính xác vị trí giữa
          width: "144px", // Chiều rộng của đường viền (ngắn hơn width chữ)
          height: "5px", // Độ dày của đường viền
          backgroundColor: "#00A859", // Màu sắc của đường viền
        }}
      />
    </Typography>
    <Box marginTop={"50px"} width={"80%"}>
      <Carousel slidesToShow={3} slidesToScroll={3} dots={false} autoplay>
        {products.map((product, index) => (
          <div key={index}>
            <Box sx={{width:"90%"}}>
              <Image
                style={{ objectFit: "contain" }}
                alt={product.name}
                src={product.imageUrl}
              />
              {/* <Box sx={{ padding: "6% 6% 10% 6%" }}>
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
              </Box> */}
            </Box>
          </div>
        ))}
      </Carousel>
    </Box>
  </Box>
);

export default Human;
