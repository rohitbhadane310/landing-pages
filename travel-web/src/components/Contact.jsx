import React from "react";
import img from "../assets/img/contact.jpg";

const Contact = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center md:mx-32 mx-5 mt-10">
      <div className=" flex flex-col md:flex-row justify-between w-full">
        <form className=" w-full md:w-2/5 space-y-5 pt-20">
          <h1 className="text-4xl font-semibold text-center">Contact Form</h1>
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

          <div className=" flex flex-row justify-center"></div>
        </form>
        <div className=" flex flex-row items-center w-full md:w-2/4 my-5">
          <img className=" rounded-lg" src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
