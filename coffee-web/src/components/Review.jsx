import React from "react";
import ReviewCard from "../layouts/ReviewCard";
import img1 from "../assets/img/pic1.png";
import img2 from "../assets/img/pic2.png";
import img3 from "../assets/img/pic3.png";

const Review = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor ">
      <h1 className=" font-semibold text-center text-4xl lg:mt-14 mt-24 ">
        Customer's Reviews
      </h1>

      <div className=" flex flex-col lg:flex-row gap-5 justify-center py-4 my-8">
        <ReviewCard img={img1} title="Olivia Ava" />
        <ReviewCard img={img2} title="John Deo" />
        <ReviewCard img={img3} title="Sofia Zoe" />
      </div>
    </div>
  );
};

export default Review;
