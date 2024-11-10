"use client";
import { MenuOutlined, Search } from "@mui/icons-material";
import {
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { useLocation, useNavigate } from "react-router-dom"
import { useState } from "react";

const navItems = [
  { text: "HOME", href: "/home" },
  { text: "PRODUCTS", href: "/products" },
  { text: "QUALITY", href: "/quality" },
  { text: "GALLERY", href: "/gallery" },
  { text: "ABOUT US", href: "/about-us" },
  { text: "CONTACT US", href: "/contact-us" },
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
      stroke="#004890"
      stroke-width="2"
      stroke-linecap="round"
    />
  </svg>
);

const ChevronUpIcon: React.FC<any> = ({ className }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M4 16L11.0572 8.94281C11.5779 8.42211 12.4221 8.42211 12.9428 8.94281L20 16"
      stroke="#004890"
      stroke-width="2"
      stroke-linecap="round"
    />
  </svg>
);

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const hideHeaderRoutes = ["/Search"];
  const location = useLocation();
  // Đường dẫn hiện tại
  const pathname = location.pathname;
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const toggleDrawer = (open: boolean) => () => {
    console.log("open", open);
    setDrawerOpen(open);
  };

  const [isShowMore, setIsShowMore] = useState<boolean>(false);

  const drawer = (
    <div
      // onClick={toggleDrawer(false)}
      className="w-screen h-screen bg-[#F7F9F9]"
    >
      <div className=" px-[20px]">
        <div className="flex py-[16px] h-[30%] content-center item-center justify-between">
          <div className="w-[40px] h-[40px] rounded-full flex justify-center content-center items-center bg-gradient-to-r from-[#007BB0] to-[#00366A]">
            <IconButton
              style={{
                color: "white",
              }}
              // edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(!drawerOpen)}
            >
              <MenuOutlined />
            </IconButton>
          </div>
          <img
            src={require("../../assets/image/logo.png")}
            alt="Logo"
            className=""
            style={{ width: "45%", objectFit: "contain" }}
          />
          <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-gradient-to-r from-[#007BB0] to-[#00366A]">
            <Button
              onClick={() => {
                navigate("/Search");
              }}
            >
              <Search
                style={{
                  color: "white",
                }}
              />
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-white h-[100%]">
        <List>
          {navItems.map((item, index) => (
            <div key={index}>
              <button
                onClick={() => {
                  if (item?.text === "PRODUCTS") {
                    setIsShowMore(!isShowMore);
                    toggleDrawer(true);
                  } else {
                    navigate(item.href);
                    setDrawerOpen(false);
                    // handleMouseLeave();
                  }
                }}
                className="flex justify-between items-center w-full px-[20px] py-[10px]"
              >
                <text className="text-[#00366A] font-bold text-[18px]">
                  {item.text}
                </text>
                {item?.text === "PRODUCTS" && (
                  <div>
                    {isShowMore ? <ChevronUpIcon /> : <ChevronDownIcon />}
                  </div>
                )}
              </button>
              {item?.text === "PRODUCTS" && isShowMore && (
                <div className="px-[20px] pb-[15px] pt-[5px] text-[#00366A] font-medium flex flex-col gap-[15px]">
                  <div
                    className="w-full cursor-pointer items-center flex"
                    onClick={() => {
                      navigate("/product#machine-details");
                      setDrawerOpen(false);
                    }}
                  >
                    <span className="inline-block w-[6px] h-[6px] bg-[#00366A] rounded-sm mr-[10px]"></span>
                    <text>Machine Components & Details</text>
                  </div>

                  <div
                    className="w-full cursor-pointer items-center flex"
                    onClick={() => {
                      navigate("/product#automation");
                      setDrawerOpen(false);
                    }}
                  >
                    <span className="inline-block w-[6px] h-[6px] bg-[#00366A] rounded-sm mr-[10px]"></span>
                    <text>Automation</text>
                  </div>

                  <div
                    className="w-full cursor-pointer items-center flex"
                    onClick={() => {
                      navigate("/product#plastic-injection");
                      setDrawerOpen(false);
                    }}
                  >
                    <span className="inline-block w-[6px] h-[6px] bg-[#00366A] rounded-sm mr-[10px]"></span>
                    <text>Plastic Injection Products</text>
                  </div>

                  <div
                    className="w-full cursor-pointer items-center flex"
                    onClick={() => {
                      navigate("/product#silicone-rubber");
                      setDrawerOpen(false);
                    }}
                  >
                    <span className="inline-block w-[6px] h-[6px] bg-[#00366A] rounded-sm mr-[10px]"></span>
                    <text>Silicone Rubber Products</text>
                  </div>

                  <div
                    className="w-full cursor-pointer items-center flex"
                    onClick={() => {
                      navigate("/product#other-products");
                      setDrawerOpen(false);
                    }}
                  >
                    <span className="inline-block w-[6px] h-[6px] bg-[#00366A] rounded-sm mr-[10px]"></span>
                    <text>Other Products</text>
                  </div>
                </div>
              )}
            </div>
          ))}
        </List>
      </div>
    </div>
  );

  return !hideHeaderRoutes.includes(pathname) ? (
    <div className="h-[10vh] w-[100vw] px-[20px] md:px[5%] xl:px-[10%]  justify-center items-center sticky top-0 left-0 z-[1000] bg-white">
      <div className="flex h-[100%]">
        {/* <Toolbar style={{ padding: "20px 0 20px" }} className="w-[100%] justify-between"> */}
        <div className="flex  w-[100%] items-center justify-between ">
          {/* Mobile - Left */}
          {isMobile && (
            <>
              <div className="w-[40px] h-[40px] rounded-full flex justify-center content-center items-center bg-gradient-to-r from-[#007BB0] to-[#00366A]">
                <IconButton
                  style={{
                    color: "white",
                  }}
                  color="inherit"
                  aria-label="menu"
                  onClick={toggleDrawer(true)}
                >
                  <MenuOutlined />
                </IconButton>
              </div>
              <Drawer
                anchor="left"
                // open={true}
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
          )}
          {/* Center - LOGO */}
          <div className="justify-center items-center lg:items-start lg:justify-start flex w-[55%] lg:w-[20%] cursor-pointer -translate-y-[2px]" onClick={() => {
            navigate("/home");
          }}>
            <img
              src={require("../../assets/image/logo.png")}
              alt="Logo"
              width={100}
              height={100}
              className="w-[80%] object-contain h-[100%]"
            />
          </div>
          {/* Mobile */}
          {isMobile ? (
            <>
              <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-gradient-to-r from-[#007BB0] to-[#00366A]">
                <Button
                  onClick={() => {
                    navigate("/Search");
                  }}
                >
                  <Search
                    style={{
                      color: "white",
                    }}
                  />
                </Button>
              </div>
            </>
          ) : (
            // Desktop
            <Box
              sx={{
                display: "flex",
                flexGrow: 1,
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              {navItems.map((item, index) => {
                // Drawer
                if (item?.text === "PRODUCTS") {
                  return (
                    <div
                      key={index}
                      className="relative inline-block group z-[1000]"
                    >
                      <button
                        className="group-hover:text-white text-[#00366A] 
                        font-bold group-hover:bg-gradient-to-t from-[#007BB0] to-[#00366A] 
                        focus:outline-none line-clamp-1 text-[10px] md:text-[12px] xl:text-[14px]
                        2xl:text-[18px] px-[10px] py-[15px] rounded-t-[12px] rounded-b-none flex items-center z-[1000]"
                        onClick={() => {
                          navigate("/product");
                        }}
                      >
                        {item.text}
                        <img
                          src={require("../../assets/icon/ic_down-blue.png")}
                          alt=""
                          width={12}
                          height={8}
                          className="ml-[5px] group-hover:hidden"
                        />
                        <img
                          src={require("../../assets/image/ic_down_white.png")}
                          alt=""
                          width={12}
                          height={8}
                          className="ml-[5px] hidden group-hover:inline"
                        />
                      </button>

                      <div
                        className="absolute text-[14px] md:text-[15px] xl:text-[16px]  hidden group-hover:block bg-custom-gradient
                       text-white w-[250%] px-[10px] pt-[40px] pb-[26px] rounded-b-[12px] rounded-tr-[12px]"
                      >
                        <ul className="p-4 space-y-4">
                          <li
                            className="cursor-pointer flex items-center font-semibold"
                            onClick={() => {
                              navigate("/product#machine-details");
                            }}
                          >
                            <span className="inline-block w-[6px] h-[6px] bg-[white] rounded-sm mr-[10px]"></span>
                            <text className="hover:border-b-[1px] border-white text-[12px] md:text-[13px] xl:text-[14px] 2xl:text-[16px]">
                              Machine Components & Details
                            </text>
                          </li>
                          <li
                            className="hover:text-gray-200 cursor-pointer flex items-center font-semibold"
                            onClick={() => {
                              navigate("/product#automation");
                            }}
                          >
                            <span className="inline-block w-[6px] h-[6px] bg-[white] rounded-sm mr-[10px]"></span>
                            <text className="hover:border-b-[1px] border-white text-[12px] md:text-[13px] xl:text-[14px] 2xl:text-[16px]">
                              Automation
                            </text>
                          </li>
                          <li
                            className="hover:text-gray-200 cursor-pointer flex items-center font-semibold"
                            onClick={() => {
                              navigate("/product#plastic-injection");
                            }}
                          >
                            <span className="inline-block w-[6px] h-[6px] bg-[white] rounded-sm mr-[10px]"></span>
                            <text className="hover:border-b-[1px] border-white text-[12px] md:text-[13px] xl:text-[14px] 2xl:text-[16px]">
                              Plastic Injection Products
                            </text>
                          </li>
                          <li
                            className="hover:text-gray-200 cursor-pointer flex items-center font-semibold"
                            onClick={() => {
                              navigate("/product#silicone-rubber");
                            }}
                          >
                            <span className="inline-block w-[6px] h-[6px] bg-[white] rounded-sm mr-[10px]"></span>
                            <text className="hover:border-b-[1px] border-white text-[12px] md:text-[13px] xl:text-[14px] 2xl:text-[16px]">
                              Silicone Rubber Products
                            </text>
                          </li>
                          <li
                            className="hover:text-gray-200 cursor-pointer flex items-center font-semibold"
                            onClick={() => {
                              navigate("/product#other-products");
                            }}
                          >
                            <span className="inline-block w-[6px] h-[6px] bg-[white] rounded-sm mr-[10px]"></span>
                            <text className="hover:border-b-[1px] border-white text-[12px] md:text-[13px] xl:text-[14px] 2xl:text-[16px]">
                              Other Products
                            </text>
                          </li>
                        </ul>
                      </div>
                    </div>
                  );
                } else
                  return (
                    <button
                      className="hover:text-white text-[#00366A] 
                        font-bold px-4 py-2 hover:bg-gradient-to-t from-[#007BB0] to-[#00366A] 
                        focus:outline-none text-[10px] md:text-[12px] xl:text-[14px]
                        2xl:text-[18px] px-[10px] py-[15px] rounded-[12px] flex items-center z-[1000]"
                      onClick={() => {
                        navigate(item.href);
                      }}
                    >
                      <text className="line-clamp-1">{item.text}</text>
                    </button>
                    // </Button>
                  );
              })}
              
              <div
                className="
                relative
                rounded-[8px] 
                border-transparent
                bg-gradient-to-r from-[#007BB0] to-[#00366A]
                h-[5vh] w-[25%]
                p-[1.5px]
                ml-[3%]
                "
              >
                <div className="h-[100%] w-[100%] flex items-center rounded-[6px] pl-[8px] cursor-pointer overflow-hidden relative bg-white" onClick={() => {
                  navigate("/Search");
                }}>
                  <div className="w-[80%] h-[100%] flex items-center">
                    <text className="text-[#00366A] font-normal text-[12px] md:text-[14px] 2xl:text-[16px]">Search...</text>
                  </div>
                  <div
                    onClick={() => {
                      navigate("/Search");
                    }}
                    className="w-[20%] h-[5vh] rounded-[8px] flex justify-center items-center bg-gradient-to-r from-[#007BB0] to-[#00366A] object-contain"
                  >
                    <Button
                      onClick={() => {
                        navigate("/Search");
                      }}
                    >
                      <Search
                        style={{
                          color: "white",
                          width: "20px",
                          height: "20px",
                        }}
                        onClick={() => {
                          navigate("/Search");
                        }}
                      />
                    </Button>
                  </div>
                </div>
              </div>
            </Box>
          )}
          {/* </Toolbar> */}
        </div>
      </div>
    </div>
  ) : null;
}
