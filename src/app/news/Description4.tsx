import Image from "next/image";
import React from "react";

function Description4() {
  return (
    <div className="flex flex-col">
      <text className="text-[1rem] text-[#00366A] font-medium">
        September 28, 2024
      </text>
      <text className="mt-[20px] md:mt-[24px] lg:mt-[28px] xl:mt-[30px] 2xl:mt-[32px] text-[1rem] text-[#252724] font-medium">
        At REDECO, we pride ourselves on offering a wide range of CNC machining
        services designed to meet diverse industrial needs. Our capabilities
        include <strong>precision milling, turning,</strong> and{" "}
        <strong>drilling;</strong> all performed using advanced CNC machines
        from leading brands. Whether you require{" "}
        <strong>prototype development</strong> or
        <strong> large-scale production</strong>, our skilled team can handle
        projects of any size and complexity.
      </text>

      <div className="flex flex-col md:flex-row">
        <div className="w-[100%] md:w-[60%] flex flex-col">
          <text className="text-[20px] md:text-[24px] lg:text-[28px] mt-[24px] mg:mt-[32px] lg:mt-[36px] 2xl:mt-[40px] font-bold text-[#00366A]">
            Precision Milling
          </text>
          <text className="mt-[8px] md:mt-[10px]">
            Our CNC milling services are ideal for creating intricate parts with
            <strong> high precision.</strong> We can manufacture complex
            geometries with tight tolerances using cutting-edge milling
            machines, ensuring that each component meets our client's exact
            specifications.
          </text>

          <text className="text-[20px] md:text-[24px] lg:text-[28px] mt-[24px] mg:mt-[32px] lg:mt-[36px] 2xl:mt-[40px] font-bold text-[#00366A]">
            CNC Turning
          </text>

          <text className="mt-[8px] md:mt-[10px] text-[1rem] text-[#252724] font-medium  2xl:leading-[36px]">
            Our CNC turning services offer <strong>excellent accuracy</strong>{" "}
            and surface finish for components requiring precision cylindrical
            shaping. We can efficiently produce parts that meet your design
            requirements for small or large production runs.
          </text>
        </div>

        <div className="w-[100%] md:w-[40%] h-auto items-center flex object-contain md:mt-0 mt-[24px] md:ml-[3%]">
          <Image alt="" src={require("../../public/image/news4-banner1.png")} />
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row  md:mt-2 lg:mt-4 mt-0 2xl:mt-10">
        <div className="w-[100%] md:w-[40%] h-auto  items-center flex object-contain mr-[3%]">
          <Image alt="" src={require("../../public/image/news4-banner2.png")} />
        </div>

        <div className="w-[100%] md:w-[60%] flex flex-col justify-center">
          <text className="text-[20px] md:text-[24px] lg:text-[28px] mt-[24px] mg:mt-[32px] lg:mt-[36px] 2xl:mt-[40px] font-bold text-[#00366A]">
            Drilling and Boring
          </text>
          <text className="mt-[5px]">
            Our CNC drilling and boring capabilities allow us to perform precise
            hole-making and finishing operations. With advanced tooling, we
            ensure <strong>consistent hole placement</strong> and{" "}
            <strong>smooth finishes</strong>, even in challenging materials.
          </text>

          <text className="text-[20px] md:text-[24px] lg:text-[28px] mt-[24px] mg:mt-[32px] lg:mt-[36px] 2xl:mt-[40px] font-bold text-[#00366A]">
            Prototype to Production
          </text>

          <text className="mt-[5px] text-[1rem] text-[#252724] font-medium">
            REDECO provides flexible and efficient CNC machining solutions for
            everything from early-stage prototypes to full-scale production. Our
            engineers and technicians work closely with clients to ensure that
            every project from <strong>one-off prototypes</strong> to{" "}
            <strong>mass production</strong> is delivered with precision and
            quality.
          </text>
        </div>
      </div>

      <div className="flex flex-col md:flex-row mt-3 md:mt-5 lg:mt-7 xl:mt-10 2xl:mt-12">
        <div className="w-[100%] md:w-[60%] flex flex-col justify-center">
          <text className="text-[20px] md:text-[24px] lg:text-[28px] mt-[24px] mg:mt-[32px] lg:mt-[36px] 2xl:mt-[40px] font-bold text-[#00366A]">
            Materials Expertise
          </text>
          <text className="mt-[5px]">
            At REDECO Vietnam Industrial Solutions JSC, we have extensive
            experience in machining various materials, including{" "}
            <strong>aluminum, stainless steel, plastics, rubber,</strong> and
            <strong> silicone.</strong> Our deep material knowledge allows us to
            optimize machining processes and deliver superior results for each
            type of material.
          </text>

          <text className="mt-[20px] text-[1rem] text-[#252724] font-medium">
            Trust <strong>REDECO CNC</strong> for reliable, high-quality
            machining solutions that drive your business forward. Our commitment
            to innovation, quality, and timely delivery ensures that your CNC
            machining needs are met with excellence at every step.
          </text>
        </div>

        <div className="w-[100%] md:w-[40%] h-auto  items-center flex object-contain mt-[24px] md:mt-0 md:ml-[3%] justify-center">
          <Image alt="" src={require("../../public/image/news4-banner3.png")} />
        </div>
      </div>
    </div>
  );
}

export default Description4;
