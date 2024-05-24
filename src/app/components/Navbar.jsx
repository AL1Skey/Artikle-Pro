"use client";
import React from "react";
import Cookies from "js-cookies";
import Image from "next/image";
const Navbar = () => {
  const auth = Cookies.getItem("Authorization");
  return (
    <nav className="flex w-screen justify-between py-2 px-5 bg-slate-400 h-16 ">
      <div className="flex gap-10">
        <div></div>
        <form action="" className="flex">
          <input type="text" name="" id="" />
          <button type="submit">Search</button>
        </form>
      </div>
      <ul className="flex">
        <li>Write</li>
        <li>Logout</li>
      </ul>
    </nav>
  );
};

export default Navbar;
