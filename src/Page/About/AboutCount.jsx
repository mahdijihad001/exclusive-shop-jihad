import React from 'react'
import { AiOutlineFileProtect } from 'react-icons/ai'
import { BsFillHandbagFill } from 'react-icons/bs'
import { FaHouseDamage, FaUsers } from 'react-icons/fa'
import { FaSackDollar } from 'react-icons/fa6'

const AboutCount = () => {

    const aboutCount = [
        { icon: FaHouseDamage, count: "10.5k", text: "Sallers active in our site" },
        { icon: BsFillHandbagFill, count: "45.5k", text: "Customers active in our site" },
        { icon: FaSackDollar, count: "25k", text: "Annual gross sales in our site" },
        { icon: FaUsers, count: "5k", text: "New users joined this month" }, // নতুন আইটেম
      ];

    return (
        <div className='grid grid-cols-1 md:grid-cols-4 items-center justify-around pb-[40px] pt-10 gap-[20px]'>
            {/* 1 st */}
            {
                aboutCount.map((item, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col items-center justify-center gap-6 border-2 border-blue-400 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-500"
                    >
                        {/* Outer Circle */}
                        <div className="bg-slate-400 hover:bg-black transition-colors duration-700 w-[150px] h-[150px] rounded-full flex items-center justify-center">
                            {/* Inner Circle */}
                            <div className="bg-black hover:bg-sky-300 text-white font-bold w-[110px] h-[110px] rounded-full flex items-center justify-center transition-all duration-700">
                                <item.icon className="text-[70px] hover:text-sky-600 transition-colors duration-500" />
                            </div>
                        </div>
                        {/* Text Content */}
                        <div className="text-center">
                            <h1 className="font-extrabold text-[36px] text-black">{item.count}</h1>
                            <p className="text-[16px] font-medium text-gray-600">{item.text}</p>
                        </div>
                    </div>

                ))
            }
        </div>
    )
}

export default AboutCount