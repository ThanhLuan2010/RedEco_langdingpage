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

const QualityStandard = () => (
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
      QUALITY STANDARD
      <span
        style={{
          position: "absolute",
          bottom: 0, // Đặt đường viền sát dưới chữ
          left: "50%", // Căn giữa theo chiều ngang
          transform: "translateX(-50%)", // Căn chỉnh chính xác vị trí giữa
          width: "200px", // Chiều rộng của đường viền (ngắn hơn width chữ)
          height: "5px", // Độ dày của đường viền
          backgroundColor: "#00A859", // Màu sắc của đường viền
        }}
      />
    </Typography>
    <Box
      marginTop={"30px"}
      width={"80%"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
    >
      <Typography
        style={{ fontSize: "1.2rem", textAlign: "center", width: "70%" }}
      >
        In 2022, REDECO Vietnam Industrial Solutions Joint Stock Company was
        granted a quality management system certificate according to ISO
        9001:2015 standards.
      </Typography>
      <Image
        alt="iso"
        src={require("../../../public/image/iso.png")}
        style={{width:"40%", marginTop:"5%"}}
      />
    </Box>
  </Box>
);

export default QualityStandard;
