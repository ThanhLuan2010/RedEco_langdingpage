import { FormCustom } from "@/components";
import Image from "next/image";
import React from "react";

const GetInTouch = () => {
  return (
    <div className="w-[100%] xl:mt-20 md:mt-20 lg:mt-20 mt-10 flex flex-col items-center h-auto bg-red">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center">
          <h3 className="text-blueAccent text-[48px] font-bold">
            GET IN TOUCH
          </h3>
          <div className="w-[40%] h-[4px] bg-greenPrimary"></div>
        </div>
        <span className="xl:mt-10 md:mt-10 lg:mt-10 mt-2 w-[90%] text-center">
          We would love to hear from you! If you have any questions or comments
          that you'd like to share with us, please fill out the contact form
          below, or feel free to give us a call at the phone number listed for
          your region.
        </span>
      </div>
      <div className="flex w-[100%] justify-stretch">
        <div className="w-[40%] bg-red">
          <Image
            style={{ width: "100%", height: "100%" }}
            alt="banner"
            src={require("../../../public/image/aboutUs/banner_get_in_touch.png")}
          />
        </div>
        <div className="w-[60%] ">
          <FormCustom></FormCustom>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
