import React from "react";
import CardBlog from "../../components/Cards/CardBlog";
import NavbarFooterLayout from "../../layout/NavbarFooterLayout";

export default function BlogPage() {
  return (
    <>
    <NavbarFooterLayout>
    <main>
      <section className="mt-20 pb-20">
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
