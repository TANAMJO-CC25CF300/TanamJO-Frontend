import React from "react";

function PlantCareItems({ items }) {
    return (
        <main className="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
            {items.map((item) => (
                <div key={item.id} className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-600 to-green-800 p-5 w-full ">
                    <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-white/10"></div>
                    <div className="absolute -left-4 -bottom-4 h-24 w-24 rounded-full bg-white/10"></div>

                    <div className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-green-700 shadow-md">
                        <span className="text-lg font-bold">{item.id}</span>
                    </div>

                    <div className="relative mt-8">
                        <h3 className="mb-4 text-xl font-bold tracking-wide text-white border-b border-white/30 pb-3">
                            {item.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-white/90 font-medium tracking-wide line-clamp-3">
                            {item.description}
                        </p>
                    </div>
                </div>
            ))}
        </main>
    );
}

export default PlantCareItems;