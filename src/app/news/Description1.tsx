
import React from "react";

function Description1() {
  return (
    <div className="flex flex-col">
      <text className="text-[1rem] text-[#00366A] font-semibold">
        October 23, 2021
      </text>
      <text className="mt-[18px] md:mt-[24px] lg:mt-[28px] 2xl:mt-[2rem] text-[#000000] font-medium md:font-semibold text-[16px] md:text-[17px] 2xl:text-[18px]">
        Regarding CNC machining, REDECO Vietnam JSC sets the standard for
        excellence. We are committed to delivering quality, innovation, and
        complete customer satisfaction, ensuring every project is completed to
        the highest standards.
      </text>

      <div className="flex flex-col sm:flex-col md:flex-row mt-[20px] md:mt-[30px] 2xl:mt-[40px]">
        <div className="sm:w-[100%] md:w-[60%] flex flex-col">
          <text className="text-[20px] md:text-[24px] lg:text-[28px] xl:text-[30px] 2xl:text-[32px] font-bold text-[#00366A]">
            State-of-the-Art Facilities
          </text>
          <text className="mt-[5px] text-[15px] md:text-[16px] 2xl:text-[18px]">
            With two modern factories covering a total area of 1540 m², REDECO
            is equipped with a wide range of advanced machinery:
            <ul className="ml-2 ">
              <li className="mt-[1px]">• 20 CNC milling</li>
              <li className="mt-[1px]">• 5 CNC lathes</li>
              <li className="mt-[1px]">• 4 CNC wire-cutting machines</li>
              <li className="mt-[1px]">• 1 CNC pulse machine</li>
              <li className="mt-[1px]">• Two laser engraving machines</li>
              <li className="mt-[1px]">• 1 CMM (Coordinate Measuring Machine)</li>
              <li className="mt-[1px]">
                • And many other specialized mechanical machines
              </li>
            </ul>
          </text>

          <text className="text-[20px] md:text-[24px] lg:text-[28px] xl:text-[30px] 2xl:text-[32px] font-bold text-[#00366A] mt-[20px]">
            Cutting-Edge CNC Technology
          </text>

          <text className="mt-[0px] text-[15px] md:text-[16px] 2xl:text-[18px] text-[#252724] font-normal leading-[30px]">
            We invest in the latest CNC technology, which allows us to machine
            parts with <strong>high precision, superior durability</strong>, and{" "}
            <strong> cost efficiency</strong>. This enables us to meet various
            customer requirements, from minor details to complex projects.
          </text>
        </div>

        <div className="sm:w-[100%] md:w-[40%] h-auto items-center flex object-contain mt-[24px] md:mt-0 md:ml-[3%]">
          <img
            alt=""
            
            src={require("../../assets/image/news1-banner1.png")}
            className="w-[100%] "
            width={100}
            height={100}
          />
        </div>
      </div>

      <div className="flex mt-[24px] md:mt-[30px] xl:mt-[40px] 2xl:mt-[48px] flex-col-reverse md:flex-row sm:flex-col-reverse ">
        <div className="mt-[24px] md:mt-0 w-[100%] md:w-[40%] h-auto  items-center flex object-contain mr-[3%]">
          <img
            alt=""
            
              src={require("../../assets/image/news1-banner2.png")}
            width={100}
            height={100}
            className="w-[100%] h-[100%]"
          />
        </div>

        <div className="w-[100%] md:w-[60%] flex flex-col justify-center">
          <text className="text-[20px] md:text-[24px] lg:text-[28px] xl:text-[30px] 2xl:text-[32px] font-bold text-[#00366A]">
            Expert Team with 45+ Employees
          </text>
          <text className="mt-[0px] text-[15px] md:text-[16px] 2xl:text-[18px] text-[#252724] font-normal leading-[30px]">
            With more than <strong>45 skilled</strong> professionals and
            technicians experienced in precision mechanics and CNC machining,
            REDECO Vietnam is proud to have a knowledgeable, dedicated team that
            handles each project carefully. Our employees are thoroughly
            trained, combining deep expertise with hands-on skills to meet the
            most stringent technical requirements.
          </text>

          <text className="text-[20px] md:text-[24px] lg:text-[28px] xl:text-[30px] 2xl:text-[32px] mt-[20px] font-bold text-[#00366A]">
            ISO-Certified Processes
          </text>

          <text className="mt-[0px] text-[15px] md:text-[16px] 2xl:text-[18px] text-[#252724] font-normal leading-[30px]">
            We strictly adhere to <strong>ISO-certified</strong> processes,
            ensuring that every product meets{" "}
            <strong>international quality, precision,</strong>
            and <strong>durability standards</strong>. Our customers can rely on
            the consistency and excellence of our products.
          </text>
        </div>
      </div>

      <div className="flex flex-col sm:flex-col md:flex-row mt-[24px] md:mt-[30px] xl:mt-[40px] 2xl:mt-[48px]">
        <div className="w-[100%] md:w-[60%] flex flex-col justify-center">
          <text className="text-[20px] md:text-[24px] lg:text-[28px] xl:text-[30px] 2xl:text-[32px] font-bold text-[#00366A]">
            On-Time Delivery
          </text>
          <text className="mt-[0px] text-[15px] md:text-[16px] 2xl:text-[18px] text-[#252724] font-normal leading-[30px]">
            We understand that meeting deadlines is crucial for any production
            project. Thanks to our optimized infrastructure and processes,
            REDECO is committed to <strong>on-time delivery</strong>, ensuring
            our clients' production schedules stay on track.
          </text>

          <text className="text-[20px] md:text-[24px] lg:text-[28px] xl:text-[30px] 2xl:text-[32px] font-bold text-[#00366A] mt-[20px]">
            Professional Customers Service
          </text>

          <text className="mt-[0px] text-[15px] md:text-[16px] 2xl:text-[18px] text-[#252724] font-normal leading-[30px]">
            We not only provide <strong>top-quality products</strong> but also
            deliver exceptional customer service. Our experienced Team of
            specialists will handle your project and are ready to offer advice
            and technical support throughout the production process.
          </text>
        </div>

        <div className="w-[100%] md:w-[40%] h-auto items-center flex object-contain ml-0 mt-[20px] md:mt-0 md:ml-[3%] justify-center ">
          <img
            alt=""
            
            src={require("../../assets/image/news1-banner3.png") }
            width={100}
            className="w-[100%] h-[100%]"
            height={100}
          />
        </div>
      </div>
    </div>
  );
}

export default Description1;
