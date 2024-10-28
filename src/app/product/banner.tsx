import { Carousel } from "antd";
import Image from "next/image";
import React from "react";

function Banner({ data }: any) {
 
  return (
    <div className="mt-[100px]">
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
  );
}

export default Banner;
