import React from "react";
import HarvestLanding from '@components/landingPages/plantlis/HarvestLandingAbout';
import TomatoGuide from '@/components/landingPages/plantlis/TomatoGuide';

function PlantGuide() {
    const cherryData = {
        title: "Cherry Tomato: Smart Care & Disease Prevention Guide",
        description: "Welcome to our comprehensive Cherry Tomato (Solanum lycopersicum var. cerasiforme) care guide. This guide integrates traditional growing knowledge with cutting-edge disease detection technology. Learn to identify early signs of diseases using our AI-powered detection system, understand optimal growing conditions, and master essential care practices. Whether you're a beginner or experienced gardener, our smart monitoring features and expert care tips will help you achieve successful harvests of these delightful bite-sized tomatoes.",
        varieties: [
            {
                initial: "S",
                name: "Sweet 100",
                description: "Indeterminate variety with built-in disease resistance monitoring. Our AI system helps track plant health and detect early signs of common diseases. Perfect for beginners. Matures in 65 days."
            },
            {
                initial: "S",
                name: "Sun Gold",
                description: "Early-maturing (57 days) with smart disease detection features. Our AI monitoring system helps identify and prevent common tomato diseases. Exceptionally sweet and heat-tolerant."
            },
            {
                initial: "B",
                name: "Black Cherry",
                description: "Unique dark purple variety with advanced disease resistance monitoring. Our AI system helps track plant health and detect early signs of common diseases. Matures in 65-75 days."
            }
        ],
        growingConditions: [
            {
                title: "Smart Growing Environment",
                description: "Our AI-powered system recommends optimal conditions: 6-8 hours of direct sunlight daily, temperatures between 65-85°F (18-29°C). The system alerts you to environmental changes that could affect plant health.",
                iconBg: "bg-yellow-100",
                iconColor: "text-yellow-600",
                iconPath: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            },
            {
                title: "Smart Soil Management",
                description: "Our soil analysis system recommends optimal conditions: pH 6.0-6.8, well-draining soil with 40% garden soil, 30% compost, 20% perlite, and 10% vermiculite. Regular soil health monitoring helps prevent disease.",
                iconBg: "bg-amber-100",
                iconColor: "text-amber-600",
                iconPath: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            }
        ],
        plantingGuide: [
            {
                title: "When to Plant",
                description: "Start seeds indoors 6-8 weeks before the last frost date. Maintain soil temperature at 70-80°F (21-27°C) for germination. Transplant seedlings when they have 4-6 true leaves and are 6-8 inches tall.",
                iconBg: "bg-blue-100",
                iconColor: "text-blue-600",
                iconPath: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            },
            {
                title: "Spacing and Support",
                description: "Space plants 24-36 inches apart. Rows should be 36-48 inches apart. Install support structures (cages, stakes, or trellises) at planting time. For staking, use 6-8 foot stakes and tie plants every 8-12 inches as they grow.",
                iconBg: "bg-purple-100",
                iconColor: "text-purple-600",
                iconPath: "M4 6h16M4 12h16m-7 6h7"
            }
        ],
        careTips: [
            {
                title: "Watering",
                description: "Water deeply (1-2 inches) 2-3 times per week, more frequently in hot weather. Maintain consistent soil moisture at 70-80% capacity. Water at the base of plants to avoid wetting leaves.",
                iconBg: "bg-blue-100",
                iconColor: "text-blue-600",
                iconPath: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
            },
            {
                title: "Fertilizing",
                description: "Apply balanced fertilizer (10-10-10) at planting. Side-dress with nitrogen-rich fertilizer (21-0-0) when first fruits appear. Apply 1/4 cup of fertilizer per plant every 2-3 weeks.",
                iconBg: "bg-purple-100",
                iconColor: "text-purple-600",
                iconPath: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            },
            {
                title: "Pruning and Training",
                description: "Remove suckers (shoots between main stem and branches) when they're 2-3 inches long. Prune lower leaves up to 12 inches from ground to prevent soil-borne diseases. For indeterminate varieties, maintain 1-2 main stems.",
                iconBg: "bg-green-100",
                iconColor: "text-green-600",
                iconPath: "M4 6h16M4 12h16m-7 6h7"
            }
        ],
        problems: [
            {
                title: "AI-Powered Pest Detection",
                iconBg: "bg-orange-100",
                iconColor: "text-orange-600",
                iconPath: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
                items: [
                    "Aphids: Our AI system detects early infestations. Use insecticidal soap (2 tbsp per gallon) every 3-4 days.",
                    "Hornworms: AI-powered image recognition identifies damage. Apply Bacillus thuringiensis (BT) spray weekly.",
                    "Whiteflies: Smart traps with AI monitoring. Apply neem oil every 7-10 days.",
                    "Spider Mites: AI detects early webbing. Daily water spray and miticide if severe.",
                    "Cutworms: AI soil monitoring system. Use collars and diatomaceous earth.",
                    "Slugs: Smart moisture sensors detect activity. Apply beer traps and diatomaceous earth."
                ]
            },
            {
                title: "Disease Detection & Prevention",
                iconBg: "bg-red-100",
                iconColor: "text-red-600",
                iconPath: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                items: [
                    "Blossom end rot: AI soil analysis monitors calcium levels. Maintain pH 6.5 and add gypsum.",
                    "Early blight: AI image recognition detects early symptoms. Apply copper fungicide every 7-10 days.",
                    "Powdery mildew: Smart humidity monitoring. Improve air circulation and apply fungicide.",
                    "Fusarium wilt: AI soil testing system. Use resistant varieties and rotate crops.",
                    "Leaf spot: Early detection through AI image analysis. Apply fungicide at first sign.",
                    "Verticillium wilt: Smart soil monitoring. Use resistant varieties and maintain pH above 6.0."
                ]
            }
        ],
        harvesting: [
            {
                title: "Harvesting",
                iconBg: "bg-orange-100",
                iconColor: "text-orange-500",
                iconPath: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                bulletColor: "bg-orange-500",
                items: [
                    "Harvest when fruits are fully colored and slightly soft to touch",
                    "Pick in the morning when temperatures are cool",
                    "Use scissors or pruners to avoid damaging the plant",
                    "Expect first harvest 60-70 days after transplanting"
                ]
            },
            {
                title: "Storage",
                iconBg: "bg-blue-100",
                iconColor: "text-blue-500",
                iconPath: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
                bulletColor: "bg-blue-500",
                items: [
                    "Room temperature (65-70°F): 2-3 days",
                    "Refrigerated (45-50°F): Up to 1 week",
                    "Frozen (after blanching): Up to 6 months",
                    "Canned (10-11 PSI): 40 minutes processing"
                ]
            }
        ],
        propagation: [
            {
                title: "Seed Saving",
                iconBg: "bg-yellow-100",
                iconColor: "text-yellow-600",
                iconPath: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
                paragraphs: [
                    "Select fully ripe, disease-free fruits from your best plants. Extract seeds and ferment in water for 2-3 days. Rinse and dry seeds on paper towel for 1 week.",
                    "Store in airtight container in cool, dark place. Label with variety and date. Seeds remain viable for 4-6 years when stored properly. Test germination rate annually."
                ]
            },
            {
                title: "Propagation Methods",
                iconBg: "bg-purple-100",
                iconColor: "text-purple-600",
                iconPath: "M12 6v6m0 0v6m0-6h6m-6 0H6",
                paragraphs: [
                    "Start seeds indoors 6-8 weeks before last frost. Use sterile seed starting mix. Maintain 70-80°F soil temperature. Transplant when seedlings have 4-6 true leaves.",
                    "For cuttings, take 6-inch stem cuttings from healthy plants. Root in water or moist potting mix. Keep humidity high during rooting. Transplant when roots are 2-3 inches long."
                ]
            }
        ],
        nutrition: [
            {
                title: "Key Nutrients",
                iconBg: "bg-blue-100",
                iconColor: "text-blue-600",
                iconPath: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                bulletColor: "bg-blue-500",
                items: [
                    "Vitamin C: 21% of daily value per cup",
                    "Vitamin A: 15% of daily value per cup",
                    "Potassium: 8% of daily value per cup",
                    "Lycopene: Powerful antioxidant"
                ]
            },
            {
                title: "Health Benefits",
                iconBg: "bg-purple-100",
                iconColor: "text-purple-600",
                iconPath: "M12 6v6m0 0v6m0-6h6m-6 0H6",
                bulletColor: "bg-purple-500",
                items: [
                    "Supports heart health",
                    "Boosts immune system",
                    "Promotes skin health",
                    "Supports eye health"
                ]
            }
        ],
        culinary: [
            {
                title: "Fresh Uses",
                iconBg: "bg-orange-100",
                iconColor: "text-orange-600",
                iconPath: "M12 6v6m0 0v6m0-6h6m-6 0H6",
                bulletColor: "bg-orange-500",
                items: [
                    "Salads and Caprese",
                    "Snacking and appetizers",
                    "Garnishes and toppings"
                ]
            },
            {
                title: "Cooking Uses",
                iconBg: "bg-red-100",
                iconColor: "text-red-600",
                iconPath: "M12 6v6m0 0v6m0-6h6m-6 0H6",
                bulletColor: "bg-red-500",
                items: [
                    "Pasta sauces and pizzas",
                    "Soups and stews",
                    "Roasted and grilled dishes"
                ]
            }
        ],
        companion: [
            {
                title: "Good Companions",
                iconBg: "bg-green-100",
                iconColor: "text-green-600",
                iconPath: "M5 13l4 4L19 7",
                bulletColor: "bg-green-500",
                items: [
                    "Basil: Repels pests and improves flavor",
                    "Marigolds: Deters nematodes",
                    "Garlic: Repels spider mites",
                    "Nasturtiums: Attract beneficial insects"
                ]
            },
            {
                title: "Avoid Planting With",
                iconBg: "bg-red-100",
                iconColor: "text-red-600",
                iconPath: "M6 18L18 6M6 6l12 12",
                bulletColor: "bg-red-500",
                items: [
                    "Corn: Attracts same pests",
                    "Potatoes: Share diseases",
                    "Fennel: Inhibits growth",
                    "Walnuts: Release growth inhibitors"
                ]
            }
        ],
        seasonal: [
            {
                title: "Spring (March-May)",
                iconBg: "bg-blue-100",
                iconColor: "text-blue-600",
                iconPath: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z",
                bulletColor: "bg-blue-500",
                items: [
                    "Start seeds indoors",
                    "Prepare garden beds",
                    "Transplant seedlings",
                    "Install support structures"
                ]
            },
            {
                title: "Summer (June-August)",
                iconBg: "bg-orange-100",
                iconColor: "text-orange-600",
                iconPath: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z",
                bulletColor: "bg-orange-500",
                items: [
                    "Regular watering and fertilizing",
                    "Monitor for pests and diseases",
                    "Prune and train plants",
                    "Begin harvesting"
                ]
            }
        ],
        references: [
            {
                title: "Smart Farming Research",
                iconBg: "bg-blue-100",
                iconColor: "text-blue-600",
                iconPath: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
                bulletColor: "bg-blue-500",
                items: [
                    "AI in Agriculture: Disease Detection Systems. (2023). Journal of Smart Farming.",
                    "Machine Learning for Plant Disease Identification. (2023). Agricultural Technology Review.",
                    "Smart Monitoring Systems for Tomato Cultivation. (2023). Digital Agriculture Journal."
                ]
            },
            {
                title: "Expert Sources",
                iconBg: "bg-green-100",
                iconColor: "text-green-600",
                iconPath: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                bulletColor: "bg-green-500",
                items: [
                    "Smart Agriculture Association. (2023). AI-Powered Plant Care Guide.",
                    "Digital Farming Institute. (2023). Smart Tomato Cultivation Manual.",
                    "Agricultural Technology Forum. (2023). Disease Detection Systems."
                ]
            },
            {
                title: "Additional Resources",
                iconBg: "bg-purple-100",
                iconColor: "text-purple-600",
                iconPath: "M12 6v6m0 0v6m0-6h6m-6 0H6",
                bulletColor: "bg-purple-500",
                items: [
                    "USDA National Agricultural Library. (2023). Cherry Tomato Research Database.",
                    "Extension Master Gardener Program. (2023). Cherry Tomato Growing Resources.",
                    "International Society for Horticultural Science. (2023). Cherry Tomato Production Guidelines."
                ]
            }
        ]
    };

    return (
        <>        
            <div>
                <HarvestLanding title="Our History" breadcrumb={["Home", "Cherry Tomato"]}/>
            </div>
            <TomatoGuide {...cherryData} />
        </>
    );
}

export default PlantGuide;    