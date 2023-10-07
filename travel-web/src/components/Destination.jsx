import React from "react";
import img1 from "../assets/img/dest1.jpg";
import Button from "../layouts/Button";

const Destination = () => {
  return (
    <div>
      <h1>Most Popular Destinations</h1>

      <div>
        <div>
          <div className=" w-1/4">
            <img src={img1} alt="img" />
          </div>
          <div>
            <h2>Cappadocia</h2>
            <p>
              The red and orange sand of the desert are very beautiful, let's
              take a trip here
            </p>

            <div>
              <div>
                <h1>Price</h1>
              </div>
              <Button />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
