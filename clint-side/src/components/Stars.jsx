import React from "react";
import { assets } from "../assets/assets";

const Stars = ({ rating }) => {
  return (
    <>
      {Array(5)
        .fill("")
        .map((_, index) => (
          <img
            key={index}
            className="size-4.5"
            src={
              index < rating ? assets.starIconFilled : assets.starIconOutlined
            }
            alt="star icon"
          />
        ))}
    </>
  );
};

export default Stars;
