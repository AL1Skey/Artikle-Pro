import Navbar from "../components/Navbar";
import "../globals.css";

export default function RootLayout({children}) {
    return (
        <html lang="en">
           <body className={" text-black bg-white"}>
            <Navbar/>
            {children}
            </body>
        </html>
    );
}