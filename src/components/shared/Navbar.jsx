'use client'; 

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation'; 
import logo from "@/assets/logo.png";
import { MdCall, MdMarkEmailUnread } from 'react-icons/md';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaFacebook, FaInstagram, FaLinkedinIn, FaWhatsapp, FaCarSide } from 'react-icons/fa'; 
import { FaXTwitter } from 'react-icons/fa6';
import LoginModal from '@/app/login/page'; 
import RegisterModal from '@/app/register/page'; 
import { authClient } from '@/lib/auth-client';
import { toast } from 'react-toastify';

const RedCarIcon = () => (
    <svg className="w-6 h-6 text-[#FF2832] shrink-0 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 5h-16l1-5zm2 9a2 2 0 100-4 2 2 0 000 4zm10 0a2 2 0 100-4 2 2 0 000 4z" />
    </svg>
);

const Navbar = () => {
    const pathname = usePathname(); 
    const [isOpen, setIsOpen] = useState(false); 
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);

    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    const switchToRegister = () => {
        setIsLoginOpen(false);
        setIsRegisterOpen(true);
    };

    const switchToLogin = () => {
        setIsRegisterOpen(false);
        setIsLoginOpen(true);
    };

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "All Type of Cars", href: "/all-cars" },
        { name: "About Us", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "New Cars", href: "/new-cars" },
        { name: "Old Cars", href: "/old-cars" },
        { name: "Contact Us", href: "/contact-us" },
    ];

    return (
        <>

            <header className="w-full bg-white shadow-sm sticky top-0 md:relative z-50">
                <div className="w-full xl:w-9/12 mx-auto py-4 md:py-5 px-4 md:px-8 lg:px-12 flex items-center justify-between">

                    <Link href="/">
                        <Image src={logo} width={150} height={50} alt="Logo" className="object-contain w-30 md:w-40 lg:w-45" />
                    </Link>
                    

                    <div className="hidden md:flex items-center gap-6 lg:gap-8">

                        <div className="flex items-center gap-2.5"> 
                            <div className="p-2.5 border border-gray-300 rounded-full flex items-center justify-center text-gray-700">
                                <MdMarkEmailUnread className="text-lg" />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="text-[10px] lg:text-[11px] font-bold tracking-wider text-black uppercase">For Support Mail us :</h3>
                                <p className="text-[13px] lg:text-[14px] text-gray-600 font-medium hover:text-red-500 transition-colors">support@dreamcars.com</p>
                            </div>
                        </div>
                        

                        <div className="flex items-center gap-2.5"> 
                            <div className="p-2.5 border border-gray-300 rounded-full flex items-center justify-center text-gray-700">
                                <MdCall className="text-lg" />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="text-[10px] lg:text-[11px] font-bold tracking-wider text-black uppercase">Service Helpline Call Us:</h3>
                                <p className="text-[13px] lg:text-[14px] text-gray-600 font-medium hover:text-red-500 transition-colors">1800-123-4567</p>
                            </div>
                        </div>
                        

                        <div className="hidden lg:flex items-center gap-3.5 text-gray-600 text-base"> 
                            <FaFacebook className="cursor-pointer hover:text-red-500 transition-colors" /> 
                            <FaXTwitter className="cursor-pointer hover:text-red-500 transition-colors" /> 
                            <FaLinkedinIn className="cursor-pointer hover:text-red-500 transition-colors" /> 
                            <FaWhatsapp className="cursor-pointer hover:text-red-500 transition-colors" /> 
                            <FaInstagram className="cursor-pointer hover:text-red-500 transition-colors" /> 
                        </div>
                    </div>
                    

                    <div className="hidden md:flex items-center justify-end min-w-37.5">
                        {isPending ? (
                            <div className="flex items-center gap-2 text-[#FF2832]">
                                <FaCarSide className="text-xl animate-bounce" />
                                <span className="text-xs font-bold tracking-wider uppercase animate-pulse">Loading...</span>
                            </div>
                        ) : user ? (
                            <div className="flex items-center gap-3">
                                <h2 className="text-xs lg:text-sm font-semibold text-black truncate max-w-25">Hello, {user.name}</h2>
                                <Image 
                                    src={user.image || "https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211471.png"} 
                                    width={35} 
                                    height={35} 
                                    alt="User Avatar" 
                                    className="rounded-full object-cover border border-gray-200" 
                                />
                                <button 
                                    onClick={async () => {
                                        await authClient.signOut();
                                        toast.success("Logged out successfully!", { 
                                            position: "top-center",
                                            icon: <RedCarIcon />
                                        });
                                    }}
                                    className="cursor-pointer bg-[#FF2832] hover:bg-red-700 text-white font-bold text-[11px] lg:text-[13px] px-4 lg:px-5 py-2 rounded uppercase tracking-wider transition-colors duration-200" 
                                >
                                    LOGOUT
                                </button>
                            </div>  
                        ) : (
                            <button 
                                onClick={() => setIsLoginOpen(true)}
                                className="cursor-pointer bg-[#FF2832] hover:bg-red-700 text-white font-bold text-[11px] lg:text-[13px] px-4 lg:px-5 py-2 rounded uppercase tracking-wider transition-colors duration-200"
                            >
                                LOGIN / REGISTER
                            </button>
                        )}
                    </div>

  
                    <button 
                        onClick={() => setIsOpen(!isOpen)} 
                        className="md:hidden text-gray-800 text-2xl focus:outline-none cursor-pointer p-1.5 hover:bg-gray-100 rounded transition-colors"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <HiX /> : <HiMenu />}
                    </button>

                </div>
            </header>


            <nav className="w-full bg-black py-4 sticky top-0 hidden md:block z-40 shadow-md">
                <div className="w-full xl:w-9/12 mx-auto px-4 md:px-8 lg:px-12">
                    <ul className="flex items-center gap-6 lg:gap-8 text-white text-[14px] lg:text-[16px] font-semibold tracking-wide"> 
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <li 
                                    key={link.href}
                                    className={`cursor-pointer transition-colors duration-200 ${
                                        isActive ? "text-[#FF2832]" : "text-white hover:text-[#FF2832]" 
                                    }`}
                                >
                                    <Link href={link.href}>{link.name}</Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </nav>


            <div className={`md:hidden fixed inset-y-0 left-0 z-50 w-72 bg-neutral-900 text-white transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out shadow-2xl flex flex-col justify-between`}>
                <div>

                    <div className="p-4 flex items-center justify-between border-b border-neutral-800">
                        <Link href="/" onClick={() => setIsOpen(false)}>
                            <Image src={logo} width={120} height={40} alt="Logo" className="object-contain brightness-0 invert" />
                        </Link>
                        <button onClick={() => setIsOpen(false)} className="text-white text-2xl focus:outline-none cursor-pointer">
                            <HiX />
                        </button>
                    </div>


                    <ul className="flex flex-col p-4 gap-2 text-sm font-medium">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <li key={link.href}>
                                    <Link 
                                        href={link.href}
                                        onClick={() => setIsOpen(false)} 
                                        className={`block py-2.5 px-3 rounded-md transition-colors ${
                                            isActive ? "bg-[#FF2832] text-white font-bold" : "text-gray-300 hover:bg-neutral-800 hover:text-white"
                                        }`}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>


                <div className="p-5 border-t border-neutral-800 bg-neutral-950">
                    {isPending ? (
                        <p className="text-xs text-gray-400 animate-pulse">Loading authorization...</p>
                    ) : user ? (
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-3">
                                <Image src={user.image || "https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211471.png"} width={35} height={35} className="rounded-full border border-neutral-700" alt="User" />
                                <span className="text-sm font-semibold truncate text-gray-200">{user.name}</span>
                            </div>
                            <button 
                                onClick={async () => {
                                    setIsOpen(false);
                                    await authClient.signOut();
                                    toast.success("Logged out successfully!");
                                }} 
                                className="w-full bg-[#FF2832] py-2 rounded font-bold text-xs uppercase tracking-wider text-center cursor-pointer text-white"
                            >
                                LOGOUT
                            </button>
                        </div>
                    ) : (
                        <button 
                            onClick={() => {
                                setIsOpen(false);
                                setIsLoginOpen(true);
                            }} 
                            className="w-full bg-[#FF2832] py-2 rounded font-bold text-xs uppercase tracking-wider text-center cursor-pointer text-white"
                        >
                            LOGIN / REGISTER
                        </button>
                    )}


                    <div className="flex items-center justify-center gap-4 mt-5 text-gray-400 text-base">
                        <FaFacebook className="hover:text-white cursor-pointer" />
                        <FaXTwitter className="hover:text-white cursor-pointer" />
                        <FaLinkedinIn className="hover:text-white cursor-pointer" />
                        <FaWhatsapp className="hover:text-white cursor-pointer" />
                        <FaInstagram className="hover:text-white cursor-pointer" />
                    </div>
                </div>
            </div>


            {isOpen && (
                <div 
                    onClick={() => setIsOpen(false)} 
                    className="fixed inset-0 bg-black/60 z-40 md:hidden backdrop-blur-sm transition-opacity duration-300"
                />
            )}


            <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} onSwitchToRegister={switchToRegister} />
            <RegisterModal isOpen={isRegisterOpen} onClose={() => setIsRegisterOpen(false)} onSwitchToLogin={switchToLogin} />
        </>
    );
};

export default Navbar;