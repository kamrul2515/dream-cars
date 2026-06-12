import dns from "node:dns";
dns.setServers(['8.8.8.8', '8.8.4.4']);

import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Brands from "@/components/shared/Brands";
import Footer from "@/components/shared/Footer";
import ScrollToTop from "@/components/shared/ScrollToTop";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


export const metadata = {
  title: "Dream Cars",
  description: "Find your dream car here",
  icons: {
    icon: "https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/svgs/solid/car.svg", 
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${poppins.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <ToastContainer 
          position="top-center" 
          autoClose={5000} 
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Brands />
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}