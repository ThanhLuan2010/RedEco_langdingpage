import { Typography } from "antd";
import Image from "next/image";
import React, { useState } from "react";

function OtherProduct() {
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
      <div className="relative flex justify-center mt-24">
        <Typography
          style={{
            fontSize: "2rem",
            lineHeight: "50px",
            fontFamily: "Montserrat",
            fontWeight: "700",
            position: "relative",
            paddingBottom: "10px",
            color: "#00366A",
          }}
        >
          OTHER PRODUCT
          <span
            style={{
              position: "absolute",
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: "100px",
              height: "5px",
              backgroundColor: "#00A859",
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

          <div className="border-[2px] border-[#00366A] p-[20px] rounded-[12px] mt-[70px] bg-white">
            <Image
              src={require("../../public/image/banner-otherProduct.png")}
              alt=""
            />
          </div>
          <div className="flex overflow-hidden h-[40vh] gap-[35px] mt-[40px]">
            <div className="gap-[35px] overflow-hidden w-1/3 flex flex-col">
              <div className="h-[100%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
                <Image
                  alt=""
                  src={require("../../public/image/other-product1.png")}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  className="transition-transform duration-300 ease-in-out hover:scale-125"
                />
              </div>
            </div>

            <div className="gap-[35px] overflow-hidden w-1/3 flex flex-col">
              <div className="h-[100%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
                <Image
                  alt=""
                  src={require("../../public/image/other-product2.png")}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  className="transition-transform duration-300 ease-in-out hover:scale-125"
                />
              </div>
            </div>

            <div className="gap-[35px] overflow-hidden w-1/3 flex flex-col">
              <div className="h-[100%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
                <Image
                  alt=""
                  src={require("../../public/image/other-product3.png")}
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

export default OtherProduct;
