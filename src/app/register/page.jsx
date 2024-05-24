import React from 'react'

const page = () => {
  return (
    <>
    <div className="bg-white flex justify-center items-center h-screen">
  {/* Left: Image */}
  <div className="w-1/2 h-full  hidden lg:block p-10">
    <img
      src="https://img.freepik.com/free-vector/sharing-articles-concept-illustration_114360-5437.jpg?t=st=1716557249~exp=1716560849~hmac=fa4d126ccf8a92fc41572c380d803d526800ac590b0f987437b01b0a5cc623fb&w=740"
      alt="Placeholder Image"
      className="object-cover w-full h-full rounded-md shadow-xl"
    />
  </div>
  {/* Right: Login Form */}
  <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">

    <h1 className="text-2xl font-semibold mb-4">Register</h1>
    <form action="#" method="POST" className='p-4 rounded-md shadow-2xl'>
      {/* Username Input */}
      <div className="mb-4">
        <label htmlFor="username" className="block text-gray-600">
          Name
        </label>
        <input
          type="text"
          id="username"
          name="username"
          className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          autoComplete="off"
        />
      </div>
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
    
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
      >
        Register
      </button>
    </form>
  </div>
</div>

    
    
    </>
  )
}

export default page