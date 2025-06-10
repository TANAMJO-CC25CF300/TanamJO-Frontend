import React from "react";
import card1 from '@/assets/profile/profile-1.jpg';
import banner1 from '@/assets/Banner/card-7.png';

const ArtikelList = () => (

    <>        
        <div className="flex-1 flex flex-col">
            <div className="w-full min-h-[280px] md:min-h-[260px] xl:min-h-[320px] rounded-t-3xl md:rounded-3xl overflow-hidden relative">
                <img src={banner1} className="absolute inset-0 w-full h-full object-cover" alt="Banner Image" />
                
                <div className="absolute -top-1 right-[-0.2rem] w-11 h-11 sm:w-12 sm:h-12 md:w-12 md:h-12 bg-white rounded-bl-3xl rounded-tr-3xl z-10 flex items-center justify-center">
                    <span className="custom-banner rounded-full w-7 h-7 flex items-center justify-center shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                    </span>
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-green-900/30 via-green-800/45 to-transparent pointer-events-none"></div>
            </div>

            {/* New card section */}        
            <div className="w-full -mt-6 md:-mt-8 lg:-mt-10 xl:-mt-15 relative">
                <div className="bg-white rounded-3xl shadow-md p-5 sm:p-5">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4 space-y-3 sm:space-y-0">
                        <div className="flex items-center">
                            <img src={card1} alt="Martin Bailey" className="w-12 h-12 rounded-full mr-4 object-cover" />
                            <div className="flex flex-col space-y-1">
                                <div className="font-semibold font-nunito tracking-wider leading-tight steel-haze hover:text-green-600 transition-colors duration-300">Martin Bailey</div>
                                <div className="text-sm/6 font-medium tracking-wider text-gray-500 leading-tight flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                    Supervisor
                                </div>
                            </div>
                        </div>

                        <div className="sm:ml-auto text-sm/6 custome-deskription mt-1.5 sm:mt-0 font-medium leading-normal tracking-wider flex items-center gap-1.5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                            </svg>
                            9 february, 2024
                        </div>
                    </div>

                    <div className="space-y-2.5">
                        <h3 className="text-xl font-semibold font-nunito tracking-wider leading-tight steel-haze mb-3 sm:line-clamp-none line-clamp-2">What technology is used in vertical farming?</h3>
                        
                        <p className="text-sm/6 md:text-sm/6 font-medium leading-normal tracking-wider line-clamp-3 custome-deskription mb-4">
                            Growing tomatoes isn't just about planting — it's about knowing what your plants need at every stage. Through our consultation-based approach, we help you choose the right tools, organic inputs, and growing methods tailored specifically for tomatoes.
                        </p>

                        <a href="/" className="inline-flex items-center gap-1 px-3 py-1.5 text-sm font-semibold text-white custom-banner rounded-full">
                            <span>Read More</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>        
    </>

);

export default ArtikelList;
