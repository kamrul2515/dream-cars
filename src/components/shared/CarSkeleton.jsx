import React from 'react';
import { FaCarSide } from 'react-icons/fa';

const CarSkeleton = () => {
  const skeletonCards = Array(6).fill(0); // লোডিং এর সময় ৬টি ডামি কার্ড দেখাবে

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {skeletonCards.map((_, index) => (
        <div 
          key={index} 
          className="bg-white border border-gray-200 rounded-none overflow-hidden flex flex-col justify-between p-5 space-y-4 animate-pulse"
        >
          {/* Image Box Skeleton */}
          <div className="w-full h-52 bg-gray-200 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* কার আইকন অ্যানিমেশন */}
              <FaCarSide className="text-3xl text-gray-300 animate-bounce" />
            </div>
          </div>

          {/* Title & Price Skeleton */}
          <div className="space-y-3">
            <div className="h-5 bg-gray-200 rounded w-3/4"></div>
            <div className="h-6 bg-gray-200 rounded w-1/3"></div>
          </div>

          {/* Features Skeleton */}
          <div className="border-t border-gray-100 pt-3 space-y-2">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex justify-between">
                <div className="h-3 bg-gray-200 rounded w-1/4"></div>
                <div className="h-3 bg-gray-200 rounded w-1/5"></div>
              </div>
            ))}
          </div>

          {/* Button Skeleton */}
          <div className="h-11 bg-gray-200 w-full mt-4"></div>
        </div>
      ))}
    </div>
  );
};

export default CarSkeleton;