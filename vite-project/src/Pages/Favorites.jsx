import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import { FavoritesContext } from '../Components/FavoritesItems';
import { IoHeartOutline } from 'react-icons/io5';
import { CiShoppingCart } from 'react-icons/ci';

export function Favourites() {
  const { favProducts } = useContext(FavoritesContext);

  return (
    <div className=' ml-[80px] max-w-6xl mx-auto p-5'>
      <h1 className='text-2xl font-bold text-center mb-8'>Favourite Products</h1>
      {favProducts.length === 0 ? (
        <div className='text-center'>
          <h2 className='text-xl font-semibold'>You don't have any favourite products</h2>
          <NavLink to='/' className='inline-block bg-gray-800 text-white px-6 py-3 rounded-md mt-4'>
            <BsArrowLeft className='inline mr-2' /> Back to the shop
          </NavLink>
        </div>
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {favProducts.map(product => (
            <div key={product.id} className='border bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300'>
              <img src={product.img} alt={product.title} className='w-full h-48 object-cover'/>
              <div className='p-4'>
                <h3 className='text-lg font-semibold mb-2'>{product.title}</h3>
                <p className='text-gray-600 text-sm mb-4'>{product.description}</p>
                <div className='flex justify-between items-center'>
                  <span className='text-xl font-bold'>${product.price}</span>
                  <button className='text-red-500 hover:text-red-600 transition-colors duration-300'>
                  <div className='flex gap-5'>
                    <IoHeartOutline size='1.5rem' />
                    <CiShoppingCart size={'1.5rem'}/>
                  </div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


