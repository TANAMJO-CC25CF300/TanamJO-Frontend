import React from "react";
import { useLocation } from 'react-router-dom';
import HarvestLandingAbout from '@components/landingPages/plantlis/HarvestLandingAbout';

function ArtikelCardBlog() {
    const location = useLocation();
    const cardData = location.state?.cardData;

    if (!cardData) {
        return <div>Data tidak ditemukan. Silakan kembali ke halaman utama.</div>;
    }

    // Default content if not provided in cardData
    const defaultContent = {
        title: "Plant Details",
        description: "A healthy plant with vibrant green leaves and developing fruits. Regular watering and proper sunlight exposure are essential for optimal growth.",
        category: "Plants",
        categoryColor: "bg-emerald-500",
        date: "2024-03-20",
        author: "GreenLeaf Team",
        classification: {
            species: "Species Name",
            genus: "Genus Name",
            family: "Family Name",
            order: "Order Name",
            classis: "Class Name",
            phylum: "Phylum Name"
        },
        characteristics: {
            toxicity: "Non-toxic",
            lifespan: "Perennial",
            leafColor: "Green",
            fruitColor: "Red",
            stemColor: "Green",
            leafType: "Simple",
            growthRate: "Medium",
            waterNeeds: "Moderate"
        },
        careInstructions: [
            "This plant requires full sunlight for at least 6–8 hours per day.",
            "Grows in well-drained soil with a pH between 6.0 and 6.8.",
            "Ensure adequate spacing (24–36 inches) to maintain good air circulation."
        ]
    };

    // Merge default content with cardData
    const content = {
        ...defaultContent,
        ...cardData,
        classification: {
            ...defaultContent.classification,
            ...(cardData.classification || {})
        },
        characteristics: {
            ...defaultContent.characteristics,
            ...(cardData.characteristics || {})
        }
    };

    return (
        <>
            <div>
                <HarvestLandingAbout title={content.title} breadcrumb={["Home", content.title]}/>
            </div>

            <div className="lg:mx-0 xl:mx-10 -mt-6 w-auto rounded-4xl text-center relative z-20 mb-5 shadow-md pattern-background">
                <div className="flex flex-col lg:flex-row items-start mx-5 md:mx-15 py-6 md:py-8 gap-4 md:gap-8 rounded-3xl mt-13 md:mt-13">
                    <div className="w-full lg:w-[320px] h-[280px] lg:h-[320px] relative overflow-hidden rounded-3xl group">
                        <div className="absolute inset-0 bg-black opacity-20 z-10"></div>
                        <img src={content.image || "/images/default-plant.jpg"} alt={content.title} className="w-full h-full object-cover"/>
                    </div>
                    
                    <div className="flex-1 pl-0 pr-0 lg:pl-0 lg:pr-0 text-left mt-8">
                        <h2 className="text-xl sm:text-2xl lg:text-2xl font-bold font-nunito tracking-wider leading-tight steel-haze mt-2.5 md:mt-0">
                            {content.title}
                        </h2>
                        
                        <div className="flex flex-wrap items-center gap-1 text-xs sm:text-sm min-h-[28px] justify-start pl-0 mt-1 mb-2">
                            {content.category && (
                                <span className={`inline-flex items-center bg-white/90 backdrop-blur-sm text-gray-700 text-xs tracking-wide font-bold px-4 py-1.5 rounded-full shadow-sm mr-2`} style={{ letterSpacing: '0.08em' }}>
                                    <span className={`w-2 h-2 rounded-full ${content.categoryColor} mr-2`}></span>
                                    {content.category}
                                </span>
                            )}
                            {content.date && (
                                <span className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-full mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <time className="text-gray-700 font-nunito tracking-wide font-semibold">{content.date}</time>
                                </span>
                            )}
                            {content.author && (
                                <span className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                    <span className="text-gray-700 font-nunito tracking-wide font-semibold">{content.author}</span>
                                </span>
                            )}
                        </div>

                        <p className="text-sm/7 md:text-base/7 font-medium leading-relaxed font-nunito tracking-wide text-gray-500 ">
                            {content.description}
                        </p>
                    </div>
                </div>               

                <div className="w-full -mt-2 mb-4 px-0">
                    <div className="mx-5 md:mx-15">
                        <div className="rounded-2xl mt-0 px-0 sm:px-0 min-h-[60px] flex flex-col items-start justify-start">
                            <div className="flex items-center justify-start mt-5 mb-5">
                                <h2 className="text-xl sm:text-2xl lg:text-2xl font-bold font-nunito tracking-wider leading-tight steel-haze mt-2.5 md:mt-0">
                                    Scientific classification
                                </h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full text-left">
                                {Object.entries(content.classification).map(([key, value]) => (
                                    <div key={key} className="bg-white border border-gray-100 rounded-2xl px-6 py-5 text-left shadow-sm">
                                        <div className="flex items-center gap-2 mb-3">
                                            <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                            <div className="text-sm font-semibold text-emerald-600 tracking-wide capitalize">{key}</div>
                                        </div>
                                        <div className="text-base text-gray-700 group">
                                            {value}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <div className="w-full max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-x-8 sm:gap-y-6 lg:gap-x-12 lg:gap-y-8 mt-8 sm:mt-14 mb-6 sm:mb-8 text-left px-4 sm:px-6">
                                {Object.entries(content.characteristics).map(([key, value]) => (
                                    <div key={key} className="flex items-center gap-3 sm:gap-5 bg-white rounded-xl sm:rounded-2xl shadow border border-gray-100 py-3 sm:py-4 transition hover:shadow-md px-4 sm:px-6">
                                        <span className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-emerald-50">
                                            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </span>
                                        <div>
                                            <div className="font-semibold text-gray-800 text-sm sm:text-base mb-0.5 sm:mb-1">{value}</div>
                                            <div className="text-xs text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col space-y-5 md:space-y-6 mt-2.5">
                            {content.careInstructions.map((instruction, index) => (
                                <p key={index} className="text-sm/7 md:text-base/7 font-medium leading-relaxed font-nunito tracking-wide text-gray-500 text-left w-full pl-0 sm:pl-0 ml-0">
                                    {instruction}
                                </p>
                            ))}
                        </div>

                    </div>
                </div>
            </div> 
        </>
    );
}

export default ArtikelCardBlog;