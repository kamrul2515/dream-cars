"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import car1 from "@/assets/car1.jpg"; 
import car2 from "@/assets/car2.jpg";

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMounted, setIsMounted] = useState(false); 

    const slides = [
        {
            id: 1,
            image: car1,
            title: "FIND THE RIGHT CAR FOR YOU",
            subtitle: "We have more than a thousand cars for you to choose."
        },
        {
            id: 2,
            image: car2,
            title: "PERFECT CAR FOR YOU",
            subtitle: "We have more than a thousand cars for you to choose."
        }
    ];

    useEffect(() => {
        setIsMounted(true);
    }, []);


    useEffect(() => {
        if (!isMounted) return;
        const slideInterval = setInterval(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 5000);
        
        return () => clearInterval(slideInterval);
    }, [isMounted, slides.length]);

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };


    if (!isMounted) {
        return <div className="w-full h-112.5 sm:h-150 md:h-170 lg:h-180 bg-gray-900 animate-pulse" />;
    }

    return (
        <div className="relative w-full h-112.5 sm:h-150 md:h-170 lg:h-180 bg-gray-900 overflow-hidden">
            
            {slides.map((slide, index) => {
                const isActive = index === currentSlide;
                return (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                            isActive ? "opacity-100 z-10" : "opacity-0 z-0"
                        }`}
                    >
\
                        <div className="absolute inset-0 bg-black/35 z-20" />
                        
\
                        <Image
                            src={slide.image}
                            alt={slide.title}
                            fill
                            priority={index === 0}
                            sizes="100vw"
                            className="object-cover object-center w-full h-full"
                        />


                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-30 px-6">
                            <h1 className="text-[32px] sm:text-[50px] md:text-[64px] font-black tracking-wide uppercase drop-shadow-md select-none max-w-5xl leading-tight">
                                {slide.title}
                            </h1>
                            <p className="text-[15px] sm:text-[19px] md:text-[22px] font-normal tracking-wide mt-3 sm:mt-4 mb-8 sm:mb-10 drop-shadow-sm select-none opacity-95">
                                {slide.subtitle}
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
            })}

            {/* Left Controller Arrow */}
            <button
                onClick={handlePrev}
                className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 border border-white/60 hover:border-white bg-black/10 hover:bg-black/40 text-white flex items-center justify-center rounded transition-all duration-200 z-40 active:scale-95 group cursor-pointer"
            >
                <IoIosArrowBack className="text-xl sm:text-2xl group-hover:-translate-x-0.5 transition-transform" />
            </button>

            {/* Right Controller Arrow */}
            <button
                onClick={handleNext}
                className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 border border-white/60 hover:border-white bg-black/10 hover:bg-black/40 text-white flex items-center justify-center rounded transition-all duration-200 z-40 active:scale-95 group cursor-pointer"
            >
                <IoIosArrowForward className="text-xl sm:text-2xl group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* Bottom Slider Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-40">
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`h-2 transition-all duration-300 rounded-full cursor-pointer ${
                            idx === currentSlide ? "w-7 bg-[#FF2832]" : "w-2 bg-white/50 hover:bg-white"
                        }`}
                    />
                ))}
            </div>

        </div>
    );
};

export default Banner;