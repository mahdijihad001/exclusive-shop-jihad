import React from 'react'
import ProductCart from './ProductCart'
import ProductCartSlider from './ProductCartSlider'
import { Link } from 'react-router-dom'




const DiscountedProduct = () => {
    return (
        <div className='sectionContainer py-[80px]'>
            <div>
                <h1 className='text-[#DB4444] font-semibold text-[20px] leading-5'>Today’s</h1>
                <h2 className='text-2xl mt-4'>Discounted Products💁‍♂️​😀​</h2>
            </div>
            <ProductCartSlider/>
            <div className='text-center'>
                <button className='bg-[#DB4444] py-2 px-5 text-white font-bold rounded-md'><Link>View All Products</Link></button>
            </div>
        </div>
    )
}

export default DiscountedProduct