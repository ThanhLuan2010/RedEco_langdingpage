import React, { useState } from "react";
import "./index.css";
function PhoneButton() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="phone-button" onClick={() => setIsOpen(true)}>
        <img alt="phone" src={require("../../assets/icon/ic_phone.png")} width={23} height={23} />
      </div>

      <div
        id="contact-modal"
        className={` fixed inset-0 bg-black bg-opacity-60 flex md:hidden items-center justify-center z-10 ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div className="bg-white w-80 rounded-[16px] overflow-hidden shadow-lg p-5 relative">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          >
            <img
              alt=""
              src={require("../../assets/icon/ic_close_white.png")}
              className="w-[40px] h-[40px] object-contain"
              width={100}
              height={100}
            />
          </button>

          <div
            className="bg-gradient-to-r from-[#007BB0] to-[#00366A] text-white p-[12px] rounded-t-[16px] 
          text-center border-[2px] border-[#00366A]"
          >
            <h2 className="text-lg font-semibold">CONTACT US</h2>
          </div>
          <div className="px-[24px] py-[25px]">
            <h3 className="text-lg font-semibold text-gray-800">
              Redeco Vietnam Industrial Solutions JSC
            </h3>
            <div className="mt-4">
              <p className="flex items-center text-gray-700">
                <span className="mr-2">
                  <img
                    alt=""
                    src={require("../../assets/icon/ic_ceo.png")}
                    className="w-[24px] h-[24px] object-contain"
                    width={100}
                    height={100}
                  />
                </span>
                <strong className="mr-2">CEO:</strong> Mr. Thieu Do Xuan
              </p>
              <p className="flex items-center text-gray-700 mt-2">
                <span className="mr-2">
                  <img
                    alt=""
                    src={require("../../assets/icon/ic_phone_blue.png")}
                    className="w-[24px] h-[24px] object-contain"
                    width={100}
                    height={100}
                  />
                </span>
                <strong className="mr-2">Phone:</strong> (+84)913.882.867
              </p>
              <p className="flex items-center text-gray-700 mt-2">
                <span className="mr-2 opacity-0">
                  <img
                    alt=""
                    src={require("../../assets/icon/ic_phone_blue.png")}
                    className="w-[24px] h-[24px] object-contain"
                    width={100}
                    height={100}
                  />
                </span>
                <strong className="opacity-0 mr-2">Phone:</strong>{" "}
                (+84)962.018.838
              </p>
              <p className="flex items-center text-gray-700 mt-2">
                <span className="mr-2">
                  <img
                    alt=""
                    src={require("../../assets/icon/ic_mail.png")}
                    className="w-[24px] h-[24px] object-contain"
                    width={100}
                    height={100}
                  />
                </span>
                <strong className="mr-2">Email:</strong> thieudx@redeco.vn
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        id="contact-modal"
        className={`fixed inset-0 hidden md:flex items-center justify-center z-[1001] transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div
          className={` w-80 rounded-[16px] overflow-hidden shadow-lg  absolute  right-10 bottom-10 transition-transform transform duration-500 ${
            isOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
          }`}
          onClick={(e) => e.stopPropagation()} // Ngăn chặn sự kiện click trên modal nền
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          >
            <img
              alt=""
              src={require("../../assets/icon/ic_close_white.png")}
              className="w-[40px] h-[40px] object-contain"
              width={100}
              height={100}
            />
          </button>

          <div className="bg-gradient-to-r from-[#007BB0] to-[#00366A] text-white p-[12px] rounded-t-[16px] text-center border-[2px] border-[#00366A]">
            <h2 className="text-lg font-semibold">CONTACT US</h2>
          </div>
          <div className="px-[24px] py-[25px] bg-white ml-[2px]">
            <h3 className="text-lg font-semibold text-gray-800">
              Redeco Vietnam Industrial Solutions JSC
            </h3>
            <div className="mt-4">
              <p className="flex items-center text-gray-700">
                <span className="mr-2">
                  <img
                    alt=""
                    src={require("../../assets/icon/ic_ceo.png")}
                    className="w-[24px] h-[24px] object-contain"
                    width={100}
                    height={100}
                  />
                </span>
                <strong className="mr-2">CEO:</strong> Mr. Thieu Do Xuan
              </p>
              <p className="flex items-center text-gray-700 mt-2">
                <span className="mr-2">
                  <img
                    alt=""
                    src={require("../../assets/icon/ic_phone_blue.png")}
                    className="w-[24px] h-[24px] object-contain"
                    width={100}
                    height={100}
                  />
                </span>
                <strong className="mr-2">Phone:</strong> (+84) 913 882 867
              </p>
              <p className="flex items-center text-gray-700 mt-2">
                <span className="mr-2 opacity-0">
                  <img
                    alt=""
                    src={require("../../assets/icon/ic_phone_blue.png")}
                    className="w-[24px] h-[24px] object-contain"
                    width={100}
                    height={100}
                  />
                </span>
                <strong className="opacity-0 mr-2">Phone:</strong> (+84) 962 018
                838
              </p>
              <p className="flex items-center text-gray-700 mt-2">
                <span className="mr-2">
                  <img
                    alt=""
                    src={require("../../assets/icon/ic_mail.png")}
                    className="w-[24px] h-[24px] object-contain"
                    width={100}
                    height={100}
                  />
                </span>
                <strong className="mr-2">Email:</strong> thieudx@redeco.vn
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PhoneButton;
