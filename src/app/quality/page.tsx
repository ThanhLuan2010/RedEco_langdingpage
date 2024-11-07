"use client";
import PhoneButton from "@/components/phoneButton";
import dynamic from "next/dist/shared/lib/dynamic";
import Footer from "../../components/Footer";

export default function Home() {
  const BannerComponent = dynamic(() => import("./Banner"), {
    ssr: false,
  });
  const QualityContentComponent = dynamic(() => import("./QualityContent"), {
    ssr: false,
  });
  const CapacityComponent = dynamic(() => import("./Capacity"), {
    ssr: false,
  });
  const QualityStandardComponent = dynamic(() => import("./QualityStandard"), {
    ssr: false,
  });
  const ProductionLineComponent = dynamic(() => import("./ProductionLine"), {
    ssr: false,
  });
  return (
    <div className="bg-[#F7F9F9]">
      <BannerComponent />
      <QualityContentComponent />
      <CapacityComponent />
      <QualityStandardComponent />
      <ProductionLineComponent />
      <PhoneButton />
      <Footer />
    </div>
  );
}
