import React from "react";
import { useLocation } from 'react-router-dom';
import HarvestLandingAbout from '@components/landingPages/plantlis/HarvestLandingAbout';
import defaultImage from '../../../assets/banner/card-1.png';
import Footer from '@/layout/landingPages/footer';

function ArtikelCardUtama() {
  const location = useLocation();
  const cardData = location.state?.cardData || {
    image: defaultImage,
    title: "Fresh Tomatoes",
    details: {
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
    }
  };

  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = defaultImage;
  };

  return (
    <>        
      <div>
        <HarvestLandingAbout title="Our History" breadcrumb={["Home", "Plant Care Guide"]}/>
      </div>

      <div className="lg:mx-0 xl:mx-10 -mt-6 w-auto rounded-3xl text-center relative z-20 mb-5 shadow-md pattern-background">
        <div className="flex flex-col lg:flex-row items-start mx-5 md:mx-15 py-6 md:py-8 gap-4 md:gap-8 rounded-3xl mt-13 md:mt-13">
          <div className="w-full lg:w-[320px] h-[280px] lg:h-[320px] relative overflow-hidden rounded-3xl group">
            <div className="absolute inset-0 bg-black opacity-20 z-10"></div>
            <img src={cardData.image} alt={cardData.title} className="w-full h-full object-cover" onError={handleImageError}/>
          </div>
          
          <div className="flex-1 pl-0 pr-0 lg:pl-0 lg:pr-0 text-left mt-8">
            <h2 className="text-xl sm:text-2xl lg:text-2xl font-bold font-nunito tracking-wider leading-tight steel-haze mt-2.5 md:mt-0">
              {cardData.title} Details
            </h2>
            
            <div className="flex flex-wrap items-center gap-1 text-xs sm:text-sm min-h-[28px] justify-start pl-0 mt-1 mb-2">
              <span className="text-sm/7 font-medium text-gray-500 leading-normal tracking-wide truncate text-left">
                Age: {cardData.details.age}
              </span>

              <svg className="w-4 h-4 custome-deskription mx-1 hidden sm:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>

              <span className="text-sm/7 font-medium text-gray-500 leading-normal tracking-wide truncate text-left">
                Plant Type: {cardData.details.plantType}
              </span>

              <svg className="w-4 h-4 custome-deskription mx-1 hidden sm:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>

              <span className="text-sm/7 font-medium text-gray-500 leading-normal tracking-wide truncate text-left">
                Leaf Type: {cardData.details.leafType}
              </span>
            </div>

            <p className="text-sm/7 md:text-base/7 font-medium leading-relaxed font-nunito tracking-wide text-gray-500 ">
              {cardData.details.description}
            </p>

            <div className="flex flex-wrap w-full mt-6 px-0 gap-2 sm:gap-3 md:gap-4">
              <span className="flex items-center justify-center w-full sm:w-[calc(50%-4px)] md:w-[calc(50%-8px)] lg:w-[calc(50%-8px)] px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 border border-gray-200 rounded-full text-sm/7 md:text-base/7 font-medium leading-relaxed font-nunito tracking-wide text-gray-500 text-left truncate" style={{ minHeight: "40px" }}>
                Age: {cardData.details.age}
              </span>

              <span className="flex items-center justify-center w-full sm:w-[calc(50%-4px)] md:w-[calc(50%-8px)] lg:w-[calc(50%-8px)] px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 border border-gray-200 rounded-full text-sm/7 md:text-base/7 font-medium leading-relaxed font-nunito tracking-wide text-gray-500 text-left truncate" style={{ minHeight: "40px" }}>
                Plant Type: {cardData.details.plantType}
              </span>

              <span className="flex items-center justify-center w-full sm:w-[calc(50%-4px)] md:w-[calc(50%-8px)] lg:w-[calc(50%-8px)] px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 border border-gray-200 rounded-full text-sm/7 md:text-base/7 font-medium leading-relaxed font-nunito tracking-wide text-gray-500 text-left truncate" style={{ minHeight: "40px" }}>
                Leaf Type: {cardData.details.leafType}
              </span>
            </div>
          </div>
        </div>
      
        <div className="w-full -mt-2 mb-4 px-0">
          <div className="mx-5 md:mx-15">
            <div className="rounded-2xl mt-3 px-0 sm:px-0 min-h-[60px] flex flex-col items-start justify-start">
              <p className="text-sm/7 md:text-base/7 font-medium leading-relaxed font-nunito tracking-wide text-gray-500 text-left w-full pl-0 sm:pl-0 ml-0">
                {cardData.title} are one of the most cultivated horticultural plants due to their high nutritional value and relatively quick harvest time. Suitable for both backyard gardens and agricultural scale cultivation.
              </p>

              <div className="flex items-center justify-start mt-5 mb-5">
                <h2 className="text-xl sm:text-2xl lg:text-2xl font-bold font-nunito tracking-wider leading-tight steel-haze mt-2.5 md:mt-0">
                  {cardData.title} Care Tips
                </h2>
              </div>

              <div className="flex flex-col space-y-5 md:space-y-6 mb-1">
                {cardData.details.careTips.map((tip, index) => (
                  <p key={`care-tip-${index}`} className="text-sm/7 md:text-base/7 font-medium leading-relaxed font-nunito tracking-wide text-gray-500 text-left w-full pl-0 sm:pl-0 ml-0">
                    {index + 1}. {tip}
                  </p>
                ))}
              </div>

              <div className="flex items-center justify-start mt-5 mb-4">
                <h2 className="text-xl sm:text-2xl lg:text-2xl font-bold font-nunito tracking-wider leading-tight steel-haze mt-2.5 md:mt-0 text-left">
                  Categories & Characteristics
                </h2>
              </div>

              <div className="w-full flex flex-col gap-3 mt-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  <span className="border border-gray-200 rounded-full px-4 py-3 text-sm/7 md:text-base/7 font-medium leading-relaxed font-nunito tracking-wide text-gray-500 text-left">
                    Age: {cardData.details.age}
                  </span>
                
                  <span className="border border-gray-200 rounded-full px-4 py-3 text-sm/7 md:text-base/7 font-medium leading-relaxed font-nunito tracking-wide text-gray-500 text-left">
                    Plant Type: {cardData.details.plantType}
                  </span>
                
                  <span className="border border-gray-200 rounded-full px-4 py-3 text-sm/7 md:text-base/7 font-medium leading-relaxed font-nunito tracking-wide text-gray-500 text-left">
                    Leaf Type: {cardData.details.leafType}
                  </span>
                
                  <span className="border border-gray-200 rounded-full px-4 py-3 text-sm/7 md:text-base/7 font-medium leading-relaxed font-nunito tracking-wide text-gray-500 text-left mt-3.5">
                    Light: Full sun
                  </span>
                
                  <span className="border border-gray-200 rounded-full px-4 py-3 text-sm/7 md:text-base/7 font-medium leading-relaxed font-nunito tracking-wide text-gray-500 text-left mt-3.5">
                    Watering: 2x daily (not excessive)
                  </span>
                
                  <span className="border border-gray-200 rounded-full px-4 py-3 text-sm/7 md:text-base/7 font-medium leading-relaxed font-nunito tracking-wide text-gray-500 text-left mt-3.5">
                    Growing Medium: Loose and fertile soil
                  </span>
                </div>
              </div>

              <div className="flex flex-col space-y-5 md:space-y-6 mt-6 mb-3">
                <p className="text-sm/7 md:text-base/7 font-medium leading-relaxed font-nunito tracking-wide text-gray-500 text-left w-full pl-0 sm:pl-0 ml-0">
                  {cardData.title} require special attention to the balance of micro-nutrients such as calcium, magnesium, and boron to prevent damage to fruits and leaves. Deficiency in any of these elements can cause problems such as blossom end rot, yellowing leaves, and poor fruit development. Regular soil testing and appropriate fertilization are crucial for maintaining optimal nutrient levels.
                </p>

                <p className="text-sm/7 md:text-base/7 font-medium leading-relaxed font-nunito tracking-wide text-gray-500 text-left w-full pl-0 sm:pl-0 ml-0">
                  Besides nutrients, adequate lighting and humidity control are important in {cardData.title.toLowerCase()} growth, especially during flowering and fruiting periods. Ensure good air circulation to prevent fungi and diseases. Consider using mulch to maintain consistent soil moisture and temperature, and to prevent soil-borne diseases from splashing onto leaves during watering.
                </p>

                <p className="text-sm/7 md:text-base/7 font-medium leading-relaxed font-nunito tracking-wide text-gray-500 text-left w-full pl-0 sm:pl-0 ml-0">
                  Different {cardData.title.toLowerCase()} varieties have specific requirements and characteristics. Determinate varieties grow to a certain height and produce fruit all at once, while indeterminate varieties continue growing and producing fruit throughout the season. Choose varieties based on your climate, available space, and intended use (fresh eating, canning, or processing).
                </p>

                <p className="text-sm/7 md:text-base/7 font-medium leading-relaxed font-nunito tracking-wide text-gray-500 text-left w-full pl-0 sm:pl-0 ml-0">
                  Common {cardData.title.toLowerCase()} varieties include Beefsteak (large, meaty fruits), Cherry (small, sweet fruits), Roma (paste tomatoes), and Heirloom (unique flavors and colors). Each variety has its own growth habits, disease resistance, and flavor profile, making them suitable for different growing conditions and culinary uses.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl px-2 md:px-4 py-5 md:py-7 my-5 flex flex-col sm:flex-row items-center sm:items-start relative max-w-5xl mx-auto mb-5">
                <div className="flex-shrink-0 mb-3 sm:mb-0 sm:mt-1 sm:mr-3 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-100" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7z"/>
                    </svg>
                  </div>
                </div>
                
                <p className="text-sm/7 md:text-base/7 font-medium leading-relaxed font-nunito tracking-wide text-gray-500 text-left w-full ml-0 sm:ml-4 md:ml-3 italic">
                  In modern {cardData.title.toLowerCase()} cultivation, deficiencies in micro-elements such as calcium and boron often become the main obstacles in increasing crop yields. A sustainable farming approach that considers nutrient balance, soil quality, and microclimate is key to achieving optimal productivity without harming the environment.
                </p>
              </div>

              <div className="flex flex-col space-y-5 md:space-y-6 mt-2.5">
                <p className="text-sm/7 md:text-base/7 font-medium leading-relaxed font-nunito tracking-wide text-gray-500 text-left w-full pl-0 sm:pl-0 ml-0">
                  {cardData.title} require full sunlight for a minimum of 6-8 hours per day. Insufficient lighting can lead to slow growth, leggy plants, and suboptimal flowering. In areas with intense summer heat, provide some afternoon shade to prevent sunscald on fruits.
                </p>

                <p className="text-sm/7 md:text-base/7 font-medium leading-relaxed font-nunito tracking-wide text-gray-500 text-left w-full pl-0 sm:pl-0 ml-0">
                  Additionally, {cardData.title.toLowerCase()} ideally grow in well-draining soil with a pH between 6.0 and 6.8. Ensure adequate planting distance (24-36 inches apart) to maintain good air circulation and prevent disease spread. Consider crop rotation to prevent soil-borne diseases from building up in the same location year after year.
                </p>

                <p className="text-sm/7 md:text-base/7 font-medium leading-relaxed font-nunito tracking-wide text-gray-500 text-left w-full pl-0 sm:pl-0 ml-0">
                  Regular pruning and training of {cardData.title.toLowerCase()} plants is essential for optimal growth. Remove suckers (side shoots) that develop in the leaf axils to focus energy on fruit production. For indeterminate varieties, consider using the single-stem or double-stem training method to maximize space and yield.
                </p>
              </div>

              <div className="flex items-center justify-start mt-5 mb-4">
                <h2 className="text-xl sm:text-2xl lg:text-2xl font-bold font-nunito tracking-wider leading-tight steel-haze mt-2.5 md:mt-0 text-left">
                  {cardData.title} Growth Requirements
                </h2>
              </div>

              <div className="w-full flex flex-col gap-3 mt-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  <span className="border border-gray-200 rounded-full px-4 py-3 text-sm/7 md:text-base/7 font-medium leading-relaxed font-nunito tracking-wide text-gray-500 text-left">
                    Light Requirements: 6-8 hours/day
                  </span>

                  <span className="border border-gray-200 rounded-full px-4 py-3 text-sm/7 md:text-base/7 font-medium leading-relaxed font-nunito tracking-wide text-gray-500 text-left">
                    Ideal Soil pH: 6.0-6.8
                  </span>

                  <span className="border border-gray-200 rounded-full px-4 py-3 text-sm/7 md:text-base/7 font-medium leading-relaxed font-nunito tracking-wide text-gray-500 text-left">
                    Optimal Humidity: 60-70%
                  </span>

                  <span className="border border-gray-200 rounded-full px-4 py-3 text-sm/7 md:text-base/7 font-medium leading-relaxed font-nunito tracking-wide text-gray-500 text-left">
                    Soil Type: Sandy Loam
                  </span>

                  <span className="border border-gray-200 rounded-full px-4 py-3 text-sm/7 md:text-base/7 font-medium leading-relaxed font-nunito tracking-wide text-gray-500 text-left">
                    Ideal Temperature: 20-27°C
                  </span>

                  <span className="border border-gray-200 rounded-full px-4 py-3 text-sm/7 md:text-base/7 font-medium leading-relaxed font-nunito tracking-wide text-gray-500 text-left">
                    Leaf Type: {cardData.details.leafType}
                  </span>
                </div>
              </div>

              <div className="flex flex-col space-y-5 md:space-y-6 mt-6">
                <p className="text-sm/7 md:text-base/7 font-medium leading-relaxed font-nunito tracking-wide text-gray-500 text-left w-full pl-0 sm:pl-0 ml-0">
                  {cardData.title} are sensitive to excess water. Overwatering can cause root rot and trigger fungal diseases such as root rot or leaf spot.
                </p>

                <p className="text-sm/7 md:text-base/7 font-medium leading-relaxed font-nunito tracking-wide text-gray-500 text-left w-full pl-0 sm:pl-0 ml-0">
                  It is important to maintain good air circulation and adequate lighting to keep {cardData.title.toLowerCase()} leaves dry and not moist. The use of mulch is also recommended to maintain stable soil moisture.
                </p>
              </div>

              <div className="flex items-center justify-start mt-5 mb-0">
                <h2 className="text-xl sm:text-2xl lg:text-2xl font-bold font-nunito tracking-wider leading-tight steel-haze mt-2.5 md:mt-0 text-left">
                  Nutritional Benefits & Varieties
                </h2>
              </div>

              <div className="flex flex-col space-y-5 md:space-y-6 mb-4 mt-3">
                <p className="text-sm/7 md:text-base/7 font-medium leading-relaxed font-nunito tracking-wide text-gray-500 text-left w-full pl-0 sm:pl-0 ml-0">
                  {cardData.title} are nutritional powerhouses, rich in:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-2.5">
                  <span className="border border-gray-200 rounded-full px-4 py-3 text-sm/7 md:text-base/7 font-medium leading-relaxed font-nunito tracking-wide text-gray-500 text-left">
                    Lycopene: Powerful antioxidant
                  </span>

                  <span className="border border-gray-200 rounded-full px-4 py-3 text-sm/7 md:text-base/7 font-medium leading-relaxed font-nunito tracking-wide text-gray-500 text-left">
                    Vitamin C: Immune support
                  </span>

                  <span className="border border-gray-200 rounded-full px-4 py-3 text-sm/7 md:text-base/7 font-medium leading-relaxed font-nunito tracking-wide text-gray-500 text-left">
                    Potassium: Heart health
                  </span>

                  <span className="border border-gray-200 rounded-full px-4 py-3 text-sm/7 md:text-base/7 font-medium leading-relaxed font-nunito tracking-wide text-gray-500 text-left">
                    Vitamin K: Bone health
                  </span>

                  <span className="border border-gray-200 rounded-full px-4 py-3 text-sm/7 md:text-base/7 font-medium leading-relaxed font-nunito tracking-wide text-gray-500 text-left">
                    Folate: Cell growth
                  </span>

                  <span className="border border-gray-200 rounded-full px-4 py-3 text-sm/7 md:text-base/7 font-medium leading-relaxed font-nunito tracking-wide text-gray-500 text-left">
                    Fiber: Digestive health
                  </span>
                </div>

                <div className="mt-3">
                  <p className="text-sm/7 md:text-base/7 font-medium leading-relaxed font-nunito tracking-wide text-gray-500 text-left w-full pl-0 sm:pl-0 ml-0">
                    Detailed Nutritional Information:
                  </p>
                  <p className="text-sm/7 md:text-base/7 font-medium leading-relaxed font-nunito tracking-wide text-gray-500 text-left w-full pl-0 sm:pl-0 ml-0 mt-2">
                    {cardData.title} are an excellent source of essential nutrients that contribute to overall health and well-being. The lycopene content, which gives {cardData.title.toLowerCase()} their red color, is a powerful antioxidant that helps protect against certain types of cancer and heart disease. Vitamin C supports immune function and skin health, while potassium helps regulate blood pressure and heart function. The combination of these nutrients makes {cardData.title.toLowerCase()} a valuable addition to any diet.
                  </p>
                </div>

                <div className="mt-3">
                  <p className="text-sm/7 md:text-base/7 font-medium leading-relaxed font-nunito tracking-wide text-gray-500 text-left w-full pl-0 sm:pl-0 ml-0">
                    Popular {cardData.title} Varieties:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-8">
                    <span className="border border-gray-200 rounded-full px-4 py-3 text-sm/7 md:text-base/7 font-medium leading-relaxed font-nunito tracking-wide text-gray-500 text-left">
                      Beefsteak: Large, meaty fruits
                    </span>

                    <span className="border border-gray-200 rounded-full px-4 py-3 text-sm/7 md:text-base/7 font-medium leading-relaxed font-nunito tracking-wide text-gray-500 text-left">
                      Cherry: Small, sweet fruits
                    </span>

                    <span className="border border-gray-200 rounded-full px-4 py-3 text-sm/7 md:text-base/7 font-medium leading-relaxed font-nunito tracking-wide text-gray-500 text-left">
                      Roma: Paste tomatoes
                    </span>

                    <span className="border border-gray-200 rounded-full px-4 py-3 text-sm/7 md:text-base/7 font-medium leading-relaxed font-nunito tracking-wide text-gray-500 text-left">
                      Heirloom: Unique flavors
                    </span>

                    <span className="border border-gray-200 rounded-full px-4 py-3 text-sm/7 md:text-base/7 font-medium leading-relaxed font-nunito tracking-wide text-gray-500 text-left">
                      Grape: Small, oblong fruits
                    </span>

                    <span className="border border-gray-200 rounded-full px-4 py-3 text-sm/7 md:text-base/7 font-medium leading-relaxed font-nunito tracking-wide text-gray-500 text-left">
                      Early Girl: Quick maturing
                    </span>
                  </div>
                </div>

                <div className="mt-3">
                  <p className="text-sm/7 md:text-base/7 font-medium leading-relaxed font-nunito tracking-wide text-gray-500 text-left w-full pl-0 sm:pl-0 ml-0">
                    Variety Characteristics:
                  </p>
                  
                  <p className="text-sm/7 md:text-base/7 font-medium leading-relaxed font-nunito tracking-wide text-gray-500 text-left w-full pl-0 sm:pl-0 ml-0 mt-2">
                    Each {cardData.title.toLowerCase()} variety offers unique characteristics that make them suitable for different uses. Beefsteak {cardData.title.toLowerCase()} are perfect for sandwiches and slicing, while Cherry {cardData.title.toLowerCase()} are ideal for salads and snacking. Roma {cardData.title.toLowerCase()}, with their meaty texture and low moisture content, are excellent for sauces and canning. Heirloom varieties provide diverse flavors and colors, adding visual appeal to dishes. Understanding these characteristics helps in selecting the right variety for your specific needs and growing conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />

      </div>
    </>
  );
}

export default ArtikelCardUtama;