"use client";
import { Box, Input, Typography, Button } from "@mui/material";
import { Col, Row } from "antd";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface FormData {
  email: string;
}

export default function Footer({ style }: any) {
  const [showMore, setShowMore] = useState<boolean>(false);
  const [showMore2, setShowMore2] = useState<boolean>(false);
  const [showMore3, setShowMore3] = useState<boolean>(false);
  const [isSubcribe, setIsSubcribe] = useState<boolean>(false);
  const router = useRouter();
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
        paddingY: "50px",
        marginTop: "8%",
        ...style,
      }}
    >
      <div className="px-[20px] md:px-[5%] xl:px-[10%] ">
        <Box>
          <button
            onClick={() => router.push("/home")}
            className=" w-[100%] mb-[25px] 2xl:mb-[35px]"
          >
            <Image
              unoptimized
              alt=""
              src={require("../../../public/image/logo_footer.png")}
              className="object-contain w-[90%] md:w-[20%]"
            />
          </button>
          <div className="lg:scale-y-[0.9]">
            <Row style={{ color: "#EDF0F4" }}>
              {isSubcribe ? (
                <Col xs={24} sm={12} md={7}>
                  <div className="text-white font-bold">
                    <text className="text-[24px] font-bold">Thank you!</text>
                  </div>
                </Col>
              ) : (
                <Col style={{ paddingRight: "5%" }} xs={24} sm={12} md={8}>
                  <div className="text-[#EDF0F4] text-[14px] 2xl:text-[18px] font-bold">
                    <text>SUBSCRIBE TO NEWSLETTER</text>
                  </div>

                  <div className="text-[#EDF0F4] mt-[25px] font-light">
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
                      marginTop: "16px",
                      width: "100%",
                      color: "#EDF0F4",
                      paddingX: "12px",
                      fontFamily: "Montserrat",
                    }}
                    placeholder="Email address..."
                  />

                  <Typography
                    style={{
                      fontWeight: 200,
                      lineHeight: "20px",
                      fontFamily: "Montserrat",
                      marginTop: "10%",
                    }}
                    className="text-[13px] 2xl:text-[16px] text-[#EDF0F4]"
                  >
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
                  </Typography>
                  <Button
                    sx={{
                      marginTop: "36px",
                      padding: 0,
                      textTransform: "none", // Tắt chữ in hoa
                    }}
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
                  </Button>
                </Col>
              )}

              <Col className="translate-x-[-5%]" xs={24} sm={12} md={6}>
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    router.prefetch("/product#machine-details");
                    router.push("/product#machine-details");
                  }}
                >
                  <text className="text-[#EDF0F4] text-[14px] font-semibold leading-[21px]">
                    MACHINE COMPONENTS & DETAILS
                  </text>
                </div>
                <div
                  className="cursor-pointer mt-[10px] md:mt-[10px] xl:mt-[20px]"
                  onClick={() => {
                    router.prefetch("/product#automation");
                    router.push("/product#automation");
                  }}
                >
                  <text className="text-[#EDF0F4] text-[14px] font-semibold leading-[21px]">
                    AUTOMATION
                  </text>
                </div>

                <div
                  className="cursor-pointer mt-[10px] md:mt-[10px] xl:mt-[20px]"
                  onClick={() => {
                    router.prefetch("/product#plastic-injection");
                    router.push("/product#plastic-injection");
                  }}
                >
                  <text className="text-[#EDF0F4] text-[14px] font-semibold leading-[21px]">
                    PLASTIC INJECTION
                  </text>
                </div>

                <div className="hidden md:flex flex-col mt-[10px] md:mt-[10px] xl:mt-[20px]">
                  <text className="text-[#EDF0F4] text-[14px] font-semibold leading-[21px]">
                    SILICONE RUBBER PRODUCTS
                  </text>
                  <div
                    className="mt-[10px] xl:mt-[10px] cursor-pointer"
                    onClick={() => {
                      router.prefetch("/product#silicone-rubber.1");
                      router.push("/product#silicone-rubber.1");
                    }}
                  >
                    <text className="text-[#EDF0F4] text-[13px]  font-extralight leading-[21px]">
                      Vacuum Suction Cup
                    </text>
                  </div>

                  <div
                    className="mt-[10px] xl:mt-[10px] cursor-pointer"
                    onClick={() => {
                      router.prefetch("/product#silicone-rubber.2");
                      router.push("/product#silicone-rubber.2");
                    }}
                  >
                    <text className="text-[#EDF0F4] text-[13px]  font-extralight leading-[21px]">
                      Silicone Rubber Detail
                    </text>
                  </div>

                  <div
                    className="mt-[10px] xl:mt-[10px] cursor-pointer"
                    onClick={() => {
                      router.prefetch("/product#silicone-rubber.3");
                      router.push("/product#silicone-rubber.3");
                    }}
                  >
                    <text className="text-[#EDF0F4] text-[13px]  font-extralight leading-[21px]">
                      Silicone Rubber Gasket
                    </text>
                  </div>

                  <div
                    className="mt-[10px] xl:mt-[10px] cursor-pointer"
                    onClick={() => {
                      router.prefetch("/product#silicone-rubber.4");
                      router.push("/product#silicone-rubber.4");
                    }}
                  >
                    <text className="text-[#EDF0F4] text-[13px]  font-extralight leading-[21px]">
                      Industrial Keyboard
                    </text>
                  </div>
                </div>

                <div className="flex md:hidden flex-col text-white">
                  <div
                    className="flex justify-between cursor-pointer"
                    onClick={() => setShowMore(!showMore)}
                  >
                    <text className="font-bold text-[16px]">
                      SILICONE RUBBER PRODUCTS
                    </text>
                    <Image
                      unoptimized
                      alt=""
                      src={
                        showMore
                          ? require("../../../public/icon/icon_up.png")
                          : require("../../../public/icon/icon_down.png")
                      }
                    />
                  </div>

                  {showMore && (
                    <div>
                      <Typography
                        style={{
                          fontWeight: 400,
                          lineHeight: "21.94px",
                          marginBottom: "7px",
                        }}
                        className="text-[14px] xl:text-[16px] mt-[5px]"
                      >
                        Vacuum Suction Cup
                      </Typography>
                      <Typography
                        style={{
                          fontWeight: 400,
                          lineHeight: "21.94px",
                          marginBottom: "7px",
                        }}
                        className="text-[14px] xl:text-[16px]"
                      >
                        Silicone Rubber Detail
                      </Typography>
                      <Typography
                        style={{
                          fontWeight: 400,
                          lineHeight: "21.94px",
                          marginBottom: "7px",
                        }}
                        className="text-[14px] xl:text-[16px]"
                      >
                        Silicone Rubber Gasket
                      </Typography>
                      <Typography
                        style={{
                          fontWeight: 400,
                          lineHeight: "21.94px",
                          marginBottom: "7px",
                        }}
                        className="text-[14px] xl:text-[16px]"
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
                      router.prefetch("/product#plastic-injection");
                      router.push("/product#plastic-injection");
                    }}
                  >
                    <text className="text-[#EDF0F4] text-[14px] font-semibold leading-[20px]">
                      OTHER PRODUCTS
                    </text>
                  </div>

                  <div
                    className="mt-[10px] xl:mt-[10px] cursor-pointer"
                    onClick={() => {
                      router.prefetch("/product#other-products.5");
                      router.push("/product#other-products.5");
                    }}
                  >
                    <text className="text-[#EDF0F4] text-[13px]  font-extralight leading-[21px]">
                      Manipulator Table
                    </text>
                  </div>

                  <div
                    className="mt-[10px] xl:mt-[10px] cursor-pointer"
                    onClick={() => {
                      router.prefetch("/product#other-products.6");
                      router.push("/product#other-products.6");
                    }}
                  >
                    <text className="text-[#EDF0F4] text-[13px] font-extralight leading-[20px]">
                      Aluminum Casting
                    </text>
                  </div>

                  <div
                    className="mt-[10px] xl:mt-[10px] cursor-pointer"
                    onClick={() => {
                      router.prefetch("/product#other-products.7");
                      router.push("/product#other-products.7");
                    }}
                  >
                    <text className="text-[#EDF0F4] text-[13px]  font-extralight leading-[20px]">
                      JIG Products
                    </text>
                  </div>

                  <div
                    className="mt-[10px] xl:mt-[10px] cursor-pointer"
                    onClick={() => {
                      router.prefetch("/product#other-products.8");
                      router.push("/product#other-products.8");
                    }}
                  >
                    <text className="text-[#EDF0F4] text-[13px]  font-extralight leading-[20px]">
                      Industrial Trolley
                    </text>
                  </div>
                </div>

                <div className="flex md:hidden flex-col text-white">
                  <div
                    className="flex justify-between cursor-pointer"
                    onClick={() => setShowMore2(!showMore2)}
                  >
                    <text className="font-bold text-[16px]">
                      OTHER PRODUCTS
                    </text>
                    <Image
                      unoptimized
                      alt=""
                      src={
                        showMore2
                          ? require("../../../public/icon/icon_up.png")
                          : require("../../../public/icon/icon_down.png")
                      }
                    />
                  </div>

                  {showMore2 && (
                    <div>
                      <Typography
                        style={{
                          fontWeight: 400,
                          lineHeight: "21.94px",
                          marginBottom: "7px",
                        }}
                        className="text-[14px] xl:text-[16px] mt-[5px]"
                      >
                        Manipulator Table
                      </Typography>
                      <Typography
                        style={{
                          fontWeight: 400,
                          lineHeight: "21.94px",
                          marginBottom: "7px",
                        }}
                        className="text-[14px] xl:text-[16px]"
                      >
                        Aluminum Casting
                      </Typography>
                      <Typography
                        style={{
                          fontWeight: 400,
                          lineHeight: "21.94px",
                          marginBottom: "7px",
                        }}
                        className="text-[14px] xl:text-[16px]"
                      >
                        JIG Products
                      </Typography>
                      <Typography
                        style={{
                          fontWeight: 400,
                          lineHeight: "21.94px",
                          marginBottom: "7px",
                        }}
                        className="text-[14px] xl:text-[16px]"
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
                      router.prefetch("/contact-us");
                      router.push("/contact-us");
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
                      Phone: (+84).913.882.867 (Mr. Thieu Do Xuan)
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

                <div className="flex md:hidden flex-col text-white">
                  <div
                    className="flex justify-between cursor-pointer"
                    onClick={() => setShowMore3(!showMore3)}
                  >
                    <text className="font-bold text-[16px]">CONTACT US</text>
                    <Image
                      unoptimized
                      alt=""
                      src={
                        showMore3
                          ? require("../../../public/icon/icon_up.png")
                          : require("../../../public/icon/icon_down.png")
                      }
                    />
                  </div>

                  {showMore3 && (
                    <div>
                      <Typography
                        style={{
                          fontWeight: 400,
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
                          fontWeight: 400,
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
                          fontWeight: 400,
                          lineHeight: "21.94px",
                          marginBottom: "7px",
                          fontSize: "14px",
                        }}
                      >
                        Phone: (+84).913.882.867 (Mr. Thieu Do Xuan)
                      </Typography>
                      <Typography
                        style={{
                          fontWeight: 400,
                          lineHeight: "21.94px",
                          marginBottom: "7px",
                          fontSize: "14px",
                        }}
                      >
                        Tax Code: 0108018838
                      </Typography>
                      <Typography
                        style={{
                          fontWeight: 400,
                          lineHeight: "21.94px",
                          marginBottom: "7px",
                          fontSize: "14px",
                        }}
                      >
                        Email: kinhdoanh@redeco.vn
                      </Typography>
                      <Typography
                        style={{
                          fontWeight: 400,
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
                      fontWeight: 400,
                      lineHeight: "21.94px",
                      marginTop: "20%",
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
