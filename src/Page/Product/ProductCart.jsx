import React from 'react'
import productImage from "../../assets/productCart.png"
import { IoStar } from 'react-icons/io5'
import { FaEye } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ProductCart = () => {
    return (
        <div className='rounded-md bg-gray-100 w-full max-w-xs mx-auto'>
            {/* Cart Image */}
            <div className="bg-gray-200 p-5 flex justify-center relative group">
                <div>
                    <p className='bg-[#DB4444] font-bold p-1.5 text-center rounded-md absolute left-1.5 top-2 text-white'>40%</p>
                    <Link className='text-black absolute right-3 top-4'><FaEye /></Link>
                </div>
                <img src={productImage} alt="Gamepad" className="w-[150px] h-[150px]" />
                <p className="absolute bottom-0 bg-black py-2 text-white w-full text-center font-bold opacity-0 translate-y-5 transition-all duration-300 transform group-hover:opacity-100 group-hover:translate-y-0">
                    Add To Cart
                </p>
            </div>
            {/* Cart Information */}
            <div className='py-3 p-4 text-center'>
                <h1 className='font-bold text-[16px]'>HAVIT HV-G92 Gamepad</h1>
                <p className='flex justify-center gap-2 text-lg'>
                    <span className='text-gray-500'>$120</span>
                    <span className='line-through text-red-500'>$160</span>
                </p>
                <div className='flex justify-center gap-2'>
                    <p className='flex gap-1.5 text-yellow-400'>
                        <IoStar /><IoStar /><IoStar /><IoStar /><IoStar />
                    </p>
                    <p className='text-gray-600'>{"(88)"}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductCart