import { Box } from "@mui/material";
import { Carousel } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
const products = [
  {
    name: "customer",
    imageUrl: "/image/customer.png",
  },
  {
    name: "customer1",
    imageUrl: "/image/customer1.png",
  },
  {
    name: "customer2",
    imageUrl: "/image/customer2.png",
  },
  {
    name: "customer3",
    imageUrl: "/image/customer3.png",
  },
  {
    name: "customer4",
    imageUrl: "/image/customer4.png",
  },
  {
    name: "customer5",
    imageUrl: "/image/customer5.png",
  },
  {
    name: "customer6",
    imageUrl: "/image/customer6.png",
  },
  {
    name: "customer8",
    imageUrl: "/image/customer8.png",
  },
  {
    name: "customer9",
    imageUrl: "/image/customer9.png",
  },
  {
    name: "customer10",
    imageUrl: "/image/customer10.png",
  },
  {
    name: "customer11",
    imageUrl: "/image/customer11.png",
  },
  {
    name: "customer12",
    imageUrl: "/image/customer12.png",
  },
  {
    name: "customer13",
    imageUrl: "/image/customer13.png",
  },
  {
    name: "customer14",
    imageUrl: "/image/customer14.png",
  },
  {
    name: "customer15",
    imageUrl: "/image/customer15.png",
  },
  {
    name: "customer16",
    imageUrl: "/image/customer16.png",
  },
];

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2, // Số slides mặc định
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 2000, // Màn hình lớn (tối đa 2000px)
      settings: {
        slidesToShow: 4, // Hiển thị 3 slides
      },
    },
    {
      breakpoint: 1200, // Màn hình lớn (tối đa 1200px)
      settings: {
        slidesToShow: 4, // Hiển thị 3 slides
      },
    },
    {
      breakpoint: 992, // Tablet (tối đa 992px)
      settings: {
        slidesToShow: 3, // Hiển thị 2 slides
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
  const router = useRouter();

  return (
    <Box
      justifyContent={"center"}
      flexDirection={"column"}
      alignItems={"center"}
      display={"flex"}
      sx={{
        backgroundImage: "linear-gradient(90deg, #007BB0, #00366A)",
        paddingTop: "4%",
        paddingBottom: "8%",
        cursor: "pointer",
      }}
      onClick={() => {
        router.push("/gallery#customer");
      }}
    >
      <text className="text-[24px] md:text-[30px] lg:text-[38px] xl:text-[40px] 2xl:text-[48px] font-bold  relative text-white">
        OUR CUSTOMER
        <span className="absolute bottom-0 left-[50%] translate-x-[-50%] w-[50%] h-[2px] xl:h-[5px] bg-white" />
      </text>
      <div className="w-[100%] mt-[32px] md:mt-[42] lg:mt-[52px] xl:mt-[65px] 2xl:mt-[80px] px-[20px] md:px-[10%]">
        <Carousel {...settings} autoplay>
          {products.map((product, index) => (
            <div key={index}>
              <div className="bg-white mx-[9px] 2xl:mx-[20px] flex justify-center items-center py-[0px] md:py-[5px] lg:py-[10px] xl:py-[15px] 2xl:py-[20px] rounded-[7px] border-[2px] border-[#00366A]">
                <div className="flex justify-center items-center h-[80%] w-[90%]">
                  <Image
                    style={{
                      objectFit: "contain",
                      height: "80px",
                      width: "80%",
                    }}
                    alt={product.name}
                    src={product.imageUrl}
                    width={100}
                    height={100}
                    unoptimized
                  />
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </Box>
  );
};

export default Customer;
