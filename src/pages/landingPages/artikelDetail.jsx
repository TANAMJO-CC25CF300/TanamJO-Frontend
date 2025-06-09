import React from "react";
import HarvestLanding from '@components/landingPages/plantlis/HarvestLandingAbout';
import bannerImage from '@/assets/Banner/card-2.png';

function ArtikelDetail() {
    return (
        <div>
            <div>
                <HarvestLanding title="Our History" breadcrumb={["Home", "Artikel Detail"]}/>
            </div>

            <div className="lg:mx-0 xl:mx-10 -mt-6 w-auto rounded-4xl text-center relative z-20 mb-5 shadow-md pattern-background">
                
                <div className="p-3.5 sm:p-4.5 mx-5 md:mx-15 mt-20 md:mt-20 rounded-3xl border border-gray-200 min-h-[130px]">
                    <div className="text-left space-y-3 sm:space-y-4">
                        <div className="flex flex-col items-start space-y-3 md:space-y-2">    
                            <h2 className="text-xl md:text-2xl font-bold font-nunito tracking-wider leading-tight steel-haze mb-3.5">
                                Tips for Creating Attractive and Functional Garden Borders
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
                            </div>
                            
                            <p className="text-sm/6 md:text-sm/6 font-normal leading-normal tracking-wider custome-deskription italic">
                                Garden borders not only serve as boundaries but can also become decorative elements that enhance the overall appearance of your garden. Discover various creative ideas and practical tips for creating attractive garden borders.
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
                                Garden borders help bring attention to your garden while keeping a divider between grass and your plants. Create a unique, eye-catching boundary using any of these 13 creative ideas.
                            </p>
                        </div>

                        <svg className="absolute bottom-4 right-6 sm:right-8 w-6 sm:w-8 h-6 sm:h-8 text-[#d6cbe9] opacity-80 pointer-events-none" viewBox="0 0 48 48" fill="none">
                            <path d="M30 40c5.523 0 10-4.477 10-10 0-4.418-3.582-8-8-8v-4c6.627 0 12 5.373 12 12s-5.373 12-12 12v-4zm-22 0c5.523 0 10-4.477 10-10 0-4.418-3.582-8-8-8v-4c6.627 0 12 5.373 12 12S11.373 44 4 44v-4z" fill="currentColor"/>
                        </svg>
                    </div>

                    <div className="max-w-[850px] mx-auto mt-8">
                        <p className="text-left text-sm/6 md:text-base font-normal leading-relaxed tracking-wide custome-deskription italic mt-3">
                            Desain border taman yang menarik tidak hanya memperindah tampilan, tetapi juga membantu menjaga batas antara rumput dan tanaman Anda tetap rapi. Temukan inspirasi dan tips praktis untuk membuat pembatas taman yang fungsional sekaligus estetis di halaman rumah Anda.
                        </p>
                        <p className="text-left text-sm/6 md:text-base font-normal leading-relaxed tracking-wide custome-deskription italic mt-3">
                            Dengan memilih material dan desain yang tepat, border taman dapat menjadi elemen dekoratif yang memperkuat tema taman Anda sambil memberikan struktur visual yang jelas pada landscape keseluruhan.
                        </p>
                    </div>

                    <div className="relative rounded-2xl custom-banner-artikel px-5 sm:px-8 py-7 md:py-8" style={{ marginTop: '32px', marginBottom: '32px', maxWidth: '850px', marginLeft: 'auto', marginRight: 'auto',}}>
                        <div className="space-y-3 sm:space-y-2.5">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 text-left">                             
                                <h3 className="text-xl sm:text-2xl md:text-2xl font-bold font-nunito tracking-wider leading-tight steel-haze">
                                    Benefits of Having Borders in Your Gardenrdenrdenrden
                                </h3>
                            </div>

                            <p className="text-left text-sm/6 md:text-sm/6 font-medium leading-relaxed tracking-wide custome-deskription pl-0 sm:pl-0 italic">
                                Adding garden borders is helpful for many reasons.
                            </p>

                            <div className="space-y-4 sm:space-y-5 pl-0 sm:pl-0">
                                <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 p-4 sm:p-5 bg-white/35 rounded-2xl border border-gray-300">
                                    <div className="w-10 h-10 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center shadow-sm flex-shrink-0">
                                        <svg className="w-6 h-6 sm:w-6 sm:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <p className="text-sm/6 md:text-sm/6 font-medium leading-relaxed tracking-wider custome-deskription text-left italic">
                                        Garden borders add an extra aesthetic element to the space, helping to keep the area tidy. Borders create a fantastic boundary between your lawn and garden.
                                    </p>
                                </div>

                                <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 p-4 sm:p-5 bg-white/35 rounded-2xl border border-gray-300">
                                    <div className="w-10 h-10 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center shadow-sm flex-shrink-0">
                                        <svg className="w-6 h-6 sm:w-6 sm:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>
                                    <p className="text-sm/6 md:text-sm/6 font-medium leading-relaxed tracking-wider custome-deskription text-left italic">
                                        Garden borders add an extra aesthetic element to the space, helping to keep the area tidy. Borders create a fantastic boundary between your lawn and garden.n and garden.n and garden.n and garden.
                                    </p>
                                </div>

                                <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 p-4 sm:p-5 bg-white/35 rounded-2xl border border-gray-300">
                                    <div className="w-10 h-10 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center shadow-sm flex-shrink-0">
                                        <svg className="w-6 h-6 sm:w-6 sm:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                    </div>
                                    <p className="text-sm/6 md:text-sm/6 font-medium leading-relaxed tracking-wider custome-deskription text-left italic">
                                        Garden borders add an extra aesthetic element to the space, helping to keep the area tidy. Borders create a fantastic boundary between your lawn and garden.
                                    </p>
                                </div>

                                <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 p-4 sm:p-5 bg-white/35 rounded-2xl border border-gray-300">
                                    <div className="w-10 h-10 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center shadow-sm flex-shrink-0">
                                        <svg className="w-6 h-6 sm:w-6 sm:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                                        </svg>
                                    </div>
                                    <p className="text-sm/6 md:text-sm/6 font-medium leading-relaxed tracking-wider custome-deskription text-left italic">
                                        Garden borders add an extra aesthetic element to the space, helping to keep the area tidy. Borders create a fantastic boundary between your lawn and garden.boundary between your lawn and garden.boundary between your lawn and garden.boundary between your lawn and garden.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-[850px] mx-auto mt-10 mb-10">
                        <div className="space-y-4 text-left">
                            <div className="flex items-center space-x-3">
                                <h2 className="text-xl md:text-2xl font-bold font-nunito tracking-wider leading-tight steel-haze">
                                    Creative Border Ideas for Your Gardenenenen
                                </h2>
                            </div>

                            <div className="pl-0">
                                <h3 className="text-base md:text-xl font-semibold font-nunito tracking-wide steel-haze mb-3 italic">
                                    Edging Plastik Ekonomis untuk Lanskap
                                </h3>
                                <p className="text-left text-sm/6 md:text-base font-normal leading-relaxed tracking-wide custome-deskription custome-deskription italic">
                                    Salah satu pilihan border paling murah dan mudah adalah menggunakan edging plastik yang bisa Anda beli di toko pertanian atau taman terdekat. Edging ini tersedia dalam gulungan panjang yang bisa dipotong sesuai kebutuhan. Pasang patok logam atau plastik ke tanah untuk mengunci edging di tempatnya, sehingga area kebun dan rumput Anda tampak rapi dan terpisah jelas.
                                </p>

                                <p className="text-left text-sm/6 md:text-base font-normal leading-relaxed tracking-wide custome-deskription italic mt-3">
                                    Dengan memilih material dan desain yang tepat, border taman dapat menjadi elemen dekoratif yang memperkuat tema taman Anda sambil memberikan struktur visual yang jelas pada landscape keseluruhan.
                                </p>
                            </div>
                        </div>

                        <div className="rounded-xl overflow-hidden mt-8">
                            <img src={bannerImage} alt="Edging plastik memisahkan kebun dan rumput" className="w-full object-cover" style={{ maxHeight: 450 }}/>
                        </div>

                        <div className="pl-0 mt-8 text-left">
                            <h3 className="text-base md:text-xl font-semibold font-nunito tracking-wide steel-haze mb-3 italic">
                                Edging Plastik Ekonomis untuk Lanskapanskapanskapanskap
                            </h3>
                            <p className="text-left text-sm/6 md:text-base font-normal leading-relaxed tracking-wide custome-deskription custome-deskription italic">
                                Salah satu pilihan border paling murah dan mudah adalah menggunakan edging plastik yang bisa Anda beli di toko pertanian atau taman terdekat. Edging ini tersedia dalam gulungan panjang yang bisa dipotong sesuai kebutuhan. Pasang patok logam atau plastik ke tanah untuk mengunci edging di tempatnya, sehingga area kebun dan rumput Anda tampak rapi dan terpisah jelas.gunci edging di tempatnya, sehingga area kebun dan rumput Anda tampak rapi dan terpisah jelas.gunci edging di tempatnya, sehingga area kebun dan rumput Anda tampak rapi dan terpisah jelas.gunci edging di tempatnya, sehingga area kebun dan rumput Anda tampak rapi dan terpisah jelas.
                            </p>
                        </div>

                        <div className="rounded-xl overflow-hidden mt-8">
                            <img src={bannerImage} alt="Edging plastik memisahkan kebun dan rumput" className="w-full object-cover" style={{ maxHeight: 450 }}/>
                        </div>

                        <div className="pl-0 mt-8 text-left">
                            <h3 className="text-base md:text-xl font-semibold font-nunito tracking-wide steel-haze mb-3 italic">
                                Edging Plastik Ekonomis untuk Lanskap
                            </h3>
                            <p className="text-left text-sm/6 md:text-base font-normal leading-relaxed tracking-wide custome-deskription custome-deskription italic">
                                Salah satu pilihan border paling murah dan mudah adalah menggunakan edging plastik yang bisa Anda beli di toko pertanian atau taman terdekat. Edging ini tersedia dalam gulungan panjang yang bisa dipotong sesuai kebutuhan. Pasang patok logam atau plastik ke tanah untuk mengunci edging di tempatnya, sehingga area kebun dan rumput Anda tampak rapi dan terpisah jelas. edging di tempatnya, sehingga area kebun dan rumput Anda tampak rapi dan terpisah jelas. edging di tempatnya, sehingga area kebun dan rumput Anda tampak rapi dan terpisah jelas. edging di tempatnya, sehingga area kebun dan rumput Anda tampak rapi dan terpisah jelas.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ArtikelDetail;