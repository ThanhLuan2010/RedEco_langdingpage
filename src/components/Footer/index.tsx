import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface FormData {
  email: string;
}

export default function Footer({ style }: any) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dataSocial = [
    { icon: require("../../assets/image/logo_fb.png"), link: "" },
    { icon: require("../../assets/image/logo_twitter.png"), link: "" },
    { icon: require("../../assets/image/logo_youtube.png"), link: "" },
  ];
  return (
    <div className="bg-[#272727] px-[20px] md:px[5%] xl:px-[10%] w-[100vw] pt-[30px] pb-[40px] mt-[50px] flex justify-between">
      <div>
        <p className="text-white flex">
          How to study Korean © 2024. All Rights Reserved. |{" "}
          <p className="cursor-pointer mx-1 opacity-[0.8] hover:opacity-[1]">
            Privacy Policy
          </p>{" "}
          |
          <p className="cursor-pointer mx-1 opacity-[0.8] hover:opacity-[1]">
            Contact Us
          </p>
        </p>
      </div>
      <div className="flex">
        {dataSocial.map((item, index) => (
          <div className="ml-5" key={index}>
            <img src={item.icon} className="w-[30px] h-[30px]" />
          </div>
        ))}
      </div>
    </div>
  );
}
