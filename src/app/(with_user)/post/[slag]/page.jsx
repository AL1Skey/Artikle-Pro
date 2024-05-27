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
    <div className="w-[65vw] bg-blue-100 mx-auto mt-10 rounded-md px-8 border-2 border-blue-300 py-4  overflow-y-auto h-[34rem]">
      {data ? (
        <>
          <h1 className="text-3xl font-bold">{data.content.title}</h1>
          <p className="text-justify py-5">{data.content.content}</p>
          <p className="italic py-5">{"By "+data.author}</p>
        </>
      ) : (
        <p className="">Loading....</p>
      )}
    </div>
  );
};

export default Page;