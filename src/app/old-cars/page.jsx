import React, { Suspense } from 'react';
import Link from 'next/link';
import CarList from '@/components/shared/CarList';
import CarSkeleton from '@/components/shared/CarSkeleton';
import FilterSelect from '@/components/shared/FilterSelect';

export const metadata = {
  title: "Old & Pre-Owned Cars",
};

async function getProducts() {
  try {
    const res = await fetch("https://dream-cars-server.onrender.com/cars", { cache: 'no-store' });
    if (!res.ok) throw new Error("Failed to fetch data");
    const data = await res.json();
    return data.cars || data.products || data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

const OldCarsPage = async ({ searchParams }) => {
  const resolvedParams = await searchParams;
  const currentSort = resolvedParams?.sort || 'default';
  const currentLimit = parseInt(resolvedParams?.limit || '16', 10);

  const allCars = await getProducts();

  // 💡 শুধুমাত্র 'old' কন্ডিশন ফিল্টার
  let oldCars = Array.isArray(allCars) 
    ? allCars.filter(car => car.condition?.toLowerCase() === 'old')
    : [];

  // সর্টিং লজিক
  if (currentSort === 'low-to-high') {
    oldCars = [...oldCars].sort((a, b) => (a.price || 0) - (b.price || 0));
  } else if (currentSort === 'high-to-low') {
    oldCars = [...oldCars].sort((a, b) => (b.price || 0) - (a.price || 0));
  } else if (currentSort === 'default') {
    oldCars = [...oldCars].sort((a, b) => (a.title || '').localeCompare(b.title || ''));
  }

  const displayedCars = oldCars.slice(0, currentLimit);

  return (
    <div className="w-full bg-[#F9F9F9] min-h-screen font-sans antialiased text-[#111111]">
      <div 
        className="relative w-full h-[250px] md:h-[300px] bg-cover bg-center flex flex-col justify-center items-center text-white"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&q=80&w=1200')` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-bold tracking-wide mb-3 uppercase">Pre-Owned / Old Cars</h1>
          <div className="flex items-center justify-center gap-2 text-sm md:text-base font-medium">
            <Link href="/" className="hover:text-red-500 transition-colors">Home</Link>
            <span className="text-gray-400 font-bold">&gt;</span>
            <span className="text-gray-300">Old Cars</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
          <div className="lg:col-span-3 flex flex-wrap items-center justify-between bg-white border border-gray-200 p-4 gap-4">
            <div className="flex items-center gap-2">
              <span className="bg-[#EF3737] text-white text-sm font-bold px-3 py-1.5 min-w-[32px] text-center">
                {displayedCars.length}
              </span>
              <span className="text-gray-500 font-bold text-sm uppercase tracking-wider">Listings Showing</span>
            </div>
            <FilterSelect currentSort={currentSort} currentLimit={String(currentLimit)} />
          </div>
          <div className="lg:col-span-1">
            <button className="w-full flex items-center justify-between bg-white border border-gray-200 p-4 font-bold text-[#111111] text-sm uppercase tracking-wider group">
              <span className="flex items-center gap-3">Find Your Budget Car</span>
              <span className="text-xl font-light text-gray-500">+</span>
            </button>
          </div>
        </div>
        
        <div className="mt-8">
          <Suspense key={currentSort + currentLimit} fallback={<CarSkeleton />}>
            {/* 💡 ফিল্টার করা অ্যারে সরাসরি পাস করা হলো */}
            <CarList cars={displayedCars} />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default OldCarsPage;