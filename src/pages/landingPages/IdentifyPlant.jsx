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

        {/* area content */}
        <div className="p-4 sm:p-5 md:p-6 lg:p-8 pt-15 sm:pt-15 md:pt-16 lg:pt-18">
          <div className="mx-auto max-w-xl rounded-2xl space-y-3 sm:space-y-4 md:space-y-4"> 
            <div className="space-y-2 md:space-y-2">
              <h3 className="inline-block text-sm sm:text-sm font-semibold tracking-wider text-white px-3 sm:px-4 rounded-full whitespace-nowrap overflow-hidden overflow-ellipsis w-[160px] h-8 leading-8 text-center custom-banner">
                Smart Plant Care
              </h3>

              <h2 className="sm:text-2xl text-xl md:text-3xl font-bold font-nunito tracking-wider leading-tight steel-haze">
                Disease Plant Identification <br/> & Diagnosis
              </h2>

              <p className="text-sm/6 md:text-sm/6 font-medium leading-normal tracking-wider max-w-sm mx-auto custome-deskription">
                Capture your plant's condition and receive instant diagnosis from our AI system
              </p>              
            </div>                    
          </div>                    
        </div>

        <div className="mt-0 mx-5 md:mx-15">
          <CameraCapture onIdentified={handleIdentified} />
        </div>

        {showResult && identifiedCard && (
            <div className="w-full max-w-5xl mx-auto mt-10 space-y-6 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 border border-gray-300 rounded-xl">
              <div className="w-full">
                <div className="p-6 flex justify-center">
                  <DiseaseCard
                    disease={identifiedCard.disease}
                    plant={identifiedCard.plant}
                    symptoms={identifiedCard.symptoms}  
                    treatment={identifiedCard.treatment}
                    image={identifiedCard.image}
                  />
                </div>
              </div>

              <div className="space-y-4 w-full flex flex-col items-center">
                <h3 className="text-lg font-semibold text-gray-800 text-center">Expert Recommendations</h3>
                <div className="flex flex-col w-full max-w-5xl mx-auto px-4 space-y-6">
                  {mockRecommendations.map((rec, idx) => (
                    <div
                      key={idx}
                      className="group relative overflow-hidden bg-white rounded-2xl border border-gray-200"
                    >
                      <div className="p-6">
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#5B8C51] to-[#4A7A40] flex items-center justify-center text-white font-semibold">
                            {idx + 1}
                          </div>
                          <div className="ml-4 h-0.5 flex-1 bg-gradient-to-r from-[#5B8C51] to-[#4A7A40] opacity-20"></div>
                        </div>

                        <p className="text-gray-500 text-sm/7 md:text-base/7 font-nunito tracking-wider leading-tight font-medium text-left">
                          {rec}
                        </p>

                      </div>
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#5B8C51] to-[#4A7A40]"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
        )}

      </div>
                                
    </>
      
  );
}

export default IdentifyPlant;    