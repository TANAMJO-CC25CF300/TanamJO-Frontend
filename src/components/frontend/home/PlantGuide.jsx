import React from "react";
import { useNavigate } from "react-router-dom";
import HarvestLanding from '../plantlis/HarvestLandingHome';
import HarvestSection from '../plantlis/HarvestCardSection';
import ArtikelGuide from '../Artikel/ArtikelGuide';
import bannerImage from '../../../assets/Banner/banner-1.png';

function PlantGuide() {
    const navigate = useNavigate();

    return (

        <main>            
            <div>
                <HarvestLanding title="Our History" breadcrumb={["Home", "Plant Care Guide"]}/>
            </div>

            <div className="lg:mx-0 xl:mx-10 -mt-6 w-auto rounded-4xl text-center relative z-20 mb-5 shadow-md pattern-background">

                {/* area content */}
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

                <div className="mx-5 md:mx-15 mt-3 md:mt-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div onClick={() => navigate('/CherryTomato')} className="w-full min-h-[48px] p-3.5 border border-gray-200 rounded-full font-medium text-sm/6 md:text-md tracking-wider flex items-center justify-center truncate cursor-pointer custome-deskription hover:bg-gray-50 transition-colors">
                        Cherry Tomatoes
                    </div>

                    <div onClick={() => navigate('/Beefsetak_tomato')} className="w-full min-h-[48px] p-3.5 border border-gray-200 rounded-full font-medium text-sm/6 md:text-md tracking-wider flex items-center justify-center truncate cursor-pointer custome-deskription hover:bg-gray-50 transition-colors">
                        Beefsteak Tomatoes
                    </div>

                    <div onClick={() => navigate('/RomaTomato')} className="w-full min-h-[48px] p-3.5 border border-gray-200 rounded-full font-medium text-sm/6 md:text-md tracking-wider flex items-center justify-center truncate cursor-pointer custome-deskription hover:bg-gray-50 transition-colors">
                        Roma Tomatoes
                    </div>

                    <div onClick={() => navigate('/HeirloomTomato')} className="w-full min-h-[48px] p-3.5 border border-gray-200 rounded-full font-medium text-sm/6 md:text-md tracking-wider flex items-center justify-center truncate cursor-pointer custome-deskription hover:bg-gray-50 transition-colors">
                        Heirloom Tomatoes
                    </div>
                </div>

                <div className="p-3.5 sm:p-4.5 mx-5 md:mx-15 mt-8 md:mt-10 rounded-3xl border border-gray-200 min-h-[130px]">
                    <div className="text-left space-y-3 sm:space-y-4">
                        <div className="flex flex-col items-start space-y-3 md:space-y-2">    
                            <h2 className="text-xl md:text-2xl font-bold font-nunito tracking-wider leading-tight steel-haze">
                                Expert Tomato Care 
                            </h2>

                            <p className="text-sm/6 md:text-sm/6 font-medium leading-normal tracking-wider custome-deskription line-clamp-4">
                                Growing tomatoes isn't just about planting — it's about knowing what your plants need at every stage. Through our consultation-based approach, we help you choose the right tools, organic inputs, and growing methods tailored specifically for tomatoes. Whether you're dealing with soil issues, unsure about watering schedules, or need advice on pests, we're here to guide you with expert support every step of the way.
                            </p>
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
                        <HarvestSection/>
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

                <div className="mt-17 md:mt-18 mx-5 md:mx-15 rounded-2xl text-left space-y-1">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-3 md:space-y-0 md:space-x-8 lg:space-x-12 xl:space-x-48">
                        <div className="w-full md:w-1/2 space-y-3 md:space-y-2">
                            <span className="inline-block text-sm sm:text-sm font-semibold tracking-wider text-white px-3 sm:px-4 rounded-full whitespace-nowrap overflow-hidden overflow-ellipsis w-[160px] h-8 leading-8 text-center custom-banner">
                                Important Article
                            </span>      

                            <h2 className="sm:text-2xl text-xl md:text-3xl font-bold font-nunito tracking-wider leading-tight line-clamp-2 steel-haze">
                                Tomato Health: Detect <br/> Early Problems
                            </h2>                
                        </div>

                        <div className="w-full md:w-1/2 space-y-3 md:space-y-2">
                            <p className="text-sm/6 md:text-sm/6 font-medium leading-normal tracking-wider line-clamp-3 md:line-clamp-2 custome-deskription">
                                Keep your tomato plants healthy by spotting early signs of disease and stress. Use simple tools to detect problems before they affect your harvest.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-8">
                        <ArtikelGuide />
                    </div>        
                </div>                              
            </div>
        </main>
        
    );
}

export default PlantGuide;    