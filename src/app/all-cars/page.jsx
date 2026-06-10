import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: "All Type Of Cars",
};

const AllCars = () => {
  return (
    <div className="w-full bg-[#F9F9F9] min-h-screen font-sans">
      
      {/* 1. Header/Banner Section with Background Overlay */}
      <div 
        className="relative w-full h-[250px] md:h-[300px] bg-cover bg-center flex flex-col justify-center items-center text-white"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200')` 
        }} // এখানে আপনার প্রজেক্টের সঠিক ব্যাকগ্রাউন্ড ইমেজ পাথটি বসিয়ে দিবেন
      >
        {/* Dark Overlay to match Figma */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-bold tracking-wide mb-3">
            All Type Of Cars
          </h1>
          <div className="flex items-center justify-center gap-2 text-sm md:text-base font-medium">
            <Link href="/" className="hover:text-red-500 transition-colors">
              Home
            </Link>
            <span className="text-gray-400 font-bold">&gt;</span>
            <span className="text-gray-300">All Type Of Cars</span>
          </div>
        </div>
      </div>

      {/* 2. Filter & Utility Toolbar Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
          
          {/* Left Side: Listings Count & Main Sorting Container */}
          <div className="lg:col-span-3 flex flex-wrap items-center justify-between bg-white border border-gray-200 rounded p-4 shadow-sm gap-4">
            
            {/* Listings Found Badge */}
            <div className="flex items-center gap-2">
              <span className="bg-[#EF3737] text-white text-sm font-bold px-3 py-1.5 rounded">
                16
              </span>
              <span className="text-gray-500 font-medium text-sm md:text-base">
                Listings Found
              </span>
            </div>

            {/* Dropdowns & Grid/List View Toggle */}
            <div className="flex flex-wrap items-center gap-4">
              {/* Sort By */}
              <div className="flex items-center gap-2">
                <span className="text-gray-600 text-sm font-semibold">Sort by:</span>
                <select className="border border-gray-300 rounded px-3 py-1.5 bg-white text-sm text-gray-700 outline-none cursor-pointer focus:border-gray-500 min-w-[120px]">
                  <option>A-Z</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>

              {/* Items Per Page */}
              <select className="border border-gray-300 rounded px-3 py-1.5 bg-white text-sm text-gray-700 outline-none cursor-pointer focus:border-gray-500">
                <option>9 Autos</option>
                <option>18 Autos</option>
                <option>27 Autos</option>
              </select>

              {/* View Layout Controls (Grid / List) */}
              <div className="flex items-center border border-gray-300 rounded overflow-hidden">
                {/* Grid View Button (Active) */}
                <button className="p-2 bg-gray-100 border-r border-gray-300 text-gray-700 hover:bg-gray-200 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 4h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zM4 10h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zM4 16h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4z"/>
                  </svg>
                </button>
                {/* List View Button */}
                <button className="p-2 bg-white text-red-500 hover:bg-gray-50 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
                  </svg>
                </button>
              </div>
            </div>

          </div>

          {/* Right Side: Find Your Dream Car Sidebar Toggle */}
          <div className="lg:col-span-1">
            <button className="w-full flex items-center justify-between bg-white border border-gray-200 rounded p-4 shadow-sm hover:shadow-md transition-shadow font-bold text-[#111111] text-sm md:text-base group">
              <div className="flex items-center gap-3">
                {/* Funnel/Filter Icon */}
                <svg className="w-5 h-5 text-[#EF3737]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/>
                </svg>
                <span>Find Your Dream Car</span>
              </div>
              {/* Plus Sign */}
              <span className="text-xl font-light text-gray-500 group-hover:text-black transition-colors">
                +
              </span>
            </button>
          </div>

        </div>
        

        {/* --- CAR LISTINGS CONTAINER PLACEHOLDER --- */}
        <div className="mt-8 text-center text-gray-400 border-2 border-dashed border-gray-200 rounded-lg py-20 bg-white">
          Car Cards/Listings Section Will Go Here
        </div>

      </div>
    </div>
  );
};

export default AllCars;