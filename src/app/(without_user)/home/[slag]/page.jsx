"use client";
import React, { useCallback, useEffect, useState } from "react";

const Page = ({ params }) => {
  const [data, setData] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/content/${params.slag}`);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [params.slag]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="w-[65vw] absolute ml-[34vw] bg-blue-100 mt-[10rem] rounded-md px-8 border-2 border-blue-300 py-4  overflow-y-auto h-[34rem]">
      {data ? (
        <>
          <p>{data.author}</p>
          <p>{data.content.title}</p>
          <p className="text-justify">{data.content.content}</p>
        </>
      ) : (
        <p className="">Loading....</p>
      )}
    </div>
  );
};

export default Page;