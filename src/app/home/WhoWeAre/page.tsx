import { Box, Button } from "@mui/material";
import { Col, Row, Typography } from "antd";
import Image from "next/image";
import React from "react";

function WhoWeAre() {
  return (
    <Box>
      <Box sx={{ position: "relative" }}>
        <Box sx={{ position: "relative", width: "100vw" }}>
          <Image
            style={{
              height: "100%",
              position: "relative",
              objectFit: "fill",
              width: "100vw",
            }}
            alt="image"
            src={require("../../../public/image/banner_who_we_are.png")}
          />
          <Box
            sx={{
              position: "absolute",
              height: "100%",
              width: "100vw",
              backgroundImage:
                "linear-gradient(90deg, #007BB017 9%, #00366AE5 90%)",
              top: "0",
              left: "0%",
            }}
          />

          <Box
            sx={{
              position: "absolute",
              height: "100%",
              width: "100vw",
              top: "0",
              left: "0%",
            }}
          >
            <Image
              style={{ width: "100%", height: "100%", objectFit: "fill" }}
              alt=""
              src={require("../../../public/image/blue_opacity.png")}
            />
          </Box>

          <Box
            sx={{
              position: "absolute",
              top: "10%",
              right: 0,
              height: "100%",
              width: "50vw",
            }}
          >
            <Image
              style={{ height: "100%", objectFit: "fill" }}
              alt=""
              src={require("../../../public/image/who_we_are_right.png")}
            />
            <Box
              sx={{
                position: "absolute",
                height: "100%",
                top: "0",
                left: "0%",
              }}
            >
              <Image
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "4%",
                  objectFit: "fill",
                }}
                alt=""
                src={require("../../../public/image/blue_opacity.png")}
              />
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            // paddingTop: "8%",
            height: "100%",
            width: "100%",
            // paddingLeft: "11%",
            flexDirection: "row",
            display: "flex",
          }}
        >
          <Box
            sx={{
              width: "40%",
              justifyContent: "center",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              paddingLeft: "10%",
            }}
          >
            <Typography
              style={{
                fontSize: "3.1rem",
                fontWeight: 700,
                color: "#EDF0F4",
                lineHeight: "73.14px",
                textAlign: "left",
              }}
            >
              Who are we?
            </Typography>

            <Typography
              style={{
                fontSize: "1.1rem",
                fontWeight: 500,
                color: "#EDF0F4",
                marginTop: 16,
                lineHeight: "30px",
              }}
            >
              {"Welcome to REDECO Vietnam"}
            </Typography>
            <Typography
              style={{
                fontSize: "1.1rem",
                fontWeight: 500,
                color: "#EDF0F4",
                lineHeight: "30px",
              }}
            >
              {"Industrial Solutions JSC"}
            </Typography>

            <Button
              sx={{
                height: "60px", // Chiều cao của nút
                background:
                  "linear-gradient( rgba(40, 255, 144, 0.9) 0%, rgba(0, 149, 79, 1) 100%)", // Gradient từ xanh lá cây sáng đến đậm
                borderRadius: "12px", // Bo góc của nút
                display: "flex",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Bóng đổ nhẹ dưới nút
                marginTop: "72px",
                alignSelf: "flex-start",
                paddingX: "10%",
              }}
            >
              <Typography
                style={{
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "white",
                }}
              >
                ABOUT US
              </Typography>
            </Button>
          </Box>

          <Box
            sx={{
              flexDirection: "row",
              display: "flex",
              width: "60%",
              alignItems: "center",
              gap: "3%",
              height: "70%",
              alignSelf: "flex-end",
              transform: "translatey(-10%)", // Căn chỉnh chính xác vị trí giữa
            }}
          >
            <Box
              width={"25%"}
              sx={{
                backgroundColor: "white",
                padding: "10px 24px 24px 24px",
                borderRadius: "20px",
                height: "100%",
              }}
            >
              <Box
                sx={{ height: "90%", display: "flex", flexDirection: "column" }}
              >
                <Box
                  sx={{
                    flexDirection: "row",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Image
                    style={{ width: "30%", objectFit: "contain" }}
                    alt=""
                    src={require("../../../public/image/ic_area.png")}
                  />
                  <Typography
                    style={{
                      fontSize: "3rem",
                      fontWeight: 500,
                      color: "#00366A",
                      opacity: 0.1,
                    }}
                  >
                    01
                  </Typography>
                </Box>

                <Typography
                  style={{
                    fontSize: "1.3em",
                    color: "#00366A",
                    fontWeight: 600,
                    marginBottom: "0.5em",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  Area of 1860m²
                </Typography>

                <Typography
                  style={{
                    color: "#252724",
                    fontWeight: 400,
                    fontFamily: "Montserrat",
                    borderBottom: "1px solid #00366A",
                    paddingBottom: "30px",
                    overflow: "hidden",
                    fontSize: "0.8em",
                  }}
                >
                  REDECO established in 2017 with two modern factories in Hanoi,
                  covering a total area of 1860 m². And the company is equipped
                  with a wide range of advanced machinery.
                </Typography>
              </Box>

              <Button
                sx={{
                  backgroundColor: "transparent",
                  marginTop: "12px",
                  padding: 0,
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                  <Typography>Read More</Typography>
                  <Image
                    style={{
                      width: "16px",
                      objectFit: "contain",
                      marginLeft: "8px",
                    }}
                    alt=""
                    src={require("../../../public/image/Arrow 1.png")}
                  />
                </Box>
              </Button>
            </Box>

            <Box
              width={"25%"}
              sx={{
                backgroundColor: "white",
                padding: "10px 24px 24px 24px",
                borderRadius: "20px",
                height: "100%",
              }}
            >
              <Box
                sx={{ height: "90%", display: "flex", flexDirection: "column" }}
              >
                <Box
                  sx={{
                    flexDirection: "row",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Image
                    style={{ width: "30%", objectFit: "contain" }}
                    alt=""
                    src={require("../../../public/image/ic_service.png")}
                  />
                  <Typography
                    style={{
                      fontSize: "3rem",
                      fontWeight: 500,
                      color: "#00366A",
                      opacity: 0.1,
                    }}
                  >
                    02
                  </Typography>
                </Box>

                <Typography
                  style={{
                    fontSize: "1.3em",
                    color: "#00366A",
                    fontWeight: 600,
                    marginBottom: "0.5em",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  Our Services
                </Typography>

                <Typography
                  style={{
                    color: "#252724",
                    fontWeight: 400,
                    fontFamily: "Montserrat",
                    borderBottom: "1px solid #00366A",
                    paddingBottom: "30px",
                    overflow: "hidden",
                    fontSize: "0.8em",
                  }}
                >
                  REDECO VIETNAM offers a wide range of solutions tailored such
                  as custom machinery development, conveyors and handling
                  solutions, logistics support equipment, automation ...
                </Typography>
              </Box>

              <Button
                sx={{
                  backgroundColor: "transparent",
                  marginTop: "12px",
                  padding: 0,
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                  <Typography>Read More</Typography>
                  <Image
                    style={{
                      width: "16px",
                      objectFit: "contain",
                      marginLeft: "8px",
                    }}
                    alt=""
                    src={require("../../../public/image/Arrow 1.png")}
                  />
                </Box>
              </Button>
            </Box>

            <Box
              width={"25%"}
              sx={{
                backgroundColor: "white",
                padding: "10px 24px 24px 24px",
                borderRadius: "20px",
                height: "100%",
              }}
            >
              <Box
                sx={{ height: "90%", display: "flex", flexDirection: "column" }}
              >
                <Box
                  sx={{
                    flexDirection: "row",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Image
                    style={{ width: "30%", objectFit: "contain" }}
                    alt=""
                    src={require("../../../public/image/ic_leading.png")}
                  />
                  <Typography
                    style={{
                      fontSize: "3rem",
                      fontWeight: 500,
                      color: "#00366A",
                      opacity: 0.1,
                    }}
                  >
                    03
                  </Typography>
                </Box>

                <Typography
                  style={{
                    fontSize: "1.3em",
                    color: "#00366A",
                    fontWeight: 600,
                    marginBottom: "0.5em",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  Our Leading
                </Typography>

                <Typography
                  style={{
                    color: "#252724",
                    fontWeight: 400,
                    fontFamily: "Montserrat",
                    borderBottom: "1px solid #00366A",
                    paddingBottom: "30px",
                    overflow: "hidden",
                    fontSize: "0.8em",
                  }}
                >
                  REDECO Vietnam JSC provide solutions to the customer in many
                  industries, specializing in manufacturing, designing and
                  supplying equipment in mechanical processing
                </Typography>
              </Box>

              <Button
                sx={{
                  backgroundColor: "transparent",
                  marginTop: "12px",
                  padding: 0,
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                  <Typography>Read More</Typography>
                  <Image
                    style={{
                      width: "16px",
                      objectFit: "contain",
                      marginLeft: "8px",
                    }}
                    alt=""
                    src={require("../../../public/image/Arrow 1.png")}
                  />
                </Box>
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default WhoWeAre;
