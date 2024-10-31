import Image from "next/image";
import React from "react";

function Banner() {
  return (
    <div className="gap-[12px] md:gap-[20px] lg:gap-[28px] xl:gap-[34px] 2xl:gap-[40px] w-full  flex">
      {/* <div className="h-[100%] w-[60%]">
        <Image
          alt="banner_gallery_1"
          src={require("../../../public/image/gallary/banner1.png")}
          objectFit="contain"
          className="h-[100%]"
        />
      </div>

      <div className="gap-[12px] md:gap-[20px] lg:gap-[28px] xl:gap-[34px] 2xl:gap-[40px] w-[40%] h-[100%] bg-red-500 flex flex-col overflow-hidden">
        <div className="w-[100%] h-[50%]  overflow-hidden">
          <Image
            alt="banner_gallery_2"
            src={require("../../../public/image/gallary/banner2.png")}
            objectFit="contain"
            // className="w-[100%] h-[100%]"
          />
        </div>
        <div className="w-[100%]   overflow-hidden">
          <Image
            alt="banner_gallery_3"
            src={require("../../../public/image/gallary/banner3.png")}
            objectFit="contain"
            // className="w-[100%] h-[100%]"
          />
        </div>
      </div> */}
      <div>
        <Image
          alt=""
          src={require("../../../public/image/gallary/gallery_banner.png")}
        />
      </div>
    </div>
  );
}

export default Banner;
