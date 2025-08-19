// import React from 'react'
// import { assets } from '../assets/assets'

// const Footer = () => {
//   return (
//     <div className='md:mx-10'>
//       <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm'>

//         <div>
//           <img className='mb-5 w-40' src={assets.logo} alt="" />
//           <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
//         </div>

//         <div>
//           <p className='text-xl font-medium mb-5'>COMPANY</p>
//           <ul className='flex flex-col gap-2 text-gray-600'>
//             <li>Home</li>
//             <li>About us</li>
//             <li>Delivery</li>
//             <li>Privacy policy</li>
//           </ul>
//         </div>

//         <div>
//           <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
//           <ul className='flex flex-col gap-2 text-gray-600'>
//             <li>+1-212-456-7890</li>
//             <li>greatstackdev@gmail.com</li>
//           </ul>
//         </div>

//       </div>

//       <div>
//         <hr />
//         <p className='py-5 text-sm text-center'>Copyright 2024 @ Prescripto.com - All Right Reserved.</p>
//       </div>

//     </div>
//   )
// }

// export default Footer

import React from 'react'
import { assets } from '../assets/assets'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
          
          {/* Logo & Description */}
          <div>
            <img className="mb-5 w-40" src={assets.logo} alt="Logo" />
            <p className="text-gray-600 leading-6">
              Prescripto is your trusted platform for booking doctor appointments online. 
              Get connected with top specialists and manage your healthcare with ease.
            </p>

            {/* Social Media */}
            <div className="flex gap-4 mt-5">
              <a href="#" className="p-2 bg-white rounded-full shadow hover:bg-primary hover:text-white transition">
                <FaFacebookF size={16} />
              </a>
              <a href="#" className="p-2 bg-white rounded-full shadow hover:bg-primary hover:text-white transition">
                <FaTwitter size={16} />
              </a>
              <a href="#" className="p-2 bg-white rounded-full shadow hover:bg-primary hover:text-white transition">
                <FaInstagram size={16} />
              </a>
              <a href="#" className="p-2 bg-white rounded-full shadow hover:bg-primary hover:text-white transition">
                <FaLinkedinIn size={16} />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <p className="text-lg font-semibold mb-4">Company</p>
            <ul className="flex flex-col gap-2 text-gray-600">
              <li className="hover:text-primary cursor-pointer transition">Home</li>
              <li className="hover:text-primary cursor-pointer transition">About Us</li>
              <li className="hover:text-primary cursor-pointer transition">Delivery</li>
              <li className="hover:text-primary cursor-pointer transition">Privacy Policy</li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <p className="text-lg font-semibold mb-4">Get in Touch</p>
            <ul className="flex flex-col gap-2 text-gray-600">
              <li>+91 7233828073</li>
              <li>support@prescripto.com</li>
              <li>Emerald Garden kanpur Nagar, UP India</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <p className="text-lg font-semibold mb-4">Stay Updated</p>
            <p className="text-gray-600 mb-3">Subscribe to our newsletter for the latest updates & offers.</p>
            
            <form className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-primary w-full"
              />
              <button 
                type="submit" 
                className="bg-primary text-white px-6 py-2 rounded-full font-medium hover:bg-primary/90 transition w-full sm:w-auto"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-gray-200 pt-6 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Prescripto.com - All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
