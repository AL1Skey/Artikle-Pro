import CMS from "@/app/components/CMS";
import { joseReadPaylater } from "@/app/helper/jwt";
import { cookies } from "next/headers";
import React from "react";

const page = async() => {
  const cookie = await cookies().get('Authorization').value
  const {payload} = await joseReadPaylater(cookie.split(' ')[1])
  const profile = await fetch(process.env.NEXT_PUBLIC_BASE_URL+"/api/cms", {
    method: 'POST',
    cache: 'no-store', 
    body: JSON.stringify({id:payload.id}),
    headers: {
        'Content-Type': 'application/json'
    }
  }).then((resp)=> resp.json())

  // throw new Error(JSON.stringify({id:profile}))
  
  
  return (
    <>
      <div className="container h-screen w-screen  flex justify-center py-6">
        <div className="w-1/2 h-full bg-slate-100 p-5 shadow-2xl rounded-lg  overflow-y-scroll">
          <p className="text-center">{payload.username}</p>
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
                      {profile.map((prof, index) =>
                        <CMS key={index} profile={{ ...prof,index:index+1 }} />
                      )
                      }

                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
