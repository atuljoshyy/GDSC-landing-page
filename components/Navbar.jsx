import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'


const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    let menu;
    if (showMenu) {
        menu =
            <div className='w-3/4 mx-auto'>
                <div className='fixed z-10 top-0 left-0 w-full bg-[#F5F5F7] rounded-2xl py-5 mt-20 mx-auto md:hidden'>
                    <div className='' >
                        <ul className='flex flex-col items-center' >
                            <li className='mr-10 hover:text-wblue-100 transition duration-300 hover:scale-x-95 hover:scale-y-100' >
                                <Link href='/'><a>Home</a></Link>
                            </li>
                            <li className='mr-10 hover:text-wblue-100 transition duration-300 hover:scale-x-95 hover:scale-y-100' >
                                <Link href='/' rel="noreferrer" >Vectors</Link>
                            </li>
                            <li className='mr-10 hover:text-wblue-100 transition duration-300 hover:scale-x-95 hover:scale-y-100' >
                                <Link href='/'><a >Categories</a></Link>
                            </li>
                            <li className='mr-10 hover:text-wblue-100 transition duration-300 hover:scale-x-95 hover:scale-y-100' >
                                <Link href='/' rel="noreferrer">More</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

    }

    return (
        <nav id='top' className='max-w-7xl bg-[#F5F5F7] px-10 py-4 md:px-20 md:py-4 font-poppins mx-auto'>
            <div className='flex justify-between items-center rounded-2xl transition-all duration-500 ' >
                <div data-aos="fade-right" data-aos-duration="800" data-aos-easing="ease-out-quad">
                    <Link href="/"><a className='flex items-center'>
                        <h1 className='text-3xl font-bold'>Vectorr</h1>
                    </a></Link>
                </div>
                <div className='hidden md:block' >
                    <ul className='flex items-center' >
                        <div data-aos="fade-down" data-aos-duration="700" data-aos-easing="ease-out-quad" data-aos-delay="100" >
                            <li className='mr-10 hover:text-wblue-100 transition duration-300 hover:scale-x-95 hover:scale-y-100' >
                                <Link href='/'><a>Home</a></Link>
                            </li>
                        </div>
                        <div data-aos="fade-down" data-aos-duration="700" data-aos-easing="ease-out-quad" data-aos-delay="100" >
                            <li className='mr-10 hover:text-wblue-100 transition duration-300 hover:scale-x-95 hover:scale-y-100' >
                                <Link href='/' target='_blank' rel="noreferrer" >Vectors</Link>
                            </li>
                        </div>
                        <div data-aos="fade-down" data-aos-duration="700" data-aos-easing="ease-out-quad" data-aos-delay="100" >
                            <li className='mr-10 hover:text-wblue-100 transition duration-300 hover:scale-x-95 hover:scale-y-100' >
                                <Link href='/'><a >Categories</a></Link>
                            </li>
                        </div>
                        <div data-aos="fade-down" data-aos-duration="700" data-aos-easing="ease-out-quad" data-aos-delay="100" >
                            <li className='mr-10 hover:text-wblue-100 transition duration-300 hover:scale-x-95 hover:scale-y-100' >
                                <Link href='/' target='_blank' rel="noreferrer">More</Link>
                            </li>
                        </div>
                    </ul>
                </div>
                <div className='hidden md:block' data-aos="fade-down" data-aos-duration="800" data-aos-easing="ease-out-quad" data-aos-delay="350">
                    <a href="https://google.com" className='bg-white flex items-center text-neutral-600 border-4 border-dashed  font-semibold px-4 py-3 rounded-xl  focus:outline-none transition duration-500 mr-2' rel="noreferrer" >
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plus" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>Submit</a>
                </div>
                {/* mobile menu  */}
                <div className='md:hidden'>
                    <button onClick={() => setShowMenu(!showMenu)} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#000000" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line><line x1="40" y1="64" x2="216" y2="64" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line><line x1="40" y1="192" x2="216" y2="192" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line></svg>
                    </button>
                </div>
            </div>

            {showMenu && menu}


        </nav >
    )
}

export default Navbar
