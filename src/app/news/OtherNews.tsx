"use client";
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
    <div className="pt-[40px] md:pt-[50px] lg-[60px] 2xl:pt-[70px] pb-[80px] md:pb-[90px] lg:pb-[100px] xl:pb-[120px] 2xl:pb-[140px] bg-[#E9EAEE] px-[20px] md:px-[10%]">
      <div className="flex justify-center md:justify-start">
     <text className="text-[24px] md:text-[1.5rem] lg:text-[2rem] xl:text-[2.5rem] font-bold text-[#00366A] relative">
          OTHER NEWS
          <span className="absolute bottom-[-5px] left-[25%] md:left-[0%] w-[50%] h-[2px] xl:h-[4px] 2xl:h-[5px] bg-[#00A859]" />
        </text>
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
                onClick={() => router.push("/news/" + item.id)}
              >
                <Box sx={{ position: "relative", height: "50%" }}>
                  <Image
                    style={{ borderRadius: "8px", height: "138px" }}
                    alt=""
                    unoptimized
                    width={100}
                    height={100}
                    src={item.image}
                    className="w-[100%] h-[100%]"
                  />
                </Box>
                <Box sx={{ height: "45%", overflow: "hidden" }}>
                  <text className="line-clamp-2 text-[16px] mt-[15px] text-[#00366A] font-semibold leading-[24px]">
                    {item.shortTitle}
                  </text>
                  <text className="text-[#252724] leading-[18px] font-light mt-[8px] line-clamp-4">
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
