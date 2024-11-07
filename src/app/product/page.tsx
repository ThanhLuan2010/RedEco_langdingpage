"use client";
import Footer from "@/components/Footer";
import PhoneButton from "@/components/phoneButton";
import dynamic from "next/dist/shared/lib/dynamic";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function Product() {
  const arrBanner = [
    require("../../../public/image/product_carousel1.png"),
    require("../../../public/image/product_carousel2.png"),
    require("../../../public/image/product_carousel3.png"),
  ];

  const arrBanner2 = [
    require("../../../public/image/banner-plastic1.png"),
    require("../../../public/image/banner-plastic2.png"),
    require("../../../public/image/banner-plastic3.png"),
  ];
  const router = useRouter();

  const [tab, setTab] = useState<string>("");
  const [otherTab, setOtherTab] = useState<string>("");

  useEffect(() => {
    // Lấy hash từ URL (VD: #targetComponent)
    const hash = window.location.hash;

    if (hash) {
      const id = hash?.split(".")[1];
      const tabName =
        id == "1"
          ? "VACUUM SUCTION CUP"
          : id == "2"
          ? "SILICONE RUBBER DETAIL"
          : id == "3"
          ? "SILICONE RUBBER GASKET"
          : id == "4"?"INDUSTRIAL KEYBOARD":null
      const tabOther =
        id == "5"
          ? "MANIPULATOR TABLE"
          : id == "6"
          ? "ALUMINUM CASTING"
          : id == "7"
          ? "JIG PRODUCTS"
          : id == "8"
          ? "INDUSTRIAL TROLLEY"
          : null;
      if (tabName) {
        setTab(tabName);
      }
      if (tabOther) {
        setOtherTab(tabOther);
      }
      // Cuộn đến thành phần có ID tương ứng với hash
      const targetElement = document.querySelector(hash?.split(".")[0]);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [router]);

  const TopBannerComponent = dynamic(() => import("./TopBaner"), {
    ssr: false,
  });
  const MachineComponent = dynamic(() => import("./machine"), {
    ssr: false,
  });
  const AutomationComponent = dynamic(() => import("./automation"), {
    ssr: false,
  });
  const PlasticProductComponent = dynamic(() => import("./plasticProduct"), {
    ssr: false,
  });
  const SiliconComponent = dynamic(() => import("./silicon"), {
    ssr: false,
  });
  const OtherProductComponent = dynamic(() => import("./otherProducts"), {
    ssr: false,
  });

  const BannerComponent = dynamic(() => import("./banner"), {
    ssr: false,
  });

  return (
    <div className="bg-[#F7F9F9] ">
      <div>
        <TopBannerComponent />
      </div>
      <div
        id="machine-details"
        className="xl:mt-[120px] 2xl:mt-[140px] lg:mt-[100px] md:mt-[80px] mt-10"
      >
        <MachineComponent />
      </div>
      <BannerComponent data={arrBanner} />
      <div id="automation">
        <AutomationComponent />
      </div>
      <div id="plastic-injection">
        <PlasticProductComponent />
      </div>
      <BannerComponent data={arrBanner2} />
      <div id="silicone-rubber">
        <SiliconComponent tab={tab} />
      </div>
      <div id="other-products">
        <OtherProductComponent otherTab={otherTab} />
      </div>
      <PhoneButton />
      <Footer />
    </div>
  );
}

export default Product;
