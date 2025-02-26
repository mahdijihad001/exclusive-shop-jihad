import React, { useState } from "react";

const ProductListing = () => {
    const [quantity, setQuantity] = useState(1);

    return (
        <div className=" overflow-hidden p-6 bg-white">

            <div className="flex items-center mb-2">
                <h2 className="font-bold text-lg mb-2 text-gray-900">Havic HV G-92 Gamepad</h2>
                <span className="text-green-600 text-sm ml-2">In Stock</span>
            </div>
            <p className="text-gray-700 text-sm">
                PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess-free removal. Pressure sensitive.
            </p>
            <div className="mt-4 flex items-center">
                <span className="text-2xl font-bold">$192.00</span>
            </div>
            <div className="mt-4 flex items-center space-x-4">
                <div className="flex items-center border rounded-md">
                    <button className="px-3 py-1" onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
                    <span className="px-4 py-1 border-x">{quantity}</span>
                    <button className="px-3 py-1" onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>
                <button className="flex-1 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Add To Cart</button>
            </div>
            <div className="mt-6 p-3 border rounded-md">
                <p className="text-sm font-medium">🚚 Delivery</p>
                <p className="text-xs text-gray-500">Enter your postal code for Delivery Availability</p>
            </div>
        </div>
    );
};

export default ProductListing;
