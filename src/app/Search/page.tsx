"use client";
import { Search } from "@mui/icons-material";
import { Button } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function SearchPage() {
  const router = useRouter();
  const [search, setSearch] = useState<string>("");
  const onSearch = () => {
    console.log(search);
    if (search) { 
      const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(
        `site:redeco.vn/ ${search}`
      )}`;
      window.open(searchUrl, "_blank");
    }
  };
  return (
    <div>
      <div className="bg-[#FFFFFFE5] opacity-[0.9] hidden md:flex flex-col">
        <div className="relative">
          <button
            onClick={() => router.back()}
            className="absolute top-[40px] right-[40px]"
          >
            <Image
              unoptimized
              alt=""
              src={"/icon/ic_close.png"}
              className="w-[40px] h-[40px] object-contain"
              width={100}
              height={100}
            />
          </button>
        </div>

        <div className="flex justify-center items-center">
          <div className="pt-[130px] w-1/5 flex items-center justify-center">
            <Image
              unoptimized
              alt=""
              className="w-[100%] h-[100%]"
              src={"/image/logo.png"}
              width={100}
              height={100}
            />
          </div>
        </div>

        <div className="flex justify-center mt-[20p] md:mt-[40px] lg:mt-[60px] 2xl:mt-[72px]">
          <div
            className="
          relative
          rounded-[14px] 
          border-transparent
          bg-gradient-to-r from-[#007BB0] to-[#00366A]
          w-[45%]
          p-[2px]
          "
          >
            <div
              className="
            bg-white 
            flex
            py-[10px] md:py-[12px] lg:py-[14px] xl:py-[14px] 2xl:py-[18px]
            rounded-[12px]
            px-[20px]
            "
            >
              <div className="w-[100%] pr-[80px]">
                <input
                  className="w-[100%] outline-none"
                  placeholder="Search ..."
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <div className="absolute top-0 right-0 w-[72px] h-[100%] rounded-xl flex justify-center items-center bg-gradient-to-r from-[#007BB0] to-[#00366A]">
                <Button onClick={onSearch}>
                  <Search
                    style={{
                      color: "white",
                    }}
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#FFFFFFE5] opacity-[0.9] flex md:hidden justify-center items-center px-[20px] gap-[20px] mt-[50px]">
        <div className="flex justify-center w-[100%]">
          <div
            className="
            relative
            rounded-[14px] 
            border-transparent
            bg-gradient-to-r from-[#007BB0] to-[#00366A]
            w-[100%]
            p-[2px]
            "
          >
            <div
              className="
            bg-white 
            flex
            py-[10px] md:py-[12px] lg:py-[14px] xl:py-[14px] 2xl:py-[18px]
            rounded-[12px]
            px-[20px]
            "
            >
              <div className="w-[100%] pr-[80px]">
                <input
                  className="w-[100%] outline-none"
                  placeholder="Search ..."
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <div className="absolute top-0 right-0 w-[72px] h-[100%] rounded-xl flex justify-center items-center bg-gradient-to-r from-[#007BB0] to-[#00366A]">
                <Button onClick={() => router.push("Search")}>
                  <Search
                    style={{
                      color: "white",
                    }}
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <button onClick={() => router.back()} className="">
            <Image
              unoptimized
              alt=""
              src={"/icon/ic_close.png"}
              className="w-[40px] h-[40px] object-contain"
              width={100}
              height={100}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
