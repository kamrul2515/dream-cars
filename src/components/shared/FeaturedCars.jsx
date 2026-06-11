import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaRegClock, FaGasPump, FaCalendarAlt, FaCog } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import { BsArrowUpRight } from 'react-icons/bs';

// ডাটা ফেচিং ফাংশন (সার্ভার থেকে লেটেস্ট ৩টি কার ডাটা নিয়ে আসবে)
async function getFeaturedCars() {
  try {
    const res = await fetch('https://dream-cars-server.onrender.com/cars', {
      cache: 'no-store'
    });
    if (!res.ok) throw new Error("Failed to fetch cars data");
    const data = await res.json();
    // ফিগমার মতো প্রথম ৩টি কার দেখানোর জন্য স্লাইস করা হলো
    return data.slice(0, 3);
  } catch (error) {
    console.error("Error fetching featured cars:", error);
    return [];
  }
}

const FeaturedCars = async () => {
  const cars = await getFeaturedCars();

  return (
    <section className="w-full bg-[#F9F9F9] py-16 font-sans text-[#111111] antialiased">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Header Text Area */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <h2 className="text-3xl md:text-4xl font-black text-[#111111] uppercase tracking-tight">
            Featured Cars <span className="text-[#EF3737]">Special Offers</span>
          </h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text.
          </p>
        </div>

        {/* 3-Column Cars Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <div 
              key={car._id || car.id} 
              className="bg-white border border-gray-200 rounded-none shadow-sm flex flex-col group overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              {/* Image Section */}
              <div className="relative w-full h-56 bg-gray-100 overflow-hidden">
                <Image
                  src={car.imageUrl || car.image}
                  alt={car.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Condition Tag Badge (e.g., NEW, OLD, SPORTS) */}
                <div className="absolute top-0 right-0 bg-[#EF3737] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 z-10">
                  {car.condition || "New"}
                </div>

                {/* Location Overlay Badge */}
                <div className="absolute bottom-3 left-3 bg-black/60 text-white text-xs font-semibold px-2.5 py-1 flex items-center gap-1 backdrop-blur-xs">
                  <MdLocationOn className="text-[#EF3737]" />
                  <span>{car.location || "London"}</span>
                </div>
              </div>

              {/* Card Content Area */}
              <div className="p-5 flex-1 flex flex-col">
                {/* Title */}
                <h3 className="text-lg font-bold text-[#111111] line-clamp-1 group-hover:text-[#EF3737] transition-colors">
                  {car.title}
                </h3>

                {/* Price Pricing Row */}
                <div className="flex items-baseline gap-2 mt-2 pb-4 border-b border-gray-100">
                  <span className="text-xl font-black text-[#EF3737]">
                    ${car.price?.toLocaleString()}
                  </span>
                  {car.originalPrice && (
                    <span className="text-gray-400 line-through text-xs font-bold">
                      ${car.originalPrice?.toLocaleString()}
                    </span>
                  )}
                </div>

                {/* Specification Table Formatted Rows */}
                <div className="text-xs font-medium text-gray-600 space-y-2.5 py-4 flex-1">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2 text-gray-400">
                      <FaRegClock className="text-sm" />
                      <span>Mileage</span>
                    </div>
                    <span className="font-bold text-[#111111]">{car.mileage || "10,555"} km</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2 text-gray-400">
                      <FaGasPump className="text-sm" />
                      <span>Fuel Type</span>
                    </div>
                    <span className="font-bold text-[#111111]">{car.fuelType || "Diesel"}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2 text-gray-400">
                      <FaCalendarAlt className="text-sm" />
                      <span>Model Year</span>
                    </div>
                    <span className="font-bold text-[#111111]">{car.year || "2010"}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2 text-gray-400">
                      <FaCog className="text-sm" />
                      <span>Transmission</span>
                    </div>
                    <span className="font-bold text-[#111111]">{car.transmission || "Automatic"}</span>
                  </div>
                </div>

                {/* View Details Action Button */}
                <div className="mt-auto pt-2">
                  <Link href={`/cars/${car._id || car.id}`} className="block w-full">
                    <button className="cursor-pointer w-full bg-[#111111] hover:bg-[#EF3737] text-white text-xs font-bold py-3.5 uppercase tracking-wider transition-colors duration-300 flex items-center justify-center gap-2">
                      <span>View Details</span>
                      <BsArrowUpRight className="text-sm stroke-[0.5]" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedCars;