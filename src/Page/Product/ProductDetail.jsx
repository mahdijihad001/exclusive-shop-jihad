import React from 'react'
import productDetaigs from "../../assets/singleProduct.png"
import ProductListing from './ProductListing'

const ProductDetail = () => {
  return (
    <div className='sectionContainer grid grid-cols-1 md:grid-cols-2 items-center gap-[30px] py-[100px]'>
        <div>
            <img src={productDetaigs} alt="" />
        </div>
        <ProductListing/>
    </div>
  )
}

export default ProductDetail