'use client'

import React, { useState, useEffect } from 'react'
import { assets } from '../../../Images/asset'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    name: 'Christine Morgan',
    grade: 'Grade 8',
    image: assets.ellipse,
    quote: '"This is the best online education platform Ive ever used. Its easy to navigate, and the content is top-notch. Highly recommended!"'
  },
  {
    name: 'Michael Smith',
    grade: 'Grade 9',
    image: assets.ellipse1,
    quote: '"Excellent platform! The lessons are engaging and interactive. Ive learned so much in such a short time!"'
  },
  {
    name: 'Shirley Alex',
    grade: 'Grade 7',
    image: assets.ellipse2,
    quote: '"Great site for all subjects. Really helping to improve my grades. I love the interactive exercises!"'
  },
]

export default function CarouselComp() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const nextSlide = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000) // Auto-slide every 5 seconds
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12 bg-[#e6f3f3] mb-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#2a9d8f]">Testimonials</h2>
      <h3 className="text-xl text-center mb-12 text-[#2a9d8f]">Our Kids Review</h3>
      <div className="relative overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0 px-4">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <img src={testimonial.image} alt={testimonial.name} className="w-20 h-20 rounded-full mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">{testimonial.name}</h4>
                <p className="text-sm text-gray-600 mb-4">{testimonial.grade}</p>
                <p className="text-gray-700">{testimonial.quote}</p>
                <div className="flex justify-center mt-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <button 
          onClick={prevSlide} 
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>
        <button 
          onClick={nextSlide} 
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>
      </div>
    </div>
  )
}