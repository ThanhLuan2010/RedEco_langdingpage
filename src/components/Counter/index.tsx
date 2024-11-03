"use client";
import { useEffect, useState } from "react";

export default function Counter({ targetNumber, title }: any) {
  const [count, setCount] = useState(0);

  // Định dạng số để có ít nhất 2 ký tự
  const formattedNumber = count.toString().padStart(2, "0");

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < targetNumber) {
          return prevCount + 1; // Thay đổi tốc độ tăng bằng cách điều chỉnh giá trị +1
        } else {
          clearInterval(interval);
          return prevCount;
        }
      });
    }, 20); // Điều chỉnh thời gian chờ để kiểm soát tốc độ (ms)

    return () => clearInterval(interval); // Clear interval khi component unmount
  }, [targetNumber]);

  return (
    <div className="w-[100%] flex flex-col text-white font-medium text-center">
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-start">
          <text className="text-[50px] md:text-[65px] lg:text-[80px] xl:text-[90px] 2xl:text-[100px] xl:leading-[120%]">
            {formattedNumber}
          </text>
          <span className="text-[50px] md:text-[60px] translate-y-[-30px] ml-1">+</span>
        </div>
        <text className="text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] font-semibold ">
          {title}
        </text>
      </div>
    </div>
  );
}
