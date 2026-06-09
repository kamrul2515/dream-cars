import React from 'react';
import { FiCalendar } from 'react-icons/fi';
import { IoCarSportOutline } from 'react-icons/io5';
import { HiOutlineUsers } from 'react-icons/hi2';

const Achivments = () => {
    // Figma operational data list templates
    const stats = [
        {
            id: 1,
            icon: <FiCalendar className="text-3xl sm:text-4xl text-white" />,
            count: "40+",
            label: "Years In Business"
        },
        {
            id: 2,
            icon: <IoCarSportOutline className="text-4xl text-white" />,
            count: "1200+",
            label: "New Cars For Sale"
        },
        {
            id: 3,
            icon: <IoCarSportOutline className="text-4xl text-white" />,
            count: "1000+",
            label: "Used Cars For Sale"
        },
        {
            id: 4,
            icon: <HiOutlineUsers className="text-4xl text-white" />,
            count: "6000+",
            label: "Satisfied Customers"
        }
    ];

    return (
        /* Dynamic Road Background Banner Section (Tailwind Inline Style Setup) */
        <div 
            className="relative w-full bg-cover bg-center bg-no-repeat py-20 md:py-28 px-4 md:px-12 overflow-hidden select-none mb-20"
            style={{ 
                backgroundImage: `url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1920')` 
            }}
        >
            {/* Dark background opacity filter layer to match exact image darkening profile */}
            <div className="absolute inset-0 bg-black/80 z-10" />

            {/* Metrics Content Layer aligned parallel to global 9/12 scale boundary */}
            <div className="relative w-9/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 z-20 justify-items-center">
                {stats.map((stat) => (
                    <div 
                        key={stat.id}
                        className="flex flex-col items-center justify-center text-center group"
                    >
                        {/* Figma Iconic Red Solid Rounded Circles */}
                        <div className="w-37.5 h-37.5 sm:w-41.25 sm:h-41.25 rounded-full bg-[#FF2832] flex flex-col items-center justify-center p-4 shadow-xl transition-all duration-300 transform group-hover:scale-105 group-hover:bg-red-700">
                            
                            {/* Dynamically Injected Icon Object */}
                            <div className="mb-1 transition-transform duration-300 group-hover:animate-bounce">
                                {stat.icon}
                            </div>

                            {/* Solid Text Count Parameter */}
                            <h2 className="text-[24px] sm:text-[28px] font-black text-white tracking-tight leading-none">
                                {stat.count}
                            </h2>

                            {/* Informative Grid Label */}
                            <p className="text-[11px] sm:text-[12px] font-bold text-white/90 uppercase tracking-wider mt-1.5 leading-tight max-w-30">
                                {stat.label}
                            </p>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Achivments;