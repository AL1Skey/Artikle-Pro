import Navbar from "../components/Navbar";


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