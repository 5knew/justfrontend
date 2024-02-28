import {useState} from 'react'
import {CiSearch, CiShoppingCart} from 'react-icons/ci'
import watch from '../assets/watch.jpg'
import laptop from '../assets/laptop.jpg'
import keyboard from '../assets/keyboard.jpg'
import sunGlass from '../assets/glasses.jpeg'
import leatherWatch from '../assets/leatherWatch.jpg'
import mouse from '../assets/mouse.jpg'
import monitor from '../assets/monitor.jpg'

const Main = () => {
  let Products = [
    {
      img: sunGlass,
      title: 'Sun Glasses',
      description: 'lorem ipsum dolar',
      price:40
    },
    {
      img: keyboard,
      title: 'Black KeyBoard',
      description: 'lorem ipsum dolar',
      price:40
    },
    {
      img: watch,
      title: 'Sun Glasses',
      description: 'lorem ipsum dolar',
      price:40
    },
    {
      img: mouse,
      title: 'Black Mouse',
      description: 'lorem ipsum dolar',
      price:40
    },
    {
      img: laptop,
      title: 'Acer Laptop',
      description: 'lorem ipsum dolar',
      price:999,
    },
    {
      img: leatherWatch,
      title: 'Sun Glasses',
      description: 'lorem ipsum dolar',
      price:40
    },
    {
      img: monitor,
      title: 'One plus',
      description: 'lorem ipsum dolar',
      price:40
    },
    {
      img: leatherWatch,
      title: 'Sun Glasses',
      description: 'lorem ipsum dolar',
      price:40
    }

  ]
  const [filteredProducts, setFilteredProducts] = useState(Products)
  const searchHandler = (e)=>{
    const filteredArray = Products.filter((product) => product.title.toLocaleLowerCase().includes(e.target.value))
    if(filteredArray.length != 0){
      setFilteredProducts(filteredArray);
    }
  }
  return (
    // header part
    <div className='w-full relative'>
      <div className='sticky top-0 z-10'>
        <div className='header flex justify-between items-center p-4 bg-white'>
          <h1 className='text-3x1 font-bold'> Mebeli Shop</h1>
          <div className="search flex justify-between items-center px-5 py-2 bg-gray-100 rounded">
            <input type="text" placeholder='Search produc' className='bg-transparent outline-0'
            onChange={searchHandler}/>
            <button onClick={()=> searchHandler()}><CiSearch/></button>
          </div>
        </div>
        </div>
{/* categories */}
        <div className="categories justify-between w-full flex px-2 py-10">
          <div className='bg-black text-white px-5 py-2 rounded-full drop-shadow-xl'>
            <p>Watches</p>
          </div>
          <div className='bg-white text-black px-5 py-2 rounded-full drop-shadow-xl'>
            <p>Laptops</p>
          </div>
          <div className='bg-white text-black px-5 py-2 rounded-full drop-shadow-xl'>
            <p>Monitors</p>
          </div>
          <div className='bg-white text-black px-5 py-2 rounded-full drop-shadow-xl'>
            <p>Mouses</p>
          </div>
          <div className='bg-white text-black px-5 py-2 rounded-full drop-shadow-xl'>
            <p>Glasses</p>
          </div>
          <div className='bg-white text-black px-5 py-2 rounded-full drop-shadow-xl'>
            <p>KeyBoards</p>
          </div>
          <div className='bg-white text-black px-5 py-2 rounded-full drop-shadow-xl'>
            <p>Laptops</p>
          </div>
          <div className='bg-white text-black px-5 py-2 rounded-full drop-shadow-xl'>
            <p>Laptops</p>
          </div>
          <div className='bg-white text-black px-5 py-2 rounded-full drop-shadow-xl'>
            <p>Laptops</p>
          </div>
          <div className='bg-white text-black px-5 py-2 rounded-full drop-shadow-xl'>
            <p>Laptops</p>
          </div>
          <div className='bg-white text-black px-5 py-2 rounded-full drop-shadow-xl'>
            <p>Watches</p>
          </div>
          <div className='bg-white text-black px-5 py-2 rounded-full drop-shadow-xl'>
            <p>Laptops</p>
          </div>
    
       
        </div>
      
      {/* products here */}
      <div className="products grid grid-cols-2 xl:grid-cols-5 lg:grid-cols-3 gap-9 p-4 z-20">
        {filteredProducts && filteredProducts.map((product, idx)=> {
          return(
            <div key={idx} className="product h-[300px] bg-white drop-shadow-2xl p-2 border">
          <img src={product.img} alt='' className='w-full h-[60%] object-cover p-2'/>
          <div className='m-2 bg-gray-100 p-2'>
            <h1 className='text-xl font-semibold'>{product.title}</h1>
            <p className='text-sm'>{product.description}</p>
            <div className='flex justify-between items-center'>
              <p className='text-xl font-bold'> ${product.price}.00</p>
              <CiShoppingCart size={'1.4rem'}/>
            </div>
          </div>
        </div>
          )
        })}
        
      </div>
    </div>
  )
}

export default Main