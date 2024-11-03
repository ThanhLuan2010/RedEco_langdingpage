"use client";
import React, { use, useState } from "react";
import "./index.css";
import Image from "next/image";
function PhoneButton() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="phone-button" onClick={() => setIsOpen(true)}>
        <Image
          alt="phone"
          src={"/icon/ic_phone.png"}
          unoptimized
          width={23}
          height={23}
        />
      </div>

      <div
        id="contact-modal"
        className={`fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-10 ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div className="bg-white w-80 rounded-[20px] overflow-hidden shadow-lg p-5 relative">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          >
            {/* <Image
              alt="phone"
              src={"/icon/ic_close_white.png"}
              width={40}
              height={40}
            /> */}
            <Image
              unoptimized
              alt=""
              src={"/icon/ic_close_white.png"}
              className="w-[40px] h-[40px] object-contain"
              width={100}
              height={100}
            />
          </button>

          <div className="bg-gradient-to-r from-[#007BB0] to-[#00366A] text-white p-[12px] rounded-t-[20px] text-center">
            <h2 className="text-lg font-semibold">CONTACT US</h2>
          </div>
          <div className="px-[24px] py-[12px]">
            <h3 className="text-lg font-semibold text-gray-800">
              Redeco Vietnam Industrial Solutions JSC
            </h3>
            <div className="mt-4">
              <p className="flex items-center text-gray-700">
                <span className="mr-2">
                  {/* <Image
                    alt="phone"
                    src={"/icon/ic_ceo.png"}
                    width={24}
                    height={24}
                  /> */}

                  <Image
                    unoptimized
                    alt=""
                    src={"/icon/ic_ceo.png"}
                    className="w-[24px] h-[24px] object-contain"
                    width={100}
                    height={100}
                  />
                </span>{" "}
                <strong>CEO:</strong> Mr. Thieu Do Xuan
              </p>
              <p className="flex items-center text-gray-700 mt-2">
                <span className="mr-2">
                  {/* <Image
                    alt="phone"
                    src={"/icon/ic_phone_blue.png"}
                    width={24}
                    height={24}
                  /> */}
                   <Image
                    unoptimized
                    alt=""
                    src={"/icon/ic_phone_blue.png"}
                    className="w-[24px] h-[24px] object-contain"
                    width={100}
                    height={100}
                  />
                </span>{" "}
                <strong>Phone:</strong> (+84)913.882.867
              </p>
              <p className="flex items-center text-gray-700 mt-2">
                <span className="mr-2 opacity-0">
                <Image
                    unoptimized
                    alt=""
                    src={"/icon/ic_phone_blue.png"}
                    className="w-[24px] h-[24px] object-contain"
                    width={100}
                    height={100}
                  />
                </span>{" "}
                <strong className="opacity-0">Phone:</strong> (+84)962.018.838
              </p>
              <p className="flex items-center text-gray-700 mt-2">
                <span className="mr-2">
                  {/* <Image
                    alt="phone"
                    width={24}
                    height={24}
                    src={"/icon/ic_mail.png"}
                  /> */}
                  <Image
                    unoptimized
                    alt=""
                    src={"/icon/ic_mail.png"}
                    className="w-[24px] h-[24px] object-contain"
                    width={100}
                    height={100}
                  />
                </span>{" "}
                <strong>Email:</strong> thieudx@redeco.vn
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PhoneButton;
