import { Carousel } from "antd";
import Image from "next/image";
import React from "react";

function Banner({ data }: any) {
 
  return (
    <>
      <div className="xl:flex md:flex lg:flex sm:hidden hidden mt-[100px]">
      <Carousel
        slidesToShow={1}
        slidesToScroll={1}
        dots={false}
        autoplaySpeed={2000}
        autoplay
      >
        {data.map((image: string, index: number) => (
          <div key={index}>
            <Image
              style={{ objectFit: "contain" }}
              alt={""}
              src={image}
              className="w-[100vw]"
            />
          </div>
        ))}
      </Carousel>
    </div>
    <div className="xl:hidden mt-8 lg:hidden md:hidden sm:flex sm:flex-col sm:px-[6%] px-[4%] flex flex-col">
      <div className="w-[100%]">
        <Image
                alt=""
                src={require("../../public/image/product/banner3.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
          />
      </div>
      <div className="w-[100%] flex justify-between">
        <div className="w-[50%] -ml-2 sm:-mr-4">
          <Image
                  alt=""
                  src={require("../../public/image/product/banner1.png")}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
            />
        </div>
        <div className="w-[50%] -mr-2 sm:-mr-4">
          <Image
                  alt=""
                  src={require("../../public/image/product/banner2.png")}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
            />
        </div>
      </div>
    </div>
    </>
  );
}

export default Banner;
