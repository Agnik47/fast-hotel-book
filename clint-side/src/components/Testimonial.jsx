import React from 'react'
import Title from './TItle'
import { testimonials } from '../assets/assets'
import Stars from './Stars'

const Testimonial = () => {
  

  return (
    <div>
        <Title title="What Our Guests Say" subTitle="Discover why discerning travelers choose QuickStay for their luxury accommodations around the world."/>

        <div className="flex flex-wrap items-center justify-center mt-12 mb-10  gap-6 ">
                {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="bg-white border border-gray-300 p-6 rounded-xl shadow ">
                        <div className="flex items-center gap-3">
                            <img className="w-12 h-12 rounded-full" src={testimonial.image} alt={testimonial.name} />
                            <div>
                                <p className="font-playfair text-xl">{testimonial.name}</p>
                                <p className="text-gray-500">{testimonial.location}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 mt-4">
                           <Stars rating={testimonial.rating}/>
                        </div>
                        <p className="text-gray-500 max-w-90 mt-4">"{testimonial.review}"</p>
                    </div>
                ))}
            </div>

    </div>  
  )
}

export default Testimonial