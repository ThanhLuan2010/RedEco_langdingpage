import Image from "next/image";
import React from "react";

function Description2() {
  return (
    <div className="flex flex-col">
      <text className="text-[1rem] text-[#00366A] font-medium">
        June 12, 2022
      </text>
      <text className="mt-[18px] md:mt-[24px] lg:mt-[28px] 2xl:mt-[2rem] text-[1rem] text-[#252724] font-normal">
        REDECO Vietnam Industrial Solutions Joint Stock Company stands at the
        forefront of precision engineering with its state-of-the-art CNC
        (Computer Numerical Control) machining services. With a commitment to
        excellence, we ensure unparalleled accuracy and efficiency in producing
        complex components, catering to various industries such as automotive,
        electronics, and medical devices.
      </text>

      <div className="flex flex-col md:flex-row mt-[20px]">
        <div className="w-[100%] md:w-[60%] flex flex-col ">
          <text>
            Our advanced CNC technology allows us to create intricate parts with
            exceptional precision, meeting the diverse needs of our clients. At
            REDECO, we utilize a comprehensive range of cutting-edge machinery,
            including CNC milling machines, lathes, and drilling equipment,
            enabling us to handle various materials. Whether you require
            lightweight aluminum components, durable stainless steel parts, or
            high-performance plastics, our facilities are equipped to deliver
            quality results.
          </text>

          <text className="mt-[6px]">
            Innovation is at the heart of our operations. We continuously invest
            in the latest machining technologies and methodologies to remain at
            the forefront of industry advancements. This includes adopting
            automated solutions and intelligent manufacturing processes that
            enhance production efficiency while minimizing waste. Our team of
            skilled engineers and technicians undergo regular training to stay
            updated on the latest machining techniques and best practices,
            ensuring we deliver the best outcomes for our clients.
          </text>
        </div>

        <div className="w-[100%] md:w-[40%] h-auto items-center flex object-contain mt-[24px] md:mt-0 md:ml-[3%]">
          <Image alt="" src={require("../../public/image/news2-banner1.png")} />
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row mt-4 md:mt-6 lg:mt-8 2xl:mt-10">
        <div className="w-[100%] md:w-[40%] h-auto ml-0 flex mr-0 md:mr-[3%] ">
          <Image
            alt=""
            style={{ width: "110%", height: "110%", objectFit: "cover" }}
            src={require("../../public/image/news2-banner2.png")}
          />
        </div>

        <div className="w-[100%] md:w-[60%] flex flex-col justify-center">
          <text className="mt-[5px]">
            Quality assurance is a cornerstone of our operations at REDECO. Our
            ISO-certified quality management system guarantees that every
            component produced meets rigorous standards for precision and
            reliability. We perform thorough inspections and testing at each
            stage of the manufacturing process, ensuring that all products meet
            and exceed customer expectations. This dedication to quality has
            earned us a reputation as a trusted partner for clients in various
            sectors, including automotive, electronics, aerospace, and medical
            devices.
          </text>
          <text className="mt-[20px]">
            Our commitment to customer satisfaction drives us to provide
            tailored solutions that meet specific project requirements. We
            understand that each project is unique, and we work closely with our
            clients to understand their needs and deliver customized machining
            solutions. Our team is dedicated to ensuring a smooth and efficient
            process from the initial design phase to final production.
          </text>
        </div>
      </div>
    </div>
  );
}

export default Description2;
