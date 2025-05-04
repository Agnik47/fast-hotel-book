import React from 'react'
import Title from './TItle'
import { assets, exclusiveOffers } from '../assets/assets'

const ExclusiveOffer = () => {
  return (
    <div className='pt-20 pb-30 xl:px-32 lg:px-24 md:px-16 px-6 flex flex-col items-center '>
        <div className='w-full flex felx-col justify-between items-center md:flex-row'>
            <Title aling="left" title="Exclusive Offers" subTitle="Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories."/>
            <button className='group flex items-center justify-between gap-2 font-medium cursor-pointer '>View All offerin
                <img className='group-hover:translate-x-1 transition-all duration-300' src={assets.arrowIcon} alt=" arrow-icon" />
            </button>
        </div>

        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-12 '>
            {exclusiveOffers.map((item,index)=> (
                <div key={item._id} className='group flex felx-col items-start justify-between gap-1 pt-12 md:pt-18 px-4 rounded-xl text-white bg-no-repeat bg-cover bg-center relative' style={{backgroundImage: `url(${item.image})`}} >
                    <p className='px-3 py-1 absolute top-4 left-3 text-xs bg-white rounded-full font-medium text-gray-800'>{item.priceOff}% OFF</p>
                    <div>
                        <p className='text-2xl font-medium font-playfair'>{item.title}</p>
                        <p className='text-sm'>{item.description}</p>
                        <p className='text-xs mt-3 text-white/70'>Expires {item.expiryDate}</p>
                    <button className='flex items-center gap-2 mt-4 font-medium mb-5'>
                        Views Offers
                        <img className='invert group-hover:translate-x-1 transition-all duration-300' src={assets.arrowIcon} alt="arrow icon" />
                    </button>
                    </div> 
                </div>
            ))}
        </div>
    </div>
  )
}

export default ExclusiveOffer