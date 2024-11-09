import { FormCustom } from "../../../components";

const GetInTouch = ({ setUserNameSubmit, setIsStatusSubmit }: any) => {
  return (
    <div className="w-[100%] 2xl:mt-20 lg:mt-15 md:mt-[40px] flex flex-col items-center h-auto">
      <div className="flex flex-col items-center px-[20px] md:px-[5%] xl:px-[10%]">
        <text className="text-[24px] md:text-[1.5rem] lg:text-[2rem] xl:text-[2.5rem] font-bold text-[#00366A] relative">
          GET IN TOUCH
          <span className="absolute bottom-[-2px] left-[50%] translate-x-[-50%] w-[30%] h-[2px] xl:h-[4px] 2xl:h-[5px] bg-[#00A859]" />
        </text>
        <text
          className="xl:mt-10 md:mt-10 lg:mt-10 sm:mt-6 mt-6 w-[95%] text-[#000] text-center text-[14px]
          2xl:text-[20px] leading-[20px] md:leading-[25px] 2xl:leading-[30px] "
        >
          We would love to hear from you! If you have any questions or comments
          that you'd like to share with us, please fill out the contact form
          below, or feel free to give us a call at the phone number listed for
        </text>
      </div>
      <div className="flex w-[100%] justify-stretch items-center pr-[20px] md:pr-[5%] xl:pr-[10%]">
        <div className="w-[45%] xl:flex lg:flex md:flex sm:hidden hidden -mt-24">
          <img
            style={{ width: "100%", height: "70%", objectFit: "contain" }}
            alt="banner"
            src={require("../../../assets/image/aboutUs/banner_get_in_touch.png")}
            width={100}
            height={100}
            
          />
        </div>
        <div className="md:w-[55%] w-[100%]">
          <FormCustom
            setUserNameSubmit={setUserNameSubmit}
            setIsStatusSubmit={setIsStatusSubmit}
          ></FormCustom>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
