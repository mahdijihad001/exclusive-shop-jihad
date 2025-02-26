import { Outlet } from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer"
import ScrollToTop from "./Components/Scroll/ScrollToTop"

const App = () => {
  return (
    <>
    <ScrollToTop/>
      <Navbar />
      <main className="pt-[70px]">
        <Outlet />
      </main>
      <Footer/>
    </>
  )
}

export default App