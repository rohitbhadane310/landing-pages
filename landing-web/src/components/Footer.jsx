import React from "react";
import logo from "../assets/logo-arch.svg";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between md:px-32 px-5 p-4 m-2">
      <div className="flex flex-row items-center gap-12  text-lightText p-2">
        <nav className="flex flex-col md:flex-row gap-10">
          <a className=" hover:text-brightRed transition-all" href="/works">
            About Us
          </a>
          <a className=" hover:text-brightRed transition-all" href="/gallery">
            How it Works
          </a>
          <a
            className=" hover:text-brightRed transition-all"
            href="/Architects"
          >
            FAQ
          </a>
          <a className=" hover:text-brightRed transition-all" href="/Articles">
            Contact Us
          </a>
          <a className=" hover:text-brightRed transition-all" href="/Articles">
            Privacy Policy
          </a>
        </nav>
      </div>

      <div className="flex flex-row items-center p-2 gap-4">
        <div>
          <img src={logo} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
