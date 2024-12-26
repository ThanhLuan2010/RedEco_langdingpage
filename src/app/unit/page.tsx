import data from "../../data";
import { useNavigate, useParams } from "react-router-dom";
import "./style.css"

export default function Unit() {
  const { id } = useParams<{ id: string }>();
  const curentUnit = data.find((unit) => unit.name.replace(" ", "") == id);
 const navigate = useNavigate();
  return (
    <div className="bg-[#fafafa] mx-[20px] md:mx[5%] xl:mx-[10%] ">
      <p className="text-[24px] py-[30px]">
        {`${curentUnit?.name}: ${curentUnit?.description}`}
      </p>
      <div className="bg-white border-t-[1px] pt-[30px]">
        <div className="flex">
          <img src={curentUnit?.image} className="h-[90%] mr-[20px]" />
          <p className="leading-7">{curentUnit?.headContent}</p>
        </div>

        <div className="border-t-[2px] mt-[30px] border-black">
          {curentUnit?.lession?.map((lesson, index) => {
            return (
              <div
                key={index}
                className={`border-b-[2px] border-x-[2px] border-black px-main py-main`}
              >
                <div className="items-center flex justify-center">
                  <img src={lesson?.image} className="w-[313px] h-[127px] cursor-pointer" onClick={()=>{
                    navigate(`/lession/${lesson?.name?.replace(" ","")}`,{state:{unit:curentUnit.name}})
                  }} />
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
    </div>
  );
}
