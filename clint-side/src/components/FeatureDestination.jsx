import React from 'react'
import { roomsDummyData } from '../assets/assets'
import HotelCard from './HotelCard'
import Title from './TItle'
import { useNavigate } from 'react-router-dom'

const FeatureDestination = () => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-100  py-20'>

        <Title title={"Featured Hotels"} subTitle={"Discover our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experiences"}/>
        <div className='CARDS-CONTAINER flex flex-wrap gap-6  items-center justify-center mt-20'>
            {roomsDummyData.slice(0,4).map((room,index)=> (
                <HotelCard key={room._id} room={room} index={index}/>
            ))}
        </div>  

        <button onClick={()=>{navigate('/rooms'); scrollTo(0,0)}}
         className='mx-16 mt-12 px-4 py-2 border border-gray-400 bg-white rounded cursor-pointer hover:bg-gray-800 hover:text-white duration-300 hover:border-white text-sm transition-all'>View All Hotels</button>
    </div>
  )
} 

export default FeatureDestination