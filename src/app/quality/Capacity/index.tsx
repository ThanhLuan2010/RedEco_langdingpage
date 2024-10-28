import { Box } from "@mui/material";
import { Typography } from "antd";
import Image from "next/image";
function Capacity() {
  return (
    <Box
      sx={{
        marginTop: "15%",
        width: "80%",
        display: "flex",
        alignItems: "flex-end",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "35%",
          height: "100%",
          marginRight: "15%",
          //   top:"7%"
        }}
      >
        {/* Khung viền ở dưới */}
        <Box
          sx={{
            position: "absolute",
            bottom: "5%",
            left: "0",
            width: "95%",
            height: "90%",
            border: "6px solid #00366A", // Màu viền
            borderRadius: "24px",
            zIndex: -1,
          }}
        />
        {/* Hình */}
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "90%",
            bottom: -15,
            right: "-15%",
          }}
        >
          <Image
            src={require("../../../public/image/quality_content_image.png")}
            alt="Custom Image"
            layout="fill" // Để ảnh bao phủ toàn bộ Box
            style={{
              borderRadius: "8px",
              bottom: 0,
              position: "absolute",
              right: 0,
              //   objectFit
            }}
          />
        </Box>

        <Box
          sx={{
            position: "absolute",
            bottom: "-20%",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 3,
            width: "100%",
          }}
        >
          <Box
            sx={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Typography
              style={{
                fontWeight: "bold",
                background:
                  "linear-gradient(150deg, #007BB0 -7.86%, #00366A 67.26%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: "3rem",
              }}
            >
              SINCE
            </Typography>
            <Typography
              style={{
                fontWeight: "bold",
                background: "linear-gradient(150deg, #28FF90, #00954F)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                marginLeft: "8px",
                fontSize: "3rem",
              }}
            >
              2017
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={{ width: "50%" }}>
        <Typography
          style={{
            fontSize: "2.5rem",
            lineHeight: "50px",
            fontFamily: "Montserrat",
            fontWeight: "700",
            position: "relative", // Để định vị đường viền
            paddingBottom: "8px", // Khoảng cách giữa chữ và border
            color: "#00366A",
            textAlign: "center",
          }}
        >
          QUALITY
          {/* Đường viền */}
          <span
            style={{
              position: "absolute",
              bottom: 0, // Đặt đường viền sát dưới chữ
              left: "50%", // Căn giữa theo chiều ngang
              transform: "translateX(-50%)", // Căn chỉnh chính xác vị trí giữa
              width: "150px", // Chiều rộng của đường viền (ngắn hơn width chữ)
              height: "5px", // Độ dày của đường viền
              backgroundColor: "#00A859", // Màu sắc của đường viền
            }}
          />
        </Typography>

        <Typography
          style={{
            textAlign: "justify",
            fontSize: "1.5rem",
            lineHeight: "120%",
            marginTop: "5%",
          }}
        >
          At REDECO Vietnam, monitoring and evaluation systems are implemented
          in each department to comply with quality assurance procedures.
          Quality is assured with a manufacturing and testing process that
          includes quality control at every step. From design to final assembly
          and testing, each finished part is thoroughly inspected by engineers
          who are personally responsible for the quality of the final product.
        </Typography>

        <Box sx={{ display: "flex", marginTop: "10%", gap: "30px" }}>
          <Box
            sx={{
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
              width: "50%",
              borderRadius: "24px",
              padding: "34px 30px 34px 30px",
            }}
          >
            <Typography style={{ lineHeight: "25px" }}>
              <span style={{ marginRight: "10px" }}>▪</span>
              Good Skilled Engineers
            </Typography>
            <Typography style={{ lineHeight: "25px" }}>
              <span style={{ marginRight: "10px" }}>▪</span>
              Modern Machines
            </Typography>
            <Typography style={{ lineHeight: "25px" }}>
              <span style={{ marginRight: "10px" }}>▪</span>
              High-Quality Service
            </Typography>
            <Typography style={{ lineHeight: "25px" }}>
              <span style={{ marginRight: "10px" }}>▪</span>
              Guaranteed Products
            </Typography>
            <Typography style={{ lineHeight: "25px" }}>
              <span style={{ marginRight: "10px" }}>▪</span>
              Ensure 5S Level & Kaizen
            </Typography>
          </Box>

          <Box
            sx={{
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
              width: "50%",
              borderRadius: "24px",
              padding: "34px 30px 34px 30px",
            }}
          >
            <Typography style={{ lineHeight: "25px" }}>
              <span style={{ marginRight: "10px" }}>▪</span>
              Good Skilled Engineers
            </Typography>
            <Typography style={{ lineHeight: "25px" }}>
              <span style={{ marginRight: "10px" }}>▪</span>
              Modern Machines
            </Typography>
            <Typography style={{ lineHeight: "25px" }}>
              <span style={{ marginRight: "10px" }}>▪</span>
              High-Quality Service
            </Typography>
            <Typography style={{ lineHeight: "25px" }}>
              <span style={{ marginRight: "10px" }}>▪</span>
              Guaranteed Products
            </Typography>
            <Typography style={{ lineHeight: "25px" }}>
              <span style={{ marginRight: "10px" }}>▪</span>
              Ensure 5S Level & Kaizen
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Capacity;
