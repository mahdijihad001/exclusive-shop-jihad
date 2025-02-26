import React from 'react';
import { Link } from 'react-router-dom';

const UserProfile = () => {
    return (
        <div className='sectionContainer py-[40px]'>
            <h1 className='font-bold text-2xl text-[#000] text-center pb-[40px]'>Welcome Mohammad Jihad</h1>
            <div className='flex flex-col md:flex-row gap-5 items-center justify-around'>
                <div className="max-w-sm mx-auto p-6 bg-white rounded-2xl shadow-lg">
                    <div className="flex flex-col items-center gap-4">
                        <div className="relative w-24 h-24">
                            <img
                                src="https://lh3.googleusercontent.com/a/ACg8ocLi3mmRLegusVEY0hGcs9fAF0NXgmBDePV_lbE9jLhMNZQVkoE=s96-c-rg-br100"
                                alt="User Profile"
                                className="w-full h-full rounded-full shadow-md border-4 border-blue-400 object-cover"
                            />
                            <div className="absolute bottom-0 right-0 bg-green-400 p-2 rounded-full border border-white"></div>
                        </div>
                        <div className="text-center">
                            <h3 className="text-xl font-bold text-gray-800">Mohammad Jihad</h3>
                            <span className="text-sm text-blue-500 font-medium">Frontend Developer</span>
                        </div>
                        <div className="w-full">
                            <ul className="space-y-3 text-sm text-gray-700">
                                <li className="flex items-center gap-3">
                                    <span className="font-medium">Full Name:</span>
                                    <span>Mohammad Jihad</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="font-medium">Email:</span>
                                    <span>jihad@example.com</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="font-medium">Number:</span>
                                    <span>+880 1234 567890</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="font-medium">Address:</span>
                                    <span>Bay Area, San Francisco, CA</span>
                                </li>
                            </ul>
                        </div>
                        <Link to={`/user/edit/${10}`} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 font-semibold rounded-lg shadow-md transition-all duration-200 transform hover:scale-105">
                            Edit Profile
                        </Link>
                    </div>
                </div>
                <div className="max-w-lg p-6 bg-white rounded-lg shadow-lg">
                    <h2 className="text-xl font-bold text-red-500 mb-6">Edit Your Profile</h2>
                    <form className="grid grid-cols-2 gap-6">
                        <div>
                            <label className="block text-gray-700 text-sm font-medium">First Name</label>
                            <input type="text" className="w-full mt-1 p-3 border rounded-lg bg-gray-100" placeholder="Mohammad" />
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-medium">Last Name</label>
                            <input type="text" className="w-full mt-1 p-3 border rounded-lg bg-gray-100" placeholder="Jihad" />
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-medium">Email</label>
                            <input type="email" className="w-full mt-1 p-3 border rounded-lg bg-gray-100" placeholder="jihad@example.com" />
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-medium">Address</label>
                            <input type="text" className="w-full mt-1 p-3 border rounded-lg bg-gray-100" placeholder="Bay Area, San Francisco, CA" />
                        </div>
                        <div className="col-span-2">
                            <label className="block text-gray-700 text-sm font-medium">Password Changes</label>
                            <input type="password" className="w-full mt-1 p-3 border rounded-lg bg-gray-100" placeholder="Current Password" />
                            <input type="password" className="w-full mt-3 p-3 border rounded-lg bg-gray-100" placeholder="New Password" />
                            <input type="password" className="w-full mt-3 p-3 border rounded-lg bg-gray-100" placeholder="Confirm New Password" />
                        </div>
                        <div className="col-span-2 flex justify-between mt-4">
                            <button className="text-gray-600">Cancel</button>
                            <button className="bg-red-500 text-white px-6 py-2 rounded-lg">Save Changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;