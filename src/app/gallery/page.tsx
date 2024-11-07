"use client";
import Footer from "@/components/Footer";
import PhoneButton from "@/components/phoneButton";
import dynamic from "next/dist/shared/lib/dynamic";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
function Gallery() {
  const router = useRouter();
  useEffect(() => {
    // Lấy hash từ URL (VD: #targetComponent)
    const hash = window.location.hash;
    if (hash) {
      // Cuộn đến thành phần có ID tương ứng với hash
      const targetElement = document.querySelector(hash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [router]);

  const BannerComponent = dynamic(() => import("./banner"), {
    ssr: false,
  });
  const GalleryTabsComponent = dynamic(() => import("./ourGallary"), {
    ssr: false,
  });
  

  return (
    <div className="bg-[#F7F9F9]">
      <BannerComponent />
      <div id="customer">
        <GalleryTabsComponent />
      </div>
      <PhoneButton />
      <Footer></Footer>
    </div>
  );
}

export default Gallery;
