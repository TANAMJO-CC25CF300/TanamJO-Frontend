import React from "react";
import Header from '@/layout/landingPages/header';
import bannerImage from '@/assets/Banner/banner-1.png';

function HarvestLandingAbout({ 

    title = "Harvest Summary", 
    breadcrumb = ["Home", "Harvest", "Summary"]
  
}) {

    return (

        <>        
            <div className="mt-0 mx-0 md:mx-0 lg:mx-0 xl:mx-10 xl:mt-10 relative shadow-md rounded-4xl">
                <div className="relative w-full xl:rounded-t-4xl h-[380px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bannerImage})` }}>

                    <div className="absolute inset-0 bg-black/28 lg:rounded-t-4xl"></div>

                    <Header />

                    <div className="relative z-30 h-full flex flex-col justify-center px-4 md:px-0 xl:px-4">
                        <div className="mx-auto text-left">
                            <h1 className="text-3xl md:text-4xl font-bold text-white tracking-wide animate-slide-up">
                                {title}
                            </h1>

                            <div className="flex items-center text-sm/6 text-white transform translate-y-px font-bold tracking-wide">
                                <span>{breadcrumb[0]}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1.5 mr-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5l7 7-7 7" />
                                </svg>
                                <span>{breadcrumb[1]}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </>

    );
}

export default HarvestLandingAbout;