import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Home from "../Page/Home/Home"
import About from "../Page/About/About"
import Contact from "../Page/Contact/Contact"
import Shop from "../Page/Shop.jsx/Shop"
import Register from "../Page/Auth/Register"
import LogIn from "../Page/Auth/LogIn"
import EditUser from "../Page/Auth/UserProfile/EditUser"
import ProductDetail from "../Page/Product/ProductDetail"
import UserProtector from "../Components/PraivetRoute/UserProtector"
import Dashboard from "../Page/Dashboard/Dashboard/Dashboard"
import DashboardHome from "../Page/Dashboard/Dashboard/DashboardHome"

const router = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        errorElement : "Page Not Found",
        children : [
            {
                path : "/",
                element : <Home/>
            },
            {
                path : "/about",
                element : <About/>
            },
            {
                path : "/contact",
                element : <Contact/>
            },
            {
                path : "/shop",
                element : <UserProtector><Shop/></UserProtector>
            },
            {
                path : "/register",
                element : <Register/>
            },
            {
                path : "/login",
                element : <LogIn/>
            },
            {
                path : "/user/edit/:id",
                element : <EditUser/>
            },
            {
                path : "/product/:id",
                element : <ProductDetail/>
            }
        ]
    },
    {
        path : "/dashboard",
        element : <Dashboard/>,
        children : [
            {
                path : "",
                element : <DashboardHome/>
            }
        ]
    }
])

export default router