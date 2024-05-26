
import React from "react";
import Image from "next/image";



const page = () => {
  const data = async () => {
    const res = await fetch("http://localhost:3000/api/content");
  };
  return (

    <>
      {" "}
      <div className="absolute text-9xl ml-[43rem] mt-[5rem] ">
        <Image className="w-[40rem]" src={"/logo1.png"} width={400} height={400}/>
      </div>
    </>
  );
};


export default page;
