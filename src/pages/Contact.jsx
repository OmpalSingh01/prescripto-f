// import React from 'react'
// import { assets } from '../assets/assets'

// const Contact = () => {
//   return (
//     <div>

//       <div className='text-center text-2xl pt-10 text-[#707070]'>
//         <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
//       </div>

//       <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
//         <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />
//         <div className='flex flex-col justify-center items-start gap-6'>
//           <p className=' font-semibold text-lg text-gray-600'>OUR OFFICE</p>
//           <p className=' text-gray-500'>54709 Willms Station <br /> Suite 350, Washington, USA</p>
//           <p className=' text-gray-500'>Tel: (415) 555-0132 <br /> Email: greatstackdev@gmail.com</p>
//           <p className=' font-semibold text-lg text-gray-600'>CAREERS AT PRESCRIPTO</p>
//           <p className=' text-gray-500'>Learn more about our teams and job openings.</p>
//           <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
//         </div>
//       </div>

//     </div>
//   )
// }

// export default Contact

import React from "react";
import { Phone, Mail, MapPin, HelpCircle, Clock } from "lucide-react";

const Contact = () => {
  const faqs = [
    {
      q: "What are your working hours?",
      a: "Our team is available from Monday to Saturday, 9:00 AM - 6:00 PM IST.",
    },
    {
      q: "How quickly do you respond to queries?",
      a: "We usually respond within 24 hours on weekdays.",
    },
    {
      q: "Do you provide emergency support?",
      a: "Yes, our premium users get 24/7 emergency support.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div
        className="relative h-[50vh] md:h-[55vh] flex items-center justify-center bg-cover bg-center rounded-b-3xl shadow-lg "
        style={{
          backgroundImage:
            "url('https://storage.googleapis.com/cdn-devwebsite-bolddesk/media/2023/07/483a3ef5-customer-support-team-compressed.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50 rounded-b-3xl" />
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contact Our Support Team
          </h1>
          <p className="max-w-2xl mx-auto text-lg opacity-90 mb-6">
            We’re here to help you with any queries or support needs. Let’s
            connect today.
          </p>
          <a
            href="#contact-info"
            className="inline-block bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full shadow-md transition"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div id="contact-info" className="px-6 md:px-16 lg:px-28 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Get in Touch
          </h2>
          <p className="text-gray-500 mt-3">
            We’re here to help. Reach out for any queries or support.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl transition">
            <Phone className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-lg font-semibold text-gray-700">Phone</h3>
            <p className="text-gray-500 mt-2">+91 7233828073</p>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl transition">
            <Mail className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-lg font-semibold text-gray-700">Email</h3>
            <p className="text-gray-500 mt-2">support@prescripto.com</p>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl transition">
            <MapPin className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-lg font-semibold text-gray-700">Address</h3>
            <p className="text-gray-500 mt-2 text-sm">
              12/52 Emeraland Garden, Kampur Nagar <br /> Uttar Pradesh, India
            </p>
          </div>
        </div>

        {/* Support Highlights */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-primary text-white rounded-2xl p-8 shadow-lg">
            <Clock className="w-10 h-10 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Quick Support</h3>
            <p className="opacity-90">
              Our support team is available 6 days a week. You can expect a
              response within 24 hours.
            </p>
          </div>
          <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-lg">
            <HelpCircle className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Need Help?</h3>
            <p className="text-gray-600">
              Visit our FAQs section below to quickly find answers to common
              questions.
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
            Frequently Asked Questions
          </h3>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <h4 className="font-semibold text-gray-800">{faq.q}</h4>
                <p className="text-gray-600 mt-2">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
