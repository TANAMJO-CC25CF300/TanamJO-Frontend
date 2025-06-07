import React from 'react';
import PlantCareItems from './PlantCareItems';

const plantCareItemsData = [
    {
        id: 1,
        title: "Soil Preparation",
        description: "Learn the best soil mix and preparation techniques for optimal tomato growth."
    },
    {
        id: 2,
        title: "Watering Guide",
        description: "Master the art of proper watering schedules and techniques for healthy."
    },
    {
        id: 3,
        title: "Sunlight Needs",
        description: "Understand the ideal sunlight requirements for different tomato varieties."
    },
    {
        id: 4,
        title: "Pruning Tips",
        description: "Essential pruning techniques to maximize your tomato plant's productivity."
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
