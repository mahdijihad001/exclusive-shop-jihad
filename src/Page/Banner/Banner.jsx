import React from 'react'
import { Link } from 'react-router-dom'
import Slider from './Slider'

const Banner = () => {

    const BannerCategory = [
        { name: "Phones", path: "/Phones" },
        { name: "Computers", path: "/Computers" },
        { name: "SmartWatch", path: "/SmartWatch" },
        { name: "HeadPhones", path: "/HeadPhones" },
        { name: "Gaming", path: "/Gaming" },
        { name: "Electronics", path: "/Electronics" },
        { name: "Men’s Fashion", path: "/menFashion" },
        { name: "Woman’s Fashion", path: "/womanFashion" },
    ]

    return (
        <div className="grid grid-cols-1 items-center md:grid-cols-6 gap-6 sectionContainer">
            {/* Banner Menu */}
            <div className="hidden md:block col-span-1">
                <ul className="space-y-4">
                    {
                        BannerCategory.map((item , idx) =>(
                            <li className='text-[18px] font-light hover:text-blue-500 transition-all duration-300' key={idx}><Link to={item.path}>{item.name}</Link></li>
                        ))
                    }
                </ul>
            </div>

            {/* Banner Slider */}
            <div className="col-span-5 md:col-span-5">
                <Slider/>
            </div>
        </div>
    )
}

export default Banner