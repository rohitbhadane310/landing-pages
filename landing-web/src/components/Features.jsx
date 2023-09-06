import React from "react";
import Button from "../layout/Button";
import img from "../assets/featureImg.svg";
import icon1 from "../assets/consultationIcon1.svg";
import icon2 from "../assets/consultationIcon2.svg";
import icon3 from "../assets/consultationIcon3.svg";

const Features = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center md:px-32 px-5 p-4 m-2">
      <div className="flex flex-col md:flex-row items-center space-y-5">
        <div className=" mt-5">
          <img className=" rounded-md" src={img} alt="" />
        </div>
        <div>
          <div>
            <h1 className=" text-4xl font-playFair font-medium text-center">
              Build your needs with Archmove
            </h1>
          </div>

          <div className="flex flex-row gap-5 p-5 md:pl-24 ">
            <img src={icon1} alt="icon" />
            <div>
              <h3 className=" font-semibold pb-3">
                100% guaranteed project completion
              </h3>
              <p className=" w-4/5 text-slate-300">
                Build safe, comfortable and transparent with a project
                management application with a joint account.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-5 p-5 md:pl-24 ">
            <img src={icon2} alt="icon" />
            <div>
              <h3 className=" font-semibold pb-3">No additional fees</h3>
              <p className=" w-4/5 text-slate-300">
                There are no hidden costs. The value of the offer you get is the
                value you paid.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-5 p-5 md:pl-24 ">
            <img src={icon3} alt="icon" />
            <div>
              <h3 className=" font-semibold pb-3">Get escort from the Team</h3>
              <p className=" w-4/5 text-slate-300">
                Monitor reports from the Arsitag team who check directly in the
                field.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-10 flex flex-row justify-center">
        <Button name="Free Consultation" />
      </div>
    </div>
  );
};

export default Features;
