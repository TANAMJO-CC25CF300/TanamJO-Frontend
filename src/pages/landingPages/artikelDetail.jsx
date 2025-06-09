import React from "react";
import HarvestLanding from '@components/landingPages/plantlis/HarvestLandingAbout';
import bannerImage from '@/assets/Banner/card-2.png';

function ArtikelDetail() {
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
                                    Plant Problems Early
                                </h2>
                                
                                <div className="flex items-center space-x-5 text-sm/6 mb-3.5">
                                    <div className="flex items-center bg-gray-50 px-3 py-1.5 rounded-full">
                                        <svg className="w-4 h-4 steel-haze mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        <span className="font-medium font-nunito tracking-wider custome-deskription leading-normal">March 12, 2024</span>
                                    </div>
                                    <div className="flex items-center bg-gray-50 px-3 py-1.5 rounded-full">
                                        <svg className="w-4 h-4 steel-haze mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span className="font-medium font-nunito tracking-wider custome-deskription leading-normal">5 min read</span>
                                    </div>
                                    <div className="flex items-center bg-gray-50 px-3 py-1.5 rounded-full">
                                        <svg className="w-4 h-4 steel-haze mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                                        </svg>
                                        <span className="font-medium font-nunito tracking-wider custome-deskription leading-normal">Gardening</span>
                                    </div>
                                    <div className="flex items-center bg-gray-50 px-3 py-1.5 rounded-full">
                                        <svg className="w-4 h-4 steel-haze mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                        </svg>
                                        <span className="font-medium font-nunito tracking-wider custome-deskription leading-normal">Tips & Tricks</span>
                                    </div>
                                </div>
                                
                                <p className="text-sm/6 md:text-sm/6 font-normal leading-normal tracking-wider custome-deskription italic">
                                    Use our smart detection tools to spot diseases early and take action fast. With advanced technology, you can monitor plant health in real-time, identify signs of pests or nutrient deficiencies, and get personalized care tips. This helps prevent the spread of problems, saving your plants from damage and boosting their growth potential. Stay ahead with easy-to-understand insights that empower you to nurture your garden effectively and confidently.
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
                                    Discover innovative gardening tips that turn your backyard into a peaceful oasis. Learn how to blend colors and textures for stunning visual appeal.
                                </p>
                            </div>

                            <svg className="absolute bottom-4 right-6 sm:right-8 w-6 sm:w-8 h-6 sm:h-8 text-[#d6cbe9] opacity-80 pointer-events-none" viewBox="0 0 48 48" fill="none">
                                <path d="M30 40c5.523 0 10-4.477 10-10 0-4.418-3.582-8-8-8v-4c6.627 0 12 5.373 12 12s-5.373 12-12 12v-4zm-22 0c5.523 0 10-4.477 10-10 0-4.418-3.582-8-8-8v-4c6.627 0 12 5.373 12 12S11.373 44 4 44v-4z" fill="currentColor"/>
                            </svg>
                        </div>

                        <div className="max-w-[850px] mx-auto mt-8">
                            <p className="text-left text-sm/6 md:text-base font-normal leading-relaxed tracking-wide custome-deskription italic mt-3">
                                Digital image-based plant disease detection technology helps farmers and gardeners identify disease symptoms early through visual analysis of leaf images or other plant parts.
                            </p>
                            <p className="text-left text-sm/6 md:text-base font-normal leading-relaxed tracking-wide custome-deskription italic mt-3">
                                By utilizing pattern recognition algorithms and artificial intelligence, this system can accelerate decision-making, improve crop yields, and reduce reliance on time-consuming manual inspections.
                            </p>
                        </div>


                        <div className="relative rounded-2xl custom-banner-artikel px-5 sm:px-8 py-7 md:py-8" style={{ marginTop: '32px', marginBottom: '32px', maxWidth: '850px', marginLeft: 'auto', marginRight: 'auto',}}>
                            <div className="space-y-3 sm:space-y-2.5">
                                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 text-left">                             
                                    <h3 className="text-xl sm:text-2xl md:text-2xl font-bold font-nunito tracking-wider leading-tight steel-haze">
                                        Benefits of Digital Image-Based Plant Disease Detection System
                                    </h3>
                                </div>

                                <p className="text-left text-sm/6 md:text-sm/6 font-medium leading-relaxed tracking-wide custome-deskription pl-0 sm:pl-0 italic">
                                    This system enables farmers to identify disease symptoms more quickly, improve treatment efficiency, and prevent wider spread of plant diseases accurately and efficiently.
                                </p>


                                <div className="space-y-4 sm:space-y-5 pl-0 sm:pl-0">
                                    <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 p-4 sm:p-5 bg-white/35 rounded-2xl border border-gray-300">
                                        <div className="w-10 h-10 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center shadow-sm flex-shrink-0">
                                            <svg className="w-6 h-6 sm:w-6 sm:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <p className="text-sm/6 md:text-sm/6 font-medium leading-relaxed tracking-wider custome-deskription text-left italic">
                                            With the help of digital imaging, the system can identify characteristic disease features such as abnormal colors, spot patterns, or leaf damage that are difficult to recognize manually, even in the early stages of infection.
                                        </p>
                                    </div>


                                    <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 p-4 sm:p-5 bg-white/35 rounded-2xl border border-gray-300">
                                        <div className="w-10 h-10 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center shadow-sm flex-shrink-0">
                                            <svg className="w-6 h-6 sm:w-6 sm:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                            </svg>
                                        </div>
                                        <p className="text-sm/6 md:text-sm/6 font-medium leading-relaxed tracking-wider custome-deskription text-left italic">
                                            Leaf pattern recognition technology enables the system to automatically and accurately detect early signs of plant diseases, such as spots or color changes, from digital images alone.
                                        </p>
                                    </div>


                                    <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 p-4 sm:p-5 bg-white/35 rounded-2xl border border-gray-300">
                                        <div className="w-10 h-10 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center shadow-sm flex-shrink-0">
                                            <svg className="w-6 h-6 sm:w-6 sm:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                            </svg>
                                        </div>
                                        <p className="text-sm/6 md:text-sm/6 font-medium leading-relaxed tracking-wider custome-deskription text-left italic">
                                            Leaf pattern recognition technology enables the system to automatically and accurately detect early signs of plant diseases, such as spots or color changes, from digital images alone.
                                        </p>
                                    </div>


                                    <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 p-4 sm:p-5 bg-white/35 rounded-2xl border border-gray-300">
                                        <div className="w-10 h-10 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center shadow-sm flex-shrink-0">
                                            <svg className="w-6 h-6 sm:w-6 sm:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                                            </svg>
                                        </div>
                                        <p className="text-sm/6 md:text-sm/6 font-medium leading-relaxed tracking-wider custome-deskription text-left italic">
                                            Digital image-based detection system helps identify plant diseases early by analyzing leaf texture and patterns. This approach improves monitoring efficiency and reduces reliance on manual inspection, thereby accelerating control measures.
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="max-w-[850px] mx-auto mt-10 mb-10">
                            <div className="space-y-4 text-left">
                                <div className="flex items-center space-x-3">
                                    <h2 className="text-xl md:text-2xl font-bold font-nunito tracking-wider leading-tight steel-haze">
                                        Smart System for Early Plant Disease Detection
                                    </h2>
                                </div>

                                <div className="pl-0">
                                    <h3 className="text-base md:text-xl font-semibold font-nunito tracking-wide steel-haze mb-3 italic">
                                        Visual Pattern Recognition in Plant Leaves
                                    </h3>
                                    <p className="text-left text-sm/6 md:text-base font-normal leading-relaxed tracking-wide custome-deskription custome-deskription italic">
                                        This technology utilizes leaf images captured using smartphone cameras or other devices, then processes them through stages such as segmentation, feature extraction, and contrast enhancement. This process enables the system to detect early disease symptoms such as spots, color changes, or leaf deformations.
                                    </p>

                                    <p className="text-left text-sm/6 md:text-base font-normal leading-relaxed tracking-wide custome-deskription italic mt-3">
                                        By integrating this method into agricultural applications, farmers can obtain plant health information quickly and accurately, even before symptoms spread widely. Such early detection helps in making appropriate decisions for treatment and preventing further damage.
                                    </p>
                                </div>
                            </div>


                            <div className="rounded-xl overflow-hidden mt-8">
                                <img src={bannerImage} alt="Edging plastik memisahkan kebun dan rumput" className="w-full object-cover" style={{ maxHeight: 450 }}/>
                            </div>

                            <div className="pl-0 mt-8 text-left">
                                <h3 className="text-base md:text-xl font-semibold font-nunito tracking-wide steel-haze mb-3 italic">
                                    Image Processing as the Foundation of Plant Disease Detection
                                </h3>
                                <p className="text-left text-sm/6 md:text-base font-normal leading-relaxed tracking-wide custome-deskription custome-deskription italic">
                                    One of the key components in this system is image processing, where captured plant leaf images undergo various stages such as color conversion, segmentation, and visual quality enhancement. This step enables the system to recognize disease symptom patterns on leaf surfaces more accurately. With this approach, the system can distinguish between healthy and infected leaves based on visual features such as color, texture, and spot patterns, before proceeding to advanced classification stages.
                                </p>
                            </div>


                            <div className="rounded-xl overflow-hidden mt-8">
                                <img src={bannerImage} alt="Edging plastik memisahkan kebun dan rumput" className="w-full object-cover" style={{ maxHeight: 450 }}/>
                            </div>

                            <div className="pl-0 mt-8 text-left">
                                <h3 className="text-base md:text-xl font-semibold font-nunito tracking-wide steel-haze mb-3 italic">
                                    Digital Image-Based Plant Disease Detection System Flow
                                </h3>
                                <p className="text-left text-sm/6 md:text-base font-normal leading-relaxed tracking-wide custome-deskription custome-deskription italic">
                                    This diagram explains the stages in the plant disease detection system using digital image processing technology. The process begins with capturing plant leaf images, followed by preprocessing such as resizing and image quality enhancement. After that, the system performs feature extraction and texture analysis to capture important visual patterns. The final stage uses classification algorithms such as Convolutional Neural Network (CNN) to automatically and accurately identify disease types. This system is designed to support farmers in making quick decisions regarding plant disease management.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default ArtikelDetail;