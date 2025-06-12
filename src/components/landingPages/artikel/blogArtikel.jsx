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
                
            </div>


        </div>
    </>
  )
}

export default BlogArtikel;