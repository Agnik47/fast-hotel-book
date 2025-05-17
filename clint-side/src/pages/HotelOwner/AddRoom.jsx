import React, { useState } from "react";
import Title from "../../components/TItle";
import { assets } from "../../assets/assets";

const AddRoom = () => {
  const [images, setImages] = useState({
    1: null,
    2: null,
    3: null,
    4: null,
  });

  const [inputs, setInputs] = useState({
    roomType: "",
    pricePerNight: 0,
    amenites: {
      "Free Wife": false,
      "Free Breakfast": false,
      "Room Service": false,
      "Pool Access": false,
    },
  });
  return (
    <div>
      <form action="">
        <Title
          aling={"left"}
          font="outfit"
          title="Add Room"
          subTitle="Fill in the details carefully and acurate room details, pricing and ameneties enhance the user booking experiience"
        />
        {/* Upload Area */}
        <p className="text-gray-800 mt-10">Images</p>
        <div className="grid f]grid-col-2 sm:flex gap-4 my-2  flex-wrap">
          {Object.keys(images).map((key)=> (
            <label htmlFor={`roomImage${key}`} key={key}>
              <img className="max-h-17 cursor-pointer opacity-80" src={images[key] ? URL.createObjectURL(images[key]): assets.uploadArea} alt="" />
              <input id={`roomImage${key}`} type="file" accept="image/*" hidden onChange={e=> setImages({...images, [key]: e.target.files[0]})}/>
            </label>
          ))}
        </div>

        <div className="w-full flex max-sm:flex-col sm:gap-4 mt-4 ">
          <div className="flex-1 max-w-48">
            <p className="text-gray-800 mt-4">Room Type</p>
              <select value={inputs.roomType} onChange={e=> setInputs({...inputs, roomType: e.target.value})} className="border opacity-70 border-gray-300 rounded p-2 w-full  mt-2">
                <option value="">Select Options</option>
                <option value="Single Bed">Single Bed</option>
                <option value="Doubble Bed">Doubble Bed</option>
                <option value="Luxary Room">Luxary Room</option>
                <option value="Family Suite">Family Suite</option>
              </select>
          </div>

          <div>
            <p className="text-gray-800 mt-4">Price<span>/night</span></p>
            <input className="border border-gray-300 p-1.5 rounded mt-2 w-24" type="number" value={inputs.pricePerNight} onChange={e=> setInputs({...inputs, pricePerNight: e.target.value})} />
          </div>
        </div>

        <p className="text-gray-800 mt-4">Aminites</p>
          <div className="flex flex-wrap flex-col max-w-sm text-gray-500 mt-1">
              {Object.keys(inputs.amenites).map((amenity,index)=> (
                <div key={index}>
                  <input className="cursor-pointer" onChange={e=> setInputs({...inputs, amenites: {...inputs.amenites, [amenity]: !inputs.amenites[amenity]}})} type="checkbox" name="" checked={inputs.amenites[amenity]} id={`amenites${index+1}`} />
                  <label className="ml-1 cursor-pointer" htmlFor={`amenites${index+1}`}>{amenity}</label>
                </div>
              ))}
          </div>

          <button className="px-8 py-2 bg-primary cursor-pointer rounded text-white mt-8">Add Room</button>

      </form>
    </div>
  );
};

export default AddRoom;
