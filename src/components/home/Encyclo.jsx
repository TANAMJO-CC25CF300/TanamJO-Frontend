import React from "react";
import HarvestLanding from '../plantlis/HarvestLanding';
import HarvestSection from '../plantlis/HarvestSection';
import PlantCareItemSection from '../plantlis/PlantCareItemSection';
import card1 from '../../assets/Profile/profile-1.jpg';

function PlantGuide() {
    return (

        <main>
            
            <div>
                <HarvestLanding title="Our History" breadcrumb={["Home", "Plant Care Guide"]}/>
            </div>

            <div className="lg:mx-0 xl:mx-10 -mt-6 w-auto rounded-4xl text-center relative z-20 mb-5 shadow-md pattern-background">

                {/* area content */}
                <div className="mx-5 md:mx-15 rounded-3xl text-left space-y-4 pt-15 sm:pt-15 md:pt-16 lg:pt-18">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-3 md:space-y-0 md:space-x-8 lg:space-x-12 xl:space-x-50">
                        <div className="w-full md:w-1/2 space-y-2 sm:space-y-2">
                            <span className="inline-block text-sm sm:text-sm font-semibold tracking-wider text-white px-3 sm:px-4 rounded-full whitespace-nowrap overflow-hidden overflow-ellipsis w-[160px] h-8 leading-8 text-center custom-banner">
                                Tomato Insights
                            </span>

                            <h2 className="sm:text-2xl text-xl md:text-3xl font-bold font-nunito tracking-wider leading-tight steel-haze line-clamp-2">
                                Detect & Grow Better <br/> Tomatoes
                            </h2>
                        </div>

                        <div className="w-full md:w-1/2 space-y-2 md:space-y-2">
                            <p className="text-sm/6 md:text-sm/6 font-medium leading-normal tracking-wider sm:line-clamp-2 custome-deskription">
                                Easily analyze your tomato plant's condition by snapping a photo. Get expert guidance for healthier growth and better yields.
                            </p>
                        </div>
                    </div>

                    <div className="w-full mt-8">
                        <HarvestSection/>
                    </div>
                </div>         

                <div className="mx-5 md:mx-15 pt-12 sm:pt-14 md:pt-16 lg:pt-18 md:mt-0 grid grid-cols-1 lg:grid-cols-2 gap-6 text-left">       
                    <div className="w-full p-4 border border-gray-200 rounded-3xl text-left">
                        <h2 className="text-xl md:text-2xl font-bold font-nunito tracking-wider leading-tight mb-2 steel-haze">
                            Tomato Cultivation Guide
                        </h2>

                        <p className="text-sm/6 md:text-sm/6 font-medium leading-normal tracking-wider sm:line-clamp-2 custome-deskription">
                            Growing tomatoes requires a deep understanding of plant needs at each growth stage. Through our consultation approach, we help you choose the right tools, organic inputs, and cultivation methods...
                        </p>
                    </div>

                    <div className="w-full p-4 border border-gray-200 rounded-3xl text-left">
                        <h2 className="text-xl md:text-2xl font-bold font-nunito tracking-wider leading-tight mb-2 steel-haze">
                            Care & Pest Control
                        </h2>

                        <p className="text-sm/6 md:text-sm/6 font-medium leading-normal tracking-wider sm:line-clamp-2 custome-deskription">
                            Proper tomato plant care and effective pest control are crucial for optimal harvest results. We provide comprehensive guides on identifying and addressing common tomato plant issues...
                        </p>
                    </div>
                </div>    

                <div className="flex flex-col lg:flex-row items-start justify-between mx-5 md:px-10 pt-12 sm:pt-14 md:pt-16 lg:pt-18 md:mt-0 gap-4">
                    <div className="w-full lg:w-1/2 flex-shrink-0 space-y-2 sm:space-y-2 text-center lg:text-left">
                        <span className="inline-block text-sm sm:text-sm font-semibold tracking-wider text-white px-3 sm:px-4 rounded-full whitespace-nowrap overflow-hidden overflow-ellipsis w-[160px] h-8 leading-8 text-center custom-banner">
                            Tomato Insights
                        </span>

                        <h2 className="sm:text-2xl text-xl md:text-3xl font-bold font-nunito tracking-wider leading-tight steel-haze">
                            Choose the Best for <br /> Your Garden
                        </h2>

                        <p className="text-sm/6 md:text-sm/6 font-medium leading-normal tracking-wider custome-deskription line-clamp-3 lg:line-clamp-none max-w-[33rem] text-center md:text-center lg:text-left mx-auto lg:mx-0">
                            Growing tomatoes isn't just about planting — it's about knowing what your plants need at every stage. Through our consultation-based approach, we help you choose the right tools, organic inputs, and growing methods tailored specifically for tomatoes.
                        </p>
                        <ul className="mt-4 sm:mt-5 md:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-4 md:gap-5">
                            <li className="flex items-center gap-3 sm:gap-2.5 md:gap-3 text-base sm:text-base md:text-md/6 font-medium text-green-800">
                                <span className="flex-shrink-0 w-6 h-6 sm:w-6 sm:h-6 rounded-full bg-green-100 flex items-center justify-center">
                                    <svg className="w-4 h-4 sm:w-4 sm:h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                                High in antioxidants
                            </li>
                            <li className="flex items-center gap-2 sm:gap-2.5 md:gap-3 text-base sm:text-base md:text-md/6 font-medium text-green-800">
                                <span className="flex-shrink-0 w-6 h-6 sm:w-6 sm:h-6 rounded-full bg-green-100 flex items-center justify-center">
                                    <svg className="w-4 h-4 sm:w-4 sm:h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                                Quick harvest cycle
                            </li>
                            <li className="flex items-center gap-2 sm:gap-2.5 md:gap-3 text-base sm:text-base md:text-md/6 font-medium text-green-800">
                                <span className="flex-shrink-0 w-6 h-6 sm:w-6 sm:h-6 rounded-full bg-green-100 flex items-center justify-center">
                                    <svg className="w-4 h-4 sm:w-4 sm:h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                                Great for containers
                            </li>
                            <li className="flex items-center gap-2 sm:gap-2.5 md:gap-3 text-base sm:text-base md:text-md/6 font-medium text-green-800">
                                <span className="flex-shrink-0 w-6 h-6 sm:w-6 sm:h-6 rounded-full bg-green-100 flex items-center justify-center">
                                    <svg className="w-4 h-4 sm:w-4 sm:h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                                Easy to maintain
                            </li>
                        </ul>
                    </div>

                    <PlantCareItemSection />
                </div>

                <div className="flex flex-col md:flex-row items-stretch mt-15 md:mt-18 mx-6 md:mx-16 gap-0 md:gap-0">

                    <div className="flex-1 md:flex-[1.2] aspect-[4/3] md:aspect-auto md:min-h-[250px] xl:min-h-[300px] rounded-t-4xl md:rounded-tl-4xl md:rounded-bl-4xl md:rounded-tr-none md:rounded-br-none md:mr-0 mb-0 md:mb-0 overflow-hidden relative">
                            
                        <img src="src/assets/Banner/banner-1.png" className="absolute inset-0 w-full h-full object-cover" alt="Banner Image"/>
                        <div className="absolute inset-0 bg-gradient-to-r from-green-900/30 via-green-800/45 to-transparent lg:rounded-t-4xl"></div>

                    </div>

                    <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 py-6 sm:py-7 md:px-12 lg:px-16 bg-white rounded-2xl md:rounded-2xl md:-ml-4 -mt-8 md:mt-0 z-10 shadow-sm max-w-full md:max-w-[600px]">
                        <div className="flex flex-col items-start justify-start space-y-3 md:space-y-2 text-left">
                            <div className="w-full space-y-2">      
                                <span className="inline-block text-sm sm:text-sm font-semibold tracking-wider text-white px-3 sm:px-4 rounded-full whitespace-nowrap overflow-hidden overflow-ellipsis w-[160px] h-8 leading-8 text-center custom-banner">
                                    Tomato Insights
                                </span>      

                                <h2 className="text-xl md:text-2xl font-bold font-nunito tracking-wider leading-tight line-clamp-2 steel-haze">
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

                <div className="px-5 md:px-15 rounded-3xl text-left space-y-4 pt-15 sm:pt-15 md:pt-16 lg:pt-18">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-3 md:space-y-0 md:space-x-8 lg:space-x-12 xl:space-x-50">
                        <div className="w-full md:w-1/2 space-y-2 sm:space-y-2">
                            <span className="inline-block text-sm sm:text-sm font-semibold tracking-wider text-white px-3 sm:px-4 rounded-full whitespace-nowrap overflow-hidden overflow-ellipsis w-[160px] h-8 leading-8 text-center custom-banner">
                                Tomato Insights
                            </span>

                            <h2 className="sm:text-2xl text-xl md:text-3xl font-bold font-nunito tracking-wider leading-tight steel-haze line-clamp-2">
                                Discover & Learn <br/> About Plants
                            </h2>
                        </div>

                        <div className="w-full md:w-1/2 space-y-2 md:space-y-2">
                            <p className="text-sm/6 md:text-sm/6 font-medium leading-normal tracking-wider sm:line-clamp-2 custome-deskription">
                                Explore our comprehensive plant encyclopedia to learn about different species, care tips, and growing techniques for your garden.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-stretch mt-8 md:mt-10 ml-0 md:ml-0 mx-auto relative gap-6">
                        {/* Left Column */}
                        <div className="flex-1 flex flex-col">
                            <div className="w-full min-h-[280px] md:min-h-[260px] xl:min-h-[320px] rounded-t-3xl md:rounded-3xl overflow-hidden relative">
                                <img src="src/assets/Banner/banner-1.png" className="absolute inset-0 w-full h-full object-cover" alt="Banner Image" />
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
                                            <div>
                                                <div className="font-semibold font-nunito tracking-wider leading-tight steel-haze">Martin Bailey</div>
                                                <div className="text-sm/6 font-medium tracking-wider text-gray-500 leading-tight">Supervisor</div>
                                            </div>
                                        </div>
                                        <div className="sm:ml-auto text-sm/6 custome-deskription mt-1.5 sm:mt-0 font-medium leading-normal tracking-wider">9 february, 2024</div>
                                    </div>
                                    <div className="space-y-2.5">
                                        <h3 className="text-xl font-semibold font-nunito tracking-wider leading-tight steel-haze mb-3 sm:line-clamp-none line-clamp-2">What technology is used in vertical farming?</h3>
                                        <p className="text-sm/6 md:text-sm/6 font-medium leading-normal tracking-wider line-clamp-3 custome-deskription mb-4">
                                            Growing tomatoes isn't just about planting — it's about knowing what your plants need at every stage. Through our consultation-based approach, we help you choose the right tools, organic inputs, and growing methods tailored specifically for tomatoes.
                                        </p>
                                        <div>
                                            <a href="#" className="text-sm/6 font-semibold custome-deskription underline">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Artikel 1 */}
                        <div className="flex-1 min-h-[48px] p-0 rounded-3xl tj-text-gray font-semibold flex flex-col lg:flex-row items-start gap-4">                                
                            <div className="relative w-full lg:w-60 xl:w-60 h-40 flex-shrink-0">
                                <img className="h-full w-full object-cover rounded-3xl" src="src/assets/Banner/banner-1.png" alt="Smart Planting Needs"/>
                                <div className="absolute -top-1 right-[-0.2rem] w-11 h-11 sm:w-12 sm:h-12 md:w-12 md:h-12 bg-white rounded-bl-3xl rounded-tr-3xl z-10 flex items-center justify-center">
                                    <span className="custom-banner rounded-full w-7 h-7 flex items-center justify-center shadow-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3 text-white">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                        </svg>
                                    </span>
                                </div>
                            </div>

                            <div className="relative flex flex-col items-start text-left w-full lg:ml-2 ml-1 pt-2 min-h-[190px]">
                                <div className="w-full lg:max-w-7xl space-y-3 md:space-y-2 pr-2 lg:pr-4 xl:pr-8 2xl:pr-20">
                                    <h2 className="text-xl md:text-2xl font-bold font-nunito tracking-wider leading-tight steel-haze">
                                        Smart Watering System
                                    </h2>
                                    
                                    <p className="text-sm/6 md:text-sm/6 font-medium leading-normal tracking-wider line-clamp-3 custome-deskription max-w-[35rem] mb-3.5">
                                        Smart watering systems use sensors and automated controls to optimize water usage for plants. These systems monitor soil moisture, weather conditions, and plant needs to deliver the right amount of water at the right time, promoting healthy growth while conserving resources.
                                    </p>

                                    <div className="text-sm/6 custome-deskription font-medium leading-normal tracking-wider mb-4">
                                        15 February, 2024
                                    </div>

                                    <div>
                                        <a href="#" className="text-sm/6 font-semibold custome-deskription underline">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </div>
                
                </div>  
            </div>

        </main>
        
    );
}

export default PlantGuide;    