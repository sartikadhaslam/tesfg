import React from "react";
import CardBlog from "../../components/Cards/CardBlog";
import NavbarFooterLayout from "../../layout/NavbarFooterLayout";

export default function BlogPage() {
  return (
    <>
    <NavbarFooterLayout>
    <main>
      <section className="pt-20 mt-20">
        <div className="container flex px-10 ml-10">
        {/* <div className="relative w-full"> */}
          {/* <div className="absolute top-3 left-3 items-center"> */}
            {/* <svg
              className="w-5 h-5 text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"></path>
            </svg> */}
          {/* </div> */}
          <input
            type="text"
            className="w-full py-2 pl-10 text-gray-900 bg-gray-200 rounded-full border border-gray-300"
            placeholder="Cari Blog Kamu disini"
          />
          <button
            className="text-sm py-2 px-5 rounded-full bg-pink-800 text-white"
            type="submit"
          >
            Create New Blog
          </button>
        {/* </div> */}
        </div>
      </section>
      <section className="mt-10 pb-20">
          <CardBlog />
          <CardBlog />
          <CardBlog />
      </section>
      <section className="pt-20 block bg-pink-100">
        <div className="container mx-auto px-10">
          <div className="flex flex-wrap justify-center text-center mb-24">
            <div className="w-full lg:w-12/12 px-4">
              <h2 className="text-4xl font-bold mb-10">
                SUBSCRIPTION
              </h2>
              <div className="flex flex-wrap pt-20 mb-20">
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative w-full mb-3">
                    <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-pink-400 text-pink-600 bg-white rounded shadow focus:outline-none focus:ring w-full"
                        placeholder="Nama"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative w-full mb-3">
                    <input
                        type="email"
                        className="border-0 px-3 py-3 placeholder-pink-400 text-pink-600 bg-white rounded shadow focus:outline-none focus:ring w-full"
                        placeholder="Email"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative w-full mb-3">
                    <button className="px-3 py-3 bg-pink-600 text-white" type="submit">Berlangganan</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </section>
    </main>
    </NavbarFooterLayout>
    </>
  );
}
