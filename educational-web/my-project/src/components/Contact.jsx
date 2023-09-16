import React from "react";
import img from "../assets/contact.svg";
import Heading from "../layout/Heading";
import Button from "../layout/Button";

const Contact = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center md:mx-32 mx-5 mt-10">
      <Heading title1="Contact" title2="Us" />

      <div className=" flex flex-col md:flex-row justify-between w-full">
        <form className=" w-full md:w-2/5 space-y-5 pt-20">
          <div className=" flex flex-col">
            <label htmlFor="userName">Your Name</label>
            <input
              className=" py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
              type="text"
              name="userName"
              id="userName"
              placeholder="enter your name"
            />
          </div>
          <div className=" flex flex-col">
            <label htmlFor="userEmail">Your Email</label>
            <input
              className=" py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
              type="email"
              name="userEmail"
              id="userEmail"
              placeholder="enter your email"
            />
          </div>
          <div className=" flex flex-col">
            <label htmlFor="userNumber">Your Number</label>
            <input
              className=" py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
              type="text"
              name="userNumber"
              id="userNumber"
              placeholder="enter your number"
            />
          </div>

          <div className=" flex flex-row justify-center">
            <Button title="Send Message" />
          </div>
        </form>

        <div className=" w-full md:w-2/4">
          <img src={img} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
