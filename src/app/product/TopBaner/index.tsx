import Image from "next/image";
import React from "react";

function TopBanner() {
  return (
    <div className="flex xl:gap-[50px] lg:gap-[50px] md:gap-[50px] sm:gap-[10px] gap-[10px] w-[100vw] ">
      <div className="w-[100%] flex flex-col md:gap-[50px] gap-[10px]">
        <Image
          unoptimized
          src={"/image/product_banner1.png"}
          alt=""
          width={100}
          height={100}
          className="h-[100%] w-[100%]"
        />
      </div>
    </div>
  );
}

export default TopBanner;
