import React from "react";

function TomatoGuide({ title, description, varieties, growingConditions, plantingGuide, careTips, problems, harvesting, propagation, nutrition, culinary, companion, seasonal, references }) {
    return (

        <>        
            <div className="lg:mx-0 xl:mx-10 -mt-6 w-auto rounded-4xl text-center relative z-20 mb-5 shadow-md pattern-background">
                {/* Expert Care Section */}
                <div className="p-3.5 sm:p-4.5 mx-5 md:mx-15 mt-20 md:mt-20 rounded-3xl border border-gray-200 min-h-[130px]">
                    <div className="text-left space-y-3 sm:space-y-4">
                        <div className="flex flex-col items-start space-y-3 md:space-y-2">    
                            <h2 className="text-xl md:text-2xl font-bold font-nunito tracking-wider leading-tight steel-haze">
                                {title}
                            </h2>
                            
                            <p className="text-sm/7 md:text-base/7 font-medium leading-relaxed font-nunito tracking-wide text-gray-500 italic">
                                {description}
                            </p>                            
                        </div>
                    </div>
                </div>

                <div className="p-3.5 sm:p-4.5 mx-5 md:mx-15 mt-8 rounded-3xl border border-gray-200">
                    <div className="text-left space-y-6">
                        <h3 className="text-lg md:text-xl font-bold font-nunito tracking-wider leading-tight steel-haze mt-3">Recommended Varieties</h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {varieties?.map((variety, index) => (
                                <div key={index} className="p-5 bg-white rounded-2xl border border-gray-200">
                                    <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-green-50">
                                        <span className="text-xl font-bold text-green-600">{variety.initial}</span>
                                    </div>
                                    <h4 className="text-lg font-bold mb-3 font-nunito tracking-wider leading-tight steel-haze">{variety.name}</h4>
                                    <p className="text-sm/7 md:text-base/7 font-medium leading-relaxed font-nunito tracking-wide text-gray-500 line-clamp-4">
                                        {variety.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Growing Conditions */}
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
                            {growingConditions?.map((condition, index) => (
                                <div key={index} className="p-5 bg-white rounded-2xl border border-gray-200">
                                    <div className="flex items-center space-x-3 mb-4">
                                        <div className={`w-8 h-8 rounded-full ${condition.iconBg} flex items-center justify-center`}>
                                            <svg className={`w-5 h-5 ${condition.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={condition.iconPath} />
                                            </svg>
                                        </div>
                                        <h4 className="text-lg font-semibold text-gray-800 font-nunito tracking-wider leading-tight steel-haze">{condition.title}</h4>
                                    </div>
                                    <p className="text-sm/7 md:text-base/7 font-medium leading-relaxed font-nunito tracking-wide text-gray-500 line-clamp-4">
                                        {condition.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Planting Guide */}
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
                            {plantingGuide?.map((guide, index) => (
                                <div key={index} className="p-5 bg-white rounded-2xl border border-gray-200">
                                    <div className="flex items-center space-x-3 mb-4">
                                        <div className={`w-8 h-8 rounded-full ${guide.iconBg} flex items-center justify-center`}>
                                            <svg className={`w-5 h-5 ${guide.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={guide.iconPath} />
                                            </svg>
                                        </div>
                                        <h4 className="text-lg font-semibold text-gray-800 font-nunito tracking-wider leading-tight steel-haze">{guide.title}</h4>
                                    </div>
                                    <p className="text-sm/7 md:text-base/7 font-medium leading-relaxed font-nunito tracking-wide text-gray-500 line-clamp-4">
                                        {guide.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Care Tips */}
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
                            {careTips?.map((tip, index) => (
                                <div key={index} className="p-6 bg-white rounded-2xl border border-gray-200">
                                    <div className="flex items-center space-x-3 mb-4">
                                        <div className={`w-8 h-8 rounded-full ${tip.iconBg} flex items-center justify-center`}>
                                            <svg className={`w-5 h-5 ${tip.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={tip.iconPath} />
                                            </svg>
                                        </div>
                                        <h4 className="text-lg font-semibold text-gray-800 font-nunito tracking-wider leading-tight steel-haze">{tip.title}</h4>
                                    </div>
                                    <p className="text-sm/7 md:text-base/7 font-medium leading-relaxed font-nunito tracking-wide text-gray-500 line-clamp-4">{tip.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Common Problems & Solutions */}
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
                            {problems?.map((problem, index) => (
                                <div key={index} className="p-6 bg-white rounded-2xl border border-gray-200 flex-1">
                                    <div className="flex items-center space-x-3 mb-4">
                                        <div className={`w-8 h-8 rounded-full ${problem.iconBg} flex items-center justify-center`}>
                                            <svg className={`w-5 h-5 ${problem.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={problem.iconPath} />
                                            </svg>
                                        </div>
                                        <h4 className="text-lg font-semibold text-gray-800 font-nunito tracking-wider leading-tight steel-haze">{problem.title}</h4>
                                    </div>

                                    <ul className="space-y-3">
                                        {problem.items?.map((item, itemIndex) => (
                                            <li key={itemIndex} className="flex items-start space-x-3">
                                                <div className="w-2 h-2 mt-2 rounded-full bg-orange-500 flex-shrink-0"></div>
                                                <p className="text-sm/7 md:text-base/7 font-medium leading-relaxed font-nunito tracking-wide text-gray-500 line-clamp-4">
                                                    {item}
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Harvesting & Storage */}
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
                            {harvesting?.map((section, index) => (
                                <div key={index} className="p-6 bg-white rounded-2xl border border-gray-200 flex-1">
                                    <div className="flex items-center space-x-3 mb-4">
                                        <div className={`w-8 h-8 rounded-full ${section.iconBg} flex items-center justify-center`}>
                                            <svg className={`w-5 h-5 ${section.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={section.iconPath} />
                                            </svg>
                                        </div>
                                        <h4 className="text-lg font-semibold text-gray-800 font-nunito tracking-wider leading-tight steel-haze">{section.title}</h4>
                                    </div>
                                    <ul className="space-y-3">
                                        {section.items?.map((item, itemIndex) => (
                                            <li key={itemIndex} className="flex items-start space-x-3">
                                                <div className={`w-2 h-2 mt-2 rounded-full ${section.bulletColor} flex-shrink-0`}></div>
                                                <p className="text-sm/7 md:text-base/7 font-medium leading-relaxed font-nunito tracking-wide text-gray-500">
                                                    {item}
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Propagation & Seed Saving */}
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
                            {propagation?.map((section, index) => (
                                <div key={index} className="p-6 bg-white rounded-xl border border-gray-200 flex-1">
                                    <div className="flex items-center space-x-3 mb-4">
                                        <div className={`w-8 h-8 rounded-full ${section.iconBg} flex items-center justify-center`}>
                                            <svg className={`w-5 h-5 ${section.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={section.iconPath} />
                                            </svg>
                                        </div>
                                        <h4 className="text-lg font-semibold text-gray-800 font-nunito tracking-wider leading-tight steel-haze">{section.title}</h4>
                                    </div>
                                    <div className="space-y-3">
                                        {section.paragraphs?.map((paragraph, pIndex) => (
                                            <p key={pIndex} className="text-sm/7 md:text-base/7 font-medium leading-relaxed font-nunito tracking-wide text-gray-500 line-clamp-4 md:line-clamp-none">
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Nutritional Information */}
                    <div className="text-left space-y-6 mt-12">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                            </div>
                            <h3 className="text-lg md:text-xl font-bold font-nunito tracking-wider leading-tight steel-haze">Nutritional Information</h3>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {nutrition?.map((section, index) => (
                                <div key={index} className="p-6 bg-white rounded-2xl border border-gray-200">
                                    <div className="flex items-center space-x-3 mb-4">
                                        <div className={`w-8 h-8 rounded-full ${section.iconBg} flex items-center justify-center`}>
                                            <svg className={`w-5 h-5 ${section.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={section.iconPath} />
                                            </svg>
                                        </div>
                                        <h4 className="text-lg font-semibold text-gray-800 font-nunito tracking-wider leading-tight steel-haze">{section.title}</h4>
                                    </div>
                                    <ul className="space-y-3">
                                        {section.items?.map((item, itemIndex) => (
                                            <li key={itemIndex} className="flex items-start space-x-3">
                                                <div className={`w-2 h-2 mt-2 rounded-full ${section.bulletColor} flex-shrink-0`}></div>
                                                <p className="text-sm/7 md:text-base/7 font-medium leading-relaxed font-nunito tracking-wide text-gray-500">{item}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Culinary Uses */}
                    <div className="text-left space-y-6 mt-12">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                            </div>
                            <h3 className="text-lg md:text-xl font-bold font-nunito tracking-wider leading-tight steel-haze">Culinary Uses</h3>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {culinary?.map((section, index) => (
                                <div key={index} className="p-6 bg-white rounded-2xl border border-gray-200">
                                    <div className="flex items-center space-x-3 mb-4">
                                        <div className={`w-8 h-8 rounded-full ${section.iconBg} flex items-center justify-center`}>
                                            <svg className={`w-5 h-5 ${section.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={section.iconPath} />
                                            </svg>
                                        </div>
                                        <h4 className="text-lg font-semibold text-gray-800 font-nunito tracking-wider leading-tight steel-haze">{section.title}</h4>
                                    </div>
                                    <ul className="space-y-3">
                                        {section.items?.map((item, itemIndex) => (
                                            <li key={itemIndex} className="flex items-start space-x-3">
                                                <div className={`w-2 h-2 mt-2 rounded-full ${section.bulletColor} flex-shrink-0`}></div>
                                                <p className="text-sm/7 md:text-base/7 font-medium leading-relaxed font-nunito tracking-wide text-gray-500">{item}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Companion Planting */}
                    <div className="text-left space-y-6 mt-12">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                            </div>
                            <h3 className="text-lg md:text-xl font-bold font-nunito tracking-wider leading-tight steel-haze">Companion Planting</h3>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {companion?.map((section, index) => (
                                <div key={index} className="p-6 bg-white rounded-2xl border border-gray-200">
                                    <div className="flex items-center space-x-3 mb-4">
                                        <div className={`w-8 h-8 rounded-full ${section.iconBg} flex items-center justify-center`}>
                                            <svg className={`w-5 h-5 ${section.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={section.iconPath} />
                                            </svg>
                                        </div>
                                        <h4 className="text-lg font-semibold text-gray-800 font-nunito tracking-wider leading-tight steel-haze">{section.title}</h4>
                                    </div>
                                    <ul className="space-y-3">
                                        {section.items?.map((item, itemIndex) => (
                                            <li key={itemIndex} className="flex items-start space-x-3">
                                                <div className={`w-2 h-2 mt-2 rounded-full ${section.bulletColor} flex-shrink-0`}></div>
                                                <p className="text-sm/7 md:text-base/7 font-medium leading-relaxed font-nunito tracking-wide text-gray-500">{item}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Seasonal Care Calendar */}
                    <div className="text-left space-y-6 mt-12 mb-12">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-lg md:text-xl font-bold font-nunito tracking-wider leading-tight steel-haze">Seasonal Care Calendar</h3>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {seasonal?.map((season, index) => (
                                <div key={index} className="p-6 bg-white rounded-2xl border border-gray-200">
                                    <div className="flex items-center space-x-3 mb-4">
                                        <div className={`w-8 h-8 rounded-full ${season.iconBg} flex items-center justify-center`}>
                                            <svg className={`w-5 h-5 ${season.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={season.iconPath} />
                                            </svg>
                                        </div>
                                        <h4 className="text-lg font-semibold text-gray-800 font-nunito tracking-wider leading-tight steel-haze">{season.title}</h4>
                                    </div>
                                    <ul className="space-y-3">
                                        {season.items?.map((item, itemIndex) => (
                                            <li key={itemIndex} className="flex items-start space-x-3">
                                                <div className={`w-2 h-2 mt-2 rounded-full ${season.bulletColor} flex-shrink-0`}></div>
                                                <p className="text-sm/7 md:text-base/7 font-medium leading-relaxed font-nunito tracking-wide text-gray-500">{item}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* References Section */}
                    <div className="text-left space-y-6 mt-12 mb-12">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <h3 className="text-lg md:text-xl font-bold font-nunito tracking-wider leading-tight steel-haze">References</h3>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {references?.map((section, index) => (
                                <div key={index} className="p-6 bg-white rounded-2xl border border-gray-200">
                                    <div className="flex items-center space-x-3 mb-4">
                                        <div className={`w-8 h-8 rounded-full ${section.iconBg} flex items-center justify-center`}>
                                            <svg className={`w-5 h-5 ${section.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={section.iconPath} />
                                            </svg>
                                        </div>
                                        <h4 className="text-lg font-semibold text-gray-800 font-nunito tracking-wider leading-tight steel-haze">{section.title}</h4>
                                    </div>
                                    <ul className="space-y-3">
                                        {section.items?.map((item, itemIndex) => (
                                            <li key={itemIndex} className="flex items-start space-x-3">
                                                <div className={`w-2 h-2 mt-2 rounded-full ${section.bulletColor} flex-shrink-0`}></div>
                                                <p className="text-sm/7 md:text-base/7 font-medium leading-relaxed font-nunito tracking-wide text-gray-500 italic">{item}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TomatoGuide; 