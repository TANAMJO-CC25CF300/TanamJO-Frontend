import React from "react";
import Card1 from "../../components/Card1";
import Card2 from "../../components/Card2";
import LittleButton from "../../components/LittleButton";
// import Header from "../../components/Header";
import Header from '@/layout/landingPages/header';
import Footer from "../../components/Footer";
import heroBg from "../../assets/heroSection.png"
import bgPattern from "../../assets/background.png"
import tomatoImg from "../../assets/tomato1.png"
import { FaCheck } from "react-icons/fa";
import tomato2Img from "../../assets/recomPhoto.png"
import DescCard from "../../components/DescCard";
import greenTomato from "../../assets/tomatoCard.png"
import Card3 from "../../components/Card3";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white flex justify-center items-center px-8 py-8">
    <div className="w-full max-w-[1280px] bg-white rounded-3xl overflow-hidden shadow-xl">
      <div className="relative">
      {/* Sticky Header dengan latar transparan gelap agar kontras */}
      <div className="sticky top-0 z-50 bg-black/40 backdrop-blur-sm">
        <Header />
      </div>

      {/* Hero Background Section */}
      <div className="relative w-full h-full overflow-hidden">
        {/* Gambar background */}
        <img
          src={heroBg}
          alt="background"
          className="w-full h-full object-cover"
        />

        {/* Overlay hitam transparan */}
        <div className="absolute inset-0 bg-black/20 z-10" />

        {/* Hero Content di atas overlay */}
        <div className="absolute inset-0 z-20 flex items-center justify-start">
          <section className="w-full px-6 md:px-15 py-1 flex flex-col items-start text-left max-w-5xl">
            <button className="font-bold px-4 py-1 text-xs border border-white text-white rounded-full mb-4 tracking-wide bg-white/10 backdrop-blur-sm">
              BELIEVE IN QUALITY!
            </button>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-12 text-white drop-shadow-lg">
              Grow Smarter: <br /> Smart Tomato Tips
            </h1>

            <hr className="w-231 border-t border-white my-2 border-[2px]" />

            <p className="font-bold text-base md:text-lg text-white w-full mb-8 drop-shadow-sm">
              Not sure how to start with tomatoes? We’re here to guide you — from seed to salad
            </p>

            <LittleButton>Get Started</LittleButton>
          </section>
        </div>
      </div>
      </div>

      <div 
        className="min-h-screen pb-10"
        style={{
          backgroundImage: `url(${bgPattern})`,
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
          backgroundPosition: "center",
        }}
      >

        {/* Feature Section */}
        <section className="w-full bg-cover py-16">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 ml-20">
      
            {/* Card 1 */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-[#5B8C51] rounded-full shrink-0" />
              <div className="flex flex-col">
                <span className="font-bold text-gray-500">Expert Guidance</span>
                <p className="text-sm text-gray-600">Quick tips from tomato specialists.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-[#5B8C51] rounded-full shrink-0" />
              <div className="flex flex-col">
                <span className="font-bold text-gray-500">Learning Resources</span>
                <p className="text-sm text-gray-600">Easy guides and how-tos.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-[#5B8C51] rounded-full shrink-0" />
              <div className="flex flex-col">
                <span className="font-bold text-gray-500">Community Support</span>
                <p className="text-sm text-gray-600">Ask & share with fellow growers.</p>
              </div>
            </div>
          </div>
        </section>

        
        {/* Informational Section with Image */}
        <section className="flex justify-center px-4 py-12">
          <div className="w-full max-w-6xl border border-gray-300 rounded-2xl px-6 md:px-12 py-10 flex flex-col md:flex-row items-center gap-10">
            <img src={tomatoImg} alt="Tomato Plant" className="rounded-3xl w-full md:w-1/2 object-cover" />
            <div className="md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Growing Knowledge, Growing Tomatoes</h2>
              <p className="text-sm text-gray-600 mb-6 font-bold">
                Greetings from Dosner Organic Farms. We distribute only organic herbs and produce directly to consumers.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-6 font-bold">
                {[
                  "Tomato Growing Tips",
                  "Seasonal Planting Guides",
                  "Organic Tomato Care",
                  "Soil & Fertilizer Advice",
                  "Pest & Disease Solutions",
                  "Beginner to Pro Guidance"
                  ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-5 h-5 flex items-center justify-center rounded-full bg-[#EDDD5E] text-white text-l" >
                      <FaCheck size={10} />
                    </div >
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <LittleButton>Know More</LittleButton>
            </div>
          </div>
        </section>

        {/* Card1 Section */}
        <section className="px-4 md:px-20 py-12">
          <span className="inline-block bg-[#5B8C51] text-white text-xs font-semibold px-3 py-1 rounded-full mb-2">
            Smart Selections
          </span>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-2 md:gap-6">
            <h2 className="text-4xl font-bold text-gray-900 max-w-[400px] leading-normal">
              Choose the Best for Your Garden
            </h2>
            <p className="text-sm text-gray-900 max-w-[480px]">
              Greetings from Dosner Organic Farms. We distribute only organic herbs and produce directly to consumers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card1
              cardWidth="w-[200px] sm:w-[210px]"
              imageHeight="h-[260px]"
              textSize="text-base sm:text-lg"
            />
            <Card1
              cardWidth="w-[200px] sm:w-[210px]"
              imageHeight="h-[260px]"
              textSize="text-base sm:text-lg"
            />
            <Card1
              cardWidth="w-[200px] sm:w-[210px]"
              imageHeight="h-[260px]"
              textSize="text-base sm:text-lg"
            />
            <Card1
              cardWidth="w-[200px] sm:w-[210px]"
              imageHeight="h-[260px]"
              textSize="text-base sm:text-lg"
            />
          </div>
        </section>

        {/* Card2 Section */}
        <section className="px-6 md:px-12 mx-8 py-16 border-gray-300 border-1 rounded-3xl text-center relative">
          <div className="inline-block bg-[#5B8C51] text-white text-xs font-semibold py-1 px-3 rounded-full mb-3">
            Smart Selections
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight mb-2">
            Choose the Best for <br className="hidden sm:block" /> Your Garden
          </h2>
          <p className="text-xs md:text-sm text-gray-500 max-w-lg mx-auto mb-8">
            Greetings from Dosner Organic Farms. We distribute only organic herbs and produce directly to consumers.
          </p>

          {/* Grid Card2 */}
          <div className="px-4 md:px-12 lg:px-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
              <Card2
                image={tomato2Img}
                type="Fertilizer"
                title="Harvest Concepts"
                description="Farming and animal husbandry and discuss with farmers and scientists."
              />
              <Card2
                image={tomato2Img}
                type="Fertilizer"
                title="Harvest Concepts"
                description="Farming and animal husbandry and discuss with farmers and scientists."
              />
              <Card2
                image={tomato2Img}
                type="Fertilizer"
                title="Harvest Concepts"
                description="Farming and animal husbandry and discuss with farmers and scientists."
              />
            </div>
          </div>

          {/* Panah Navigasi (kanan & kiri) */}
          <div className="absolute top-6 right-6 flex gap-2">
            <button className="w-8 h-8 rounded-full bg-gray-200 text-black flex items-center justify-center hover:bg-gray-300 transition">
              &lt;
            </button>
            <button className="w-8 h-8 rounded-full bg-gray-200 text-black flex items-center justify-center hover:bg-gray-300 transition">
              &gt;
            </button>
          </div>
        </section>

        {/* Agriculture Products */}
        <section className="px-4 md:px-20 py-12 ">
          <span className="inline-block bg-[#5B8C51] text-white text-xs font-semibold px-3 py-1 rounded-full mb-2">
            Smart Selections
          </span>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-2 md:gap-6">
            <h2 className="text-4xl font-bold text-gray-900 max-w-[400px] leading-normal">
              Choose the Best for Your Garden
            </h2>
            <p className="text-sm text-gray-900 max-w-[480px]">
              Greetings from Dosner Organic Farms. We distribute only organic herbs and produce directly to consumers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <DescCard
                key={index}
                title="Agriculture Products"
                description="There are many variations of passages of lorem ipsum available but the majority have suffered alteration"
              />
            ))}
          </div>
        </section>

        {/* Healthy Life Section */}
        <section className="px-4 md:px-20 py-16 flex flex-col md:flex-row items-center gap-30">
    
          {/* Gambar Tomat */}
          <div className="w-full md:w-1/2 overflow-hidden rounded-2xl">
            <img
              src={greenTomato}
              alt="Fresh Tomato"
              className="w-full h-80 object-cover transform scale-170 origin-left"
            />
          </div>

          {/* Konten Teks */}
          <div className="w-full md:w-1/2">
            <div className="inline-block bg-[#5B8C51] text-white text-xs font-semibold px-4 py-1 rounded-full mb-4">
              What We Do
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-4">
              Healthy life with fresh products
            </h2>
            <p className="text-sm text-gray-600">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.
            </p>
          </div>
        </section>

        {/* Final Card1 Section */}
        <section className="px-4 md:px-20 py-12">
          <span className="inline-block bg-[#5B8C51] text-white text-xs font-semibold px-3 py-1 rounded-full mb-2">
            Smart Selections
          </span>
          <h2 className="text-4xl font-bold text-gray-900 max-w-[400px] leading-normal">
            Choose the Best for Your Garden
          </h2>
          <p className="text-sm text-gray-900 max-w-[480px]">
            Greetings from Dosner Organic Farms. We distribute only organic herbs and produce directly to consumers.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <Card3 />
            <Card3 />
            <Card3 />
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
    </div>
  );
};

export default HomePage;
