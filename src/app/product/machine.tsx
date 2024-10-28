import { Typography } from "antd";
import Image from "next/image";
import React, { useState } from "react";

function Machine() {
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
      <div className="flex gap-[50px] h-[90vh]">
        <div className="w-[65%] flex flex-col gap-[50px] h-[100%]">
          <Image
            src={require("../../public/image/product_banner1.png")}
            alt=""
            style={{ height: "100%" }}
          />
          <div className="bg-gradient-to-l from-[#007BB0] to-[#00366A]  h-[60px]" />
        </div>

        <div className="w-[35%] flex flex-col gap-[50px] h-[100%]">
          <div className="h-[100%] overflow-hidden">
            <Image
              alt=""
              src={require("../../public/image/product_banner2.png")}
              className="h-[100%] "
            />
          </div>

          <div className="h-[100%] overflow-hidden">
            <Image
              alt=""
              src={require("../../public/image/product_banner3.png")}
              className="h-[100%]"
            />
          </div>
        </div>
      </div>

      <div className="relative flex justify-center mt-20">
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
          MACHINE COMPONENTS & DETAIL
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
          <div className="flex justify-center ">
            {Object.keys(categories).map((category) => (
              <button
                key={category}
                className={`px-4 py-2 mx-2 rounded-lg ${
                  selectedCategory === category
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="flex overflow-hidden h-[90vh] gap-[35px] mt-[70px]">
            <div className="gap-[35px] overflow-hidden w-[25%] flex flex-col">
              <div className="h-[55%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
                <Image
                  alt=""
                  src={require("../../public/image/product1.1.png")}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  className="transition-transform duration-300 ease-in-out hover:scale-125"
                />
              </div>
              <div className="h-[45%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
                <Image
                  alt=""
                  src={require("../../public/image/product1.2.png")}
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
              <div className="h-[35%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
                <Image
                  alt=""
                  src={require("../../public/image/product1.3.png")}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  className="transition-transform duration-300 ease-in-out hover:scale-125"
                />
              </div>
              <div className="h-[65%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
                <Image
                  alt=""
                  src={require("../../public/image/product1.4.png")}
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
              <div className="h-[50%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
                <Image
                  alt=""
                  src={require("../../public/image/product1.1.png")}
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
                  src={require("../../public/image/product1.2.png")}
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
              <div className="h-[30%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
                <Image
                  alt=""
                  src={require("../../public/image/product1.7.png")}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  className="transition-transform duration-300 ease-in-out hover:scale-125"
                />
              </div>
              <div className="h-[70%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
                <Image
                  alt=""
                  src={require("../../public/image/product1.8.png")}
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

export default Machine;
