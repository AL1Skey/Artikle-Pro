
import React from "react";
import Image from "next/image";
import logo from "../../../public/logo1.png";



const page = () => {
  return (

    <>
      {" "}
      <div className="absolute text-9xl ml-[53vw] mt-[30vh] ">
        <Image className="w-[30vw]" src={logo} />
      </div>
    </>
  );
};


export default page;
