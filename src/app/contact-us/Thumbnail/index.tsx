import Image from "next/image";
import React from "react";

const Thumbnail = () => {
  return (
    <div className="relative">
      <Image
        style={{ width: "100%", height: "100%" }}
        alt="banner"
        src={require("../../../public/image/aboutUs/banner_contact.png")}
      />
    </div>
  );
};

export default Thumbnail;
