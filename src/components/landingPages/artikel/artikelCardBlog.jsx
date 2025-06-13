import React from "react";
import { useNavigate } from 'react-router-dom';
import HarvestLandingAbout from '@components/landingPages/plantlis/HarvestLandingAbout';

function ArtikelCardBlog() {
    const navigate = useNavigate();
    return (
        <>
            <div>
                <HarvestLandingAbout title="Our History" breadcrumb={["Home", "Artikel"]}/>
            </div>

            <div className="lg:mx-0 xl:mx-10 -mt-6 w-auto rounded-4xl text-center relative z-20 mb-5 shadow-md pattern-background">
                <div className="flex flex-col lg:flex-row items-start mx-5 md:mx-15 py-6 md:py-8 gap-4 md:gap-8 rounded-3xl mt-13 md:mt-13">
                    <div className="w-full lg:w-[320px] h-[280px] lg:h-[320px] relative overflow-hidden rounded-3xl group">
                        <div className="absolute inset-0 bg-black opacity-20 z-10"></div>
                        <img src="/images/tomato.jpg" alt="Tomato Plant" className="w-full h-full object-cover"/>
                    </div>
                    
                    <div className="flex-1 pl-0 pr-0 lg:pl-0 lg:pr-0 text-left mt-8">
                        <h2 className="text-xl sm:text-2xl lg:text-2xl font-bold font-nunito tracking-wider leading-tight steel-haze mt-2.5 md:mt-0">
                            Tomato Plant Details
                        </h2>
                        
                        <div className="flex flex-wrap items-center gap-1 text-xs sm:text-sm min-h-[28px] justify-start pl-0 mt-1 mb-2">
                            <span className="text-sm/7 font-medium text-gray-500 leading-normal tracking-wide truncate text-left">
                                Also known as: Climbing poison ivy
                            </span>
                        </div>

                        <p className="text-sm/7 md:text-base/7 font-medium leading-relaxed font-nunito tracking-wide text-gray-500 ">
                            A healthy tomato plant with vibrant green leaves and developing fruits. Regular watering and proper sunlight exposure are essential for optimal growth. Tomatoes are one of the most popular garden vegetables, known for their versatility in cooking and rich nutritional content. They require consistent care including regular watering, proper fertilization, and pest management. The plant typically grows to 3-6 feet tall and produces clusters of yellow flowers that develop into fruits. When properly cared for, tomato plants can yield abundant harvests throughout the growing season.
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
                                <div className="bg-white border border-gray-100 rounded-2xl px-6 py-5 text-left shadow-sm">
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div className="text-sm font-semibold text-emerald-600 tracking-wide">Species</div>
                                    </div>
                                    <div className="italic text-base text-gray-700 group">
                                        Poison Ivy (<span className="not-italic">Toxicodendron radicans</span>)
                                    </div>
                                </div>

                                <div className="bg-white border border-gray-100 rounded-2xl px-6 py-5 text-left shadow-sm">
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                            </svg>
                                        </div>
                                        <div className="text-sm font-semibold text-emerald-600 tracking-wide">Genus</div>
                                    </div>
                                    <a href="#" className="text-base text-gray-700 underline italic">Toxicodendron</a>
                                </div>

                                <div className="bg-white border border-gray-100 rounded-2xl px-6 py-5 text-left shadow-sm">
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                            </svg>
                                        </div>
                                        <div className="text-sm font-semibold text-emerald-600 tracking-wide">Family</div>
                                    </div>
                                    <a href="#" className="text-base text-gray-700 underline">Cashew</a>
                                </div>

                                <div className="bg-white border border-gray-100 rounded-2xl px-6 py-5 text-left shadow-sm">
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                            </svg>
                                        </div>
                                        <div className="text-sm font-semibold text-emerald-600 tracking-wide">Order</div>
                                    </div>
                                    <a href="#" className="text-base text-gray-700 underline">Maples, mangos, mahogany, citrus, and allies</a>
                                </div>

                                <div className="bg-white border border-gray-100 rounded-2xl px-6 py-5 text-left shadow-sm">
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                                            </svg>
                                        </div>
                                        <div className="text-sm font-semibold text-emerald-600 tracking-wide">Class</div>
                                    </div>
                                    <a href="#" className="text-base text-gray-700 underline italic">Dicotyledons</a>
                                </div>

                                <div className="bg-white border border-gray-100 rounded-2xl px-6 py-5 text-left shadow-sm">
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div className="text-sm font-semibold text-emerald-600 tracking-wide">Phylum</div>
                                    </div>
                                    <a href="#" className="text-base text-gray-700 underline">Vascular plants</a>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm mt-13 hover:shadow-sm transition-shadow duration-300">
                            <div className="max-w-2xl mx-auto">
                                <div className="mb-6">
                                    <div className="w-16 h-16 mx-auto bg-emerald-50 rounded-full flex items-center justify-center mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>

                                    <h2 className="text-xl sm:text-2xl lg:text-2xl font-bold font-nunito tracking-wider leading-tight steel-haze mb-2.5 ">
                                        Instantly identify plants with a snap
                                    </h2>

                                    <p className="text-sm/7 md:text-base/7 font-medium leading-relaxed font-nunito tracking-wide text-gray-500 ">
                                        Snap a photo for instant plant ID, gaining quick insights on 
                                        <span className="font-semibold text-emerald-600"> disease prevention, treatment, toxicity, care, uses, and symbolism</span>, etc.
                                    </p>
                                </div>

                                <button 
                                    onClick={() => navigate('/identify-plant')}
                                    className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white font-semibold rounded-full hover:bg-emerald-700 transition-colors duration-300 shadow-md hover:shadow-lg"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    
                                    Take a Photo
                                </button>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <div className="w-full max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-x-8 sm:gap-y-6 lg:gap-x-12 lg:gap-y-8 mt-8 sm:mt-14 mb-6 sm:mb-8 text-left px-4 sm:px-6">
                                {/* Toxicity */}
                                <div className="flex items-center gap-3 sm:gap-5 bg-white rounded-xl sm:rounded-2xl shadow border border-gray-100 w-full py-3 sm:py-4 transition hover:shadow-md px-4 sm:px-6">
                                    <span className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-red-50">
                                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </span>
                                    <div>
                                        <div className="font-semibold text-gray-800 text-sm sm:text-base mb-0.5 sm:mb-1">Toxic to Humans</div>
                                        <div className="text-xs text-gray-500">Toxicity</div>
                                    </div>
                                </div>
                                {/* Perennial */}
                                <div className="flex items-center gap-3 sm:gap-5 bg-white rounded-xl sm:rounded-2xl shadow border border-gray-100 py-3 sm:py-4 transition hover:shadow-md px-4 sm:px-6">
                                    <span className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-100">
                                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
                                            <circle cx="12" cy="12" r="10" />
                                        </svg>
                                    </span>
                                    <div>
                                        <div className="font-semibold text-gray-800 text-sm sm:text-base mb-0.5 sm:mb-1">Perennial</div>
                                        <div className="text-xs text-gray-500">Lifespan</div>
                                    </div>
                                </div>
                                {/* Leaf Color */}
                                <div className="flex items-center gap-3 sm:gap-5 bg-white rounded-xl sm:rounded-2xl shadow border border-gray-100 py-3 sm:py-4 transition hover:shadow-md px-4 sm:px-6">
                                    <span className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-50">
                                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </span>
                                    <div>
                                        <div className="font-semibold text-gray-800 text-sm sm:text-base mb-0.5 sm:mb-1">Green, Yellow, Red</div>
                                        <div className="text-xs text-gray-500">Leaf Color</div>
                                    </div>
                                </div>
                                {/* Fruit Color */}
                                <div className="flex items-center gap-3 sm:gap-5 bg-white rounded-xl sm:rounded-2xl shadow border border-gray-100 py-3 sm:py-4 transition hover:shadow-md px-4 sm:px-6">
                                    <span className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-50">
                                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <circle cx="12" cy="12" r="6" />
                                        </svg>
                                    </span>
                                    <div>
                                        <div className="font-semibold text-gray-800 text-sm sm:text-base mb-0.5 sm:mb-1">White</div>
                                        <div className="text-xs text-gray-500">Fruit Color</div>
                                    </div>
                                </div>
                                {/* Stem Color */}
                                <div className="flex items-center gap-3 sm:gap-5 bg-white rounded-xl sm:rounded-2xl shadow border border-gray-100 py-3 sm:py-4 transition hover:shadow-md px-4 sm:px-6">
                                    <span className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-100">
                                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v20m0 0c-4-4-8-8-8-12a8 8 0 0116 0c0 4-4 8-8 12z" />
                                        </svg>
                                    </span>
                                    <div>
                                        <div className="font-semibold text-gray-800 text-sm sm:text-base mb-0.5 sm:mb-1">Green, Red</div>
                                        <div className="text-xs text-gray-500">Stem Color</div>
                                    </div>
                                </div>
                                {/* Leaf Type */}
                                <div className="flex items-center gap-3 sm:gap-5 bg-white rounded-xl sm:rounded-2xl shadow border border-gray-100 py-3 sm:py-4 transition hover:shadow-md px-4 sm:px-6">
                                    <span className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-emerald-50">
                                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            {/* You can add a leaf icon here if you want */}
                                        </svg>
                                    </span>
                                    <div>
                                        <div className="font-semibold text-gray-800 text-sm sm:text-base mb-0.5 sm:mb-1">Leaf Type</div>
                                        <div className="text-xs text-gray-500">Leaf Type</div>
                                    </div>
                                </div>
                                {/* Growth Rate */}
                                <div className="flex items-center gap-3 sm:gap-5 bg-white rounded-xl sm:rounded-2xl shadow border border-gray-100 py-3 sm:py-4 transition hover:shadow-md px-4 sm:px-6">
                                    <span className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-50">
                                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                        </svg>
                                    </span>
                                    <div>
                                        <div className="font-semibold text-gray-800 text-sm sm:text-base mb-0.5 sm:mb-1">Medium</div>
                                        <div className="text-xs text-gray-500">Growth Rate</div>
                                    </div>
                                </div>
                                {/* Water Needs */}
                                <div className="flex items-center gap-3 sm:gap-5 bg-white rounded-xl sm:rounded-2xl shadow border border-gray-100 py-3 sm:py-4 transition hover:shadow-md px-4 sm:px-6">
                                    <span className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-100">
                                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                        </svg>
                                    </span>
                                    <div>
                                        <div className="font-semibold text-gray-800 text-sm sm:text-base mb-0.5 sm:mb-1">Moderate</div>
                                        <div className="text-xs text-gray-500">Water Needs</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center mb-10 px-4 sm:px-6 lg:px-8">
                            <div className="w-full max-w-3xl bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-100 rounded-3xl shadow-sm px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
                                <div className="flex items-center gap-2 mb-4">
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                    <h3 className="text-sm sm:text-base font-semibold text-gray-800">On This Page</h3>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
                                    {[
                                        { href: "#images", label: "Images", icon: "🖼️" },
                                        { href: "#distribution", label: "Distribution", icon: "🗺️" },
                                        { href: "#culture", label: "Culture", icon: "🌱" },
                                        { href: "#toxicity", label: "Toxicity", icon: "⚠️" },
                                        { href: "#weed-control", label: "Weed Control", icon: "🌿" },
                                        { href: "#quickly-identify", label: "Quickly Identify", icon: "🔍" },
                                        { href: "#care-guide", label: "Care Guide", icon: "📋" },
                                        { href: "#faqs", label: "FAQs", icon: "❓" }
                                    ].map((item) => (
                                        <a
                                            key={item.href}
                                            href={item.href}
                                            className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/80 rounded-lg text-xs sm:text-sm font-medium text-emerald-700 hover:bg-emerald-50 hover:text-emerald-900 transition-all duration-200 shadow-sm hover:shadow-md"
                                        >
                                            <span>{item.icon}</span>
                                            <span>{item.label}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex flex-col space-y-5 md:space-y-6 mt-2.5">
                            <p className="text-sm/7 md:text-base/7 font-medium leading-relaxed font-nunito tracking-wide text-gray-500 text-left w-full pl-0 sm:pl-0 ml-0">
                                Tanaman ini membutuhkan sinar matahari penuh minimal 6-8 jam per hari. Kurangnya pencahayaan dapat menyebabkan pertumbuhan lambat, tanaman kurus, dan pembungaan yang tidak optimal. Di daerah dengan panas musim panas yang intens, berikan sedikit naungan sore hari untuk mencegah kerusakan akibat sinar matahari pada buah.
                            </p>

                            <p className="text-sm/7 md:text-base/7 font-medium leading-relaxed font-nunito tracking-wide text-gray-500 text-left w-full pl-0 sm:pl-0 ml-0">
                                Selain itu, tanaman ini idealnya tumbuh di tanah yang memiliki drainase baik dengan pH antara 6.0 dan 6.8. Pastikan jarak tanam yang memadai (24-36 inci) untuk menjaga sirkulasi udara yang baik dan mencegah penyebaran penyakit. Pertimbangkan rotasi tanaman untuk mencegah penyakit yang ditularkan melalui tanah menumpuk di lokasi yang sama dari tahun ke tahun.
                            </p>

                            <p className="text-sm/7 md:text-base/7 font-medium leading-relaxed font-nunito tracking-wide text-gray-500 text-left w-full pl-0 sm:pl-0 ml-0">
                                Pemangkasan dan pelatihan tanaman secara teratur sangat penting untuk pertumbuhan optimal. Hapus tunas samping yang berkembang di ketiak daun untuk memfokuskan energi pada produksi buah. Untuk varietas yang tidak tentu, pertimbangkan untuk menggunakan metode pelatihan batang tunggal atau batang ganda untuk memaksimalkan ruang dan hasil panen.
                            </p>
                        </div>
                    </div>
                </div>
            </div> 

        </>
    );
}

export default ArtikelCardBlog;