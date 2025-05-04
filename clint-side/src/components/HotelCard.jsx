import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const HotelCard = ({ room, index }) => {
  return (
    <Link
      className="relative max-w-70 w-full rounded-xl overflow-hidden bg-white text-gray-500/90 shadow-[#0px_4px_4px_rgba(0,0,0,0.5)]"
      to={"/rooms/" + room._id}
      key={room._id}
      onClick={() => scrollTo(0, 0)}
    >
      <img src={room.images[0]} alt="hotel-img" />
      {index % 2 === 0 && (
        <p className="px-3 py-1 absolute top-3 left-3  tex-xs bg-white text-gray-800 font-medium rounded-full">
          Best Seller
        </p>
      )}
      <div className="p-4 pt-5">
        <div className="flex items-center justify-between">
          <p className="font-playfair text-xl font-medium ">
            {room.hotel.name}
          </p>
          <div className="flex items-center gap-1">
            <img src={assets.starIconFilled} alt="star-icon" />
            4.5
          </div>
        </div>

        <div className="flex gap-1 text-sm items-center">
          <img src={assets.locationFilledIcon} alt="star-icon" />
          <span >{room.hotel.address}</span> 
        </div>

        <div className="flex items-center mt-4 justify-between">
          <p><span className="text-xl text-gray-800">{room.pricePerNight}</span>/Night</p>
          <button className="px-4 py-2 text-sm font-medium border border-gray-400 rounded hover:bg-gray-200 hover:rounded-xl transition-all duration-300 cursor-pointer">Book Now</button>
        </div>
      </div>  
    </Link>
  );
};

export default HotelCard;
