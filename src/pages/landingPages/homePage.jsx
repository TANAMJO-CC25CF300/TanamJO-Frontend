import React from 'react'
import { FaCheck } from "react-icons/fa";
import HarvestLandingAbout from '@components/landingPages/plantlis/HarvestLandingHome';
import HarvestCardSectionHome from '@/components/landingPages/plantlis/HarverstCardSectionHome';
import bannerImage from '@/assets/Banner/banner-1.png';
import LittleButton from '@/components/LittleButton';
import { cardData, insightCardData, blogCardData } from '@/constants/homePageData';

function HomePage() {
    return (
        <>        
            <div>
                <HarvestLandingAbout title="Our History" breadcrumb={["Home", "Plant Care Guide"]}/>
            </div>

            <div className="lg:mx-0 xl:mx-10 mt-0 w-auto text-center relative z-20 mb-5 shadow-md pattern-background">
                <div className="max-w-6xl mx-auto px-4 md:px-8 xl:px-16 grid grid-cols-1 md:grid-cols-3 gap-13 text-center mt-11">
                    <div className="flex items-center gap-4 justify-center md:justify-start">
                        <div className="w-13 h-13 custom-banner rounded-full shrink-0 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                        </div>
                        <div className="flex flex-col text-left">
                            <span className="font-bold steel-haze font-nunito tracking-wider text-lg">Expert Guidance</span>
                            <p className="text-sm custome-deskription font-nunito tracking-wide">Quick tips from tomato specialists.</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 justify-center md:justify-start">
                        <div className="w-13 h-13 custom-banner rounded-full shrink-0 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                        </div>
                        <div className="flex flex-col text-left">
                            <span className="font-bold steel-haze font-nunito tracking-wider text-lg">Learning Resources</span>
                            <p className="text-sm custome-deskription font-nunito tracking-wide">Easy guides and how-tos.</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 justify-center md:justify-start">
                        <div className="w-13 h-13 custom-banner rounded-full shrink-0 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <div className="flex flex-col text-left">
                            <span className="font-bold steel-haze font-nunito tracking-wider text-lg">Community Support</span>
                            <p className="text-sm custome-deskription font-nunito tracking-wide">Ask & share with fellow growers.</p>
                        </div>
                    </div>
                </div>

                <div className="w-full max-w-5xl border border-gray-300 rounded-2xl px-2 md:px-4 py-4 md:py-6 flex flex-col md:flex-row items-center gap-6 md:gap-8 mx-auto mt-15 bg-white">
                    <div className="w-full md:w-1/2 flex justify-start items-center md:pl-0 xl:pl-3">
                        <div className="bg-gray-200 w-full aspect-square rounded-2xl md:rounded-[20px] max-w-[260px] md:max-w-[300px] lg:max-w-[320px] flex items-center justify-center overflow-hidden ml-0 mt-0">
                            <img src={bannerImage} alt="Tomato Plant" className="w-full h-full object-cover rounded-2xl md:rounded-[20px]" />
                        </div>
                    </div>

                    <div className="flex flex-col justify-start items-start h-full pl-0 md:pl-0 xl:pl-0 mt-0 w-full">
                        <div className="w-full flex flex-col items-start justify-start h-full">
                            <h2 className="text-xl md:text-2xl font-bold steel-haze font-nunito tracking-wider mb-2 mt-0 text-left w-full pl-0 ml-0">
                                Growing Knowledge, Growing Tomatoes
                            </h2>
                            <p className="text-xs md:text-sm/6 custome-deskription mb-4 max-w-md font-medium tracking-wide text-left w-full pl-0 ml-0">
                                Greetings from Dosner Organic Farms. We distribute only organic herbs and produce directly to consumers.
                            </p>

                            <div className="grid grid-cols-2 gap-x-0 gap-y-5 mb-4 w-full">
                                <div className="flex items-center gap-2 py-1 justify-start">
                                    <div className="w-5 h-5 flex items-center justify-center rounded-full bg-yellow-400 text-white flex-shrink-0">
                                        <FaCheck size={11} />
                                    </div>
                                    <span className="text-sm custome-deskription font-nunito tracking-wide font-semibold whitespace-nowrap">Growing Tips</span>                                  
                                </div>

                                <div className="flex items-center gap-2 py-1 justify-start">
                                    <div className="w-5 h-5 flex items-center justify-center rounded-full bg-yellow-400 text-white flex-shrink-0">
                                        <FaCheck size={11} />
                                    </div>
                                    <span className="text-sm custome-deskription font-nunito tracking-wide font-semibold whitespace-nowrap">Seasonal Planting Guides</span>                                  
                                </div>

                                <div className="flex items-center gap-2 py-1 justify-start">
                                    <div className="w-5 h-5 flex items-center justify-center rounded-full bg-yellow-400 text-white flex-shrink-0">
                                        <FaCheck size={11} />
                                    </div>
                                    <span className="text-sm custome-deskription font-nunito tracking-wide font-semibold whitespace-nowrap">Organic Tomato Care</span>                                  
                                </div>

                                <div className="flex items-center gap-2 py-1 justify-start">
                                    <div className="w-5 h-5 flex items-center justify-center rounded-full bg-yellow-400 text-white flex-shrink-0">
                                        <FaCheck size={11} />
                                    </div>
                                    <span className="text-sm custome-deskription font-nunito tracking-wide font-semibold whitespace-nowrap">Soil & Fertilizer Advice</span>                                  
                                </div>

                                <div className="flex items-center gap-2 py-1 justify-start">
                                    <div className="w-5 h-5 flex items-center justify-center rounded-full bg-yellow-400 text-white flex-shrink-0">
                                        <FaCheck size={11} />
                                    </div>
                                    <span className="text-sm custome-deskription font-nunito tracking-wide font-semibold whitespace-nowrap">Pest & Disease Solutions</span>                                  
                                </div>

                                <div className="flex items-center gap-2 py-1 justify-start">
                                    <div className="w-5 h-5 flex items-center justify-center rounded-full bg-yellow-400 text-white flex-shrink-0">
                                        <FaCheck size={11} />
                                    </div>
                                    <span className="text-sm custome-deskription font-nunito tracking-wide font-semibold whitespace-nowrap">Beginner to Pro Guidance</span>                                  
                                </div>
                            </div>
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

                <div className="p-4 sm:p-5 md:p-6 lg:p-8 pt-15 sm:pt-15 md:pt-16 lg:pt-18">
                    <div className="mx-auto max-w-xl rounded-2xl space-y-3 sm:space-y-4 md:space-y-4"> 
                        <div className="space-y-2 md:space-y-2">
                            <span className="inline-block text-sm sm:text-sm font-semibold tracking-wider text-white px-3 sm:px-4 rounded-full whitespace-nowrap overflow-hidden overflow-ellipsis w-[160px] h-8 leading-8 text-center custom-banner">
                                Tomato Care
                            </span>

                            <h2 className="sm:text-2xl text-xl md:text-3xl font-bold font-nunito tracking-wider leading-tight steel-haze">
                                Expert Tomato Plant <br/> Consultation & Diagnosis
                            </h2>

                            <p className="text-sm/6 md:text-sm/6 font-medium leading-normal tracking-wider max-w-sm mx-auto custome-deskription">
                                Capture your tomato plant's condition and receive instant tips from experts.
                            </p>
                        </div>                    
                    </div>                    
                </div>

                <div className="mt-2.5 mx-5 md:mx-15 border border-gray-200 rounded-3xl">
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 md:gap-6 p-4 sm:p-5 md:p-6 lg:p-8">
                        {cardData.map((card) => (
                            <div key={card.id} className="rounded-3xl border border-gray-200 flex flex-col relative w-full h-auto sm:h-[380px]">
                            <div className="relative w-full px-3 pt-3">
                                <div className="w-full h-[180px] sm:h-[190px] flex items-start justify-center relative">
                                    <img src={bannerImage} alt={`Card ${card.id}`} className="w-full h-full object-cover rounded-2xl " />
                                    
                                    <div className="absolute inset-0 bg-black opacity-18 rounded-xl"></div>
                                        <div className="absolute -top-1 right-[-0.2rem] w-11 h-11 sm:w-12 sm:h-12 md:w-12 md:h-12 bg-white rounded-bl-3xl rounded-tr-3xl z-20 flex items-center justify-center">
                                            <span className="custom-banner rounded-full w-7 h-7 flex items-center justify-center shadow-sm">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3 text-white">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex-1 flex flex-col px-5 pt-6 pb-8 text-left">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className={`inline-block w-2 h-2 rounded-full ${card.categoryColor}`}></span>
                                        <span className="text-xs font-semibold tracking-wide uppercase font-nunito steel-haze">{card.category}</span>
                                    </div>

                                    <div className="font-semibold text-lg md:text-xl steel-haze mb-2 text-left tracking-wide font-nunito">
                                        {card.title}
                                    </div>

                                    <p className="text-sm/6 leading-normal text-left border-t border-gray-200 pt-3 custome-deskription font-medium tracking-wider line-clamp-3">
                                        {card.description}
                                    </p>
                                </div>
                            </div>
                        ))}
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

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-0 w-full pt-5">
                        {insightCardData.map((card, index) => (
                            <div key={index} className="relative bg-white border border-gray-200 rounded-3xl p-5 h-[200px]">
                                <div className="absolute top-3 right-3 bg-gray-100 hover:bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 text-gray-400">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                                </div>

                                <div className="flex flex-col h-full pt-8">
                                    <h3 className="font-semibold text-lg md:text-xl steel-haze text-left tracking-wide font-nunito mb-2">
                                        {card.title}
                                    </h3>

                                    <p className="text-sm/6 leading-normal text-left border-t border-gray-200 pt-3 custome-deskription font-medium tracking-wider">
                                        {card.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-stretch mt-15 md:mt-18 mx-6 md:mx-16 gap-0 md:gap-0">
                    <div className="flex-1 md:flex-[1.2] aspect-[4/3] md:aspect-auto md:min-h-[250px] xl:min-h-[300px] rounded-t-4xl md:rounded-tl-4xl md:rounded-bl-4xl md:rounded-tr-none md:rounded-br-none md:mr-0 mb-0 md:mb-0 overflow-hidden relative">
                        
                        <img src={bannerImage} className="absolute inset-0 w-full h-full object-cover" alt="Banner Image"/>
                        <div className="absolute inset-0 bg-gradient-to-r from-green-900/30 via-green-800/45 to-transparent lg:rounded-t-4xl"></div>
                    </div>

                    <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 py-6 sm:py-7 md:px-12 lg:px-16 bg-white rounded-3xl md:rounded-3xl md:-ml-4 -mt-8 md:mt-0 z-10 shadow-sm max-w-full md:max-w-[600px]">
                        <div className="flex flex-col items-start justify-start space-y-3 md:space-y-2 text-left">
                            <div className="w-full space-y-2">      
                                <span className="inline-block text-sm sm:text-sm font-semibold tracking-wider text-white px-3 sm:px-4 rounded-full whitespace-nowrap overflow-hidden overflow-ellipsis w-[160px] h-8 leading-8 text-center custom-banner">
                                    Tomato Insights
                                </span>      

                                <h2 className="sm:text-2xl text-xl md:text-3xl font-bold font-nunito tracking-wider leading-tight line-clamp-2 steel-haze">
                                    Identify Plant Problems <br/>Before They Spread
                                </h2>                
                            </div>

                            <div className="w-full space-y-2">
                                <p className="text-sm/6 md:text-sm/6 font-medium leading-normal tracking-wider custome-deskription">
                                    Use our smart detection tool to spot diseases early and take action fast. Improve plant care with accurate insights and easy-to-follow recommendations.
                                </p>
                            </div>
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

                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 md:gap-6 pt-5">
                        {blogCardData.map((item) => (
                            <div key={item.id} className="rounded-3xl flex flex-col overflow-hidden relative w-full h-auto group cursor-pointer">
                                <div className="relative w-full">
                                    <div className="w-full h-[180px] sm:h-[260px] rounded-2xl flex items-start justify-center relative overflow-hidden bg-gray-200">
                                        <img src={item.image} alt={item.title} className="w-full h-full object-cover brightness-90 group-hover:brightness-100 group-hover:scale-105 transition-all duration-500" />
                                        <div className="absolute top-3 left-3">
                                            <span className="inline-flex items-center bg-white/90 backdrop-blur-sm text-gray-700 text-xs tracking-wide font-bold px-4 py-1.5 rounded-full shadow-sm" style={{ letterSpacing: '0.08em' }}>
                                                <span className={`w-2 h-2 rounded-full ${item.categoryColor} mr-2`}></span>
                                                {item.category}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex-1 flex flex-col pt-4 text-left">
                                        <div className="flex items-center gap-3 mb-3 text-sm/6 text-gray-600 font-nunito tracking-wider">
                                            <span className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-full">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                                <time dateTime="2025-06-11" className="text-gray-700 font-nunito tracking-wide font-semibold">{item.date}</time>
                                            </span>

                                            <span className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-full">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                </svg>
                                                <span className="text-gray-700 font-nunito tracking-wide font-semibold">{item.author}</span>
                                            </span>
                                        </div>

                                        <div className="font-semibold text-lg md:text-lg steel-haze mb-3 text-left tracking-wide font-nunito group-hover:text-emerald-600 transition-colors duration-300">
                                            {item.title}
                                        </div>

                                        <p className="text-sm/6 leading-relaxed text-gray-600 font-nunito tracking-wide line-clamp-2">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </>
    )
}

export default HomePage;   