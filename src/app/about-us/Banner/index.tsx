import { useNavigate } from "react-router-dom";
function Banner() {
  const navigate = useNavigate();
  return (
    <div className="relative overflow-hidden">
      <div>
        <img
          alt="banner"
          src={require("../../../assets/image/aboutUs/top_banner.png")}
          width={100}
          height={100}
          className="w-[100vw] h-[100%]"
        />
      </div>

      <div className="absolute top-0 h-[100%] flex flex-col justify-center px-[20px] md:px-[5%] xl:px-[10%] text-white overflow-hidden mx-[20px] md:mx:0 md:translate-y-[-5%] w-[80%]">
        <text className="font-bold text-[20px] sm:text-[30px] md:text-[40px] lg:text-[45px] 2xl:text-[60px] leading-[30px] md:leading-[40px] lg:leading-[50.14px] 2xl:leading-[63.14px]">
          We <span style={{ color: "#28FF90" }}>Provide</span> The Best
        </text>
        <text className="font-bold text-[20px] sm:text-[30px] md:text-[40px] lg:text-[45px]  2xl:text-[60px] leading-[30px] md:leading-[40px] lg:leading-[73.14px] flex lg:hidden">
          industrial solution
        </text>

        <text className="font-bold text-[20px] sm:text-[30px] md:text-[40px] lg:text-[45px]  2xl:text-[60px] leading-[30px] md:leading-[40px] lg:leading-[73.14px] lg:flex hidden">
          industrial solution for business
        </text>

        <text className="md:mt-[18px] 2xl:mt-[32px] xl:mb-[40px] hidden md:flex 2xl:text-[20px]">
          We have almost 8+ years of experience for helping industrial services
          and business solutions
        </text>

        <div className="flex gap-[20px] md:gap-[25px] xl:gap-[30px] mt-[13px] w-[65%] md:w-[60%] lg:w-[60%] z-20">
          <button
            onClick={() => navigate("/product")}
            className="bg-gradient-to-br from-[#28FF90] -7.86% to-[#00954F] 67.26% py-[10px] lg:py-[10px] 2xl:py-[20px] rounded-[8px] 
              text-[9px] md:text-[12px] ld:text-[15px] xl:text-[16px] 2xl:text-[18px] w-[50%] font-semibold"
          >
            OUR PRODUCTS
          </button>

          <button
            onClick={() => navigate("/contact-us#get-in-touch")}
            className="py-[10px] 2xl:py-[20px] rounded-[8px] w-[50%] border-[1px] border-[#F0F0F0] font-semibold text-[9px] md:text-[12px] ld:text-[15px] xl:text-[16px] 2xl:text-[18px]"
          >
            CONTACT US
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
