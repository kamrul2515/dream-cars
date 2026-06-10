'use client'; 

import React, { useState } from 'react';
import logo from "@/assets/logo.png";
import Image from 'next/image';
import { MdCall, MdMarkEmailUnread } from 'react-icons/md';
import { FaFacebook, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import LoginModal from '@/app/login/page'; 
import RegisterModal from '@/app/register/page'; // পাথটি আপনার প্রজেক্ট অনুযায়ী চেক করে নেবেন

const Header = () => {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);

    // লগইন থেকে সাইনআপে যাওয়ার ফাংশন
    const switchToRegister = () => {
        setIsLoginOpen(false);
        setIsRegisterOpen(true);
    };

    // সাইনআপ থেকে লগইনে আসার ফাংশন
    const switchToLogin = () => {
        setIsRegisterOpen(false);
        setIsLoginOpen(true);
    };

    return (
        <>
            <div className="w-9/12 mx-auto bg-white py-5 px-4 md:px-12 hidden md:block">
                <div className="flex items-center justify-between gap-4">
                    
                    {/* Logo Section */}
                    <div>
                        <Image src={logo} width={180} height={60} alt="Logo" className="object-contain" />
                    </div>
                    
                    {/* Email Support Section */}
                    <div className="flex items-center gap-3"> 
                        <div className="p-3 border border-gray-400 rounded-full flex items-center justify-center text-gray-700">
                            <MdMarkEmailUnread className="text-xl" />
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-[12px] font-bold tracking-wider text-black uppercase">For Support Mail us :</h3>
                            <p className="text-[14px] text-gray-600 font-medium cursor-pointer hover:text-red-500 transition-colors">support@dreamcars.com</p>
                        </div>
                    </div>
                    
                    {/* Phone Service Section */}
                    <div className="flex items-center gap-3"> 
                        <div className="p-3 border border-gray-400 rounded-full flex items-center justify-center text-gray-700">
                            <MdCall className="text-xl" />
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-[12px] font-bold tracking-wider text-black uppercase">Service Helpline Call Us:</h3>
                            <p className="text-[14px] text-gray-600 font-medium cursor-pointer hover:text-red-500 transition-colors">1800-123-4567</p>
                        </div>
                    </div>
                    
                    {/* Social Media Icons */}
                    <div className="flex items-center gap-4 text-gray-700 text-lg"> 
                        <FaFacebook className="cursor-pointer hover:text-red-500 transition-colors" /> 
                        <FaXTwitter className="cursor-pointer hover:text-red-500 transition-colors" /> 
                        <FaLinkedinIn className="cursor-pointer hover:text-red-500 transition-colors" /> 
                        <FaWhatsapp className="cursor-pointer hover:text-red-500 transition-colors" /> 
                        <FaInstagram className="cursor-pointer hover:text-red-500 transition-colors" /> 
                    </div>
                    
                    {/* Login / Register Button Section */}
                    <div>
                        <button 
                            onClick={() => setIsLoginOpen(true)}
                            className="bg-[#FF2832] hover:bg-red-700 text-white font-bold text-[13px] px-6 py-2.5 rounded uppercase tracking-wider transition-colors duration-200"
                        >
                            LOGIN / REGISTER
                        </button>
                    </div>
                    
                </div>
            </div>

            {/* Login Modal */}
            <LoginModal 
                isOpen={isLoginOpen} 
                onClose={() => setIsLoginOpen(false)} 
                onSwitchToRegister={switchToRegister}
            />

            {/* Register Modal */}
            <RegisterModal 
                isOpen={isRegisterOpen} 
                onClose={() => setIsRegisterOpen(false)} 
                onSwitchToLogin={switchToLogin}
            />
        </>
    );
};

export default Header;