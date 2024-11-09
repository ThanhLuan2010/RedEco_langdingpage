import { useState, useEffect } from "react";


export default function Banner({ data }: { data: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true); // Bắt đầu hiệu ứng chuyển đổi

      // Sau 1 giây (thời gian của hiệu ứng fade), chuyển sang ảnh tiếp theo
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data?.length);
        setIsTransitioning(false); // Kết thúc hiệu ứng chuyển đổi
      }, 1000);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[100%] h-[100%] ">
      {data?.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Banner ${index + 1}`}
          className={`absolute inset-0 w-[100%] h-[100%] object-fill transition-opacity duration-1000 ${
            index === currentIndex
              ? isTransitioning
                ? "opacity-0"
                : "opacity-1"
              : isTransitioning && index === (currentIndex + 1) % data?.length
              ? "opacity-1"
              : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}