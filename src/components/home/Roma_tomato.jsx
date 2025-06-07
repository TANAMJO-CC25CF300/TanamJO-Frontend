import React from "react";
import HarvestLanding from '../plantlis/HarvestLandingHome';
import TomatoGuide from '../plantlis/TomatoGuide';

function Roma_tomato() {
    const romaData = {
        title: "Roma Tomato Care Guide",
        description: "Roma tomatoes (Solanum lycopersicum var. plum) are a paste-type tomato known for their meaty texture, low moisture content, and excellent cooking qualities. These determinate plants typically grow 3-4 feet tall and produce clusters of 6-8 fruits each. Through our comprehensive care approach, we'll guide you through every aspect of growing Roma tomatoes, from seed selection to harvest. Our expert guidance covers optimal growing conditions, precise planting techniques, detailed care routines, and effective solutions for common challenges. Whether you're a beginner or experienced gardener, this guide will help you achieve bountiful harvests of delicious Roma tomatoes.",
        varieties: [
            {
                initial: "R",
                name: "Roma VF",
                description: "Classic variety with disease resistance. Produces 3-inch fruits. Perfect for sauces. Matures in 75 days."
            },
            {
                initial: "S",
                name: "San Marzano",
                description: "Italian heirloom variety. Elongated fruits with rich flavor. Excellent for canning. Matures in 80 days."
            },
            {
                initial: "A",
                name: "Amish Paste",
                description: "Heirloom variety with large, meaty fruits. Great for sauces and canning. Matures in 85 days."
            }
        ],
        growingConditions: [
            {
                title: "Sunlight Requirements",
                description: "Roma tomatoes require 6-8 hours of direct sunlight daily. Optimal growth occurs at temperatures between 65-85°F (18-29°C). Position plants in a south-facing location with protection from strong afternoon sun in hot climates.",
                iconBg: "bg-yellow-100",
                iconColor: "text-yellow-600",
                iconPath: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            },
            {
                title: "Soil Requirements",
                description: "Use well-draining soil with a pH between 6.0-6.8. Ideal soil composition: 40% garden soil, 30% compost, 20% perlite, and 10% vermiculite. Add 2-3 inches of organic matter before planting.",
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
                description: "Space plants 24-36 inches apart. Rows should be 36-48 inches apart. Install support structures (cages or stakes) at planting time. For staking, use 6-foot stakes and tie plants every 8-12 inches as they grow.",
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
                description: "Remove suckers (shoots between main stem and branches) when they're 2-3 inches long. Prune lower leaves up to 12 inches from ground to prevent soil-borne diseases. For determinate varieties, minimal pruning is needed.",
                iconBg: "bg-green-100",
                iconColor: "text-green-600",
                iconPath: "M4 6h16M4 12h16m-7 6h7"
            }
        ],
        problems: [
            {
                title: "Pests",
                iconBg: "bg-orange-100",
                iconColor: "text-orange-600",
                iconPath: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
                items: [
                    "Aphids: Spray with insecticidal soap (2 tbsp per gallon) every 3-4 days until controlled.",
                    "Hornworms: Hand-pick daily or apply Bacillus thuringiensis (BT) spray weekly.",
                    "Whiteflies: Use yellow sticky traps and apply neem oil every 7-10 days.",
                    "Spider Mites: Spray with water daily and apply miticide if severe.",
                    "Cutworms: Place collars around seedlings and apply diatomaceous earth.",
                    "Slugs: Apply beer traps and diatomaceous earth. Hand-pick at night."
                ]
            },
            {
                title: "Diseases",
                iconBg: "bg-red-100",
                iconColor: "text-red-600",
                iconPath: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                items: [
                    "Blossom end rot: Maintain soil pH at 6.5 and add calcium (1 cup gypsum per plant).",
                    "Early blight: Apply copper fungicide every 7-10 days and remove infected leaves.",
                    "Powdery mildew: Improve air circulation and apply sulfur-based fungicide.",
                    "Fusarium wilt: Use resistant varieties and rotate crops every 3 years.",
                    "Leaf spot: Apply fungicide at first sign and remove affected leaves.",
                    "Verticillium wilt: Use resistant varieties and maintain soil pH above 6.0."
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
                    "Harvest when fruits are fully colored and firm to touch",
                    "Pick in the morning when temperatures are cool",
                    "Use scissors or pruners to avoid damaging the plant",
                    "Expect first harvest 75-85 days after transplanting"
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
                    "Vitamin C: 25% of daily value per cup",
                    "Vitamin A: 18% of daily value per cup",
                    "Potassium: 9% of daily value per cup",
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
                    "Sauces and pastes",
                    "Canning and preserving",
                    "Drying and sun-drying"
                ]
            },
            {
                title: "Cooking Uses",
                iconBg: "bg-red-100",
                iconColor: "text-red-600",
                iconPath: "M12 6v6m0 0v6m0-6h6m-6 0H6",
                bulletColor: "bg-red-500",
                items: [
                    "Pasta sauces",
                    "Pizza sauces",
                    "Soups and stews"
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
                title: "Scientific References",
                iconBg: "bg-blue-100",
                iconColor: "text-blue-600",
                iconPath: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
                bulletColor: "bg-blue-500",
                items: [
                    "University of California Agriculture and Natural Resources. (2023). Growing Tomatoes in the Home Garden. Publication 8159.",
                    "Cornell University. (2023). Roma Tomato Production Guide. Department of Horticulture.",
                    "Purdue University Extension. (2023). Commercial Tomato Production. HO-26-W."
                ]
            },
            {
                title: "Expert Sources",
                iconBg: "bg-green-100",
                iconColor: "text-green-600",
                iconPath: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                bulletColor: "bg-green-500",
                items: [
                    "American Horticultural Society. (2023). Tomato Growing Guide.",
                    "National Gardening Association. (2023). Roma Tomato Care Guide.",
                    "Royal Horticultural Society. (2023). Growing Tomatoes: Roma Varieties."
                ]
            },
            {
                title: "Additional Resources",
                iconBg: "bg-purple-100",
                iconColor: "text-purple-600",
                iconPath: "M12 6v6m0 0v6m0-6h6m-6 0H6",
                bulletColor: "bg-purple-500",
                items: [
                    "USDA Plant Hardiness Zone Map. (2023). Agricultural Research Service.",
                    "Extension Master Gardener Program. (2023). Tomato Growing Resources.",
                    "International Society for Horticultural Science. (2023). Tomato Production Guidelines."
                ]
            }
        ]
    };

    return (
        <main>
            <div>
                <HarvestLanding title="Our History" breadcrumb={["Home", "Roma Tomato"]}/>
            </div>
            <TomatoGuide {...romaData} />
        </main>
    );
}

export default Roma_tomato;