import React from 'react'

const Hero = () => {
    return (
        <>
            <section className="w-full bg-[#F5F5F7] dark:bg-wickeddark font-poppins">
                <div className="relative items-center w-full px-5 pt-12 md:py-12 mx-auto md:px-12  lg:px-16 max-w-7xl lg:py-24 lg:pb-0">
                    <div className="flex flex-col w-full mx-auto text-left">
                        <div className="relative inline-flex items-center mx-auto align-middle">
                            <div className="text-center">
                                <h1 className="max-w-5xl text-5xl font-bold leading-none tracking-tighter text-neutral-600 md:text-5xl lg:text-6xl lg:max-w-7xl">
                                    Get Unlimited Premium Vectors
                                </h1>
                                <div className="sm:max-w-lg sm:flex md:mx-auto">
                                    <p className="mt-4 text-sm text-center text-gray-500">
                                        High quality vectors with worry-free licensing for personal and commercial use.
                                    </p>
                                </div>

                                <form action="" method="post" id="revue-form" name="revue-form" target="_blank" className="p-2 mt-8 transition duration-500 ease-in-out transform border2 bg-white md:mx-auto rounded-xl sm:max-w-lg sm:flex">
                                    <div className="flex-1 min-w-0 revue-form-group">
                                        <label for="search" className="sr-only">Search for your perfect illustration</label>
                                        <input id="cta-email" type="email" className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform bg-transparent border border-transparent rounded-md text-neutral-600 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 " placeholder="Search for your perfect illustration  " />
                                    </div>
                                    <div className="mt-4 sm:mt-0 sm:ml-3 revue-form-actions">
                                        <button type="submit" value="Subscribe" name="member[subscribe]" id="member_submit" className=" hidden md:flex items-center   px-4 py-2 text-base font-medium text-neutral-600  border border-transparent rounded-lg hover:bg-gray-300 focus:outline-none ">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <circle cx="10" cy="10" r="7" />
                                                <line x1="21" y1="21" x2="15" y2="15" />
                                            </svg></button>
                                    </div>
                                </form>
                            </div>

                        </div>
                        <div className=' justify-center space-x-4 mt-5 hidden md:flex'>
                            <div>
                                <p className='bg-yellow-50 px-4 py-2 rounded-full text-yellow-700 cursor-pointer'>Latest</p>
                            </div>
                            <div>
                                <p className='bg-yellow-50 px-4 py-2 rounded-full text-yellow-700 cursor-pointer'>Popular</p>
                            </div>
                            <div>
                                <p className='bg-yellow-50 px-4 py-2 rounded-full text-yellow-700 cursor-pointer'>Premium</p>
                            </div>
                            <div>
                                <p className='bg-green-50 px-4 py-2 rounded-full text-green-700 cursor-pointer'>Free</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero