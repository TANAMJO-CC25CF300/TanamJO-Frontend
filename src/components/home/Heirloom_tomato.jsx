import React from "react";
import HarvestLanding from '../plantlis/HarvestLandingHome';
import TomatoGuide from '../plantlis/TomatoGuide';

function Heirloom_tomato() {
    const heirloomData = {
        title: "Heirloom Tomato Care Guide",
        description: "Heirloom tomatoes are open-pollinated varieties that have been passed down through generations, prized for their unique flavors, colors, and historical significance. These tomatoes are typically grown from seeds that have been saved and shared for at least 50 years, maintaining their original characteristics.",
        varieties: [
            {
                name: "Brandywine",
                description: "Large, pink beefsteak type with exceptional flavor",
                characteristics: "Indeterminate, 80-90 days to maturity"
            },
            {
                name: "Cherokee Purple",
                description: "Beautiful dusky pink-purple fruits with rich, sweet flavor",
                characteristics: "Indeterminate, 75-85 days to maturity"
            },
            {
                name: "Green Zebra",
                description: "Unique green and yellow striped fruits with tangy flavor",
                characteristics: "Indeterminate, 75-80 days to maturity"
            }
        ],
        growingConditions: [
            {
                title: "Sunlight",
                description: "Full sun (6-8 hours daily) is essential for optimal growth and fruit production"
            },
            {
                title: "Soil",
                description: "Rich, well-draining soil with pH 6.0-6.8. Add compost for better fertility"
            }
        ],
        plantingGuide: [
            {
                title: "Spacing",
                description: "Plant 24-36 inches apart to allow for good air circulation"
            },
            {
                title: "Support",
                description: "Use sturdy 6-8 foot stakes or cages for indeterminate varieties"
            }
        ],
        careTips: [
            {
                title: "Watering",
                description: "Keep soil consistently moist, water deeply 1-2 times per week"
            },
            {
                title: "Fertilizing",
                description: "Use balanced organic fertilizer every 2-3 weeks during growing season"
            },
            {
                title: "Pruning",
                description: "Remove suckers and maintain 1-2 main stems for better air circulation"
            }
        ],
        problems: [
            {
                title: "Common Pests",
                description: "Watch for hornworms, aphids, and whiteflies. Use organic controls when possible"
            },
            {
                title: "Diseases",
                description: "Prevent blight and other fungal diseases with proper spacing and air circulation"
            }
        ],
        harvesting: {
            when: "Harvest when fruits are fully colored and slightly soft to touch",
            how: "Gently twist or cut fruits from the vine, leaving the calyx attached",
            storage: "Store at room temperature for best flavor, use within 3-5 days"
        },
        propagation: {
            method: "Save seeds from fully ripe, disease-free fruits",
            process: "Ferment seeds in water for 2-3 days, then dry thoroughly before storing"
        },
        nutrition: {
            vitamins: "Rich in vitamins A, C, and K",
            minerals: "Good source of potassium and lycopene",
            benefits: "Contains antioxidants and beneficial plant compounds"
        },
        culinary: {
            uses: "Excellent for fresh eating, salads, and preserving",
            tips: "Best enjoyed at room temperature to appreciate full flavor"
        },
        companion: {
            good: ["Basil", "Marigolds", "Garlic"],
            avoid: ["Potatoes", "Corn", "Fennel"]
        },
        seasonal: {
            spring: "Start seeds indoors 6-8 weeks before last frost",
            summer: "Monitor for pests and diseases, maintain consistent watering",
            fall: "Harvest remaining fruits before first frost",
            winter: "Save seeds and plan for next season"
        },
        references: [
            {
                title: "Scientific References",
                iconBg: "bg-blue-100",
                iconColor: "text-blue-600",
                iconPath: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                bulletColor: "bg-blue-500",
                items: [
                    "University of California Agriculture and Natural Resources. (2023). 'Heirloom Tomato Varieties: Selection and Management'",
                    "Cornell University. (2022). 'Growing Heirloom Tomatoes: Best Practices'",
                    "Purdue University Extension. (2023). 'Heirloom Tomato Production Guide'"
                ]
            },
            {
                title: "Expert Sources",
                iconBg: "bg-green-100",
                iconColor: "text-green-600",
                iconPath: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
                bulletColor: "bg-green-500",
                items: [
                    "Seed Savers Exchange. (2023). 'Heirloom Tomato Growing Guide'",
                    "Organic Gardening Magazine. (2022). 'The Complete Guide to Heirloom Tomatoes'",
                    "American Horticultural Society. (2023). 'Heirloom Tomato Varieties and Care'"
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