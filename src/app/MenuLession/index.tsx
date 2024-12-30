import data from "../../data";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export default function MenuLession() {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const { unit } = location.state || {}; // Nếu không có state thì trả về {} (hoặc giá trị mặc định)

  const curentUnit: any = data.find((u) => u.name == unit);
  const curentLession: any = curentUnit?.lession.find(
    (les: any) => les?.name?.replace(" ", "") == id
  );
  const navigate = useNavigate();
  return (
    <div className="bg-[#fafafa] mx-[20px] md:mx[5%] xl:mx-[10%] ">
      <div className="border-t-[2px] mt-[30px] border-black">
        {curentLession?.menu?.map((lesson: any, index: number) => {
          return (
            <div
              key={index}
              className={`border-b-[2px] border-x-[2px] border-black px-main py-main`}
            >
              <div className="items-center flex justify-center">
                <img
                  src={lesson?.image}
                  className="w-[313px] h-[127px] cursor-pointer"
                  onClick={() => {
                    navigate(
                      `/lession/${curentLession?.name?.replace(" ", "")}`,
                      {
                        state: {
                          unit: curentUnit.name,
                          isMenu: true,
                          menu: lesson,
                        },
                      }
                    );
                  }}
                />
              </div>
              <div
                className="object-fill mt-[10px] custom-link"
                dangerouslySetInnerHTML={{ __html: lesson?.html }}
                style={{
                  wordWrap: "break-word",
                  overflowWrap: "break-word",
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
