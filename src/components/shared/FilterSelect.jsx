'use client';

import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const FilterSelect = ({ currentSort, currentLimit }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // ড্রপডাউন চেঞ্জ হলে ইউআরএল কোয়েরি প্যারামিটার আপডেট করার ফাংশন
  const handleFilterChange = (key, value) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(key, value);
    
    // নতুন ইউআরএল-এ পুশ করবে (যেমন: /all-cars?sort=low-to-high&limit=9)
    router.push(`/all-cars?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex flex-wrap items-center gap-4">
      {/* Sort By Dropdown */}
      <div className="flex items-center gap-2">
        <span className="text-gray-600 text-sm font-semibold">Sort by:</span>
        <select 
          value={currentSort}
          onChange={(e) => handleFilterChange('sort', e.target.value)}
          className="border border-gray-300 px-3 py-1.5 bg-white text-sm text-gray-700 outline-none cursor-pointer"
        >
          <option value="default">A-Z (Default)</option>
          <option value="low-to-high">Price: Low to High</option>
          <option value="high-to-low">Price: High to Low</option>
        </select>
      </div>

      {/* Autos Limit Dropdown */}
      <select 
        value={currentLimit}
        onChange={(e) => handleFilterChange('limit', e.target.value)}
        className="border border-gray-300 px-3 py-1.5 bg-white text-sm text-gray-700 outline-none cursor-pointer"
      >
        <option value="9">9 Autos</option>
        <option value="16">16 Autos</option>
        <option value="27">27 Autos</option>
      </select>
    </div>
  );
};

export default FilterSelect;