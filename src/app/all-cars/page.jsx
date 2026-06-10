import React, { Suspense } from 'react';
import Link from 'next/link';
import CarList from '@/components/shared/CarList';
import CarSkeleton from '@/components/shared/CarSkeleton';
import FilterSelect from '@/components/shared/FilterSelect'; // নতুন ক্লায়েন্ট ড্রপডাউন কম্পোনেন্ট

export const metadata = {
  title: "All Type Of Cars",
};

// Next.js Server Component-এ searchParams সরাসরি প্রোপস হিসেবে পাওয়া যায়
const AllCars = async ({ searchParams }) => {
  // ২০২৬ এর অ্যাপ রাউটার স্ট্যান্ডার্ড অনুযায়ী searchParams কে অ্যাওয়েট করতে হতে পারে
  const resolvedParams = await searchParams;
  const currentSort = resolvedParams?.sort || 'default';
  const currentLimit = resolvedParams?.limit || '16';

  return (
    <div className="w-full bg-[#F9F9F9] min-h-screen font-sans antialiased text-[#111111]">
      
      {/* 1. Header/Banner Section */}
      <div 
        className="relative w-full h-[250px] md:h-[300px] bg-cover bg-center flex flex-col justify-center items-center text-white"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200')` 
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-bold tracking-wide mb-3 uppercase">
            All Type Of Cars
          </h1>
          <div className="flex items-center justify-center gap-2 text-sm md:text-base font-medium">
            <Link href="/" className="hover:text-red-500 transition-colors">Home</Link>
            <span className="text-gray-400 font-bold">&gt;</span>
            <span className="text-gray-300">All Type Of Cars</span>
          </div>
        </div>
      </div>

      {/* 2. Filter Toolbar Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
          
          <div className="lg:col-span-3 flex flex-wrap items-center justify-between bg-white border border-gray-200 p-4 gap-4">
            <div className="flex items-center gap-2">
              <span className="bg-[#EF3737] text-white text-sm font-bold px-3 py-1.5">
                {currentLimit} {/* ইউজার যতটি সিলেক্ট করবে ততটি দেখাবে */}
              </span>
              <span className="text-gray-500 font-bold text-sm uppercase tracking-wider">
                Listings Showing
              </span>
            </div>

            {/* ফাংশনাল ফিল্টার ড্রপডাউনস */}
            <FilterSelect currentSort={currentSort} currentLimit={currentLimit} />
          </div>

          <div className="lg:col-span-1">
            <button className="w-full flex items-center justify-between bg-white border border-gray-200 p-4 font-bold text-[#111111] text-sm uppercase tracking-wider group">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#EF3737]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/>
                </svg>
                <span>Find Your Dream Car</span>
              </div>
              <span className="text-xl font-light text-gray-500">+</span>
            </button>
          </div>
        </div>
        
        {/* 3. Dynamic Cars Grid Area */}
        <div className="mt-8">
          {/* key হিসেবে সর্ট ও লিমিট দেওয়ায় ইউআরএল চেঞ্জ হলে শুধু এই অংশটিই রি-লোড হবে এবং স্কেলিটন দেখাবে */}
          <Suspense key={currentSort + currentLimit} fallback={<CarSkeleton />}>
            <CarList sort={currentSort} limit={parseInt(currentLimit)} />
          </Suspense>
        </div>

      </div>
    </div>
  );
};

export default AllCars;