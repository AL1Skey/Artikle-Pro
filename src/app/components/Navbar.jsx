"use client";
import React, { useCallback, useEffect, useState } from "react";
import Cookies from "js-cookies";
import Image from "next/image";
import image1 from "../../../public/Artikel.png";
import Link from "next/link";
import { logout } from "../actions/event";


const Navbar = () => {
  
  const [auth,setAuth] =useState() 
  useEffect(useCallback(()=>{
    setAuth(Cookies.getItem("Authorization"))
  },[auth]),[] );
  return (
    <div className="w-screen h-20 bg-blue-200 flex gap-20 justify-between ">
      <Link href="/home">
        {" "}
        <div className="ml-16">
          <Image className="w-24" src={image1} />
        </div>
      </Link>
      <div className="mr-20 mt-7 flex gap-20">
        
      {!auth ?
        (<Link href="/login" className="hover:text-blue-900">  <p>Login</p></Link>):
        (
        <>
        <Link href="/profile" className="hover:text-blue-900"><p>Artikel anda</p></Link>
        <button className="-translate-y-[14px] hover:text-blue-900" onClick={()=>logout()}>  Logout</button>
        </>
        )
      }
      
      

      </div>
      
    </div>
  );
};

export default Navbar;
