import React from 'react'
import authImage from "../../assets/auth.png"
import LoginForm from './UserProfile/LogInForm';


const LogIn = () => {
    return (
        <div className='sectionContainer grid grid-cols-1 md:grid-cols-2 items-center py-[105px]'>
            {/* Register Image */}
            <div className='flex items-center w-full'>
                <img className='bg-center mx-auto object-cover h-[500px] w-[500px]' src={authImage} alt="" />
            </div>
            {/* From */}
                <LoginForm/>
        </div>
    )
}

export default LogIn