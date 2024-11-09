import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
function Banner() {
  const router = useRouter();
  return (
    <div className="relative overflow-hidden">
      <div>
        <Image alt="banner" unoptimized src={"/image/aboutUs/top_banner.png"} width={100} height={100} className="w-[100vw] h-[100%]" />
      </div>

      <div className="absolute top-0 h-[100%] flex flex-col justify-center px-[20px] md:px-[5%] xl:px-[10%] text-white overflow-hidden mx-[20px] md:mx:0 md:translate-y-[-9%]">
        <text className="font-bold text-[20px] sm:text-[30px] md:text-[40px] lg:text-[45px] 2xl:text-[60px] leading-[30px] md:leading-[40px] lg:leading-[73.14px]">
          We <span style={{ color: "#28FF90" }}>Provide</span> The Best
        </text>
        <text className="font-bold text-[20px] sm:text-[30px] md:text-[40px] lg:text-[45px]  2xl:text-[60px] leading-[30px] md:leading-[40px] lg:leading-[73.14px] flex lg:hidden">
          industrial solution
        </text>

        <text className="font-bold text-[20px] sm:text-[30px] md:text-[40px] lg:text-[45px]  2xl:text-[60px] leading-[30px] md:leading-[40px] lg:leading-[73.14px] lg:flex hidden">
          industrial solution for business
        </text>

        <text className="md:mt-[18px] 2xl:mt-[32px] xl:mb-[40px] hidden md:flex 2xl:text-[20px]">
          We have almost 8+ years of experience for helping industrial services
          and business solutions
        </text>

        <div className="flex gap-[20px] xl:gap-[35px] mt-[32px] md:mt-[18px] 2xl:mt-[35px] w-[50vw] md:w-[50%] lg:w-[70%]">
          <button
            onClick={() => router.push("/product")}
            className="
            bg-gradient-to-r from-[#28FF90] -7.86% to-[#00954F] 67.26% py-[10px] 
            md:py-[15px] xl:py-[15px] 2xl:py-[20px] rounded-[8px] text-[8px] 
            md:text-[12px] ld:text-[13px] xl:text-[15px] 2xl:text-[20px] w-[50%] font-bold"
          >
            OUR PRODUCTS
          </button>

          <button
            onClick={() => router.push("/contact-us")}
            className="py-[10px] 
            md:py-[15px] xl:py-[15px] 2xl:py-[20px] rounded-[8px] w-[50%] border-[1px] border-[#F0F0F0] font-bold text-[8px] md:text-[12px] ld:text-[13px] xl:text-[15px] 2xl:text-[20px]"
          >
            CONTACT US
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
