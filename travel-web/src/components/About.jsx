import React from "react";
import img from "../assets/img/about.jpg";
import Button from "../layouts/Button";

const About = () => {
  const backgroundColor = `bg-white`;
  return (
    <div className=" min-h-screen flex flex-row items-center md:px-32 px-5 bg-darkBackground">
      <div className=" w-2/4 space-y-5">
        <h1 className=" font-semibold text-4xl text-white leading-tight">
          At TripPixie, we are ready to provide you with the best trip of your
          life!
        </h1>
        <p className=" text-[#bdbdbd]">
          Your dream vacation awaits, and we're here to make it a reality.
        </p>
        
        <Button title="Contact Now" backgroundColor={backgroundColor} />
      </div>
      <div className="w-2/4">
        <img className=" rounded-2xl" src={img} alt="img" />
      </div>
    </div>
  );
};

export default About;
