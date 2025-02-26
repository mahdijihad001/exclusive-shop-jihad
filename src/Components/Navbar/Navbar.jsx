import { useState } from "react";
import { FaBars, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import NavForm from "./NavForm";
import { MdAddShoppingCart } from "react-icons/md";
import MobileMenu from "./MobileMenu";
import AddToCart from "./AddToCart";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "../../Redux/Auth/authSlice";
import { useLogOutuserMutation } from "../../Redux/Auth/authApi";
import Swal from "sweetalert2";



const Navbar = () => {

    const user = useSelector((state) => state.authUser.user);
    const dispatch = useDispatch();

    const [logOutuser] = useLogOutuserMutation();

    const NavItem = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Shop", path: "/shop" },
        { name: "Contact", path: "/contact" },
        { name: user ? "" : "SingUp", path: "/register" },
    ]

    const HandleLogOut = async () => {
        try {
            await logOutuser().unwrap();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "logOut user!",
                showConfirmButton: false,
                timer: 1500
            });
            dispatch(logOutUser());
        } catch (error) {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "LogOut faild!!",
                showConfirmButton: false,
                timer: 1500
            });
        }

    }

    const userDropdown = [
        { name: "Profile", path: "/user/:id" },
        { name: "My Order", path: "/user/order" },
    ];

    const adminDropdownMenu = [
        { name: "Dashboard", path: "/dashboard" },
        { name: "Manage User", path: "/dashboard/manage-user" },
        { name: "Manage Item", path: "/dashboard/manage-product" },
        { name: "All Orders", path: "/dashboard/manage-orers" },
        { name: "Add Product", path: "/dashboard/add-product" },
    ];


    const dripDownMenu = user?.role === "admin" ? [...adminDropdownMenu] : [...userDropdown];

    const [isOpenDropdown, setIsOpenDropdown] = useState(false);

    const HandleDropdown = () => {
        setIsOpenDropdown(!isOpenDropdown)
    }

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isOpenAddToCart, setIsOpenAddToCart] = useState(false);
    const HandleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    const handleAddToCartToggle = () => {
        setIsOpenAddToCart(!isOpenAddToCart)
    }

    return (
        <div className="shadow-md bg-gray-100 py-3.5 fixed w-[100%] z-30">
            <div className="sectionContainer flex items-center justify-between">
                {/* Logo */}
                <div className="flex gap-3 items-center">
                    <FaBars onClick={HandleMobileMenu} className="md:hidden" />
                    <h1 className="font-bold text-2xl">Exclusive</h1>
                </div>

                {/* Nav Menu */}
                <div className="hidden md:block">
                    <ul className="flex items-center gap-4">
                        {
                            NavItem.map((item, idx) => (
                                <li key={idx} className="text-xl font-normal"><Link to={item.path}>{item.name}</Link></li>
                            ))
                        }
                    </ul>
                </div>
                {/* Icon */}
                <div className="flex gap-5 items-center">
                    <div className="hidden md:block">
                        <NavForm />
                    </div>
                    {/* DropDown Menu */}
                    <div className="relative flex items-center justify-between gap-2.5">
                        <span className="text-2xl font-bold">
                            <MdAddShoppingCart onClick={handleAddToCartToggle} />
                        </span>
                        <span className="text-2xl font-bold">
                            <FaUser onClick={HandleDropdown} />
                        </span>

                        {isOpenDropdown && (
                            <div className="absolute top-full right-0 bg-white flex flex-col gap-2.5 shadow-md rounded-sm p-4 w-[150px]">
                                {dripDownMenu.map((item, idx) => (
                                    <Link key={idx} onClick={() => HandleDropdown()} to={item.path} className="hover:bg-gray-200 p-2 rounded">
                                        {item.name}
                                    </Link>
                                ))}

                                {
                                    user ?  <Link onClick={() => {
                                        HandleLogOut(),
                                        HandleDropdown();
    
                                    }} className="hover:bg-gray-200 p-2 rounded">LogOut</Link> : ""
                                }
                               
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {/* Nav Mobile Menu */}
            <MobileMenu isMobileMenuOpen={isMobileMenuOpen} HandleMobileMenu={HandleMobileMenu} NavItem={NavItem} />
            {/* Add To Cart */}
            <AddToCart handleAddToCartToggle={handleAddToCartToggle} isOpenAddToCart={isOpenAddToCart} />

        </div>
    )
}

export default Navbar