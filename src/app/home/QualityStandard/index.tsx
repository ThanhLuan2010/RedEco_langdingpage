import Image from "next/image";

const QualityStandard = () => (
  <div className="flex flex-col justify-center items-center mt-[40px] sm:mt-[48px] md:mt-[52px] lg:mt-[60px] xl:mt-[78px] 2xl:mt-[98px] px-[20px] md:px-[10%]">
    <text className="text-[24px] md:text-[30px] lg:text-[38px] xl:text-[40px] 2xl:text-[48px] font-bold text-[#00366A] relative">
      HUMAN RESOURCES
      <span className="absolute bottom-0 left-[50%] translate-x-[-50%] w-[50%] h-[2px] xl:h-[5px] bg-[#00A859]" />
    </text>

    <div className="mt-[18px] sm:mt-[24] lg:mt-[30px] xl-mt-[35px] 2xl:mt-[40px] text-center flex flex-col items-center">
      <text className="text-center sm:text-[16px] md:text-[17px] lg:text-[18px] xl:text-[19px] 2xl:text-[20px]">
        In 2022, REDECO Vietnam Industrial Solutions Joint Stock Company was
        granted a quality management system certificate according to ISO
        9001:2015 standards.
      </text>
      <Image
        alt="iso"
        src={require("../../../public/image/iso.png")}
        style={{ width: "40%", marginTop: "5%" }}
      />
    </div>
  </div>
);

export default QualityStandard;
