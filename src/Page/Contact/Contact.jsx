import React from 'react'
import { MdAddIcCall, MdMarkEmailUnread } from 'react-icons/md'
import ContactForm from './ContactForm'

const Contact = () => {
    return (
        <div className='sectionContainer grid grid-cols-1 md:grid-cols-3 gap-3.5 py-[100px]'>
            {/* Grid 1 */}
            <div className='col-span-1'>
                <div>
                    {/* Call ICon */}
                    <div className='flex gap-[10px] items-center'>
                        <div className='bg-[#DB4444] h-[30px] w-[30px] rounded-full flex items-center justify-center text-white font-bold'><MdAddIcCall />
                        </div>
                        <h1 className='text-2xl font-bold text-black'>Call To Us</h1>
                    </div>
                    {/* Call Information */}
                    <div className='mt-3.5'>
                        <p className='text-[20px] text-gray-600 mb-[10px]'>We are available 24/7, 7 days a week.</p>
                        <p className='text-[20px] text-gray-600 mb-[10px]'>Phone: +8801611112222</p>
                    </div>
                </div>
                <hr className='my-8' />
                <div>
                    {/* Call ICon */}
                    <div className='flex gap-[10px] items-center'>
                        <div className='bg-[#DB4444] h-[30px] w-[30px] rounded-full flex items-center justify-center text-white font-bold'><MdMarkEmailUnread />
                        </div>
                        <h1 className='text-2xl font-bold text-black'>Write To US</h1>
                    </div>
                    {/* Call Information */}
                    <div className='mt-3.5'>
                        <p className='text-[20px] text-gray-600 mb-[10px]'>Fill out our form and we will contact you within 24 hours.</p>
                        <p className='text-[20px] text-gray-600 mb-[10px]'>Emails: customer@exclusive.com</p>
                        <p className='text-[20px] text-gray-600 mb-[10px]'>Emails: support@exclusive.com</p>
                    </div>
                </div>
            </div>
            {/* Grid 2 */}
            <div className='col-span-2'>
                <ContactForm/>
            </div>
        </div>
    )
}

export default Contact