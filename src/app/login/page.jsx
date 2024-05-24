import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
    <div className="bg-white flex justify-center items-center h-screen">
  {/* Left: Image */}
  <div className="w-1/2 h-screen hidden lg:block">
    <img
      src="https://img.freepik.com/free-vector/publish-article-concept-illustration_114360-5042.jpg?t=st=1716558158~exp=1716561758~hmac=0173319d9d75f71d4d916e861b7a43320b9544b8a4b86d93aec3e2ace1badf14&w=740"
      alt="Placeholder Image"
      className="object-cover w-full h-full"
    />
  </div>
  {/* Right: Login Form */}
  <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2 ">
    <h1 className="text-2xl font-semibold mb-4">Login</h1>
    <form action="#" method="POST" className='shadow-2xl p-4 rounded-md'>
      {/* Username Input */}
      <div className="mb-4">
        <label htmlFor="username" className="block text-gray-600">
          Email
        </label>
        <input
          type="text"
          id="username"
          name="username"
          className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          autoComplete="off"
        />
      </div>
      {/* Password Input */}
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-600">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          autoComplete="off"
        />
      </div>
      {/* Remember Me Checkbox */}

      {/* Forgot Password Link */}
   
      {/* Login Button */}
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
      >
        Login
      </button>
    </form>
    {/* Sign up  Link */}
    <div className="mt-6 text-blue-500 text-center">
   <Link href={"/register"}>
        <p  className='hover:underline'>Sign up Here</p>
        </Link>
    </div>
  </div>
</div>

    
    
    </>
  )
}

export default page