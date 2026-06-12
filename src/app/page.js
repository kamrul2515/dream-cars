import Achivments from "@/components/shared/Achivments";
import Banner from "@/components/shared/Banner";
import Customers from "@/components/shared/Customers";
import FeaturedCars from "@/components/shared/FeaturedCars";
import MyCar from "@/components/shared/MyCar";
import PerfectCar from "@/components/shared/PerfectCar";


export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <>
   <Banner />
   <PerfectCar />
   <MyCar />
   <Achivments />
   <FeaturedCars />
   <Customers />
   </>
  );
}
