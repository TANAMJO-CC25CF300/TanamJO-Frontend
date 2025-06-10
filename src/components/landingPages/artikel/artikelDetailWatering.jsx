import React from "react";
import ArtikelDetailTemplate from '@components/landingPages/artikel/ArtikelDetailTemplate';
import bannerImage from '@/assets/Banner/card-7.png';

function ArtikelDetailWatering() {
    const articleData = {
        title: "Smart Watering System",
        date: "March 12, 2024",
        readTime: "5 min read",
        category: "Gardening",
        tags: "Tips & Tricks",
        description: "Discover our intelligent watering system that adapts to your plants' needs. Using soil moisture sensors and weather data, it automatically adjusts watering schedules to ensure optimal hydration. The system prevents overwatering and underwatering, promoting healthy root development and reducing water waste. Get real-time notifications and control your garden's irrigation from anywhere through our user-friendly app.",
        quote: "Smart watering systems revolutionize garden maintenance by combining technology with plant care expertise. These systems use sensors and weather data to provide precise watering schedules.",
        mainContent: [
            "The smart watering system uses advanced sensors to monitor soil moisture levels in real-time, ensuring your plants receive the perfect amount of water at the right time.",
            "By integrating weather forecasts and plant-specific requirements, the system automatically adjusts watering schedules to prevent both overwatering and underwatering, promoting optimal plant health."
        ],
        features: {
            title: "Key Features of Smart Watering Systems",
            description: "Modern smart watering systems offer a range of features designed to make garden maintenance easier and more efficient while conserving water resources.",
            items: [
                {
                    icon: <svg className="w-6 h-6 sm:w-6 sm:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>,
                    text: "Real-time soil moisture monitoring using advanced sensors that provide accurate data about your plants' water needs."
                },
                {
                    icon: <svg className="w-6 h-6 sm:w-6 sm:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>,
                    text: "Weather integration that automatically adjusts watering schedules based on local weather forecasts and conditions."
                },
                {
                    icon: <svg className="w-6 h-6 sm:w-6 sm:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>,
                    text: "Mobile app control allowing you to monitor and adjust your watering system from anywhere, with real-time notifications and alerts."
                },
                {
                    icon: <svg className="w-6 h-6 sm:w-6 sm:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>,
                    text: "Water conservation features that prevent overwatering and optimize water usage based on plant needs and environmental conditions."
                }
            ]
        },
        benefits: [
            {
                title: "Benefits of Smart Watering Systems",
                subtitle: "Water Conservation and Plant Health",
                paragraphs: [
                    "Smart watering systems significantly reduce water waste by delivering precise amounts of water exactly when and where plants need it. This targeted approach not only conserves water but also promotes healthier plant growth by preventing common issues like root rot from overwatering or stress from underwatering.",
                    "The system's ability to adapt to changing weather conditions and plant needs ensures optimal growing conditions throughout the year, leading to more vibrant and productive gardens with less manual intervention."
                ],
                image: bannerImage,
                imageAlt: "Smart watering system in action"
            },
            {
                title: "",
                subtitle: "Integration with Smart Home Systems",
                paragraphs: [
                    "Modern smart watering systems can be integrated with other smart home devices and platforms, allowing for comprehensive home automation. This integration enables features like voice control, automated scheduling based on your daily routine, and coordination with other smart devices to optimize energy and water usage throughout your home."
                ],
                image: bannerImage,
                imageAlt: "Smart home integration"
            },
            {
                title: "",
                subtitle: "Future of Smart Gardening",
                paragraphs: [
                    "As technology continues to advance, smart watering systems are becoming more sophisticated and user-friendly. Future developments may include AI-powered plant recognition, automated fertilization systems, and even more precise water delivery methods. These innovations will make gardening more accessible and enjoyable for everyone, from beginners to experienced gardeners."
                ]
            }
        ]
    };

    return <ArtikelDetailTemplate {...articleData} />;
}

export default ArtikelDetailWatering; 