import React from 'react'
import { assets, cities } from '../assets/assets'

const HotelReg = () => {
  return (
    <div className='fixed  top-0 bottom-0 left-0 right-0 z-100 flex items-center justify-center bg-black/70'>
        <form action="" className='flex bg-white max-w-4xl max-md:mx-2 rounded-xl' >
            <img src={assets.regImage} alt="reg-img" className='w-1/2  rounded-l-xl hidden md:block'/>
            <div className='relative flex flex-col w-full md:w-1/2 items-center p-8 md:p-10 '>
                <img src={assets.closeIcon} alt="close-icon" className='absolute cursor-pointer top-4 right-4' />
                <p className='text-3xl font-semibold mt-6'>Register Your Hotel</p>
                
                {/* Hotel Name */}
                <div className='HotelName w-full mt-4'>
                    <label htmlFor="name" className='text-gray-600 font-medium'>Hotel Name</label>
                    <input id='name' className='border border-gray-300 w-full rounded px-3 py-2.5 mt-1 outline-indigo-500 font-light' type="text" placeholder='Type Here' required/>
                </div>
                {/* Phone */}
                <div className='Phone w-full mt-4'>
                    <label htmlFor="contact" className='text-gray-600 font-medium'>Phone</label>
                    <input type="number" id='contact' className='border border-gray-300 w-full rounded px-3 py-2.5 mt-1 outline-indigo-500 font-light'  placeholder='Type Here' required/>
                </div>
                {/* Adress*/}
                <div className='Adress w-full mt-4'>
                    <label htmlFor="adress" className='text-gray-600 font-medium'>Adress</label>
                    <input type="text" id='adress' className='border border-gray-300 w-full rounded px-3 py-2.5 mt-1 outline-indigo-500 font-light'  placeholder='Type Here' required/>
                </div>
                {/* Select City options */}
                <div className='options w-full mt-4 max-w-60 mr-auto'>
                    <label htmlFor="city">City</label>
                    <select name="" id="city" className='border border-gray-300 w-full rounded px-3 py-2.5 mt-1' required>
                        <option value="">Select City</option>
                        {cities.map((city,index)=> (
                            <option key={index} value={city}>{city}</option>
                        ))}
                    </select>

                </div>

                <button className='bg-indigo-500 hover:bg-indigo-800 text-white  cursor-pointer px-6 py-2 rounded mt-6  mr-auto'>
                    Registor
                </button>



            </div>
        </form>
        
    </div>
  )
}

export default HotelReg