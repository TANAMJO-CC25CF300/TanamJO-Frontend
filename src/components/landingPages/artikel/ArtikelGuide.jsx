import React from "react";
import bannerPlantProblems from '@/assets/Banner/card-8.png';
import bannerWatering from '@/assets/Banner/card-7.png';

function ArtikelGuide() {
    return (
        
        <main>
            <div className="mt-7 flex flex-col space-y-8">
                <div className="w-full min-h-[48px] p-3 border border-gray-200 rounded-3xl tj-text-gray font-semibold flex flex-col lg:flex-row items-start gap-4">                                
                    <div className="relative w-full lg:w-64 xl:w-48 h-48 flex-shrink-0">
                        <img className="h-full w-full object-cover rounded-3xl" src={bannerPlantProblems} alt="Plant Problems Detection"/>
                        <div className="absolute -top-1 right-[-0.2rem] w-11 h-11 sm:w-12 sm:h-12 md:w-12 md:h-12 bg-white rounded-bl-3xl rounded-tr-3xl z-10 flex items-center justify-center">
                            <span className="custom-banner rounded-full w-7 h-7 flex items-center justify-center shadow-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3 text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                            </span>
                        </div>
                    </div>

                    <div className="relative flex flex-col items-start text-left w-full lg:ml-3 ml-1 pt-2 min-h-[190px]">
                        <div className="w-full lg:max-w-7xl space-y-3 md:space-y-2 pr-2 lg:pr-4 xl:pr-8 2xl:pr-20">
                            <h2 className="text-xl md:text-2xl font-bold font-nunito tracking-wider leading-tight steel-haze">
                                Plant Problems Early
                            </h2>

                            <p className="text-sm/6 md:text-sm/6 font-medium leading-normal tracking-wider custome-deskription line-clamp-4 lg:line-clamp-4">
                                Use our smart detection tool to spot diseases early and take action fast. With advanced technology, you can monitor plant health in real-time, identify signs of pests or nutrient deficiencies, and get personalized care tips. This helps prevent the spread of problems, saving your plants from damage and boosting their growth potential. Stay ahead with easy-to-understand insights that empower you to nurture your garden effectively and confidently.
                            </p>
                        </div>

                        <div className="w-full flex justify-end mt-auto">
                            <button className="text-sm/6 md:text-sm/6 font-medium underline tracking-wider hover:underline mr-4 sm:mr-6 md:mr-8 custome-deskription">
                                Baca Selengkapnya
                            </button>
                        </div>
                    </div>
                </div>

                <div className="w-full min-h-[48px] p-3 border border-gray-200 rounded-3xl tj-text-gray font-semibold flex flex-col lg:flex-row items-start gap-4">                                
                    <div className="relative w-full lg:w-64 xl:w-48 h-48 flex-shrink-0">
                        <img className="h-full w-full object-cover rounded-3xl" src={bannerWatering} alt="Smart Watering System"/>
                        <div className="absolute -top-1 right-[-0.2rem] w-11 h-11 sm:w-12 sm:h-12 md:w-12 md:h-12 bg-white rounded-bl-3xl rounded-tr-3xl z-10 flex items-center justify-center">
                            <span className="custom-banner rounded-full w-7 h-7 flex items-center justify-center shadow-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3 text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                            </span>
                        </div>
                    </div>

                    <div className="relative flex flex-col items-start text-left w-full lg:ml-3 ml-1 pt-2 min-h-[190px]">
                        <div className="w-full lg:max-w-7xl space-y-3 md:space-y-2 pr-2 lg:pr-4 xl:pr-8 2xl:pr-20">
                            <h2 className="text-xl md:text-2xl font-bold font-nunito tracking-wider leading-tight steel-haze">
                                Smart Watering System
                            </h2>

                            <p className="text-sm/6 md:text-sm/6 font-medium leading-normal tracking-wider custome-deskription line-clamp-4 lg:line-clamp-4">
                                Discover our intelligent watering system that adapts to your plants' needs. Using soil moisture sensors and weather data, it automatically adjusts watering schedules to ensure optimal hydration. The system prevents overwatering and underwatering, promoting healthy root development and reducing water waste. Get real-time notifications and control your garden's irrigation from anywhere through our user-friendly app.
                            </p>
                        </div>

                        <div className="w-full flex justify-end mt-auto">
                            <button className="text-sm/6 md:text-sm/6 font-medium underline tracking-wider hover:underline mr-4 sm:mr-6 md:mr-8 custome-deskription">
                                Baca Selengkapnya
                            </button>
                        </div>
                    </div>
                </div>      
            </div>
        </main>     
    );
}

export default ArtikelGuide;
