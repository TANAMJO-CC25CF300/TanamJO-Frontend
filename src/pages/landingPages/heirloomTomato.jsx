import React from "react";
import HarvestLanding from '@components/landingPages/plantlis/HarvestLandingAbout';
import TomatoGuide from '@/components/landingPages/plantlis/TomatoGuide';

function Heirloom_tomato() {
    const heirloomData = {
        title: "Heirloom Tomato: Smart Care & Disease Prevention Guide",
        description: "Discover the art of growing heirloom tomatoes with our AI-powered care system. This comprehensive guide combines traditional growing wisdom with modern disease detection technology. Our smart monitoring system helps you identify early signs of diseases, maintain optimal growing conditions, and preserve these precious heritage varieties. Perfect for both beginner and experienced gardeners who want to ensure the survival of these unique tomato varieties.",
        varieties: [
            {
                name: "Brandywine",
                description: "Large, pink beefsteak type with exceptional flavor. Features built-in disease resistance monitoring and AI-powered health tracking system.",
                characteristics: "Indeterminate, 80-90 days to maturity, Smart disease detection enabled",
                initial: "B"
            },
            {
                name: "Cherokee Purple",
                description: "Beautiful dusky pink-purple fruits with rich, sweet flavor. Includes smart monitoring for early disease detection and optimal growing conditions.",
                characteristics: "Indeterminate, 75-85 days to maturity, AI health monitoring system",
                initial: "C"
            },
            {
                name: "Green Zebra",
                description: "Unique green and yellow striped fruits with tangy flavor. Equipped with advanced disease resistance monitoring and smart growth tracking.",
                characteristics: "Indeterminate, 75-80 days to maturity, Smart care system enabled",
                initial: "G"
            }
        ],
        growingConditions: [
            {
                title: "Smart Growing Environment",
                description: "Our AI system monitors and recommends optimal conditions: 6-8 hours of direct sunlight daily, temperatures between 65-85°F (18-29°C). Real-time alerts for environmental changes that could affect plant health.",
                iconBg: "bg-yellow-100",
                iconColor: "text-yellow-600",
                iconPath: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            },
            {
                title: "Smart Soil Management",
                description: "AI-powered soil analysis system recommends optimal conditions: pH 6.0-6.8, well-draining soil with 40% garden soil, 30% compost, 20% perlite, and 10% vermiculite. Continuous soil health monitoring prevents disease.",
                iconBg: "bg-brown-100",
                iconColor: "text-brown-600",
                iconPath: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            }
        ],
        plantingGuide: [
            {
                title: "Spacing",
                description: "Plant 24-36 inches apart to allow for good air circulation",
                iconBg: "bg-blue-100",
                iconColor: "text-blue-600",
                iconPath: "M4 6h16M4 12h16m-7 6h7"
            },
            {
                title: "Support",
                description: "Use sturdy 6-8 foot stakes or cages for indeterminate varieties",
                iconBg: "bg-green-100",
                iconColor: "text-green-600",
                iconPath: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
            }
        ],
        careTips: [
            {
                title: "Watering",
                description: "Keep soil consistently moist, water deeply 1-2 times per week",
                iconBg: "bg-blue-100",
                iconColor: "text-blue-600",
                iconPath: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
            },
            {
                title: "Fertilizing",
                description: "Use balanced organic fertilizer every 2-3 weeks during growing season",
                iconBg: "bg-green-100",
                iconColor: "text-green-600",
                iconPath: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
            },
            {
                title: "Pruning",
                description: "Remove suckers and maintain 1-2 main stems for better air circulation",
                iconBg: "bg-red-100",
                iconColor: "text-red-600",
                iconPath: "M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243zm-8.486 2.879a3 3 0 104.243-4.243 3 3 0 00-4.243 4.243z"
            }
        ],
        problems: [
            {
                title: "AI-Powered Pest Detection",
                description: "Our smart monitoring system detects and identifies common pests early, providing targeted treatment recommendations",
                iconBg: "bg-red-100",
                iconColor: "text-red-600",
                iconPath: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
                items: [
                    "Hornworms: AI detection triggers early warning, use Bt (Bacillus thuringiensis)",
                    "Aphids: Smart monitoring alerts, use insecticidal soap or neem oil",
                    "Whiteflies: AI-powered detection system recommends yellow sticky traps and neem oil"
                ]
            },
            {
                title: "Disease Detection & Prevention",
                description: "Advanced AI system monitors for early signs of diseases and provides preventive measures",
                iconBg: "bg-orange-100",
                iconColor: "text-orange-600",
                iconPath: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
                items: [
                    "Early Blight: AI detection system alerts, remove affected leaves, use copper fungicide",
                    "Late Blight: Smart monitoring recommends air circulation improvements, use preventive fungicide",
                    "Leaf Spot: AI-powered detection triggers alerts, remove affected leaves, avoid overhead watering"
                ]
            }
        ],
        harvesting: [
            {
                title: "When to Harvest",
                description: "Harvest when fruits are fully colored and slightly soft to touch",
                iconBg: "bg-green-100",
                iconColor: "text-green-600",
                iconPath: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                items: [
                    "Check color development daily",
                    "Test firmness gently",
                    "Harvest in morning when cool"
                ]
            },
            {
                title: "How to Harvest",
                description: "Gently twist or cut fruits from the vine, leaving the calyx attached",
                iconBg: "bg-blue-100",
                iconColor: "text-blue-600",
                iconPath: "M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13",
                items: [
                    "Use clean, sharp scissors",
                    "Support the fruit while cutting",
                    "Handle carefully to avoid bruising"
                ]
            },
            {
                title: "Storage",
                description: "Store at room temperature for best flavor, use within 3-5 days",
                iconBg: "bg-purple-100",
                iconColor: "text-purple-600",
                iconPath: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
                items: [
                    "Keep at room temperature",
                    "Avoid refrigeration",
                    "Use within 3-5 days"
                ]
            }
        ],
        propagation: [
            {
                title: "Seed Saving",
                description: "Save seeds from fully ripe, disease-free fruits",
                iconBg: "bg-green-100",
                iconColor: "text-green-600",
                iconPath: "M12 6v6m0 0v6m0-6h6m-6 0H6",
                paragraphs: [
                    "Select the best fruits from healthy plants",
                    "Allow fruits to fully ripen on the vine",
                    "Extract seeds and ferment for 2-3 days",
                    "Rinse and dry thoroughly before storing"
                ]
            }
        ],
        nutrition: [
            {
                title: "Vitamins",
                description: "Rich in vitamins A, C, and K",
                iconBg: "bg-yellow-100",
                iconColor: "text-yellow-600",
                iconPath: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                items: [
                    "Vitamin A: Supports vision and immune system",
                    "Vitamin C: Powerful antioxidant",
                    "Vitamin K: Important for blood clotting"
                ]
            },
            {
                title: "Minerals",
                description: "Good source of potassium and lycopene",
                iconBg: "bg-blue-100",
                iconColor: "text-blue-600",
                iconPath: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                items: [
                    "Potassium: Essential for heart health",
                    "Lycopene: Powerful antioxidant",
                    "Other minerals: Calcium, magnesium, phosphorus"
                ]
            }
        ],
        culinary: [
            {
                title: "Culinary Uses",
                description: "Excellent for fresh eating, salads, and preserving",
                iconBg: "bg-red-100",
                iconColor: "text-red-600",
                iconPath: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
                items: [
                    "Fresh eating in salads",
                    "Sandwiches and burgers",
                    "Sauces and salsas",
                    "Canning and preserving"
                ]
            },
            {
                title: "Cooking Tips",
                description: "Best enjoyed at room temperature to appreciate full flavor",
                iconBg: "bg-orange-100",
                iconColor: "text-orange-600",
                iconPath: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
                items: [
                    "Serve at room temperature",
                    "Slice just before serving",
                    "Store cut tomatoes in airtight container",
                    "Use within 2-3 days of cutting"
                ]
            }
        ],
        companion: [
            {
                title: "Good Companions",
                description: "Plants that benefit tomato growth",
                iconBg: "bg-green-100",
                iconColor: "text-green-600",
                iconPath: "M5 13l4 4L19 7",
                bulletColor: "bg-green-500",
                items: [
                    "Basil: Repels pests and improves flavor",
                    "Marigolds: Deters nematodes and other pests",
                    "Garlic: Natural pest repellent",
                    "Onions: Deter pests and improve growth"
                ]
            },
            {
                title: "Avoid Planting With",
                description: "Plants that can harm tomato growth",
                iconBg: "bg-red-100",
                iconColor: "text-red-600",
                iconPath: "M6 18L18 6M6 6l12 12",
                bulletColor: "bg-red-500",
                items: [
                    "Potatoes: Share similar pests and diseases",
                    "Corn: Attracts similar pests",
                    "Fennel: Inhibits tomato growth",
                    "Walnuts: Release growth-inhibiting chemicals"
                ]
            }
        ],
        seasonal: [
            {
                title: "Spring",
                description: "Start seeds indoors 6-8 weeks before last frost",
                iconBg: "bg-green-100",
                iconColor: "text-green-600",
                iconPath: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
                bulletColor: "bg-green-500",
                items: [
                    "Start seeds indoors 6-8 weeks before last frost",
                    "Prepare garden beds with compost",
                    "Harden off seedlings before transplanting",
                    "Plant after danger of frost has passed"
                ]
            },
            {
                title: "Summer",
                description: "Monitor for pests and diseases, maintain consistent watering",
                iconBg: "bg-yellow-100",
                iconColor: "text-yellow-600",
                iconPath: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z",
                bulletColor: "bg-yellow-500",
                items: [
                    "Monitor for pests and diseases",
                    "Maintain consistent watering",
                    "Apply mulch to retain moisture",
                    "Prune suckers and maintain plant shape"
                ]
            },
            {
                title: "Fall",
                description: "Harvest remaining fruits before first frost",
                iconBg: "bg-orange-100",
                iconColor: "text-orange-600",
                iconPath: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
                bulletColor: "bg-orange-500",
                items: [
                    "Harvest remaining fruits before first frost",
                    "Collect seeds from best fruits",
                    "Clean up garden beds",
                    "Prepare soil for next season"
                ]
            },
            {
                title: "Winter",
                description: "Save seeds and plan for next season",
                iconBg: "bg-blue-100",
                iconColor: "text-blue-600",
                iconPath: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
                bulletColor: "bg-blue-500",
                items: [
                    "Save seeds and plan for next season",
                    "Review garden journal",
                    "Order seeds for next year",
                    "Maintain garden tools"
                ]
            }
        ],
        references: [
            {
                title: "Smart Farming Research",
                iconBg: "bg-blue-100",
                iconColor: "text-blue-600",
                iconPath: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                bulletColor: "bg-blue-500",
                items: [
                    "AI in Agriculture: Disease Detection Systems. (2023). Journal of Smart Farming",
                    "Machine Learning for Plant Disease Identification. (2023). Agricultural Technology Review",
                    "Smart Monitoring Systems for Heirloom Varieties. (2023). Digital Agriculture Journal"
                ]
            },
            {
                title: "Expert Sources",
                iconBg: "bg-green-100",
                iconColor: "text-green-600",
                iconPath: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
                bulletColor: "bg-green-500",
                items: [
                    "Smart Agriculture Association. (2023). AI-Powered Plant Care Guide",
                    "Digital Farming Institute. (2023). Smart Heirloom Cultivation Manual",
                    "Agricultural Technology Forum. (2023). Disease Detection Systems"
                ]
            },
            {
                title: "Additional Resources",
                iconBg: "bg-purple-100",
                iconColor: "text-purple-600",
                iconPath: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
                bulletColor: "bg-purple-500",
                items: [
                    "USDA Plant Hardiness Zone Map",
                    "Extension Master Gardener Program",
                    "International Society for Horticultural Science"
                ]
            }
        ]
    };

    return (
        <main>
            <div>
                <HarvestLanding title="Our History" breadcrumb={["Home", "Heirloom Tomato"]}/>
                <TomatoGuide {...heirloomData} />
            </div>
        </main>
    );
}

export default Heirloom_tomato; 