"use client"
import React from 'react'
import { deleteArticle } from '../actions/event'

const CMS = ({ profile }) => {
  
  return (
    <>
      <tbody>
        <tr class="border-b bg-blue-100 border-blue-200">
          <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
            {profile.index}
          </td>
          <td class="text-sm text-gray-950 px-6 py-4 whitespace-nowrap">
            <a className="hover:underline hover:cursor-pointer" href={process.env.NEXT_PUBLIC_BASE_URL+`/post/${profile._id}`}>
              {" "}
              {profile.content.title}
            </a>
          </td>
          <td class="text-sm text-white px-6 py-4 whitespace-nowrap">
            <a href={process.env.NEXT_PUBLIC_BASE_URL+`/update/${profile._id}`} className="bg-green-600 py-2 px-5 hover:bg-green-900 rounded-md">Update</a>
          </td>
          <td class="text-sm  text-white px-6 py-4 whitespace-nowrap">
            <button onClick={()=>deleteArticle(profile._id)} className="bg-red-500  py-2 px-5 hover:bg-red-900 rounded-md">Delete</button>
          </td>
        </tr>
      </tbody>
    </>)
}

export default CMS