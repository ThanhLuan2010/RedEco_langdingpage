import data from "../../data";
import { useLocation, useParams } from "react-router-dom";
import "./style.css";
import { useEffect } from "react";

export default function Lession() {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const { unit } = location.state || {}; // Nếu không có state thì trả về {} (hoặc giá trị mặc định)
  const curentUnit = data.find((u) => u.name == unit);
  const curentLession = curentUnit?.lession.find(
    (les) => les?.name?.replace(" ", "") == id
  );


  useEffect(() => {
    // Tìm tất cả các nút với class "play-button"
    const buttons = document.querySelectorAll(".play-button");
    const audioInstances:any = {};

    buttons.forEach((button) => {
      // Lấy URL của file âm thanh từ data-src
      const audioSrc = button.getAttribute("data-src");

      // Khởi tạo đối tượng âm thanh
      if (audioSrc) {
        audioInstances[audioSrc] = new Audio(audioSrc);

        // Gắn sự kiện click chỉ phát âm thanh của nút được nhấn
        button.addEventListener("click", (e) => {
          e.preventDefault();

          // Tạm dừng tất cả các audio trước khi phát audio hiện tại
          Object.values(audioInstances).forEach((audio:any) => {
            if (!audio.paused) audio.pause();
            audio.currentTime = 0;
          });

          // Phát âm thanh của nút hiện tại
          audioInstances[audioSrc].play();
        });
      }
    });

    // Cleanup khi component bị unmounted
    return () => {
      buttons.forEach((button) => {
        button.removeEventListener("click", () => {});
      });
      Object.values(audioInstances).forEach((audio:any) => {
        audio.pause();
        audio.src = ""; // Xóa nguồn âm thanh
      });
    };
  }, [curentLession]);
  return (
    <div className="bg-[#fafafa] w-screen">
      <p className="px-[20px] md:px[5%] xl:px-[10%] text-[24px] py-[30px]">
        {`${curentLession?.description}`}
      </p>
      <div className="bg-white border-t-[1px] pt-[30px] px-[20px] md:px[5%] xl:px-[10%]">
        <div
          className="object-fill mt-[10px] custom-link"
          dangerouslySetInnerHTML={{ __html: curentLession?.lessionContent ?curentLession?.lessionContent:"" }}
          style={{
            wordWrap: "break-word",
            overflowWrap: "break-word",
          }}
        />
      </div>
    </div>
  );
}
