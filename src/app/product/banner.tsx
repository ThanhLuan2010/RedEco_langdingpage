import { Carousel } from "antd";

import React, { useEffect, useState } from "react";

function Banner({ data }: any) {
  const [nextIndex, setNextIndex] = useState(1);

  useEffect(() => {
    // Tạo một khoảng thời gian để thay đổi ảnh
    const interval = setInterval(() => {
      // Thêm hiệu ứng fade out trước khi chuyển ảnh
      setTimeout(() => {
        setNextIndex((nextIndex + 1) % 2);
      }, 500); // thời gian fade (nửa giây)
    }, 3000); // Thay đổi ảnh mỗi 3 giây

    // Xóa interval khi component bị hủy
    return () => clearInterval(interval);
  }, [nextIndex]);

  return (
    <>
      <div className="xl:block md:block lg:block sm:hidden hidden mt-[100px] xl:mt-[120px] 2xl:mt-[140px]">
        <Carousel
          slidesToShow={1}
          slidesToScroll={1}
          dots={false}
          autoplaySpeed={1800}
          autoplay
          infinite
        >
          {data.map((image: string, index: number) => (
            <div key={index}>
              <img
                style={{ objectFit: "contain" }}
                alt={""}
                src={image}
                className="w-[100vw]"
                width={100}
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
