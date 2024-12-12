
import React from "react";

function Description3() {
  return (
    <div className="flex flex-col text-[#252724]">
      <text className="text-[1rem] text-[#00366A] font-semibold">
        July 6, 2023
      </text>
      <text
        className="mt-[20px] md:mt-[24px] lg:mt-[28px] xl:mt-[30px] 2xl:mt-[32px]  text-[#252724] md:leading-[26px] xl:leading-[32px]
            text-[15px] md:text-[16px] xl:text-[18px]"
      >
        On July 6, 2023, Ha Long Technology and Solutions Trading Joint Stock
        Company held a strategic cooperation signing ceremony with Redeco
        Vietnam Industrial Solutions Joint Stock Company. This signing ceremony
        is an important step that opens up new opportunities for market
        development and enhances the competitive capabilities of both companies,
        particularly in R&D for new products and developing export-oriented
        commercial products and high-tech solutions for industrial parks.
      </text>

      <div className="flex flex-col md:flex-row mt-[20px]items-center">
        <div className="w-[100%] md:w-[60%] flex flex-col ">
          <text
            className="md:leading-[26px] xl:leading-[32px]
            text-[15px] md:text-[16px] xl:text-[18px] mt-[20px] md:mt-[24px]"
          >
            Mr. Bui Minh Hieu – Director of Ha Long Technology and Solutions
            Trading Joint Stock Company, Mr. Nguyen Do Dong – Director of Redeco
            Vietnam Industrial Solutions Joint Stock Company, and staff from
            both companies attended the signing ceremony.
          </text>

          <text
            className="mt-[20px] md:mt-[24px] md:leading-[26px] xl:leading-[32px]
            text-[15px] md:text-[16px] xl:text-[18px]"
          >
            Founded in 1997, Ha Long Company is one of the first enterprises in
            Vietnam to participate in the information technology market,
            providing computers, servers, and high-tech solutions to numerous
            organizations, banks, and corporations nationwide. Since 2019, Ha
            Long Company has expanded into several commercial sectors, including
            import and export, with a diverse range of products and many member
            brands such as Bettychoice, Edukite, Kho Rượu Vang, Bloom & Bowery.
            It has representative offices in Hanoi, Ho Chi Minh City, Adelaide –
            Australia, and Marina – California, USA.
          </text>
        </div>

        <div className="w-[100%] md:w-[40%] h-auto items-center flex object-contain mt-[24px] md:mt-0 mf:mt-0 md:ml-[3%]">
          <img
            alt=""
            
            className="w-[100%]"
            src={require("../../assets/image/news3-banner1.png")}
            width={100}
            height={100}
          />
        </div>
      </div>

      <text
        className="mt-[20px] md:leading-[26px] xl:leading-[32px]
            text-[15px] md:text-[16px] xl:text-[18px]"
      >
        Redeco Vietnam, established in 2017, is a vendor for many large
        factories and corporations in Vietnam, including IMV, Mitsubishi,
        Hansol, Samsung, Panasonic, Piaggio, and VinFast. Redeco provides
        automation, robotics, production lines, and precision mechanics
        solutions to factories and industrial parks nationwide. Redeco has a
        team of skilled engineers capable of product R&D and possesses numerous
        industrial solutions registered and applied by many FDI clients.
      </text>

      <text
        className="mt-[20px] md:leading-[26px] xl:leading-[32px]
            text-[15px] md:text-[16px] xl:text-[18px]"
      >
        According to the content of the agreement, Ha Long Company and Redeco
        will work together to:
      </text>
      <text
        className="mt[10px] md:leading-[26px] xl:leading-[32px]
            text-[15px] md:text-[16px] xl:text-[18px]"
      >
        1. Develop training and capacity-building activities to enhance human
        resources in high-tech solutions for industrial park customers.
      </text>

      <text
        className="mt[10px] md:leading-[26px] xl:leading-[32px]
            text-[15px] md:text-[16px] xl:text-[18px]"
      >
        2. Research new commercial products based on technological advantages
        and the existing R&D team to seek business opportunities in the domestic
        and export markets.
      </text>

      <text
        className="mt[10px] md:leading-[26px] xl:leading-[32px]
            text-[15px] md:text-[16px] xl:text-[18px]"
      >
        3. Utilize resources such as personnel, facilities, offices, and
        existing network connections with customers and partners to expand
        competitive capabilities.
      </text>

      <text
        className="mt[10px] md:leading-[26px] xl:leading-[32px]
            text-[15px] md:text-[16px] xl:text-[18px]"
      >
        4. Invest in business and expand mutually beneficial cooperation
        activities.
      </text>
    </div>
  );
}

export default Description3;
