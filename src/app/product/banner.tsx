import FadeImage from "@/components/FadeImage";
import { Carousel } from "antd";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function Banner({ data }: any) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    // Tạo một khoảng thời gian để thay đổi ảnh
    const interval = setInterval(() => {
      // Thêm hiệu ứng fade out trước khi chuyển ảnh
      setFade(false);
      setTimeout(() => {
        setCurrentIndex(nextIndex);
        setNextIndex((nextIndex + 1) % 2);
        // setCurrentIndex((prevIndex) => (prevIndex + 1) % 2);
        setFade(true);
      }, 500); // thời gian fade (nửa giây)
    }, 3000); // Thay đổi ảnh mỗi 3 giây

    // Xóa interval khi component bị hủy
    return () => clearInterval(interval);
  }, [nextIndex]);

  const images = {
    image3: ["/image/product/banner3.png", "/image/product/banner3.1.png"],
    image1: ["/image/product/banner1.png", "/image/product/banner1.1.png"],
    image2: ["/image/product/banner2.png", "/image/product/banner2.1.png"],
  };
  const images2 = {
    image1: ["/image/product/banner3.png", "/image/product/banner3.1.png"],
    image2: ["/image/product/banner3.png", "/image/product/banner3.1.png"],
    image3: ["/image/product/banner3.png", "/image/product/banner3.1.png"],
  };

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
   
    </>
  );
}

export default Banner;
