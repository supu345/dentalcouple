import React from "react";
import Dental4 from "../assets/dental4.png";
const WhyChoose = () => {
  return (
    <div className="px-7 py-7 bg-[#15B392] text-white">
      <div className="flex flex-row gap-6">
        <div className="w-1/3">1</div>
        <div className="w-1/3">
          <img src={Dental4} alt="dental" />
        </div>
        <div className="w-1/3">1</div>
      </div>
    </div>
  );
};

export default WhyChoose;
