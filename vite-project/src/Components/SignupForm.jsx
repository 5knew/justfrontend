import React, { useState } from 'react';
import axios from 'axios';

const SignupForm = () => {
  // State management for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [agreed, setAgreed] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    if (!agreed) {
      alert('You must agree to the terms of use and privacy policy');
      return;
    }

    try {
      // Replace with your actual API endpoint
      const response = await axios.post('http://localhost:8080/api/v1/auth/signup', {
        name,
        email,
        phoneNumber,
        password,
      });
      // Handle response, e.g., show success message, redirect user, etc.
      console.log(response.data);
    } catch (error) {
      console.error("Signup error:", error.response);
      // Handle error, e.g., show error message
    }
  };

  return (
    <form className='loginsignup w-full h-[80vh] pb-8' onSubmit={handleSubmit}>
      <div className="loginsignup-container w-[580px] h-[600px] bg-white m-auto py-10 px-15">
        <h1 className='my-5 text-3xl font-bold text-center'>Signup</h1>
        <div className="loginsignup-fields flex flex-col gap-4 my-3">
          <input type='text' placeholder='Your name' className='h-18 w-full p-2 border border-black outline-none text-base rounded-3xl' value={name} onChange={(e) => setName(e.target.value)} />
          <input type='email' placeholder='Your email address' className='h-18 w-full p-2 border border-black outline-none text-base rounded-3xl' value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type='tel' placeholder='Phone Number' className='h-18 w-full p-2 border border-black outline-none text-base rounded-3xl' value={phoneNumber} onChange={(e) => setPhone(e.target.value)} />
          <input type='password' placeholder='Password' className='h-18 w-full p-2 border border-black outline-none text-base rounded-3xl' value={password} onChange={(e) => setPassword(e.target.value)} />
          <div className="flex items-center gap-2">
            <input type='checkbox' id='agreement' checked={agreed} onChange={(e) => setAgreed(e.target.checked)} />
            <label htmlFor='agreement' className='text-sm'>By continuing, I agree to the terms of use & privacy policy</label>
          </div>
          <button type='submit' className='w-full h-16 bg-red-500 my-8 text-white rounded-full text-xl font-bold cursor-pointer'>Continue</button>
        </div>
      </div>
    </form>
  );
}

export default SignupForm;
