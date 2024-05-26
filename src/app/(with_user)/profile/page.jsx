import React from "react";

const page = () => {
  const profile = {
    _id: { $oid: "60adf27be8dd6c05d97d5177" },
    author: "Bob Brown",
    authorId: { $oid: "60adf27be8dd6c05d97d5178" },
    content: {
      title: "Fourth Post",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo eius reiciendis temporibus expedita, magni sunt quod aliquam quas libero adipisci eaque incidunt minima nisi nam, inventore, dolorem repellendus tenetur vitae excepturi distinctio saepe laboriosam. Natus non minus unde quibusdam ipsum tempore, vero veniam incidunt quaerat est nostrum cum temporibus voluptates in dolorum saepe. Tenetur alias adipisci sed at in excepturi minima nemo praesentium velit hic maiores dolorum quibusdam explicabo itaque repellat, et deserunt repellendus culpa pariatur laboriosam maxime officiis ab. Quod perspiciatis dolorum illo molestias facilis distinctio, quaerat a aspernatur quas provident cumque nobis fuga atque odio. Rem, animi! Molestias!",
    },
    tags: ["mongodb", "test", "data"],
    createdAt: { $date: "2024-05-24T13:30:00Z" },
    updatedAt: { $date: "2024-05-24T13:30:00Z" },
  };

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
    </div>
  );
};

export default page;
