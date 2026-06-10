import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


// Internal dynamic images placeholder mappings
import ourServices1 from "@/assets/our_services_1.jpg";
import ourServices2 from "@/assets/our_services_2.jpg";

export const metadata = {
  title: "Services",
};


const ServicesPage = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans text-gray-900 antialiased selection:bg-[#FF2832] selection:text-white">
        
        {/* 🖼️ TOP HERO BANNER: Services Vintage Theme Background */}
        <div 
            className="w-full bg-cover bg-center bg-no-repeat relative py-16 md:py-24 flex items-center justify-center text-center"
            style={{ 
                backgroundImage: `url('https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1920')` 
            }}
        >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[0.5px]"></div>
            
            <div className="relative z-10 text-white flex flex-col gap-2">
                <h1 className="text-[36px] md:text-[46px] font-black tracking-tight leading-none drop-shadow-md">
                    Services
                </h1>
                <div className="flex items-center justify-center gap-2 text-[14px] font-semibold text-gray-300">
                    <Link href="/" className="hover:text-[#FF2832] cursor-pointer transition-colors duration-200">
                        Home
                    </Link>
                    <span className="text-gray-500 font-normal">&gt;</span>
                    <span className="text-white">Services</span>
                </div>
            </div>
        </div>

        {/* 🚗 CONTENT ZONE: Car Dealer Header & Body Description */}
        <div className="max-w-4xl mx-auto px-6 sm:px-12 pt-16 md:pt-24 text-center flex flex-col items-center justify-center">
            <h2 className="text-[#111111] font-bold text-[32px] md:text-[40px] tracking-tight mb-6">
                Car Dealer <span className="text-gray-500 font-light">Quality Services</span>
            </h2>

            <p className="text-gray-500 text-[15px] md:text-[16px] leading-relaxed max-w-3xl font-normal">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered 
                alteration in some form, by injected humour, or randomised words which don't look even slightly 
                believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't 
                anything embarrassing hidden in the middle of text.
            </p>
        </div>

        {/* 🛠️ SECTIONS ZONE: Zigzag Cards Grid Engine */}
        <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 py-16 flex flex-col gap-16 md:gap-24">
            
            {/* 🔹 SECTION 1: Sell New Cars (Image Left, Content Right) */}
            <div className="w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                <div className="w-full lg:w-1/2 relative h-[280px] sm:h-[380px] rounded-sm overflow-hidden shadow-md group cursor-pointer">
                    <Image 
                        src={ourServices1} 
                        alt="Sell New Cars" 
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500 flex items-center justify-center">
                        <h3 className="text-white font-black text-[28px] md:text-[36px] uppercase tracking-wide border-b-4 border-[#FF2832] pb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                            Sell New Cars
                        </h3>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 flex flex-col justify-center text-left">
                    <h3 className="text-[#111111] font-bold text-[24px] md:text-[28px] tracking-tight mb-4">
                        Looking New Car?
                    </h3>
                    <p className="text-gray-500 text-[14px] md:text-[15px] leading-relaxed mb-6">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                    </p>
                    <h4 className="text-[#222222] font-extrabold text-[15px] uppercase tracking-wide mb-4">
                        At vero eos et accusamus et iusto odio dignissimos
                    </h4>
                    <ul className="space-y-3 text-gray-600 text-[14px]">
                        <li className="flex items-center gap-3">
                            <span className="text-green-500 font-bold">✓</span> Pellentesque lacus urna, feugiat non consectetur
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="text-green-500 font-bold">✓</span> Aliquam sem neque, efficitur atero lectus vitae
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="text-green-500 font-bold">✓</span> Pellentesque erat libero, eleifend sit amet felis
                        </li>
                    </ul>
                </div>
            </div>

            {/* 🔸 SECTION 2: Sell Used Cars (Content Left, Image Right) */}
            <div className="w-full flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-16">
                <div className="w-full lg:w-1/2 relative h-[280px] sm:h-[380px] rounded-sm overflow-hidden shadow-md group cursor-pointer">
                    <Image 
                        src={ourServices2} 
                        alt="Sell Used Cars" 
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500 flex items-center justify-center">
                        <h3 className="text-white font-black text-[28px] md:text-[36px] uppercase tracking-wide border-b-4 border-[#FF2832] pb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                            Sell Used Cars
                        </h3>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 flex flex-col justify-center text-left">
                    <h3 className="text-[#111111] font-bold text-[24px] md:text-[28px] tracking-tight mb-4">
                        Looking Used Car?
                    </h3>
                    <p className="text-gray-500 text-[14px] md:text-[15px] leading-relaxed mb-6">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                    </p>
                    <h4 className="text-[#222222] font-extrabold text-[15px] uppercase tracking-wide mb-4">
                        At vero eos et accusamus et iusto odio dignissimos
                    </h4>
                    <ul className="space-y-3 text-gray-600 text-[14px]">
                        <li className="flex items-center gap-3">
                            <span className="text-green-500 font-bold">✓</span> Pellentesque lacus urna, feugiat non consectetur
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="text-green-500 font-bold">✓</span> Aliquam sem neque, efficitur atero lectus vitae
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="text-green-500 font-bold">✓</span> Pellentesque erat libero, eleifend sit amet felis
                        </li>
                    </ul>
                </div>
            </div>

        </div>

        {/* 📺 ADDED SECTION: "Why Choose Us" Panel */}
        <div className="w-full bg-[#f8f9fa] py-16 md:py-24 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16">
                
                {/* Header Area */}
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
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
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

export default ServicesPage;