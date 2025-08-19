// import React from 'react'
// import { assets } from '../assets/assets'

// const About = () => {
//   return (
//     <div>

//       <div className='text-center text-2xl pt-10 text-[#707070]'>
//         <p>ABOUT <span className='text-gray-700 font-semibold'>US</span></p>
//       </div>

//       <div className='my-10 flex flex-col md:flex-row gap-12'>
//         <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
//         <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
//           <p>Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
//           <p>Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.</p>
//           <b className='text-gray-800'>Our Vision</b>
//           <p>Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
//         </div>
//       </div>

//       <div className='text-xl my-4'>
//         <p>WHY  <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
//       </div>

//       <div className='flex flex-col md:flex-row mb-20'>
//         <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
//           <b>EFFICIENCY:</b>
//           <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
//         </div>
//         <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
//           <b>CONVENIENCE: </b>
//           <p>Access to a network of trusted healthcare professionals in your area.</p>
//         </div>
//         <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
//           <b>PERSONALIZATION:</b>
//           <p >Tailored recommendations and reminders to help you stay on top of your health.</p>
//         </div>
//       </div>

//     </div>
//   )
// }

// export default About

import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="px-6 md:px-12 lg:px-20">
      {/* Section Heading */}
      <div className="text-center text-3xl pt-12 text-gray-700 font-semibold">
        <p>
          ABOUT <span className="text-primary">US</span>
        </p>
        <p className="mt-2 text-sm text-gray-500 max-w-2xl mx-auto">
          Discover who we are, what drives us, and why Prescripto is the trusted choice for thousands of patients.
        </p>
      </div>

      {/* About Content */}
      <div className="my-16 flex flex-col md:flex-row gap-12 items-center">
        <img
          className="w-full md:max-w-[420px] rounded-2xl shadow-lg"
          src={assets.about_image}
          alt="About Prescripto"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/3 text-base text-gray-600">
          <p>
            Welcome to <span className="font-semibold text-gray-800">Prescripto</span>, your trusted partner in managing healthcare needs conveniently and efficiently. 
            Our platform is designed to make scheduling doctor appointments, managing records, and staying connected with healthcare providers easier than ever.
          </p>
          <p>
            At Prescripto, we embrace innovation and compassion. We strive to empower patients with technology while supporting healthcare professionals with tools that enhance efficiency and quality of care.
          </p>
          <div>
            <h3 className="font-bold text-lg text-gray-800 mb-2">Our Mission</h3>
            <p>
              To simplify healthcare access by bridging the gap between patients and providers, ensuring a seamless and reliable digital healthcare experience.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg text-gray-800 mb-2">Our Vision</h3>
            <p>
              To become a global leader in digital healthcare solutions, creating a world where healthcare is accessible, efficient, and personalized for everyone.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="text-center mb-12">
        <p className="text-2xl font-semibold text-gray-700">
          WHY <span className="text-primary">CHOOSE US</span>
        </p>
        <p className="mt-2 text-sm text-gray-500">
          We’re dedicated to offering the best healthcare experience through innovation, care, and trust.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-20">
        <div className="border px-8 py-10 rounded-2xl flex flex-col gap-4 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer shadow-sm">
          <b className="text-lg">Efficiency</b>
          <p>Streamlined appointment scheduling that saves your time and effort.</p>
        </div>
        <div className="border px-8 py-10 rounded-2xl flex flex-col gap-4 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer shadow-sm">
          <b className="text-lg">Convenience</b>
          <p>Instant access to a wide network of trusted doctors near you.</p>
        </div>
        <div className="border px-8 py-10 rounded-2xl flex flex-col gap-4 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer shadow-sm">
          <b className="text-lg">Personalization</b>
          <p>Smart reminders and tailored health suggestions to keep you on track.</p>
        </div>
        <div className="border px-8 py-10 rounded-2xl flex flex-col gap-4 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer shadow-sm">
          <b className="text-lg">Trusted Platform</b>
          <p>Thousands of patients rely on us daily for seamless healthcare management.</p>
        </div>
        <div className="border px-8 py-10 rounded-2xl flex flex-col gap-4 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer shadow-sm">
          <b className="text-lg">Secure Records</b>
          <p>Data privacy is our priority – your medical records are safe with us.</p>
        </div>
        <div className="border px-8 py-10 rounded-2xl flex flex-col gap-4 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer shadow-sm">
          <b className="text-lg">24/7 Support</b>
          <p>Our dedicated support team is always here to assist you, anytime.</p>
        </div>
      </div>

      {/* Stats / Achievements */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-20">
        <div>
          <p className="text-3xl font-bold text-primary">50K+</p>
          <p className="text-gray-600">Appointments Booked</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-primary">30K+</p>
          <p className="text-gray-600">Happy Patients</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-primary">500+</p>
          <p className="text-gray-600">Verified Doctors</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-primary">24/7</p>
          <p className="text-gray-600">Customer Support</p>
        </div>
      </div>
    </div>
  );
};

export default About;


