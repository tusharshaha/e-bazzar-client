import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { css } from "@emotion/react";
import { GridLoader } from "react-spinners";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ContextProvider from './Context/ContextProvider'
import Home from './Components/Home/Home/Home';
import AllProducts from './Components/AllProducts/AllProducts';
import ProductDetails from './Components/Home/ProductDetails/ProductDetails';
import Cart from './Components/Cart/Cart';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import NotFound from './Components/NotFound/NotFound';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import MyOrders from './Components/MyOrders/MyOrders';
function App() {
  const [loading, setLoading] = useState(false)
  const override = css``
  // controlling loading time for preloader
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])
  useEffect(() => {
    AOS.init({ offset: 160, duration: 900, delay: 100 })
  }, [])
  return (
    <>
      {loading ?
        //  this is for preloader
        <div className='preloader'>
          <GridLoader
            loading={loading}
            color='#ff6c6c'
            margin={2}
            size={20}
            css={override}
          />
        </div>
        :
        <div className="App">
          <ContextProvider>
            <BrowserRouter>
              <Routes>
                {/* this is home page route  */}
                <Route path='/' element={<Home />} />
                <Route path='home' element={<Home />} />
                {/* this route will show our all available products  */}
                <Route path='products' element={<AllProducts />} />
                {/* this route show a product details  */}
                <Route path='products/:id' element={<ProductDetails/>}/>
                {/* this route will show cart products  */}
                <Route path='cart' element={<PrivateRoute><Cart/></PrivateRoute>}/>
                {/* this is user login route */}
                <Route path='login' element={<Login/>}/>
                {/* this route for register an user  */}
                <Route path='register' element={<Register/>}/>
                {/* this route show single user orders */}
                <Route path='myOrder' element={<PrivateRoute><MyOrders/></PrivateRoute>}/>
                {/* this is 404 page showing route  */}
                <Route path='*' element={<NotFound/>}/>
              </Routes>
            </BrowserRouter>
          </ContextProvider>
        </div>}
    </>
  );
}

export default App;
