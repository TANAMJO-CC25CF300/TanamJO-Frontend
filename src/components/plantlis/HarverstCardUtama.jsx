import React from "react";

function HarverstCardUtama({ image, title }) {

    return (

        <main>

            <div className="relative flex flex-col justify-end items-center h-[240px] sm:h-[260px] md:h-[300px] min-h-[220px] sm:min-h-[240px] md:min-h-[280px] w-full">
                {image && (
                    <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover rounded-3xl" style={{ zIndex: 1 }}/>
                )}

                <div className="absolute -top-1 right-[-0.2rem] w-11 h-11 sm:w-12 sm:h-12 md:w-12 md:h-12 bg-white rounded-bl-3xl rounded-tr-3xl z-10 flex items-center justify-center">
                    <span className="custom-banner rounded-full w-7 h-7 flex items-center justify-center shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                    </span>
                </div>

                <div className="text-sm/6 md:text-md/6 text-white font-bold tracking-wider mb-3 z-20 relative">
                    {title}
                </div>
            </div>
            
        </main>


    );
}

export default HarverstCardUtama;
