import React from "react";
import logo1 from "../assets/Partners-Img1.svg";
import logo2 from "../assets/Partners-Img2.svg";
import logo3 from "../assets/Partners-Img3.svg";
import logo4 from "../assets/Partners-Img4.svg";
import logo5 from "../assets/Partners-Img5.svg";

const Partners = () => {
  return (
    <div>
      <h1>Our Partners</h1>
      <div className="flex flex-row gap-5">
        <div>
          <img src={logo1} alt="" />
        </div>
        <div>
          <img src={logo2} alt="" />
        </div>
        <div>
          <img src={logo3} alt="" />
        </div>
        <div>
          <img src={logo4} alt="" />
        </div>
        <div>
          <img src={logo5} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Partners;
