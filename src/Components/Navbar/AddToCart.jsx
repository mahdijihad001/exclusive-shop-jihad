import { ImCross } from "react-icons/im"
import { RxCross1 } from "react-icons/rx"

const AddToCart = ({ handleAddToCartToggle, isOpenAddToCart }) => {
    return (
        <div className={`fixed h-screen w-[350px] p-3 bg-gray-200 shadow-md duration-500 ${isOpenAddToCart ? "right-0" : "right-[-100%]"} top-0 z-50`}>
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">My Cart</h2>
                <ImCross onClick={handleAddToCartToggle} />
            </div>

            <div className="flex h-full flex-col justify-between">
                {/* Cart Item */}
                <div className="overflow-y-auto flex-grow p-4">
                    <div className="flex items-center justify-between border-b pb-2" >
                        <div className="flex items-center space-x-4">
                            <div className="flex gap-2 items-center">
                                <img src={""} className="w-12 h-12 bg-white rounded-md" alt="" />
                            </div>
                            <div>
                                <p className="text-gray-700 font-medium">{"Hp p 5"}</p>
                                <p className="text-gray-500 text-sm">${200}</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <button className="px-2 bg-white text-gray-800 hover:bg-gray-400 rounded">-</button>
                            <span className="font-medium">1</span>
                            <button className="px-2 bg-white text-gray-800 hover:bg-gray-400 rounded">+</button>
                            <button className="text-red-500 text-sm">Remove</button>
                        </div>
                    </div>
                </div>
                {/* Bottom Content */}
                <div className="mb-[70px]">
                    <div className="mt-6 bg-pink-100 p-4 rounded-lg">
                        <h3 className="text-lg font-medium text-gray-700 mb-2">Order Summary</h3>
                        <div className="flex justify-between text-gray-600">
                            <p>Selected Items:</p>
                            <p>10</p>
                        </div>
                        <div className="flex justify-between text-gray-600">
                            <p>Total Price:</p>
                            <p>$500</p>
                        </div>
                    </div>

                    <div className="mt-4 flex justify-between">
                        <button className="px-4 py-2 bg-red-500 text-white rounded-lg">Clear Cart</button>
                        <button className="px-4 py-2 bg-green-500 text-white rounded-lg">Proceed Checkout</button>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default AddToCart