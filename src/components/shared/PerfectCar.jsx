"use client"; 

import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { IoCarSportOutline, IoDocumentTextOutline } from 'react-icons/io5';
import { MdOutlineThumbUp } from 'react-icons/md';

const PerfectCar = () => {
    // Dynamic grid content array for "How it Work"
    const steps = [
        {
            id: 1,
            icon: <FiSearch className="text-4xl text-[#FF2832]" />,
            title: "Search Our Inventory",
            desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium"
        },
        {
            id: 2,
            icon: <IoCarSportOutline className="text-4xl text-[#FF2832]" />,
            title: "Choose The Car You Like",
            desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium"
        },
        {
            id: 3,
            icon: <IoDocumentTextOutline className="text-4xl text-[#FF2832]" />,
            title: "Apply For Auto Finance",
            desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium"
        },
        {
            id: 4,
            icon: <MdOutlineThumbUp className="text-4xl text-[#FF2832]" />,
            title: "Get Approved & Drive",
            desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium"
        }
    ];

    return (
        <div className="relative w-full bg-white py-20 px-4 md:px-12 select-none">
            
            {/* Header Content Wrapper (Width matches 9/12 to maintain structure alignment) */}
            <div className="w-9/12 mx-auto text-center mb-16">
                <h2 className="text-[32px] sm:text-[38px] font-black text-[#111111] tracking-wide mb-3">
                    How it Work
                </h2>
                <p className="text-gray-500 font-normal text-[15px] sm:text-[16px] max-w-3xl mx-auto leading-relaxed">
                    Helps you to find perfect car. But I must explain to you how all this mistaken
                </p>
            </div>

            {/* Steps Content Grid Map Layout */}
            <div className="w-9/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                {steps.map((step) => (
                    <div 
                        key={step.id} 
                        className="flex flex-col items-center text-center group transition-transform duration-300 hover:-translate-y-1"
                    >
                        {/* Outlined Dynamic Icon Box */}
                        <div className="w-20 h-20 rounded-full border-2 border-dashed border-gray-200 group-hover:border-[#FF2832] flex items-center justify-center p-4 bg-white shadow-sm transition-colors duration-300 mb-6">
                            {step.icon}
                        </div>

                        {/* Step Cards Title Descriptions */}
                        <h3 className="text-[18px] font-bold text-[#111111] mb-3 tracking-wide group-hover:text-[#FF2832] transition-colors duration-200">
                            {step.title}
                        </h3>
                        <p className="text-gray-500 font-normal text-[14px] leading-relaxed max-w-65">
                            {step.desc}
                        </p>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default PerfectCar;