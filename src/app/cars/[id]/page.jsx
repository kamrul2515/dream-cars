import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { 
  FaFacebookF, FaTwitter, FaWhatsapp, FaLinkedinIn, FaPinterestP,
  FaGasPump, FaRegClock, FaCalendarAlt, FaCog, FaUserFriends, FaEngine, FaCarSide, FaPrint, FaFilePdf
} from 'react-icons/fa';
import { MdLocationOn, MdEmail } from 'react-icons/md';

// ডাটা ফেচিং ফাংশন (অনুরোধ অনুযায়ী আইডি দিয়ে সিঙ্গেল ডাটা আসবে)
async function getSingleProduct(id) {
  try {
    const res = await fetch(`https://dream-cars-server.onrender.com/cars/${id}`, {
      cache: 'no-store'
    });
    if (!res.ok) throw new Error("Failed to fetch car data");
    return await res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

export const generateMetadata = async ({ params }) => {
  const { id } = await params;
  const car = await getSingleProduct(id);

  return {
    title: car?.title ? `${car.title} - Details` : "Car Details",
    description: car?.description || "Premium car details page.",
  };
};

const CarsDetailsPage = async ({ params }) => {
  const { id } = await params;
  const car = await getSingleProduct(id);

  if (!car) {
    return (
      <div className="text-center my-20 text-2xl font-bold font-sans text-gray-800">
        Car not found!
      </div>
    );
  }

  return (
    <div className="w-full bg-[#F9F9F9] min-h-screen font-sans text-[#111111] antialiased py-10">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* মেইন ২-কলাম গ্রিড লেআউট */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT SIDE: Car Details & Description (8 Columns) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* 1. Header Details Area */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
              <div>
                <h1 className="text-2xl md:text-3xl font-black text-[#111111] tracking-tight">
                  {car.title}
                </h1>
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 uppercase mt-2">
                  <MdLocationOn className="text-[#EF3737] text-sm" />
                  <span>{car.location || "Köln, North Rhine-Westphalia, Germany"}</span>
                </div>
                
                {/* Social Share Badges */}
                <div className="flex items-center gap-2 mt-4 text-xs font-bold text-gray-500 uppercase">
                  <span>Share:</span>
                  <div className="flex items-center gap-1.5">
                    <button className="p-1.5 bg-gray-200 hover:bg-[#EF3737] hover:text-white transition-colors text-gray-600"><FaFacebookF size={12} /></button>
                    <button className="p-1.5 bg-gray-200 hover:bg-[#EF3737] hover:text-white transition-colors text-gray-600"><FaTwitter size={12} /></button>
                    <button className="p-1.5 bg-gray-200 hover:bg-[#EF3737] hover:text-white transition-colors text-gray-600"><FaWhatsapp size={12} /></button>
                    <button className="p-1.5 bg-gray-200 hover:bg-[#EF3737] hover:text-white transition-colors text-gray-600"><FaPinterestP size={12} /></button>
                    <button className="p-1.5 bg-gray-200 hover:bg-[#EF3737] hover:text-white transition-colors text-gray-600"><FaLinkedinIn size={12} /></button>
                  </div>
                </div>
              </div>

              {/* Price Tag Box */}
              <div className="text-left md:text-right flex flex-col md:items-end">
                <span className="text-3xl font-extrabold text-[#EF3737]">
                  ${car.price?.toLocaleString()}
                </span>
                {car.originalPrice && (
                  <span className="text-gray-400 line-through text-sm font-bold">
                    ${car.originalPrice?.toLocaleString()}
                  </span>
                )}
                <div className="flex items-center gap-2 mt-3 text-xs font-bold text-gray-500 uppercase cursor-pointer">
                  <span>Brochure:</span>
                  <FaPrint className="hover:text-[#EF3737]" title="Print" />
                  <FaFilePdf className="text-red-600 text-sm" title="PDF" />
                </div>
              </div>
            </div>

            {/* 2. Main Large Showcase Image */}
            <div className="relative w-full h-[350px] md:h-[480px] bg-white border border-gray-200 overflow-hidden">
              <Image
                src={car.imageUrl || car.image}
                alt={car.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
            </div>

            {/* 3. Specs Counter Quick Blocks */}
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 bg-white border border-gray-200 p-4 text-center">
              <div className="border-r border-gray-100 last:border-none p-1">
                <FaRegClock className="mx-auto text-xl text-gray-400 mb-1" />
                <span className="block text-base font-extrabold text-[#111111]">{car.mileage || "2500"}</span>
                <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Total Kilometres</span>
              </div>
              <div className="border-r border-gray-100 last:border-none p-1">
                <FaCalendarAlt className="mx-auto text-xl text-gray-400 mb-1" />
                <span className="block text-base font-extrabold text-[#111111]">{car.year || "2017"}</span>
                <span className="text-[10px] uppercase font-bold text-red-500 tracking-wider">Reg.Year</span>
              </div>
              <div className="border-r border-gray-100 last:border-none p-1">
                <FaGasPump className="mx-auto text-xl text-gray-400 mb-1" />
                <span className="block text-base font-extrabold text-[#111111]">{car.fuelType || "Petrol"}</span>
                <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Fuel Type</span>
              </div>
              <div className="border-r border-gray-100 last:border-none p-1">
                <FaCog className="mx-auto text-xl text-gray-400 mb-1" />
                <span className="block text-base font-extrabold text-[#111111]">{car.transmission || "Automatic"}</span>
                <span className="text-[10px] uppercase font-bold text-red-500 tracking-wider">Transmission</span>
              </div>
              <div className="border-r border-gray-100 last:border-none p-1">
                <FaCarSide className="mx-auto text-xl text-gray-400 mb-1" />
                <span className="block text-base font-extrabold text-[#111111]">{car.enginePower || "153 KW"}</span>
                <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Engine</span>
              </div>
              <div className="p-1">
                <FaUserFriends className="mx-auto text-xl text-gray-400 mb-1" />
                <span className="block text-base font-extrabold text-[#111111]">{car.seats || "5"}</span>
                <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Seats</span>
              </div>
            </div>

            {/* 4. Figma Style Tabs Component */}
            <div className="border border-gray-200 bg-white">
              <div className="flex flex-wrap border-b border-gray-200 bg-gray-50">
                <button className="bg-[#EF3737] text-white text-xs font-bold px-6 py-4 uppercase tracking-wider">
                  Vehicle Overview
                </button>
                <button className="text-[#111111] hover:bg-gray-100 text-xs font-bold px-6 py-4 uppercase tracking-wider border-r border-gray-200">
                  Technical Specification
                </button>
                <button className="text-[#111111] hover:bg-gray-100 text-xs font-bold px-6 py-4 uppercase tracking-wider border-r border-gray-200">
                  Accessories
                </button>
                <button className="text-[#111111] hover:bg-gray-100 text-xs font-bold px-6 py-4 uppercase tracking-wider">
                  Location
                </button>
              </div>
              
              <div className="p-6 space-y-6 text-gray-600 text-sm leading-relaxed">
                <h3 className="font-bold text-[#111111] text-base">What is Lorem Ipsum?</h3>
                <p>
                  {car.description || 
                    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."}
                </p>
                <h3 className="font-bold text-[#111111] text-base pt-2">What is Lorem Ipsum?</h3>
                <p>
                  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE: Sidebar Widgets (4 Columns) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Widget 1: Fuel Efficiency Rating */}
            <div className="bg-white border border-gray-200 rounded-none overflow-hidden">
              <div className="bg-[#EF3737] text-white p-4 font-bold text-sm uppercase tracking-wider flex items-center gap-2">
                <FaGasPump />
                <span>Fuel Efficiency Rating</span>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-2 gap-4 text-center items-center">
                  <div className="border-r border-gray-200 py-2">
                    <span className="block text-red-500 font-extrabold text-lg">20.4 kmpl</span>
                    <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wide">City</span>
                  </div>
                  <div className="py-2">
                    <span className="block text-red-500 font-extrabold text-lg">20.4 kmpl</span>
                    <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wide">Highway</span>
                  </div>
                </div>
                <p className="text-[11px] font-medium text-gray-400 text-center mt-4 border-t border-gray-100 pt-3">
                  Actual rating will vary with options, driving conditions, driving habits and vehicle condition
                </p>
              </div>
            </div>

            {/* Widget 2: Dealer Contact */}
            <div className="bg-white border border-gray-200 p-6 space-y-4">
              <div className="flex items-center gap-2 border-b border-gray-100 pb-3">
                <MdEmail className="text-[#EF3737] text-lg" />
                <h3 className="font-black text-sm uppercase tracking-wider text-[#111111]">Dealer Contact</h3>
              </div>
              
              <div className="flex items-center gap-3 pt-2">
                <div className="bg-[#EF3737] text-white text-xs font-black p-3 rounded-full w-12 h-12 flex items-center justify-center tracking-tighter">
                  WND
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-[#111111]">ABC Car Dealer Corp.</h4>
                  <p className="text-xs font-medium text-gray-500 mt-0.5">
                    Concord Regional Airport (JQF), 9000 Airport Boulevard Northwest, Concord, North Carolina 28027, United States
                  </p>
                </div>
              </div>

              <div className="text-gray-700 font-extrabold text-sm pt-2">
                1907645220
              </div>

              <button className="cursor-pointer w-full bg-[#EF3737] hover:bg-[#111111] text-white text-xs font-bold py-3.5 uppercase tracking-wider transition-colors duration-300">
                View Profile
              </button>
            </div>

            {/* Widget 3: Financing Calculator */}
            <div className="bg-white border border-gray-200 p-6 space-y-4">
              <div className="flex items-center gap-2 border-b border-gray-100 pb-3">
                <svg className="w-4 h-4 text-[#EF3737]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
                <h3 className="font-black text-sm uppercase tracking-wider text-[#111111]">Financing Calculator</h3>
              </div>
              
              <div className="space-y-3 pt-1">
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-500 mb-1.5">Vehicle Price ($)</label>
                  <input type="text" defaultValue={car.price} className="w-full border border-gray-200 px-3 py-2 text-sm font-semibold outline-none focus:border-gray-400 bg-gray-50" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-500 mb-1.5">Interest Rate (%)</label>
                  <input type="text" defaultValue="5.0" className="w-full border border-gray-200 px-3 py-2 text-sm font-semibold outline-none focus:border-gray-400 bg-gray-50" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-500 mb-1.5">Period (Month)</label>
                  <input type="text" defaultValue="12" className="w-full border border-gray-200 px-3 py-2 text-sm font-semibold outline-none focus:border-gray-400 bg-gray-50" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-500 mb-1.5">Down Payment ($)</label>
                  <input type="text" defaultValue="0" className="w-full border border-gray-200 px-3 py-2 text-sm font-semibold outline-none focus:border-gray-400 bg-gray-50" />
                </div>
              </div>

              <button className="cursor-pointer w-full bg-[#111111] hover:bg-[#EF3737] text-white text-xs font-bold py-3.5 uppercase tracking-wider transition-colors duration-300 mt-2">
                Calculate
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default CarsDetailsPage;