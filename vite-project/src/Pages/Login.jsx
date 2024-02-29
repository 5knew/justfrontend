import React from 'react'
import SignupForm from '../Components/SignupForm'
import SigninForm from '../Components/SigninForm'

export function Login(){
  return (
    <div>
        <div>
            <SigninForm/>
        </div>
        <div>
            <SignupForm/>
        </div>
    </div>
  )
}

export default Login