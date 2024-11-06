"use client"

import React, { useState, useRef } from 'react'
import { ChevronDownIcon } from 'lucide-react'

const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  const contentRef = useRef(null)

  return (
    <div className="mb-4 bg-teal-50/90 rounded-lg overflow-hidden">
      <button
        className="w-full p-4 text-left flex justify-between items-center hover:bg-teal-50 transition-colors duration-300"
        onClick={onToggle}
      >
        <span className="text-teal-900 font-medium">{question}</span>
        <ChevronDownIcon 
          className={`w-5 h-5 text-teal-700 transition-transform duration-300 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0',
          opacity: isOpen ? 1 : 0
        }}
      >
        <div className="p-4 text-teal-800">{answer}</div>
      </div>
    </div>
  )
}

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "Is it safe for Kids",
      answer: "Yes, it is safe for kids. We prioritize safety by implementing strict protocols, regularly inspecting our equipment, and providing thorough training to all riders. Our experienced staff is always on hand to ensure all safety measures are followed."
    },
    {
      question: "Who can use this website?",
      answer: "Our website is designed for everyone! Whether you're a beginner looking to learn about riding, an experienced enthusiast seeking advanced information, or somewhere in between, you'll find valuable resources here. We welcome users of all ages and experience levels."
    },
    {
      question: "Are there any tutorials?",
      answer: "We offer a wide range of tutorials catering to different skill levels. From basic 'How to Get Started' guides for beginners to advanced technique videos for experienced riders, you'll find comprehensive learning materials in our dedicated Tutorials section."
    },
    {
      question: "Can I share my designs with friends?",
      answer: "Yes, you can easily share your designs with friends. Our platform includes a built-in sharing feature that allows you to send your creations directly to others via email or social media. You can also generate a unique link to your design for easy sharing."
    },
    {
      question: "Are there any costs involved?",
      answer: "We offer both free and premium features. Basic access to our platform, including fundamental tutorials and community forums, is completely free. For advanced features, personalized coaching, and exclusive content, we offer a premium subscription at competitive rates. Check our Pricing page for detailed information."
    },
    {
      question: "How can parents get involved?",
      answer: "We encourage parental involvement! Parents can create family accounts to monitor their children's activities, set safety preferences, and even participate in family-oriented events. We also provide a Parent's Guide with tips on supporting young riders and ensuring a safe, enjoyable experience for the whole family."
    }
  ]

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="w-full max-w-3xl mx-auto p-4 sm:p-6 bg-teal-600 rounded-lg">
      <div className="text-center mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold text-white mb-2">Frequently Asked Questions</h2>
        <p className="text-sm sm:text-base text-teal-50">You have questions, we have answers</p>
      </div>
      
      {faqs.map((faq, index) => (
        <FAQItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          isOpen={openIndex === index}
          onToggle={() => toggleAccordion(index)}
        />
      ))}
    </div>
  )
}