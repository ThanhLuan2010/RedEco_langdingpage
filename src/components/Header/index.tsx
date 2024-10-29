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
    <Box onClick={toggleDrawer(false)} sx={{ width: 250 }}>
      <List>
        {navItems.map((item, index) => (
          <ListItem key={index} component={Link} href={item.href}>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
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
    <Box sx={{ height: "10vh", width: "100vw" }}>
      <AppBar position="static" color="default" sx={{}}>
        <Toolbar>
          <Image
            src={require("../../public/image/logo.png")}
            alt="Logo"
            style={{ width: "222px", height: "50px", objectFit: "contain" }}
          />
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
              >
                <MenuOutlined />
              </IconButton>
              <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
              >
                {drawer}
              </Drawer>
            </>
          ) : (
            <Box
              sx={{
                display: "flex",
                flexGrow: 1,
                justifyContent: "space-around",
              }}
            >
              {navItems.map((item, index) => {
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
              <Box>
                <Input />
                <Button>
                  <Search />
                </Button>
              </Box>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
