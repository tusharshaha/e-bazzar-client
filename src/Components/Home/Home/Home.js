import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import AboutService from '../AboutService/AboutService';
import FeaturesProduct from '../FeaturesProduct/FeaturesProduct';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <>
            {/* This is header contain navbar */}
            <Header></Header>
            {/* This is top banner  */}
            <TopBanner></TopBanner>
            {/* this is about our service  */}
            <AboutService></AboutService>
            {/* this is features product section  */}
            <FeaturesProduct></FeaturesProduct>
            {/* this is footer  */}
            <Footer></Footer>
        </>
    );
};

export default Home;