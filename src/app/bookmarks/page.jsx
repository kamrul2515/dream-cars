import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: "Bookmarks",
};

const BookmarksPage = () => {
    return (
        <div className="w-full min-h-[70vh] bg-white font-sans text-gray-900 antialiased selection:bg-[#FF2832] selection:text-white">
            
            {/* 🖼️ TOP HERO BANNER: Dynamic Background With Dark Translucent Overlay Filter */}
            <div 
                className="w-full bg-cover bg-center bg-no-repeat relative py-16 md:py-20 flex items-center justify-center text-center"
                style={{ 
                    backgroundImage: `url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1920')` 
                }}
            >
                {/* Dark Mask for Better Text Contrast Visibility Copy From Image */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>
                
                {/* Banner Content Layout Grid */}
                <div className="relative z-10 text-white flex flex-col gap-2">
                    <h1 className="text-[32px] md:text-[42px] font-black tracking-tight leading-none drop-shadow-md">
                        Bookmarks
                    </h1>
                    <div className="flex items-center justify-center gap-2 text-[14px] font-semibold text-gray-300">
                        <span className="hover:text-[#FF2832] cursor-pointer transition-colors duration-200"><Link href="/">Home</Link></span>
                        <span className="text-gray-500 font-normal">&gt;</span>
                        <span className="text-white">Bookmarks</span>
                    </div>
                </div>
            </div>

            {/* 🚫 EMPTY STATE MANIPULATION GRID: Exact Video Layout Matching */}
            <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 py-20 flex flex-col justify-start items-start">
                
                {/* Underlined Sub Header Area Profile */}
                <h2 className="text-[#111111] font-black text-[16px] md:text-[18px] uppercase tracking-wider border-b-2 border-gray-900 pb-2 mb-6">
                    Your Bookmarked Vehicles
                </h2>

                {/* Main Error Warning Wrapper Content Blocks */}
                <div className="flex flex-col gap-3">
                    <h3 className="text-[#D33F49] font-black text-[28px] md:text-[34px] tracking-tight leading-none">
                        Sorry
                    </h3>
                    <p className="text-[#222222] font-black text-[18px] md:text-[22px] tracking-tight">
                        You didn't have any vehicle as bookmarks
                    </p>
                </div>

            </div>

        </div>
    );
};

export default BookmarksPage;