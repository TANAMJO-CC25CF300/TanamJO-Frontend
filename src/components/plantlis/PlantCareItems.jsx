import React from "react";

function PlantCareItems({ items }) {
    return (
        <main className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {items.map((item) => (
                <div key={item.id} className="p-4 sm:p-5 rounded-3xl text-white space-y-2 relative h-[170px] md:h-[200px] custom-banner">
                    <div className="absolute top-2 sm:top-3 right-3 bg-white text-green-700 rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center font-bold text-sm sm:text-base">
                        {item.id}
                    </div>

                    <div className="mt-6 sm:mt-7 md:mt-9">
                        <h3 className="text-lg font-bold tracking-wide border-b border-white pb-1.5 sm:pb-2 text-left">
                            {item.title}
                        </h3>
                        <p className="text-sm/6 sm:text-sm/6 leading-normal mt-2 sm:mt-2.5 text-left font-semibold tracking-wider max-w-[95%] sm:max-w-sm lg:line-clamp-3 xl:line-clamp-3">
                            {item.description}
                        </p>
                    </div>
                </div>
            ))}
        </main>
    );
}

export default PlantCareItems; 