import Image from "next/image";
import SecSearchCreateBlog from "../../components/SecSearchCreateBlog";
import NavbarFooterLayout from "../../layout/NavbarFooterLayout";

export default function DetailBlog() {
  return (
    <>
      <NavbarFooterLayout>
        <section className="mt-60 mb-10">
          <div className="container mx-auto">
            <div className="flex items-center space-x-6">
              <div className="w-full">
                <div className="relative">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-6 pointer-events-none">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.5 0C8.22391 0 9.87721 0.684819 11.0962 1.90381C12.3152 3.12279 13 4.77609 13 6.5C13 8.11 12.41 9.59 11.44 10.73L11.71 11H12.5L17.5 16L16 17.5L11 12.5V11.71L10.73 11.44C9.55055 12.4468 8.05071 12.9999 6.5 13C4.77609 13 3.12279 12.3152 1.90381 11.0962C0.684819 9.87721 0 8.22391 0 6.5C0 4.77609 0.684819 3.12279 1.90381 1.90381C3.12279 0.684819 4.77609 0 6.5 0ZM6.5 2C4 2 2 4 2 6.5C2 9 4 11 6.5 11C9 11 11 9 11 6.5C11 4 9 2 6.5 2Z" fill="black"/>
                    </svg>
                  </div>
                  <input
                    type="text"
                    className="w-full py-4 px-16 text-lg font-semibold text-gray-900 bg-gray-200 rounded-full border border-gray-300"
                    placeholder="Cari Blog Kamu disini"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pb-20">
          <div className="container mx-auto">
            <div className="flex space-x-6">
              <div className="w-full">
                <div className="text-center">
                <Image 
                  className="rounded-lg"
                  src="/pct1.png"
                  alt="Landscape picture"
                  width={1240}
                  height={556}
                />
                </div>
                <div className="pt-6">
                  <h1 className="text-5xl font-semibold text-pink-800">Should Designers Code ?</h1>
                  <div className="flex py-10">
                    <div className="w-6/12 flex items-center">
                      <Image
                      className="rounded-full"
                      src="/pct1.png"
                      alt="Landscape picture"
                      width={50}
                      height={50}
                      />
                    <h1 className="px-2 text-3xl font-semibold">Nadine Chandra</h1>
                    </div>
                    <div className="w-6/12 text-right px-2">
                      <button
                        className="text-xl py-3 px-6 rounded-lg border-solid border-2 border-pink-500 text-pink-500 inline-flex items-center" 
                        type="submit"
                      >
                      <svg className="mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 16.08C17.24 16.08 16.56 16.38 16.04 16.85L8.91 12.7C8.96 12.47 9 12.24 9 12C9 11.76 8.96 11.53 8.91 11.3L15.96 7.19C16.5 7.69 17.21 8 18 8C19.66 8 21 6.66 21 5C21 3.34 19.66 2 18 2C16.34 2 15 3.34 15 5C15 5.24 15.04 5.47 15.09 5.7L8.04 9.81C7.5 9.31 6.79 9 6 9C4.34 9 3 10.34 3 12C3 13.66 4.34 15 6 15C6.79 15 7.5 14.69 8.04 14.19L15.16 18.34C15.11 18.55 15.08 18.77 15.08 19C15.08 20.61 16.39 21.91 18 21.91C19.61 21.91 20.92 20.61 20.92 19C20.92 17.39 19.61 16.08 18 16.08ZM18 4C18.55 4 19 4.45 19 5C19 5.55 18.55 6 18 6C17.45 6 17 5.55 17 5C17 4.45 17.45 4 18 4ZM6 13C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11C6.55 11 7 11.45 7 12C7 12.55 6.55 13 6 13ZM18 20C17.45 20 17 19.55 17 19C17 18.45 17.45 18 18 18C18.55 18 19 18.45 19 19C19 19.55 18.55 20 18 20Z" fill="#EC407A"/>
                      </svg>

                        SHARE
                      </button>
                    </div>
                  </div>
                  <p className="text-2xl font-semibold">
                    Menjadi Seorang Designer, terutama UI/UX Designer dituntut harus bisa memahami seluk-beluk digital
                    product. Karena seorang Designer harus bisa membuat design product yang bisa menjawab kebutuhan
                    pengguna. Disatu sisi, Designer harus bisa memahami kebutuhan pengguna, namun terkadang dituntut
                    empati dengan tim dev. Mengapa demikian ?

                    Sebagus-bagusnya tampilan desain, namun jika tidak bisa didevelop, maka mustahil untuk bisa membuat
                    digital product untuk pengguna. Pertanyaannya, haruskah designer bisa mengoding ? Apa iya koding itu
                    jadi hal yang wajib dimiliki oleh Designer ?

                    Bisa koding menjadi nilai plus, namun tidak bisa koding juga bukan masalah. Asalkan bisa memahami 
                    sedikit-dikit kodingan, biar kita bisa empati dengan tim dev. 

                    Untuk UI/UX Designer sendiri, skill koding apa yang setidaknya kuasai :
                    HTML5
                    CSS
                    Javascript
                    Flutter
                    Kotlin

                    Lantas, dengan skill koding diatas, apakah harus bisa kuasai oleh Designer ?

                    Bisa iya bisa juga tidak
                    Bisa kuasai koding jadi nilai plus dan nantinya bisa menjadi UI/UX Developer, UI Engineer, atau UX 
                    Engineer.
                    Kalo tidak bisa kuasai hal tersebut, tidak masalah. Yang terpenting punya sifat empati dengan tim dev.
                  </p>
                </div>
                <div className="pt-10">  
                  <h1 className="text-4xl font-semibold">Komentar</h1>
                </div>
                <div className="pt-6">
                  <input
                    type="text"
                    className="w-full py-9 text-sm font-bold text-gray-900 bg-gray-200 rounded-full border border-gray-300"
                    placeholder="Tuliskan komentar anda disini..."
                  />
                </div>
                <div className="pt-6 text-left">
                  <button
                      className="text-2xl py-2 px-8 rounded-md bg-pink-800 text-white"
                      type="submit"
                      >
                      Kirim
                  </button>
                </div>
                <div className="pt-10 pb-10">
                  <div className="flex flex-col py-10 p-3 bg-gray-200 rounded-md">
                    <div className="w-full flex items-center">
                      <Image
                      className="rounded-full"
                      src="/pct1.png"
                      alt="Landscape picture"
                      width={45}
                      height={45}
                      />
                      <h1 className="px-2 text-xl font-semibold text-pink-800">Nadine Chandra</h1>
                    </div>
                    <div className="w-full pt-4">
                      <p className="text-xl font-semibold">Bagus kak artikelnya. Thank you ya atas tulisannya.... :)</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
        
      </NavbarFooterLayout>
    </>
  )
}
