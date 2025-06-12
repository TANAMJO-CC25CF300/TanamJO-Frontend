import React from 'react'
import { useSearchParams } from 'react-router-dom';
import HarvestLandingAbout from '@components/landingPages/plantlis/HarvestLandingAbout';
import { blogCardData } from '@/constants/homePageData';

function BlogArtikel() {
  const [searchParams] = useSearchParams();
  const blogId = parseInt(searchParams.get('id'));
  
  // Find the blog post data based on the ID
  const blogPost = blogCardData.find(post => post.id === blogId);

  if (!blogPost) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Blog Post Not Found</h2>
          <p className="text-gray-600">The blog post you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <>
        <div>
            <HarvestLandingAbout title={blogPost.title} breadcrumb={["Home", "Blog Artikel"]}/>
        </div>

        <div className="lg:mx-0 xl:mx-10 -mt-6 w-auto rounded-4xl text-center relative z-20 mb-5 shadow-md pattern-background">

            {/* area content */}
            <div className="mx-5 md:mx-15 pt-15 sm:pt-15 md:pt-16 lg:pt-18 rounded-3xl">

                <div className="max-Width-auto mx-auto mb-6">
                    <div className="bg-green-100 rounded-xl px-6 py-4 flex items-start shadow-sm">
                        <svg className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17a4 4 0 01-4-4V7a4 4 0 014-4h2a4 4 0 014 4v6a4 4 0 01-4 4H9zm6 0a4 4 0 01-4-4V7a4 4 0 014-4h2a4 4 0 014 4v6a4 4 0 01-4 4h-2z" />
                        </svg>
                        <span className="steel-haze text-sm/7 md:text-base/7 leading-relaxed font-nunito tracking-wide font-medium italic text-left">
                            {blogPost.description}
                        </span>
                    </div>
                </div>

                <div className="max-Width-auto mx-auto group text-left">
                    <p className="text-sm/7 md:text-base/7 font-medium leading-relaxed font-nunito tracking-wide text-gray-500 group-hover:text-emerald-600 transition-colors duration-300 mb-4">
                        {blogPost.fullContent.intro}
                    </p>
                </div>
                
                <div className="w-full max-Width-auto mx-auto pt-4 sm:pt-6 md:pt-8">
                    <div className="relative shadow-sm rounded-2xl sm:rounded-3xl overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10"></div>
                        <img
                            src={blogPost.image}
                            alt={blogPost.title}
                            className="w-full h-[250px] sm:h-[350px] md:h-[450px] object-cover object-center"
                            style={{ boxShadow: '0 8px 32px 0 rgba(60, 72, 88, 0.18)' }}
                        />
                        
                        <div className="absolute bottom-0 left-0 w-full p-4 sm:p-5 md:p-6 z-20">
                            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                                <span className="px-2 sm:px-3 py-1 bg-green-500/90 text-white text-[10px] sm:text-xs font-medium rounded-full">
                                    {blogPost.category}
                                </span>
                            </div>
                            
                            <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold font-nunito tracking-wider leading-tight mb-2 sm:mb-3 text-left drop-shadow-lg">
                                {blogPost.title}
                            </h3>
                            
                            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-white/90 text-xs sm:text-sm">
                                <div className="flex items-center">
                                    <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="font-nunito tracking-wide leading-normal font-semibold text-white">{blogPost.readTime}</span>
                                </div>
                                <div className="flex items-center">
                                    <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <span className="font-nunito tracking-wide leading-normal font-semibold text-white">{blogPost.date}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {blogPost.fullContent.sections.map((section, index) => (
                    <div key={index} className="max-Width-auto mx-auto mt-8">
                        <div className="border-l-4 border-green-400 mb-3.5 text-left pl-3 rounded-l-lg">
                            <h2 className="text-lg md:text-xl font-bold font-nunito tracking-wider leading-tight steel-haze mb-2 text-left">
                                {section.title}
                            </h2>
                        </div>

                        <div className="space-y-4 text-left group">
                            <p className="text-sm/7 md:text-base/7 font-medium leading-relaxed font-nunito tracking-wide text-gray-500 group-hover:text-emerald-600 transition-colors duration-300 text-left">
                                {section.content}
                            </p>
                        </div>
                    </div>
                ))}

                <div className="mt-8">
                    <div className="border border-gray-300 rounded-3xl p-5 shadow-sm relative text-left">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-yellow-100">
                                <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                                    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <circle cx="12" cy="12" r="5" fill="#FBBF24"/>
                                </svg>
                            </span>

                            <span className="bg-green-200 text-green-800 text-sm/6 font-semibold px-3 py-1 rounded-full font-nunito tracking-wider">Conclusion</span>
                            
                            <div className="flex flex-wrap items-center gap-2 text-sm/6 font-nunito tracking-wider leading-normal font-medium text-gray-600">
                                <span>Last updated: {blogPost.date}</span>
                                <span>•</span>
                                <span>{blogPost.readTime}</span>
                                <span>•</span>
                                <span>Harvest Story</span>
                            </div>
                        </div>
                        
                        <div className="mt-5 group space-y-4">
                            <h3 className="text-xl md:text-2xl font-bold font-nunito tracking-wider leading-tight steel-haze text-left">
                                From Root to Canopy: Understanding Our Floral World
                            </h3>

                            <p className="text-sm/7 md:text-base/7 font-medium leading-relaxed font-nunito tracking-wide text-gray-500 group-hover:text-emerald-600 transition-colors duration-300 text-left">
                                {blogPost.fullContent.conclusion}
                            </p>                                    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default BlogArtikel;