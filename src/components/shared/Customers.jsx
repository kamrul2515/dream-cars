"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const Customers = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const testimonials = [
        [
            {
                id: 1,
                name: "Donald Brooks",
                role: "Founder CPU",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
                text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt"
            },
            {
                id: 2,
                name: "Stephanie De",
                role: "Director of Law Firm",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
                text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt"
            }
        ],
        [
            {
                id: 3,
                name: "Enzo Giovanotelli",
                role: "Founder of GFO",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150",
                text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt"
            },
            {
                id: 4,
                name: "Samuel Brooks",
                role: "Founder ABC",
                image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150",
                text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt"
            }
        ]
    ];

    return (
        <div className="relative w-full py-20 px-4 md:px-12 overflow-hidden select-none min-h-[600px] flex flex-col justify-center bg-gray-950">
            
            {/* 🏎️ NEXT.JS IMAGE LAYER WITH PANNING ANIMATION */}
            <div 
                className="absolute inset-0 z-0 animate-slow-pan pointer-events-none"
                style={{ width: '125%' }}
            >
                <Image
                    src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1920"
                    alt="Satisfied Customers Background"
                    fill
                    priority
                    sizes="125vw"
                    className="object-cover object-center w-full h-full"
                />
            </div>
            
            {/* Dark Overlay Tint (Figma/Video Filter Matching) */}
            <div className="absolute inset-0 bg-black/85 z-10" />

            {/* Core Content Container */}
            <div className="relative w-9/12 mx-auto z-20 text-white flex flex-col items-center">
                
                {/* Section Headings block */}
                <div className="text-center mb-12 max-w-4xl">
                    <h2 className="text-[32px] sm:text-[38px] font-black text-white tracking-wide mb-4">
                        Our Satisfied Customers
                    </h2>
                    <p className="text-gray-400 font-normal text-[14px] sm:text-[15px] leading-relaxed">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                    </p>
                </div>

                {/* Testimonial Active Grid Component */}
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-65">
                    {testimonials[currentSlide].map((item) => (
                        <div 
                            key={item.id} 
                            className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 md:p-8 rounded-xl flex flex-col sm:flex-row gap-6 items-center sm:items-start transition-all duration-500 hover:border-white/20"
                        >
                            {/* Profile Image Wrap: Using Next.js Image Component */}
                            <div className="relative w-27.5 h-27.5 rounded-full border-4 border-white/20 overflow-hidden flex-shrink-0 shadow-lg bg-gray-800">
                                <Image 
                                    src={item.image} 
                                    alt={item.name} 
                                    fill
                                    sizes="110px"
                                    className="object-cover"
                                />
                            </div>

                            {/* Details Paragraph Typography */}
                            <div className="flex flex-col text-center sm:text-left">
                                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2 mb-1.5">
                                    <h3 className="text-[18px] font-extrabold text-white tracking-wide">{item.name}</h3>
                                    <span className="text-[12px] font-medium text-gray-400 uppercase tracking-wider">({item.role})</span>
                                </div>
                                <p className="text-gray-300 font-normal text-[13.5px] leading-relaxed text-justify">
                                    "{item.text}"
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Sliders Points Dots */}
                <div className="flex items-center gap-2 mt-10">
                    {testimonials.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentSlide(idx)}
                            className={`h-2.5 transition-all duration-300 rounded-full ${
                                idx === currentSlide ? "w-8 bg-[#FF2832]" : "w-2.5 bg-white/40 hover:bg-white/70"
                            }`}
                        />
                    ))}
                </div>

            </div>

            {/* Pure Performance Hardware-Accelerated Sliding CSS Keyframe */}
            <style jsx global>{`
                @keyframes slowPanImage {
                    0% {
                        transform: translate3d(0, 0, 0);
                    }
                    50% {
                        transform: translate3d(-10%, 0, 0);
                    }
                    100% {
                        transform: translate3d(0, 0, 0);
                    }
                }
                .animate-slow-pan {
                    animation: slowPanImage 32s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
};

export default Customers;