import React, { useState, useEffect } from "react";
import HarverstCardUtama from './HarverstCardUtama';

const harvestData = [
    {
        image: "src/assets/banner/card-1.png",
        title: "Fresh Tomatoes"
    },
    {
        image: "src/assets/banner/card-2.png",
        title: "Organic Lettuce"
    },
    {
        image: "src/assets/banner/card-3.png",
        title: "Green Spinach"
    },
    {
        image: "src/assets/banner/card-4.png",
        title: "Fresh Carrots"
    },
    {
        image: "src/assets/banner/card-5.png",
        title: "Red Bell Peppers"
    },
    {
        image: "src/assets/banner/card-6.png",
        title: "Fresh Cucumbers"
    },
    {
        image: "src/assets/banner/card-7.png",
        title: "Green Broccoli"
    },
    {
        image: "src/assets/banner/card-8.png",
        title: "Sweet Potatoes"
    }
];

function HarvestSection() {
    const [showAll, setShowAll] = useState(false);
    const [isLimitedView, setIsLimitedView] = useState(false);

    useEffect(() => {
        const checkScreen = () => {
            setIsLimitedView(window.innerWidth < 1280);
        };

        checkScreen();
        window.addEventListener('resize', checkScreen);
        return () => window.removeEventListener('resize', checkScreen);
    }, []);

    const isDesktop = !isLimitedView;
    const showButton = !isDesktop;

    let displayData = harvestData;
    if (!isDesktop && !showAll) {
        displayData = harvestData.slice(0, 4);
    }

    const handleShowMoreToggle = () => {
        setShowAll(!showAll);
    };

    return (

        <main>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 p-1">
                {displayData.map((item, index) => (
                    <div key={index} className={`relative group ${displayData.length > 4 && index >= 4 ? 'mt-2.5' : ''}`}>
                        <div className="absolute inset-0 bg-black opacity-32 z-10 rounded-3xl"></div>
                        <HarverstCardUtama image={item.image} title={item.title}/>
                    </div>
                ))}
            </div>

            {showButton && (
                <div className="flex justify-center mt-8">
                    <button
                        onClick={handleShowMoreToggle}
                        className="px-6 py-3 border border-gray-300 w-full rounded-full custome-deskription"
                    >
                        {showAll ? 'Show Less' : 'Show More'}
                    </button>
                </div>
            )}
                
        </main>
        
    );
}

export default HarvestSection;