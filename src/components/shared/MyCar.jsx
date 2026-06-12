'use client'; 

import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; 
import { IoCheckmarkCircleSharp } from 'react-icons/io5';

import car3 from "@/assets/car3.png";

const MyCar = () => {
    const features = [
        "Fast and easy",
        "Transparent inspection",
        "Immediate offer",
        "Hassle free paperwork",
        "Secure payment transactions"
    ];

    return (
        <div className="w-full bg-white py-16 md:py-24 px-4 md:px-12 select-none">
            <div className="w-9/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
                
                {/* Left Side: Product Image Display */}
                <div className="w-full flex justify-center order-2 lg:order-1">
                    <div className="relative w-full max-w-135 h-75 sm:h-95 md:h-105 transition-transform duration-500 hover:scale-[1.02]">
                        <Image
                            src={car3}
                            alt="Why choose Cash My Car"
                            fill
                            className="object-contain object-center"
                            priority
                        />
                    </div>
                </div>

                {/* Right Side: Informative Core Copy Content */}
                <div className="flex flex-col order-1 lg:order-2">
                    <h2 className="text-[28px] sm:text-[36px] font-black text-[#111111] tracking-wide mb-2 leading-tight">
                        Why choose Cash My Car?
                    </h2>
                    <h4 className="text-[14px] sm:text-[15px] font-medium text-gray-500 tracking-wide mb-5">
                        How do we compare with other ways to sell?
                    </h4>
                    
                    <p className="text-gray-500 font-normal text-[14px] sm:text-[15px] leading-relaxed mb-6 text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit voluptatem velit dolore fugiat nulla pariatur excepteur sint occaecat cupidatat.
                    </p>

                    <ul className="flex flex-col gap-3.5 mb-8">
                        {features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-3 text-[#111111] font-semibold text-[14px] sm:text-[15px] tracking-wide">
                                <IoCheckmarkCircleSharp className="text-[#28a745] text-xl shrink-0" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>

                    <div>
                        <Link href="/contact-us">
                            <button className="bg-[#FF2832] hover:bg-red-700 text-white font-bold text-[13px] sm:text-[14px] px-8 py-3.5 rounded uppercase tracking-wider transition-all duration-300 shadow-md transform active:scale-95 inline-block">
                                Book a free Inspection
                            </button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MyCar;