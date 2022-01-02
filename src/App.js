import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { css } from "@emotion/react";
import { GridLoader } from "react-spinners";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './Components/Home/Home/Home';
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
     {loading?
    //  this is for preloader
     <div className='preloader'>
       <GridLoader
       loading={loading}
       color='#ffe70a'
       margin={2}
       size={20}
       css={override}
       />
     </div>
     :
     <div className="App">
        <BrowserRouter>
          <Routes>
            {/* this is home page route  */}
            <Route path='/' element={<Home/>}/>
            <Route path='home' element={<Home/>}/>
          </Routes>
        </BrowserRouter>
      </div>}
    </>
  );
}

export default App;
