
import React from "react";

const Thumbnail = () => {
  return (
    <div className="relative">
      <img
        style={{ width: "100%", height: "100%" }}
        alt="banner"
        src={require("../../../assets/image/aboutUs/banner_contact.png")}
        width={100}
        height={100}
        
      />
    </div>
  );
};

export default Thumbnail;
