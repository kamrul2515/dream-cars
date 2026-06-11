'use client'; 

import React, { useState } from 'react';
import logo from "@/assets/logo.png";
import Image from 'next/image';
import { MdCall, MdMarkEmailUnread } from 'react-icons/md';
import { FaFacebook, FaInstagram, FaLinkedinIn, FaWhatsapp, FaCarSide } from 'react-icons/fa'; 
import { FaXTwitter } from 'react-icons/fa6';
import LoginModal from '@/app/login/page'; 
import RegisterModal from '@/app/register/page'; 
import { authClient } from '@/lib/auth-client';
import { toast } from 'react-toastify';

// 👈 লগআউট এবং লোডিং এর জন্য লাল কার আইকন কম্পোনেন্ট
const RedCarIcon = () => (
    <svg className="w-6 h-6 text-[#FF2832] flex-shrink-0 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 5h-16l1-5zm2 9a2 2 0 100-4 2 2 0 000 4zm10 0a2 2 0 100-4 2 2 0 000 4z" />
    </svg>
);

const Header = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    console.log("Current Session:", user);
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);

    // লগইন থেকে সাইনআপে যাওয়ার ফাংশন
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
                    <div className="min-w-[150px] flex justify-end">
                        {isPending ? (
                            <div className="flex items-center gap-2 text-[#FF2832]">
                                <FaCarSide className="text-2xl animate-bounce" />
                                <span className="text-xs font-bold tracking-wider uppercase animate-pulse">Loading...</span>
                            </div>
                        ) : user ? (
                            <div className="flex items-center gap-3">
                                <h2 className="text-sm font-semibold text-black">Hello, {user.name}</h2>
                                <Image 
                                    src={user.image || "https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211471.png"} 
                                    width={40} 
                                    height={40} 
                                    alt="User Avatar" 
                                    className="rounded-full object-cover border border-gray-200" 
                                />
                                <button 
                                    onClick={async () => {
                                        await authClient.signOut();
                                        // 👈 এখানে কাস্টম লাল কার আইকন এবং পজিশন যুক্ত করা হয়েছে
                                        toast.success("Logged out successfully!", { 
                                            position: "top-center",
                                            icon: <RedCarIcon />
                                        });
                                    }}
                                    className="cursor-pointer bg-[#FF2832] hover:bg-red-700 text-white font-bold text-[13px] px-6 py-2.5 rounded uppercase tracking-wider transition-colors duration-200" 
                                >
                                    LOGOUT
                                </button>
                            </div>  
                        ) : (
                            <div>
                                <button 
                                    onClick={() => setIsLoginOpen(true)}
                                    className="cursor-pointer bg-[#FF2832] hover:bg-red-700 text-white font-bold text-[13px] px-6 py-2.5 rounded uppercase tracking-wider transition-colors duration-200"
                                >
                                    LOGIN / REGISTER
                                </button>
                            </div>
                        )}
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