"use client";
import React from "react";
import Cookies from "js-cookies";
import Image from "next/image";
import image1 from "../../../public/Artikel.png";
import Link from "next/link";

const Navbar = () => {
  const auth = Cookies.getItem("Authorization");
  return (
    <div className="w-screen h-20 bg-blue-200 flex gap-20 justify-between ">
      <Link href="/home">
        {" "}
        <div className="ml-16">
          <Image className="w-24" src={image1} />
        </div>
      </Link>
      <div className="mr-20 mt-7 flex gap-20 hover:text-blue-900">
        
       <Link href="/profile"><p>Artikel anda</p></Link>
        
      <Link href="/login">  <p>Login</p></Link>
      
      

      </div>
      
    </div>
  );
};

export default Navbar;
