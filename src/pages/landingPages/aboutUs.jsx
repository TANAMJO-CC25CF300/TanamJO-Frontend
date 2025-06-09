import React from "react";
import HarvestLandingAbout from '@components/landingPages/plantlis/HarvestLandingAbout';
import PlantCareItemSection from '@components/landingPages/plantlis/PlantCareItemSection';
import ArtikelList from '@components/landingPages/artikel/ArtikelList';
import Artikelsection from '@components/landingPages/Artikel/Artikelsection';
import image1 from '../../assets/banner/1.png';
import image2 from '../../assets/banner/2.png';
import image3 from '../../assets/banner/3.png';
import image4 from '../../assets/banner/4.png';

function AboutUs() {
    return (
        <>
            <div>
                <HarvestLandingAbout title="Our History" breadcrumb={["Home", "About Us"]}/>
            </div>

            <div className="lg:mx-0 xl:mx-10 -mt-6 w-auto rounded-4xl text-center relative z-20 mb-5 shadow-md pattern-background">

                {/* area content */}
                <div className="mx-5 md:mx-15 pt-15 sm:pt-15 md:pt-16 lg:pt-18 rounded-3xl">
                    <div className="text-left space-y-3 sm:space-y-4">
                        <div className="flex flex-col items-start space-y-3 md:space-y-2">    
                            <h2 className="text-xl md:text-2xl font-bold font-nunito tracking-wider leading-tight steel-haze">
                                Our Story
                            </h2>

                            <p className="text-sm/6 md:text-sm/6 font-medium leading-normal tracking-wider custome-deskription line-clamp-4 italic">
                                Tanamjo is a platform dedicated to helping plant enthusiasts care for and develop their plant collections. With a focus on education and proper plant care practices, we are committed to providing accurate and easy-to-understand information.
                            </p>

                            <p className="text-sm/6 md:text-sm/6 font-medium leading-normal tracking-wider custome-deskription line-clamp-4 italic">
                                Through Tanamjo, users can learn various plant care techniques, from selecting the right growing media and watering schedules to handling pests and diseases. We provide comprehensive guides compiled by a team of agricultural and horticultural experts to ensure each plant can grow optimally.
                            </p>

                            <p className="text-sm/6 md:text-sm/6 font-medium leading-normal tracking-wider custome-deskription line-clamp-4 italic">
                                Our platform features an extensive plant encyclopedia with detailed information about different plant species, their specific care requirements, and growth characteristics. Whether you're a beginner or experienced gardener, Tanamjo offers valuable resources to help you succeed in your plant care journey.
                            </p>

                            <p className="text-sm/6 md:text-sm/6 font-medium leading-normal tracking-wider custome-deskription line-clamp-4 italic">
                                We also provide seasonal care tips and troubleshooting guides to help you maintain healthy plants throughout the year. Our goal is to create a supportive environment where everyone can develop their green thumb and enjoy the benefits of growing healthy, thriving plants.
                            </p>
                        </div>

                        <div className="mt-7 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 lg:gap-20">
                            <div className="flex flex-col items-center">
                                <div className="flex items-center justify-center mb-1">
                                    <img 
                                        src={image1} 
                                        alt="Identify plants" 
                                        className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px] object-contain" 
                                    />
                                </div>
                                <span className="text-center text-xs md:text-sm font-nunito tracking-wider custome-deskription font-medium">
                                    Plant Identification<br />Made Easy
                                </span>
                            </div>

                            <div className="flex flex-col items-center">
                                <div className="flex items-center justify-center mb-1">
                                    <img 
                                        src={image2} 
                                        alt="Identify plants" 
                                        className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px] object-contain" 
                                    />
                                </div>
                                <span className="text-center text-xs md:text-sm font-nunito tracking-wider custome-deskription font-medium">
                                    Expert Care<br />Guidance
                                </span>
                            </div>

                            <div className="flex flex-col items-center">
                                <div className="flex items-center justify-center mb-1">
                                    <img 
                                        src={image3} 
                                        alt="Identify plants" 
                                        className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px] object-contain" 
                                    />
                                </div>
                                <span className="text-center text-xs md:text-sm font-nunito tracking-wider custome-deskription font-medium">
                                    Disease Detection<br />& Treatment
                                </span>
                            </div>

                            <div className="flex flex-col items-center">
                                <div className="flex items-center justify-center mb-1">
                                    <img 
                                        src={image4} 
                                        alt="Identify plants" 
                                        className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px] object-contain" 
                                    />
                                </div>
                                <span className="text-center text-xs md:text-sm font-nunito tracking-wider custome-deskription font-medium">
                                    Growth Tracking<br />& Analytics
                                </span>
                            </div>
                        </div>

                        <div className="mt-8 border-t border-gray-200 pt-5">
                            <div className="flex flex-col md:flex-row items-start justify-between gap-10 md:gap-20">
                                <div className="flex-1 text-left">
                                    <div className="flex items-center gap-0 mb-2">
                                        <h3 className="text-xl md:text-2xl font-bold font-nunito tracking-wider leading-tight steel-haze">
                                            Our Mission
                                        </h3>
                                    </div>

                                    <div className="space-y-3 md:space-y-2">
                                        <p className="text-sm/6 custome-deskription leading-relaxed font-medium tracking-wider italic max-w-xl">
                                            At TanamaJo, we're dedicated to revolutionizing plant identification and disease detection through technology. Our mission is to provide instant, accurate identification of plants and plant diseases, helping users make informed decisions about plant health management.
                                        </p>

                                        <p className="text-sm/6 custome-deskription leading-relaxed font-medium tracking-wider italic max-w-xl">
                                            Through our AI-powered platform, we're making professional-grade plant identification and disease diagnosis accessible to everyone. Our system helps users quickly identify plants, detect diseases early, and access appropriate treatment recommendations.
                                        </p>

                                        <p className="text-sm/6 custome-deskription leading-relaxed font-medium tracking-wider italic max-w-xl">
                                            We believe that early detection and accurate identification are key to successful plant care. Our mission is to provide these essential tools to gardeners, farmers, and plant enthusiasts worldwide.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex-1 text-left">
                                    <div className="flex items-center gap-0 mb-2">
                                        <h3 className="text-xl md:text-2xl font-bold font-nunito tracking-wider leading-tight steel-haze">
                                            Our Vision
                                        </h3>
                                    </div>

                                    <div className="space-y-3 md:space-y-2">
                                        <p className="text-sm/6 custome-deskription leading-relaxed font-medium tracking-wider italic max-w-xl">
                                            TanamaJo envisions a future where plant identification and disease diagnosis are instant, accurate, and accessible to everyone. We're building an intelligent system that can identify any plant species and detect diseases at their earliest stages.
                                        </p>

                                        <p className="text-sm/6 custome-deskription leading-relaxed font-medium tracking-wider italic max-w-xl">
                                            Our platform aims to become the most reliable tool for plant identification and disease detection, powered by advanced AI technology and validated by agricultural experts.
                                        </p>

                                        <p className="text-sm/6 custome-deskription leading-relaxed font-medium tracking-wider italic max-w-xl">
                                            We see a world where anyone can instantly identify plants and plant diseases, leading to better plant health management and more successful cultivation practices.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                            <div className="w-full p-3 border border-gray-300 rounded-3xl text-left">
                                <div className="flex items-center space-y-3 md:space-y-2 mb-2">
                                    <h2 className="text-xl md:text-2xl font-bold font-nunito tracking-wider leading-tight steel-haze">
                                        Our Drive
                                    </h2>
                                </div>

                                <p className="text-sm/6 custome-deskription leading-relaxed font-medium tracking-wider italic max-w-xl">
                                    TanamaJo is driven by our commitment to revolutionize plant identification and disease detection. Using cutting-edge AI technology, we aim to make accurate plant identification and disease diagnosis accessible to everyone, from home gardeners to agricultural professionals. Our focus is on providing quick, reliable solutions for plant health management...
                                </p>
                            </div>

                            <div className="w-full p-3 border border-gray-300 rounded-3xl text-left">
                                <div className="flex items-center space-y-3 md:space-y-2 mb-2">
                                    <h2 className="text-xl md:text-2xl font-bold font-nunito tracking-wider leading-tight steel-haze">
                                        Our Impact
                                    </h2>
                                </div>

                                <p className="text-sm/6 custome-deskription leading-relaxed font-medium tracking-wider italic max-w-xl">
                                    Our advanced plant identification system has helped countless users accurately identify various plant species and detect early signs of plant diseases. Through our platform, gardeners and plant enthusiasts have successfully diagnosed and treated plant health issues, preventing crop losses and maintaining healthier gardens...
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col items-start space-y-3 md:space-y-2 mt-8">    
                            <h2 className="text-xl md:text-2xl font-bold font-nunito tracking-wider leading-tight steel-haze">
                                Our Technology
                            </h2>

                            <p className="text-sm/6 md:text-sm/6 font-medium leading-normal tracking-wider custome-deskription line-clamp-4 italic">
                                We utilize advanced machine learning and image recognition technology to provide accurate plant identification and disease diagnosis. Our system can recognize thousands of plant species and hundreds of common plant diseases, offering detailed information about symptoms, causes, and treatment options.
                            </p>

                            <p className="text-sm/6 md:text-sm/6 font-medium leading-normal tracking-wider custome-deskription line-clamp-4 italic">
                                Our AI-powered platform continuously learns and improves through user interactions and expert feedback. We combine computer vision algorithms with extensive botanical databases to ensure high accuracy in plant identification and disease detection.
                            </p>

                            <p className="text-sm/6 md:text-sm/6 font-medium leading-normal tracking-wider custome-deskription line-clamp-4 italic">
                                The technology behind TanamaJo includes real-time image processing, cloud-based analysis, and mobile-friendly interfaces that make plant identification accessible anywhere, anytime. Our system also incorporates environmental data and seasonal patterns to provide context-aware recommendations for plant care.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutUs;    