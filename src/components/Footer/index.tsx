"use client";
import { Box, Input, Typography } from "@mui/material";
import { Col, Row } from "antd";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface FormData {
  email: string;
}

export default function Footer({ style }: any) {
  const [showMore, setShowMore] = useState<boolean>(false);
  const [showMore2, setShowMore2] = useState<boolean>(false);
  const [showMore3, setShowMore3] = useState<boolean>(false);
  const [isSubcribe, setIsSubcribe] = useState<boolean>(false);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    email: "",
  });

  const onSubmit = async () => {
    if (formData.email) {
      try {
        setIsLoading(true);
        await fetch(
          "https://api.sheetbest.com/sheets/6e870419-6aca-4069-be29-f9268f8bb7fb",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );
        setIsLoading(false);
        setFormData({
          email: "",
        });
      } catch (error) {
        alert("Failed to submit the form.");
      }
    }
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "rgb(10,24,56)",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        // paddingY: "50px",
        marginTop: "8%",
        ...style,
      }}
    >
      <div className="px-[20px] md:px-[5%] xl:px-[10%] pt-[36px] mt:pt-[50px] pb-[46px]">
        <Box>
          <button
            onClick={() => navigate("/home")}
            className="w-[100%] mb-[60px] 2xl:mb-[35px]"
          >
            <img
              alt=""
              src={require("../../assets/image/logo_footer.png")}
              // src={require("../../assetsimage/logo_footer.png")}
              className="object-contain w-[70%] md:w-[20%]"
            />
          </button>
          <div className="lg:scale-y-[0.95]">
            <Row style={{ color: "#EDF0F4" }}>
              {isSubcribe ? (
                <Col xs={24} sm={12} md={7}>
                  <div className="text-white font-bold">
                    <text className="text-[24px] font-bold">Thank you!</text>
                  </div>
                </Col>
              ) : (
                <Col
                  style={{ paddingRight: "4%", flexDirection: "column" }}
                  xs={24}
                  sm={12}
                  md={8}
                >
                  <div className="flex flex-col items-start">
                    <div className="text-[#EDF0F4] text-[14px] 2xl:text-[18px] font-bold">
                      <text>SUBSCRIBE TO NEWSLETTER</text>
                    </div>

                    <div className="text-[#EDF0F4] mt-[25px] font-light w-[95%]">
                      <text className="text-[13px] 2xl:text-[16px]">
                        By subscribing to our mailing list, we will constantly
                        update with the latest news.
                      </text>
                    </div>
                    <Input
                      sx={{
                        borderWidth: 1,
                        borderColor: "#EDF0F4",
                        borderRadius: "6px",
                        marginTop: "18px",
                        color: "#EDF0F4",
                        paddingX: "12px",
                        paddingY: "3px",
                        fontFamily: "Montserrat",
                        fontSize: "10px",
                      }}
                      placeholder="Email address..."
                      className="w-[100%] md:w-[80%]"
                    />

                    <text className="text-[13px] 2xl:text-[16px] text-[#EDF0F4] mt-[24px]">
                      This site is protected by the Google 
                      <span
                        className="cursor-pointer underline"
                        onClick={() => {
                          window.open(
                            "https://policies.google.com/privacy",
                            "_blank",
                            "noopener,noreferrer"
                          );
                        }}
                      >
                        Privacy Policy
                      </span>
                       and 
                      <span
                        className="cursor-pointer underline"
                        onClick={() => {
                          window.open(
                            "https://policies.google.com/terms",
                            "_blank",
                            "noopener,noreferrer"
                          );
                        }}
                      >
                        Terms of Service
                      </span>
                       apply.
                    </text>

                    <button
                      className="mt-[30px] md:mt-[36px]"
                      onClick={() => {
                        setIsSubcribe(true);
                        onSubmit();
                      }}
                    >
                      <Typography
                        style={{
                          color: "#EDF0F4",
                          textDecorationLine: "underline",
                          fontSize: "16px",
                          fontWeight: 700,
                        }}
                      >
                        Subcribe
                      </Typography>
                    </button>
                  </div>
                </Col>
              )}

              <Col className="md:translate-x-[-12%]" xs={24} sm={12} md={6}>
                <div
                  className="cursor-pointer mt-[50px] md:mt-0"
                  onClick={() => {
                    navigate("/product#machine-details");
                  }}
                >
                  <text className="text-[#EDF0F4] text-[14px] font-semibold leading-[21px]">
                    MACHINE COMPONENTS & DETAILS
                  </text>
                </div>

                <div
                  className="cursor-pointer mt-[20px] md:mt-[10px] xl:mt-[20px]"
                  onClick={() => {
                    navigate("/product#automation");
                  }}
                >
                  <text className="text-[#EDF0F4] text-[14px] font-semibold leading-[21px]">
                    AUTOMATION
                  </text>
                </div>

                <div
                  className="cursor-pointer mt-[20px] md:mt-[10px] xl:mt-[20px]"
                  onClick={() => {
                    navigate("/product#plastic-injection");
                  }}
                >
                  <text className="text-[#EDF0F4] text-[14px] font-semibold leading-[21px]">
                    PLASTIC INJECTION PRODUCTS
                  </text>
                </div>

                <div className="hidden md:flex flex-col mt-[10px] md:mt-[10px] xl:mt-[20px] cursor-pointer">
                  <text
                    onClick={() => {
                      navigate("/product#silicone-rubber");
                    }}
                    className="text-[#EDF0F4] text-[14px] font-semibold leading-[21px]"
                  >
                    SILICONE RUBBER PRODUCTS
                  </text>

                  <div
                    className="mt-[10px] xl:mt-[10px] cursor-pointer"
                    onClick={() => {
                      navigate("/product?id=1#silicone-rubber");
                    }}
                  >
                    <text className="text-[#EDF0F4] text-[13px]  font-extralight leading-[21px]">
                      Vacuum Suction Cup
                    </text>
                  </div>

                  <div
                    className="mt-[10px] xl:mt-[10px] cursor-pointer"
                    // onClick={() => {
                    //   navigate("/product?id=2#silicone-rubber");
                    // }}
                    onClick={() => {
                      navigate("/product?id=2#silicone-rubber");
                    }}
                  >
                    <text className="text-[#EDF0F4] text-[13px] font-extralight leading-[21px]">
                      Silicone Rubber Details
                    </text>
                  </div>

                  <div
                    className="mt-[10px] xl:mt-[10px] cursor-pointer"
                    onClick={() => {
                      navigate("/product?id=3#silicone-rubber");
                    }}
                  >
                    <text className="text-[#EDF0F4] text-[13px]  font-extralight leading-[21px]">
                      Silicone Rubber Gasket
                    </text>
                  </div>

                  <div
                    className="mt-[10px] xl:mt-[10px] cursor-pointer"
                    onClick={() => {
                      navigate("/product?id=4#silicone-rubber");
                    }}
                  >
                    <text className="text-[#EDF0F4] text-[13px]  font-extralight leading-[21px]">
                      Industrial Keyboard
                    </text>
                  </div>
                </div>

                <div className="flex md:hidden flex-col text-white mt-[20px]">
                  <div
                    className="flex justify-between cursor-pointer"
                    onClick={() => setShowMore(!showMore)}
                  >
                    <text className="font-semibold text-[14px]">
                      SILICONE RUBBER PRODUCTS
                    </text>
                    <img
                      alt=""
                      src={
                        showMore
                          ? // ? require("../../assets/icon/icon_up.png")
                            // : require("../../assets/icon/icon_down.png")
                            require("../../assets/icon/icon_up.png")
                          : require("../../assets/icon/icon_down.png")
                      }
                    />
                  </div>

                  {showMore && (
                    <div>
                      <Typography
                        style={{
                          fontFamily: "Montserrat",
                          fontWeight: "lighter",
                          lineHeight: "21.94px",
                          marginBottom: "7px",
                        }}
                        className="text-[14px] xl:text-[16px] mt-[5px]"
                        onClick={() => {
                          navigate("/product?id=1#silicone-rubber");
                        }}
                      >
                        Vacuum Suction Cup
                      </Typography>
                      <Typography
                        style={{
                          fontFamily: "Montserrat",
                          fontWeight: "lighter",
                          lineHeight: "21.94px",
                          marginBottom: "7px",
                        }}
                        className="text-[14px] xl:text-[16px]"
                        onClick={() => {
                          navigate({
                            pathname: "/product",
                            search: "?id=2",
                            hash: "#silicone-rubber",
                          });
                        }}
                      >
                        Silicone Rubber Details
                      </Typography>
                      <Typography
                        style={{
                          fontFamily: "Montserrat",
                          fontWeight: "lighter",
                          lineHeight: "21.94px",
                          marginBottom: "7px",
                        }}
                        className="text-[14px] xl:text-[16px]"
                        onClick={() => {
                          navigate("/product?id=3#silicone-rubber");
                        }}
                      >
                        Silicone Rubber Gasket
                      </Typography>
                      <Typography
                        style={{
                          fontFamily: "Montserrat",
                          fontWeight: "lighter",
                          lineHeight: "21.94px",
                          marginBottom: "7px",
                        }}
                        className="text-[14px] xl:text-[16px]"
                        onClick={() => {
                          navigate("/product?id=4#silicone-rubber");
                        }}
                      >
                        Industrial Keyboard
                      </Typography>
                    </div>
                  )}
                </div>
              </Col>

              <Col xs={24} sm={12} md={4}>
                <div className="hidden md:flex flex-col">
                  <div
                    className="cursor-pointer"
                    onClick={() => {
                      navigate("/product#other-products");
                    }}
                  >
                    <text className="text-[#EDF0F4] text-[14px] font-semibold leading-[20px]">
                      OTHER PRODUCTS
                    </text>
                  </div>

                  <div
                    className="mt-[10px] xl:mt-[10px] cursor-pointer"
                    onClick={() => {
                      navigate("/product?id=5#other-products");
                    }}
                  >
                    <text className="text-[#EDF0F4] text-[13px]  font-extralight leading-[21px]">
                      Manipulator Table
                    </text>
                  </div>

                  <div
                    className="mt-[10px] xl:mt-[10px] cursor-pointer"
                    onClick={() => {
                      navigate("/product?id=6#other-products");
                    }}
                  >
                    <text className="text-[#EDF0F4] text-[13px] font-extralight leading-[20px]">
                      Aluminum Casting
                    </text>
                  </div>

                  <div
                    className="mt-[10px] xl:mt-[10px] cursor-pointer"
                    onClick={() => {
                      navigate("/product?id=7#other-products");
                    }}
                  >
                    <text className="text-[#EDF0F4] text-[13px]  font-extralight leading-[20px]">
                      JIG Products
                    </text>
                  </div>

                  <div
                    className="mt-[10px] xl:mt-[10px] cursor-pointer"
                    onClick={() => {
                      navigate("/product?id=8#other-products");
                    }}
                  >
                    <text className="text-[#EDF0F4] text-[13px]  font-extralight leading-[20px]">
                      Industrial Trolley
                    </text>
                  </div>
                </div>

                <div className="flex md:hidden flex-col text-white mt-[20px]">
                  <div
                    className="flex justify-between cursor-pointer"
                    onClick={() => setShowMore2(!showMore2)}
                  >
                    <text className="font-semibold text-[14px]">
                      OTHER PRODUCTS
                    </text>
                    <img
                      alt=""
                      src={
                        showMore2
                          ? require("../../assets/icon/icon_up.png")
                          : require("../../assets/icon/icon_down.png")
                      }
                    />
                  </div>

                  {showMore2 && (
                    <div>
                      <Typography
                        style={{
                          lineHeight: "21.94px",
                          marginBottom: "7px",
                          fontFamily: "Montserrat",
                          fontWeight: "lighter",
                        }}
                        className="text-[14px] xl:text-[16px] mt-[5px]"
                        onClick={() => {
                          navigate("/product?id=5#other-products");
                        }}
                      >
                        Manipulator Table
                      </Typography>
                      <Typography
                        style={{
                          fontFamily: "Montserrat",
                          fontWeight: "lighter",
                          lineHeight: "21.94px",
                          marginBottom: "7px",
                        }}
                        className="text-[14px] xl:text-[16px]"
                        onClick={() => {
                          navigate("/product?id=6#other-products");
                        }}
                      >
                        Aluminum Casting
                      </Typography>
                      <Typography
                        style={{
                          fontFamily: "Montserrat",
                          fontWeight: "lighter",
                          lineHeight: "21.94px",
                          marginBottom: "7px",
                        }}
                        className="text-[14px] xl:text-[16px]"
                        onClick={() => {
                          navigate("/product?id=7#other-products");
                        }}
                      >
                        JIG Products
                      </Typography>
                      <Typography
                        style={{
                          fontFamily: "Montserrat",
                          fontWeight: "lighter",
                          lineHeight: "21.94px",
                          marginBottom: "7px",
                        }}
                        className="text-[14px] xl:text-[16px]"
                        onClick={() => {
                          navigate("/product?id=8#other-products");
                        }}
                      >
                        Industrial Trolley
                      </Typography>
                    </div>
                  )}
                </div>
              </Col>

              <Col xs={24} sm={12} md={6}>
                <div className="hidden md:flex flex-col w-[100%]">
                  <div
                    className="cursor-pointer"
                    onClick={() => {
                      navigate("/contact-us");
                    }}
                  >
                    <text className="text-[#EDF0F4] text-[14px] font-semibold leading-[21px]">
                      CONTACT US
                    </text>
                  </div>

                  <div className="mt-[10px] xl:mt-[10px]">
                    <text className="text-[#EDF0F4] text-[13px] font-extralight">
                      Redeco Vietnam Industrial Solutions Joint Stock Company
                    </text>
                  </div>

                  <div className="mt-[10px] xl:mt-[10px]r">
                    <text className="text-[#EDF0F4] text-[13px] font-extralight leading-[20px]">
                      Address: No. 30, Lane 77, Thon Chien 2 Street, Chien
                      Village, Duc Thuong Commune, Hoai Duc District, Hanoi City
                    </text>
                  </div>

                  <div className="mt-[10px] xl:mt-[10px]r">
                    <text className="text-[#EDF0F4] text-[13px] font-extralight leading-[20px]">
                      Phone: (+84) 913 882 867 (Mr. Thieu Do Xuan)
                    </text>
                  </div>

                  <div className="mt-[10px] xl:mt-[10px]r">
                    <text className="text-[#EDF0F4] text-[13px] font-extralight leading-[20px]">
                      Tax Code: 0108018838
                    </text>
                  </div>

                  <div className="mt-[10px] xl:mt-[10px]r">
                    <text className="text-[#EDF0F4] text-[13px] font-extralight leading-[20px]">
                      Email: kinhdoanh@redeco.vn
                    </text>
                  </div>

                  <div className="mt-[10px] xl:mt-[10px]r">
                    <text className="text-[#EDF0F4] text-[13px] font-extralight leading-[20px]">
                      CC email: thieudx@redeco.vn
                    </text>
                  </div>

                  <div className="mt-[10px] xl:mt-[40px]">
                    <text className="text-[#EDF0F4] text-[13px]  font-medium leading-[20px]">
                      Copyright © 2024 Redeco
                    </text>
                  </div>
                </div>

                <div className="flex md:hidden flex-col text-white mt-[20px]">
                  <div
                    className="flex justify-between cursor-pointer"
                    onClick={() => setShowMore3(!showMore3)}
                  >
                    <text className="font-semibold text-[14px]">
                      CONTACT US
                    </text>
                    <img
                      alt=""
                      src={
                        showMore3
                          ? require("../../assets/icon/icon_up.png")
                          : require("../../assets/icon/icon_down.png")
                      }
                    />
                  </div>

                  {showMore3 && (
                    <div>
                      <Typography
                        style={{
                          fontFamily: "Montserrat",
                          fontWeight: "lighter",
                          lineHeight: "21.94px",
                          marginBottom: "7px",
                          fontSize: "14px",
                          marginTop: "5px",
                        }}
                      >
                        Redeco Vietnam Industrial Solutions Joint Stock Company
                      </Typography>
                      <Typography
                        style={{
                          fontFamily: "Montserrat",
                          fontWeight: "lighter",
                          lineHeight: "21.94px",
                          marginBottom: "7px",
                          fontSize: "14px",
                        }}
                      >
                        Address: No. 30, Lane 77, Thon Chien 2 Street, Chien
                        Village, Duc Thuong Commune, Hoai Duc District, Hanoi
                        City
                      </Typography>
                      <Typography
                        style={{
                          fontFamily: "Montserrat",
                          fontWeight: "lighter",
                          lineHeight: "21.94px",
                          marginBottom: "7px",
                          fontSize: "14px",
                        }}
                      >
                        Phone: (+84).913.882.867 (Mr. Thieu Do Xuan)
                      </Typography>
                      <Typography
                        style={{
                          fontFamily: "Montserrat",
                          fontWeight: "lighter",
                          lineHeight: "21.94px",
                          marginBottom: "7px",
                          fontSize: "14px",
                        }}
                      >
                        Tax Code: 0108018838
                      </Typography>
                      <Typography
                        style={{
                          fontFamily: "Montserrat",
                          fontWeight: "lighter",
                          lineHeight: "21.94px",
                          marginBottom: "7px",
                          fontSize: "14px",
                        }}
                      >
                        Email: kinhdoanh@redeco.vn
                      </Typography>
                      <Typography
                        style={{
                          fontFamily: "Montserrat",
                          fontWeight: "lighter",
                          lineHeight: "21.94px",
                          marginBottom: "7px",
                          fontSize: "14px",
                        }}
                      >
                        CC email: thieudx@redeco.vn
                      </Typography>
                    </div>
                  )}
                  <Typography
                    style={{
                      fontFamily: "Montserrat",
                      fontWeight: "lighter",
                      lineHeight: "21.94px",
                      marginTop: "50px",
                      fontSize: "14px",
                    }}
                  >
                    Copyright © 2024 Redeco
                  </Typography>
                </div>
              </Col>
            </Row>
          </div>
        </Box>
      </div>
    </Box>
  );
}
