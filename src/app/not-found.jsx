import React from 'react';
import Link from 'next/link'; // Tumi jodi plain React use koro, tahole 'react-router-dom' theke Link nite paro
import { FaArrowRightLong } from 'react-icons/fa6';

const notFound = () => {
    return (
        <div className="min-h-[80vh] w-full bg-white flex flex-col lg:flex-row items-center justify-center px-6 md:px-12 lg:px-24 py-16 gap-12 lg:gap-20 max-w-7xl mx-auto selection:bg-red-200">
            
            {/* Left Side: 404 Road Shape (Pure Tailwind-e Custom Shape create kora hoyeche) */}
            <div className="relative w-[280px] h-[240px] sm:w-[380px] sm:h-[320px] md:w-[450px] md:h-[380px] bg-[#EAEAEA] rounded-[40px] flex items-center justify-center overflow-hidden">
                {/* Top Notch Cutout */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-10 sm:w-14 sm:h-14 bg-white rounded-b-full"></div>
                {/* Bottom Notch Cutout */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-14 sm:w-14 sm:h-20 bg-white rounded-t-full"></div>
                
                {/* Big 404 Text */}
                <h1 className="text-[90px] sm:text-[130px] md:text-[160px] font-black tracking-tighter flex items-center leading-none select-none">
                    <span className="text-[#FF2832]">4</span>
                    <span className="text-[#111111] px-1 sm:px-2">0</span>
                    <span className="text-[#FF2832]">4</span>
                </h1>
            </div>

            {/* Right Side: Text Contents & Action */}
            <div className="flex-1 max-w-xl text-center lg:text-left flex flex-col items-center lg:items-start">
                
                {/* Smiley Face Container */}
                <div className="mb-4 text-gray-300">
                    <svg className="w-16 h-16 sm:w-20 sm:h-20" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round">
                        <circle cx="50" cy="50" r="40" />
                        <circle cx="35" cy="40" r="4" fill="currentColor" />
                        <circle cx="65" cy="40" r="4" fill="currentColor" />
                        <path d="M35 65 Q50 80 65 65" />
                    </svg>
                </div>

                {/* Main Headings */}
                <h2 className="text-[36px] sm:text-[52px] font-bold text-[#111111] leading-tight mb-2">
                    Oops,
                </h2>
                <h3 className="text-[22px] sm:text-[28px] font-light text-[#333333] tracking-wide mb-5">
                    Page Can't be Found
                </h3>

                {/* Description Paragraph */}
                <p className="text-gray-600 text-[14px] sm:text-[15px] leading-relaxed mb-8 font-normal max-w-lg">
                    But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth,
                </p>

                {/* Action Button */}
                <Link href="/">
                    <button className="bg-[#FF2832] hover:bg-red-700 text-white font-bold text-[14px] pl-6 pr-3 py-3 rounded flex items-center gap-4 group transition-all duration-300 shadow-md hover:shadow-lg">
                        <span>Back To Home</span>
                        <div className="w-7 h-7 rounded-full bg-white text-[#FF2832] flex items-center justify-center group-hover:translate-x-1 transition-transform duration-200">
                            <FaArrowRightLong className="text-[12px]" />
                        </div>
                    </button>
                </Link>

            </div>

        </div>
    );
};

export default notFound;