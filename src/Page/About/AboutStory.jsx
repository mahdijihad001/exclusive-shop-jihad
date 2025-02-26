import React from 'react'
import storyImage from "../../assets/Side Image.png"

const AboutStory = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-8  justify-between items-center py-[40px]'>
        {/* Storu text */}
        <div>
            <h1 className='font-bold text-5xl text-[#000] mb-2'>Our Story</h1>
            <p className='font-medium text-gray-500 mb-2.5'>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
            <p className='font-medium text-gray-500 mb-2.5'>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
        </div>
        {/* Story Image */}
        <div className='h-[400px]'>
            <img className='h-full w-full' src={storyImage} alt="" />
        </div>
    </div>
  )
}

export default AboutStory