"use client";
import { MenuOutlined, Search } from "@mui/icons-material";
import {
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  Menu,
  MenuItem,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const navItems = [
  { text: "HOME", href: "/home" },
  { text: "PRODUCT", href: "/products" },
  { text: "QUALITY", href: "/quality" },
  { text: "GALLERY", href: "/gallery" },
  { text: "ABOUT US", href: "/about-us" },
  { text: "CONTACT US", href: "/contact-us" },
];

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const pathName = usePathname();
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState(null);
  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const [isShowMore, setIsShowMore] = useState<boolean>(false);

  const drawer = (
    <div
      // onClick={toggleDrawer(false)}
      className="w-screen h-screen bg-[#F7F9F9]"
    >
      <div className=" px-[20px]">
        <div className="flex  py-[16px] h-[30%] content-center item-center justify-between">
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
          <Image
            unoptimized
            src={require("../../../public/image/logo.png")}
            alt="Logo"
            style={{ width: "222px", height: "50px", objectFit: "contain" }}
          />
          <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-gradient-to-r from-[#007BB0] to-[#00366A]">
            <Button onClick={() => router.push("Search")}>
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
                  if (item?.text === "PRODUCT") {
                    setIsShowMore(!isShowMore);
                    toggleDrawer(true);
                  } else {
                    router.push(item.href);
                    // handleMouseLeave();
                  }
                }}
                className="flex justify-between items-center w-full px-[20px] py-[15px]"
              >
                <text className="text-[#00366A] font-bold text-[18px]">
                  {item.text}
                </text>
                {item?.text === "PRODUCT" && (
                  <Image
                    unoptimized
                    src={require("../../../public/icon/ic_down-blue.png")}
                    alt="arrow-right"
                    width={24}
                    height={24}
                  />
                )}
              </button>
              {item?.text === "PRODUCT" && isShowMore && (
                <div className="px-[20px] py-[15px] text-[#00366A] font-medium flex flex-col gap-[15px]">
                  <div
                    className="w-full cursor-pointer"
                    onClick={() => {
                      router.push("/product#machine-details");
                    }}
                  >
                    ▪ <text>Machine Components & Details</text>
                  </div>

                  <div
                    className="w-full cursor-pointer"
                    onClick={() => {
                      router.push("/product#automation");
                    }}
                  >
                    ▪ <text>Automation</text>
                  </div>

                  <div
                    className="w-full cursor-pointer"
                    onClick={() => {
                      router.push("/product#plastic-injection");
                    }}
                  >
                    ▪ <text>Plastic Injection Products</text>
                  </div>

                  <div
                    className="w-full cursor-pointer"
                    onClick={() => {
                      router.push("/product#silicone-rubber");
                    }}
                  >
                    ▪ <text>Silicone Rubber Products</text>
                  </div>

                  <div
                    className="w-full cursor-pointer"
                    onClick={() => {
                      router.push("/product#other-products");
                    }}
                  >
                    ▪ <text>Other Products</text>
                  </div>
                </div>
              )}
            </div>
          ))}
        </List>
      </div>
    </div>
  );

  // Mở menu khi hover vào nút "Products"
  const handleMouseEnter = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  // Đóng menu khi rời chuột
  const handleMouseLeave = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div className="h-[10vh] w-[100vw] px-[20px] md:px[5%] xl:px-[10%] fixed top-0 z-[100] bg-white justify-center items-center">
      <div className="flex h-[100%]">
        {/* <Toolbar style={{ padding: "20px 0 20px" }} className="w-[100%] justify-between"> */}
        <div className="flex  w-[100%] justify-between items-center ">
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
          <div className="justify-center items-center lg:items-start lg:justify-start flex w-[80%] lg:w-[20%]">
            <Image
              unoptimized
              src={"/image/logo.png"}
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
                <Button onClick={() => router.push("Search")}>
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
              }}
            >
              {navItems.map((item, index) => {
                // Drawer
                if (item?.text === "PRODUCT") {
                  return (
                    <div
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      key={index}
                    >
                      <Button
                        className="line-clamp-1 text-[10px] md:text-[12px] xl:text-[14px] 2xl:text-[18px] p-[10px] rounded-[12px]"
                        sx={{
                          backgroundImage:
                            pathName === item.href || anchorEl
                              ? "linear-gradient(70deg, #007BB0 10%, #00366A 90%)"
                              : "transparent",
                          color:
                            pathName === item.href || anchorEl
                              ? "white"
                              : "#00366A",
                          fontFamily: "Montserrat",
                          fontWeight: "700",
                          "&:hover": {
                            background:
                              "linear-gradient(70deg, #007BB0 10%, #00366A 90%)", // Gradient khi hover
                            color: "white",
                          },
                        }}
                      >
                        {item.text}
                      </Button>

                      <Menu
                        id="products-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleMouseLeave}
                        MenuListProps={{
                          onMouseLeave: handleMouseLeave,
                        }}
                        sx={{
                          "& .MuiPaper-root": {
                            background:
                              "linear-gradient(to right, #007BB0, #00366A)", // Gradient cho menu
                          },
                        }}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "left",
                        }}
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "left",
                        }}
                      >
                        <MenuItem
                          sx={{
                            color: "white",
                            "&:hover": {
                              backgroundColor: "transparent",
                              borderBottom: "0.5px solid transparent",
                            },
                          }}
                          onClick={() => {
                            handleMouseLeave();
                            router.push("/product#machine-details");
                          }}
                        >
                          ▪{" "}
                          <Typography
                            sx={{
                              "&:hover": {
                                borderBottom: "0.5px solid white",
                              },
                              marginLeft: 1,
                            }}
                          >
                            Machine Components & Details
                          </Typography>
                        </MenuItem>
                        <MenuItem
                          sx={{
                            color: "white",
                            "&:hover": {
                              backgroundColor: "transparent",
                              borderBottom: "0.5px solid transparent",
                            },
                          }}
                          onClick={() => {
                            handleMouseLeave();
                            router.push("/product#automation");
                          }}
                        >
                          ▪{" "}
                          <Typography
                            sx={{
                              "&:hover": {
                                borderBottom: "0.5px solid white",
                              },
                              marginLeft: 1,
                            }}
                          >
                            Automation
                          </Typography>
                        </MenuItem>

                        <MenuItem
                          sx={{
                            color: "white",
                            "&:hover": {
                              backgroundColor: "transparent",
                              borderBottom: "0.5px solid transparent",
                            },
                          }}
                          onClick={() => {
                            handleMouseLeave();
                            router.push("/product#plastic-injection");
                          }}
                        >
                          ▪{" "}
                          <Typography
                            sx={{
                              "&:hover": {
                                borderBottom: "0.5px solid white",
                              },
                              marginLeft: 1,
                            }}
                          >
                            Plastic Injection Products
                          </Typography>
                        </MenuItem>

                        <MenuItem
                          sx={{
                            color: "white",
                            "&:hover": {
                              backgroundColor: "transparent",
                              borderBottom: "0.5px solid transparent",
                            },
                          }}
                          onClick={() => {
                            handleMouseLeave();
                            router.push("/product#silicone-rubber");
                          }}
                        >
                          ▪{" "}
                          <Typography
                            sx={{
                              "&:hover": {
                                borderBottom: "0.5px solid white",
                              },
                              marginLeft: 1,
                            }}
                          >
                            Silicone Rubber Products
                          </Typography>
                        </MenuItem>

                        <MenuItem
                          sx={{
                            color: "white",
                            "&:hover": {
                              backgroundColor: "transparent",
                              borderBottom: "0.5px solid transparent",
                            },
                          }}
                          onClick={() => {
                            handleMouseLeave();
                            router.push("/product#other-products");
                          }}
                        >
                          ▪{" "}
                          <Typography
                            sx={{
                              "&:hover": {
                                borderBottom: "0.5px solid white",
                              },
                              marginLeft: 1,
                            }}
                          >
                            Other Products
                          </Typography>
                        </MenuItem>
                      </Menu>
                    </div>
                  );
                } else
                  return (
                    <Button
                      className="line-clamp-1 text-[10px] md:text-[12px] xl:text-[14px] 2xl:text-[18px] p-[10px] rounded-[12px]"
                      key={index}
                      sx={{
                        // backgroundImage:
                        //   pathName === item.href
                        //     ? "linear-gradient(70deg, #007BB0 10%, #00366A 90%)"
                        //     : "transparent",
                        fontFamily: "Montserrat",
                        fontWeight: "700",
                        "&:hover": {
                          background:
                            "linear-gradient(70deg, #007BB0 10%, #00366A 90%)", // Gradient khi hover
                          color: "white",
                          // padding: "10px 0 10px",
                        },
                        color: "#00366A",
                        // color: pathName === item.href ? "white" : "#00366A",
                      }}
                      component={Link}
                      href={item.href}
                    >
                      {item.text}
                    </Button>
                  );
              })}
              <div className="h-[40px] w-[240px] flex items-center rounded-xl pl-[8px] border-[1px] overflow-hidden border-[#00366A] relative">
                <input
                  className="placeholder:text-[#00366A] placeholder:font-medium bg-transparent outline-none "
                  placeholder="Search..."
                  onFocus={() => router.push("Search")}
                />
                <div
                  onClick={() => router.push("Search")}
                  className="w-[60px] absolute top-0 -right-2 h-[40px] rounded-xl flex justify-center items-center bg-gradient-to-r from-[#007BB0] to-[#00366A] object-contain"
                >
                  <Button onClick={() => router.push("Search")}>
                    <Search
                      style={{
                        color: "white",
                      }}
                      onFocus={() => router.push("Search")}
                      onClick={() => router.push("Search")}
                    />
                  </Button>
                </div>
              </div>
            </Box>
          )}
          {/* </Toolbar> */}
        </div>
      </div>
    </div>
  );
}
