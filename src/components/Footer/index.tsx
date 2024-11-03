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
        paddingY: "5%",
        marginTop: "8%",
        ...style,
      }}
    >
      <div className="px-[20px] md:px-[5%] xl:px-[10%]">
        <Box>
          <button
            onClick={() => router.push("/home")}
            className=" w-[100%] mb-[58px]"
          >
            <Image
              unoptimized
              alt=""
              src={require("../../../public/image/logo_footer.png")}
              className="object-contain w-[90%] md:w-[20%]"
            />
          </button>
          <Row style={{ color: "white" }} gutter={[20, 20]}>
            {isSubcribe ? (
              <Col xs={24} sm={12} md={7}>
                <div className="text-white  text-[18px] font-bold">
                  <text className="text-[24px] font-bold">Thank you!</text>
                </div>
              </Col>
            ) : (
              <Col style={{ paddingRight: "5%" }} xs={24} sm={12} md={7}>
                <div className="text-white  text-[18px] font-bold">
                  <text>SUBSCRIBE TO NEWSLETTER</text>
                </div>

                <div className="text-white mt-[30px]  font-light">
                  <text className="text-[12px] xl:text-[16px]">
                    By subscribing to our mailing list, we will constantly
                    update with the latest news.
                  </text>
                </div>
                <Input
                  sx={{
                    borderWidth: 1,
                    borderColor: "#EDF0F4",
                    borderRadius: "6px",
                    marginTop: "5%",
                    width: "100%",
                    color: "#EDF0F4",
                    paddingX: "12px",
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
                  className="text-[12px] xl:text-[16px]"
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
                    marginTop: "12%",
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
                      color: "white",
                      textDecorationLine: "underline",
                      fontSize: "18px",
                    }}
                  >
                    Subcribe
                  </Typography>
                </Button>
              </Col>
            )}

            <Col xs={24} sm={12} md={8}>
              <Typography
                style={{
                  fontWeight: 700,
                  lineHeight: "21.94px",
                  marginBottom: "10px",
                }}
                className="cursor-pointer"
                onClick={() => router.push("/product#machine-details")}
              >
                MACHINE COMPONENTS & DETAILS
              </Typography>
              <Typography
                style={{
                  fontWeight: 700,
                  lineHeight: "21.94px",
                  marginBottom: "10px",
                }}
                className="cursor-pointer"
                onClick={() => router.push("/product#automation")}
              >
                AUTOMATION
              </Typography>
              <Typography
                style={{
                  fontWeight: 700,
                  lineHeight: "21.94px",
                  marginBottom: "10px",
                }}
                className="cursor-pointer"
                onClick={() => router.push("/product#plastic-injection")}
              >
                PLASTIC INJECTION{" "}
              </Typography>
              <div className="hidden md:flex flex-col">
                <Typography
                  style={{
                    fontWeight: 700,
                    lineHeight: "21.94px",
                    marginBottom: "10px",
                  }}
                  className="cursor-pointer"
                  onClick={() => router.push("/product#silicone-rubber")}
                >
                  SILICONE RUBBER PRODUCTS
                </Typography>
                <Typography
                  style={{
                    fontWeight: 400,
                    lineHeight: "21.94px",
                    marginBottom: "7px",
                  }}
                  className="cursor-pointer text-[12px] xl:text-[16px]"
                  onClick={() => router.push("/product#silicone-rubber.1")}
                >
                  Vacuum Suction Cup
                </Typography>
                <Typography
                  style={{
                    fontWeight: 400,
                    lineHeight: "21.94px",
                    marginBottom: "7px",
                  }}
                  className="cursor-pointer text-[12px] xl:text-[16px]"
                  onClick={() => router.push("/product#silicone-rubber.2")}
                >
                  Silicone Rubber Detail
                </Typography>
                <Typography
                  style={{
                    fontWeight: 400,
                    lineHeight: "21.94px",
                    marginBottom: "7px",
                  }}
                  className="cursor-pointer text-[12px] xl:text-[16px]"
                  onClick={() => router.push("/product#silicone-rubber.3")}
                >
                  Silicone Rubber Gasket
                </Typography>
                <Typography
                  style={{
                    fontWeight: 400,
                    lineHeight: "21.94px",
                    marginBottom: "7px",
                  }}
                  className="cursor-pointer text-[12px] xl:text-[16px]"
                  onClick={() => router.push("/product#silicone-rubber.4")}
                >
                  Industrial Keyboard
                </Typography>
              </div>

              <div className="flex md:hidden flex-col text-white">
                <div
                  className="flex justify-between cursor-pointer"
                  onClick={() => setShowMore(!showMore)}
                >
                  <text className="font-bold">SILICONE RUBBER PRODUCTS</text>
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
                      className="text-[12px] xl:text-[16px] "
                    >
                      Vacuum Suction Cup
                    </Typography>
                    <Typography
                      style={{
                        fontWeight: 400,
                        lineHeight: "21.94px",
                        marginBottom: "7px",
                      }}
                      className="text-[12px] xl:text-[16px]"
                    >
                      Silicone Rubber Detail
                    </Typography>
                    <Typography
                      style={{
                        fontWeight: 400,
                        lineHeight: "21.94px",
                        marginBottom: "7px",
                      }}
                      className="text-[12px] xl:text-[16px]"
                    >
                      Silicone Rubber Gasket
                    </Typography>
                    <Typography
                      style={{
                        fontWeight: 400,
                        lineHeight: "21.94px",
                        marginBottom: "7px",
                      }}
                      className="text-[12px] xl:text-[16px]"
                    >
                      Industrial Keyboard
                    </Typography>
                  </div>
                )}
              </div>
            </Col>

            <Col xs={24} sm={12} md={4}>
              <Typography
                style={{
                  fontWeight: 700,
                  lineHeight: "21.94px",
                  marginBottom: "10px",
                }}
                onClick={() => router.push("/product#other-products")}
                className="cursor-pointer"
              >
                OTHER PRODUCTS
              </Typography>

              <div className="hidden md:flex flex-col">
                <Typography
                  style={{
                    fontWeight: 400,
                    lineHeight: "21.94px",
                    marginBottom: "7px",
                  }}
                  className="cursor-pointer text-[12px] xl:text-[16px]"
                  onClick={() => router.push("/product#other-products.5")}
                >
                  Manipulator Table
                </Typography>
                <Typography
                  style={{
                    fontWeight: 400,
                    lineHeight: "21.94px",
                    marginBottom: "7px",
                  }}
                  className="cursor-pointer text-[12px] xl:text-[16px]"
                  onClick={() => router.push("/product#other-products.6")}
                >
                  Aluminum Casting
                </Typography>
                <Typography
                  style={{
                    fontWeight: 400,
                    lineHeight: "21.94px",
                    marginBottom: "7px",
                  }}
                  className="cursor-pointer text-[12px] xl:text-[16px]"
                  onClick={() => router.push("/product#other-products.7")}
                >
                  JIG Products
                </Typography>
                <Typography
                  style={{
                    fontWeight: 400,
                    lineHeight: "21.94px",
                    marginBottom: "7px",
                  }}
                  className="cursor-pointer text-[12px] xl:text-[16px]"
                  onClick={() => router.push("/product#other-products.8")}
                >
                  Industrial Trolley
                </Typography>
              </div>

              <div className="flex md:hidden flex-col text-white">
                <div
                  className="flex justify-between cursor-pointer"
                  onClick={() => setShowMore2(!showMore2)}
                >
                  <text className="font-bold">SILICONE RUBBER PRODUCTS</text>
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
                      className="text-[12px] xl:text-[16px]"
                    >
                      Manipulator Table
                    </Typography>
                    <Typography
                      style={{
                        fontWeight: 400,
                        lineHeight: "21.94px",
                        marginBottom: "7px",
                      }}
                      className="text-[12px] xl:text-[16px]"
                    >
                      Aluminum Casting
                    </Typography>
                    <Typography
                      style={{
                        fontWeight: 400,
                        lineHeight: "21.94px",
                        marginBottom: "7px",
                      }}
                      className="text-[12px] xl:text-[16px]"
                    >
                      JIG Products
                    </Typography>
                    <Typography
                      style={{
                        fontWeight: 400,
                        lineHeight: "21.94px",
                        marginBottom: "7px",
                      }}
                      className="text-[12px] xl:text-[16px]"
                    >
                      Industrial Trolley
                    </Typography>
                  </div>
                )}
              </div>
            </Col>

            <Col xs={24} sm={12} md={5}>
              <Typography
                style={{
                  fontWeight: 700,
                  lineHeight: "21.94px",
                  marginBottom: "10px",
                }}
                className="cursor-pointer text-[12px] xl:text-[16px]"
                onClick={() => router.push("/contact-us")}
              >
                CONTACT US
              </Typography>

              <div className="hidden md:flex flex-col">
                <Typography
                  style={{
                    fontWeight: 400,
                    lineHeight: "21.94px",
                    marginBottom: "7px",
                  }}
                  className="text-[12px] xl:text-[16px]"
                >
                  Redeco Vietnam Industrial Solutions Joint Stock Company
                </Typography>
                <Typography
                  style={{
                    fontWeight: 400,
                    lineHeight: "21.94px",
                    marginBottom: "7px",
                  }}
                  className="text-[12px] xl:text-[16px]"
                >
                  Address: No. 30, Lane 77, Thon Chien 2 Street, Chien Village,
                  Duc Thuong Commune, Hoai Duc District, Hanoi City
                </Typography>
                <Typography
                  style={{
                    fontWeight: 400,
                    lineHeight: "21.94px",
                    marginBottom: "7px",
                  }}
                  className="text-[12px] xl:text-[16px]"
                >
                  Phone: (+84).913.882.867 (Mr. Thieu Do Xuan)
                </Typography>
                <Typography
                  style={{
                    fontWeight: 400,
                    lineHeight: "21.94px",
                    marginBottom: "7px",
                  }}
                  className="text-[12px] xl:text-[16px]"
                >
                  Tax Code: 0108018838
                </Typography>
                <Typography
                  style={{
                    fontWeight: 400,
                    lineHeight: "21.94px",
                    marginBottom: "7px",
                  }}
                  className="text-[12px] xl:text-[16px]"
                >
                  Email: kinhdoanh@redeco.vn
                </Typography>
                <Typography
                  style={{
                    fontWeight: 400,
                    lineHeight: "21.94px",
                    marginBottom: "7px",
                  }}
                  className="text-[12px] xl:text-[16px]"
                >
                  CC email: thieudx@redeco.vn
                </Typography>
                <Typography
                  style={{
                    fontWeight: 400,
                    lineHeight: "21.94px",
                    marginTop: "20%",
                  }}
                  className="text-[12px] xl:text-[16px]"
                >
                  Copyright © 2024 Redeco
                </Typography>
              </div>

              <div className="flex md:hidden flex-col text-white">
                <div
                  className="flex justify-between cursor-pointer"
                  onClick={() => setShowMore3(!showMore3)}
                >
                  <text className="font-bold">SILICONE RUBBER PRODUCTS</text>
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
                        fontSize: "12px",
                      }}
                    >
                      Redeco Vietnam Industrial Solutions Joint Stock Company
                    </Typography>
                    <Typography
                      style={{
                        fontWeight: 400,
                        lineHeight: "21.94px",
                        marginBottom: "7px",
                        fontSize: "12px",
                      }}
                    >
                      Address: No. 30, Lane 77, Thon Chien 2 Street, Chien
                      Village, Duc Thuong Commune, Hoai Duc District, Hanoi City
                    </Typography>
                    <Typography
                      style={{
                        fontWeight: 400,
                        lineHeight: "21.94px",
                        marginBottom: "7px",
                        fontSize: "12px",
                      }}
                    >
                      Phone: (+84).913.882.867 (Mr. Thieu Do Xuan)
                    </Typography>
                    <Typography
                      style={{
                        fontWeight: 400,
                        lineHeight: "21.94px",
                        marginBottom: "7px",
                        fontSize: "12px",
                      }}
                    >
                      Tax Code: 0108018838
                    </Typography>
                    <Typography
                      style={{
                        fontWeight: 400,
                        lineHeight: "21.94px",
                        marginBottom: "7px",
                        fontSize: "12px",
                      }}
                    >
                      Email: kinhdoanh@redeco.vn
                    </Typography>
                    <Typography
                      style={{
                        fontWeight: 400,
                        lineHeight: "21.94px",
                        marginBottom: "7px",
                        fontSize: "12px",
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
                    fontSize: "12px",
                  }}
                >
                  Copyright © 2024 Redeco
                </Typography>
              </div>
            </Col>
          </Row>
        </Box>
      </div>
    </Box>
  );
}
