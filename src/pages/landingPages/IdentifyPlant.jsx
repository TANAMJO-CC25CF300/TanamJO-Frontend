import React, { useState } from "react";
import CameraCapture from "@components/landingPages/identyPlant/cameraCapture";
import DiseaseCard from "@components/landingPages/identyPlant/diseaseCard";
import HarvestLandingAbout from '@components/landingPages/plantlis/HarvestLandingAbout';

const mockRecommendations = [
  '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint."',
  '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint."',
  '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint."',
];

function IdentifyPlant() {

   const [showResult, setShowResult] = useState(false);
   const [identifiedCard, setIdentifiedCard] = useState(null);
 
   const handleIdentified = (image) => {
     setShowResult(true);
     setIdentifiedCard({
       disease: "Busuk Daun",
       plant: "Tomatitors",
       symptoms: "Daun Layu, Berkecoklatan",
       treatment: "Buang daun yang terinfeksi, semprot fungisida organik",
       image: image,
     });
   };

    return (

        <>        
            <div>
                <HarvestLandingAbout title="Our History" breadcrumb={["Home", "Identify Plant"]}/>
            </div>

            <div className="lg:mx-0 xl:mx-10 -mt-6 w-auto rounded-4xl text-center relative z-20 mb-5 shadow-md pattern-background">

              <div className="mx-5 md:mx-15 rounded-3xl text-left space-y-4 pt-15 sm:pt-15 md:pt-16 lg:pt-18">
                <div className="text-center space-y-4 mb-8">
                  <span className="inline-block text-sm font-semibold tracking-wider text-white px-3 sm:px-4 rounded-full whitespace-nowrap overflow-hidden overflow-ellipsis w-[160px] h-8 leading-8 text-center custom-banner">
                    Plant Care
                  </span>
                  <h1 className="sm:text-2xl text-xl md:text-3xl font-bold font-nunito tracking-wider leading-tight steel-haze">
						
                  </h1>
                  <p className="text-sm/6 md:text-sm/6 font-medium leading-normal tracking-wider max-w-sm mx-auto custome-deskription">
                    Capture your plant's condition and receive instant diagnosis from our AI system
                  </p>
                </div>

                <div>
                  <CameraCapture onIdentified={handleIdentified} />
                </div>

                {/* Hasil Identifikasi */}
                {showResult && identifiedCard && (
                  <div className="w-full max-w-5xl mx-auto mt-10 space-y-6">
                    <div className="p-6 transform transition-all duration-300 hover:scale-[1.02]">
                      <DiseaseCard
                        disease={identifiedCard.disease}
                        plant={identifiedCard.plant}
                        symptoms={identifiedCard.symptoms}
                        treatment={identifiedCard.treatment}
                        image={identifiedCard.image}
                      />
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-800">Expert Recommendations</h3>
                      <div className="grid gap-4">
                        {mockRecommendations.map((rec, idx) => (
                          <div
                            key={idx}
                            className="bg-gradient-to-r from-[#5B8C51] to-[#4A7A40] text-white rounded-xl px-6 py-4 text-sm md:text-base shadow-lg transform transition-all duration-300 hover:scale-[1.01] hover:shadow-xl"
                          >
                            {rec}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
                                   
            </div>
        </>
        
    );
}

export default IdentifyPlant;    