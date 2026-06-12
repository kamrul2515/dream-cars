"use client";

import React, { useState, useRef } from 'react';
import Image from 'next/image';

// Tomar asset folder theke 6-ti image import kora holo
import brand1 from "@/assets/1st.png";
import brand2 from "@/assets/2.png";
import brand3 from "@/assets/3.png";
import brand4 from "@/assets/4.png";
import brand5 from "@/assets/5.png";
import brand6 from "@/assets/6.png";

const Brands = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const dragStartX = useRef(null);
    const isDragging = useRef(false);

    // Video layout match kore 2 ti group e logic data layout map
    const brandGroups = [
        [
            { id: 1, name: "Brand 1", logo: brand1 },
            { id: 2, name: "Brand 2", logo: brand2 },
            { id: 3, name: "Brand 3", logo: brand3 },
            { id: 4, name: "Brand 4", logo: brand4 }
        ],
        [
            { id: 5, name: "Brand 5", logo: brand5 },
            { id: 6, name: "Brand 6", logo: brand6 },
            { id: 7, name: "Brand 1 Duplicate", logo: brand1 }, 
            { id: 8, name: "Brand 2 Duplicate", logo: brand2 }
        ]
    ];

    // 👆 TOUCH & MOUSE DRAGGING EVENTS (TypeScript syntax remove kora hoyeche)
    const handleDragStart = (clientX) => {
        dragStartX.current = clientX;
        isDragging.current = true;
    };

    const handleDragMove = (clientX) => {
        if (!isDragging.current || dragStartX.current === null) return;
        
        const differenceX = dragStartX.current - clientX;
        const swipeThreshold = 50; // Joto pixel tanle slide hobe

        if (differenceX > swipeThreshold) {
            // Right drag -> Next slide
            if (currentSlide < brandGroups.length - 1) {
                setCurrentSlide((prev) => prev + 1);
                handleDragEnd();
            }
        } else if (differenceX < -swipeThreshold) {
            // Left drag -> Previous slide
            if (currentSlide > 0) {
                setCurrentSlide((prev) => prev - 1);
                handleDragEnd();
            }
        }
    };

    const handleDragEnd = () => {
        dragStartX.current = null;
        isDragging.current = false;
    };

    return (
        <div className="w-full bg-[#EEEEEE] py-10 px-4 sm:px-8 md:px-16 border-t border-b border-gray-300 select-none overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
                
                {/* Left Side Section Header Header Copy */}
                <div className="shrink-0 text-center md:text-left border-b-2 md:border-b-0 md:border-r border-gray-300 pb-4 md:pb-0 md:pr-12">
                    <h3 className="text-[#222222] font-black text-[22px] uppercase tracking-wider leading-none">
                        Popular <br className="hidden md:block" /> Brands
                    </h3>
                </div>

                {/* Right Side Carousel Component Container */}
                <div 
                    className="grow w-full relative min-h-22.5 flex flex-col items-center justify-center cursor-grab active:cursor-grabbing"
                    onMouseDown={(e) => handleDragStart(e.clientX)}
                    onMouseMove={(e) => handleDragMove(e.clientX)}
                    onMouseUp={handleDragEnd}
                    onMouseLeave={handleDragEnd}
                    onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
                    onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
                    onTouchEnd={handleDragEnd}
                >
                    <div 
                        className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 items-center justify-items-center"
                        style={{
                            animation: 'videoSlideLeft 0.55s cubic-bezier(0.25, 1, 0.5, 1) forwards'
                        }}
                        key={currentSlide}
                    >
                        {brandGroups[currentSlide].map((brand) => (
                            <div 
                                key={brand.id} 
                                className="relative w-35 h-17.5 transition-all duration-300 transform hover:scale-105 flex items-center justify-center pointer-events-none"
                            >
                                <Image
                                    src={brand.logo}
                                    alt={`${brand.name} Logo`}
                                    fill
                                    sizes="140px"
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        ))}
                    </div>

                    {/* Navigation Active Loop Points Dots */}
                    <div className="flex items-center gap-2 mt-8">
                        {brandGroups.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentSlide(idx)}
                                className={`h-3 rounded-full transition-all duration-300 ${
                                    idx === currentSlide 
                                        ? "w-3 bg-[#FF2832]" 
                                        : "w-3 bg-[#999999] hover:bg-gray-600"
                                }`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>

            </div>

            {/* Slide animation pipeline wrapper style */}
            <style jsx global>{`
                @keyframes videoSlideLeft {
                    0% {
                        opacity: 0.3;
                        transform: translate3d(50px, 0, 0);
                    }
                    100% {
                        opacity: 1;
                        transform: translate3d(0, 0, 0);
                    }
                }
            `}</style>
        </div>
    );
};

export default Brands;