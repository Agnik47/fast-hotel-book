    import React, { useState } from "react";
    import { assets, facilityIcons, roomsDummyData } from "../assets/assets";
    import { useNavigate } from "react-router-dom";
    import Stars from "../components/Stars";

    const CheckBox = ({label, selected = false, onChange = ()=> {}})=> {
        return (
            <label className="flex gap-3 items-center text-sm mt-2 cursor-pointer">
                <input type="checkbox" checked={selected} onChange={(e)=> onChange(e.target.checked, label)}/>
                <span  className="font-light select-none">{label}</span>
            </label>
        )
    }
    const RadioButton = ({label, selected = false, onChange = ()=> {}})=> {
        return (
            <label className="flex gap-3 items-center text-sm mt-2 cursor-pointer">
                <input type="radio" name="sortOption" checked={selected} onChange={()=> onChange(label)}/>
                <span  className="font-light select-none">{label}</span>
            </label>
        )
    }
    const AllRooms = () => {
    const navigate = useNavigate();
    const [openFilters, setOpenFilters] = useState(false);

    const roomTypes = [
        'Single Bed',
        'Family Suite',
        'Double Bed',
        'Luxury Room'
    ];

    const priceRange = [
        '₹2500 to ₹5000',
        '₹5000 to ₹8000',
        '₹8000 to ₹15000'
    ]

    const sortOption = [
        'Price Low to High',
        'Price High to Low',
        'Newest First'
    ]
    return (
        <div className="pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32">
        <div className="flex flex-col lg:flex-row gap-10 justify-between">
            {/* Left: Room Listings */}
            <div className="flex-1">
            <div className="mb-8">
                <h1 className="text-4xl md:text-[40px] font-playfair">
                Hotel Rooms
                </h1>
                <p className="text-sm md:text-base text-gray-500/90 mt-2 max-w-2xl">
                Take advantage of our limited-time offers and special packages to
                enhance your stay and create unforgettable memories.
                </p>
            </div>

            {roomsDummyData.map((room) => (
                <div
                key={room._id}
                className="flex flex-col md:flex-row gap-6 items-start border-b border-gray-300 pb-10 mb-10"
                >
                {/* Image */}
                <img
                    src={room.images[0]}
                    alt="hotel-img"
                    title="View Room Details"
                    onClick={() => {
                    navigate(`/rooms/${room._id}`);
                    scrollTo(0, 0);
                    }}
                    className="w-full md:w-1/2 max-h-72 object-cover rounded-xl shadow-lg cursor-pointer"
                />

                {/* Room Details */}
                <div className="md:w-1/2 flex flex-col gap-3">
                    <p className="text-gray-500">{room.hotel.city}</p>
                    <p
                    onClick={() => {
                        navigate(`/rooms/${room._id}`);
                        scrollTo(0, 0);
                    }}
                    className="text-2xl font-playfair text-gray-800 cursor-pointer"
                    >
                    {room.hotel.name}
                    </p>

                    {/* Rating */} 
                    <div className="flex items-center gap-2">
                    <Stars rating={4} />
                    <p className="text-sm text-gray-600">200+ reviews</p>
                    </div>

                    {/* Location */}
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <img src={assets.locationIcon} alt="location-icon" />
                    <p>{room.hotel.address}</p>
                    </div>
                    {/* Amenities */}
                    <div className="flex flex-wrap items-center mt-3 mb-6 gap-4">
                    {room.amenities.map((item, index) => (
                        <div
                        key={index}
                        className="flex items-ceter gap-2 px-3 py-2 rounded-lg bg-[#F5F5FF]/70 "
                        >
                        <img
                            src={facilityIcons[item]}
                            alt={item}
                            className="size-5"
                        />
                        <p className="text-xs">{item}</p>
                        </div>
                    ))}
                    </div>

                    {/* Room Prcie per Night  */}
                    <p className="text-xl font-medium text-gray-700">
                    `${room.pricePerNight} /nights`
                    </p>
                </div>
                </div>
            ))}
            </div>

            {/* Right: Filter Sidebar */}
            <div className="Filter-Border bg-white w-80 border h-fit border-gray-300 text-gray-600 max-lg:mb-8 min-lg:mt-16">
            <div className={`Filter-Header flex items-center justify-between px-5 py-2.5 border-gray-300`}>
                <p className="text-base font-medium text-gray-800">FILTERS</p>
                <div className="text-xs cursor-pointer">
                <span onClick={()=>setOpenFilters(!openFilters)} className="lg:hidden">
                    {openFilters ? 'HIDE' : 'SHOW'}
                </span>
                <span className="hidden lg:block">CLEAR</span>
                </div>
            </div>

            <div className={`${openFilters ? 'h-auto' : 'h-0 '} lg:h-auto overflow-hidden translate-all duration-700`}>

                <div className="px-5 pt-5">
                    <p className="font-medium text-gray-800 pb-2 ">Popular Filters</p>
                    {roomTypes.map((room,index)=> (
                        <CheckBox key={index} label={room}/>
                    ))}
                </div>
                <div className="px-5 pt-5">
                    <p className="font-medium text-gray-800 pb-2 ">Price Range</p>
                    {priceRange.map((range,index)=> (
                        <CheckBox key={index} label={range}/>
                    ))}
                </div>  
                <div className="px-5 pt-5 pb-8">
                    <p className="font-medium text-gray-800 pb-2  ">Price Range</p>
                    {sortOption.map((option,index)=> (
                        <RadioButton key={index} label={option}/>
                    ))}
                </div>  
            </div>

            </div>
        </div>
        </div>
    );
    };

    export default AllRooms;
