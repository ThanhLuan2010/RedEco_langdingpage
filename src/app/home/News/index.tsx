import { Box } from "@mui/material";
import { Col, Row, Typography } from "antd";
import React from "react";
import { Newsdata } from "./data";
import Image from "next/image";

function News() {
  return (
    <Box
      justifyContent={"center"}
      flexDirection={"column"}
      alignItems={"center"}
      display={"flex"}
      width={"80%"}
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
        CORPORATE NEWS
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

      <Box sx={{ marginTop: "5%" }}>
        <Row gutter={[16, 16]}>
          {Newsdata.map((item, index) => (
            <Col xs={24} sm={12} md={12} key={index}>
              <div
                style={{
                  padding: "16px",
                  borderRadius: "1.5rem",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
                  height: "50vh",
                }}
              >
                <Box sx={{ position: "relative", height: "55%" }}>
                  <Image
                    style={{ height: "100%", borderRadius: "16px" }}
                    alt=""
                    src={item.image}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      backgroundColor: index !== 1 ? "#00366A" : null,
                      backgroundImage:
                        index === 1
                          ? "linear-gradient(-90deg, #00669A00 0%, #003E6DE0 88%, #002E5B 100%)"
                          : null,
                      opacity:
                        index === 0
                          ? 0.25
                          : index == 1
                          ? 0.9
                          : index == 2
                          ? 0.5
                          : 0.1,
                      borderRadius: "16px",
                    }}
                  />
                </Box>
                <Box sx={{ height: "45%", overflow:"hidden" }}>
                  <Typography
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: 600,
                      marginTop: "2%",
                      lineHeight: "120%",
                      color: "#00366A",
                      fontFamily: "Montserrat",
                    }}
                  >
                    {item.shortTitle}
                  </Typography>
                  <Typography
                    style={{
                      fontSize: "1em",
                      marginTop: "2%",
                    }}
                  >
                    {item.shortDescription}
                  </Typography>
                </Box>
              </div>
            </Col>
          ))}
        </Row>
      </Box>
    </Box>
  );
}

export default News;
