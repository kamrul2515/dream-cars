"use client"; 

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; 

const Navbar = () => {
    const pathname = usePathname(); 

    
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
        
        <div className="w-full bg-black py-5 hidden md:block">
            
            <div className="w-9/12 mx-auto px-4 md:px-12">
                <ul className="flex items-center gap-8 text-white text-[16px] font-semibold tracking-wide"> 
                    {navLinks.map((link) => {
                       
                        const isActive = pathname === link.href;

                        return (
                            <li 
                                key={link.href}
                                className={`cursor-pointer transition-colors duration-200 ${
                                    isActive 
                                        ? "text-[#FF2832]" 
                                        : "text-white hover:text-[#FF2832]" 
                                }`}
                            >
                                <Link href={link.href}>{link.name}</Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;