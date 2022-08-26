import Image from "next/image";
import styles from "../../styles/Home.module.css";

export default function CardBlog() {
  return (
    <div className="container mx-auto mt-10">
      {/* header title blog */}
      <div className="flex flex-wrap justify-between">
        <p className="text-3xl font-semibold">Blog Untuk Anda</p>
        <p className="text-xl font-bold text-pink-600">Lihat Semua</p>
      </div>
      {/* end header title blog */}

      {/* item blog */}
      <div className="flex flex-wrap -mx-6 mt-8">
        <div className="w-6/12 px-6">
          <article>
            <div className="relative flex flex-col bg-gray-200">
              <Image
              className="m-0"
              src="/pct1.png"
              alt="Landscape picture"
              width={588}
              height={278}
              />
              <div className="p-4">
                <h1 className="font-bold text-2xl text-pink-600">Should Designers Code ?</h1>
                <div className="flex mt-4">
                  <div className="w-6/12 flex items-center">
                    <Image
                    className="rounded-full"
                    src="/pct1.png"
                    alt="Landscape picture"
                    width={40}
                    height={40}
                    />
                    <h1 className="px-2 mr-10 text-xl font-semibold">Nadine Chandra</h1>
                  </div>
                  <div className="w-6/12 text-right">
                    <button
                      className="text-right text-sm py-2 px-4 rounded-lg bg-pink-600 text-white"
                      type="submit"
                      >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
        <div className="w-6/12 px-6">
          <article>
            <div className="relative flex flex-col bg-gray-200">
              <Image
              className="m-0"
              src="/pct2.png"
              alt="Landscape picture"
              width={588}
              height={278}
              />
              <div className="p-4">
                <h1 className="font-bold text-2xl text-pink-600">Tips Perempuan bisa PD Mengoding</h1>
                <div className="flex mt-4">
                  <div className="w-6/12 flex items-center">
                    <Image
                    className="rounded-full"
                    src="/pct1.png"
                    alt="Landscape picture"
                    width={40}
                    height={40}
                    />
                    <h1 className="px-2 mr-10 text-xl font-semibold">Nadine Chandra</h1>
                  </div>
                  <div className="w-6/12 text-right">
                    <button
                      className="text-right text-sm py-2 px-4 rounded-lg bg-pink-600 text-white"
                      type="submit"
                      >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
      {/* end item blog */}
    </div>
  );
}
