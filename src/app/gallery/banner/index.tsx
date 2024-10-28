import Image from 'next/image';
import React from 'react';

function Banner() {
  return (
    <div className="grid grid-cols-3 gap-4 w-full h-[600px]">
      <div className="col-span-2 bg-red-500 relative">
        <Image
          alt="banner_gallery_1"
          src={require("../../../public/image/gallary/banner1.png")}
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>

      <div className="grid grid-rows-2 gap-4">
        <div className="bg-green-500 relative">
          <Image
            alt="banner_gallery_2"
            src={require("../../../public/image/gallary/banner2.png")}
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
        </div>
        <div className="bg-green-500 relative">
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
