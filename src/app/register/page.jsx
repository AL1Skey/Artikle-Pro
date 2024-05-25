import Link from "next/link";
import React from "react";
import Image from "next/image";
import image2 from "../../../public/login2.png";

const page = () => {
  return (
    <>
      <div className="w-[67vw] absolute ml-[33vw] mt-[13rem] flex">
        <div className="-mt-20">
          <Image className="w-[30rem]" src={image2} />
        </div>
        <div>
          <div className="border-2 w-80 rounded-md px-4 py-4 shadow-xl -mt-[4vh]">
            <p className="text-2xl">Register</p>
            <form action="">
            <div class="mb-6">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="nama"
                  class="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
                />
              </div>
              <div class="mb-6">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email"
                  class="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
                />
              </div>

              <div>
                <input
                  type="password"
                  name="email"
                  id="email"
                  placeholder="password"
                  class="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
                />
              </div>
              <butt class="cursor-pointer py-2 px-4 block mt-6 bg-blue-500 text-white font-bold w-full text-center rounded">
                Register
              </butt>
            </form>
          
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
