"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";
import Description1 from "../Description1";
import OtherNews from "../OtherNews";
import Footer from "@/components/Footer";
import Description2 from "../Description2";
import Description3 from "../Description3";
import Description4 from "../Description4";

function index() {
  const router = useParams();
  const { id } = router; // Lấy id từ URL
  console.log("=====id=-===", id);
  const banner =
    id == "1"
      ? require("../../../public/image/banner_news1.png")
      : id == "2"
      ? require("../../../public/image/banner_news2.png")
      : id == "3"
      ? require("../../../public/image/banner_news3.png")
      : id == "4"
      ? require("../../../public/image/banner_news4.png")
      : "";
  const title =
    id == "1"
      ? "Why Choose REDECO Vietnam Industrial Solutions JSC for Your CNC Machining Needs?"
      : id == "2"
      ? "Precision and Innovation in Every Cut"
      : id == "3"
      ? "Strategic Cooperation Signing Ceremony Between Ha Long Company & Redeco Vietnam"
      : "Comprehensive CNC Machining Service at Redeco";

  const Description = () => {
    switch (id) {
      case "1":
        return <Description1 />;
      case "2":
        return <Description2 />;
      case "3":
        return <Description3 />;
      case "4":
        return <Description4 />;
      default:
        break;
    }
  };
  return (
    <div>
      <Image style={{ width: "100vw", height: "100vh" }} alt="" src={banner} />
      <div className="w-[100%] items-center flex flex-col">
        <div className="w-[80%] mt-[7%]">
          <div className="relative">
            <text className="font-semibold  text-[2.5rem] text-[#00366A] ">
              {title}
            </text>
            <span
              style={{
                position: "absolute",
                bottom: -10, // Đặt đường viền sát dưới chữ
                left: "0%", // Căn giữa theo chiều ngang
                width: "250px", // Chiều rộng của đường viền (ngắn hơn width chữ)
                height: "5px", // Độ dày của đường viền
                backgroundColor: "#00A859", // Màu sắc của đường viền
              }}
            />
          </div>

          <div className="mt-[3rem]">{Description()}</div>
        </div>
      </div>
      <div className="mt-[120px]">
        <OtherNews id={id} />
      </div>
      <Footer style={{ marginTop: 0 }} />
    </div>
  );
}

export default index;
