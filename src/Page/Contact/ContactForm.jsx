import React from "react";

const ContactForm = () => {
    return (
        <div className="p-4 bg-white shadow-lg rounded-lg w-full ">
            <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Your Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm p-2"
                            placeholder="Your Name"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Your Email <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm p-2"
                            placeholder="Your Email"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Your Phone <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="phone"
                            className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm p-2"
                            placeholder="Your Phone"
                        />
                    </div>
                </div>
                <div>
                    <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Your Message
                    </label>
                    <textarea
                        id="message"
                        rows="4"
                        className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm p-2"
                        placeholder="Your Message"
                    ></textarea>
                </div>
                <div className="text-right">
                    <button
                        type="submit"
                        className="inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-[#DB4444] hover:bg-[#7c5f5f] focus:outline-none focus:ring-2 focus:ring-offset-2"
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
