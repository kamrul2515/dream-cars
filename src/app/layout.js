import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import Navbar from "@/components/shared/Navbar";
import Brands from "@/components/shared/Brands";
import Footer from "@/components/shared/Footer";


const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Dream Cars",
  description: "Your dream car is just a click away",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${poppins.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <Navbar />
        {children}
        <Brands />
        <Footer />
        </body>
    </html>
  );
}
