import Image from "next/image";
import React from "react";

function Banner() {
  return (
    <div className="grid grid-cols-3 gap-4 w-full h-[600px] xl:h-[85vh]">
      <div className="col-span-2 md:h-auto xl:h-auto lg:h-auto h-[50%] relative">
        <Image
          alt="banner_gallery_1"
          src={require("../../../public/image/gallary/banner1.png")}
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>

      <div className="grid md:h-auto xl:h-auto lg:h-auto h-[50%] grid-rows-2 gap-4">
        <div className="relative">
          <Image
            alt="banner_gallery_2"
            src={require("../../../public/image/gallary/banner2.png")}
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
        </div>
        <div className="relative">
          <Image
            alt="banner_gallery_3"
            src={require("../../../public/image/gallary/banner3.png")}
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
