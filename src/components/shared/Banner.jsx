"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import car1 from "@/assets/car1.jpg"; 

const Banner = () => {
    const [isMounted, setIsMounted] = useState(false); 

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return <div className="w-full h-112.5 sm:h-150 md:h-170 lg:h-180 bg-gray-900 animate-pulse" />;
    }

    return (
        <div className="relative w-full h-112.5 sm:h-150 md:h-170 lg:h-180 bg-gray-900 overflow-hidden">
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/35 z-20" />
            
            {/* Background Image */}
            <Image
                src={car1}
                alt="FIND THE RIGHT CAR FOR YOU"
                fill
                priority
                sizes="100vw"
                className="object-cover object-center w-full h-full"
            />

            {/* Static Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-30 px-6">
                <h1 className="text-[32px] sm:text-[50px] md:text-[64px] font-black tracking-wide uppercase drop-shadow-md select-none max-w-5xl leading-tight">
                    FIND THE RIGHT CAR FOR YOU
                </h1>
                <p className="text-[15px] sm:text-[19px] md:text-[22px] font-normal tracking-wide mt-3 sm:mt-4 mb-8 sm:mb-10 drop-shadow-sm select-none opacity-95">
                    We have more than a thousand cars for you to choose.
                </p>
                
                <button 
                    suppressHydrationWarning
                    className="bg-[#FF2832] hover:bg-red-700 text-white font-bold text-[13px] sm:text-[14px] px-8 py-3.5 rounded flex items-center cursor-pointer gap-2 uppercase tracking-wider transition-all duration-300 shadow-md transform hover:scale-105"
                >
                    Read More <span className="text-[11px] sm:text-[12px] font-bold">➔</span>
                </button>
            </div>

        </div>
    );
};

export default Banner;