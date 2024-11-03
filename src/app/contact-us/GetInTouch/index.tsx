import { FormCustom } from "@/components";
import Image from "next/image";
import React from "react";

const GetInTouch = ({ setUserNameSubmit, setIsStatusSubmit }: any) => {
  return (
    <div className="w-[100%] 2xl:mt-20 lg:mt-15 mt-10 flex flex-col items-center h-auto bg-red">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center">
          <h3 className="text-blueAccent lg:text-4xl xl:text-4xl md:text-4xl sm:text-3xl text-2xl font-bold">
            GET IN TOUCH
          </h3>
          <div className="w-[40%] xl:h-[4px] lg:h-[4px] md:h-[4px] sm:h-[2px] h-[2px] bg-greenPrimary"></div>
        </div>
        <span
          className="xl:mt-10 md:mt-10 lg:mt-10 sm:mt-6 mt-6 w-[100%] px-[20px] md:px-[10%] xl:px-[20%] text-[#000] text-center
          2xl:text-[20px]"
        >
          We would love to hear from you! If you have any questions or comments
          that you'd like to share with us, please fill out the contact form
          below, or feel free to give us a call at the phone number listed for
          your region.
        </span>
      </div>
      <div className="flex w-[100%] justify-stretch">
        <div className="w-[50%] xl:flex lg:flex md:flex sm:hidden hidden -mt-24">
          <Image
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
            alt="banner"
            src={"/image/aboutUs/banner_get_in_touch.png"}
            width={100}
            height={100}
            unoptimized

          />
        </div>
        <div className="md:w-[50%] w-[100%] w-[100%]md:pr-[30px]">
          <FormCustom
            setUserNameSubmit={setUserNameSubmit}
            setIsStatusSubmit={setIsStatusSubmit}
          ></FormCustom>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
