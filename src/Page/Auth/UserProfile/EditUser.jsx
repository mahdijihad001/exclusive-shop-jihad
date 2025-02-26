import React from 'react'

const EditUser = () => {
    return (
        <div className="max-w-2xl mx-auto mt-10 p-8 bg-white rounded-lg shadow-lg">
            <h2 className="text-xl font-bold text-red-500 mb-6">Edit Your Profile</h2>
            <form className="grid grid-cols-2 gap-6">
                <div>
                    <label className="block text-gray-700 text-sm font-medium">First Name</label>
                    <input type="text" className="w-full mt-1 p-3 border rounded-lg bg-gray-100" placeholder="Md" />
                </div>
                <div>
                    <label className="block text-gray-700 text-sm font-medium">Last Name</label>
                    <input type="text" className="w-full mt-1 p-3 border rounded-lg bg-gray-100" placeholder="Rimel" />
                </div>
                <div>
                    <label className="block text-gray-700 text-sm font-medium">Email</label>
                    <input type="email" className="w-full mt-1 p-3 border rounded-lg bg-gray-100" placeholder="rimel111@gmail.com" />
                </div>
                <div>
                    <label className="block text-gray-700 text-sm font-medium">Address</label>
                    <input type="text" className="w-full mt-1 p-3 border rounded-lg bg-gray-100" placeholder="Kingston, 5236, United State" />
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
    );
};

export default EditUser;
