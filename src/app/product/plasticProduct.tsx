import { Typography } from "antd";
import Image from "next/image";
function PlasticProduct() {
  return (
    <div className="">
      <div className=" flex justify-center xl:mt-20 lg:mt-20 md:mt-20 mt-10">
        <Typography
          style={{
            fontSize: "2rem",
            lineHeight: "50px",
            fontFamily: "Montserrat",
            fontWeight: "700",
            position: "relative", // Để định vị đường viền
            paddingBottom: "10px", // Khoảng cách giữa chữ và border
            color: "#00366A",
          }}
        >
          <span className="xl:text-[2rem] 2xl:text-[48px] sm:px-[10px] px-[10px] lg:px-[0px] md:px-[0px] xl:px-[0px] flex text-center md:text-[2rem] lg:text-[2rem] sm:text-[28px] justify-center items-center w-[100%] text-[28px]">
            PLASTIC INJECTION PRODUCTS
          </span>
          {/* Đường viền */}
          <span
            style={{
              position: "absolute",
              bottom: 0, // Đặt đường viền sát dưới chữ
              left: "50%", // Căn giữa theo chiều ngang
              transform: "translateX(-50%)", // Căn chỉnh chính xác vị trí giữa
              width: "100px", // Chiều rộng của đường viền (ngắn hơn width chữ)
              height: "5px", // Độ dày của đường viền
              backgroundColor: "#00A859", // Màu sắc của đường viền
            }}
          />
        </Typography>
      </div>
        <div className="xl:px-[10%] lg:px-[10%] md:px-[10%] sm:px-[6%] px-[4%]">
          {/* Desktop */}
          <div className="xl:flex md:flex lg:flex sm:hidden hidden overflow-hidden h-[80vh] gap-[35px] mt-[70px]">
            <div className="gap-[35px] overflow-hidden w-[25%] flex flex-col">
              <div className="h-[53%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/plastic1.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  className="transition-transform duration-300 ease-in-out hover:scale-125"
                  width={100}
                  height={100}
                />
              </div>
              <div className="h-[47%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/plastic2.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  className="transition-transform duration-300 ease-in-out hover:scale-125"
                  width={100}
                  height={100}
                />
              </div>
            </div>

            <div className="gap-[35px] overflow-hidden w-[25%] flex flex-col">
              <div className="h-[45%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/plastic3.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  className="transition-transform duration-300 ease-in-out hover:scale-125"
                  width={100}
                  height={100}
                />
              </div>
              <div className="h-[50%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/plastic4.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  className="transition-transform duration-300 ease-in-out hover:scale-125"
                  width={100}
                  height={100}
                />
              </div>
            </div>

            <div className="gap-[35px] overflow-hidden w-[25%] flex flex-col">
              <div className="h-[53%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/plastic5.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  className="transition-transform duration-300 ease-in-out hover:scale-125"
                  width={100}
                  height={100}
                />
              </div>
              <div className="h-[46%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/plastic6.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  className="transition-transform duration-300 ease-in-out hover:scale-125"
                  width={100}
                  height={100}
                />
              </div>
            </div>

            <div className="gap-[35px] overflow-hidden w-[25%] flex flex-col">
              <div className="h-[60%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/plastic7.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  className="transition-transform duration-300 ease-in-out hover:scale-125"
                  width={100}
                  height={100}
                />
              </div>
              <div className="h-[40%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/plastic8.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  className="transition-transform duration-300 ease-in-out hover:scale-125"
                  width={100}
                  height={100}
                />
              </div>
            </div>
          </div>
          <div className="xl:hidden md:hidden lg:hidden sm:flex flex overflow-hidden h-[120vh] gap-4 2xl:gap-[35px] mt-[20px]">
            {/* Left */}
            <div className="gap-4 2xl:gap-[35px]gap-[35px] overflow-hidden w-[50%] flex flex-col">
              <div className="h-[70%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/plastic1.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  className="transition-transform duration-300 ease-in-out hover:scale-125"
                  width={100}
                  height={100}
                />
              </div>
              <div className="h-[70%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/plastic2.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  className="transition-transform duration-300 ease-in-out hover:scale-125"
                  width={100}
                  height={100}
                />
              </div>
              <div className="h-[70%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/plastic5.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  className="transition-transform duration-300 ease-in-out hover:scale-125"
                  width={100}
                  height={100}
                />
              </div>
              <div className="h-[70%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/plastic6.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  className="transition-transform duration-300 ease-in-out hover:scale-125"
                  width={100}
                  height={100}
                />
              </div>
            </div>
            {/* Right */}
            <div className="gap-4 2xl:gap-[35px]gap-[35px] overflow-hidden w-[50%] flex flex-col">
              <div className="h-[60%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/plastic3.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  className="transition-transform duration-300 ease-in-out hover:scale-125"
                  width={100}
                  height={100}
                />
              </div>
              <div className="h-[80%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/plastic4.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  className="transition-transform duration-300 ease-in-out hover:scale-125"
                  width={100}
                  height={100}
                />
              </div>
              <div className="h-[80%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/plastic7.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  className="transition-transform duration-300 ease-in-out hover:scale-125"
                  width={100}
                  height={100}
                />
              </div>
              <div className="h-[60%] overflow-hidden border-[2px] border-[#00366A] rounded-[12px] bg-white p-[30px]">
                <Image
                  unoptimized
                  alt=""
                  src={"/image/plastic8.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  className="transition-transform duration-300 ease-in-out hover:scale-125"
                  width={100}
                  height={100}
                />
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default PlasticProduct;
