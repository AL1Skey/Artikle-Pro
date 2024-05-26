import React from 'react'

const CMS = ({profile}) => {
  return (
  <div className="container h-screen w-screen  flex justify-center py-6">
  <div className="w-1/2 h-full bg-slate-100 p-5 shadow-2xl rounded-lg  ">
    <p className="text-center">{profile.author}</p>
    
    <div>
      <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full text-center">
                <thead class="border-b">
                  <tr>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4"
                    >
                      No
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4"
                    >
                      Judul
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4"
                    >
                      Update
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4"
                    >
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b bg-blue-100 border-blue-200">
                    <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                      1
                    </td>
                    <td class="text-sm text-gray-950 px-6 py-4 whitespace-nowrap">
                      <p className="hover:underline hover:cursor-pointer">
                        {" "}
                        {profile.content.title}
                      </p>
                    </td>
                    <td class="text-sm text-white px-6 py-4 whitespace-nowrap">
                      <p className="bg-green-600 py-1 rounded-md">Update</p>
                    </td>
                    <td class="text-sm  text-white px-6 py-4 whitespace-nowrap">
                      <p className="bg-red-500  py-1 rounded-md">Delete</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>)
}

export default CMS