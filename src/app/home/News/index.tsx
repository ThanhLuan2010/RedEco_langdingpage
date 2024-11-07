import { Box } from "@mui/material";
import { Col, Row } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Newsdata } from "./data";

function News() {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-center items-center px-[20px] md:px-[10%] mt-[48px] md:mt-[60px] lg-[78px] xl:mt-[90px] 2xl:mt-[110px]">
      <text className="text-[24px] md:text-[1.5rem] lg:text-[2rem] xl:text-[2.5rem] font-bold text-[#00366A] relative">
        CORPORATE NEWS
        <span className="absolute bottom-[-2px] left-[50%] translate-x-[-50%] w-[30%] h-[2px] xl:h-[4px] 2xl:h-[5px] bg-[#00A859]" />
      </text>

      <Box sx={{ marginTop: "5%" }}>
        <Row gutter={[30, 50]}>
          {Newsdata.map((item, index) => (
            <Col xs={24} sm={12} md={12} key={index}>
              <div
                style={{
                  padding: "16px 16px 36px 16px",
                  borderRadius: "16px",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
                  cursor: "pointer",
                }}
                className="h-[100%]"
                onClick={() => router.push("/news/" + item.id)}
              >
                <Box sx={{ position: "relative", height: "55%" }}>
                  <Image
                    style={{ height: "100%", borderRadius: "16px" }}
                    alt=""
                    src={item.image}
                    width={100}
                    height={100}
                    unoptimized
                    className="w-[100%]"
                  />
                </Box>
                <div className="mt-[10px] md:mt-[20px] xl:mt-[30px]">
                  <text className="text-[#00366A] font-Montserrat font-semibold text-[20px] md:text-[25px] xl:text-[30px] leading-[36px] line-clamp-2">
                    {item.shortTitle}
                  </text>

                  <text className="text-[15px] line-clamp-3 text-[#252724] font-light mt-[5px] md:mt-[10px] xl:mt-[13px] leading-[24px]">
                    {item.shortDescription}
                  </text>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Box>
    </div>
  );
}

export default News;
