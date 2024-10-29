import { Box } from "@mui/material";
import { Carousel } from "antd";
import Image from "next/image";

const products = [
  { name: "human1", imageUrl: require("../../../public/image/human1.png") },
  { name: "human2", imageUrl: require("../../../public/image/human2.png") },
  { name: "human3", imageUrl: require("../../../public/image/human3.png") },
  { name: "human4", imageUrl: require("../../../public/image/human4.png") },
  { name: "human5", imageUrl: require("../../../public/image/human5.png") },
];

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2, // Số slides mặc định
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

const Human = () => (
  <div className="flex flex-col justify-center items-center mt-[40px] sm:mt-[50px] md:mt-[70px] lg:mt-[90px] xl:mt-[110px] 2xl:mt-[200px]">
    <text className="text-[24px] md:text-[30px] lg:text-[38px] xl:text-[40px] 2xl:text-[48px] font-bold text-[#00366A] relative">
      HUMAN RESOURCES
      <span className="absolute bottom-0 left-[50%] translate-x-[-50%] w-[50%] h-[2px] xl:h-[5px] bg-[#00A859]" />
    </text>
    <Box marginTop={"50px"} width={"80%"}>
      <Carousel {...settings} autoplay>
        {products.map((product, index) => (
          <div key={index}>
            <Box sx={{ width: "90%" }}>
              <Image
                style={{ objectFit: "contain" }}
                alt={product.name}
                src={product.imageUrl}
              />
              {/* <Box sx={{ padding: "6% 6% 10% 6%" }}>
                <Box
                  sx={{
                    borderWidth: 2,
                    borderColor: "#00366A",
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                    borderRadius: "12px",
                    height:"150px"
                  }}
                >
                 
                </Box>
                <Typography
                  style={{
                    fontSize: "1.5em",
                    fontWeight: 600,
                    textAlign: "center",
                    marginTop: "15px"
                  }}
                >
                  {product.name}
                </Typography>
              </Box> */}
            </Box>
          </div>
        ))}
      </Carousel>
    </Box>
  </div>
);

export default Human;
