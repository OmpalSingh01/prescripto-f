// import React, { useContext, useState } from 'react'
// import { assets } from '../assets/assets'
// import { NavLink, useNavigate } from 'react-router-dom'
// import { AppContext } from '../context/AppContext'

// const Navbar = () => {

//   const navigate = useNavigate()

//   const [showMenu, setShowMenu] = useState(false)
//   const { token, setToken, userData } = useContext(AppContext)

//   const logout = () => {
//     localStorage.removeItem('token')
//     setToken(false)
//     navigate('/login')
//   }



//   return (
//     <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-[#ADADAD]'>
//       <img onClick={() => navigate('/')} className='w-44 cursor-pointer' src={assets.logo} alt="" />
//       <ul className='md:flex items-start gap-5 font-medium hidden'>
//         <NavLink to='/' >
//           <li className='py-1'>HOME</li>
//           <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
//         </NavLink>
//         <NavLink to='/doctors' >
//           <li className='py-1'>ALL DOCTORS</li>
//           <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
//         </NavLink>
//         <NavLink to='/about' >
//           <li className='py-1'>ABOUT</li>
//           <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
//         </NavLink>
//         <NavLink to='/contact' >
//           <li className='py-1'>CONTACT</li>
//           <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
//         </NavLink>
//       </ul>

//       <div className='flex items-center gap-4 '>
//         {
//           token && userData
//             ? <div className='flex items-center gap-2 cursor-pointer group relative'>
//               <img className='w-8 rounded-full' src={userData.image} alt="" />
//               <img className='w-2.5' src={assets.dropdown_icon} alt="" />
//               <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
//                 <div className='min-w-48 bg-gray-50 rounded flex flex-col gap-4 p-4'>
//                   <p onClick={() => navigate('/my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
//                   <p onClick={() => navigate('/my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
//                   <p onClick={logout} className='hover:text-black cursor-pointer'>Logout</p>
//                 </div>
//               </div>
//             </div>
//             : <button onClick={() => navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'>Create account</button>
//         }
//         <img onClick={() => setShowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon} alt="" />

//         {/* ---- Mobile Menu ---- */}
//         <div className={`md:hidden ${showMenu ? 'fixed w-full' : 'h-0 w-0'} right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
//           <div className='flex items-center justify-between px-5 py-6'>
//             <img src={assets.logo} className='w-36' alt="" />
//             <img onClick={() => setShowMenu(false)} src={assets.cross_icon} className='w-7' alt="" />
//           </div>
//           <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
//             <NavLink onClick={() => setShowMenu(false)} to='/'><p className='px-4 py-2 rounded full inline-block'>HOME</p></NavLink>
//             <NavLink onClick={() => setShowMenu(false)} to='/doctors' ><p className='px-4 py-2 rounded full inline-block'>ALL DOCTORS</p></NavLink>
//             <NavLink onClick={() => setShowMenu(false)} to='/about' ><p className='px-4 py-2 rounded full inline-block'>ABOUT</p></NavLink>
//             <NavLink onClick={() => setShowMenu(false)} to='/contact' ><p className='px-4 py-2 rounded full inline-block'>CONTACT</p></NavLink>
//           </ul>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Navbar



// import React, { useContext, useState, useRef, useEffect } from 'react'
// import { assets } from '../assets/assets'
// import { NavLink, useNavigate } from 'react-router-dom'
// import { AppContext } from '../context/AppContext'

// const Navbar = () => {
//   const navigate = useNavigate()
//   const [showMenu, setShowMenu] = useState(false)
//   const { token, setToken, userData } = useContext(AppContext)
//   const menuRef = useRef()

//   const logout = () => {
//     localStorage.removeItem('token')
//     setToken(false)
//     navigate('/login')
//   }

//   const navLinks = [
//     { path: '/', label: 'HOME' },
//     { path: '/doctors', label: 'DOCTORS' },
//     { path: '/about', label: 'ABOUT' },
//     { path: '/contact', label: 'CONTACT' },
//   ]

//   // Close mobile menu when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (menuRef.current && !menuRef.current.contains(event.target)) {
//         setShowMenu(false)
//       }
//     }
//     if (showMenu) {
//       document.addEventListener('mousedown', handleClickOutside)
//     }
//     return () => document.removeEventListener('mousedown', handleClickOutside)
//   }, [showMenu])

//   return (
//     <header className="w-full sticky top-0 z-50">
//       <div className="backdrop-blur-md bg-white/80 shadow-lg border-b border-white/20">
//         <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-5 md:px-10">
          
//           {/* Logo */}
//           <img 
//             onClick={() => navigate('/')} 
//             className="w-40 cursor-pointer hover:scale-105 transition-transform duration-300" 
//             src={assets.logo} 
//             alt="Logo" 
//           />

//           {/* Desktop Menu */}
//           <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
//             {navLinks.map((link, idx) => (
//               <NavLink
//                 key={idx}
//                 to={link.path}
//                 className={({ isActive }) =>
//                   `relative py-2 transition duration-300 group
//                    ${isActive ? "text-primary" : "text-gray-700 hover:text-primary"}`
//                 }
//               >
//                 {link.label}
//                 <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
//               </NavLink>
//             ))}
//           </nav>

//           {/* Right Side */}
//           <div className="flex items-center gap-4">
//             {token && userData ? (
//               <div className="relative group">
//                 <div className="flex items-center gap-2 cursor-pointer">
//                   <img className="w-9 h-9 rounded-full border border-gray-300 shadow-sm" src={userData.image} alt="User" />
//                   <img className="w-3" src={assets.dropdown_icon} alt="Dropdown" />
//                 </div>

//                 {/* Dropdown */}
//                 <div className="absolute right-0 mt-3 w-56 bg-white/90 backdrop-blur-lg shadow-xl rounded-2xl p-4 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
//                   <p onClick={() => navigate('/my-profile')} className="hover:text-primary cursor-pointer py-1 transition">My Profile</p>
//                   <p onClick={() => navigate('/my-appointments')} className="hover:text-primary cursor-pointer py-1 transition">My Appointments</p>
//                   <p onClick={logout} className="hover:text-primary cursor-pointer py-1 transition">Logout</p>
//                 </div>
//               </div>
//             ) : (
//               <button 
//                 onClick={() => navigate('/login')} 
//                 className="bg-primary text-white px-6 py-2 rounded-full font-medium shadow-md hover:shadow-lg hover:scale-105 transition hidden md:block"
//               >
//                 Create Account
//               </button>
//             )}

//             {/* Mobile Menu Icon */}
//             <img 
//               onClick={() => setShowMenu(true)} 
//               className="w-7 md:hidden cursor-pointer hover:scale-110 transition-transform" 
//               src={assets.menu_icon} 
//               alt="Menu" 
//             />
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu Overlay with Fade */}
//       <div
//         className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300
//                     ${showMenu ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
//         onClick={() => setShowMenu(false)}
//       />

//       {/* Mobile Slide Menu */}
//       <div
//         ref={menuRef}
//         className={`fixed top-5 bg-white shadow-xl rounded-xl z-50
//                     w-52 max-w-[80%] p-3
//                     transition-all duration-500 ease-[cubic-bezier(0.77,0,0.175,1)]
//                     ${showMenu ? "right-4" : "right-[-280px]"}`}
//       >
//         {/* Header */}
//         <div className="flex items-center justify-between px-3 py-4 border-b border-gray-200">
//           <img src={assets.logo} className="w-28" alt="Logo" />
//           <img onClick={() => setShowMenu(false)} src={assets.cross_icon} className="w-6 cursor-pointer hover:rotate-90 transition-transform" alt="Close" />
//         </div>

//         {/* Links */}
//         <ul className="flex flex-col px-3 mt-4 gap-1 text-base font-medium">
//           {navLinks.map((link, idx) => (
//             <NavLink 
//               key={idx} 
//               to={link.path} 
//               onClick={() => setShowMenu(false)} 
//               className="py-2 px-3 rounded-md hover:bg-gray-100 transition text-sm"
//             >
//               {link.label}
//             </NavLink>
//           ))}

//           {!token && (
//             <button 
//               onClick={() => { setShowMenu(false); navigate('/login') }} 
//               className="bg-primary text-white px-4 py-2 rounded-full font-medium mt-2 shadow-sm hover:scale-105 transition text-sm"
//             >
//               Create Account
//             </button>
//           )}
//         </ul>
//       </div>
//     </header>
//   )
// }

// export default Navbar


import React, { useContext, useState, useRef, useEffect } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Navbar = () => {
  const navigate = useNavigate()
  const [showMenu, setShowMenu] = useState(false)
  const { token, setToken, userData } = useContext(AppContext)
  const menuRef = useRef()

  const logout = () => {
    localStorage.removeItem('token')
    setToken(false)
    navigate('/login')
  }

  const navLinks = [
    { path: '/', label: 'HOME' },
    { path: '/doctors', label: 'DOCTORS' },
    { path: '/about', label: 'ABOUT' },
    { path: '/contact', label: 'CONTACT' },
  ]

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false)
      }
    }
    if (showMenu) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [showMenu])

  return (
    <header className="w-full sticky top-0 z-50">
      <div className="backdrop-blur-md bg-white/80 shadow-lg border-b border-white/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-5 md:px-10">
          
          {/* Logo */}
          <img 
            onClick={() => navigate('/')} 
            className="w-40 cursor-pointer hover:scale-105 transition-transform duration-300" 
            src={assets.logo} 
            alt="Logo" 
          />

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link, idx) => (
              <NavLink
                key={idx}
                to={link.path}
                className={({ isActive }) =>
                  `relative py-2 transition duration-300 group
                   ${isActive ? "text-primary" : "text-gray-700 hover:text-primary"}`
                }
              >
                {link.label}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {token && userData ? (
              <div className="relative group">
                <div className="flex items-center gap-2 cursor-pointer">
                  <img className="w-9 h-9 rounded-full border border-gray-300 shadow-sm" src={userData.image} alt="User" />
                  <img className="w-3" src={assets.dropdown_icon} alt="Dropdown" />
                </div>

                {/* Dropdown */}
                <div className="absolute right-0 mt-3 w-56 bg-white/90 backdrop-blur-lg shadow-xl rounded-2xl p-4 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                  <p onClick={() => navigate('/my-profile')} className="hover:text-primary cursor-pointer py-1 transition">My Profile</p>
                  <p onClick={() => navigate('/my-appointments')} className="hover:text-primary cursor-pointer py-1 transition">My Appointments</p>
                  <p onClick={logout} className="hover:text-primary cursor-pointer py-1 transition">Logout</p>
                </div>
              </div>
            ) : (
              <button 
                onClick={() => navigate('/login')} 
                className="bg-primary text-white px-6 py-2 rounded-full font-medium shadow-md hover:shadow-lg hover:scale-105 transition hidden md:block"
              >
                Create Account
              </button>
            )}

            {/* Mobile Menu Icon */}
            <img 
              onClick={() => setShowMenu(true)} 
              className="w-7 md:hidden cursor-pointer hover:scale-110 transition-transform" 
              src={assets.menu_icon} 
              alt="Menu" 
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay with Fade */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300
                    ${showMenu ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setShowMenu(false)}
      />

      {/* Mobile Slide Menu */}
      <div
        ref={menuRef}
        className={`fixed top-5 bg-white shadow-xl rounded-xl z-50
                    w-52 max-w-[80%] p-3
                    transition-all duration-500 ease-[cubic-bezier(0.77,0,0.175,1)]
                    ${showMenu ? "right-4" : "right-[-280px]"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-3 py-4 border-b border-gray-200">
          <img src={assets.logo} className="w-28" alt="Logo" />
          <img onClick={() => setShowMenu(false)} src={assets.cross_icon} className="w-6 cursor-pointer hover:rotate-90 transition-transform" alt="Close" />
        </div>

        {/* Links */}
        <ul className="flex flex-col px-3 mt-4 gap-1 text-base font-medium">
          {navLinks.map((link, idx) => (
            <NavLink 
              key={idx} 
              to={link.path} 
              onClick={() => setShowMenu(false)} 
              className="py-2 px-3 rounded-md hover:bg-gray-100 transition text-sm"
            >
              {link.label}
            </NavLink>
          ))}

          {!token && (
            <button 
              onClick={() => { setShowMenu(false); navigate('/login') }} 
              className="bg-primary text-white px-4 py-2 rounded-full font-medium mt-2 shadow-sm hover:scale-105 transition text-sm"
            >
              Create Account
            </button>
          )}
        </ul>
      </div>
    </header>
  )
}

export default Navbar
