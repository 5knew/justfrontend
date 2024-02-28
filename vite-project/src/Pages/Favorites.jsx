import {NavLink} from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'

export function Favourites(){
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div className='space--5 flex flex-col justify-center items-center'>
        <h1 className='text-xl font-semibold'>You don't have any favourite product</h1>
      <NavLink to='/'>
      <button className='bg-gray-800 text-white px-5 py-2 rounded-m drop-shadow-xl flex items-center space-x-2'>
        <span>Back to the shop</span>
        <BsArrowLeft/>
      </button>
      </NavLink>
      </div>
    </div>
  )
}

