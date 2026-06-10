import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: "About Us",
};

// 🌟 Dynamic content mapping list matching the newly uploaded grid data layout structure
const missionFeatures = [
    {
        id: 1,
        boldTitle: "Who",
        lightTitle: "Are We",
        imageUrl: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=300&h=300",
        description: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment."
    },
    {
        id: 2,
        boldTitle: "Our",
        lightTitle: "Mission",
        imageUrl: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=300&h=300",
        description: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment."
    },
    {
        id: 3,
        boldTitle: "What",
        lightTitle: "we do",
        imageUrl: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=300&h=300",
        description: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment."
    },
    {
        id: 4,
        boldTitle: "Our",
        lightTitle: "Mission",
        imageUrl: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=300&h=300",
        description: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment."
    }
];

const AboutPage = () => {
    return (
        <div className="w-full min-h-screen bg-white font-sans text-[#111111] antialiased selection:bg-[#FF2832] selection:text-white">
            
            {/* 🖼️ FIGMA GRAPHIC ELEMENT: Top Banner Container Hero Block */}
            <div 
                className="w-full bg-cover bg-center bg-no-repeat relative py-20 md:py-28 flex items-center justify-center text-center"
                style={{ 
                    backgroundImage: `url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1920')` 
                }}
            >
                <div className="absolute inset-0 bg-black/55 backdrop-blur-[0.3px]"></div>
                
                <div className="relative z-10 text-white flex flex-col gap-2.5">
                    <h1 className="text-[38px] md:text-[48px] font-black tracking-tight leading-none drop-shadow-sm">
                        About Us
                    </h1>
                    <div className="flex items-center justify-center gap-2 text-[14px] font-semibold text-gray-300">
                        <Link href="/" className="hover:text-[#FF2832] cursor-pointer transition-colors duration-200">
                            Home
                        </Link>
                        <span className="text-gray-500 font-normal">&gt;</span>
                        <span className="text-white">About Us</span>
                    </div>
                </div>
            </div>

            {/* 📝 FIGMA CORE PARAGRAPH COMPONENT SECTION */}
            <div className="max-w-6xl mx-auto px-6 sm:px-12 md:px-16 pt-16 md:pt-24 flex flex-col items-center justify-center text-center">
                <h2 className="text-[#222222] font-black text-[30px] md:text-[38px] tracking-tight leading-snug mb-6">
                    Welcome <span className="font-light text-gray-500">to the Car For You</span>
                </h2>
                
                <p className="text-gray-500 text-[14px] md:text-[15px] leading-relaxed max-w-4xl font-normal">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered 
                    alteration in some form, by injected humour, or randomised words which don't look even slightly 
                    believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't 
                    anything embarrassing hidden in the middle of text.
                </p>
            </div>

            {/* 👥 NEW SECTION BLOCK: Circular Avatar Matrix Feature Container Section */}
            <div className="max-w-6xl mx-auto px-6 sm:px-12 md:px-16 pb-20 md:pb-28 pt-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                    {missionFeatures.map((feature) => (
                        <div key={feature.id} className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6">
                            
                            {/* Round avatar frame rendering system handler */}
                            <div className="w-[140px] h-[140px] rounded-full overflow-hidden flex-shrink-0 border-4 border-gray-50 shadow-sm relative">
                                <Image 
                                    src={feature.imageUrl} 
                                    alt={`${feature.boldTitle} content section context graphic`}
                                    width={140}
                                    height={140}
                                    className="w-full h-full object-cover" 
                                />
                            </div>

                            {/* Info copy metadata description component flow info */}
                            <div className="flex flex-col justify-start">
                                <h3 className="text-[22px] font-black text-gray-900 tracking-tight mb-2">
                                    {feature.boldTitle} <span className="font-light text-gray-500">{feature.lightTitle}</span>
                                </h3>
                                <p className="text-gray-500 text-[13.5px] leading-relaxed font-normal">
                                    {feature.description}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>
            </div>

             {/* 📺 🆕 ADDED SECTION: "Why Choose Us" Panel Same to Same Layout */}
            <div className="w-full bg-[#f8f9fa] py-16 md:py-24 border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16">
                    
                    {/* Header Area Copy From Image */}
                    <div className="w-full text-center max-w-4xl mx-auto mb-12 md:mb-16">
                        <h2 className="text-[#111111] font-normal text-[32px] md:text-[40px] tracking-tight mb-4">
                            Why <span className="font-bold">choose Us</span>
                        </h2>
                        <p className="text-gray-500 text-[14px] md:text-[15px] leading-relaxed font-normal">
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                        </p>
                    </div>

                    {/* Left and Right Grid Split Elements */}
                    <div className="w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                        
                        {/* 🌟 Left Column Details Feature Group Links */}
                        <div className="w-full lg:w-1/2 flex flex-col gap-8 text-left">
                            
                            {/* Feature Unit 1 */}
                            <div className="flex flex-col gap-2">
                                <h3 className="text-[#111111] font-bold text-[18px] tracking-tight flex items-center gap-2">
                                    <span className="text-gray-700 text-[20px]">👤</span> Trusted By Thousands
                                </h3>
                                <p className="text-gray-500 text-[14px] leading-relaxed pl-7">
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                                </p>
                            </div>

                            {/* Feature Unit 2 */}
                            <div className="flex flex-col gap-2">
                                <h3 className="text-[#111111] font-bold text-[18px] tracking-tight flex items-center gap-2">
                                    <span className="text-gray-700 text-[20px]">🌐</span> Wide Range Of Vehicles
                                </h3>
                                <p className="text-gray-500 text-[14px] leading-relaxed pl-7">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                                </p>
                            </div>

                            {/* Feature Unit 3 */}
                            <div className="flex flex-col gap-2">
                                <h3 className="text-[#111111] font-bold text-[18px] tracking-tight flex items-center gap-2">
                                    <span className="text-gray-700 text-[20px]">🚗</span> Faster Buy & Sell
                                </h3>
                                <p className="text-gray-500 text-[14px] leading-relaxed pl-7">
                                    But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete.
                                </p>
                            </div>

                        </div>

                        {/* 🎬 Right Column Functional Responsive YouTube Video Frame */}
                        <div className="w-full lg:w-1/2">
                            <div className="relative w-full aspect-video rounded-md overflow-hidden shadow-lg border border-gray-200">
                                <iframe 
                                    className="absolute inset-0 w-full h-full"
                                    src="https://www.youtube.com/embed/dQw4w9WgXcQ" // 👈 Ekhane icche moto jekono dynamic youtube video link boshiye nite parbe
                                    title="Why Choose Us Video"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default AboutPage;