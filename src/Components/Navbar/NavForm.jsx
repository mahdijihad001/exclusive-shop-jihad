import { FaSearch } from "react-icons/fa"

const NavForm = () => {
    return (
        <form className="bg-gray-200 px-2 flex items-center justify-between rounded-md">
            <input type="search" placeholder="Search your item" className="text-amber-200 px-2.5 py-1.5 outline-none placeholder:text-gray-700 rounded" />
            <button><FaSearch /></button>
        </form>
    )
}

export default NavForm