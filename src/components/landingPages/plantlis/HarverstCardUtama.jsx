import React from "react";
import { useNavigate } from 'react-router-dom';

function HarverstCardUtama({ image, title }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/plantguide/artikelcardutama', { 
            state: { 
                cardData: {
                    image,
                    title,
                    details: getCardDetails(title)
                }
            }
        });
    };

    const handleImageError = (e) => {
        console.error(`Error loading image for ${title}`);
        e.target.style.display = 'none';
    };

    const getCardDetails = (cardTitle) => {
        switch(cardTitle) {
            case "Fresh Tomatoes":
                return {
                    age: "Seasonal (±70 days)",
                    plantType: "Climbing / Semi-erect",
                    leafType: "Light green with fine hairs",
                    description: "Tomatoes (Solanum lycopersicum) are versatile horticultural plants that produce bright red fruits when ripe. This plant grows quickly, requires full sunlight and loose soil with good drainage. Tomato fruits are rich in vitamin C, lycopene, potassium, and antioxidants, making them excellent for both fresh consumption and processing. They are a staple in many cuisines worldwide and can be grown in various climates with proper care. The plant typically reaches 3-6 feet in height and produces clusters of yellow flowers that develop into fruits.",
                    careTips: [
                        "Ensure plants receive full sunlight for at least 6-8 hours per day. Morning sun is particularly beneficial for optimal growth and fruit development. In hot climates, provide afternoon shade to prevent sunscald.",
                        "Use loose soil rich in organic matter with a pH between 6.0-6.8. Add compost or well-rotted manure before planting. Consider using raised beds for better drainage and soil temperature control.",
                        "Water regularly (2-3 times per week), ensuring the soil is moist but not waterlogged. Water at the base of the plant to avoid wetting the leaves. Use drip irrigation for consistent moisture.",
                        "Provide sturdy stakes or cages (at least 5-6 feet tall) to support the growing vines. For indeterminate varieties, use a trellis system to maximize space and improve air circulation.",
                        "Monitor regularly for common pests and diseases. Use organic pest control methods like neem oil or insecticidal soap. Practice crop rotation to prevent soil-borne diseases.",
                        "Prune suckers (side shoots) regularly to improve air circulation and direct energy to fruit production. Remove yellow or diseased leaves promptly to prevent disease spread.",
                        "Apply balanced fertilizer (10-10-10 or 5-10-10) every 2-3 weeks during the growing season. Reduce nitrogen as fruits begin to form to prevent excessive foliage growth."
                    ]
                };

            case "Organic Lettuce":
                return {
                    age: "30-45 days",
                    plantType: "Leafy Vegetable",
                    leafType: "Broad, crisp leaves",
                    description: "Lettuce is a cool-season crop that grows best in spring and fall. It's known for its crisp, refreshing leaves and is a staple in salads. Lettuce prefers loose, fertile soil and consistent moisture. It is low in calories but high in vitamins A and K, making it a healthy addition to any diet.",
                    careTips: [
                        "Plant in cool weather for best results. Lettuce bolts quickly in hot weather.",
                        "Keep soil consistently moist but not soggy. Mulch can help retain moisture.",
                        "Provide partial shade in hot climates to prevent bolting.",
                        "Harvest outer leaves as needed or cut the whole head at the base when mature.",
                        "Fertilize lightly with a balanced fertilizer during the growing season."
                    ]
                };

            case "Green Spinach":
                return {
                    age: "35-45 days",
                    plantType: "Leafy Vegetable",
                    leafType: "Smooth or savoyed, dark green leaves",
                    description: "Spinach is a fast-growing, cool-season crop valued for its tender, nutritious leaves. It is rich in iron, calcium, and vitamins A, C, and K. Spinach grows best in moist, nitrogen-rich soil and can be harvested multiple times by picking outer leaves.",
                    careTips: [
                        "Sow seeds early in spring or late summer for fall harvest.",
                        "Keep soil moist and fertilize with nitrogen-rich fertilizer.",
                        "Harvest leaves when they are young and tender for best flavor.",
                        "Provide partial shade in warm climates to prevent bolting.",
                        "Watch for pests like leaf miners and aphids."
                    ]
                };

            case "Fresh Carrots":
                return {
                    age: "70-80 days",
                    plantType: "Root Vegetable",
                    leafType: "Finely divided, feathery leaves",
                    description: "Carrots are root vegetables known for their sweet, crisp orange roots. They are high in beta-carotene, fiber, and vitamin K. Carrots grow best in loose, sandy soil and require consistent moisture for proper root development.",
                    careTips: [
                        "Sow seeds directly in the garden in early spring or late summer.",
                        "Thin seedlings to allow enough space for roots to develop.",
                        "Keep soil evenly moist but not waterlogged.",
                        "Mulch to retain moisture and suppress weeds.",
                        "Harvest when roots are the desired size and color."
                    ]
                };

            case "Red Bell Peppers":
                return {
                    age: "60-90 days",
                    plantType: "Fruit Vegetable",
                    leafType: "Broad, dark green leaves",
                    description: "Red bell peppers are sweet, crunchy fruits that start green and ripen to red. They are rich in vitamin C, antioxidants, and fiber. Peppers prefer warm temperatures and well-drained, fertile soil.",
                    careTips: [
                        "Start seeds indoors 8-10 weeks before the last frost date.",
                        "Transplant outdoors after danger of frost has passed and soil is warm.",
                        "Water regularly, keeping soil consistently moist but not soggy.",
                        "Fertilize with a balanced fertilizer during flowering and fruiting.",
                        "Harvest when peppers are fully red and firm."
                    ]
                };

            case "Fresh Cucumbers":
                return {
                    age: "50-70 days",
                    plantType: "Vining Vegetable",
                    leafType: "Rough, lobed leaves",
                    description: "Cucumbers are fast-growing, vining plants that produce crisp, refreshing fruits. They are high in water content and low in calories. Cucumbers thrive in warm weather and require plenty of sunlight and water.",
                    careTips: [
                        "Plant after the last frost date when soil is warm.",
                        "Provide a trellis or support for vining varieties.",
                        "Water deeply and regularly, especially during fruiting.",
                        "Mulch to retain soil moisture and suppress weeds.",
                        "Harvest fruits when they are firm and green, before seeds harden."
                    ]
                };

            case "Green Broccoli":
                return {
                    age: "60-100 days",
                    plantType: "Cruciferous Vegetable",
                    leafType: "Large, dark green leaves",
                    description: "Broccoli is a cool-season crop known for its edible green flower heads. It is rich in vitamins C and K, fiber, and antioxidants. Broccoli thrives in fertile, well-drained soil and requires consistent moisture for optimal growth.",
                    careTips: [
                        "Plant in early spring or fall for best results.",
                        "Keep soil consistently moist but not waterlogged.",
                        "Fertilize with a balanced fertilizer during the growing season.",
                        "Protect from pests like cabbage worms and aphids.",
                        "Harvest heads when they are firm and tight, before flowers open."
                    ]
                };

            case "Sweet Potatoes":
                return {
                    age: "90-120 days",
                    plantType: "Root Vegetable",
                    leafType: "Heart-shaped, green leaves",
                    description: "Sweet potatoes are warm-season root vegetables prized for their sweet, starchy tubers. They are high in fiber, vitamins A and C, and potassium. Sweet potatoes grow best in loose, well-drained soil and require a long frost-free growing season.",
                    careTips: [
                        "Plant slips after the soil has warmed and all danger of frost has passed.",
                        "Provide plenty of space for vines to spread.",
                        "Water regularly, especially during root development.",
                        "Fertilize with a low-nitrogen fertilizer to encourage tuber growth.",
                        "Harvest when leaves begin to yellow and before the first frost."
                    ]
                };
                
            default:
                return {
                    age: "Varies",
                    plantType: "General",
                    leafType: "Standard",
                    description: "A healthy and nutritious plant that requires proper care and attention.",
                    careTips: [
                        "Provide adequate sunlight",
                        "Maintain proper watering schedule",
                        "Use appropriate soil type",
                        "Monitor for pests and diseases"
                    ]
                };
        }
    };

    return (
        
        <>        
            <div onClick={handleClick} className="cursor-pointer">
                <div className="relative flex flex-col justify-end items-center h-[240px] sm:h-[260px] md:h-[300px] min-h-[220px] sm:min-h-[240px] md:min-h-[280px] w-full">
                    <div className="absolute inset-0 z-10">
                        {image && (
                            <>
                                <img 
                                    src={image} 
                                    alt={title} 
                                    className="w-full h-full object-cover rounded-3xl" 
                                    onError={handleImageError}
                                />
                                <div className="absolute inset-0 bg-black opacity-40 rounded-3xl"></div>
                            </>
                        )}
                    </div>

                    <div className="absolute -top-1 right-[-0.2rem] w-11 h-11 sm:w-12 sm:h-12 md:w-12 md:h-12 bg-white rounded-bl-3xl rounded-tr-3xl z-20 flex items-center justify-center">
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
            </div>
        </>
        
    );
}

export default HarverstCardUtama;
