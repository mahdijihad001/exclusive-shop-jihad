import React from 'react'
import { Link } from 'react-router-dom'

const AdminMenu = () => {

    const adminMenu = [
        { name: "Dashboard", path: "/dashboard" },
        { name: "Manage User", path: "/dashboard/manageUser" },
        { name: "Manage Item", path: "/dashboard/manageProduct" },
        { name: "All Orders", path: "/dashboard/manageOrers" },
        { name: "Add Product", path: "/dashboard/addProduct" },
    ]

    return (
        <div>
            <h1 className='text-orange-300 font-bold text-[20px]'>Admin Dashboard</h1>
            <ul className='flex flex-col gap-3 mt-2'>
                {
                    adminMenu.map((item , idx) =>(
                        <Link to={item.path} className='font-medium text-gray-700 text-[18px]' key={item}>{item.name}</Link>
                    ))
                }
            </ul>
        </div>
    )
}

export default AdminMenu