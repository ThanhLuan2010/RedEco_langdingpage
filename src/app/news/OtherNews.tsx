import { Box } from "@mui/material";
import { Col, Row, Typography } from "antd";
import Image from "next/image";
import React from "react";
import { Newsdata } from "../home/News/data";
import { useRouter } from "next/navigation";

function OtherNews({ id }: any) {
  const router = useRouter();
  const orderNew = Newsdata.filter((i) => {
    return i.id != id;
  });
  return (
    <div className="pt-[10vh] pb-[13vh] bg-[#E9EAEE] px-[10%]">
      <div className="relative">
        <text className="font-semibold  text-[2.5rem] text-[#00366A] ">
          OTHER NEWS
        </text>
        <span
          style={{
            position: "absolute",
            bottom: 0, // Đặt đường viền sát dưới chữ
            left: "0%", // Căn giữa theo chiều ngang
            width: "120px", // Chiều rộng của đường viền (ngắn hơn width chữ)
            height: "5px", // Độ dày của đường viền
            backgroundColor: "#00A859", // Màu sắc của đường viền
          }}
        />
      </div>
      <Box sx={{ marginTop: "5%" }}>
        <Row gutter={[25, 25]}>
          {orderNew.map((item, index) => (
            <Col xs={24} sm={12} md={24 / 3} key={index}>
              <div
                style={{
                  padding: "16px",
                  borderRadius: "10px",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                  cursor: "pointer",
                  backgroundColor: "white",
                }}
                className=""
                onClick={() => router.push("/news/"+item.id)}
              >
                <Box sx={{ position: "relative", height: "50%" }}>
                  <Image
                    style={{ borderRadius: "8px", height:"138px" }}
                    alt=""
                    src={item.image}
                  />
                
                </Box>
                <Box sx={{ height: "45%", overflow: "hidden" }}>
                  <text className="line-clamp-2 text-[16px] mt-[15px] text-[#00366A] font-semibold leading-[24px]">
                    {item.shortTitle}
                  </text>
                  <text
                    className="text-[#252724] leading-[18px] font-light mt-[8px] line-clamp-4"
                  >
                    {item.shortDescription}
                  </text>
                </Box>
              </div>
            </Col>
          ))}
        </Row>
      </Box>
    </div>
  );
}

export default OtherNews;
