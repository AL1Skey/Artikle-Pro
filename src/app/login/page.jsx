import Link from "next/link";
import React from "react";
import Image from "next/image";
import image2 from "../../../public/login.png";
import { login } from "../actions/event";

const page = () => {
  return (
    <>
      <div className="w-[67vw] absolute ml-[33vw] mt-[13rem] flex">
        <div>
          <Image className="w-[30rem]" src={image2} />
        </div>
        <div>
          <div className="border-2 w-80 rounded-md px-4 py-4 shadow-xl mt-16">
            <p className="text-2xl">Login</p>
            <form action={login}>
              <div class="mb-6">
                <input
                  type="email"
                  name="email"
                  id="name"
                  placeholder="email"
                  class="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
                />
              </div>

              <div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="password"
                  class="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
                />
              </div>
              <button class="cursor-pointer py-2 px-4 block mt-6 bg-blue-500 text-white font-bold w-full text-center rounded">
                Login
              </button>
            </form>
            <p className="text-sm">
              belum punya akun?{" "}
              <Link href="/register">
                {" "}
                <span className="hover:text-blue-500 hover:underline">
                  Register
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
