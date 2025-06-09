import React from "react";
import HarvestLanding from '@components/landingPages/plantlis/HarvestLandingAbout';

function ArtikelDetailTemplate({  title, date, readTime, category, tags, description, quote, mainContent, features, benefits}) {
    return (
        <main>
            <div>
                <div>
                    <HarvestLanding title="Our History" breadcrumb={["Home", "Artikel Detail"]}/>
                </div>

                <div className="lg:mx-0 xl:mx-10 -mt-6 w-auto rounded-4xl text-center relative z-20 mb-5 shadow-md pattern-background">
                    
                    <div className="p-3.5 sm:p-4.5 mx-5 md:mx-15 mt-20 md:mt-20 rounded-3xl border border-gray-200 min-h-[130px]">
                        <div className="text-left space-y-3 sm:space-y-4">
                            <div className="flex flex-col items-start space-y-3 md:space-y-2">    
                                <h2 className="text-xl md:text-2xl font-bold font-nunito tracking-wider leading-tight steel-haze mb-3.5">
                                    {title}
                                </h2>
                                
                                <div className="flex flex-wrap items-center gap-3 text-sm/6 mb-3.5">
                                    <div className="flex items-center bg-gray-50 px-3 py-1.5 rounded-full">
                                        <svg className="w-4 h-4 steel-haze mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        <span className="font-medium font-nunito tracking-wider custome-deskription leading-normal">{date}</span>
                                    </div>
                                    <div className="flex items-center bg-gray-50 px-3 py-1.5 rounded-full">
                                        <svg className="w-4 h-4 steel-haze mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span className="font-medium font-nunito tracking-wider custome-deskription leading-normal">{readTime}</span>
                                    </div>
                                    <div className="flex items-center bg-gray-50 px-3 py-1.5 rounded-full">
                                        <svg className="w-4 h-4 steel-haze mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                                        </svg>
                                        <span className="font-medium font-nunito tracking-wider custome-deskription leading-normal">{category}</span>
                                    </div>
                                    <div className="flex items-center bg-gray-50 px-3 py-1.5 rounded-full">
                                        <svg className="w-4 h-4 steel-haze mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                        </svg>
                                        <span className="font-medium font-nunito tracking-wider custome-deskription leading-normal">{tags}</span>
                                    </div>
                                </div>
                                
                                <p className="text-sm/6 md:text-sm/6 font-normal leading-normal tracking-wider custome-deskription italic">
                                    {description}
                                </p>                            
                            </div>
                        </div>
                    </div>

                    <div className="relative mx-5 md:mx-15 mt-8">
                        <div className="relative rounded-2xl custom-banner-artikel px-5 sm:px-8 py-7 md:py-8" style={{ marginTop: '12px', marginBottom: '12px', maxWidth: '850px', marginLeft: 'auto', marginRight: 'auto',}}>
                            <svg className="absolute top-4 left-6 sm:left-8 w-8 sm:w-10 h-8 sm:h-10 text-[#d6cbe9] opacity-80 pointer-events-none" viewBox="0 0 48 48" fill="none" >
                                <path d="M18 8C12.477 8 8 12.477 8 18c0 4.418 3.582 8 8 8v4c-6.627 0-12-5.373-12-12S11.373 4 18 4v4zm22 0c-5.523 0-10 4.477-10 10 0 4.418 3.582 8 8 8v4c-6.627 0-12-5.373-12-12S34.373 4 41 4v4z" fill="currentColor"/>
                            </svg>

                            <div className="pl-8 sm:pl-12 pt-2">
                                <p className="text-left text-sm/6 md:text-base font-normal leading-relaxed tracking-wide custome-deskription italic mt-4">
                                    {quote}
                                </p>
                            </div>

                            <svg className="absolute bottom-4 right-6 sm:right-8 w-6 sm:w-8 h-6 sm:h-8 text-[#d6cbe9] opacity-80 pointer-events-none" viewBox="0 0 48 48" fill="none">
                                <path d="M30 40c5.523 0 10-4.477 10-10 0-4.418-3.582-8-8-8v-4c6.627 0 12 5.373 12 12s-5.373 12-12 12v-4zm-22 0c5.523 0 10-4.477 10-10 0-4.418-3.582-8-8-8v-4c6.627 0 12 5.373 12 12S11.373 44 4 44v-4z" fill="currentColor"/>
                            </svg>
                        </div>

                        <div className="max-w-[850px] mx-auto mt-8">
                            {mainContent.map((paragraph, index) => (
                                <p key={index} className="text-left text-sm/6 md:text-base font-normal leading-relaxed tracking-wide custome-deskription italic mt-3">
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        <div className="relative rounded-2xl custom-banner-artikel px-5 sm:px-8 py-7 md:py-8" style={{ marginTop: '32px', marginBottom: '32px', maxWidth: '850px', marginLeft: 'auto', marginRight: 'auto',}}>
                            <div className="space-y-3 sm:space-y-2.5">
                                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 text-left">                             
                                    <h3 className="text-xl sm:text-2xl md:text-2xl font-bold font-nunito tracking-wider leading-tight steel-haze">
                                        {features.title}
                                    </h3>
                                </div>

                                <p className="text-left text-sm/6 md:text-sm/6 font-medium leading-relaxed tracking-wide custome-deskription pl-0 sm:pl-0 italic">
                                    {features.description}
                                </p>

                                <div className="space-y-4 sm:space-y-5 pl-0 sm:pl-0">
                                    {features.items.map((feature, index) => (
                                        <div key={index} className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 p-4 sm:p-5 bg-white/35 rounded-2xl border border-gray-300">
                                            <div className="w-10 h-10 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center shadow-sm flex-shrink-0">
                                                {feature.icon}
                                            </div>
                                            <p className="text-sm/6 md:text-sm/6 font-medium leading-relaxed tracking-wider custome-deskription text-left italic">
                                                {feature.text}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="max-w-[850px] mx-auto mt-10 mb-10">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="space-y-4 text-left">
                                    <div className="flex items-center space-x-3">
                                        <h2 className="text-xl md:text-2xl font-bold font-nunito tracking-wider leading-tight steel-haze">
                                            {benefit.title}
                                        </h2>
                                    </div>

                                    {benefit.image && (
                                        <div className="rounded-xl overflow-hidden mt-8">
                                            <img src={benefit.image} alt={benefit.imageAlt} className="w-full object-cover" style={{ maxHeight: 450 }}/>
                                        </div>
                                    )}
                                    <div className="pl-0">
                                        <h3 className={`text-base md:text-xl font-semibold font-nunito tracking-wide steel-haze mb-3 italic ${benefit.image ? 'mt-8' : ''}`}>
                                            {benefit.subtitle}
                                        </h3>
                                        {benefit.paragraphs.map((paragraph, pIndex) => (
                                            <p key={pIndex} className="text-left text-sm/6 md:text-base font-normal leading-relaxed tracking-wide custome-deskription custome-deskription italic mt-3">
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default ArtikelDetailTemplate; 