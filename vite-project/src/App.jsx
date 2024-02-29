import { useState} from 'react'
import Home from './Pages/Home'
import {Cart} from './Pages/Cart'
import {Favourites} from './Pages/Favorites'
import {Order} from './Pages/Order'
import {Login} from './Pages/Login'
//sideBar
import SideBar from './Components/SideBar'
//react router dom
import{
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Outlet,
  Route
}from'react-router-dom'


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root/>}>
        <Route index element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/favs' element={<Favourites/>}/>
        <Route path='/order' element={<Order/>}/>
        <Route path='/login' element={<Login/>}/>
      </Route>
    )
  )

  return (
    <div className='App'>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
const Root = ()=>{
  return(
    <>
    <div>
      <SideBar/>
    </div>
    
    <div>
      {/* You might want to include an <Outlet /> here for nested routes to render */}
      <Outlet />  
    </div>
    </>
  )
}
