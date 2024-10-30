import { Box } from "@mui/material";
import { Col, Row } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Newsdata } from "./data";

function News() {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-center items-center px-[20px] md:px-[10%] mt-[48px] md:mt-[60px] lg-[78px] xl:mt-[90px] 2xl:mt-[110px]">
      <text className="text-[24px] md:text-[30px] lg:text-[38px] xl:text-[40px] 2xl:text-[48px] font-bold text-[#00366A] relative">
        CORPORATE NEWS
        <span className="absolute bottom-0 left-[50%] translate-x-[-50%] w-[50%] h-[2px] xl:h-[5px] bg-[#00A859]" />
      </text>

      <Box sx={{ marginTop: "5%" }}>
        <Row gutter={[16, 16]}>
          {Newsdata.map((item, index) => (
            <Col xs={24} sm={12} md={12} key={index}>
              <div
                style={{
                  padding: "16px",
                  borderRadius: "1.5rem",
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
                  />
                </Box>
                <div className="mt-[10px] md:mt-[20px] xl:mt-[30px]">
                  <text className="text-[#00366A] font-semibold text-[20px] md:text-[25px] xl:text-[29] 2xl:text-[32px] leading-[24.38px] line-clamp-2">
                    {item.shortTitle}
                  </text>

                  <text className="text-[16px] line-clamp-3  text-[#252724] font-light mt-[3px]">
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
