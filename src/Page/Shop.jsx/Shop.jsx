import React from 'react'
import ProductCart from '../Product/ProductCart'

const Shop = () => {

    const Category = [
        { name: "Phones", path: "/Phones" },
        { name: "Computers", path: "/Computers" },
        { name: "SmartWatch", path: "/SmartWatch" },
        { name: "HeadPhones", path: "/HeadPhones" },
        { name: "Gaming", path: "/Gaming" },
        { name: "Electronics", path: "/Electronics" },
        { name: "Men’s Fashion", path: "/menFashion" },
        { name: "Woman’s Fashion", path: "/womanFashion" },
    ];

    const productlimit = [10, 15, 20, 30]


    return (
        <div className='sectionContainer'>
            <h1 className='text-4xl font-bold text-black text-center py-[25px]'>Explore Our Shop</h1>
            <div className='flex items-center justify-between'>
                {/* Folter Category */}
                <div className='mb-[40px]'>

                    <div>
                        <label className='font-bold text-2xl text-black' htmlFor="">Product Cetagory</label><br />
                        <select
                            name="HeadlineAct"
                            id="HeadlineAct"
                            className="mt-2 w-full rounded-lg border border-gray-300 bg-white p-2 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-400 sm:text-sm"
                        >
                            {
                                Category.map((item, idx) => <option key={idx} value={item.path.substring(1)}>{item.path.substring(1)}</option>)
                            }
                        </select>
                    </div>
                </div>
                <div>
                    {/* Show product per Page */}
                    <label className='font-bold text-2xl text-black' htmlFor="">Show Product Limit</label><br />
                    <select
                        name="HeadlineAct"
                        id="HeadlineAct"
                        className="mt-2 w-full rounded-lg border border-gray-300 bg-white p-2 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-400 sm:text-sm"
                    >
                        {
                            productlimit.map((item, idx) => <option key={idx} value={item}>{item}</option>)
                        }
                    </select>
                </div>
            </div>
            {/* Product */}
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-[20px] pb-[50px]'>
                <ProductCart />
                <ProductCart />
                <ProductCart />
                <ProductCart />
                <ProductCart />
                <ProductCart />
                <ProductCart />
                <ProductCart />
                <ProductCart />
                <ProductCart />
                <ProductCart />
                <ProductCart />
                <ProductCart />
                <ProductCart />
                <ProductCart />
            </div>
            {/* Pagination */}
            <div className='flex items-center justify-center gap-2 pb-[50px]'>
                <button className="px-4 py-2 rounded-lg bg-blue-400 text-white font-medium hover:bg-blue-500 focus:ring-2 focus:ring-blue-300">
                    Previous
                </button>
                <button className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 font-medium hover:bg-gray-100 focus:ring-2 focus:ring-blue-300">
                    1
                </button>
                <button className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 font-medium hover:bg-gray-100 focus:ring-2 focus:ring-blue-300">
                    2
                </button>
                <button className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 font-medium hover:bg-gray-100 focus:ring-2 focus:ring-blue-300">
                    3
                </button>
                <button className="px-4 py-2 rounded-lg bg-blue-400 text-white font-medium hover:bg-blue-500 focus:ring-2 focus:ring-blue-300">
                    Next
                </button>
            </div>
        </div>
    )
}

export default Shop