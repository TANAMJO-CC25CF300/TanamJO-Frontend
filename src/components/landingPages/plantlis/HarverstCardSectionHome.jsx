import React, { useState, useEffect } from "react";
import HarverstCardUtama from './HarverstCardUtama';
import card1 from '../../../assets/banner/card-1.png';
import card2 from '../../../assets/banner/card-2.png';
import card3 from '../../../assets/banner/card-3.png';
import card4 from '../../../assets/banner/card-4.png';
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
    }
];

function HarvestCardSectionHome() {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsDesktop(window.innerWidth >= 1280);
        };

        checkScreenSize();

        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
        
    }, []);

    const displayData = isDesktop ? harvestData : harvestData.slice(0, 4);

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
        </>
    );
}

export default HarvestCardSectionHome;