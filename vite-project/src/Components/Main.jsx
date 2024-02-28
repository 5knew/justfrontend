import {useState} from 'react'
import {CiSearch, CiShoppingCart} from 'react-icons/ci'
import logo from '../assets/logos/logo.png'
import bedroom1 from '../assets/bedroom/1.jpg'
import bedroom2 from '../assets/bedroom/2.jpg'
import bedroom3 from '../assets/bedroom/3.jpg'
import diningchairs1 from '../assets/diningchairs/1.jpg'
import diningchairs2 from '../assets/diningchairs/2.jpg'
import diningchairs3 from '../assets/diningchairs/3.jpg'
import diningroom1  from '../assets/diningroom/1.jpg'
import diningroom2  from '../assets/diningroom/2.jpg'
import diningroom3  from '../assets/diningroom/3.jpg'
import kitchen1 from '../assets/kitchen/1.jpg'
import kitchen2 from '../assets/kitchen/2.jpg'
import kitchen3 from '../assets/kitchen/3.jpg'
import livingroom1 from '../assets/livingroom/1.jpg'
import livingroom2 from '../assets/livingroom/2.jpg'
import livingroom3 from '../assets/livingroom/3.jpg'

const Main = () => {
  //list of products here
  let Products = [
     {
      img: bedroom1,
      title: 'Cozy Bedroom Set',
      description: 'Transform your sleeping space into a dreamy escape with this cozy bedroom set.',
      price: 1200
    },
    {
      img: bedroom2,
      title: 'Modern Bedroom Suite',
      description: 'Sleek and modern, this bedroom suite offers comfort with a contemporary edge.',
      price: 1500
    },
    {
      img: bedroom3,
      title: 'Classic Elegance Bedroom',
      description: 'Experience timeless elegance with this classic bedroom design.',
      price: 1800
    },
    {
      img: diningchairs1,
      title: 'Chic Dining Chairs',
      description: 'Add a touch of chic to your dining area with these stylish chairs.',
      price: 300
    },
    {
      img: diningchairs2,
      title: 'Contemporary Dining Seating',
      description: 'Contemporary design meets comfort in these unique dining chairs.',
      price: 350
    },
    {
      img: diningchairs3,
      title: 'Minimalist Dining Chairs',
      description: 'Simplicity at its best with these minimalist dining chairs.',
      price: 250
    },
    {
      img: diningroom1,
      title: 'Elegant Dining Room Set',
      description: 'Dine in elegance with this beautifully crafted dining room set.',
      price: 2200
    },
    {
      img: diningroom2,
      title: 'Rustic Dining Room Collection',
      description: 'Bring warmth to your meals with this rustic dining room collection.',
      price: 2000
    },
    {
      img: diningroom3,
      title: 'Modern Dining Experience',
      description: 'Elevate your dining experience with this sleek and modern set.',
      price: 2500
    },
    {
      img: kitchen1,
      title: 'Chef\'s Delight Kitchen',
      description: 'Make every meal a masterpiece with this chef-inspired kitchen setup.',
      price: 3000
    },
    {
      img: kitchen2,
      title: 'Compact Kitchen Solution',
      description: 'Perfect for small spaces, this kitchen setup maximizes efficiency without sacrificing style.',
      price: 1800
    },
    {
      img: kitchen3,
      title: 'Rustic Kitchen Charm',
      description: 'Add a touch of rustic charm to your cooking space with this unique kitchen design.',
      price: 2500
    },
    {
      img: livingroom1,
      title: 'Luxury Living Room',
      description: 'Sink into luxury with this plush living room set.',
      price: 3500
    },
    {
      img: livingroom2,
      title: 'Contemporary Living Space',
      description: 'Modern and inviting, this living space setup is sure to impress.',
      price: 3200
    },
    {
      img: livingroom3,
      title: 'Classic Comfort Living Room',
      description: 'Classic comfort meets modern style in this cozy living room setup.',
      price: 3000
    }
  ];
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
  
  return (
    // header part
    <div className='w-full relative'>
      <div className='sticky top-0 z-10'>
        <div className='header flex justify-between items-center p-4 bg-white'>
        <div className='flex items-center'>
        <img className='w-[100px] h-[50px] mr-2' src={logo} alt='logo'/>
          <h1 className='text-2 xl font-bold uppercase'> FurnMarket</h1>
          </div>
          <div className="search flex justify-between items-center px-5 py-2 bg-gray-100 rounded">
            <input type="text" placeholder='Search produc' className='bg-transparent outline-0'
            onChange={searchHandler}/>
            <button onClick={()=> searchHandler()}><CiSearch/></button>
          </div>
        </div>
        </div>
{/* categories */}
        <div className="categories bg-white justify-between space-x-8  w-full flex px-2 py-10">
          <div className='bg-black text-white px-5 py-2 rounded-full drop-shadow-xl'>
            <p>Bedroom</p>
          </div>
          <div className='bg-white text-black px-5 py-2 rounded-full drop-shadow-xl'>
            <p>Living Room</p>
          </div>
          <div className='bg-white text-black px-5 py-2 rounded-full drop-shadow-xl'>
            <p>Dining Room</p>
          </div>
          <div className='bg-white text-black px-5 py-2 rounded-full drop-shadow-xl'>
            <p>Kitchen</p>
          </div>
          <div className='bg-white text-black px-5 py-2 rounded-full drop-shadow-xl'>
            <p>Dining Chairs</p>
          </div>
          <div className='bg-white text-black px-5 py-2 rounded-full drop-shadow-xl'>
            <p>Bar Stools</p>
          </div>
          <div className='bg-white text-black px-5 py-2 rounded-full drop-shadow-xl'>
            <p>Office</p>
          </div>
          <div className='bg-white text-black px-5 py-2 rounded-full drop-shadow-xl'>
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
            <p className='text-xl font-bold'>${product.price}.00</p>
            <CiShoppingCart size={'1.4rem'}/>
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