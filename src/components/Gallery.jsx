import React from "react";
import img1 from "../assets/img1.svg";
import img2 from "../assets/img2.svg";
import img3 from "../assets/img3.svg";

const Gallery = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center md:px-32 px-5 p-4 m-2">
      <div className=" py-5 md:w-2/6">
        <p className=" text-4xl font-playFair font-medium">
          Build professional valuable room
        </p>
      </div>
      <div className="flex flex-col items-center md:flex-row md:justify-between gap-5">
        <div>
          <img className=" rounded-md" src={img1} alt="" />
        </div>
        <div>
          <img className=" rounded-md" src={img2} alt="" />
        </div>
        <div>
          <img className=" rounded-md" src={img3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
