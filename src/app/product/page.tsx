import FadeImage from "../../components/FadeImage";
import Footer from "../../components/Footer";
import PhoneButton from "../../components/phoneButton";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Suspense, useEffect, useState } from "react";
import TopBanner from "./TopBaner";
import Machine from "./machine";
import Automation from "./automation";
import Banner from "./banner";
import Silicon from "./silicon";
import PlasticProduct from "./plasticProduct";
import OtherProduct from "./otherProducts";

function Product() {
  const arrBanner = [
    require("../../assets/image/product_carousel1.png"),
    require("../../assets/image/product_carousel2.png"),
    require("../../assets/image/product_carousel3.png"),
  ];

  const arrBanner2 = [
    require("../../assets/image/banner-plastic1.png"),
    require("../../assets/image/banner-plastic2.png"),
    require("../../assets/image/banner-plastic3.png"),
  ];
  const navigate = useNavigate();

  const [tab, setTab] = useState<string>("");
  const [otherTab, setOtherTab] = useState<string>("");
  const [searchParams] = useSearchParams(); // Lấy searchParams từ URL
  const id = searchParams.get("id"); // Lấy giá trị của "id" từ queryấy id từ query

  useEffect(() => {
    // Lấy hash từ URL (VD: #targetComponent)
    const hash = window.location.hash;

    if (hash) {
      const tabName =
        id == "1"
          ? "VACUUM SUCTION CUP"
          : id == "2"
          ? "SILICONE RUBBER DETAIL"
          : id == "3"
          ? "SILICONE RUBBER GASKET"
          : id == "4"
          ? "INDUSTRIAL KEYBOARD"
          : null;
      const tabOther =
        id == "5"
          ? "MANIPULATOR TABLE"
          : id == "6"
          ? "ALUMINUM CASTING"
          : id == "7"
          ? "JIG PRODUCTS"
          : id == "8"
          ? "INDUSTRIAL TROLLEY"
          : null;
      if (tabName) {
        setTab(tabName);
      }
      if (tabOther) {
        setOtherTab(tabOther);
      }
      // Cuộn đến thành phần có ID tương ứng với hash
      const targetElement = document.querySelector(hash?.split(".")[0]);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [navigate, id]);

  return (
    <div className="bg-[#F7F9F9] ">
      <div>
        <TopBanner />
      </div>
      <div
        id="machine-details"
        className="xl:mt-[120px] 2xl:mt-[140px] lg:mt-[100px] md:mt-[80px] mt-[30px] scroll-m-[18vh]"
      >
        <Machine />
      </div>
      <div className="md:hidden">
        <div className="mt-[40px] flex flex-col px-[20px] md:px-[5%] xl:px-[10%] h-[33vh] gap-[20px] md:gap-[30px] xl:gap-[40px]">
          <div className="w-[100%] h-[50%]">
            <FadeImage
              data={[
                "/image/product/banner3.png",
                "/image/product/banner3.1.png",
              ]}
            />
          </div>
          <div className="w-[100%] h-[50%] gap-[20px] md:gap-[30px] xl:gap-[40px] flex">
            <div className="w-[50%] h-[100%]">
              <FadeImage
                data={[
                  "/image/product/banner1.png",
                  "/image/product/banner1.1.png",
                ]}
              />
            </div>
            <div className="w-[50%] h-[100%]">
              <FadeImage
                data={[
                  "/image/product/banner2.png",
                  "/image/product/banner2.1.png",
                ]}
              />
            </div>
          </div>
        </div>
      </div>

      <Banner data={arrBanner} />
      <div id="automation" className="scroll-m-[18vh]">
        <Automation />
      </div>
      <div id="plastic-injection" className="scroll-m-[18vh]">
        <PlasticProduct />
        <div className="md:hidden">
          <div className="mt-[40px] flex px-[20px] md:px-[5%] xl:px-[10%] h-[33vh] gap-[20px] md:gap-[30px] xl:gap-[40px]">
            <div className="w-[50%] h-[100%]">
              <FadeImage
                data={[
                  "/image/product/banner4.png",
                  "/image/product/banner4.1.png",
                ]}
              />
            </div>
            <div className="w-[50%] h-[100%] gap-[20px] md:gap-[30px] xl:gap-[40px] flex flex-col">
              <div className="w-[100%] h-[50%]">
                <FadeImage
                  data={[
                    "/image/product/banner5.png",
                    "/image/product/banner5.1.png",
                  ]}
                />
              </div>
              <div className="w-[100%] h-[50%]">
                <FadeImage
                  data={[
                    "/image/product/banner6.png",
                    "/image/product/banner6.1.png",
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Banner data={arrBanner2} />
      <div id="silicone-rubber" className="scroll-m-[18vh]">
        <Silicon tab={tab} />
      </div>
      <div id="other-products" className="scroll-m-[18vh]">
        <OtherProduct otherTab={otherTab} />
      </div>
      <PhoneButton />
      <Footer />
    </div>
  );
}

const ProductPage = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Product />
  </Suspense>
);

export default ProductPage;