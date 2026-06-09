import Achivments from "@/components/shared/Achivments";
import Banner from "@/components/shared/Banner";
import Customers from "@/components/shared/Customers";
import MyCar from "@/components/shared/MyCar";
import PerfectCar from "@/components/shared/PerfectCar";


export default function Home() {
  return (
    <>
   <Banner />
   <PerfectCar />
   <MyCar />
   <Achivments />
   <Customers />
   </>
  );
}
