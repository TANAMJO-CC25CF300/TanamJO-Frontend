import React from "react";
import HarvestLandingAbout from '@components/landingPages/plantlis/HarvestLandingAbout';
import PlantCareItemSection from '@components/landingPages/plantlis/PlantCareItemSection';
import ArtikelList from '@components/landingPages/artikel/ArtikelList';
import Artikelsection from '@components/landingPages/Artikel/Artikelsection';
// import image1 from '../../assets/banner/image-1.webp';
// import image2 from '../../assets/banner/image-2.webp';

function Encyclopedia() {
    return (
        <>
            <div>
                <HarvestLandingAbout title="Our History" breadcrumb={["Home", "About Us"]}/>
            </div>

            <div className="lg:mx-0 xl:mx-10 -mt-6 w-auto rounded-4xl text-center relative z-20 mb-5 shadow-md pattern-background">

                {/* area content */}
                <div className="p-3.5 sm:p-4.5 mx-8 md:mx-20 mt-8 md:mt-10 rounded-3xl">
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
            </div>
        </>
    );
}

export default Encyclopedia;    