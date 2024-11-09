import Footer from "../../components/Footer";
import PhoneButton from "../../components/phoneButton";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Banner from "./banner";
import GalleryTabs from "./ourGallary";
function Gallery() {
  const navigate = useNavigate();
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
  }, [navigate]);

 

  return (
    <div className="bg-[#F7F9F9]">
      <Banner />
      <div id="customer">
        <GalleryTabs />
      </div>
      <PhoneButton />
      <Footer></Footer>
    </div>
  );
}

export default Gallery;
