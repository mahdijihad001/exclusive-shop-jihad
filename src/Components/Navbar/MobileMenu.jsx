
import { RxCross1 } from 'react-icons/rx'
import { Link } from 'react-router'
import NavForm from './NavForm'

const MobileMenu = ({isMobileMenuOpen , HandleMobileMenu , NavItem}) => {
  return (
    <div className={`h-screen ${isMobileMenuOpen ? "left-0" : "left-[-100%]"} duration-500 top-0 bottom-0 z-40 w-[300px] fixed bg-gray-300 shadow-md p-4`}>
                <div className="flex justify-between w-full items-center gap-2">
                    <NavForm/>
                    <div>
                        <RxCross1 onClick={HandleMobileMenu} />
                    </div>
                </div>
                <div className='flex gap-5 flex-col mt-6 p-2'>
                    {NavItem.map((item , idx) => (
                         <li onClick={HandleMobileMenu} key={idx} className="text-xl font-normal list-none"><Link to={item.path}>{item.name}</Link></li>
                    ))}
                </div>
            </div>
  )
}

export default MobileMenu