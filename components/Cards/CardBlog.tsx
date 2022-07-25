import Image from "next/image";
import styles from "../../styles/Home.module.css";

export default function CardBlog() {
  return (
    <>
    <div className="container mx-auto px-10 pb-10">
      <div className="flex flex-wrap justify-between">
        <p className="text-2xl font-bold">Blog Untuk Anda</p>
        <p className="font-medium text-pink-600">Lihat Semua</p>
      </div>
      <div className="flex flex-wrap justify-between mt-10">
        <div className="w-full md:w-5/12">
          <div className="relative flex flex-col bg-white w-full mb-6 shadow-lg">
            <Image
            className="m-0"
            src="/pct1.png"
            alt="Landscape picture"
            width={500}
            height={200}
            />
            <div className="relative p-4">
              <h1 className="font-bold text-lg text-pink-600">Judul Satu</h1>
              <div className="float-left flex mt-4">
                <Image
                className="rounded-full"
                src="/pct1.png"
                alt="Landscape picture"
                width={30}
                height={30}
                />
                <h1 className="px-2 mr-10 text-sm">Khisty N Hanafi</h1>
              </div>
              <div className="float-right flex mt-4">
              <button
                className="flloat-right text-sm py-1 px-2 rounded-md bg-pink-600 text-white"
                type="submit"
              >
                Read More
              </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-5/12">
          <div className="relative flex flex-col min-w-0 bg-white w-full mb-6 shadow-lg">
            <Image
            className="m-0"
            src="/pct1.png"
            alt="Landscape picture"
            width={500}
            height={200}
            />
            <div className="relative p-4">
              <h1 className="font-bold text-lg text-pink-600">Judul Satu</h1>
              <div className="float-left flex mt-4">
                <Image
                className="rounded-full"
                src="/pct1.png"
                alt="Landscape picture"
                width={30}
                height={30}
                />
                <h1 className="px-2 mr-10 text-sm">Khisty N Hanafi</h1>
              </div>
              <div className="float-right flex mt-4">
              <button
                className="flloat-right text-sm py-1 px-2 rounded-md bg-pink-600 text-white"
                type="submit"
              >
                Read More
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
