"use client";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { Col, Row } from "antd";

import { useNavigate } from "react-router-dom";
import { Newsdata, NewsdataMobile } from "./data";

function News() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const data = isMobile ? NewsdataMobile : Newsdata;
  return (
    <div className="flex flex-col justify-center items-center px-[20px] md:px-[10%] mt-[48px] md:mt-[60px] lg-[78px] xl:mt-[90px] 2xl:mt-[100px]">
      <text className="text-[24px] md:text-[1.5rem] lg:text-[2rem] xl:text-[2.5rem] font-bold text-[#00366A] relative">
        CORPORATE NEWS
        <span className="absolute bottom-[-2px] left-[50%] translate-x-[-50%] w-[30%] h-[2px] xl:h-[4px] 2xl:h-[5px] bg-[#00A859]" />
      </text>

      <Box sx={{ marginTop: "5%" }}>
        <Row
          // gutter={[{sm:24, md: 30 }, {sm:24, md: 50 }]}
          gutter={[
            { xs: 10, sm: 24, md: 30, lg: 30, xl: 30 }, // khoảng cách ngang (horizontal gutter)
            { xs: 20, sm: 24, md: 50, lg: 50, xl: 50 }, // khoảng cách dọc (vertical gutter)
          ]}
        >
          {data.map((item, index) => (
            <Col xs={24} sm={12} md={12} key={index}>
              <div
                style={{
                  padding: "16px 16px 0 16px",
                  // borderRadius: "16px",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
                  cursor: "pointer",
                }}
                className="h-[100%] rounded-[12px] overflow-hidden md:rounded-[16px]"
                onClick={() => navigate("/news/" + item.id)}
              >
                <Box sx={{ position: "relative", height: "55%" }}>
                  <img
                    style={{ height: "100%" }}
                    alt=""
                    src={item.image}
                    width={100}
                    height={100}
                    
                    className="w-[100%] rounded-[10px] overflow-hidden md:rounded-[14px]"
                  />
                </Box>
                <div className="mt-[10px] md:mt-[20px] xl:mt-[25px]">
                  <div className="line-clamp-2">
                    <p className="hidden md:block text-[#00366A] font-Montserrat font-semibold text-[16px] md:text-[24px] xl:text-[24px] leading-[20px] md:leading-[30px] xl:leading-[36px]">
                      {item.shortTitle}
                    </p>
                  </div>
                  <text className="block md:hidden text-[#00366A] font-Montserrat font-semibold text-[17px] md:text-[25px] xl:text-[30px] leading-[24px] md:leading-[30px] xl:leading-[36px] line-clamp-2">
                    {item.shortTitleMobile}
                  </text>

                  <text className="text-[14px] line-clamp-3 text-[#252724] font-light mt-[5px] md:mt-[10px] xl:mt-[10px] mb-[14px] md:mb-[30px] xl:mb-[36px] 2xl:mb-[36px] leading-[18px]">
                    {item.shortDescription}
                  </text>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Box>
    </div>
  );
}

export default News;
