import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      window.scroll(0, 0);
      // Nếu URL có hash (ID), cuộn đến phần tử với ID đó
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      // Ngược lại, cuộn lên đầu trang
      window.scroll(0, 0);
    }
  }, [pathname, hash]); // Gọi lại useEffect mỗi khi pathname hoặc hash thay đổi

  return null;
};

export default ScrollToTop;
