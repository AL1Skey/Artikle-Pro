import Tambah from "./tambah";
import Link from "next/link";

const Artikel = async() => {
  const data = await fetch(process.env.NEXT_PUBLIC_BASE_URL +"/api/content").then((res)=>res.json()).catch((err)=>{throw new Error(err)})

  return (
    <div className="w-1/3 px-8 overflow-y-auto h-[40rem]">
      <div className="mt-6 gap-10 mb-4 sticky top-0 pb-3 bg-white">
        <p className="text-2xl font-bold text-blue-400">SEMUA ARTIKEL</p>
        <Tambah />
        <form action="" className="flex gap-2">
          <input
            className="h-10 w-96 rounded-md outline outline-2 px-2 outline-blue-400"
            type="text"
          />
          <p className="mt-1">search</p>
        </form>
      </div>
      {data.map((item) => {
        return (
          <div key={item._id} className="w-full px-5 py-5 rounded-md bg-blue-100 border-2 border-blue-300 mt-2">
            <p className="font-bold">{item.content.title}</p>
            <p className="text-justify">{item.content.content}</p>
            <Link href={`/home/${item._id}`}>
              <p className="bg-blue-400 inline-block px-4 py-1 rounded-sm hover:bg-blue-500">
                selengkapnya
              </p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Artikel;