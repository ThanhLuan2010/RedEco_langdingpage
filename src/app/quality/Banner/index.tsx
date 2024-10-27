import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import { Carousel } from "antd";

export default function Banner() {
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
      background-color: white; /* Màu dot không active */
      width: 16px; /* Kích thước chiều rộng */
      height: 16px; /* Kích thước chiều cao */
      border-radius: 50%; /* Bo tròn thành hình tròn */
      transition: all 0.3s ease-in-out; /* Hiệu ứng chuyển đổi mềm mại */
      border: none;
      opacity: 1;
      bottom: 22px;
    }

    .slick-dots li.slick-active button {
      background: linear-gradient(
        90deg,
        #28ff90,
        #00954f
      ); /* Màu gradient cho dot active */
      width: 40px; /* Chiều rộng dot active */
      height: 20px; /* Chiều cao dot active */
      border-radius: 20px; /* Bo tròn nhẹ cho dot dài */
      border: none;
      bottom: 24px;
    }
  `;

  return (
    <Box sx={{ width: "100vw", position: "relative", height: "90vh" }}>
      <Box width={"100vw"} height={"100%"} sx={{ position: "relative", }}>
        <Image
          style={{ width: "100%", height: "100%" }}
          alt="banner"
          src={require("../../../public/image/quality_banner.png")}
        />
        <Box
          sx={{
            backgroundColor: "#00366A",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            position: "absolute",
            opacity: 0.6,
          }}
        />

        <Box
          sx={{
            position: "absolute",
            width: "80%",
            bottom: "0",
            left: "10%",
            transform: "translateY(50%)", // Căn chỉnh chính xác vị trí giữa
            flexDirection: "row",
            display: "flex",
            justifyContent: "space-between",
            backgroundColor:"red",

          }}
        >
          <Box
            sx={{
              bgcolor: "rgba(255,255,255,0.9)",
              width: "31.5%",
              borderRadius: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              paddingY: "30px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Image
              alt=""
              src={require("../../../public/image/ic_quality.png")}
              style={{ width: "100px", height: "100px", objectFit: "contain" }}
            />
            <Typography
              style={{
                marginTop: "50px",
                fontWeight: "bold",
                color: "#00366A",
                fontSize: "1.7rem",
                textAlign: "center",
                lineHeight: "110%",
              }}
            >
              Product
              <br />
              Integrity
            </Typography>
          </Box>

          <Box
            sx={{
              bgcolor: "rgba(255,255,255,0.9)",
              width: "31.5%",
              borderRadius: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              paddingY: "30px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Image
              alt=""
              src={require("../../../public/image/ic_quality2.png")}
              style={{ width: "100px", height: "100px", objectFit: "contain" }}
            />
            <Typography
              style={{
                marginTop: "50px",
                fontWeight: "bold",
                color: "#00366A",
                fontSize: "1.7rem",
                textAlign: "center",
                lineHeight: "110%",
              }}
            >
              Precision
              <br />
              Assurance
            </Typography>
          </Box>

          <Box
            sx={{
              bgcolor: "rgba(255,255,255,0.9)",
              width: "31.5%",
              borderRadius: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              paddingY: "30px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Image
              alt=""
              src={require("../../../public/image/ic_quality3.png")}
              style={{ width: "100px", height: "100px", objectFit: "contain" }}
            />
            <Typography
              style={{
                marginTop: "50px",
                fontWeight: "bold",
                color: "#00366A",
                fontSize: "1.7rem",
                textAlign: "center",
                lineHeight: "110%",
              }}
            >
              Quality
              <br />
              Certification
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "0",
          left: "10%",
          width: "80%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          color: "white",
        }}
      >
        <Typography variant="h3" component="h1" sx={{ fontWeight: "bold" }}>
          We <span style={{ color: "#39E63D" }}>Provide</span> The Best
        </Typography>
        <Typography
          variant="h3"
          component="h1"
          sx={{ fontWeight: "bold", mb: 2 }}
        >
          industrial solution for business
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          We have almost 8+ years of experience for helping industrial services
          and business solutions
        </Typography>

        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            variant="contained"
            sx={{
              background: "linear-gradient(to right, #39E63D, #00A68E)",
              color: "white",
              padding: "10px 20px",
              fontSize: "16px",
              fontWeight: "bold",
              borderRadius: "50px",
              "&:hover": {
                background: "linear-gradient(to right, #00A68E, #39E63D)",
              },
            }}
          >
            OUR SERVICES
          </Button>

          <Button
            variant="outlined"
            sx={{
              color: "white",
              borderColor: "white",
              padding: "10px 20px",
              fontSize: "16px",
              fontWeight: "bold",
              borderRadius: "50px",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.2)",
              },
            }}
          >
            CONTACT US
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
