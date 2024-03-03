import { useState } from 'react';
import Home from './Pages/Home';
import { Cart } from './Pages/Cart';
import { Favourites } from './Pages/Favorites';
import { Order } from './Pages/Order';
import { Login } from './Pages/Login';
import SideBar from './Components/SideBar';
import { FavoritesProvider } from './Components/FavoritesItems';
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Outlet,
  Route,
} from 'react-router-dom';
import { AdminPage } from './Pages/AdminPage';

function App() {
  const [favourites, setFavourites] = useState([]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root/>}>
        <Route index element={<Home setFavourites={setFavourites}/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favs" element={<Favourites favourites={favourites} />} />
        <Route path="/order" element={<Order />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<AdminPage />} />
      </Route>
    )
  );

  return (
    <FavoritesProvider>
    <div className="App">
      <RouterProvider router={router} />
    </div>
    </FavoritesProvider>
  );
}

export default App;

const Root = () => {
  return (
    <>
      <SideBar />
      <Outlet /> {/* This will render the child routes */}
    </>
  );
};
