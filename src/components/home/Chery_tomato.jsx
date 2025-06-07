import React from "react";
import HarvestLanding from '../plantlis/HarvestLandingHome';

function PlantGuide() {
    return (
        <main>            
            <div>
                <HarvestLanding title="Our History" breadcrumb={["Home", "Cherry Tomato"]}/>
            </div>

            <div className="lg:mx-0 xl:mx-10 -mt-6 w-auto rounded-4xl text-center relative z-20 mb-5 shadow-md pattern-background">
                {/* Expert Care Section */}
                <div className="p-3.5 sm:p-4.5 mx-5 md:mx-15 mt-20 md:mt-20 rounded-3xl border border-gray-200 min-h-[130px]">
                    <div className="text-left space-y-3 sm:space-y-4">
                        <div className="flex flex-col items-start space-y-3 md:space-y-2">    
                            <h2 className="text-xl md:text-2xl font-bold font-nunito tracking-wider leading-tight steel-haze">
                                Cherry Tomato Care Guide
                            </h2>
                            
                            <p className="text-sm/6 md:text-sm/6 font-normal leading-normal tracking-wider custome-deskription italic">
                                Cherry tomatoes (Solanum lycopersicum var. cerasiforme) are a delightful variety of tomatoes known for their sweet, bite-sized fruits. These compact plants typically grow 3-4 feet tall and produce clusters of 10-20 fruits each. Through our comprehensive care approach, we'll guide you through every aspect of growing cherry tomatoes, from seed selection to harvest. Our expert guidance covers optimal growing conditions, precise planting techniques, detailed care routines, and effective solutions for common challenges. Whether you're a beginner or experienced gardener, this guide will help you achieve bountiful harvests of delicious cherry tomatoes.
                            </p>                            
                        </div>
                    </div>
                </div>

                <div className="p-3.5 sm:p-4.5 mx-5 md:mx-15 mt-8 rounded-3xl border border-gray-200">
                    <div className="text-left space-y-6">
                        <h3 className="text-lg md:text-xl font-bold font-nunito tracking-wider leading-tight steel-haze mt-3">Recommended Varieties</h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="p-5 bg-white rounded-2xl border border-gray-200 shadow-sm">
                                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-green-50">
                                    <span className="text-xl font-bold text-green-600">S</span>
                                </div>
                                <h4 className="text-lg font-bold mb-3 font-nunito tracking-wider leading-tight steel-haze">Sweet 100</h4>
                                <p className="text-sm/6 font-medium leading-relaxed tracking-wider custome-deskription">
                                    Indeterminate variety producing clusters of 15-20 fruits. Disease-resistant, perfect for beginners. Matures in 65 days.
                                </p>
                            </div>

                            <div className="p-5 bg-white rounded-2xl border border-gray-200 shadow-sm">
                                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-orange-50">
                                    <span className="text-xl font-bold text-orange-600">S</span>
                                </div>
                                <h4 className="text-lg font-bold mb-3 font-nunito tracking-wider leading-tight steel-haze">Sun Gold</h4>
                                <p className="text-sm/6 font-medium leading-relaxed tracking-wider custome-deskription">
                                    Early-maturing (57 days) with golden-orange fruits. Exceptionally sweet, heat-tolerant, and disease-resistant.
                                </p>
                            </div>

                            <div className="p-5 bg-white rounded-2xl border border-gray-200 shadow-sm">
                                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-purple-50">
                                    <span className="text-xl font-bold text-purple-600">B</span>
                                </div>
                                <h4 className="text-lg font-bold mb-3 font-nunito tracking-wider leading-tight steel-haze">Black Cherry</h4>
                                <p className="text-sm/6 font-medium leading-relaxed tracking-wider custome-deskription">
                                    Unique dark purple fruits with rich flavor. Indeterminate, matures in 65-75 days. Excellent disease resistance.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="text-left space-y-6 mb-2 mt-10">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                            </div>
                            <h3 className="text-lg md:text-xl font-bold font-nunito tracking-wider leading-tight steel-haze">Growing Conditions</h3>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-5 bg-white rounded-2xl border border-gray-100 shadow-sm">
                                <div className="flex items-center space-x-3 mb-4">
                                    <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center">
                                        <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                    </div>
                                    <h4 className="text-lg font-semibold text-gray-800 font-nunito tracking-wider leading-tight steel-haze">Sunlight Requirements</h4>
                                </div>
                                <p className="text-sm/6 font-medium leading-relaxed tracking-wider custome-deskription line-clamp-4">Cherry tomatoes require 6-8 hours of direct sunlight daily. Optimal growth occurs at temperatures between 65-85°F (18-29°C). Position plants in a south-facing location with protection from strong afternoon sun in hot climates. Use shade cloth if temperatures exceed 90°F (32°C). Morning sun is particularly important for fruit development and disease prevention.</p>
                            </div>

                            <div className="p-5 bg-white rounded-2xl border border-gray-100 shadow-sm">
                                <div className="flex items-center space-x-3 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                                        <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                        </svg>
                                    </div>
                                    <h4 className="text-lg font-semibold text-gray-800 font-nunito tracking-wider leading-tight steel-haze">Soil Requirements</h4>
                                </div>
                                <p className="text-sm/6 font-medium leading-relaxed tracking-wider custome-deskription line-clamp-4">Use well-draining soil with a pH between 6.0-6.8. Ideal soil composition: 40% garden soil, 30% compost, 20% perlite, and 10% vermiculite. Add 2-3 inches of organic matter (compost or aged manure) before planting. Soil temperature should be at least 60°F (15.5°C) for optimal root development. Test soil pH monthly and adjust as needed using lime (to raise pH) or sulfur (to lower pH).</p>
                            </div>
                        </div>
                    </div>

                    <div className="text-left space-y-6 mb-8 mt-10">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                            </div>
                            <h3 className="text-lg md:text-xl font-bold font-nunito tracking-wider leading-tight steel-haze">Planting Guide</h3>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-5 bg-white rounded-2xl border border-gray-100 shadow-sm">
                                <div className="flex items-center space-x-3 mb-4">
                                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <h4 className="text-lg font-semibold text-gray-800 font-nunito tracking-wider leading-tight steel-haze">When to Plant</h4>
                                </div>
                                <p className="text-sm/6 font-medium leading-relaxed tracking-wider custome-deskription line-clamp-4">
                                    Start seeds indoors 6-8 weeks before the last frost date. Maintain soil temperature at 70-80°F (21-27°C) for germination. Transplant seedlings when they have 4-6 true leaves and are 6-8 inches tall. Harden off seedlings for 7-10 days before transplanting. Plant outdoors when soil temperature reaches 60°F (15.5°C) and night temperatures stay above 50°F (10°C). For fall planting, start seeds 12-14 weeks before first frost date.
                                </p>
                            </div>

                            <div className="p-5 bg-white rounded-2xl border border-gray-100 shadow-sm">
                                <div className="flex items-center space-x-3 mb-4">
                                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                                        <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                        </svg>
                                    </div>
                                    <h4 className="text-lg font-semibold text-gray-800 font-nunito tracking-wider leading-tight steel-haze">Spacing and Support</h4>
                                </div>
                                <p className="text-sm/6 font-medium leading-relaxed tracking-wider custome-deskription line-clamp-4">
                                    Space determinate varieties 24-36 inches apart, indeterminate varieties 36-48 inches apart. Rows should be 36-48 inches apart. Install support structures (cages, stakes, or trellises) at planting time. For staking, use 6-8 foot stakes and tie plants every 8-12 inches as they grow. For cages, use 5-6 foot tall cages with 12-18 inch diameter. For trellising, install 8-foot posts with horizontal wires every 12 inches.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="text-left space-y-6 mb-12">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-lg md:text-xl font-bold font-nunito tracking-wider leading-tight steel-haze">Care Tips</h3>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                                <div className="flex items-center space-x-3 mb-4">
                                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                        </svg>
                                    </div>
                                    <h4 className="text-lg font-semibold text-gray-800 font-nunito tracking-wider leading-tight steel-haze">Watering</h4>
                                </div>
                                <p className="text-sm/6 font-medium leading-relaxed tracking-wider custome-deskription line-clamp-4">Water deeply (1-2 inches) 2-3 times per week, more frequently in hot weather. Maintain consistent soil moisture at 70-80% capacity. Water at the base of plants to avoid wetting leaves. Use drip irrigation or soaker hoses for optimal water delivery. Mulch with 2-3 inches of organic material to retain moisture. Check soil moisture daily by inserting finger 2 inches into soil. Water early morning to prevent evaporation and disease.</p>
                            </div>

                            <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                                <div className="flex items-center space-x-3 mb-4">
                                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                                        <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>
                                    <h4 className="text-lg font-semibold text-gray-800 font-nunito tracking-wider leading-tight steel-haze">Fertilizing</h4>
                                </div>
                                <p className="text-sm/6 font-medium leading-relaxed tracking-wider custome-deskription line-clamp-4">Apply balanced fertilizer (10-10-10) at planting. Side-dress with nitrogen-rich fertilizer (21-0-0) when first fruits appear. Apply 1/4 cup of fertilizer per plant every 2-3 weeks. Use organic options like fish emulsion or compost tea for natural growth. Monitor leaf color for nutrient deficiencies. Add calcium (1 cup gypsum per plant) to prevent blossom end rot. Apply foliar spray (1 tbsp Epsom salt per gallon) monthly for magnesium.</p>
                            </div>

                            <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                                <div className="flex items-center space-x-3 mb-4">
                                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                        </svg>
                                    </div>
                                    <h4 className="text-lg font-semibold text-gray-800 font-nunito tracking-wider leading-tight steel-haze">Pruning and Training</h4>
                                </div>
                                <p className="text-sm/6 font-medium leading-relaxed tracking-wider custome-deskription line-clamp-4">Remove suckers (shoots between main stem and branches) when they're 2-3 inches long. Prune lower leaves up to 12 inches from ground to prevent soil-borne diseases. For indeterminate varieties, maintain 1-2 main stems. Pinch off growing tips 4 weeks before first frost to focus energy on ripening fruit. Remove yellow or diseased leaves immediately. Train vines to grow upward using soft ties or clips.</p>
                            </div>
                        </div>                      
                    </div>

                    <div className="text-left space-y-6 mb-12">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                            </div>
                            <h3 className="text-lg md:text-xl font-bold font-nunito tracking-wider leading-tight steel-haze">Common Problems & Solutions</h3>
                        </div>
                        
                        <div className="flex flex-col lg:flex-row gap-6">
                            <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm flex-1">
                                <div className="flex items-center space-x-3 mb-4">
                                    <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                                        <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                        </svg>
                                    </div>
                                    <h4 className="text-lg font-semibold text-gray-800 font-nunito tracking-wider leading-tight steel-haze">Pests</h4>
                                </div>

                                <ul className="space-y-3">
                                    <li className="flex items-start space-x-3">
                                        <div className="w-2 h-2 mt-2 rounded-full bg-orange-500 flex-shrink-0"></div>
                                        <p className="text-sm/6 font-medium leading-relaxed tracking-wider custome-deskription">Aphids: Spray with insecticidal soap (2 tbsp per gallon) every 3-4 days until controlled. Introduce ladybugs as natural predators.</p>
                                    </li>
                                    <li className="flex items-start space-x-3">
                                        <div className="w-2 h-2 mt-2 rounded-full bg-orange-500 flex-shrink-0"></div>
                                        <p className="text-sm/6 font-medium leading-relaxed tracking-wider custome-deskription">Hornworms: Hand-pick daily or apply Bacillus thuringiensis (BT) spray weekly. Use blacklight at night to spot them.</p>
                                    </li>
                                    <li className="flex items-start space-x-3">
                                        <div className="w-2 h-2 mt-2 rounded-full bg-orange-500 flex-shrink-0"></div>
                                        <p className="text-sm/6 font-medium leading-relaxed tracking-wider custome-deskription">Whiteflies: Use yellow sticky traps (1 per 10 square feet) and apply neem oil every 7-10 days. Introduce parasitic wasps.</p>
                                    </li>
                                    <li className="flex items-start space-x-3">
                                        <div className="w-2 h-2 mt-2 rounded-full bg-orange-500 flex-shrink-0"></div>
                                        <p className="text-sm/6 font-medium leading-relaxed tracking-wider custome-deskription">Spider Mites: Spray with water daily and apply miticide if severe. Maintain humidity above 60%.</p>
                                    </li>
                                    <li className="flex items-start space-x-3">
                                        <div className="w-2 h-2 mt-2 rounded-full bg-orange-500 flex-shrink-0"></div>
                                        <p className="text-sm/6 font-medium leading-relaxed tracking-wider custome-deskription">Cutworms: Place collars around seedlings and apply diatomaceous earth. Use cardboard or aluminum foil collars.</p>
                                    </li>
                                    <li className="flex items-start space-x-3">
                                        <div className="w-2 h-2 mt-2 rounded-full bg-orange-500 flex-shrink-0"></div>
                                        <p className="text-sm/6 font-medium leading-relaxed tracking-wider custome-deskription">Slugs: Apply beer traps and diatomaceous earth. Hand-pick at night with flashlight.</p>
                                    </li>
                                </ul>
                            </div>

                            <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm flex-1">
                                <div className="flex items-center space-x-3 mb-4">
                                    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                                        <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>
                                    <h4 className="text-lg font-semibold text-gray-800 font-nunito tracking-wider leading-tight steel-haze">Diseases</h4>
                                </div>

                                <ul className="space-y-3">
                                    <li className="flex items-start space-x-3">
                                        <div className="w-2 h-2 mt-2 rounded-full bg-orange-500 flex-shrink-0"></div>
                                        <p className="text-sm/6 font-medium leading-relaxed tracking-wider custome-deskription">Blossom end rot: Maintain soil pH at 6.5 and add calcium (1 cup gypsum per plant). Water consistently to prevent calcium uptake issues.</p>
                                    </li>
                                    <li className="flex items-start space-x-3">
                                        <div className="w-2 h-2 mt-2 rounded-full bg-orange-500 flex-shrink-0"></div>
                                        <p className="text-sm/6 font-medium leading-relaxed tracking-wider custome-deskription">Early blight: Apply copper fungicide every 7-10 days and remove infected leaves. Rotate crops and use resistant varieties.</p>
                                    </li>
                                    <li className="flex items-start space-x-3">
                                        <div className="w-2 h-2 mt-2 rounded-full bg-orange-500 flex-shrink-0"></div>
                                        <p className="text-sm/6 font-medium leading-relaxed tracking-wider custome-deskription">Powdery mildew: Improve air circulation and apply sulfur-based fungicide. Maintain humidity below 70%.</p>
                                    </li>
                                    <li className="flex items-start space-x-3">
                                        <div className="w-2 h-2 mt-2 rounded-full bg-orange-500 flex-shrink-0"></div>
                                        <p className="text-sm/6 font-medium leading-relaxed tracking-wider custome-deskription">Fusarium wilt: Use resistant varieties and rotate crops every 3 years. Solarize soil in summer.</p>
                                    </li>
                                    <li className="flex items-start space-x-3">
                                        <div className="w-2 h-2 mt-2 rounded-full bg-orange-500 flex-shrink-0"></div>
                                        <p className="text-sm/6 font-medium leading-relaxed tracking-wider custome-deskription">Leaf spot: Apply fungicide at first sign and remove affected leaves. Avoid overhead watering.</p>
                                    </li>
                                    <li className="flex items-start space-x-3">
                                        <div className="w-2 h-2 mt-2 rounded-full bg-orange-500 flex-shrink-0"></div>
                                        <p className="text-sm/6 font-medium leading-relaxed tracking-wider custome-deskription">Verticillium wilt: Use resistant varieties and maintain soil pH above 6.0. Remove and destroy infected plants.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="text-left space-y-6 mt-12">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="text-lg md:text-xl font-bold font-nunito tracking-wider leading-tight steel-haze">Harvesting & Storage</h3>
                        </div>
                        
                        <div className="flex flex-col lg:flex-row gap-6">
                            <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm flex-1">
                                <div className="flex items-center space-x-3 mb-4">
                                    <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                                        <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <h4 className="text-lg font-semibold text-gray-800 font-nunito tracking-wider leading-tight steel-haze">Harvesting</h4>
                                </div>
                                <ul className="space-y-3">
                                    <li className="flex items-start space-x-3">
                                        <div className="w-2 h-2 mt-2 rounded-full bg-orange-500 flex-shrink-0"></div>
                                        <p className="text-sm/6 font-medium leading-relaxed tracking-wider custome-deskription">Harvest when fruits are fully colored and slightly soft to touch</p>
                                    </li>
                                    <li className="flex items-start space-x-3">
                                        <div className="w-2 h-2 mt-2 rounded-full bg-orange-500 flex-shrink-0"></div>
                                        <p className="text-sm/6 font-medium leading-relaxed tracking-wider custome-deskription">Pick in the morning when temperatures are cool</p>
                                    </li>
                                    <li className="flex items-start space-x-3">
                                        <div className="w-2 h-2 mt-2 rounded-full bg-orange-500 flex-shrink-0"></div>
                                        <p className="text-sm/6 font-medium leading-relaxed tracking-wider custome-deskription">Use scissors or pruners to avoid damaging the plant</p>
                                    </li>
                                    <li className="flex items-start space-x-3">
                                        <div className="w-2 h-2 mt-2 rounded-full bg-orange-500 flex-shrink-0"></div>
                                        <p className="text-sm/6 font-medium leading-relaxed tracking-wider custome-deskription">Expect first harvest 60-70 days after transplanting</p>
                                    </li>
                                </ul>
                            </div>

                            <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm flex-1">
                                <div className="flex items-center space-x-3 mb-4">
                                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                                        <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                        </svg>
                                    </div>
                                    <h4 className="text-lg font-semibold text-gray-800 font-nunito tracking-wider leading-tight steel-haze">Storage</h4>
                                </div>
                                <ul className="space-y-3">
                                    <li className="flex items-start space-x-3">
                                        <div className="w-2 h-2 mt-2 rounded-full bg-blue-500 flex-shrink-0"></div>
                                        <p className="text-sm/6 font-medium leading-relaxed tracking-wider custome-deskription">Room temperature (65-70°F): 2-3 days</p>
                                    </li>
                                    <li className="flex items-start space-x-3">
                                        <div className="w-2 h-2 mt-2 rounded-full bg-blue-500 flex-shrink-0"></div>
                                        <p className="text-sm/6 font-medium leading-relaxed tracking-wider custome-deskription">Refrigerated (45-50°F): Up to 1 week</p>
                                    </li>
                                    <li className="flex items-start space-x-3">
                                        <div className="w-2 h-2 mt-2 rounded-full bg-blue-500 flex-shrink-0"></div>
                                        <p className="text-sm/6 font-medium leading-relaxed tracking-wider custome-deskription">Frozen (after blanching): Up to 6 months</p>
                                    </li>
                                    <li className="flex items-start space-x-3">
                                        <div className="w-2 h-2 mt-2 rounded-full bg-blue-500 flex-shrink-0"></div>
                                        <p className="text-sm/6 font-medium leading-relaxed tracking-wider custome-deskription">Canned (10-11 PSI): 40 minutes processing</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="text-left space-y-6 mt-12">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                            </div>
                            <h3 className="text-lg md:text-xl font-bold font-nunito tracking-wider leading-tight steel-haze">Propagation & Seed Saving</h3>
                        </div>
                        
                        <div className="flex flex-col lg:flex-row gap-6">
                            <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm flex-1">
                                <div className="flex items-center space-x-3 mb-4">
                                    <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center">
                                        <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                        </svg>
                                    </div>
                                    <h4 className="text-lg font-semibold text-gray-800 font-nunito tracking-wider leading-tight steel-haze">Seed Saving</h4>
                                </div>
                                <div className="space-y-3">
                                    <p className="text-sm/6 font-medium leading-relaxed tracking-wider custome-deskription line-clamp-4 md:line-clamp-none">Select fully ripe, disease-free fruits from your best plants. Extract seeds and ferment in water for 2-3 days. Rinse and dry seeds on paper towel for 1 week.</p>
                                    <p className="text-sm/6 font-medium leading-relaxed tracking-wider custome-deskription line-clamp-4 md:line-clamp-none">Store in airtight container in cool, dark place. Label with variety and date. Seeds remain viable for 4-6 years when stored properly. Test germination rate annually.</p>
                                </div>
                            </div>

                            <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm flex-1">
                                <div className="flex items-center space-x-3 mb-4">
                                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                                        <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                    </div>
                                    <h4 className="text-lg font-semibold text-gray-800 font-nunito tracking-wider leading-tight steel-haze">Propagation Methods</h4>
                                </div>
                                <div className="space-y-3">
                                    <p className="text-sm/6 font-medium leading-relaxed tracking-wider custome-deskription line-clamp-4 md:line-clamp-none">Start seeds indoors 6-8 weeks before last frost. Use sterile seed starting mix. Maintain 70-80°F soil temperature. Transplant when seedlings have 4-6 true leaves.</p>
                                    <p className="text-sm/6 font-medium leading-relaxed tracking-wider custome-deskription line-clamp-4 md:line-clamp-none">For cuttings, take 6-inch stem cuttings from healthy plants. Root in water or moist potting mix. Keep humidity high during rooting. Transplant when roots are 2-3 inches long.</p>
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