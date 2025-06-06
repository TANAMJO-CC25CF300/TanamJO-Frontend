import React from "react";
import HarvestLanding from '../plantlis/HarvestLandingHome';

function PlantGuide() {
    return (

        <main>            
            <div>
                <HarvestLanding title="Our History" breadcrumb={["Home", "Houseplants"]}/>
            </div>

            <div className="lg:mx-0 xl:mx-10 -mt-6 w-auto rounded-4xl text-center relative z-20 mb-5 shadow-md pattern-background">

                <div className="p-3.5 sm:p-4.5 mx-5 md:mx-15 mt-20 md:mt-20 rounded-3xl border border-gray-200 min-h-[130px]">
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
        </main>
        
    );
}

export default PlantGuide;    