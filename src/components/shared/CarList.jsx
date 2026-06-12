"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MdOutlineSubdirectoryArrowRight, MdLocationOn } from 'react-icons/md';
import { FaCalendarAlt, FaGasPump, FaRegClock, FaCog } from 'react-icons/fa';
import CarSkeleton from './CarSkeleton';

const CarList = ({ cars: initialCars }) => {
  const [cars, setCars] = useState(initialCars || []);
  const [loading, setLoading] = useState(!initialCars);

  // 💡 যদি বাইরে থেকে কোনো 'cars' অ্যারে পাস না করা হয়, তবেই কেবল এটি ১৬টি অল কার নিয়ে আসবে
  useEffect(() => {
    if (initialCars) {
      setCars(initialCars);
      setLoading(false);
      return;
    }

    const fetchAllCars = async () => {
      try {
        const res = await fetch("https://dream-cars-server.onrender.com/cars");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        const allData = data.cars || data.products || data || [];
        setCars(allData.slice(0, 16));
      } catch (error) {
        console.error("Error loading cars in CarList:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllCars();
  }, [initialCars]);

  if (loading) return <CarSkeleton />;

  if (!cars || cars.length === 0) {
    return (
      <div className="text-center py-10 text-gray-500 font-semibold">
        No cars available for this category.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cars.map((car) => (
        <div 
          key={car.id || car._id} 
          className="bg-white border border-gray-200 rounded-none transition-all duration-300 flex flex-col justify-between hover:border-gray-400"
        >
          {/* Image Section */}
          <div className='relative w-full h-52 overflow-hidden group bg-gray-100'>
            {car.imageUrl && (
              <Image 
                src={car.imageUrl} 
                alt={car.title || "Car Image"} 
                fill 
                className='object-cover group-hover:scale-105 transition-transform duration-500'
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            )}
            
            {car.condition && (
              <div className="absolute top-0 right-0 z-10">
                <span className="bg-[#EF3737] text-white text-[11px] font-bold px-3 py-1 uppercase tracking-wider block">
                  {car.condition}
                </span>
              </div>
            )}

            <div className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-sm text-white text-xs px-2 py-1 flex items-center gap-1">
              <MdLocationOn className="text-[#EF3737]" />
              <span className="font-medium">{car.location || "N/A"}</span>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-5 grow flex flex-col justify-between">
            <div>
              <h2 className="text-[#111111] text-lg font-bold hover:text-[#EF3737] transition-colors cursor-pointer mb-2 line-clamp-1">
                {car.title}
              </h2>
              
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-[#EF3737] font-extrabold text-xl">
                  ${car.price?.toLocaleString()}
                </span>
                {car.originalPrice && (
                  <span className="text-gray-400 line-through text-xs font-medium">
                    ${car.originalPrice?.toLocaleString()}
                  </span>
                )}
              </div>

              <div className="border-t border-gray-200 pt-1 text-gray-600 text-xs font-medium space-y-2 mb-4">
                <div className="flex justify-between items-center py-1 border-b border-gray-100">
                  <div className="flex items-center gap-2 text-gray-400">
                    <FaRegClock />
                    <span className="text-gray-500">Mileage</span>
                  </div>
                  <span className="text-[#111111] font-bold">{car.mileage || "0 km"}</span>
                </div>

                <div className="flex justify-between items-center py-1 border-b border-gray-100">
                  <div className="flex items-center gap-2 text-gray-400">
                    <FaGasPump />
                    <span className="text-gray-500">Fuel Type</span>
                  </div>
                  <span className="text-[#111111] font-bold">{car.fuelType || "N/A"}</span>
                </div>

                <div className="flex justify-between items-center py-1 border-b border-gray-100">
                  <div className="flex items-center gap-2 text-gray-400">
                    <FaCalendarAlt />
                    <span className="text-gray-500">Model Year</span>
                  </div>
                  <span className="text-[#111111] font-bold">{car.year || "N/A"}</span>
                </div>

                <div className="flex justify-between items-center py-1 border-b border-gray-100">
                  <div className="flex items-center gap-2 text-gray-400">
                    <FaCog />
                    <span className="text-gray-500">Transmission</span>
                  </div>
                  <span className="text-[#111111] font-bold">{car.transmission || "N/A"}</span>
                </div>
              </div>
            </div>

            <div className="mt-2">
              <Link href={`/cars/${car.id || car._id}`} className='w-full block'>
                <button className="cursor-pointer w-full bg-[#111111] hover:bg-[#EF3737] text-white text-xs font-bold py-3.5 uppercase tracking-wider flex items-center justify-center gap-2 transition-colors duration-300 group">
                  View Details
                  <MdOutlineSubdirectoryArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarList;