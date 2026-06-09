import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: "Contact Us",
};

const ContactUs = () => {
    return (
        <div className="w-full min-h-screen bg-white font-sans text-gray-900 antialiased selection:bg-[#FF2832] selection:text-white">
            
            {/* 🖼️ TOP HERO BANNER: Contact Page Traffic Background Element */}
            <div 
                className="w-full bg-cover bg-center bg-no-repeat relative py-16 md:py-24 flex items-center justify-center text-center"
                style={{ 
                    backgroundImage: `url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1920')` 
                }}
            >
                <div className="absolute inset-0 bg-black/60 backdrop-blur-[0.5px]"></div>
                
                <div className="relative z-10 text-white flex flex-col gap-2">
                    <h1 className="text-[36px] md:text-[46px] font-black tracking-tight leading-none drop-shadow-md">
                        Contact Us
                    </h1>
                    <div className="flex items-center justify-center gap-2 text-[14px] font-semibold text-gray-300">
                        <Link href="/" className="hover:text-[#FF2832] cursor-pointer transition-colors duration-200">
                            Home
                        </Link>
                        <span className="text-gray-500 font-normal"></span>
                        <span className="text-white">Contact Us</span>
                    </div>
                </div>
            </div>

            {/* 🗺️ CONTENT ZONE & STRUCTURAL GRID BLOCK */}
            <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                
                {/* 📝 LEFT COLUMN: Interactive Dynamic Form Element Handler */}
                <div className="w-full lg:col-span-7 bg-[#f9f9f9] border border-gray-100 p-6 sm:p-10 rounded-md shadow-sm">
                    <h2 className="text-[#111111] font-bold text-[22px] md:text-[26px] tracking-tight mb-8">
                        Get in touch using the form below
                    </h2>

                    <form className="w-full flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <label className="text-[14px] font-semibold text-gray-700">Full Name <span className="text-[#FF2832]">*</span></label>
                            <input 
                                type="text" 
                                required 
                                className="w-full px-4 py-3 border border-gray-200 bg-white text-[14px] rounded focus:outline-none focus:border-gray-400 transition-colors duration-200"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-[14px] font-semibold text-gray-700">Email Address <span className="text-[#FF2832]">*</span></label>
                            <input 
                                type="email" 
                                required 
                                className="w-full px-4 py-3 border border-gray-200 bg-white text-[14px] rounded focus:outline-none focus:border-gray-400 transition-colors duration-200"
                            />
                        </div>

                        {/* 📞 REFERENCE VISUAL COMPONENT: Phone Number Input Added */}
                        <div className="flex flex-col gap-2">
                            <label className="text-[14px] font-semibold text-gray-700">Phone Number <span className="text-[#FF2832]">*</span></label>
                            <input 
                                type="tel" 
                                required 
                                className="w-full px-4 py-3 border border-gray-200 bg-white text-[14px] rounded focus:outline-none focus:border-gray-400 transition-colors duration-200"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-[14px] font-semibold text-gray-700">Message <span className="text-[#FF2832]">*</span></label>
                            <textarea 
                                rows="5" 
                                required 
                                className="w-full px-4 py-3 border border-gray-200 bg-white text-[14px] rounded focus:outline-none focus:border-gray-400 resize-none transition-colors duration-200"
                            ></textarea>
                        </div>

                        {/* 🔒 REFERENCE VISUAL COMPONENT: Data Privacy Consent Checkbox */}
                        <div className="flex items-start gap-2.5 max-w-xl mt-2">
                            <input 
                                type="checkbox" 
                                id="consent"
                                required
                                className="mt-1 accent-[#FF2832] h-4 w-4 rounded cursor-pointer"
                            />
                            <label htmlFor="consent" className="text-[13px] text-gray-600 leading-relaxed cursor-pointer select-none">
                                Check here to consent to this website storing my information so they can respond.
                            </label>
                        </div>

                        {/* 🤖 REFERENCE VISUAL COMPONENT: Mock Functional Google ReCAPTCHA Layout */}
                        <div className="bg-white border border-gray-200 rounded p-3 flex items-center justify-between w-full max-w-[300px] shadow-sm mt-2 select-none">
                            <div className="flex items-center gap-3">
                                <input 
                                    type="checkbox" 
                                    id="recaptcha" 
                                    required
                                    className="h-6 w-6 border-2 border-gray-300 rounded-sm checked:bg-green-500 checked:border-green-500 focus:ring-0 cursor-pointer accent-green-600"
                                />
                                <label htmlFor="recaptcha" className="text-[13px] font-medium text-gray-700 cursor-pointer">I&apos;m not a robot</label>
                            </div>
                            <div className="flex flex-col items-center justify-center text-center pr-1">
                                <div className="text-[20px] text-blue-500 font-bold leading-none animate-spin-slow">🔄</div>
                                <span className="text-[9px] text-gray-400 mt-1 uppercase font-bold tracking-tight">reCAPTCHA</span>
                            </div>
                        </div>

                        <button 
                            type="submit" 
                            className="bg-[#ED666B] text-white hover:bg-[#e0565b] font-semibold text-[14px] py-3 px-6 rounded mt-2 self-start transition-all duration-300 shadow-sm"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                {/* 🏢 RIGHT COLUMN: Custom Address Grid & Live Google Map */}
                <div className="w-full lg:col-span-5 flex flex-col gap-8">
                    
                    {/* Information Matrix Card Area */}
                    <div className="bg-white p-2 rounded-sm flex flex-col gap-6">
                        <h3 className="text-[#111111] font-bold text-[22px] md:text-[24px] tracking-tight">
                            Contact Info
                        </h3>
                        
                        <div className="flex flex-col gap-5 text-[14px] text-gray-600">
                            <div className="flex items-center gap-4">
                                <div className="bg-gray-100 p-3 rounded-full text-gray-700 font-semibold text-[16px] w-11 h-11 flex items-center justify-center">📍</div>
                                <p className="leading-snug flex-1">PO Box 1025MNO Collins Street West Victoria 8007 Australia</p>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="bg-gray-100 p-3 rounded-full text-gray-700 font-semibold text-[16px] w-11 h-11 flex items-center justify-center">📞</div>
                                <p className="font-medium flex-1">+61-123-456-789</p>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="bg-gray-100 p-3 rounded-full text-gray-700 font-semibold text-[16px] w-11 h-11 flex items-center justify-center">✉️</div>
                                <p className="hover:text-[#FF2832] transition-colors duration-200 cursor-pointer flex-1">contact@exampleurl.com</p>
                            </div>
                        </div>
                    </div>

                    {/* 📍 Google Maps iframe wrapper container element */}
                    <div className="w-full aspect-square relative rounded overflow-hidden shadow-sm border border-gray-200">
                        <iframe 
                            className="absolute inset-0 w-full h-full"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10000!2d-122.4194155!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d006b6b43%3A0xa1f7f502df7d70c!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1"
                            title="Office Location Map Viewport"
                            frameBorder="0"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default ContactUs;