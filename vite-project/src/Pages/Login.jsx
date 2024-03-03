import React from 'react'
import SignupForm from '../Components/SignupForm'
import SigninForm from '../Components/SigninForm'


export function Login(){
  return (
    <div class='ml-[80px] relative text-ap flex gap-2 justify-center items-center h-screen'>
    <div class='p-4'>
        <SigninForm/>
    </div>

    {/* <!-- Vertical Line --> */}
    <div class='bg-gray-300 h-[50%] w-[1px]'></div>

    <div class='p-4'>
        <SignupForm/>
    </div>
</div>

  )
}

export default Login