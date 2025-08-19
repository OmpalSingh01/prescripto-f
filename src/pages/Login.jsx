// import React, { useContext, useEffect, useState } from 'react'
// import { AppContext } from '../context/AppContext'
// import axios from 'axios'
// import { toast } from 'react-toastify'
// import { useNavigate } from 'react-router-dom'

// const Login = () => {

//   const [state, setState] = useState('Sign Up')

//   const [name, setName] = useState('')
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')

//   const navigate = useNavigate()
//   const { backendUrl, token, setToken } = useContext(AppContext)

//   const onSubmitHandler = async (event) => {
//     event.preventDefault();

//     if (state === 'Sign Up') {

//       const { data } = await axios.post(backendUrl + '/api/user/register', { name, email, password })

//       if (data.success) {
//         localStorage.setItem('token', data.token)
//         setToken(data.token)
//       } else {
//         toast.error(data.message)
//       }

//     } else {

//       const { data } = await axios.post(backendUrl + '/api/user/login', { email, password })

//       if (data.success) {
//         localStorage.setItem('token', data.token)
//         setToken(data.token)
//       } else {
//         toast.error(data.message)
//       }

//     }

//   }

//   useEffect(() => {
//     if (token) {
//       navigate('/')
//     }
//   }, [token])

//   return (
//     <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
//       <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg'>
//         <p className='text-2xl font-semibold'>{state === 'Sign Up' ? 'Create Account' : 'Login'}</p>
//         <p>Please {state === 'Sign Up' ? 'sign up' : 'log in'} to book appointment</p>
//         {state === 'Sign Up'
//           ? <div className='w-full '>
//             <p>Full Name</p>
//             <input onChange={(e) => setName(e.target.value)} value={name} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="text" required />
//           </div>
//           : null
//         }
//         <div className='w-full '>
//           <p>Email</p>
//           <input onChange={(e) => setEmail(e.target.value)} value={email} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="email" required />
//         </div>
//         <div className='w-full '>
//           <p>Password</p>
//           <input onChange={(e) => setPassword(e.target.value)} value={password} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="password" required />
//         </div>
//         <button className='bg-primary text-white w-full py-2 my-2 rounded-md text-base'>{state === 'Sign Up' ? 'Create account' : 'Login'}</button>
//         {state === 'Sign Up'
//           ? <p>Already have an account? <span onClick={() => setState('Login')} className='text-primary underline cursor-pointer'>Login here</span></p>
//           : <p>Create an new account? <span onClick={() => setState('Sign Up')} className='text-primary underline cursor-pointer'>Click here</span></p>
//         }
//       </div>
//     </form>
//   )
// }

// export default Login

import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [mode, setMode] = useState('Sign Up'); // 'Sign Up' or 'Login'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { backendUrl, token, setToken } = useContext(AppContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const endpoint =
        mode === 'Sign Up' ? '/api/user/register' : '/api/user/login';
      const payload =
        mode === 'Sign Up'
          ? { name: formData.name, email: formData.email, password: formData.password }
          : { email: formData.email, password: formData.password };

      const { data } = await axios.post(backendUrl + endpoint, payload);

      if (data.success) {
        localStorage.setItem('token', data.token);
        setToken(data.token);
        toast.success(`${mode} successful!`);
        navigate('/');
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) navigate('/');
  }, [token, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-6 sm:p-10 max-w-md w-full"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          {mode === 'Sign Up' ? 'Create Account' : 'Login'}
        </h2>
        <p className="text-gray-600 mb-6">
          Please {mode === 'Sign Up' ? 'sign up' : 'log in'} to book an appointment
        </p>

        {mode === 'Sign Up' && (
          <div className="mb-4">
            <label className="block text-gray-700 mb-1" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              required
            />
          </div>
        )}

        <div className="mb-4">
          <label className="block text-gray-700 mb-1" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-primary text-white py-2 rounded-md text-lg font-medium hover:bg-primary-dark transition"
        >
          {loading ? 'Processing...' : mode === 'Sign Up' ? 'Create Account' : 'Login'}
        </button>

        <p className="mt-4 text-center text-gray-600">
          {mode === 'Sign Up'
            ? 'Already have an account?'
            : 'Create a new account?'}{' '}
          <span
            onClick={() => setMode(mode === 'Sign Up' ? 'Login' : 'Sign Up')}
            className="text-primary font-medium cursor-pointer hover:underline"
          >
            {mode === 'Sign Up' ? 'Login here' : 'Click here'}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
