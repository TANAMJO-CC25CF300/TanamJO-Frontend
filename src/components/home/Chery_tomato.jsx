import React from "react";
import HarvestLanding from '../plantlis/HarvestLandingHome';

function PlantGuide() {
    return (
        <main>            
            <div>
                <HarvestLanding title="Our History" breadcrumb={["Home", "Cherry Tomato"]}/>
            </div>

            <div className="lg:mx-0 xl:mx-10 -mt-6 w-auto rounded-4xl text-center relative z-20 mb-5 shadow-md pattern-background">
                {/* Expert Care Section */}
                <div className="p-3.5 sm:p-4.5 mx-5 md:mx-15 mt-20 md:mt-20 rounded-3xl border border-gray-200 min-h-[130px]">
                    <div className="text-left space-y-3 sm:space-y-4">
                        <div className="flex flex-col items-start space-y-3 md:space-y-2">    
                            <h2 className="text-xl md:text-2xl font-bold font-nunito tracking-wider leading-tight steel-haze">
                                Cherry Tomato Care Guide
                            </h2>
                            <p className="text-sm/6 md:text-sm/6 font-medium leading-normal tracking-wider custome-deskription">
                                Cherry tomatoes (Solanum lycopersicum var. cerasiforme) are a delightful variety of tomatoes known for their sweet, bite-sized fruits. These compact plants typically grow 3-4 feet tall and produce clusters of 10-20 fruits each. Through our comprehensive care approach, we'll guide you through every aspect of growing cherry tomatoes, from seed selection to harvest. Our expert guidance covers optimal growing conditions, precise planting techniques, detailed care routines, and effective solutions for common challenges. Whether you're a beginner or experienced gardener, this guide will help you achieve bountiful harvests of delicious cherry tomatoes.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Article Sections */}
                <div className="p-3.5 sm:p-4.5 mx-5 md:mx-15 mt-8 rounded-3xl border border-gray-200">
                    {/* Variety Selection Section */}
                    <div className="text-left space-y-4 mb-8">
                        <h3 className="text-lg md:text-xl font-bold font-nunito text-green-700">Recommended Varieties</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="p-4 bg-gray-50 rounded-lg">
                                <h4 className="font-semibold mb-2">Sweet 100</h4>
                                <p className="text-sm text-gray-600">Indeterminate variety producing clusters of 15-20 fruits. Disease-resistant, perfect for beginners. Matures in 65 days.</p>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-lg">
                                <h4 className="font-semibold mb-2">Sun Gold</h4>
                                <p className="text-sm text-gray-600">Early-maturing (57 days) with golden-orange fruits. Exceptionally sweet, heat-tolerant, and disease-resistant.</p>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-lg">
                                <h4 className="font-semibold mb-2">Black Cherry</h4>
                                <p className="text-sm text-gray-600">Unique dark purple fruits with rich flavor. Indeterminate, matures in 65-75 days. Excellent disease resistance.</p>
                            </div>
                        </div>
                    </div>

                    {/* Growing Conditions Section */}
                    <div className="text-left space-y-4 mb-8">
                        <h3 className="text-lg md:text-xl font-bold font-nunito text-green-700">Growing Conditions</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 bg-gray-50 rounded-lg">
                                <h4 className="font-semibold mb-2">Sunlight Requirements</h4>
                                <p className="text-sm text-gray-600">Cherry tomatoes require 6-8 hours of direct sunlight daily. Optimal growth occurs at temperatures between 65-85°F (18-29°C). Position plants in a south-facing location with protection from strong afternoon sun in hot climates. Use shade cloth if temperatures exceed 90°F (32°C). Morning sun is particularly important for fruit development and disease prevention.</p>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-lg">
                                <h4 className="font-semibold mb-2">Soil Requirements</h4>
                                <p className="text-sm text-gray-600">Use well-draining soil with a pH between 6.0-6.8. Ideal soil composition: 40% garden soil, 30% compost, 20% perlite, and 10% vermiculite. Add 2-3 inches of organic matter (compost or aged manure) before planting. Soil temperature should be at least 60°F (15.5°C) for optimal root development. Test soil pH monthly and adjust as needed using lime (to raise pH) or sulfur (to lower pH).</p>
                            </div>
                        </div>
                    </div>

                    {/* Planting Guide Section */}
                    <div className="text-left space-y-4 mb-8">
                        <h3 className="text-lg md:text-xl font-bold font-nunito text-green-700">Planting Guide</h3>
                        <div className="space-y-4">
                            <div className="p-4 bg-gray-50 rounded-lg">
                                <h4 className="font-semibold mb-2">When to Plant</h4>
                                <p className="text-sm text-gray-600">Start seeds indoors 6-8 weeks before the last frost date. Maintain soil temperature at 70-80°F (21-27°C) for germination. Transplant seedlings when they have 4-6 true leaves and are 6-8 inches tall. Harden off seedlings for 7-10 days before transplanting. Plant outdoors when soil temperature reaches 60°F (15.5°C) and night temperatures stay above 50°F (10°C). For fall planting, start seeds 12-14 weeks before first frost date.</p>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-lg">
                                <h4 className="font-semibold mb-2">Spacing and Support</h4>
                                <p className="text-sm text-gray-600">Space determinate varieties 24-36 inches apart, indeterminate varieties 36-48 inches apart. Rows should be 36-48 inches apart. Install support structures (cages, stakes, or trellises) at planting time. For staking, use 6-8 foot stakes and tie plants every 8-12 inches as they grow. For cages, use 5-6 foot tall cages with 12-18 inch diameter. For trellising, install 8-foot posts with horizontal wires every 12 inches.</p>
                            </div>
                        </div>
                    </div>

                    {/* Care Tips Section */}
                    <div className="text-left space-y-4 mb-8">
                        <h3 className="text-lg md:text-xl font-bold font-nunito text-green-700">Care Tips</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="p-4 bg-gray-50 rounded-lg">
                                <h4 className="font-semibold mb-2">Watering</h4>
                                <p className="text-sm text-gray-600">Water deeply (1-2 inches) 2-3 times per week, more frequently in hot weather. Maintain consistent soil moisture at 70-80% capacity. Water at the base of plants to avoid wetting leaves. Use drip irrigation or soaker hoses for optimal water delivery. Mulch with 2-3 inches of organic material to retain moisture. Check soil moisture daily by inserting finger 2 inches into soil. Water early morning to prevent evaporation and disease.</p>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-lg">
                                <h4 className="font-semibold mb-2">Fertilizing</h4>
                                <p className="text-sm text-gray-600">Apply balanced fertilizer (10-10-10) at planting. Side-dress with nitrogen-rich fertilizer (21-0-0) when first fruits appear. Apply 1/4 cup of fertilizer per plant every 2-3 weeks. Use organic options like fish emulsion or compost tea for natural growth. Monitor leaf color for nutrient deficiencies. Add calcium (1 cup gypsum per plant) to prevent blossom end rot. Apply foliar spray (1 tbsp Epsom salt per gallon) monthly for magnesium.</p>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-lg">
                                <h4 className="font-semibold mb-2">Pruning and Training</h4>
                                <p className="text-sm text-gray-600">Remove suckers (shoots between main stem and branches) when they're 2-3 inches long. Prune lower leaves up to 12 inches from ground to prevent soil-borne diseases. For indeterminate varieties, maintain 1-2 main stems. Pinch off growing tips 4 weeks before first frost to focus energy on ripening fruit. Remove yellow or diseased leaves immediately. Train vines to grow upward using soft ties or clips.</p>
                            </div>
                        </div>
                    </div>

                    {/* Common Problems Section */}
                    <div className="text-left space-y-4">
                        <h3 className="text-lg md:text-xl font-bold font-nunito text-green-700">Common Problems & Solutions</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 bg-gray-50 rounded-lg">
                                <h4 className="font-semibold mb-2">Pests</h4>
                                <ul className="text-sm text-gray-600 list-disc pl-4">
                                    <li>Aphids: Spray with insecticidal soap (2 tbsp per gallon) every 3-4 days until controlled. Introduce ladybugs as natural predators.</li>
                                    <li>Hornworms: Hand-pick daily or apply Bacillus thuringiensis (BT) spray weekly. Use blacklight at night to spot them.</li>
                                    <li>Whiteflies: Use yellow sticky traps (1 per 10 square feet) and apply neem oil every 7-10 days. Introduce parasitic wasps.</li>
                                    <li>Spider Mites: Spray with water daily and apply miticide if severe. Maintain humidity above 60%.</li>
                                    <li>Cutworms: Place collars around seedlings and apply diatomaceous earth. Use cardboard or aluminum foil collars.</li>
                                    <li>Slugs: Apply beer traps and diatomaceous earth. Hand-pick at night with flashlight.</li>
                                </ul>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-lg">
                                <h4 className="font-semibold mb-2">Diseases</h4>
                                <ul className="text-sm text-gray-600 list-disc pl-4">
                                    <li>Blossom end rot: Maintain soil pH at 6.5 and add calcium (1 cup gypsum per plant). Water consistently to prevent calcium uptake issues.</li>
                                    <li>Early blight: Apply copper fungicide every 7-10 days and remove infected leaves. Rotate crops and use resistant varieties.</li>
                                    <li>Powdery mildew: Improve air circulation and apply sulfur-based fungicide. Maintain humidity below 70%.</li>
                                    <li>Fusarium wilt: Use resistant varieties and rotate crops every 3 years. Solarize soil in summer.</li>
                                    <li>Leaf spot: Apply fungicide at first sign and remove affected leaves. Avoid overhead watering.</li>
                                    <li>Verticillium wilt: Use resistant varieties and maintain soil pH above 6.0. Remove and destroy infected plants.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Harvesting Section */}
                    <div className="text-left space-y-4 mt-8">
                        <h3 className="text-lg md:text-xl font-bold font-nunito text-green-700">Harvesting & Storage</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 bg-gray-50 rounded-lg">
                                <h4 className="font-semibold mb-2">Harvesting</h4>
                                <p className="text-sm text-gray-600">Harvest when fruits are fully colored and slightly soft to touch. Pick in the morning when temperatures are cool. Use scissors or pruners to avoid damaging the plant. Expect first harvest 60-70 days after transplanting. Continue harvesting every 2-3 days to encourage new fruit production. For best flavor, harvest when fruits are fully ripe. Check plants daily during peak season.</p>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-lg">
                                <h4 className="font-semibold mb-2">Storage</h4>
                                <p className="text-sm text-gray-600">Store at room temperature (65-70°F) for 2-3 days. For longer storage, refrigerate at 45-50°F for up to 1 week. Do not store in direct sunlight. For freezing, blanch for 1 minute, cool, and store in airtight containers for up to 6 months. For canning, use pressure canner at 10-11 PSI for 40 minutes. For drying, slice and dry at 135°F for 8-12 hours.</p>
                            </div>
                        </div>
                    </div>

                    {/* Propagation Section */}
                    <div className="text-left space-y-4 mt-8">
                        <h3 className="text-lg md:text-xl font-bold font-nunito text-green-700">Propagation & Seed Saving</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 bg-gray-50 rounded-lg">
                                <h4 className="font-semibold mb-2">Seed Saving</h4>
                                <p className="text-sm text-gray-600">Select fully ripe, disease-free fruits from your best plants. Extract seeds and ferment in water for 2-3 days. Rinse and dry seeds on paper towel for 1 week. Store in airtight container in cool, dark place. Label with variety and date. Seeds remain viable for 4-6 years when stored properly. Test germination rate annually.</p>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-lg">
                                <h4 className="font-semibold mb-2">Propagation Methods</h4>
                                <p className="text-sm text-gray-600">Start seeds indoors 6-8 weeks before last frost. Use sterile seed starting mix. Maintain 70-80°F soil temperature. Transplant when seedlings have 4-6 true leaves. For cuttings, take 6-inch stem cuttings from healthy plants. Root in water or moist potting mix. Keep humidity high during rooting. Transplant when roots are 2-3 inches long.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default PlantGuide;    