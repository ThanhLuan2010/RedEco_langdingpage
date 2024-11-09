
import React from "react";

function Banner() {
  return (
    <div className="gap-[12px] md:gap-[20px] lg:gap-[28px] xl:gap-[34px] 2xl:gap-[40px] w-full">
      <div>
        <img
          alt=""
          src={require("../../../assets/image/gallary/gallery_banner.png")}
          width={100}
          className="w-[100vw] h-[100%]"
          height={100}
          

        />
      </div>
    </div>
  );
}

export default Banner;
