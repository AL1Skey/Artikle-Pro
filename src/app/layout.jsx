import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Artikel from "./components/Artikel";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
  
      <section>
      <Navbar/>
      <Artikel/>
      </section>
        
      <body className={inter.className + " text-black bg-white"}>
        {children}
     
      </body>
    </html>
  );
}
