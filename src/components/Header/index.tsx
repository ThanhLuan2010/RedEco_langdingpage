"use client";
import { MenuOutlined, Search } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Input,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const navItems = [
  { text: "Home", href: "/home" },
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

  const drawer = (
    <div onClick={toggleDrawer(false)} className="w-screen">
      <div className="">
        <div className="flex px-[18px] py-[16px] h-[30%] content-center bg-red-400 item-center justify-between">
          <div className="w-[40px] h-[40px] rounded-full flex justify-center content-center items-center bg-gradient-to-r from-[#007BB0] to-[#00366A]">
            <IconButton
              style={{
                color: "white",
              }}
              // edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuOutlined />
            </IconButton>
          </div>
          <Image
            src={require("../../public/image/logo.png")}
            alt="Logo"
            style={{ width: "222px", height: "50px", objectFit: "contain" }}
          />
          <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-gradient-to-r from-[#007BB0] to-[#00366A]">
            <Button>
              <Search
                style={{
                  color: "white",
                }}
              />
            </Button>
          </div>
        </div>
      </div>
      <List>
        {navItems.map((item, index) => (
          <ListItem key={index} component={Link} href={item.href}>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
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
    <div className="h-[10vh] w-[100vw]">
      <div>
        <AppBar position="static" color="default" sx={{}}>
          <Toolbar
            className="xl:px-main lg:px-main md:px-main sm:px-[4px] px-[4px] flex justify-center 
          sm:gap-10 gap-10 xl:gap-0 lg:gap-0 md:gap-0 items-center xl:py-[8px] lg:py-[8px] md:py-[8px] sm:py-[12px] py-[12px]"
          >
            {/* Mobile - Left */}
            {isMobile && (
              <>
                <div className="w-[40px] h-[40px] rounded-full flex justify-center content-center items-center bg-gradient-to-r from-[#007BB0] to-[#00366A]">
                  <IconButton
                    style={{
                      color: "white",
                    }}
                    // edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={toggleDrawer(true)}
                  >
                    <MenuOutlined />
                  </IconButton>
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
            )}
            {/* Center - LOGO */}
            <Image
              src={require("../../public/image/logo.png")}
              alt="Logo"
              style={{ width: "222px", height: "50px", objectFit: "contain" }}
            />
            {/* Mobile */}
            {isMobile ? (
              <>
                <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-gradient-to-r from-[#007BB0] to-[#00366A]">
                  <Button>
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
                      >
                        <Button
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
                            fontSize: "18px",
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
                              router.push("/product");
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
                            onClick={handleMouseLeave}
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
                            onClick={handleMouseLeave}
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
                            onClick={handleMouseLeave}
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
                            onClick={handleMouseLeave}
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
                        className="xl:text-[18px] lg:text-[18px] md:text-[16px]"
                        sx={{
                          backgroundImage:
                            pathName === item.href
                              ? "linear-gradient(70deg, #007BB0 10%, #00366A 90%)"
                              : "transparent",
                          fontFamily: "Montserrat",
                          fontWeight: "700",
                          fontSize: "18px",
                          "&:hover": {
                            background:
                              "linear-gradient(70deg, #007BB0 10%, #00366A 90%)", // Gradient khi hover
                            color: "white",
                          },
                          color: pathName === item.href ? "white" : "#00366A",
                        }}
                        key={index}
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
                  />
                  <div className="w-[60px] absolute top-0 -right-2 h-[40px] rounded-xl flex justify-center items-center bg-gradient-to-r from-[#007BB0] to-[#00366A]">
                    <Button>
                      <Search
                        style={{
                          color: "white",
                        }}
                      />
                    </Button>
                  </div>
                </div>
              </Box>
            )}
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
}
