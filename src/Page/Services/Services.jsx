import React from 'react'
import { AiOutlineFileProtect } from 'react-icons/ai'
import { FaHeadset } from 'react-icons/fa'
import { MdElectricRickshaw } from 'react-icons/md'

const Services = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-around gap-[40px] sectionContainer pb-[80px]">
            {/* 1 st */}
            <div className='flex flex-col items-center justify-center gap-4'>
                <div className='bg-slate-400 hover:bg-black duration-700 w-[130px] h-[130px] rounded-full flex items-center justify-center'>
                    <div className='bg-black hover:bg-sky-200 hover:text-black duration-700 w-[100px] text-white font-bold h-[100px] rounded-full flex items-center justify-center'>
                        <MdElectricRickshaw className='text-[70px]' />
                    </div>
                </div>
                <div className='text-center'>
                    <h1 className='font-bold text-[20px] text-black'>FREE AND FAST DELIVERY</h1>
                    <p className='text-[14px] font-light text-gray-600'>Free delivery for all orders over $140</p>
                </div>
            </div>
            {/* 2 nd */}
            <div className='flex flex-col items-center justify-center gap-4'>
                <div className='bg-slate-400 hover:bg-black duration-700 w-[130px] h-[130px] rounded-full flex items-center justify-center'>
                    <div className='bg-black hover:bg-sky-200 hover:text-black duration-700 w-[100px] text-white font-bold h-[100px] rounded-full flex items-center justify-center'>
                        <FaHeadset className='text-[70px]' />
                    </div>
                </div>
                <div className='text-center'>
                    <h1 className='font-bold text-[20px] text-black'>24/7 CUSTOMER SERVICE</h1>
                    <p className='text-[14px] font-light text-gray-600'>Friendly 24/7 customer support</p>
                </div>
            </div>
            {/* 3 rd */}
            <div className='flex flex-col items-center justify-center gap-4'>
                <div className='bg-slate-400 hover:bg-black duration-700 w-[130px] h-[130px] rounded-full flex items-center justify-center'>
                    <div className='bg-black hover:bg-sky-200 hover:text-black duration-700 w-[100px] text-white font-bold h-[100px] rounded-full flex items-center justify-center'>
                        <AiOutlineFileProtect className='text-[70px]' />
                    </div>
                </div>
                <div className='text-center'>
                    <h1 className='font-bold text-[20px] text-black'>MONEY BACK GUARANTEE</h1>
                    <p className='text-[14px] font-light text-gray-600'>We reurn money within 30 days</p>
                </div>
            </div>
        </div>
    )
}

export default Services