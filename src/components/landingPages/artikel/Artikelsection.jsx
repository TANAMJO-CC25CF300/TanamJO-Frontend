import React from "react";
import smartWateringImage from "@/assets/Banner/card-5.png";
import urbanFarmingImage from "@/assets/Banner/card-1.png";
import sustainableGardeningImage from "@/assets/Banner/card-7.png";

const articles = [
    {
        id: 1,
        title: "Smart Watering System",
        image: smartWateringImage,
        alt: "Smart Planting Needs",
        description: "Smart watering systems use sensors and automated controls to optimize water usage for plants. These systems monitor soil moisture, weather conditions, and plant needs to deliver the right amount of water at the right time, promoting healthy growth while conserving resources.",
        date: "22 February, 2024"
    },
    {
        id: 2,
        title: "Urban Farming",
        image: urbanFarmingImage,
        alt: "Urban Farming",
        description: "Urban farming brings agriculture to city environments, utilizing rooftops, balconies, and small plots to grow fresh produce and promote sustainability in urban areas.",
        date: "25 February, 2024"
    },
    {
        id: 3,
        title: "Sustainable Gardening",
        image: sustainableGardeningImage,
        alt: "Sustainable Gardening",
        description: "Sustainable gardening practices focus on creating eco-friendly gardens that work in harmony with nature. This includes using organic methods, composting, water conservation, and choosing native plants to support local biodiversity while reducing environmental impact.",
        date: "25 February, 2024"
    },
];

function Artikelsection() {
    return (

        <main>            
            <div className="flex-1 flex flex-col gap-5 md:gap-0 mt-8 md:mt-8 xl:mt-0">
                {articles.map((article) => (
                    <div key={article.id} className="min-h-[48px] p-0 rounded-3xl tj-text-gray font-semibold flex flex-col lg:flex-row items-start gap-3.5">
                        <div className="relative w-full lg:w-57 xl:w-57 h-37 flex-shrink-0">
                            <img className="h-full w-full object-cover rounded-3xl" src={article.image} alt={article.alt}/>
                            <div className="absolute -top-1 right-[-0.2rem] w-11 h-11 sm:w-12 sm:h-12 md:w-12 md:h-12 bg-white rounded-bl-3xl rounded-tr-3xl z-10 flex items-center justify-center">
                                <span className="custom-banner rounded-full w-7 h-7 flex items-center justify-center shadow-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3 text-white">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                                </span>
                            </div>
                        </div>

                        <div className="relative flex flex-col items-start text-left w-full lg:ml-2 ml-1 pt-0 mb-4 sm:mb-6 md:mb-8 lg:mb-10">
                            <div className="w-full lg:max-w-7xl space-y-3 md:space-y-2 pr-2 lg:pr-4 xl:pr-8 2xl:pr-20">
                                <h2 className="text-xl md:text-xl font-semibold font-nunito tracking-wider leading-tight steel-haze truncate">
                                    {article.title}
                                </h2>

                                <p className="text-sm/6 md:text-sm/6 font-medium leading-normal tracking-wider line-clamp-3 custome-deskription max-w-[35rem] mb-2.5">
                                    {article.description}
                                </p>

                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-3.5">
                                    <div className="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-gray-500">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                                        </svg>
                                        <span className="text-sm/6 custome-deskription font-medium leading-normal tracking-wider">{article.date}</span>
                                    </div>

                                    <a href="/" className="inline-flex items-center gap-1 text-sm font-semibold custome-deskription underline">
                                        <span>Read More</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>   

    );
}

export default Artikelsection;
