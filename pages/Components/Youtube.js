import React from 'react'
import Fade from 'react-reveal/Fade';
function Youtube() {
    return (
        <div className=" bg-gray-50 mt-10 shadow-2xl ">
            <div data-aos="fade-left">
                <div className="grid md:grid-cols-2 gap-5 bg-white-800 md:ml-10 ">
                    <div className="relative">


                        <iframe className="relative inset-0 w-full   h-72 mb-5 mt-5   sm:rounded-md" src="https://www.youtube-nocookie.com/embed/FMrtSHAAPhM"></iframe>

                    </div>
                    <div className="relative ml-2 sm:mt-16 mt-5 mr-2">
                        <h1 className="text-2xl font-medium text-gray-800 pb-2">About Us</h1>
                        <p className='text-gray-800 text-left mt-2 '>We are the Premium Cyber security and Future Technologies Training Center in Kerala. Take a look at the reviews and stories about us here.</p>
                        <button type="button" className=" transition hover:shadow-2xl px-6 py-4 mt-7 mb-5 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Get Started</button>
                        <button type="button" className="transition hover:shadow-2xl px-6 py-4 mt-7 mb-5  text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ml-2">Get Started</button>
                    </div></div>


            </div>
        </div>
    )
}

export default Youtube