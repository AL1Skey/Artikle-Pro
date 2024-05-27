import Navbar from "../components/Navbar";
import Artikel from "../components/Artikel";
const inter = Inter({ subsets: ["latin"] });
import { Inter } from "next/font/google";
export default function RootLayout({ children }) {
  return (
    <>        
      <section>
      <Navbar/>
      <Artikel/>
      </section>
      <body className={inter.className+ " text-black bg-white"}>
       
      {children}
       
     
      </body>
    </>
  );
}
