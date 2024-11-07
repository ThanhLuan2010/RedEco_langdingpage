import { Carousel } from "antd";
import Image from "next/image";
import React from "react";

function Banner({ data }: any) {
  return (
    <>
      <div className="xl:block md:block lg:block sm:hidden hidden mt-[100px] xl:mt-[120px] 2xl:mt-[140px]">
        <Carousel
          slidesToShow={1}
          slidesToScroll={1}
          dots={false}
          autoplaySpeed={1800}
          autoplay
        >
          {data.map((image: string, index: number) => (
            <div key={index}>
              <Image
                style={{ objectFit: "contain" }}
                alt={""}
                src={image}
                className="w-[100vw]"
                width={100}
                unoptimized
                height={100}
              />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="xl:hidden mt-8 lg:hidden md:hidden sm:flex sm:flex-col flex flex-col px-[20px] md:px-[5%] xl:px-[10%]">
        <div className="w-[100%]">
          <Image
            unoptimized
            alt=""
            src={"/image/product/banner3.png"}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
            width={100}
            height={100}
          />
        </div>
        <div className="w-[100%] gap-[20px] md:gap-[30px] xl:gap-[40px] flex">
          <div className="w-[50%]">
            <Image
              alt=""
              unoptimized
              src={"/image/product/banner1.png"}
              width={100}
              height={100}
              className="w-[100%] h-[100%] object-fill"
            />
          </div>
          <div className="w-[50%] object-fill">
            <Image
              unoptimized
              alt=""
              src={"/image/product/banner2.png"}
              width={100}
              height={100}
              className="w-[100%] h-[100%] object-fill"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
