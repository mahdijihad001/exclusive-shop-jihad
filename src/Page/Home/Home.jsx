import React from 'react'
import Banner from '../Banner/Banner'
import DiscountedProduct from '../Product/DiscountedProduct'
import Category from '../Category/Category'
import ExploreProducts from '../Product/ExploreProducts'
import Araival from '../Araival/Araival'
import Services from '../Services/Services'

const Home = () => {
  return (
    <>
        <Banner/>
        <DiscountedProduct/>
        <Category/>
        <ExploreProducts/>
        <Araival/>
        <Services/>
    </>
  )
}

export default Home