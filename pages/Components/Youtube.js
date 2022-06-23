import React from 'react'

function Youtube() {
    return (
        <div className="mt-10 shadow-2xl  bg-gray-50">
            <div data-aos="fade-left">
                <div className="grid gap-5 md:grid-cols-2 bg-white-800 md:ml-10 ">
                    <div className="relative">


                        <iframe className="relative inset-0 w-full mt-5 mb-5 h-72 sm:rounded-md" src="https://www.youtube-nocookie.com/embed/FMrtSHAAPhM"></iframe>

                    </div>
                    <div className="relative mt-5 ml-2 mr-2 sm:mt-16">
                        <h1 className="pb-2 text-2xl font-medium text-gray-800">About Us</h1>
                        <p className='mt-2 text-left text-gray-800 '>We are the Premium Cyber security and Future Technologies Training Center in Kerala. Take a look at the reviews and stories about us here.</p>
                        <button type="button" className="px-6 py-4 mb-5 text-sm font-medium text-white transition bg-blue-700 rounded-lg  hover:shadow-2xl mt-7 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Get Started</button>
                        <button type="button" className="px-6 py-4 mb-5 ml-2 text-sm font-medium text-white transition bg-blue-700 rounded-lg hover:shadow-2xl mt-7 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Get Started</button>
                    </div></div>


            </div>
        </div>
    )
}

export default Youtube