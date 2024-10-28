// import { Box } from "@mui/material";
// import { Typography } from "antd";
// import Image from "next/image";
// function Capacity() {
//   return (
//     <div className="mt-[15%]">
//       <Typography
//         style={{
//           fontSize: "2.5rem",
//           lineHeight: "50px",
//           fontFamily: "Montserrat",
//           fontWeight: "700",
//           position: "relative", // Để định vị đường viền
//           paddingBottom: "8px", // Khoảng cách giữa chữ và border
//           color: "#00366A",
//           textAlign: "center",
//         }}
//       >
//         CAPACITY
//         {/* Đường viền */}
//         <span
//           style={{
//             position: "absolute",
//             bottom: 0, // Đặt đường viền sát dưới chữ
//             left: "50%", // Căn giữa theo chiều ngang
//             transform: "translateX(-50%)", // Căn chỉnh chính xác vị trí giữa
//             width: "100px", // Chiều rộng của đường viền (ngắn hơn width chữ)
//             height: "5px", // Độ dày của đường viền
//             backgroundColor: "#00A859", // Màu sắc của đường viền
//           }}
//         />
//       </Typography>

//     </div>
//   );
// }

// export default Capacity;

import { Tabs } from "antd";
import { Card, Grid, Typography } from "@mui/material";

const { TabPane } = Tabs;

const MachineCard = ({ imageSrc, title }: any) => (
  <Card style={{ padding: "16px", margin: "8px" }}>
    <img src={imageSrc} alt={title} style={{ width: "100%", height: "auto" }} />
    <Typography variant="subtitle1" align="center" style={{ marginTop: "8px" }}>
      {title}
    </Typography>
  </Card>
);

const Capacity = () => {
  return (
    <div style={{ padding: "24px" }}>
      <Typography variant="h4" align="center" gutterBottom>
        CAPACITY
      </Typography>
    </div>
  );
};

export default Capacity;
