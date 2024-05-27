import Navbar from "../components/Navbar";
import "../globals.css";
const inter = Inter({ subsets: ["latin"] });
import { Inter } from "next/font/google";

export default function RootLayout({children}) {
    return (
        <>
           <body className={inter.className+" text-black bg-white"}>
            <Navbar/>
            {children}
            </body>
        </>
    );
}