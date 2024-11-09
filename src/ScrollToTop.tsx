import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Nếu URL có hash (ID), cuộn đến phần tử với ID đó
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 50);
      }
    } else {
      // Ngược lại, cuộn lên đầu trang
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, hash]); // Gọi lại useEffect mỗi khi pathname hoặc hash thay đổi

  return null;
};

export default ScrollToTop;
