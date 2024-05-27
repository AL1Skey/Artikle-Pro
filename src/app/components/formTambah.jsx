"use client"
import React, { useState } from 'react'
import { createArticle } from '../actions/event'

const FormTambah = (props) => {
  const [title,setTitle] = useState()
  const [content,setContent] = useState()
  return (

    <div class="py-6 px-8  mt-24 bg-white w-[67vw] absolute ml-[33vw]">
      <form action={createArticle}>
        <div class="mb-2">          
          <input type="text" name="title" id="title" placeholder="Judul Artikel" value={title}
          onChange={(e)=>setTitle(e.target.value)} class="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" />
        </div>
        <div>          
          <textarea type="text" name="content" id="content" value={content} cols={20} rows={18} 
          onChange={(e)=>setContent(e.target.value)}  placeholder="Tulis Artikel" class="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" />
        </div>

        
        <button class="cursor-pointer py-2 px-4 block mt-6 bg-blue-400 hover:bg-blue-500 text-white font-bold w-full text-center rounded" type='submit'>Tambahkan</button>
      </form>
    </div>




  )
}

export default FormTambah