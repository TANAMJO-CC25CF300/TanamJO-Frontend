import React from "react";
import tomatoImage from "../assets/tomatoCard.png"
import arrowIcon from "../assets/ArrowUpRightGreenBg.png"

const Card1 = ({ 
    title = "Harvest Concept", 
    image = tomatoImage,
    cardWidth = "[180px] sm:w-[220px]",
    imageHeight = "h-[220px]",
    textSize = "text-sm sm:text-base"
}) => {
    return (
        <div className={`relative rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer ${cardWidth}`}>
            <img src={image} alt={title} className={`w-full ${imageHeight} object-cover`} />
            <div className="absolute top-0 right-0 bg-white rounded-bl-2xl p-1 z-20">
                <img src={arrowIcon} alt="arrow icon" className="w-6 h-6" />
            </div>
            <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white font-semibold whitespace-nowrap ${textSize}`}>
                {title}
            </div>
        </div>
    );
};

export default Card1