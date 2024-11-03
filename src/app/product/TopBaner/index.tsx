import Image from "next/image";
import React from "react";

function TopBanner() {
  return (
    <div className="flex xl:gap-[50px] lg:gap-[50px] md:gap-[50px] sm:gap-[10px] gap-[10px] w-[100vw]">
      {/* Left */}
      <div className="w-[65%] flex flex-col xl:gap-[50px] lg:gap-[50px] md:gap-[50px] sm:gap-[10px] gap-[10px] xl:h-[100%] lg:h-[100%] md:h-[100%] sm:h-[50%] h-[50%]">
        <Image
          unoptimized
          src={"/image/product_banner1.png"}
          alt=""
          width={100}
          height={100}
          className="h-[100%] w-[100%]"
        />
        <div
          className="bg-gradient-to-l from-[#007BB0] to-[#00366A]  
          xl:h-[60px] lg:h-[60px] md:h-[60px] sm:h-[20px] h-[20px] "
            />
      </div>

      {/* Right */}
      <div className="w-[35%] flex flex-col xl:gap-[50px] lg:gap-[50px] md:gap-[50px] sm:gap-[10px] gap-[10px] xl:h-[100%] lg:h-[100%] md:h-[100%] sm:h-[50%] h-[50%]">
        <div className="h-[100%] overflow-hidden">
          <Image
            unoptimized
            alt=""
            src={"/image/product_banner2.png"}
            width={100}
            height={100}
            className="h-[100%] w-[100%]"
          />
        </div>

        <div className="h-[100%] overflow-hidden">
          <Image
            unoptimized
            alt=""
            src={require("../../../../public/image/product_banner3.png")}
            className="h-[100%] w-[100%]"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
}

export default TopBanner;
