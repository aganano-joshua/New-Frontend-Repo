
import React from 'react'
import Header from '../../Components/LandingPage/Header'
import Hero from '../../Components/LandingPage/Hero'
import CloudSect from '../../Components/LandingPage/CloudSect'
import CarouselComp from '../../Components/LandingPage/CarouselComp'
import Accordion from '../../Components/LandingPage/Accordion'
import Footer from '../../Components/LandingPage/Footer'

import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, Star, Plus, Minus } from 'lucide-react'

import { assets } from '../../../Images/asset'
import { motion, AnimatePresence } from 'framer-motion'


// Reusable NavLink component
const NavLink = ({ href, children }) => (
  <a href={href} className="hover:text-teal-700 transition-colors">
    {children}
  </a>
)

const CloudButton = ({ children }) => (
  <button className=" bg-white/80 rounded-full p-8 text-center transform hover:scale-105 transition-transform cursor-pointer">
    <h3 className="font-bold text-xl bg-gradient-to-r from-pink-500 to-violet-500 text-transparent bg-clip-text">
      {children}
    </h3>
  </button>
)
// Testimonial Card component
const TestimonialCard = ({ name, grade, text }) => (
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -50 }}
    transition={{ duration: 0.5 }}
    className="bg-white p-6 rounded-lg shadow-lg text-center"
  >
    <img
      src={assets.logo}
      alt="logo"
      className="w-16 h-16 mx-auto rounded-full mb-4"
    />
    <h3 className="font-bold">{name}</h3>
    <p className="text-teal-600">{grade}</p>
    <p className="mt-4">{text}</p>
    <div className="flex justify-center gap-1 mt-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  </motion.div>
)

// Accordion item for FAQ section
const AccordionItem = ({ question, answer, isOpen, onClick }) => (
  <div className="bg-white rounded-lg mb-2">
    <button
      className="flex justify-between items-center w-full p-4 text-left"
      onClick={onClick}
    >
      <span>{question}</span>
      {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
    </button>
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className="overflow-hidden"
    >
      {isOpen && <div className="p-4 pt-0">{answer}</div>}
    </motion.div>
  </div>
)

export default function Dashboard() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [openAccordion, setOpenAccordion] = useState(null)

  const testimonials = [
    {
      name: 'Christine Morgan',
      grade: 'Grade 6',
      text: 'This is a fun great drawing application suitable for all ages. Kids can create digital artwork and share it easily. Highly recommended!',
    },
    {
      name: 'Michael Smith',
      grade: 'Grade 3',
      text: 'Cardboard supports various image formats like JPG, PNG, SVG and PDF. I love cardboard!',
    },
    {
      name: 'Shirley Alex',
      grade: 'Grade 1',
      text: 'There is lots of fun features. Best drawing to painting. I love fun on cardboard',
    },
  ]

  const faqItems = [
    {
      question: 'Is it safe for kids?',
      answer:
        'Yes, our platform is designed with child safety in mind and includes parental controls.',
    },
    {
      question: 'Who can use this website?',
      answer:
        'Anyone interested in digital art and creativity, especially students and educators.',
    },
    {
      question: 'Are there any tutorials?',
      answer:
        'Yes, we provide comprehensive tutorials for all our tools and features.',
    },
    {
      question: 'Can I share my designs with friends?',
      answer:
        'Yes, you can easily share your creations with friends and family.',
    },
    {
      question: 'Are there any costs involved?',
      answer:
        'We offer both free and premium features. Basic tools are always free.',
    },
    {
      question: 'How can parents get involved?',
      answer:
        "Parents can create family accounts and monitor their children's activities.",
    },
  ]

  // Handler functions for navigating testimonials
  const handleNext = () => {
    setCurrentTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    )
  }

  const handlePrevious = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    )
  }


const Landing = () => {
  return (

    <div className='body max-800:bg-contain max-800:bg-top max-800:bg-no-repeat'
    
    style={{
      backgroundImage: `url(${assets.bg})`,
      backgroundPosition: "top center",
    }}

    >
     <Header />
     <Hero />
     <CloudSect />
     <CarouselComp />
     <Accordion />
     <Footer />
    </div>
  )
}

export default Landing

