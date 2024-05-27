import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  icons: {
    icon: "/article-pro.ico",
  },
  title: "Article Pro",
  description: "Elevate your content creation with our Article Pro. Ideal for writers of all levels, our tool streamlines content creation and publishing for maximum impact.",
};

export default function RootLayout({ children }) {
    return (
      <html lang="en">
         
        {children}
         
      </html>
    );
  }
  