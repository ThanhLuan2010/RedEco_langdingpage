
import React from "react";

function Description4() {
  return (
    <div className="flex flex-col">
      <text className="text-[1rem] text-[#00366A] font-semibold">
        September 28, 2024
      </text>
      <text
        className="mt-[20px] md:mt-[24px] lg:mt-[28px] xl:mt-[30px] 2xl:mt-[32px] text-[#252724] md:leading-[26px] 2xl:leading-[32px]
            text-[15px] md:text-[16px] 2xl:text-[18px]"
      >
        At REDECO, we pride ourselves on offering a wide range of CNC machining
        services designed to meet diverse industrial needs. Our capabilities
        include <strong>precision milling, turning,</strong> and{" "}
        <strong>drilling;</strong> all performed using advanced CNC machines
        from leading brands. Whether you require{" "}
        <strong>prototype development</strong> or
        <strong> large-scale production</strong>, our skilled team can handle
        projects of any size and complexity.
      </text>

      <div className="flex flex-col md:flex-row items-center mt-[24px] mg:mt-[32px] lg:mt-[36px] 2xl:mt-[40px]">
        <div className="w-[100%] md:w-[60%] flex flex-col">
          <text className="text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] 2xl:text-[28px]  font-bold text-[#00366A] ">
            Precision Milling
          </text>
          <text
            className="mt-[8px] md:mt-[10px] md:leading-[26px] 2xl:leading-[32px]
            text-[15px] md:text-[16px] 2xl:text-[18px] "
          >
            Our CNC milling services are ideal for creating intricate parts with
            <strong> high precision.</strong> We can manufacture complex
            geometries with tight tolerances using cutting-edge milling
            machines, ensuring that each component meets our client's exact
            specifications.
          </text>

          <text className="text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] 2xl:text-[28px] mt-[24px] mg:mt-[32px] lg:mt-[36px] 2xl:mt-[40px] font-bold text-[#00366A]">
            CNC Turning
          </text>

          <text
            className="mt-[8px] md:mt-[10px] text-[#252724] font-medium md:leading-[26px] 2xl:leading-[32px]
            text-[15px] md:text-[16px] 2xl:text-[18px]"
          >
            Our CNC turning services offer <strong>excellent accuracy</strong>{" "}
            and surface finish for components requiring precision cylindrical
            shaping. We can efficiently produce parts that meet your design
            requirements for small or large production runs.
          </text>
        </div>

        <div className="w-[100%] md:w-[40%] h-auto items-center flex object-contain  mt-[24px] md:mt-0 md:ml-[3%]">
          <img
            alt=""
            className="w-[100%]"
            src={require("../../assets/image/news4-banner1.png")}
            width={100}
            height={100}
          />
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row mt-[24px] mg:mt-[32px] lg:mt-[36px] 2xl:mt-[40px]">
        <div className="w-[100%] md:w-[40%] h-auto items-center flex object-contain mr-[3%]">
          <img
            alt=""
            className="w-[100%] h-[100%]"
            src={require("../../assets/image/news4-banner2.png")}
            width={100}
            height={100}
          />
        </div>

        <div className="w-[100%] md:w-[60%] flex flex-col justify-center ">
          <text className="text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] 2xl:text-[28px]  font-bold text-[#00366A]">
            Drilling and Boring
          </text>
          <text
            className="mt-[5px] md:leading-[26px] 2xl:leading-[32px]
            text-[15px] md:text-[16px] 2xl:text-[18px]"
          >
            Our CNC drilling and boring capabilities allow us to perform precise
            hole-making and finishing operations. With advanced tooling, we
            ensure <strong>consistent hole placement</strong> and{" "}
            <strong>smooth finishes</strong>, even in challenging materials.
          </text>

          <text className="text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] 2xl:text-[28px] mt-[24px] mg:mt-[32px] lg:mt-[36px] 2xl:mt-[40px] font-bold text-[#00366A]">
            Prototype to Production
          </text>

          <text
            className="mt-[5px] text-[#252724] md:leading-[26px] 2xl:leading-[32px]
            text-[15px] md:text-[16px] 2xl:text-[18px]"
          >
            REDECO provides flexible and efficient CNC machining solutions for
            everything from early-stage prototypes to full-scale production. Our
            engineers and technicians work closely with clients to ensure that
            every project from <strong>one-off prototypes</strong> to{" "}
            <strong>mass production</strong> is delivered with precision and
            quality.
          </text>
        </div>
      </div>

      <div className="flex flex-col md:flex-row mt-[24px] mg:mt-[32px] lg:mt-[36px] 2xl:mt-[40px]">
        <div className="w-[100%] md:w-[60%] flex flex-col justify-center">
          <text className="text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] 2xl:text-[28px]  font-bold text-[#00366A]">
            Materials Expertise
          </text>
          <text
            className="mt-[5px] md:leading-[26px] 2xl:leading-[32px]
            text-[15px] md:text-[16px] 2xl:text-[18px]"
          >
            At REDECO Vietnam Industrial Solutions JSC, we have extensive
            experience in machining various materials, including{" "}
            <strong>aluminum, stainless steel, plastics, rubber,</strong> and
            <strong> silicone.</strong> Our deep material knowledge allows us to
            optimize machining processes and deliver superior results for each
            type of material.
          </text>

          <text
            className="mt-[20px]  text-[#252724] md:leading-[32px] 2xl:leading-[36px]
            text-[16px] md:text-[17px] lg:text-[18px] xl:text-[19px] 2xl:text-[20px]"
          >
            Trust <strong>REDECO CNC</strong> for reliable, high-quality
            machining solutions that drive your business forward. Our commitment
            to innovation, quality, and timely delivery ensures that your CNC
            machining needs are met with excellence at every step.
          </text>
        </div>

        <div className="w-[100%] md:w-[40%] h-auto  items-center flex object-contain mt-[24px] md:mt-0 md:ml-[3%] justify-center">
          <img
            alt=""
            className="w-[100%]"
            src={require("../../assets/image/news4-banner3.png")}
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
}

export default Description4;
