import React from "react";
import img from "../assets/img/about.png";

const About = () => {
  return (
    <div className=" min-h-screen flex flex-col md:flex-row items-center md:mx-32 mx-5">
      <div>
        <h1 className="text-5xl font-semibold text-center md:text-start mt-14 md:mt-0">
          About Us
        </h1>

        <div className=" w-full md:w-3/4 space-y-5 mt-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nisi
            velit debitis iusto voluptatum consectetur optio minima, ipsum
            maxime, blanditiis illo corporis quod nam voluptas magnam dolorum
            amet accusamus error!
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            accusamus laboriosam rerum aliquid et odit itaque at, doloremque quo
            consequuntur?
          </p>
        </div>
      </div>
      <div>
        <img src={img} alt="img" />
      </div>
    </div>
  );
};

export default About;
