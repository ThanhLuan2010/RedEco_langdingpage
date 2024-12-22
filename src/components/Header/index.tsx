import {
  ArrowDownward,
  ArrowDropDown,
  ArrowDropDownOutlined,
  Close,
  MenuOutlined,
  Search,
} from "@mui/icons-material";
import {
  Button,
  Drawer,
  IconButton,
  List,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "../../data";

const navItems = [
  { text: "UNIT 0", key: 0 },
  { text: "UNIT 1", key: 1 },
  { text: "UNIT 2", key: 2 },
  { text: "UNIT 3", key: 3 },
  { text: "UNIT 4", key: 4 },
  { text: "UNIT 5", key: 5 },
  { text: "UNIT 6", key: 6 },
  { text: "UNIT 7", key: 7 },
];

const ChevronDownIcon: React.FC<any> = ({ className }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M20 7.99997L12.9428 15.0572C12.4221 15.5779 11.5779 15.5779 11.0572 15.0572L4 7.99997"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
    />
  </svg>
);

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();
  const [rowSelected, setRowSelected] = useState<string>("");

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };
  const [isShowMore, setIsShowMore] = useState<boolean>(false);

  const drawer = (
    <div className="w-screen h-full bg-[#272727]">
      <div className=" px-[20px] relative">
        <div className="flex py-[16px] h-[30%] justify-end">
          <img
            src={require("../../assets/image/header_banner.png")}
            className="object-contain cursor-pointer w-full"
            onClick={() => navigate("/")}
          />
          <div
            className="w-[40px] h-[40px] cursor-pointer absolute"
            onClick={() => setDrawerOpen(false)}
          >
            <Close
              style={{
                color: "white",
              }}
            />
          </div>
        </div>
      </div>

      <div className="h-[100%] ">
        <List>
          {data.map((item, index) => (
            <div key={index}>
              <div className="flex justify-between items-center w-full px-[20px] py-[10px] border-b-[1px] border-gray-500">
                <text
                  onClick={() => {
                    navigate(`unit/${item?.name?.replace(" ", "")}`);
                    setDrawerOpen(false);
                    setIsShowMore(false);
                  }}
                  className="text-[white] text-[18px] cursor-pointer flex "
                >
                  {item.name}
                </text>
                <div
                  className="text-white cursor-pointer  px-[10px]"
                  onClick={() => {
                    if (item?.name == rowSelected) {
                      setIsShowMore(false);
                      setRowSelected("");
                    } else {
                      setRowSelected(item?.name);
                      toggleDrawer(true);
                      setIsShowMore(true);
                    }
                  }}
                >
                  <ChevronDownIcon />
                </div>
              </div>
              {item?.name === rowSelected && isShowMore && (
                <div className="pb-[15px] pt-[5px] text-[white] font-medium flex flex-col gap-[15px] ">
                  {item?.lession?.map((lession, index) => (
                    <div key={index} className="cursor-pointer border-b-[1px] border-gray-500 px-[40px] pb-[10px]"
                    onClick={() => {
                      navigate(`lession/${lession?.name?.replace(" ", "")}`,{state:{unit:item?.name}});
                      setDrawerOpen(false);
                      setIsShowMore(false);
                    }}
                    >
                      <span>{lession?.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </List>
      </div>
    </div>
  );

  return (
    <div className="px-[20px] md:px[5%] xl:px-[10%] w-screen justify-center items-center bg-[#272727]">
      <div className="flex h-[100%]">
        {/* <Toolbar style={{ padding: "20px 0 20px" }} className="w-[100%] justify-between"> */}
        <div className="flex w-[100%] items-center justify-between ">
          {/* Mobile */}
          {isMobile ? (
            <>
              <div className="">
                <img
                  src={require("../../assets/image/header_banner.png")}
                  className="w-[100%] bg-blue-500 object-contain cursor-pointer"
                  onClick={() => navigate("/")}
                />
                <div className="flex items-end justify-end">
                  <button onClick={() => setDrawerOpen(true)}>
                    <MenuOutlined />
                  </button>
                </div>
              </div>
              <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                sx={{
                  width: "100%",
                  "& .MuiDrawer-paper": { width: "100%" },
                }}
              >
                {drawer}
              </Drawer>
            </>
          ) : (
            // Desktop
            <div className=" flex flex-col w-[100%]">
              <div className="mt-[30px]">
                <img
                  src={require("../../assets/image/header_banner.png")}
                  className="w-[100%] bg-blue-500 object-contain cursor-pointer"
                  onClick={() => navigate("/")}
                />
              </div>

              <div className="px-[10%] mt-[30px] mb-[10px] justify-between flex">
                {data.map((item, index) => (
                  <div
                    key={index}
                    className="relative inline-block group z-[1000]"
                  >
                    <button
                      className="text-white line-clamp-1items-center z-[1000]"
                      onClick={() => {
                        navigate(`/Unit/${item.name?.replace(" ", "")}`);
                      }}
                    >
                      {item.name?.toUpperCase()}
                    </button>

                    <div
                      className="absolute text-[14px] md:text-[15px] xl:text-[16px] hidden group-hover:block bg-white
                      text-gray-500 rounded-[4px] min-w-[250px] shadow-xl"
                    >
                      <ul className="">
                        {item.lession.map((lession, i) => (
                          <li
                            className="cursor-pointer hover:bg-gray-50 min-h-[35px]"
                            onClick={() => {
                              navigate(
                                `/lession/${lession?.name?.replace(" ", "")}`,
                                { state: { unit: item.name } }
                              );
                            }}
                            key={i}
                          >
                            <text className="hover:text-gray-800 text-[12px] md:text-[13px] xl:text-[14px] 2xl:text-[16px] mx-[10px]">
                              {lession.name}
                            </text>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* </Toolbar> */}
        </div>
      </div>
    </div>
  );
}
