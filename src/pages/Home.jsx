
import React from 'react'
import Hero from '../components/hero/Hero';
import Category from '../components/category/Category';
import FeatureProducts from '../components/featureProducts/FeatureProducts';
import Landing from '../components/landing/Landing';


const Home = ({addToWatchlist, addToCart}) => {
    return (
        <div>
            <Hero />
            <Category />
            <FeatureProducts addToWatchlist= {addToWatchlist} addToCart= {addToCart}/>
            <Landing /> 
        </div>
    )
}

export default Home
