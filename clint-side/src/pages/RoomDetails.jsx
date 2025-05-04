import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  assets,
  facilityIcons,
  roomCommonData,
  roomsDummyData,
} from "../assets/assets";
import Stars from "../components/Stars";

const RoomDetails = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    const room = roomsDummyData.find((room) => room._id === id);
    room && setRoom(room);
    room && setMainImage(room.images[0]);
  }, []);

  return (
    room && (
      <div className=" py-28 p-4 px-16 xl:py-32 md:py-35 lg:py-24 ">
        {/*//*roomDetails */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
          <h1 className="text-3xl md:text-4xl font-playfair ">
            {room.hotel.name}{" "}
            <span className="font-inter text-sm">{`(${room.roomType})`}</span>
          </h1>
          <p className="text-[0.8vw] w-fit px-3 py-1.5 rounded-full bg-orange-500  text-white">
            20% Off
          </p>
        </div>
        {/*//* RoomRaiting */}
        <div className="flex items-center gap-0.5 mt-1 ">
          <Stars rating="3" />
          <p className="ml-2">200+ reviwes</p>
        </div>
        {/*//* location */}
        <div className="flex gap-2 mt-1 text-gray-500 items-center">
          <img
            className="size-4"
            src={assets.locationFilledIcon}
            alt="location"
          />
          <span>{room.hotel.address}</span>
        </div>
        {/* Room Images */}
        <div className="flex flex-col lg:flex-row mt-6 gap-6">
          {/* //* Main Image */}
          <div className="lg:w-1/2 w-full">
            <img
              src={mainImage}
              alt="RoomImage"
              className="w-full rounded-xl shadow-xl"
            />
          </div>

          {/*//* Side Images */}
          <div className="grid grid-cols-2 gap-4 lg:w-1/2 w-full">
            {room?.images?.length > 1 &&
              room.images.map((image, index) => (
                <img
                  onClick={() => setMainImage(image)}
                  className={`w-full rounded-xl object-cover cursor-pointer ${
                    image === mainImage && "ring-2 ring-orange-500"
                  }`}
                  key={index}
                  src={image}
                  alt="RoomImage"
                />
              ))}
          </div>
        </div>
        {/* Room Highlights */}
        <div className=" flex flex-col md:flex-row md:justify-between mt-10">
          <div className="flex flex-col">
            <h1 className="text-3xl md:text-4xl font-playfair">
              {" "}
              Experience Luxury Like Never Before
            </h1>
            <div className="flex flex-wrap iteems-center mt-3 mb-6 gap-4">
              {room.amenities.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center px-3 py-2 gap-2 bg-gray-200 rounded-lg"
                >
                  <img
                    src={facilityIcons[item]}
                    alt="icon"
                    className="size-5"
                  />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Room Price */}
          <p className="text-2xl font-medium">{`$${room.pricePerNight}/Night`}</p>
        </div>
        {/* Checkin CheckOut */}
        <form className="bg-white rounded-lg mt-12 shadow-lg px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 w-full max-w-5xl mx-auto">
          {/* Check-In */}
          <div className="flex flex-col items-start px-4 border-r md:w-1/4 w-full">
            <label
              className="text-sm font-semibold text-gray-700 mb-1"
              htmlFor="checkIn"
            >
              Check-In
            </label>
            <input
              id="checkIn"
              type="date"
              className="text-sm text-gray-600 outline-none w-full"
            />
          </div>

          {/* Check-Out */}
          <div className="flex flex-col items-start px-4 border-r md:w-1/4 w-full">
            <label
              className="text-sm font-semibold text-gray-700 mb-1"
              htmlFor="checkOut"
            >
              Check-Out
            </label>
            <input
              id="checkOut"
              type="date"
              className="text-sm text-gray-600 outline-none w-full"
            />
          </div>

          {/* Guests */}
          <div className="flex flex-col items-start px-4 border-r md:w-1/4 w-full">
            <label
              className="text-sm font-semibold text-gray-700 mb-1"
              htmlFor="guests"
            >
              Guests
            </label>
            <input
              id="guests"
              type="number"
              min={1}
              max={4}
              placeholder="2"
              className="text-sm text-gray-600 outline-none w-full"
            />
          </div>

          {/* Button */}
          <div className="md:w-1/4 w-full flex justify-center px-4">
            <button
              type="submit"
              className="w-full bg-[#1e5eff] hover:bg-[#164edc] text-white text-sm font-semibold py-3 rounded-md transition"
            >
              Check Availability
            </button>
          </div>
        </form>
        {/* Common Specification */}
        <div className="mt-12 space-y-5">
          {roomCommonData.map((spec, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <img
                src={spec.icon}
                alt={`${spec.title}-icon`}
                className="w-8 h-8 object-contain"
              />
              <div>
                <p className="text-lg font-medium text-gray-800">
                  {spec.title}
                </p>
                <p className="text-sm text-gray-600">{spec.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto border-y border-gray-200 py-10 sm:py-12 my-12 sm:my-16 px-4 sm:px-6 text-center text-gray-700 leading-relaxed">
          <p className="text-base sm:text-lg">
            Guests will be allocated on the{" "}
            <span className="font-semibold text-black">ground floor</span>{" "}
            according to availability. You get a comfortable{" "}
            <span className="font-semibold text-black">
              two-bedroom apartment
            </span>{" "}
            that gives a true city feeling.
          </p>
          <p className="text-base sm:text-lg mt-6">
            The price quoted is for{" "}
            <span className="font-semibold text-black">two guests</span>. Please
            mark the correct number of guests in the slot to get an accurate
            price for larger groups. Ground floor allocation is subject to
            availability.
          </p>
        </div>

        {/* Hosted By */}
        <div className="max-w-4xl mx-auto mt-10 sm:mt-12 px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 bg-gray-50 p-5 sm:p-6 rounded-xl shadow-sm text-center sm:text-left">
            <img
              src={room.hotel.owner.image}
              alt={`${room.hotel.name} - host`}
              className="w-16 h-16 rounded-full object-cover border border-gray-300"
            />
            <div>
              <p className="text-base sm:text-lg font-semibold text-gray-900">
                Hosted by {room.hotel.name}
              </p>
              <div className="flex justify-center sm:justify-start items-center mt-1 text-sm text-gray-600">
                <Stars rating="4" />
                <p className="ml-2">200+ Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default RoomDetails;
