import React from 'react';
import PlantCareItems from './PlantCareItems';

const plantCareItemsData = [
    {
        id: 1,
        title: "Smart Check",
        description: "Monitor plant conditions automatically using sensor technology and AI."
    },
    {
        id: 2,
        title: "Daily Tips",
        description: "Get daily plant care recommendations tailored to your plant's specific needs."
    },
    {
        id: 3,
        title: "Eco-Friendly",
        description: "Promote sustainable farming practices with minimal negative environmental impact."
    },
    {
        id: 4,
        title: "Quick Response",
        description: "Detect disease symptoms or nutrient deficiencies early for timely treatment."
    }
];



function PlantCareItemSection() {
    return (
        <div className="w-full lg:w-[48%] flex-shrink-0 mt-8 lg:mt-0">
            <PlantCareItems items={plantCareItemsData} />
        </div>
    );
}

export default PlantCareItemSection;
