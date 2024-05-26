import CMS from "@/app/components/CMS";
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
    <CMS/>
  );
};

export default page;
