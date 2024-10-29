import { Typography } from "antd";
import Image from "next/image";
import React, { useState } from "react";

function PlasticProduct() {
  const [selectedCategory, setSelectedCategory] =
    useState<string>("Category 01");

  const categories: any = {
    "Category 01": [
      { image: require("../../public/image/product1.1.png"), height: "60%" },
      { image: require("../../public/image/product1.2.png"), height: "40%" },
      { image: require("../../public/image/product1.3.png"), height: "50%" },
      { image: require("../../public/image/product1.4.png"), height: "50%" },
      { image: require("../../public/image/product1.5.png"), height: "50%" },
      { image: require("../../public/image/product1.6.png"), height: "50%" },
      { image: require("../../public/image/product1.7.png"), height: "50%" },
      { image: require("../../public/image/product1.8.png"), height: "50%" },
    ],
    "Category 02": [
      require("../../public/image/product2.1.png"),
      require("../../public/image/product2.2.png"),
      require("../../public/image/product2.3.png"),
      require("../../public/image/product2.4.png"),
      require("../../public/image/product2.5.png"),
      require("../../public/image/product2.6.png"),
      require("../../public/image/product2.7.png"),
      require("../../public/image/product2.8.png"),
    ],
    "Category 03": [
      require("../../public/image/product3.1.png"),
      require("../../public/image/product3.2.png"),
      require("../../public/image/product3.3.png"),
      require("../../public/image/product3.4.png"),
      require("../../public/image/product3.5.png"),
      require("../../public/image/product3.6.png"),
      require("../../public/image/product3.7.png"),
      require("../../public/image/product3.8.png"),
    ],
  };
  return (
    <div>
      <div className="relative flex justify-center xl:mt-20 lg:mt-20 md:mt-20 sm:-mt-[90%] -mt-[200px]">
        <Typography
          style={{
            fontSize: "2rem",
            lineHeight: "50px",
            fontFamily: "Montserrat",
            fontWeight: "700",
            position: "relative", // Để định vị đường viền
            paddingBottom: "10px", // Khoảng cách giữa chữ và border
            color: "#00366A",
          }}
        >
          <span className="xl:text-[2rem] sm:px-[10px] px-[10px] lg:px-[0px] md:px-[0px] xl:px-[0px] flex text-center md:text-[2rem] lg:text-[2rem] sm:text-[28px] justify-center items-center w-[100%] text-[28px]">PLASTIC INJECTION PRODUCTS</span> 
          {/* Đường viền */}
          <span
            style={{
              position: "absolute",
              bottom: 0, // Đặt đường viền sát dưới chữ
              left: "50%", // Căn giữa theo chiều ngang
              transform: "translateX(-50%)", // Căn chỉnh chính xác vị trí giữa
              width: "100px", // Chiều rộng của đường viền (ngắn hơn width chữ)
              height: "5px", // Độ dày của đường viền
              backgroundColor: "#00A859", // Màu sắc của đường viền
            }}
          />
        </Typography>
      </div>

      <div className="mt-[40px]">
        <div className="px-[10%]">
          <div className="flex overflow-hidden h-[90vh] gap-[35px] mt-[70px]">
            <div className="gap-[35px] overflow-hidden w-[25%] flex flex-col">
              <div className="h-[53%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
                <Image
                  alt=""
                  src={require("../../public/image/plastic1.png")}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  className="transition-transform duration-300 ease-in-out hover:scale-125"
                />
              </div>
              <div className="h-[47%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
                <Image
                  alt=""
                  src={require("../../public/image/plastic2.png")}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  className="transition-transform duration-300 ease-in-out hover:scale-125"
                />
              </div>
            </div>

            <div className="gap-[35px] overflow-hidden w-[25%] flex flex-col">
              <div className="h-[45%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
                <Image
                  alt=""
                  src={require("../../public/image/plastic3.png")}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  className="transition-transform duration-300 ease-in-out hover:scale-125"
                />
              </div>
              <div className="h-[50%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
                <Image
                  alt=""
                  src={require("../../public/image/plastic4.png")}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  className="transition-transform duration-300 ease-in-out hover:scale-125"
                />
              </div>
            </div>

            <div className="gap-[35px] overflow-hidden w-[25%] flex flex-col">
              <div className="h-[53%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
                <Image
                  alt=""
                  src={require("../../public/image/plastic5.png")}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  className="transition-transform duration-300 ease-in-out hover:scale-125"
                />
              </div>
              <div className="h-[46%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
                <Image
                  alt=""
                  src={require("../../public/image/plastic6.png")}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  className="transition-transform duration-300 ease-in-out hover:scale-125"
                />
              </div>
            </div>

            <div className="gap-[35px] overflow-hidden w-[25%] flex flex-col">
              <div className="h-[60%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
                <Image
                  alt=""
                  src={require("../../public/image/plastic7.png")}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  className="transition-transform duration-300 ease-in-out hover:scale-125"
                />
              </div>
              <div className="h-[40%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
                <Image
                  alt=""
                  src={require("../../public/image/plastic8.png")}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  className="transition-transform duration-300 ease-in-out hover:scale-125"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlasticProduct;
