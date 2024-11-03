import Image from "next/image";
import React from "react";

function ScopeOfService() {
  const listService = [
    {
      icon: "/image/aboutUs/scope_icon1.png",
      title: "Conveyor and Handling Solutions",
      descption:
        "To ensure efficient and automated production, we design and manufacture special-purpose machinery powered by hydraulic, pneumatic, and mechanical systems controlled via microcontrollers or PLCs (Programmable Logic Controllers).",
    },
    {
      icon: "/image/aboutUs/scope_icon2.png",
      title: "Production Jigs",
      descption:
        "We supply jigs for critical manufacturing processes such as welding, painting, assembly, and operational tasks, enhancing precision and workflow.",
    },
    {
      icon: "/image/aboutUs/scope_icon3.png",
      title: "Conveyor and Handling Solutions",
      descption:
        "We provide conveyor systems—including carousel, roller, and chain conveyors—to transport semi-finished and finished products smoothly and efficiently through the production line.",
    },
    {
      icon: "/image/aboutUs/scope_icon4.png",
      title: "Logistics Support Equipment",
      descption:
        "Our offerings include pallets, trolleys, and forklifts to ensure safe and efficient movement and handling of materials within the production environment.",
    },
    {
      icon: "/image/aboutUs/scope_icon5.png",
      title: "Component Trading",
      descption:
        "We trade high-quality components essential for production, ensuring our clients can access reliable materials and parts.",
    },
  ];

  const renderItem = (item: any, index: number) => {
    return (
      <div className="flex flex-row justify-center items-start gap-[20px] md:gap-[24] lg:gap-[28px] xl:gap-[32px] 2xl:gap-[36px] w-[100%] mt-[28px] md:mt-[30px]  2xl:mt-[40px]">
        <div className="w-[48px] md:w-[58px] lg:w-[68px] xl:w-[75px] 2xl:w-[80px] ">
          <Image
            className="h-[100%] w-[100%] object-fill"
            alt=""
            src={item.icon}
            width={100}
            height={100}
            unoptimized
          />
        </div>
        <div className="w-[100%]">
          <div className="text-[#00366A] font-semibold text-[16px] md:text-[24px] 2xl:text-[32px]">
            <text>{item.title}</text>
          </div>
          <div className="text-[#252724] mt-[12px] text-[16px] md:text-[17px] 2xl:text-[18px]">
            <text
              className="
            text-[16px] 2xl:text-[20px]
            line-clamp-5 
            leading-[20px] md:leading-[22px] lg:leading-[26px] xl:leading-[30px] 2xl:leading-[36px]
            "
            >
              {item.descption}
            </text>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="mt-[40px] md:mt-[60px] lg:mt-[80px] xl:mt-[100px] 2xl:mt-[140px] pb-[48px] md:pb-[70px] lg:pb-[90px] xl:pb-[110px] 2xl:pb-[140px] px-[20px] md:px-[5%] xl:px-[10%]">
      <div className="justify-center flex items-center ">
        <text className="text-[24px] md:text-[30px] lg:text-[38px] xl:text-[40px] 2xl:text-[48px] font-bold pb-[4px] relative text-[#00366A]">
          SCOPE OF SERVICE
          <span className="absolute bottom-0 left-[50%] translate-x-[-50%] w-[25%] h-[2px] md:h-[3px] xl:[4px] 2xl:h-[5px] bg-[#00A859]" />
        </text>
      </div>

      <div className="mt-[18px] md:mt-[24px] lg:mt-[30px] xl:mt-[50px] 2xl:mt-[40px] text-center">
        <text className=" 2xl:text-[20px]">
          REDECO VIETNAM offers a wide range of solutions tailored to meet the
          unique needs of each customer
        </text>
      </div>

      <div className="mt-[36px] md:mt-[46px] lg:mt-[56px] xl:mt-[66px] 2xl:mt-[80px] flex flex-col-reverse md:flex-row gap-[32px] md:gap-[46px] lg:gap-[58] xl:gap-[70px] 2xl:gap-[92px]">
        <div className="w-100% md:w-[50%]">
          <Image
            alt=""
            src={"/image/aboutUs/scope_of_service.png"}
            className="object-contain w-[100%] h-[100%]"
            width={100}
            height={100}
            unoptimized
          />
        </div>
        <div className="w-100% md:w-[50%]">{listService?.map(renderItem)}</div>
      </div>
    </div>
  );
}

export default ScopeOfService;
