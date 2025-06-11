import React from "react";
import Header from '@/layout/landingPages/header';
import bannerImage from '@/assets/Banner/banner-1.png';

function HarvestLandingHome() {
    return (
        <>        
            <div className="mt-0 mx-0 md:mx-0 lg:mx-0 xl:mx-10 xl:mt-10 relative shadow-md rounded-4xl h-[90vh]">
                <div 
                    className="relative w-full xl:rounded-t-4xl h-full bg-cover bg-center bg-no-repeat" 
                    style={{ 
                        backgroundImage: `url(${bannerImage})`,
                        backgroundPosition: 'center 30%' 
                    }}
                >
                    <div className="absolute inset-0 bg-black/28 lg:rounded-t-4xl"></div>

                    <Header />
                    
                    <div className="relative z-30 h-full flex flex-col justify-center px-4 md:px-0 xl:px-4">
                        <div className="text-left max-w-2xl mx-auto sm:mx-0 sm:ml-4 md:ml-10 lg:ml-16 xl:ml-20 pt-16 sm:pt-24 md:pt-23">
                            <div className="flex items-center gap-2">
                                <span className="inline-block text-xs/6 font-semibold font-nunito tracking-wider text-white px-3 sm:px-4 rounded-full whitespace-nowrap overflow-hidden overflow-ellipsis w-[140px] sm:w-[160px] h-7 leading-7 text-center bg-white/25 backdrop-blur-md border border-white/90 mb-4 transition-all duration-300 hover:bg-white/30">
                                    SELECT IN QUANTITY
                                </span>
                            </div>

                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-wider leading-tight mb-1.5 drop-shadow-lg">
                                Grow Smarter: <br /> Smart Tomato Tips
                            </h1>

                            <p className="text-white/90 text-[15px] font-nunito tracking-wide leading-relaxed font-semibold max-w-xl mb-6 border-t-2 border-white pt-3">
                                Discover expert techniques and innovative solutions for cultivating perfect tomatoes. Your journey to a bountiful harvest starts here.
                            </p>

                            <div className="flex items-center gap-2">
                                <button className="bg-white/90 text-gray-800 text-sm/6 font-semibold font-nunito tracking-wide px-4 sm:px-6 py-1.5 sm:py-2 rounded-full shadow hover:bg-white/90 transition">
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HarvestLandingHome;