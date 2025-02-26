import React from 'react'
import araivalBig1 from "../../assets/araivalBig1png.png"
import araivalBig2 from "../../assets/araivalBig2.jpg"
import araivalsmall1 from "../../assets/araivalSmoll1.png"
import araivalSmall2 from "../../assets/araivalSmoll2.png"
import { Link } from 'react-router-dom'

const Araival = () => {
    return (
        <div className='sectionContainer px-4 md:px-8 lg:px-16 py-[80px]'>
        <div className='text-center pb-12'>
          <h1 className='text-3xl font-bold text-black'>New Arrival</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          {/* First Column */}
          <div className="col-span-1 md:col-span-3 bg-black relative p-4">
            <img className='w-full h-full object-cover' src={araivalBig1} alt="Arrival Big" />
            <div className='absolute left-0 bottom-0 p-4 md:p-8'>
              <h1 className='font-bold text-white text-2xl md:text-3xl'>PlayStation 5</h1>
              <p className='text-sm md:text-base text-white font-light'>Black and White version of the PS5 coming out on sale.</p>
              <Link to="/shop" className='inline-block mt-2 font-bold text-lg md:text-2xl border-b-4 text-white border-gray-200'>Shop Now</Link>
            </div>
          </div>
  
          {/* Second Column */}
          <div className="col-span-1 md:col-span-3 flex flex-col gap-4">
            {/* First Row */}
            <div className='bg-black relative'>
              <img className='w-full h-full object-cover' src={araivalBig2} alt="Arrival Small 1" />
              <div className='absolute left-0 bottom-0 p-4 md:p-8'>
                <h1 className='font-bold text-white text-2xl md:text-3xl'>Women's Collections</h1>
                <p className='text-sm md:text-base text-white font-light'>Featured women collections that give you another vibe.</p>
                <Link to="/shop" className='inline-block mt-2 font-bold text-lg md:text-2xl border-b-4 text-white border-gray-200'>Shop Now</Link>
              </div>
            </div>
  
            {/* Second Row */}
            <div className='grid grid-cols-2 gap-4'>
              {/* 1st Item */}
              <div className='bg-black relative'>
                <img className='w-full h-full object-cover' src={araivalBig1} alt="Arrival Small 2" />
                <div className='absolute left-0 bottom-0 p-4 md:p-8'>
                  <h1 className='font-bold text-white text-lg md:text-xl'>Speakers</h1>
                  <p className='text-xs md:text-sm text-white font-light'>Amazon wireless speakers.</p>
                  <Link to="/shop" className='inline-block mt-2 font-bold text-sm md:text-lg border-b-4 text-white border-gray-200'>Shop Now</Link>
                </div>
              </div>
              {/* 2nd Item */}
              <div className='bg-black relative'>
                <img className='w-full h-full object-cover' src={araivalBig2} alt="Arrival Small 3" />
                <div className='absolute left-0 bottom-0 p-4 md:p-8'>
                  <h1 className='font-bold text-white text-lg md:text-xl'>Perfume</h1>
                  <p className='text-xs md:text-sm text-white font-light'>GUCCI INTENSEOUD EDP.</p>
                  <Link to="/shop" className='inline-block mt-2 font-bold text-sm md:text-lg border-b-4 text-white border-gray-200'>Shop Now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Araival