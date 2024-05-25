import React from 'react'

const FormTambah = () => {
  return (

    <div class="py-6 px-8  mt-24 bg-white w-[67vw] absolute ml-[33vw]">
      <form action="">
        <div class="mb-2">          
          <input type="text" name="name" id="name" placeholder="Judul Artikel" class="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" />
        </div>
        <div>          
          <textarea type="text" name="email" id="email" cols={20} rows={18} placeholder="Tulis Artikel" class="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" />
        </div>

        
        <butt class="cursor-pointer py-2 px-4 block mt-6 bg-blue-400 hover:bg-blue-500 text-white font-bold w-full text-center rounded">Tambahkan</butt>
      </form>
    </div>




  )
}

export default FormTambah