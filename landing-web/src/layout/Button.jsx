import React from "react";

const Button = (props) => {
  return (
    <div>
      <button className=" bg-brightRed px-4 py-2 rounded-md hover:bg-white hover:text-black hover:scale-105 transition-all ">
        {props.name}
      </button>
    </div>
  );
};

export default Button;
