import React, { useState, useContext } from 'react';
import {CiSearch, CiShoppingCart} from 'react-icons/ci'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logos/logo.png'
import { IoHeartOutline } from 'react-icons/io5'
import { FavoritesContext } from './FavoritesItems';
import { Products } from './Products';

const Main = () => {

  let favProducts = [];

  //FavoritesContext addToFavorite
  const { addToFavorite } = useContext(FavoritesContext);

  //filtering products states
  const [filteredProducts, setFilteredProducts] = useState(Products)
  const searchHandler = (e) => {
    const searchTerm = e.target.value.toLowerCase(); 
    if (searchTerm.trim() === '') {
      setFilteredProducts(Products); 
    } else {
      const filteredArray = Products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm)
      );
      setFilteredProducts(filteredArray);
    }
  };
  const [activeCategory, setActiveCategory] = useState('all');

  const filterProductsByCategory = (category) => {
    setActiveCategory(category); 
    if (category === 'all') {
      setFilteredProducts(Products);
    } else {
      const filteredArray = Products.filter(product => product.category === category);
      setFilteredProducts(filteredArray);
    }
  };
  

  
  return (
    // header part
    <div className='w-full relative'>
      <div className='sticky top-0 z-10'>
        <div className='header flex justify-between items-center p-4 bg-white'>
        <div className='flex items-center'>
        <img className='w-[100px] h-[50px] mr-2' src={logo} alt='logo'/>
          <h1 className='text-2 xl font-bold uppercase'> FurnMarket</h1>
          </div>
          <NavLink to={'/login'}>
          <div className='right-0 w-[100px]"'> 
          <button className='border rounded p-2 outline rounded-[30%]'>Signin</button>
            <button  className='border rounded p-2 outline rounded-[30%]'>Signup</button>
          </div>
          </NavLink>
          <div className="search flex justify-between items-center px-5 py-2 bg-gray-100 rounded">
            <input type="text" placeholder='Search product' className='bg-transparent outline-0'
            onChange={searchHandler}/>
            <button onClick={()=> searchHandler()}><CiSearch/></button>
          </div>
        </div>
        </div>
{/* categories */}
        <div className="categories bg-white justify-between space-x-8 w-full flex px-2 py-10">
          <div className='bg-black text-white px-5 py-2 rounded-full drop-shadow-xl cursor-pointer'
              onClick={() => filterProductsByCategory('all')}
              style={{ backgroundColor: activeCategory === 'all' ? 'black' : 'white', color: activeCategory === 'all' ? 'white' : 'black' }}>All</div>
          <div className='bg-white text-black px-5 py-2 rounded-full drop-shadow-xl' onClick={() => filterProductsByCategory('bedroom')}
          style={{ backgroundColor: activeCategory === 'bedroom' ? 'black' : 'white', color: activeCategory === 'bedroom' ? 'white' : 'black' }}>
            <p>Bedroom</p>
          </div>
          <div className='bg-white text-black px-5 py-2 rounded-full drop-shadow-xl' onClick={() => filterProductsByCategory('livingroom')}
          style={{ backgroundColor: activeCategory === 'livingroom' ? 'black' : 'white', color: activeCategory === 'livingroom' ? 'white' : 'black' }}>
            <p>Living Room</p>
          </div>
          <div className='bg-white text-black px-5 py-2 rounded-full drop-shadow-xl' onClick={() => filterProductsByCategory('diningroom')}
          style={{ backgroundColor: activeCategory === 'diningroom' ? 'black' : 'white', color: activeCategory === 'diningroom' ? 'white' : 'black' }}>
            <p>Dining Room</p>
          </div>
          <div className='bg-white text-black px-5 py-2 rounded-full drop-shadow-xl' onClick={() => filterProductsByCategory('kitchen')}
          style={{ backgroundColor: activeCategory === 'kitchen' ? 'black' : 'white', color: activeCategory === 'kitchen' ? 'white' : 'black' }}>
            <p>Kitchen</p>
          </div>
          <div className='bg-white text-black px-5 py-2 rounded-full drop-shadow-xl' onClick={()=> filterProductsByCategory('diningchairs')}
          style={{ backgroundColor: activeCategory === 'diningchairs' ? 'black' : 'white', color: activeCategory === 'diningchairs' ? 'white' : 'black' }}>
            <p>Dining Chairs</p>
          </div>
          <div className='bg-white text-black px-5 py-2 rounded-full drop-shadow-xl' onClick={()=> filterProductsByCategory('barstools')}
          style={{ backgroundColor: activeCategory === 'barstools' ? 'black' : 'white', color: activeCategory === 'barstools' ? 'white' : 'black' }}>
            <p>Bar Stools</p>
          </div>
          <div className='bg-white text-black px-5 py-2 rounded-full drop-shadow-xl' onClick={()=> filterProductsByCategory('office')}
          style={{ backgroundColor: activeCategory === 'office' ? 'black' : 'white', color: activeCategory === 'office' ? 'white' : 'black' }}>
            <p>Office</p>
          </div>
          <div className='bg-white text-black px-5 py-2 rounded-full drop-shadow-xl' onClick={()=> filterProductsByCategory('oakflooring')}
          style={{ backgroundColor: activeCategory === 'oakflooring' ? 'black' : 'white', color: activeCategory === 'oakflooring' ? 'white' : 'black' }}>
            <p>Oak Flooring</p>
          </div>
        
    
       
        </div>
      
      {/* products here */}
      <div className="products grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 gap-9 p-4 z-20">
  {filteredProducts && filteredProducts.map((product, idx) => {
    return (
      <div key={idx} className="product h-[450px] bg-white drop-shadow-2xl p-2 border">
        <img src={product.img} alt='' className='w-full h-[60%] object-cover p-2'/>
        <div className='m-2 bg-gray-100 p-2'>
          <h1 className='text-xl font-semibold'>{product.title}</h1>
          {/* Truncate the description to a certain length */}
          <p className='text-sm'>{product.description.length > 100 ? product.description.substring(0, 100) + '...' : product.description}</p>
          <div className='flex justify-between items-center'>
            <p className='text-xl font-bold'>${product.price}</p>
            <div className='flex gap-4'>
            <button onClick={() => {
  const productToAdd = Products.find((p) => p.id === product.id); // Используйте 'p' вместо 'product' внутри функции find
  if (productToAdd) {
    addToFavorite(productToAdd);
  }
}}>

              <IoHeartOutline size={`1.4rem`}  />
            </button>


    

            <CiShoppingCart size={'1.5rem'}/>
            
            </div>
          </div>
        </div>
      </div>
    );
  })}
</div>

    </div>
  )
}
export default Main