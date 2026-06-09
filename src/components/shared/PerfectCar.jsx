"use client"; // Scroll triggers aar window events thakar jonno dynamic client active thakbe

import React, { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import { IoCarSportOutline, IoDocumentTextOutline, IoChevronUpOutline } from 'react-icons/io5';
import { MdOutlineThumbUp } from 'react-icons/md';

const PerfectCar = () => {
    const [showScrollBtn, setShowScrollBtn] = useState(false);

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

    // Scroll event trigger detect korar jonno effect handler
    useEffect(() => {
        const handleScrollButtonVisibility = () => {
            if (window.scrollY > 300) {
                setShowScrollBtn(true);
            } else {
                setShowScrollBtn(false);
            }
        };

        window.addEventListener('scroll', handleScrollButtonVisibility);
        return () => window.removeEventListener('scroll', handleScrollButtonVisibility);
    }, []);

    // Smooth Scroll To Top function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

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

            {/* Sticky Floating Scroll-To-Top Button (Figma Bottom Red Indicator Style) */}
            <button
                onClick={scrollToTop}
                className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 w-11 h-11 bg-[#FF2832] hover:bg-red-700 text-white rounded shadow-lg flex items-center justify-center transition-all duration-500 transform z-50 hover:scale-110 active:scale-95 ${
                    showScrollBtn ? "opacity-100 translate-y-0 visible" : "opacity-0 translate-y-4 invisible"
                }`}
                title="Scroll to top"
            >
                <IoChevronUpOutline className="text-2xl font-bold animate-pulse" />
            </button>

        </div>
    );
};

export default PerfectCar;