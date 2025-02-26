import React from 'react'
import ProductCart from './ProductCart'
import { Link } from 'react-router-dom'

const ExploreProducts = () => {
  return (
    <div className='sectionContainer'>
        <div className='text-center'>
            <h1 className='text-3xl font-bold'>Explore Our Products😋​🏆​</h1>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 py-[70px]'>
            <ProductCart/>
            <ProductCart/>
            <ProductCart/>
            <ProductCart/>
            <ProductCart/>
            <ProductCart/>
            <ProductCart/>
            <ProductCart/>
            <ProductCart/>
            <ProductCart/>
        </div>
        <div className='text-center pb-[50px]'>
            <button className='py-2 px-5 bg-[#DB4444] hover:bg-[#be7474] text-white rounded-md'><Link>View All Products</Link></button>
        </div>
    </div>
  )
}

export default ExploreProducts