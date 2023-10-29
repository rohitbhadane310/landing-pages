import React from "react";
import img from "../assets/img/about.jpg";
import Button from "../layouts/Button";

const About = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center lg:px-32 px-5 bg-backgroundColor">
      <h1 className=" font-semibold text-center text-4xl lg:mt-14 mt-24 mb-8">About Us</h1>

      <div className=" flex flex-col lg:flex-row items-center gap-5">
        <div className=" w-full lg:w-2/4">
          <img className=" rounded-lg" src={img} alt="img" />
        </div>
        <div className=" w-full lg:w-2/4 p-4 space-y-3">
          <h2 className=" font-semibold text-3xl">
            What Makes Our Coffee Special?
          </h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
            quaerat quia quasi beatae et iste, tempora voluptatum corporis sit
            pariatur eaque exercitationem, doloribus eum optio nobis cum?
            Quidem, dolor atque.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ut
            minima perspiciatis doloribus quod repellendus molestiae rerum!
            Enim, vero natus.
          </p>

          <Button title="Learn More" />
        </div>
      </div>
    </div>
  );
};

export default About;
