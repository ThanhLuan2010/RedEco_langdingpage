import Image from "next/image";
import { useRouter } from "next/navigation";
const QualityStandard = () => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/quality")}
      className="flex flex-col justify-center items-center pt-[40px] sm:pt-[48px] md:pt-[52px] lg:pt-[70px] xl:pt-[120px] 2xl:pt-[140px] px-[20px] md:px-[10%] cursor-pointer bg-[#F7F9F9]"
    >
      <text className="text-[24px] md:text-[1.5rem] lg:text-[2rem] xl:text-[2.5rem] font-bold text-[#00366A] relative">
        QUALITY STANDARD
        <span className="absolute bottom-[-2px] left-[50%] translate-x-[-50%] w-[40%] h-[2px] xl:h-[4px] 2xl:h-[5px] bg-[#00A859]" />
      </text>
      <div className="mt-[18px] sm:mt-[24] lg:mt-[30px] xl:mt-[40px] text-center flex flex-col items-center w-[100%] md:w-[80%]">
        <text className="text-center sm:text-[15px] md:text-[16px] 2xl:text-[20px] text-[black]">
          In 2022, REDECO Vietnam Industrial Solutions Joint Stock Company was
          granted a quality management system certificate according to ISO
          9001:2015 standards.
        </text>
        <Image
          alt="iso"
          src="/image/iso.png"
          className="w-[100%] md:w-[50%] 2xl:w-[40%] mt-[5%]"
          width={100}
          height={100}
          unoptimized
        />
      </div>
    </div>
  );
};

export default QualityStandard;
