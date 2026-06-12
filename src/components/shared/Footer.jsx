"use client";

import React, { useState } from 'react';
import { 
    FaFacebookF, 
    FaLinkedinIn, 
    FaInstagram, 
    FaPinterestP, 
    FaChevronUp, 
    FaChevronRight 
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { IoLogoApple, IoLogoAndroid } from 'react-icons/io';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [agree, setAgree] = useState(false);

    // Dynamic clean links config blueprint matrices
    const categories = ["Auto Detail", "Car Land", "Car Showrooms", "Motorbikes", "Sell your Car"];
    const aboutUs = ["Privacy", "Hybrid Cars", "Cookies", "Trademarks", "Terms of use"];
    const usefulLinks = ["Our Partners", "Careers", "Sitemap", "Investors", "Request a Quote"];

    const handleSubscribe = (e) => {
        e.preventDefault();
        if(!agree) return alert("Please agree to the terms and conditions");
        console.log("Subscribed:", email);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="w-full bg-[#1f2631] text-[#9bb0c1] font-sans antialiased selection:bg-[#FF2832]">
            
            {/* MAIN COLUMNS CONNECTOR LAYER */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                
                {/* 1. TOP CATEGORIES */}
                <div>
                    <h4 className="text-white font-extrabold text-[15px] uppercase tracking-wider mb-6">
                        Top Categories
                    </h4>
                    <ul className="space-y-4 text-[14px]">
                        {categories.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2 hover:text-white transition-colors duration-200 cursor-pointer group">
                                <FaChevronRight className="text-gray-400 group-hover:text-white text-[10px] transform group-hover:translate-x-1 transition-transform" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* 2. ABOUT US */}
                <div>
                    <h4 className="text-white font-extrabold text-[15px] uppercase tracking-wider mb-6">
                        About Us
                    </h4>
                    <ul className="space-y-4 text-[14px]">
                        {aboutUs.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2 hover:text-white transition-colors duration-200 cursor-pointer group">
                                <FaChevronRight className="text-gray-400 group-hover:text-white text-[10px] transform group-hover:translate-x-1 transition-transform" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* 3. USEFUL LINKS */}
                <div>
                    <h4 className="text-white font-extrabold text-[15px] uppercase tracking-wider mb-6">
                        Useful Links
                    </h4>
                    <ul className="space-y-4 text-[14px]">
                        {usefulLinks.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2 hover:text-white transition-colors duration-200 cursor-pointer group">
                                <FaChevronRight className="text-gray-400 group-hover:text-white text-[10px] transform group-hover:translate-x-1 transition-transform" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* 4. SUBSCRIBE NEWSLETTER */}
                <div>
                    <h4 className="text-white font-extrabold text-[15px] uppercase tracking-wider mb-6">
                        Subscribe Newsletter
                    </h4>
                    <form onSubmit={handleSubscribe} className="flex flex-col gap-4">
                        <input 
                            type="email" 
                            placeholder="Enter Email Address" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full bg-[#dee2e6] text-gray-800 placeholder-gray-500 rounded px-4 py-3 text-[14px] font-medium outline-none border-none focus:ring-2 focus:ring-[#FF2832] transition-shadow"
                        />
                        
                        <label className="flex items-start gap-3 cursor-pointer text-[13px] leading-snug">
                            <input 
                                type="checkbox" 
                                checked={agree}
                                onChange={(e) => setAgree(e.target.checked)}
                                className="mt-1 accent-[#FF2832] h-4 w-4 rounded"
                            />
                            <span className="text-[#e23e3e] font-semibold hover:opacity-90 transition-opacity">
                                I have read and agree to the terms & conditions
                            </span>
                        </label>

                        <button 
                            type="submit"
                            className="w-full bg-[#FF2832] hover:bg-[#d61f28] text-white font-bold uppercase tracking-wider py-3.5 px-6 rounded flex items-center justify-center gap-2 text-[14px] transition-all duration-300 shadow-md transform active:scale-[0.98]"
                        >
                            <span>Subscribe</span>
                            <div className="bg-white text-[#FF2832] rounded-full p-0.5 text-[11px] font-bold">
                                <FaChevronRight />
                            </div>
                        </button>
                    </form>
                    <p className="text-[12px] text-gray-400 mt-4 italic leading-relaxed">
                        *We send great deals and latest auto news to our subscribed users Every week.
                    </p>
                </div>

            </div>

            {/* 🔒 BOTTOM TRADEMARK BAR */}
            <div className="w-full bg-[#11161d] py-6 px-6 md:px-12 border-t border-gray-800 relative">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                    
                    {/* Copyright statement */}
                    <div className="text-[14px] text-gray-400 text-center md:text-left">
                        Copyright © 2026 CarForYou. All Rights Reserved.
                    </div>

                    {/* App Platform & Social Elements Integration Row */}
                    <div className="flex flex-wrap items-center justify-center gap-8 text-[14px]">
                        
                        {/* Download Platform App pointers */}
                        <div className="flex items-center gap-3 border-r border-gray-700 pr-6 hidden sm:flex">
                            <span className="text-gray-400 font-bold uppercase tracking-wide text-[12px]">Download Our APP:</span>
                            <IoLogoApple className="text-white hover:text-[#FF2832] text-[18px] cursor-pointer transition-colors" />
                            <IoLogoAndroid className="text-white hover:text-[#FF2832] text-[18px] cursor-pointer transition-colors" />
                        </div>

                        {/* Social Core Profiles list */}
                        <div className="flex items-center gap-4">
                            <span className="text-gray-400 font-bold uppercase tracking-wide text-[12px] md:inline hidden">Connect with Us:</span>
                            <FaFacebookF className="text-white hover:text-[#FF2832] cursor-pointer transition-colors text-[15px]" />
                            <FaXTwitter className="text-white hover:text-[#FF2832] cursor-pointer transition-colors text-[15px]" />
                            <FaLinkedinIn className="text-white hover:text-[#FF2832] cursor-pointer transition-colors text-[15px]" />
                            <FaInstagram className="text-white hover:text-[#FF2832] cursor-pointer transition-colors text-[15px]" />
                            <FaPinterestP className="text-white hover:text-[#FF2832] cursor-pointer transition-colors text-[15px]" />
                        </div>

                    </div>
                </div>

               

            </div>

        </footer>
    );
};

export default Footer;