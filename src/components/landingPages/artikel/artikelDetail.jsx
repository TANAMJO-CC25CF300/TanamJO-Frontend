import React from "react";
import ArtikelDetailTemplate from '@components/landingPages/artikel/ArtikelDetailTemplate';
import bannerImage from '@/assets/Banner/card-2.png';

function ArtikelDetail() {
    const articleData = {
        title: "Plant Problems Early",
        date: "March 12, 2024",
        readTime: "5 min read",
        category: "Gardening",
        tags: "Tips & Tricks",
        description: "Use our smart detection tools to spot diseases early and take action fast. With advanced technology, you can monitor plant health in real-time, identify signs of pests or nutrient deficiencies, and get personalized care tips. This helps prevent the spread of problems, saving your plants from damage and boosting their growth potential. Stay ahead with easy-to-understand insights that empower you to nurture your garden effectively and confidently.",
        quote: "Discover innovative gardening tips that turn your backyard into a peaceful oasis. Learn how to blend colors and textures for stunning visual appeal.",
        mainContent: [
            "Digital image-based plant disease detection technology helps farmers and gardeners identify disease symptoms early through visual analysis of leaf images or other plant parts.",
            "By utilizing pattern recognition algorithms and artificial intelligence, this system can accelerate decision-making, improve crop yields, and reduce reliance on time-consuming manual inspections."
        ],
        
        features: {
            title: "Benefits of Digital Image-Based Plant Disease Detection System",
            description: "This system enables farmers to identify disease symptoms more quickly, improve treatment efficiency, and prevent wider spread of plant diseases accurately and efficiently.",
            items: [
                {
                    icon: <svg className="w-6 h-6 sm:w-6 sm:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>,
                    text: "With the help of digital imaging, the system can identify characteristic disease features such as abnormal colors, spot patterns, or leaf damage that are difficult to recognize manually, even in the early stages of infection."
                },
                {
                    icon: <svg className="w-6 h-6 sm:w-6 sm:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>,
                    text: "Leaf pattern recognition technology enables the system to automatically and accurately detect early signs of plant diseases, such as spots or color changes, from digital images alone."
                },
                {
                    icon: <svg className="w-6 h-6 sm:w-6 sm:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>,
                    text: "Leaf pattern recognition technology enables the system to automatically and accurately detect early signs of plant diseases, such as spots or color changes, from digital images alone."
                },
                {
                    icon: <svg className="w-6 h-6 sm:w-6 sm:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>,
                    text: "Digital image-based detection system helps identify plant diseases early by analyzing leaf texture and patterns. This approach improves monitoring efficiency and reduces reliance on manual inspection, thereby accelerating control measures."
                }
            ]
        },
        benefits: [
            {
                title: "Smart System for Early Plant Disease Detection",
                subtitle: "Visual Pattern Recognition in Plant Leaves",
                paragraphs: [
                    "This technology utilizes leaf images captured using smartphone cameras or other devices, then processes them through stages such as segmentation, feature extraction, and contrast enhancement. This process enables the system to detect early disease symptoms such as spots, color changes, or leaf deformations.",
                    "By integrating this method into agricultural applications, farmers can obtain plant health information quickly and accurately, even before symptoms spread widely. Such early detection helps in making appropriate decisions for treatment and preventing further damage."
                ],
                image: bannerImage,
                imageAlt: "Edging plastik memisahkan kebun dan rumput"
            },
            {
                title: "",
                subtitle: "Image Processing as the Foundation of Plant Disease Detection",
                paragraphs: [
                    "One of the key components in this system is image processing, where captured plant leaf images undergo various stages such as color conversion, segmentation, and visual quality enhancement. This step enables the system to recognize disease symptom patterns on leaf surfaces more accurately. With this approach, the system can distinguish between healthy and infected leaves based on visual features such as color, texture, and spot patterns, before proceeding to advanced classification stages."
                ],
                image: bannerImage,
                imageAlt: "Edging plastik memisahkan kebun dan rumput"
            },
            {
                title: "",
                subtitle: "Digital Image-Based Plant Disease Detection System Flow",
                paragraphs: [
                    "This diagram explains the stages in the plant disease detection system using digital image processing technology. The process begins with capturing plant leaf images, followed by preprocessing such as resizing and image quality enhancement. After that, the system performs feature extraction and texture analysis to capture important visual patterns. The final stage uses classification algorithms such as Convolutional Neural Network (CNN) to automatically and accurately identify disease types. This system is designed to support farmers in making quick decisions regarding plant disease management."
                ]
            }
        ]
    };

    return <ArtikelDetailTemplate {...articleData} />;
}

export default ArtikelDetail;