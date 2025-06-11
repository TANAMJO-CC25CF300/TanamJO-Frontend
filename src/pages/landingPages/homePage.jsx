import React from "react";
import { FaCheck } from "react-icons/fa";
import HarvestLandingAbout from '@components/landingPages/plantlis/HarvestLandingHome';
import bannerImage from '@/assets/Banner/banner-1.png';
import LittleButton from '@/components/LittleButton';
import HarvestCardSectionHome from '@/components/landingPages/plantlis/HarverstCardSectionHome';

function HomePage() {

    return (

        <>        
            <div>
                <HarvestLandingAbout title="Our History" breadcrumb={["Home", "Plant Care Guide"]}/>
            </div>

            <div className="lg:mx-0 xl:mx-10 mt-0 w-auto text-center relative z-20 mb-5 shadow-md pattern-background">
                <div className="max-w-6xl mx-auto px-4 md:px-8 xl:px-16 grid grid-cols-1 md:grid-cols-3 gap-10 text-center mt-10">
                    <div className="flex items-center gap-4 justify-center md:justify-start">
                        <div className="w-16 h-16 bg-[#5B8C51] rounded-full shrink-0 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                        </div>
                        <div className="flex flex-col text-left">
                            <span className="font-bold text-gray-500">Expert Guidance</span>
                            <p className="text-sm text-gray-600">Quick tips from tomato specialists.</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 justify-center md:justify-start">
                        <div className="w-16 h-16 bg-[#5B8C51] rounded-full shrink-0 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                        </div>
                        <div className="flex flex-col text-left">
                            <span className="font-bold text-gray-500">Learning Resources</span>
                            <p className="text-sm text-gray-600">Easy guides and how-tos.</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 justify-center md:justify-start">
                        <div className="w-16 h-16 bg-[#5B8C51] rounded-full shrink-0 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <div className="flex flex-col text-left">
                            <span className="font-bold text-gray-500">Community Support</span>
                            <p className="text-sm text-gray-600">Ask & share with fellow growers.</p>
                        </div>
                    </div>
                </div>

                <div className="w-full max-w-6xl border border-gray-300 rounded-2xl px-2 md:px-4 py-4 md:py-6 flex flex-col md:flex-row items-center gap-6 md:gap-8 mx-auto mt-10 bg-white">
                    <div className="w-full md:w-1/2 flex justify-center items-center">
                        <div className="bg-gray-200 w-full aspect-square rounded-2xl md:rounded-[20px] max-w-[260px] md:max-w-[300px] lg:max-w-[320px] flex items-center justify-center overflow-hidden">
                            <img
                                src={bannerImage}
                                alt="Tomato Plant"
                                className="w-full h-full object-cover rounded-2xl md:rounded-[20px]"
                            />
                        </div>
                    </div>
                    <div className="md:w-1/2 text-left px-0 md:px-2">
                        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                            Growing Knowledge, Growing Tomatoes
                        </h2>
                        <p className="text-xs md:text-sm text-gray-600 mb-4 font-bold">
                            Greetings from Dosner Organic Farms. We distribute only organic herbs and produce directly to consumers.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 mb-4 font-bold">
                            <div className="flex items-start gap-2">
                                <div className="w-4 h-4 flex items-center justify-center rounded-full bg-[#EDDD5E] text-white">
                                    <FaCheck size={9} />
                                </div>
                                <span className="text-xs md:text-sm text-gray-700">Tomato Growing Tips</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <div className="w-4 h-4 flex items-center justify-center rounded-full bg-[#EDDD5E] text-white">
                                    <FaCheck size={9} />
                                </div>
                                <span className="text-xs md:text-sm text-gray-700">Seasonal Planting Guides</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <div className="w-4 h-4 flex items-center justify-center rounded-full bg-[#EDDD5E] text-white">
                                    <FaCheck size={9} />
                                </div>
                                <span className="text-xs md:text-sm text-gray-700">Organic Tomato Care</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <div className="w-4 h-4 flex items-center justify-center rounded-full bg-[#EDDD5E] text-white">
                                    <FaCheck size={9} />
                                </div>
                                <span className="text-xs md:text-sm text-gray-700">Soil & Fertilizer Advice</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <div className="w-4 h-4 flex items-center justify-center rounded-full bg-[#EDDD5E] text-white">
                                    <FaCheck size={9} />
                                </div>
                                <span className="text-xs md:text-sm text-gray-700">Pest & Disease Solutions</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <div className="w-4 h-4 flex items-center justify-center rounded-full bg-[#EDDD5E] text-white">
                                    <FaCheck size={9} />
                                </div>
                                <span className="text-xs md:text-sm text-gray-700">Beginner to Pro Guidance</span>
                            </div>
                        </div>

                        <div className="mt-4">
                            <LittleButton>Know More</LittleButton>
                        </div>
                    </div>
                </div>

                <div className="mt-15 mx-5 md:mx-15 rounded-3xl text-left space-y-4">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-3 md:space-y-0 md:space-x-8 lg:space-x-12 xl:space-x-50">
                        <div className="w-full md:w-1/2 space-y-2 sm:space-y-2">
                            <span className="inline-block text-sm sm:text-sm font-semibold tracking-wider text-white px-3 sm:px-4 rounded-full whitespace-nowrap overflow-hidden overflow-ellipsis w-[160px] h-8 leading-8 text-center custom-banner">
                                Tomato Insights
                            </span>

                            <h2 className="sm:text-2xl text-xl md:text-3xl font-bold font-nunito tracking-wider leading-tight line-clamp-2 steel-haze">
                                Detect & Grow Better <br/> Tomatoes
                            </h2>
                        </div>

                        <div className="w-full md:w-1/2 space-y-2 md:space-y-2">
                            <p className="text-sm/6 md:text-sm/6 font-medium leading-normal tracking-wider sm:line-clamp-2 custome-deskription">
                                Easily analyze your tomato plant's condition by snapping a photo. Get expert guidance for healthier growth and better yields.
                            </p>
                        </div>
                    </div>

                    <div className="w-full mt-7">
                        <HarvestCardSectionHome/>
                    </div>
                </div>

                <div className="mt-15 mx-5 md:mx-15 rounded-3xl text-left space-y-4">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-3 md:space-y-0 md:space-x-8 lg:space-x-12 xl:space-x-50">
                        <div className="w-full md:w-1/2 space-y-2 sm:space-y-2">
                            <span className="inline-block text-sm sm:text-sm font-semibold tracking-wider text-white px-3 sm:px-4 rounded-full whitespace-nowrap overflow-hidden overflow-ellipsis w-[160px] h-8 leading-8 text-center custom-banner">
                                Tomato Insights
                            </span>

                            <h2 className="sm:text-2xl text-xl md:text-3xl font-bold font-nunito tracking-wider leading-tight line-clamp-2 steel-haze">
                                Detect & Grow Better <br/> Tomatoes
                            </h2>
                        </div>

                        <div className="w-full md:w-1/2 space-y-2 md:space-y-2">
                            <p className="text-sm/6 md:text-sm/6 font-medium leading-normal tracking-wider sm:line-clamp-2 custome-deskription">
                                Easily analyze your tomato plant's condition by snapping a photo. Get expert guidance for healthier growth and better yields.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </>
        
    );
}

export default HomePage;    
