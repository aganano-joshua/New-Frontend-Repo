import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Plus, Minus } from 'lucide-react';
import { assets } from '../../../Images/asset'

const NavLink = ({ href, children }) => (
  <a href={href} className="hover:text-teal-700 transition-colors">
    {children}
  </a>
);

const CloudButton = ({ children }) => (
  <button className=" bg-white/80 rounded-full p-8 text-center transform hover:scale-105 transition-transform cursor-pointer">
    <h3 className="font-bold text-xl bg-gradient-to-r from-pink-500 to-violet-500 text-transparent bg-clip-text">
      {children}
    </h3>
  </button>
);

const TestimonialCard = ({ name, grade, text, }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg text-center">
    <img src={assets.logo} alt="logo" className="w-16 h-16 mx-auto rounded-full mb-4" />
    <h3 className="font-bold">{name}</h3>
    <p className="text-teal-600">{grade}</p>
    <p className="mt-4">{text}</p>
    <div className="flex justify-center gap-1 mt-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  </div>
);

const AccordionItem = ({ question, answer, isOpen, onClick }) => (
  <div className="bg-white rounded-lg mb-2">
    <button
      className="flex justify-between items-center w-full p-4 text-left"
      onClick={onClick}
    >
      <span>{question}</span>
      {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
    </button>
    {isOpen && <div className="p-4 pt-0">{answer}</div>}
  </div>
);

export default function Dashboard() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(null);

  const testimonials = [
    {
      name: "Christine Morgan",
      grade: "Grade 6",
      text: "This is a fun great drawing application suitable for all ages. Kids can create digital artwork and share it easily. Highly recommended!"
    },
    {
      name: "Michael Smith",
      grade: "Grade 3",
      text: "Cardboard supports various image formats like JPG, PNG, SVG and PDF. I love cardboard!"
    },
    {
      name: "Shirley Alex",
      grade: "Grade 1",
      text: "There is lots of fun features. Best drawing to painting. I love fun on cardboard"
    }
  ];

  const faqItems = [
    {
      question: "Is it safe for kids?",
      answer: "Yes, our platform is designed with child safety in mind and includes parental controls."
    },
    {
      question: "Who can use this website?",
      answer: "Anyone interested in digital art and creativity, especially students and educators."
    },
    {
      question: "Are there any tutorials?",
      answer: "Yes, we provide comprehensive tutorials for all our tools and features."
    },
    {
      question: "Can I share my designs with friends?",
      answer: "Yes, you can easily share your creations with friends and family."
    },
    {
      question: "Are there any costs involved?",
      answer: "We offer both free and premium features. Basic tools are always free."
    },
    {
      question: "How can parents get involved?",
      answer: "Parents can create family accounts and monitor their children's activities."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-4 ">
        <div className="flex items-center gap-2">
          <img src={assets.logo} alt="Cardboard Logo" className="w-10 h-10 object-contain" />
          <span className="text-2xl font-bold">Cardboard</span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <NavLink href="#">Home</NavLink>
          <NavLink href="#">Learn</NavLink>
          <NavLink href="#">FAQ</NavLink>
          <NavLink href="#">About Us</NavLink>
        </div>
        <div className="flex items-center gap-2">
          <button className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition-colors">SignUp</button>
          <button className="bg-white text-teal-600 px-4 py-2 rounded border border-teal-600 hover:bg-gray-100 transition-colors">Login</button>
        </div>
      </nav>

      {/* Hero Section with SVG Background */}
      <section className="relative overflow-hidden">
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1431 1041" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <g transform="scale(1, 0.8)">
            <path d="M1430.87 339.461H0V1047H1430.87V339.461Z" fill="#9EE9F5"/>
          </g>
          <g transform="scale(1, 0.8)">
            <path d="M0 18.4479C51.6701 33.7342 218.605 83.0874 310.021 110.166C401.437 137.245 222.579 -5.13675 310.021 18.4479C397.463 42.0325 1042.84 -18.6806 1138.23 -2.08398C1233.62 14.5126 1235.13 -1.64273 1334.5 18.4479C1433.87 38.5385 1430.87 339.461 1430.87 372.217V1047H0V18.4479Z" fill="url(#paint0_linear_192_65)"/>
          </g>
          <g transform="scale(1, 0.7)">
            <path d="M0 136.324C55.6448 155.543 210.655 216.694 333.869 251.638C457.082 286.583 612.093 314.538 739.281 345.989C866.469 377.439 981.733 412.383 1097 440.339C1212.26 468.295 1375.22 501.494 1430.87 513.725V1047H0V136.324Z" fill="url(#paint1_linear_192_65)"/>
          </g>
          <g transform="scale(1, 0.7)">
            <path d="M0 254.2C43.7209 268.834 186.807 316.229 262.325 342.003C337.843 367.776 381.564 386.562 453.108 408.842C524.651 431.121 604.143 460.389 691.585 475.68C779.027 490.972 898.266 478.311 977.758 500.591C1057.25 522.871 1093.02 583.584 1168.54 609.358C1244.06 635.132 1387.14 647.587 1430.87 655.233V1047H0V254.2Z" fill="url(#paint2_linear_192_65)"/>
          </g>
          <g transform="scale(1, 0.799999)">
            <path d="M0 372.076C25.8351 377.429 99.3656 389.994 155.01 404.195C210.655 418.395 274.249 432.595 333.869 457.278C393.488 481.96 445.158 527.607 512.727 552.289C580.296 576.972 679.661 587.678 739.281 605.372C798.9 623.067 810.824 640.761 870.443 658.456C930.063 676.15 1029.43 700.832 1097 711.539C1164.57 722.245 1220.21 708.493 1275.85 722.694C1331.5 736.894 1405.03 784.4 1430.87 796.741V1047H0V372.076Z" fill="url(#paint3_linear_192_65)"/>
          </g>
          <path d="M0 424.439C38.0428 438.607 156.146 491.592 228.257 509.445C300.368 527.299 364.53 510.212 432.667 531.56C500.803 552.907 568.939 616.183 637.076 637.53C705.212 658.878 773.349 645.285 841.485 659.644C909.622 674.004 985.707 702.339 1045.89 723.687C1106.08 745.034 1138.45 762.888 1202.61 787.729C1266.77 812.571 1392.82 858.568 1430.87 872.736V1047H0V424.439Z" fill="url(#paint4_linear_192_65)"/>
          <defs>
            <linearGradient id="paint0_linear_192_65" x1="715.438" y1="-5" x2="715.438" y2="1047" gradientUnits="userSpaceOnUse">
              <stop stopColor="#CFE2F7"/>
              <stop offset="1" stopColor="#24D0D6"/>
            </linearGradient>
            <linearGradient id="paint1_linear_192_65" x1="715.438" y1="-5" x2="715.438" y2="1047" gradientUnits="userSpaceOnUse">
              <stop stopColor="#CFF2F7"/>
              <stop offset="1" stopColor="#24D695"/>
            </linearGradient>
            <linearGradient id="paint2_linear_192_65" x1="715.438" y1="-5" x2="715.438" y2="1047" gradientUnits="userSpaceOnUse">
              <stop stopColor="#CFEAF7"/>
              <stop offset="1" stopColor="#24D6B8"/>
            </linearGradient>
            <linearGradient id="paint3_linear_192_65" x1="715.438" y1="-5" x2="715.438" y2="1047" gradientUnits="userSpaceOnUse">
              <stop stopColor="white"/>
              <stop offset="1" stopColor="#FAFEFF"/>
            </linearGradient>
            <linearGradient id="paint4_linear_192_65" x1="715.433" y1="424.439" x2="715.433" y2="1047" gradientUnits="userSpaceOnUse">
              <stop stopColor="white"/>
              <stop offset="1" stopColor="#FAFFFE"/>
            </linearGradient>
          </defs>
        </svg>

        <div className="relative z-10 px-4 py-12 md:py-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  Unleash your <br />
                  <span className="text-teal-700">Imagination: Create</span> <br />
                  your own adventure
                </h1>
                <p className="text-lg mb-6">
                  Get ready to bring your wildest ideas to life! Grab your crayons, markers, or pencils and let
                  your creativity soar. Every drawing tells a story—let yours begin!
                </p>
                <button className="bg-teal-600 text-white px-6 py-3 rounded-full hover:bg-teal-700 transition-colors">
                  Create Art
                </button>
              </div>
              <div className="relative h-[300px] md:h-[400px]">
                <img
                  src={assets.group}
                  alt="Art Supplies"
                  className="absolute inset-0 w-full h-full object-cover rounded-lg"
                />
                <img
                  src={assets.groups}
                  alt="Art Supplies"
                  className="absolute inset-0 w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Count Banner */}
      <div className="bg-teal-600 text-white py-4 text-center">
        <p className="text-xl">40,000+ users are Satisfied with Cardboard</p>
        <button className="mt-2 bg-white text-teal-600 px-6 py-2 rounded-full hover:bg-gray-100 transition-colors font-semibold">
          Join Now →
        </button>
      </div>

      {/* Feature Clouds */}
      <div className="grid grid-cols-3 gap-4 max-w-4xl mx-auto py-12 px-4">
        <CloudButton>PAINT</CloudButton>
        <CloudButton>SKETCH</CloudButton>
        <CloudButton>DRAW</CloudButton>
      </div>

      {/* Testimonials */}
      <section className="py-12 px-4 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
        <p className="text-center mb-8">Our Kids Review</p>
        <div className="max-w-xl mx-auto relative">
          <TestimonialCard {...testimonials[currentTestimonial]} />
          <button
            onClick={() => setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-full bg-white rounded-full p-2 shadow-md"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-full bg-white rounded-full p-2 shadow-md"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-4 bg-teal-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">Frequently Asked Questions</h2>
          <p className="text-center mb-8">You have questions, we have  answers</p>
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openAccordion === index}
              onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-teal-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold mb-2">Card<span className="text-sky-400">Board</span></h2>
            <div className="flex justify-center gap-4 my-4">
              <img src="/placeholder.svg" alt="App Store" className="h-10 object-contain" />
              <img src="/placeholder.svg" alt="Google Play" className="h-10 object-contain" />
            </div>
          </div>
          <div className="flex justify-center gap-8 text-sm">
            <NavLink href="#">Draw</NavLink>
            <NavLink href="#">Sketch</NavLink>
            <NavLink href="#">Paint</NavLink>
            <NavLink href="#">FAQ</NavLink>
            <NavLink href="#">About Us</NavLink>
            <NavLink href="#">Learn</NavLink>
            <NavLink href="#">Support</NavLink>
          </div>
          <div className="text-center mt-8 text-sm">
            <p>© 2024 Cardboard All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}