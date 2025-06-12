import React from 'react'
import HarvestLandingAbout from '@components/landingPages/plantlis/HarvestLandingAbout';

function BlogArtikel() {
  return (
    <>
        <div>
            <HarvestLandingAbout title="Our History" breadcrumb={["Home", "Blog Artikel"]}/>
        </div>

        <div className="lg:mx-0 xl:mx-10 -mt-6 w-auto rounded-4xl text-center relative z-20 mb-5 shadow-md pattern-background">

            {/* area content */}
            <div className="mx-5 md:mx-15 pt-15 sm:pt-15 md:pt-16 lg:pt-18 rounded-3xl">

                <div className="max-Width-auto mx-auto mb-6">
                    <div className="bg-green-100 rounded-xl px-6 py-4 flex items-start shadow-sm">
                        <svg className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17a4 4 0 01-4-4V7a4 4 0 014-4h2a4 4 0 014 4v6a4 4 0 01-4 4H9zm6 0a4 4 0 01-4-4V7a4 4 0 014-4h2a4 4 0 014 4v6a4 4 0 01-4 4h-2z" />
                        </svg>
                        <span className="text-gray-700 text-base md:text-lg font-medium italic text-left">
                            Journey through diverse climates to understand how they sculpt local flora. Learn about plants’ remarkable adaptations and uncover traditional cultivation practices shaped by the environment.
                        </span>
                    </div>
                </div>

                <div className="max-Width-auto mx-auto group text-left">
                    <p className="text-sm/7 md:text-base/7 font-medium leading-relaxed font-nunito tracking-wide text-gray-500 group-hover:text-emerald-600 transition-colors duration-300 mb-4">
                        The planet’s rich tapestry of flora is profoundly influenced by the climates in which they reside. From the parched sands of the desert to the lush canopies of the rainforest, plants have developed extraordinary adaptations to thrive in their environments. This article ventures into different climate zones to uncover the fascinating interplay between regional climates, local flora, and traditional cultivation practices, offering a glimpse into the symbiotic relationship between Earth’s weather patterns and its vegetation.
                    </p>
                </div>
                
                <div className="w-full max-Width-auto mx-auto pt-8">
                    <div className="relative shadow-sm rounded-3xl overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10"></div>
                        <img
                            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
                            alt="Waterfall Forest"
                            className="w-full max-h-[450px] object-cover object-center"
                            style={{ boxShadow: '0 8px 32px 0 rgba(60, 72, 88, 0.18)' }}
                        />
                        
                        <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                            <div className="flex items-center space-x-3 mb-3">
                                <span className="px-3 py-1 bg-green-500/90 text-white text-xs font-medium rounded-full">
                                    Nature
                                </span>
                                <span className="px-3 py-1 bg-blue-500/90 text-white text-xs font-medium rounded-full">
                                    Climate
                                </span>
                            </div>
                            
                            <h3 className="text-white text-xl md:text-2xl font-bold font-nunito tracking-wider leading-tight mb-3 text-left drop-shadow-lg">
                                Rooted in Climate: How Regional Weather Patterns Sculpt Local Flora
                            </h3>
                            
                            <div className="flex items-center space-x-4 text-white/90 text-sm">
                                <div className="flex items-center">
                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="font-nunito tracking-wide leading-normal font-semibold text-white">5 min read</span>
                                </div>
                                <div className="flex items-center">
                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <span className="font-nunito tracking-wide leading-normal font-semibold text-white">March 15, 2024</span>
                                </div>
                            </div>
                            
                            <div className="mt-4 flex items-center">
                                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center mr-3">
                                    <span className="text-white text-sm font-bold">HS</span>
                                </div>
                                <div className="text-white/90 text-left">
                                    <p className="text-sm/6 font-nunito tracking-wide leading-tight font-semibold">Harvest Story</p>
                                    <p className="text-xs/6 font-nunito tracking-wide ont-semibold">Content Writer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-Width-auto mx-auto mt-8">
                    <div className="border-l-4 border-green-400 mb-6 text-left pl-3 rounded-l-lg">
                        <h2 className="text-lg md:text-xl font-bold font-nunito tracking-wider leading-tight steel-haze mb-2 text-left">
                            Climate's Canvas: Painting the World's Flora
                        </h2>
                    </div>

                    <div className="space-y-4 text-left group">
                        <p className="text-sm/7 md:text-base/7 font-medium leading-relaxed font-nunito tracking-wide text-gray-500 group-hover:text-emerald-600 transition-colors duration-300 text-left">
                            In the parched expanse of deserts, plants like cacti and succulents exhibit remarkable water retention strategies, developing thick, waxy skins and reduced leaf surfaces to minimize water loss and maximize water storage. These adaptations are not just about survival but are fine-tuned responses to the intense heat and scarce water availability characteristic of arid regions.
                        </p>

                        <p className="text-sm/7 md:text-base/7 font-medium leading-relaxed font-nunito tracking-wide text-gray-500 group-hover:text-emerald-600 transition-colors duration-300 text-left">
                            Venturing into the tropics, the dense, humid rainforests are a stark contrast. Here, plants compete in a vertical race for sunlight, leading to the development of towering trees and a multi-layered canopy structure. The large, broad leaves of understory plants are specially adapted to capture the dappled sunlight that filters through the dense canopy above. In these lush environments, the abundance of water and warmth results in an explosion of plant diversity, each species carving out its niche in the complex ecosystem.
                        </p>
                        
                        <p className="text-sm/7 md:text-base/7 font-medium leading-relaxed font-nunito tracking-wide text-gray-500 group-hover:text-emerald-600 transition-colors duration-300 text-left">
                            Even in the frigid embrace of the tundra, where the ground is frozen for much of the year, resilient flora like mosses, lichens, and low-growing shrubs have adapted to the extreme cold and short growing seasons. These plants grow close to the ground, minimizing exposure to chilly winds, and are capable of photosynthesizing under the low light conditions of the polar regions.
                        </p>
                    </div>

                    <div className="w-full max-w-full mx-auto flex justify-center mt-10 relative">
                        <div className="w-full border-t border-dotted border-gray-400" style={{ marginTop: '-2px', zIndex: 0, position: 'relative',}}></div>
                        <div className="absolute right-0 -bottom-3" style={{width: '32px', height: '32px', background: 'white', borderRadius: '50%', border: '2px solid #4ade80', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.04)',}}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-400">
                                <circle cx="10" cy="10" r="9" stroke="#4ade80" strokeWidth="2" fill="none"/>
                            </svg>
                        </div>
                    </div>

                    <div className="max-Width-auto mx-auto mt-6">

                        <div className="border-l-4 border-green-400 mb-3.5 text-left pl-3 rounded-l-lg">
                            <h2 className="text-lg md:text-xl font-bold font-nunito tracking-wider leading-tight steel-haze mb-2 text-left">
                                The Role of Climate in Shaping Local Flora
                            </h2>
                        </div>

                        <div className="space-y-4 text-left group">
                            <p className="text-sm/7 md:text-base/7 font-medium leading-relaxed font-nunito tracking-wide text-gray-500 group-hover:text-emerald-600 transition-colors duration-300 text-left">
                                In the parched expanse of deserts, plants like cacti and succulents exhibit remarkable water retention strategies, developing thick, waxy skins and reduced leaf surfaces to minimize water loss and maximize water storage. These adaptations are not just about survival but are fine-tuned responses to the intense heat and scarce water availability characteristic of arid regions.
                            </p>

                            <p className="text-sm/7 md:text-base/7 font-medium leading-relaxed font-nunito tracking-wide text-gray-500 group-hover:text-emerald-600 transition-colors duration-300 text-left">
                                Venturing into the tropics, the dense, humid rainforests are a stark contrast. Here, plants compete in a vertical race for sunlight, leading to the development of towering trees and a multi-layered canopy structure. The large, broad leaves of understory plants are specially adapted to capture the dappled sunlight that filters through the dense canopy above. In these lush environments, the abundance of water and warmth results in an explosion of plant diversity, each species carving out its niche in the complex ecosystem.
                            </p>
                            
                            <p className="text-sm/7 md:text-base/7 font-medium leading-relaxed font-nunito tracking-wide text-gray-500 group-hover:text-emerald-600 transition-colors duration-300 text-left">
                                Even in the frigid embrace of the tundra, where the ground is frozen for much of the year, resilient flora like mosses, lichens, and low-growing shrubs have adapted to the extreme cold and short growing seasons. These plants grow close to the ground, minimizing exposure to chilly winds, and are capable of photosynthesizing under the low light conditions of the polar regions.
                            </p>
                        </div>
                    </div>

                    <div className="w-full max-Width-auto mx-auto pt-8">
                        <div className="relative shadow-sm rounded-3xl overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10"></div>
                            <img
                                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
                                alt="Waterfall Forest"
                                className="w-full max-h-[450px] object-cover object-center"
                                style={{ boxShadow: '0 8px 32px 0 rgba(60, 72, 88, 0.18)' }}
                            />
                            
                            <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                                <div className="flex items-center space-x-3 mb-3">
                                    <span className="px-3 py-1 bg-green-500/90 text-white text-xs font-medium rounded-full">
                                        Nature
                                    </span>
                                    <span className="px-3 py-1 bg-blue-500/90 text-white text-xs font-medium rounded-full">
                                        Climate
                                    </span>
                                </div>
                                
                                <h3 className="text-white text-xl md:text-2xl font-bold font-nunito tracking-wider leading-tight mb-3 text-left drop-shadow-lg">
                                    Rooted in Climate: How Regional Weather Patterns Sculpt Local Flora
                                </h3>
                                
                                <div className="flex items-center space-x-4 text-white/90 text-sm">
                                    <div className="flex items-center">
                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span className="font-nunito tracking-wide leading-normal font-semibold text-white">5 min read</span>
                                    </div>
                                    <div className="flex items-center">
                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        <span className="font-nunito tracking-wide leading-normal font-semibold text-white">March 15, 2024</span>
                                    </div>
                                </div>
                                
                                <div className="mt-4 flex items-center">
                                    <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center mr-3">
                                        <span className="text-white text-sm font-bold">HS</span>
                                    </div>
                                    <div className="text-white/90 text-left">
                                        <p className="text-sm/6 font-nunito tracking-wide leading-tight font-semibold">Harvest Story</p>
                                        <p className="text-xs/6 font-nunito tracking-wide ont-semibold">Content Writer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full max-Width-auto mx-auto mt-8">

                        <div className="border-l-4 border-green-400 mb-3.5 text-left pl-3 rounded-l-lg">
                            <h2 className="text-xl md:text-2xl font-bold font-nunito tracking-wider leading-tight steel-haze text-left">
                                The Role of Climate in Shaping Local Flora
                            </h2>
                        </div>

                        <div className="space-y-4 text-left group">
                            <p className="text-sm/7 md:text-base/7 font-medium leading-relaxed font-nunito tracking-wide text-gray-500 group-hover:text-emerald-600 transition-colors duration-300 text-left">
                                In the parched expanse of deserts, plants like cacti and succulents exhibit remarkable water retention strategies, developing thick, waxy skins and reduced leaf surfaces to minimize water loss and maximize water storage. These adaptations are not just about survival but are fine-tuned responses to the intense heat and scarce water availability characteristic of arid regions.
                            </p>

                            <p className="text-sm/7 md:text-base/7 font-medium leading-relaxed font-nunito tracking-wide text-gray-500 group-hover:text-emerald-600 transition-colors duration-300 text-left">
                                Venturing into the tropics, the dense, humid rainforests are a stark contrast. Here, plants compete in a vertical race for sunlight, leading to the development of towering trees and a multi-layered canopy structure. The large, broad leaves of understory plants are specially adapted to capture the dappled sunlight that filters through the dense canopy above. In these lush environments, the abundance of water and warmth results in an explosion of plant diversity, each species carving out its niche in the complex ecosystem.
                            </p>
                            
                            <p className="text-sm/7 md:text-base/7 font-medium leading-relaxed font-nunito tracking-wide text-gray-500 group-hover:text-emerald-600 transition-colors duration-300 text-left">
                                Even in the frigid embrace of the tundra, where the ground is frozen for much of the year, resilient flora like mosses, lichens, and low-growing shrubs have adapted to the extreme cold and short growing seasons. These plants grow close to the ground, minimizing exposure to chilly winds, and are capable of photosynthesizing under the low light conditions of the polar regions.
                            </p>
                        </div>

                        <div className="mt-8">
                            <div className="border border-gray-300 rounded-3xl p-5 shadow-sm relative text-left">
                                <div className="flex items-center mb-2 space-x-3">
                                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-yellow-100 mr-2">
                                        <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                                            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <circle cx="12" cy="12" r="5" fill="#FBBF24"/>
                                        </svg>
                                    </span>

                                    <span className="bg-green-200 text-green-800 text-sm/6 font-semibold px-3 py-1 rounded-full font-nunito tracking-wider">Conclusion</span>
                                    <span className="custome-deskription text-sm/6 font-nunito tracking-wider leading-normal font-medium">Last updated: March 15, 2024</span>
                                    <span className="custome-deskription text-sm/6 font-nunito tracking-wider leading-normal font-medium">•</span>
                                    <span className="custome-deskription text-sm/6 font-nunito tracking-wider leading-normal font-medium">5 min read</span>
                                    <span className="custome-deskription text-sm/6 font-nunito tracking-wider leading-normal font-medium">•</span>
                                    <span className="custome-deskription text-sm/6 font-nunito tracking-wider leading-normal font-medium">Harvest Story</span>
                                </div>
                                
                                <div className="mt-5 group space-y-4">
                                    <h3 className="text-xl md:text-2xl font-bold font-nunito tracking-wider leading-tight steel-haze text-left">
                                        From Root to Canopy: Understanding Our Floral World
                                    </h3>

                                    <p className="text-sm/7 md:text-base/7 font-medium leading-relaxed font-nunito tracking-wide text-gray-500 group-hover:text-emerald-600 transition-colors duration-300 text-left">
                                        The intricate relationship between climate and flora is a testament to the resilience and adaptability of plant life. By understanding how regional climates shape local flora, and how traditional cultivation practices have evolved in harmony with these environments, we gain a deeper appreciation for the complexity and interconnectedness of our natural world. Let this knowledge inspire a more mindful and sustainable interaction with our planet's diverse and precious ecosystems.
                                    </p>                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </>
  )
}

export default BlogArtikel;