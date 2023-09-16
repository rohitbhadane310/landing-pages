import React from "react";

const ReviewCard = (props) => {
  return (
    <div className=" w-full md:w-1/3 bg-white p-5 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all">
      <div>
        <p className=" text-lightText">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In
          consectetur error, dolores quae ipsa quos enim corporis magni
          obcaecati tempore natus eos, libero ducimus nulla neque eaque maxime
          nam molestias?
        </p>
      </div>

      <div className=" flex flex-row justify-center">
        <img className=" rounded-full w-1/4" src={props.img} alt="img" />
      </div>
    </div>
  );
};

export default ReviewCard;
