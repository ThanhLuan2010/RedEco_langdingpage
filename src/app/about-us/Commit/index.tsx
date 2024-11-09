"use client";


const products = [
  {
    name: "Satisfaction",
    imageUrl: require("../../../assets/image/aboutUs/commit1.png"),
  },
  {
    name: "On-time Delivery",
    imageUrl: require("../../../assets/image/aboutUs/commit2.png"),
  },
  {
    name: "Good Pricing",
    imageUrl: require("../../../assets/image/aboutUs/commit3.png"),
  },
  {
    name: "Excellent Service",
    imageUrl: require("../../../assets/image/aboutUs/commit4.png"),
  },
];

const Commit = () => (
  <div className="flex items-center justify-center flex-col  mt-[48px] md:mt-[60px] lg:mt-[8px] xl:mt-[100px] 2xl:mt-[140px]">
    <text className="text-[24px] md:text-[1.5rem] lg:text-[2rem] xl:text-[2.5rem] font-bold text-[#00366A] relative">
      REDECO’S COMMITMENT
      <span className="absolute bottom-[-2px] left-[50%] translate-x-[-50%] w-[40%] h-[2px] xl:h-[4px] 2xl:h-[5px] bg-[#00A859]" />
    </text>

    <div className="mt-[18px] md:mt-[22px] lg:mt-[28px] 2xl:mt-[34px] text-center px-[20px] md:px-[5%] xl:px-[10%]">
      <text className="text-[15px] 2xl:text-[20px] hidden md:block">
        At REDECO VIETNAM, our commitment is to  deliver unmatched value to our
        clients by providing
      </text>

      <text className="text-[14px] 2xl:text-[20px] block md:hidden">
        At REDECO, our commitment is to  deliver unmatched value to our
        clients by providing
      </text>

    </div>
    <div className="grid-cols-2 w-[100%] mt-[32px] md:mt-[42] lg:mt-[52px] xl:mt-[65px] 2xl:mt-[80px] px-[20px] md:px-[5%] xl:px-[10%] grid md:grid-cols-4 gap-[18px] md:gap-[24px] lg:gap-[32px] 2xl:gap-[40px]">
      {products.map((product, index) => (
        <div key={index}>
          <div
            style={{ boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)" }}
            className="bg-white 2xl:mx-[20px] flex justify-center items-center py-[0px] md:py-[5px] lg:py-[10px] xl:py-[15px] 2xl:py-[20px] rounded-[7px] xl:rounded-[12px] my-[5px]"
          >
            <div className="flex justify-center items-center flex-col pt-[16px] pb-[12px]">
                <img
                  className="w-[50px] md:w-[60px] lg:w-[70px] 2xl:w-[80px] object-contain"
                  alt={product.name}
                  src={product.imageUrl}
                  width={100}
                  height={100}
                />
              <text className="mt-[10px] md:mt-[13px] 2xl:mt-[16px] font-medium text-[16px] lg:text-[20px] xl:text-[25px] opacity-[0.8]">
                {product.name}
              </text>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Commit;
