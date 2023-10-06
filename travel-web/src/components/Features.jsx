import React from "react";
import img from "../assets/img/feature.jpg";

const Features = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center md:mx-32 mx-5 gap-10">
      <div className=" w-2/4">
        <h1 className=" text-4xl font-medium">
          Get Ready to Explore, Get Ready to Experience!
        </h1>
        <p>
          Discover the Best Holiday Experiences with TripPixie! We're dedicated
          to curating the latest and greatest destinations from around the
          world, ensuring you always get the ultimate travel experience.
        </p>
      </div>

      <div className=" w-1/4">
        <img src={img} alt="img" />
      </div>
    </div>
  );
};

export default Features;
