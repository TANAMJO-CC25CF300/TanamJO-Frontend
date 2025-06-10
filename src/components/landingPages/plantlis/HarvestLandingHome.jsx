import React from "react";
import Header from '@/layout/landingPages/header';
import bannerImage from '@/assets/Banner/banner-1.png';

function HarvestLandingHome() {
    return (
        <>        
            <div className="mt-0 mx-0 md:mx-0 lg:mx-0 xl:mx-10 xl:mt-10 relative shadow-md rounded-4xl h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px]">
                <div className="relative w-full xl:rounded-t-4xl h-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bannerImage})` }}>
                    <div className="absolute inset-0 bg-black/28 lg:rounded-t-4xl"></div>

                    <Header />
                    
                    <div className="relative z-30 h-full flex flex-col justify-end px-4 md:px-0 xl:px-4 pb-12 sm:pb-16 md:pb-20">
                        <div className="text-left max-w-lg mx-auto sm:mx-0 sm:ml-2 md:ml-6 lg:ml-10 xl:ml-12">
                            <span className="inline-block text-sm font-semibold tracking-wider text-white px-3 sm:px-4 rounded-full whitespace-nowrap overflow-hidden overflow-ellipsis w-[140px] sm:w-[160px] h-8 leading-8 text-center bg-white/20 backdrop-blur-sm border border-white/80 mb-1.5">
                                SELECT IN QUANTITY
                            </span>

                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-wider leading-tight border-b-2 border-white pb-2 sm:pb-3 mb-2 sm:mb-3">
                                Grow Smarter: <br />
                                Smart Tomato Tips
                            </h1>

                            <p className="text-white text-xs sm:text-sm md:text-base mb-4 sm:mb-6 font-nunito font-semibold tracking-wider leading-tight max-w-xl">
                                Not sure how to start with tomatoes? We're here to guide you — from seed to salad!
                            </p>

                            <button className="bg-white text-gray-700 text-sm sm:text-base font-semibold px-4 sm:px-6 py-1.5 sm:py-2 rounded-full shadow hover:bg-gray-100 transition">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HarvestLandingHome;