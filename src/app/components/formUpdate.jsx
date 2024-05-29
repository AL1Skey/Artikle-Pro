"use client"
import React, { useState } from 'react'
import { updateArticle } from '../actions/event'

const FormUpdate = (props) => {
    const [title,setTitle] = useState(props?.post?.title)
  const [content,setContent] = useState(props?.post?.content)
  return (

    <div class="m-auto my-5 bg-white w-[67vw] ">
        <h1 className='text-3xl font-bold'>Update Article</h1>
      <form action={updateArticle}>
        <div class="mb-2">          
          <input type="text" name="title" id="title" placeholder="Judul Artikel" value={title}
          onChange={(e)=>setTitle(e.target.value)}  class="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" />
        </div>
        <div>          
          <textarea type="text" name="content" id="content" value={content} onChange={(e)=>setContent(e.target.value)} cols={20} rows={18} placeholder="Tulis Artikel" class="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" />
        </div>
        <input type="hidden" name="_id" value={props?.post?.postId} />
        
        <button class="cursor-pointer py-2 px-4 block mt-6 bg-blue-400 hover:bg-blue-500 text-white font-bold w-full text-center rounded">Update Perubahan</button>
      </form>
    </div>




  )
}

export default FormUpdate