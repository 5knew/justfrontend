import React, { useState } from 'react';
import axios from 'axios';
import {NavLink, useNavigate } from 'react-router-dom'
// Import useHistory hook from react-router-dom

const SigninForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigateTo = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/signin', { email, password });
      // Store tokens in local storage
      localStorage.setItem('accessToken', response.data.token);
      localStorage.setItem('refreshToken', response.data.refreshToken);
      // Redirect user to desired page
      navigateTo('/dashboard') // Replace '/dashboard' with the desired page URL
    } catch (error) {
      console.error("Sign-in error:", error.response);
      // Handle error, show error message, etc.
    }
  };

  return (
    <form className='loginsignup w-full h-[80vh] pb-8' onSubmit={handleSubmit}>
      <div className="loginsignup-container w-[580px] h-[600px] bg-white m-auto py-[40px] px-[60px]">
        <h1 className='my-5 text-3xl font-bold text-center'>Signin</h1>
        <div className="loginsignup-fields flex flex-col gap-[10px] my-3">
          <input type='email' placeholder='Your email address' className='h-18 w-full p-2 border border-black outline-none text-base rounded-3xl' value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type='password' placeholder='Password' className='h-18 w-full p-2 border border-black outline-none text-base rounded-3xl' value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type='submit' className='w-full h-16 bg-red-500 my-8 text-white rounded-full text-3xl font-bold cursor-pointer'>Continue</button>
        </div>
      </div>
    </form>
  );
};

export default SigninForm;
