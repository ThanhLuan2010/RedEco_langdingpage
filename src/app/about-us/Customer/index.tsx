"use client";
import { Carousel } from "antd";

import { useNavigate } from "react-router-dom";
const products = [
  {
    name: "customer",
    imageUrl: require("../../../assets/image/customer.png"),
  },
  {
    name: "customer1",
    imageUrl: require("../../../assets/image/customer1.png"),
  },
  {
    name: "customer2",
    imageUrl: require("../../../assets/image/customer2.png"),
  },
  {
    name: "customer3",
    imageUrl: require("../../../assets/image/customer3.png"),
  },
  {
    name: "customer4",
    imageUrl: require("../../../assets/image/customer4.png"),
  },
  {
    name: "customer5",
    imageUrl: require("../../../assets/image/customer5.png"),
  },
  {
    name: "customer6",
    imageUrl: require("../../../assets/image/customer6.png"),
    // imageUrl: require("../../assets/image/customer6.png"),
  },
  {
    name: "customer8",
    imageUrl: require("../../../assets/image/customer8.png"),
  },
  {
    name: "customer9",
    imageUrl: require("../../../assets/image/customer9.png"),
  },
  {
    name: "customer10",
    imageUrl: require("../../../assets/image/customer10.png"),
  },
  {
    name: "customer11",
    imageUrl: require("../../../assets/image/customer11.png"),
  },
  {
    name: "customer12",
    imageUrl: require("../../../assets/image/customer12.png"),
  },
  {
    name: "customer13",
    imageUrl: require("../../../assets/image/customer13.png"),
  },
  {
    name: "customer14",
    imageUrl: require("../../../assets/image/customer14.png"),
  },
  {
    name: "customer15",
    imageUrl: require("../../../assets/image/customer15.png"),
  },
  {
    name: "customer16",
    imageUrl: require("../../../assets/image/customer16.png"),
  },
];
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4, // Số slides mặc định
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200, // Màn hình lớn (tối đa 1200px)
      settings: {
        slidesToShow: 3, // Hiển thị 3 slides
      },
    },
    {
      breakpoint: 992, // Tablet (tối đa 992px)
      settings: {
        slidesToShow: 2, // Hiển thị 2 slides
      },
    },
    {
      breakpoint: 576, // Mobile (tối đa 576px)
      settings: {
        slidesToShow: 2, // Hiển thị 1 slide
      },
    },
  ],
};

const Customer = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        backgroundImage: "url('/image/bg_customer.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="flex items-center justify-center flex-col pb-[60px] md:pb-[75px] 2xl:pb-[110px]"
    >
      <text className="text-[24px] md:text-[30px] lg:text-[38px]  2xl:text-[48px] font-bold relative text-white mt-[32px] md:mt-[42px] lg:mt-[53px] xl:mt-[65px] 2xl:mt-[90px]">
        CUSTOMERS
        <span className="absolute bottom-0 left-[50%] translate-x-[-50%] w-[50%] h-[2px] xl:h-[5px] bg-white" />
      </text>

      <div className="mt-[18px] md:mt-[22px] lg:mt-[28px] 2xl:mt-[34px] text-white text-center px-[20px] md:px-[5%] xl:px-[10%] text-[16px]  2xl:text-[20px]">
        <text>
          Our partners are the reputable customers, suppliers in the markets. We
          aim the target sustainable development, we under-talking that supply
          the best quality of products a services from customers' development
          and success.
        </text>
      </div>
      <div className="w-[100%] mt-[32px] md:mt-[42] lg:mt-[52px] xl:mt-[65px] 2xl:mt-[80px] px-[20px] md:px-[5%] xl:px-[10%]">
        <Carousel {...settings} autoplay>
          {products.map((product, index) => (
            <div
              className="cursor-pointer"
              onClick={() => navigate("/gallery#customer")}
              key={index}
            >
              <div
                className="
              bg-[#FFFFFFE5] mx-[9px] 2xl:mx-[20px] flex justify-center items-center 
              py-[0px] md:py-[5px] lg:py-[10px] xl:py-[15px] 2xl:py-[30px] 
              rounded-[7px] border-[2px] border-[#00366A]"
              >
                <div className="flex justify-center items-center h-[80%] w-[90%]">
                  <img
                    style={{
                      objectFit: "contain",
                      height: "80px",
                      width: "80%",
                    }}
                    alt={product.name}
                    src={product.imageUrl}
                    width={100}
                    height={100}
                  />
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
export default Customer;
