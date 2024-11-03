"use client";
import Header from "@/components/Header";
import Image from "next/image";
import React, { useEffect } from "react";
import Banner from "./banner";
import GalleryTabs from "./ourGallary";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";
import PhoneButton from "@/components/phoneButton";

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

  return (
    <div className="bg-[#F7F9F9] pt-[10vh]">
      <Header></Header>
      <Banner></Banner>
      <div id="customer">
        <GalleryTabs></GalleryTabs>
      </div>
      <PhoneButton />
      <Footer></Footer>
    </div>
  );
}

export default Gallery;
