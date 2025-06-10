import React, { useState, useEffect } from "react";
import HarverstCardUtama from './HarverstCardUtama';
import card1 from '../../../assets/banner/card-1.png';
import card2 from '../../../assets/banner/card-2.png';
import card3 from '../../../assets/banner/card-3.png';
import card4 from '../../../assets/banner/card-4.png';
import card5 from '../../../assets/banner/card-5.png';
import card6 from '../../../assets/banner/card-6.png';
import card7 from '../../../assets/banner/card-7.png';
import card8 from '../../../assets/banner/card-8.png';

const harvestData = [
    {
        image: card1,
        title: "Cherry Tomatoes"
    },
    {
        image: card2,
        title: "Beefsteak Tomatoes"
    },
    {
        image: card3,
        title: "Roma Tomatoes"
    },
    {
        image: card4,
        title: "Heirloom Tomatoes"
    },
    {
        image: card5,
        title: "Green Tomatoes"
    },
    {
        image: card6,
        title: "Yellow Tomatoes"
    },
    {
        image: card7,
        title: "Campari Tomatoes"
    },
    {
        image: card8,
        title: "Grape Tomatoes"
    }
];

function HarvestCardSection() {
    const [showAll, setShowAll] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsDesktop(window.innerWidth >= 1280);
        };

        checkScreenSize();

        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
        
    }, []);

    let displayData = isDesktop ? harvestData : (showAll ? harvestData : harvestData.slice(0, 4));

    const handleShowMoreToggle = () => {
        setShowAll(!showAll);
    };

    return (
        <>        
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 p-1">
                {displayData.map((item, index) => (
                    <div key={index} className={`relative group ${displayData.length > 4 && index >= 4 ? 'mt-2.5' : ''}`}>
                        <div className="absolute inset-0 bg-black opacity-32 z-10 rounded-3xl"></div>
                        <HarverstCardUtama image={item.image} title={item.title}/>
                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-8 xl:hidden">
                <button onClick={handleShowMoreToggle} className="px-6 py-3 border border-gray-300 w-full rounded-full custome-deskription">
                    {showAll ? 'Show Less' : 'Show More'}
                </button>
            </div>                
        </>
    );
}

export default HarvestCardSection;