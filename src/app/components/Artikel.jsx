import React from "react";
import Tambah from "./tambah";
import Link from "next/link";


const Artikel = () => {
  const data1 = [
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
  ];

  return (
    <>
      <div className="  w-1/3 px-8    overflow-y-auto h-[40rem] ">
        <div className="mt-6 gap-10 mb-4 sticky top-0 pb-3 bg-white ">
            <p className="text-2xl font-bold text-blue-400">SEMUA ARTIKEL</p>
          <Tambah />
          <form action="" className="flex gap-2 ">
            <input
              className="h-10 w-96 rounded-md outline outline-2 px-2 outline-blue-400"
              type="text"
            />
            <p className="mt-1 ">search</p>
          </form>
        </div>
        {data1.map((item) => {
          return (
            <>
              <div className="w-full px-5 py-5 rounded-md  bg-blue-100 border-2 border-blue-300  mt-2">
                <p className="font-bold">{item.content.title}</p>
                <p className="text-justify">{item.content.content}</p>
            <Link href="/home/2"> <p className="bg-blue-400 inline-block px-4 py-1 rounded-sm hover:bg-blue-500 ">
                  selengkapnya
                </p></Link>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Artikel;
