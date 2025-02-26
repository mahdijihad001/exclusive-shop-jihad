import React, { useState } from 'react';

const categories = [
    { name: 'Phones', icon: '📱' },
    { name: 'Computers', icon: '💻' },
    { name: 'SmartWatch', icon: '⌚' },
    { name: 'Camera', icon: '📷' },
    { name: 'HeadPhones', icon: '🎧' },
    { name: 'Gaming', icon: '🎮' },
    { name: 'Tablets', icon: '📲' },
    { name: 'TVs', icon: '📺' },
    { name: 'Speakers', icon: '🔊' },
    { name: 'Wearables', icon: '🩳' },
    { name: 'Printers', icon: '🖨' },
    { name: 'Drones', icon: '🚁' },
    { name: 'VR Headsets', icon: '🕶' },
    { name: 'Smart Home', icon: '🏠' },
    { name: 'Monitors', icon: '🖥' },
    { name: 'Keyboards', icon: '⌨' },
    { name: 'Mouse', icon: '🖱' },
    { name: 'Storage', icon: '💾' },
    { name: 'Networking', icon: '🌐' },
    { name: 'Projectors', icon: '📽' },
    { name: 'Consoles', icon: '🎰' },
    { name: 'Cameras', icon: '📸' }
];

const Category = () => {
    const [activeCategory, setActiveCategory] = useState('Camera');

    return (
        <div className="w-full py-10 sectionContainer">
            <h1 className="text-3xl font-bold text-center text-black mb-6">Our All Product Category​👀​</h1>
            <div className="flex justify-center gap-4 flex-wrap">
                {categories.map((category) => (
                    <button
                        key={category.name}
                        className={`flex flex-col items-center px-6 py-4 border rounded-lg transition-all duration-300 ${activeCategory === category.name ? 'bg-red-500 text-white' : 'border-gray-300 hover:bg-gray-100'
                            }`}
                        onClick={() => setActiveCategory(category.name)}
                    >
                        <span className="text-3xl">{category.icon}</span>
                        <span className="mt-2 font-medium">{category.name}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Category;