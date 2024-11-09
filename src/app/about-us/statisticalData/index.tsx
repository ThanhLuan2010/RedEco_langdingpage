import Counter from "../../../components/Counter";
import { Box } from "@mui/material";


const data = [
  {
    targetNumber: 8,
    title: "YEAR OF ESTABLISHMENT",
  },
  {
    targetNumber: 45,
    title: "EMPLOYEES",
  },
  {
    targetNumber: 50,
    title: "CUSTOMERS",
  },
  {
    targetNumber: 100,
    title: "PROJECTS",
  },
];
const StatisticalData = () => (
  <div className="mt-[48px] md:mt-[53px] lg:mt-[60px] 2xl:mt-[80px]">
    <Box
      flexDirection={"column"}
      display={"flex"}
      sx={{
        backgroundImage: "linear-gradient(90deg, #007BB0, #00366A)",
        height: "100%",
      }}
    >
      <div className="w-[100%] flex flex-col-reverse md:flex-row px-[20px] md:px-[5%] xl:px-[10%] pt-[24px] xl:py-[40px]">
        <div className="w-[100%] md:w-[50%]">
          <img
            src={require("../../../assets/image/aboutUs/about-us2.png")}
            alt=""
            
            className="w-[100%] md:w-[85%] object-contain translate-y-[25%]"
            width={100}
            height={100}
          />
        </div>
        <div className="grid grid-cols-2 w-[100%] md:w-[50%] gap-y-[32px] md:gap-y-0">
          {data.map((item, index) => (
            <Counter
              key={index}
              targetNumber={item.targetNumber}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </Box>
  </div>
);

export default StatisticalData;
