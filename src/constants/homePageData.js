import blog1Image from '@/assets/Blog/Blog-1.webp';
import blog2Image from '@/assets/Blog/Blog-2.webp';
import blog3Image from '@/assets/Blog/Blog-3.webp';
import card1Image from '@/assets/Banner/card-1.png';
import card2Image from '@/assets/Banner/card-2.png';
import card3Image from '@/assets/Banner/card-3.png';

export const cardData = [
    {
        id: 1,
        title: "Organic Fertilizer Guide",
        description: "Learn about natural fertilizers and their benefits for tomato plants. Get expert tips on composting and soil enrichment.",
        category: "ORGANIC",
        categoryColor: "bg-emerald-500",
        image: card1Image
    },
    {
        id: 2,
        title: "Seasonal Fertilizing Tips",
        description: "Discover the best fertilizing practices for each growing season. Maximize your tomato yield with proper timing and techniques.",
        category: "SEASONAL",
        categoryColor: "bg-amber-500",
        image: card2Image
    },
    {
        id: 3,
        title: "Nutrient Management",
        description: "Master the art of nutrient balance and learn how to address common deficiencies in tomato plants through proper fertilization.",
        category: "NUTRIENTS",
        categoryColor: "bg-blue-500",
        image: card3Image
    }
];

export const insightCardData = [
    {
        id: 1,
        title: "Disease Detection",
        description: "Instantly identify common tomato diseases and get treatment recommendations using our AI-powered detection system."
    },
    {
        id: 2,
        title: "Growth Tracking",
        description: "Monitor your tomato plant's growth stages and receive timely care instructions for optimal development."
    },
    {
        id: 3,
        title: "Expert Consultation",
        description: "Connect with experienced horticulturists for personalized advice on your tomato growing challenges."
    },
    {
        id: 4,
        title: "Pest Control Guide",
        description: "Learn effective and eco-friendly methods to protect your tomato plants from common pests and insects."
    },
    {
        id: 5,
        title: "Watering Schedule",
        description: "Get personalized watering recommendations based on your climate, soil type, and tomato variety."
    },
    {
        id: 6,
        title: "Harvest Timer",
        description: "Know exactly when to harvest your tomatoes with our smart ripeness prediction system."
    }
];

export const blogCardData = [
    {
        id: 1,
        title: "Maximizing Tomato Yields in Small Gardens",
        category: "GROWING TIPS",
        categoryColor: "bg-emerald-500",
        date: "11 Juni 2025",
        author: "TamanJO",
        image: blog1Image,
        description: "Learn expert techniques for growing abundant tomatoes in limited space. Perfect for urban gardeners!",
        readTime: "5 min read",
        authorInitials: "TJ",
        fullContent: {
            intro: "Urban gardening has revolutionized how we think about growing tomatoes. With limited space becoming increasingly common in cities, mastering the art of maximizing tomato yields in small gardens has become essential.",
            sections: [
                {
                    title: "Smart Space Utilization",
                    content: "Vertical gardening techniques and container optimization are key to maximizing your small garden's potential. Using trellises, hanging planters, and tiered garden beds can triple your growing space without expanding your garden's footprint."
                },
                {
                    title: "Intensive Planting Methods",
                    content: "Learn about companion planting and proper spacing techniques that allow you to grow more tomatoes in less space while maintaining plant health and productivity."
                }
            ],
            conclusion: "With these space-saving techniques and careful planning, even the smallest garden can produce an abundant tomato harvest. The key is to think vertically and maximize every square inch of growing space."
        }
    },
    {
        id: 2,
        title: "Sustainable Pest Management for Tomatoes",
        category: "PLANT CARE",
        categoryColor: "bg-blue-500",
        date: "11 Juni 2025",
        author: "TamanJO",
        image: blog2Image,
        description: "Discover eco-friendly methods to protect your tomatoes from common pests and diseases.",
        readTime: "5 min read",
        authorInitials: "TJ",
        fullContent: {
            intro: "Protecting your tomato plants from pests doesn't have to mean using harmful chemicals. Sustainable pest management combines natural predators, companion planting, and organic deterrents to keep your plants healthy.",
            sections: [
                {
                    title: "Natural Pest Control Methods",
                    content: "Explore the world of beneficial insects and how to attract them to your garden. Learn about companion plants that naturally repel common tomato pests."
                },
                {
                    title: "Organic Solutions",
                    content: "Discover how to make and use organic pest deterrents from common household items and garden plants. These solutions are both effective and environmentally friendly."
                }
            ],
            conclusion: "By implementing these sustainable pest management strategies, you can protect your tomato plants while maintaining a healthy garden ecosystem that supports beneficial insects and natural pest control."
        }
    },
    {
        id: 3,
        title: "Advanced Hydroponic Tomato Growing Guide",
        category: "HYDROPONICS",
        categoryColor: "bg-purple-500",
        date: "11 Juni 2025",
        author: "TamanJO",
        image: blog3Image,
        description: "Master the art of growing tomatoes without soil using modern hydroponic techniques.",
        readTime: "5 min read",
        authorInitials: "TJ",
        fullContent: {
            intro: "Hydroponic growing systems have revolutionized tomato cultivation, offering precise control over nutrients and growing conditions. This guide explores advanced techniques for successful soilless tomato production.",
            sections: [
                {
                    title: "Setting Up Your Hydroponic System",
                    content: "Learn about different hydroponic systems suitable for tomatoes, from deep water culture to nutrient film technique. Understand the essential components and how to maintain optimal growing conditions."
                },
                {
                    title: "Nutrient Management",
                    content: "Master the art of balancing nutrients in your hydroponic system. Learn how to monitor and adjust pH levels, EC values, and essential mineral concentrations for optimal tomato growth."
                }
            ],
            conclusion: "Hydroponic tomato growing offers unprecedented control over your plants' environment. With proper system management and attention to nutrient balance, you can achieve exceptional yields and fruit quality."
        }
    }
]; 