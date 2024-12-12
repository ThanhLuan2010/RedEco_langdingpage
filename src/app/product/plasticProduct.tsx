import { Typography } from "antd";

function PlasticProduct() {
  return (
    <div className="">
      <div className="relative flex justify-center mt-[60px] md:mt-[100px] xl:mt-[120px]">
        <Typography
          style={{
            fontFamily: "Montserrat",
            fontWeight: "700",
            position: "relative", // Để định vị đường viền
            color: "#00366A",
          }}
        >
          <span
            className="xl:text-[35px] 2xl:text-[48px] sm:px-[10px]
          px-[10px] lg:px-[0px] md:px-[0px] xl:px-[0px] flex text-center md:text-[2rem] lg:text-[35px] sm:text-[28px] justify-center items-center w-[100%] text-[28px]"
          >
             PLASTIC INJECTION PRODUCTS
          </span>
          {/* Đường viền */}
          <span
            className="xl:h-[4px] 2xl:h-[5px] md:h-[4px] h-[3px] bottom-[2px] md:bottom-0"
            style={{
              position: "absolute",
              left: "50%", // Căn giữa theo chiều ngang
              transform: "translateX(-50%)", // Căn chỉnh chính xác vị trí giữa
              width: "15%", // Chiều rộng của đường viền (ngắn hơn width chữ)
              backgroundColor: "#00A859", // Màu sắc của đường viền
            }}
          />
        </Typography>
      </div>
      <div className="xl:px-[10%] lg:px-[10%] md:px-[10%] sm:px-[6%] px-[4%]">
        {/* Desktop */}
        <div className="xl:flex md:flex lg:flex sm:hidden hidden overflow-hidden h-[80vh] gap-[35px] mt-[60px]">
          <div className="gap-[35px] overflow-hidden w-[25%] flex flex-col">
            <div className="h-[53%] overflow-hidden border-[1px] md:border-[2px] border-[#00366A] rounded-[6px] md:rounded-[8px] bg-white p-[30px]">
              <img
                
                alt=""
                src={require("../../assets/image/plastic1.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
                width={100}
                className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                height={100}
              />
            </div>
            <div className="h-[47%] overflow-hidden border-[1px] md:border-[2px] border-[#00366A] rounded-[6px] md:rounded-[8px] bg-white p-[30px]">
              <img
                
                alt=""
                src={require("../../assets/image/plastic2.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
                width={100}
                className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                height={100}
              />
            </div>
          </div>

          <div className="gap-[35px] overflow-hidden w-[25%] flex flex-col">
            <div className="h-[45%] overflow-hidden border-[1px] md:border-[2px] border-[#00366A] rounded-[6px] md:rounded-[8px] bg-white p-[30px]">
              <img
                
                alt=""
                src={require("../../assets/image/plastic3.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
                width={100}
                className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                height={100}
              />
            </div>
            <div className="h-[50%] overflow-hidden border-[1px] md:border-[2px] border-[#00366A] rounded-[6px] md:rounded-[8px] bg-white p-[30px]">
              <img
                
                alt=""
                src={require("../../assets/image/plastic4.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
                width={100}
                className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                height={100}
              />
            </div>
          </div>

          <div className="gap-[35px] overflow-hidden w-[25%] flex flex-col">
            <div className="h-[53%] overflow-hidden border-[1px] md:border-[2px] border-[#00366A] rounded-[6px] md:rounded-[8px] bg-white p-[30px]">
              <img
                
                alt=""
                src={require("../../assets/image/plastic5.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
                width={100}
                className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                height={100}
              />
            </div>
            <div className="h-[46%] overflow-hidden border-[1px] md:border-[2px] border-[#00366A] rounded-[6px] md:rounded-[8px] bg-white p-[30px]">
              <img
                
                alt=""
                src={require("../../assets/image/plastic6.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
                width={100}
                className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                height={100}
              />
            </div>
          </div>

          <div className="gap-[35px] overflow-hidden w-[25%] flex flex-col">
            <div className="h-[45%] overflow-hidden border-[1px] md:border-[2px] border-[#00366A] rounded-[6px] md:rounded-[8px] bg-white p-[30px]">
              <img
                
                alt=""
                src={require("../../assets/image/plastic7.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
                width={100}
                className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                height={100}
              />
            </div>
            <div className="h-[50%] overflow-hidden border-[1px] md:border-[2px] border-[#00366A] rounded-[6px] md:rounded-[8px] bg-white p-[30px]">
              <img
                
                alt=""
                src={require("../../assets/image/plastic8.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
                width={100}
                className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                height={100}
              />
            </div>
          </div>
        </div>

        <div className="md:hidden flex overflow-hidden h-[120vh] gap-4 xl:gap-[35px] mt-[20px]">
          {/* Left */}
          <div className="gap-4 xl:gap-[35px]gap-[35px] overflow-hidden w-[50%] flex flex-col">
            <div className="h-[60%] overflow-hidden border-[1px] md:border-[2px] border-[#00366A] rounded-[6px] md:rounded-[8px] bg-white p-[30px]">
              <img
                
                alt=""
                src={require("../../assets/image/plastic1.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
                width={100}
                className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                height={100}
              />
            </div>
            <div className="h-[50%] overflow-hidden border-[1px] md:border-[2px] border-[#00366A] rounded-[6px] md:rounded-[8px] bg-white p-[30px]">
              <img
                
                alt=""
                src={require("../../assets/image/plastic2.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
                width={100}
                className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                height={100}
              />
            </div>
            <div className="h-[60%] overflow-hidden border-[1px] md:border-[2px] border-[#00366A] rounded-[6px] md:rounded-[8px] bg-white p-[30px]">
              <img
                
                alt=""
                src={require("../../assets/image/plastic5.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
                width={100}
                className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                height={100}
              />
            </div>
            <div className="h-[50%] overflow-hidden border-[1px] md:border-[2px] border-[#00366A] rounded-[6px] md:rounded-[8px] bg-white p-[30px]">
              <img
                
                alt=""
                src={require("../../assets/image/plastic6.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
                width={100}
                className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                height={100}
              />
            </div>
          </div>
          {/* Right */}
          <div className="gap-4 xl:gap-[35px]gap-[35px] overflow-hidden w-[50%] flex flex-col">
            <div className="h-[60%] overflow-hidden border-[1px] md:border-[2px] border-[#00366A] rounded-[6px] md:rounded-[8px] bg-white p-[30px]">
              <img
                
                alt=""
                src={require("../../assets/image/plastic3.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
                width={100}
                className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                height={100}
              />
            </div>
            <div className="h-[50%] overflow-hidden border-[1px] md:border-[2px] border-[#00366A] rounded-[6px] md:rounded-[8px] bg-white p-[30px]">
              <img
                
                alt=""
                src={require("../../assets/image/plastic4.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
                width={100}
                className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                height={100}
              />
            </div>
            <div className="h-[60%] overflow-hidden border-[1px] md:border-[2px] border-[#00366A] rounded-[6px] md:rounded-[8px] bg-white p-[30px]">
              <img
                
                alt=""
                src={require("../../assets/image/plastic7.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
                width={100}
                className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
                height={100}
              />
            </div>
            <div className="h-[50%] overflow-hidden border-[1px] md:border-[2px] border-[#00366A] rounded-[6px] md:rounded-[8px] bg-white p-[30px]">
              <img
                
                alt=""
                src={require("../../assets/image/plastic8.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
                width={100}
                className="md transition-transform md:duration-300 ease-in-out md:hover:scale-125"
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
