import React from "react";
import FormUpdate from "@/app/components/formUpdate";

const page = async({params}) => {
  const profile = await fetch(process.env.NEXT_PUBLIC_BASE_URL+`/api/content/${params.slug}`,{ cache: 'no-store' }).then((resp)=> resp.json())
  return (
    <>    
      <FormUpdate post={{ ...profile.content,postId:params.slug }} />
    </>
  );
};

export default page;
