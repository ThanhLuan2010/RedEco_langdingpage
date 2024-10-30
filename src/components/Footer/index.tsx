import { Box, Input, Typography, Button, colors } from "@mui/material";
import { Col, Row } from "antd";
import Image from "next/image";

export default function Footer({ style }: any) {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "rgb(10,24,56)",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        paddingY: "5%",
        marginTop: "8%",
        ...style,
      }}
    >
      <Box sx={{ width: "80%" }}>
        <Image
          style={{ width: "20%", objectFit: "contain" }}
          alt=""
          src={require("../../public/image/logo_footer.png")}
        />
        <Row style={{ color: "white", marginTop: "4%" }} gutter={[20, 20]}>
          <Col style={{ paddingRight: "5%" }} xs={24} sm={12} md={7}>
            <Typography style={{ fontWeight: 700, lineHeight: "21.94px" }}>
              SUBSCRIBE TO NEWSLETTER
            </Typography>
            <Typography
              style={{
                fontWeight: 200,
                lineHeight: "20px",
                fontSize: "12px",
                fontFamily: "Montserrat",
                marginTop: "10%",
              }}
            >
              By subscribing to our mailing list, we will constantly update with
              the latest news.
            </Typography>

            <Input
              sx={{
                borderWidth: 2,
                borderColor: "#EDF0F4",
                borderRadius: "6px",
                marginTop: "5%",
                width: "100%",
                color: "#EDF0F4",
                paddingX: "12px",
              }}
              placeholder="Email address..."
            />

            <Typography
              style={{
                fontWeight: 200,
                lineHeight: "20px",
                fontSize: "12px",
                fontFamily: "Montserrat",
                marginTop: "10%",
              }}
            >
              This site is protected by the Google Privacy Policy and Terms of
              Service apply.
            </Typography>
            <Button
              sx={{
                marginTop: "12%",
                padding: 0,
                textTransform: "none", // Tắt chữ in hoa
              }}
            >
              <Typography
                style={{
                  color: "white",
                  textDecorationLine: "underline",
                  fontSize: "18px",
                }}
              >
                Subcribe
              </Typography>
            </Button>
          </Col>

          <Col xs={24} sm={12} md={8}>
            <Typography
              style={{
                fontWeight: 700,
                lineHeight: "21.94px",
                marginBottom: "10px",
              }}
            >
              MACHINE COMPONENTS & DETAILS
            </Typography>
            <Typography
              style={{
                fontWeight: 700,
                lineHeight: "21.94px",
                marginBottom: "10px",
              }}
            >
              AUTOMATION
            </Typography>
            <Typography
              style={{
                fontWeight: 700,
                lineHeight: "21.94px",
                marginBottom: "10px",
              }}
            >
              PLASTIC INJECTION{" "}
            </Typography>
            <Typography
              style={{
                fontWeight: 700,
                lineHeight: "21.94px",
                marginBottom: "10px",
              }}
            >
              SILICONE RUBBER PRODUCTS
            </Typography>
            <Typography
              style={{
                fontWeight: 400,
                lineHeight: "21.94px",
                marginBottom: "7px",
                fontSize: "12px",
              }}
            >
              Vacuum Suction Cup
            </Typography>
            <Typography
              style={{
                fontWeight: 400,
                lineHeight: "21.94px",
                marginBottom: "7px",
                fontSize: "12px",
              }}
            >
              Silicone Rubber Detail
            </Typography>
            <Typography
              style={{
                fontWeight: 400,
                lineHeight: "21.94px",
                marginBottom: "7px",
                fontSize: "12px",
              }}
            >
              Silicone Rubber Gasket
            </Typography>
            <Typography
              style={{
                fontWeight: 400,
                lineHeight: "21.94px",
                marginBottom: "7px",
                fontSize: "12px",
              }}
            >
              Industrial Keyboard
            </Typography>
          </Col>

          <Col xs={24} sm={12} md={4}>
            <Typography
              style={{
                fontWeight: 700,
                lineHeight: "21.94px",
                marginBottom: "10px",
              }}
            >
              OTHER PRODUCTS
            </Typography>
            <Typography
              style={{
                fontWeight: 400,
                lineHeight: "21.94px",
                marginBottom: "7px",
                fontSize: "12px",
              }}
            >
              Manipulator Table
            </Typography>
            <Typography
              style={{
                fontWeight: 400,
                lineHeight: "21.94px",
                marginBottom: "7px",
                fontSize: "12px",
              }}
            >
              Aluminum Casting
            </Typography>
            <Typography
              style={{
                fontWeight: 400,
                lineHeight: "21.94px",
                marginBottom: "7px",
                fontSize: "12px",
              }}
            >
              JIG Products
            </Typography>
            <Typography
              style={{
                fontWeight: 400,
                lineHeight: "21.94px",
                marginBottom: "7px",
                fontSize: "12px",
              }}
            >
              Industrial Trolley
            </Typography>
          </Col>

          <Col xs={24} sm={12} md={5}>
            <Typography
              style={{
                fontWeight: 700,
                lineHeight: "21.94px",
                marginBottom: "10px",
              }}
            >
              CONTACT US
            </Typography>
            <Typography
              style={{
                fontWeight: 400,
                lineHeight: "21.94px",
                marginBottom: "7px",
                fontSize: "12px",
              }}
            >
              Redeco Vietnam Industrial Solutions Joint Stock Company
            </Typography>
            <Typography
              style={{
                fontWeight: 400,
                lineHeight: "21.94px",
                marginBottom: "7px",
                fontSize: "12px",
              }}
            >
              Address: No. 30, Lane 77, Thon Chien 2 Street, Chien Village, Duc
              Thuong Commune, Hoai Duc District, Hanoi City
            </Typography>
            <Typography
              style={{
                fontWeight: 400,
                lineHeight: "21.94px",
                marginBottom: "7px",
                fontSize: "12px",
              }}
            >
              Phone: (+84).913.882.867 (Mr. Thieu Do Xuan)
            </Typography>
            <Typography
              style={{
                fontWeight: 400,
                lineHeight: "21.94px",
                marginBottom: "7px",
                fontSize: "12px",
              }}
            >
              Tax Code: 0108018838
            </Typography>
            <Typography
              style={{
                fontWeight: 400,
                lineHeight: "21.94px",
                marginBottom: "7px",
                fontSize: "12px",
              }}
            >
              Email: kinhdoanh@redeco.vn
            </Typography>
            <Typography
              style={{
                fontWeight: 400,
                lineHeight: "21.94px",
                marginBottom: "7px",
                fontSize: "12px",
              }}
            >
              CC email: thieudx@redeco.vn
            </Typography>
            <Typography
              style={{
                fontWeight: 400,
                lineHeight: "21.94px",
                marginTop: "20%",
                fontSize: "12px",
              }}
            >
              Copyright © 2024 Redeco
            </Typography>
          </Col>
        </Row>
      </Box>
    </Box>
  );
}
