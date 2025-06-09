import React, { useState } from "react";
import { Link } from 'react-router-dom';
import logo from '@/assets/logo/logo.svg';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);
    
    return (

        <main>
            <div className="bg-white">
                <header className="absolute inset-x-0 top-0 z-50">
                    <nav className="flex items-center justify-between p-5 xl:px-8" aria-label="Global">
                        <div className="flex xl:flex-1">
                            <Link to="/" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <img className="h-8 w-auto" src={logo} alt="Company Logo"/>
                            </Link>
                        </div>

                        <div className="flex xl:hidden gap-x-5">
                            <div className="flex items-center justify-center w-10 h-10 text-white bg-white/20 backdrop-blur-sm rounded-full border-1 border-white">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                            </div>


                            <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white" onClick={handleOpen}>
                                <span className="sr-only">Open main menu</span>
                                <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                                </svg>
                            </button>
                        </div>

                        <div className="hidden xl:flex xl:gap-x-15 text-sm/6 bg-white/20 backdrop-blur-sm rounded-full px-10 py-2.5 border-1 border-white">
                            <Link to="/home-page" className="font-semibold text-white tracking-wide">Home</Link>
                            <Link to="/plant-guide" className="font-semibold text-white tracking-wide">Plant Care Guide</Link>
                            <Link to="/identify-plant" className="font-semibold text-white tracking-wide">Identify Plant</Link>
                            <Link to="/encyclopedia" className="font-semibold text-white tracking-wide">Encyclopedia</Link>
                        </div>

                        <div className="hidden xl:flex xl:flex-1 xl:justify-end">        
                            <div className="hidden xl:flex xl:flex-1 xl:justify-end gap-x-5">
                                <div className="flex items-center justify-center w-11 h-11 text-white bg-white/20 backdrop-blur-sm rounded-full border-1 border-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                    </svg>
                                </div>

                                <Link to="/" className="text-sm/6 font-semibold text-white tracking-wide bg-white/20 backdrop-blur-sm rounded-full px-10 py-2.5 border-1 border-white">
                                    Sign Up
                                </Link>
                            </div>
                        </div>
                    </nav>

                    {/* Mobile menu */}
                    <div className={`relative z-50 xl:hidden ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>

                        <div className={`fixed inset-0 bg-gray-900/80 transition-opacity ease-linear duration-800 ${isOpen ? 'opacity-100' : 'opacity-0'}`}  onClick={handleClose}></div>

                        <div className={`fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:ring-1 sm:ring-gray-900/10 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                            <div className="flex items-center justify-between">
                                <Link to="/" className="-m-1.5 p-1npm install react-router-dom.5">
                                    <span className="sr-only">Your Company</span>
                                    <img className="h-8 w-auto" src={logo} alt="Company Logo"/>
                                </Link>

                                <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={handleClose}>
                                    <span className="sr-only">Close menu</span>
                                    <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"/>
                                    </svg>
                                </button>
                            </div>

                            <div className="mt-10 flow-root">
                                <div className="-my-6">
                                    <div className="space-y-2 py-6 text-gray-700 font-semibold">
                                        <Link to="/" className="-mx-3 block rounded-xl px-3 py-5 text-md/7 border-b border-dotted border-gray-300 tracking-wide">Home</Link>
                                        <Link to="/plant-guide" className="-mx-3 block rounded-xl px-3 py-5 text-md/7 border-b border-dotted border-gray-300 tracking-wide">Plant Care Guide</Link>
                                        <Link to="/" className="-mx-3 block rounded-xl px-3 py-5 text-md/7 border-b border-dotted border-gray-300 tracking-wide">Identify Plant</Link>
                                        <Link to="/encyclopedia" className="-mx-3 block rounded-xl px-3 py-5 text-md/7 border-b border-dotted border-gray-300 tracking-wide">Encyclopedia</Link>
                                    </div>

                                    <div className="py-10">
                                        <div className="py-0 text-gray-700">
                                            <Link to="/" className="-mx-3 block px-3 py-3.5 text-md/7 font-semibold border border-gray-300 rounded-full text-center">
                                                Sign Up
                                            </Link>
                                        </div>   
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </main>
        
    );
}

export default Header;    
