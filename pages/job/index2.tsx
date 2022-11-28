import Image from "next/image";
import React from "react";
import NavbarFooterLayout from "../../layout/NavbarFooterLayout";

export default function JobPages() {
  return (
    <>
    <NavbarFooterLayout>
      <section className="mt-40 mb-6">
        <div className="container mx-auto">
          <div className="flex space-x-6">
            <div className="relative w-full">
              <div className="flex absolute inset-y-0 left-0 items-center pl-6">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.5 0C8.22391 0 9.87721 0.684819 11.0962 1.90381C12.3152 3.12279 13 4.77609 13 6.5C13 8.11 12.41 9.59 11.44 10.73L11.71 11H12.5L17.5 16L16 17.5L11 12.5V11.71L10.73 11.44C9.55055 12.4468 8.05071 12.9999 6.5 13C4.77609 13 3.12279 12.3152 1.90381 11.0962C0.684819 9.87721 0 8.22391 0 6.5C0 4.77609 0.684819 3.12279 1.90381 1.90381C3.12279 0.684819 4.77609 0 6.5 0ZM6.5 2C4 2 2 4 2 6.5C2 9 4 11 6.5 11C9 11 11 9 11 6.5C11 4 9 2 6.5 2Z" fill="black"/>
                </svg>
              </div>
              <input
                type="text"
                className="block w-full py-4 px-16 text-lg font-semibold text-gray-900 bg-gray-200 rounded-full border border-gray-300"
                placeholder="Cari Blog Kamu disini"
              />
            </div>
            <div className="relative w-full">
              <div className="flex absolute inset-y-0 left-0 items-center pl-6">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.5 0C8.22391 0 9.87721 0.684819 11.0962 1.90381C12.3152 3.12279 13 4.77609 13 6.5C13 8.11 12.41 9.59 11.44 10.73L11.71 11H12.5L17.5 16L16 17.5L11 12.5V11.71L10.73 11.44C9.55055 12.4468 8.05071 12.9999 6.5 13C4.77609 13 3.12279 12.3152 1.90381 11.0962C0.684819 9.87721 0 8.22391 0 6.5C0 4.77609 0.684819 3.12279 1.90381 1.90381C3.12279 0.684819 4.77609 0 6.5 0ZM6.5 2C4 2 2 4 2 6.5C2 9 4 11 6.5 11C9 11 11 9 11 6.5C11 4 9 2 6.5 2Z" fill="black"/>
                </svg>
              </div>
              <input
                type="text"
                className="block w-full py-4 px-16 text-lg font-semibold text-gray-900 bg-gray-200 rounded-full border border-gray-300"
                placeholder="Cari Blog Kamu disini"
              />
            </div>
            
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto">
          <div className="flex space-x-6">
            {/* <div className="flex items-center w-auto"> */}
              <ul className="flex flex-nowrap space-x-6">
                <li>
                  <div className="flex items-center">
                    <svg className="mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C10.1435 2 8.36301 2.7375 7.05025 4.05025C5.7375 5.36301 5 7.14348 5 9C5 11.38 6.19 13.47 8 14.74V17C8 17.2652 8.10536 17.5196 8.29289 17.7071C8.48043 17.8946 8.73478 18 9 18H15C15.2652 18 15.5196 17.8946 15.7071 17.7071C15.8946 17.5196 16 17.2652 16 17V14.74C17.81 13.47 19 11.38 19 9C19 7.14348 18.2625 5.36301 16.9497 4.05025C15.637 2.7375 13.8565 2 12 2ZM9 21C9 21.2652 9.10536 21.5196 9.29289 21.7071C9.48043 21.8946 9.73478 22 10 22H14C14.2652 22 14.5196 21.8946 14.7071 21.7071C14.8946 21.5196 15 21.2652 15 21V20H9V21Z" fill="black"/>
                    </svg>
                    <span className="text-black font-semibold text-xl">Untuk Anda</span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <svg className="mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.19 14.19L6 18L9.81 9.81L18 6L14.19 14.19ZM12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 10.9C11.7083 10.9 11.4285 11.0159 11.2222 11.2222C11.0159 11.4285 10.9 11.7083 10.9 12C10.9 12.2917 11.0159 12.5715 11.2222 12.7778C11.4285 12.9841 11.7083 13.1 12 13.1C12.2917 13.1 12.5715 12.9841 12.7778 12.7778C12.9841 12.5715 13.1 12.2917 13.1 12C13.1 11.7083 12.9841 11.4285 12.7778 11.2222C12.5715 11.0159 12.2917 10.9 12 10.9Z" fill="black"/>
                    </svg>
                    <span className="text-black font-semibold text-xl">Explore</span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <svg className="mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17 3H7C6.46957 3 5.96086 3.21071 5.58579 3.58579C5.21071 3.96086 5 4.46957 5 5V21L12 18L19 21V5C19 4.46957 18.7893 3.96086 18.4142 3.58579C18.0391 3.21071 17.5304 3 17 3Z" fill="#EC407A"/>
                    </svg>
                    <span className="text-pink-500 font-semibold text-xl">Tersimpan</span>
                  </div>
                </li>

              </ul>
            {/* </div> */}
          </div>
        </div>
      </section>
      <section className="mt-6">
        <div className="container mx-auto">
          <div className="w-full">
            <h1 className="font-bold text-pink-800 text-xl py-5">Filter Pencarian Anda</h1>
          </div>
          <div className="flex space-x-6">
            <div className="w-2/12">
              <div className="flex flex-col">
                <div className="flex flex-wrap bg-pink-800 rounded-lg px-3 py-4 mb-4">
                  <div className="flex mb-3">
                    <h1 className="font-semibold text-white text-xl">Urutkan Dari</h1>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.41 15.41L12 10.83L16.59 15.41L18 14L12 8L6 14L7.41 15.41Z" fill="white"/>
                    </svg>
                  </div>
                  <div className="flex">
                    <button className="text-sm py-2 px-6 rounded-full bg-pink-200 text-pink-700 text-center inline-flex items-center mr-2 mb-2">
                      Relevan
                    </button>
                    <button className="text-sm py-2 px-6 rounded-full bg-pink-800 text-white text-center inline-flex items-center mr-2 mb-2">
                      Terbaru
                    </button>
                  </div>
                </div>
                <div className="flex flex-wrap bg-pink-800 rounded-lg px-3 py-4 mb-4">
                  <div className="flex justify-between mb-3">
                    <h1 className="font-semibold text-white text-xl">Tipe Pekerjaan</h1>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.41 15.41L12 10.83L16.59 15.41L18 14L12 8L6 14L7.41 15.41Z" fill="white"/>
                    </svg>
                  </div>
                  <div className="block">
                    <div className="mt-2">
                      <label className="inline-flex items-center">
                        <input type="checkbox" className="border-solid border-2 border-white bg-pink-800"/>
                        <span className="ml-3 text-xl text-white font-semibold">Simple checkbox</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input type="checkbox" className="border-solid border-2 border-white bg-pink-800"/>
                        <span className="ml-3 text-xl text-white font-semibold">Simple checkbox</span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap bg-pink-800 rounded-lg px-3 py-4 mb-4">
                  <div className="block">
                    <div className="mt-2">
                      <label className="inline-flex relative items-center cursor-pointer">
                        <input type="checkbox" value="" id="checked-toggle" className="sr-only peer" checked />
                        <div className="w-11 h-6 bg-white rounded-full peer peer-focus:ring-4 peer-focus:ring-white peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-pink-800 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-white"></div>
                        <span className="ml-3 text-xs font-semibold text-white">Terbuka Untuk Umum</span>
                      </label>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>

            {/* card job */}
            <div className="w-10/12">
              <ul className="flex flex-wrap">
                <li className="w-6/12 px-6">
                  <div className="w-full p-6 bg-gray-200 rounded-lg mb-10">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <Image 
                        src="/tokped.png"
                        alt="Landscape picture"
                        width={65}
                        height={65}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-2xl font-semibold">
                            UI/UX Designer
                        </p>
                        <p className="text-xl font-semibold">
                            Tokopedia
                        </p>
                      </div>
                      <div className="inline-flex items-center">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17 3H7C6.46957 3 5.96086 3.21071 5.58579 3.58579C5.21071 3.96086 5 4.46957 5 5V21L12 18L19 21V5C19 4.46957 18.7893 3.96086 18.4142 3.58579C18.0391 3.21071 17.5304 3 17 3Z" fill="black"/>
                        </svg>
                      </div>
                    </div>
                    <div className="pt-4">
                      <div className="flex items-center py-2">
                        <svg className="mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 11.5C11.337 11.5 10.7011 11.2366 10.2322 10.7678C9.76339 10.2989 9.5 9.66304 9.5 9C9.5 8.33696 9.76339 7.70107 10.2322 7.23223C10.7011 6.76339 11.337 6.5 12 6.5C12.663 6.5 13.2989 6.76339 13.7678 7.23223C14.2366 7.70107 14.5 8.33696 14.5 9C14.5 9.3283 14.4353 9.65339 14.3097 9.95671C14.1841 10.26 13.9999 10.5356 13.7678 10.7678C13.5356 10.9999 13.26 11.1841 12.9567 11.3097C12.6534 11.4353 12.3283 11.5 12 11.5ZM12 2C10.1435 2 8.36301 2.7375 7.05025 4.05025C5.7375 5.36301 5 7.14348 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 7.14348 18.2625 5.36301 16.9497 4.05025C15.637 2.7375 13.8565 2 12 2Z" fill="black"/>
                        </svg>
                        <span className="text-black font-semibold text-xl">Jakarta, Indonesia</span>
                      </div>
                      <div className="flex items-center py-2">
                        <svg className="mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3 6H21V18H3V6ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9ZM7 8C7 8.53043 6.78929 9.03914 6.41421 9.41421C6.03914 9.78929 5.53043 10 5 10V14C5.53043 14 6.03914 14.2107 6.41421 14.5858C6.78929 14.9609 7 15.4696 7 16H17C17 15.4696 17.2107 14.9609 17.5858 14.5858C17.9609 14.2107 18.4696 14 19 14V10C18.4696 10 17.9609 9.78929 17.5858 9.41421C17.2107 9.03914 17 8.53043 17 8H7Z" fill="black"/>
                        </svg>
                        <span className="text-black font-semibold text-xl">Rp.8000.000 - 10.000.000</span>
                      </div>
                      <div className="flex items-center py-2">
                        <svg className="mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6H20C20.5304 6 21.0391 6.21071 21.4142 6.58579C21.7893 6.96086 22 7.46957 22 8V19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V8C2 6.89 2.89 6 4 6H8V4C8 2.89 8.89 2 10 2ZM14 6V4H10V6H14Z" fill="black"/>
                        </svg>
                        <span className="text-black font-semibold text-xl">1-3 tahun</span>
                      </div>
                    </div>
                    <div className="flex items-center pt-4">
                        <button className="text-xs py-2 px-4 rounded-full bg-emerald-900 text-white text-center inline-flex mr-2 mb-2">
                          Aktif Hiring
                        </button>
                        <p className="text-xs text-black ml-2 font-semibold">
                          Dibuat seminggu yang lalu
                        </p>
                    </div>
                  </div>
                </li>
                <li className="w-6/12 px-6">
                  <div className="w-full p-6 bg-gray-200 rounded-lg mb-10">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <Image 
                        src="/tokped.png"
                        alt="Landscape picture"
                        width={65}
                        height={65}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-2xl font-semibold">
                            UI/UX Designer
                        </p>
                        <p className="text-xl font-semibold">
                            Tokopedia
                        </p>
                      </div>
                      <div className="inline-flex items-center">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17 3H7C6.46957 3 5.96086 3.21071 5.58579 3.58579C5.21071 3.96086 5 4.46957 5 5V21L12 18L19 21V5C19 4.46957 18.7893 3.96086 18.4142 3.58579C18.0391 3.21071 17.5304 3 17 3Z" fill="black"/>
                        </svg>
                      </div>
                    </div>
                    <div className="pt-4">
                      <div className="flex items-center py-2">
                        <svg className="mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 11.5C11.337 11.5 10.7011 11.2366 10.2322 10.7678C9.76339 10.2989 9.5 9.66304 9.5 9C9.5 8.33696 9.76339 7.70107 10.2322 7.23223C10.7011 6.76339 11.337 6.5 12 6.5C12.663 6.5 13.2989 6.76339 13.7678 7.23223C14.2366 7.70107 14.5 8.33696 14.5 9C14.5 9.3283 14.4353 9.65339 14.3097 9.95671C14.1841 10.26 13.9999 10.5356 13.7678 10.7678C13.5356 10.9999 13.26 11.1841 12.9567 11.3097C12.6534 11.4353 12.3283 11.5 12 11.5ZM12 2C10.1435 2 8.36301 2.7375 7.05025 4.05025C5.7375 5.36301 5 7.14348 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 7.14348 18.2625 5.36301 16.9497 4.05025C15.637 2.7375 13.8565 2 12 2Z" fill="black"/>
                        </svg>
                        <span className="text-black font-semibold text-xl">Jakarta, Indonesia</span>
                      </div>
                      <div className="flex items-center py-2">
                        <svg className="mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3 6H21V18H3V6ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9ZM7 8C7 8.53043 6.78929 9.03914 6.41421 9.41421C6.03914 9.78929 5.53043 10 5 10V14C5.53043 14 6.03914 14.2107 6.41421 14.5858C6.78929 14.9609 7 15.4696 7 16H17C17 15.4696 17.2107 14.9609 17.5858 14.5858C17.9609 14.2107 18.4696 14 19 14V10C18.4696 10 17.9609 9.78929 17.5858 9.41421C17.2107 9.03914 17 8.53043 17 8H7Z" fill="black"/>
                        </svg>
                        <span className="text-black font-semibold text-xl">Rp.8000.000 - 10.000.000</span>
                      </div>
                      <div className="flex items-center py-2">
                        <svg className="mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6H20C20.5304 6 21.0391 6.21071 21.4142 6.58579C21.7893 6.96086 22 7.46957 22 8V19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V8C2 6.89 2.89 6 4 6H8V4C8 2.89 8.89 2 10 2ZM14 6V4H10V6H14Z" fill="black"/>
                        </svg>
                        <span className="text-black font-semibold text-xl">1-3 tahun</span>
                      </div>
                    </div>
                    <div className="flex items-center pt-4">
                        <button className="text-xs py-2 px-4 rounded-full bg-emerald-900 text-white text-center inline-flex mr-2 mb-2">
                          Aktif Hiring
                        </button>
                        <p className="text-xs text-black ml-2 font-semibold">
                          Dibuat seminggu yang lalu
                        </p>
                    </div>
                  </div>
                </li>
                <li className="w-6/12 px-6">
                  <div className="w-full p-6 bg-gray-200 rounded-lg mb-10">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <Image 
                        src="/tokped.png"
                        alt="Landscape picture"
                        width={65}
                        height={65}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-2xl font-semibold">
                            UI/UX Designer
                        </p>
                        <p className="text-xl font-semibold">
                            Tokopedia
                        </p>
                      </div>
                      <div className="inline-flex items-center">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17 3H7C6.46957 3 5.96086 3.21071 5.58579 3.58579C5.21071 3.96086 5 4.46957 5 5V21L12 18L19 21V5C19 4.46957 18.7893 3.96086 18.4142 3.58579C18.0391 3.21071 17.5304 3 17 3Z" fill="black"/>
                        </svg>
                      </div>
                    </div>
                    <div className="pt-4">
                      <div className="flex items-center py-2">
                        <svg className="mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 11.5C11.337 11.5 10.7011 11.2366 10.2322 10.7678C9.76339 10.2989 9.5 9.66304 9.5 9C9.5 8.33696 9.76339 7.70107 10.2322 7.23223C10.7011 6.76339 11.337 6.5 12 6.5C12.663 6.5 13.2989 6.76339 13.7678 7.23223C14.2366 7.70107 14.5 8.33696 14.5 9C14.5 9.3283 14.4353 9.65339 14.3097 9.95671C14.1841 10.26 13.9999 10.5356 13.7678 10.7678C13.5356 10.9999 13.26 11.1841 12.9567 11.3097C12.6534 11.4353 12.3283 11.5 12 11.5ZM12 2C10.1435 2 8.36301 2.7375 7.05025 4.05025C5.7375 5.36301 5 7.14348 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 7.14348 18.2625 5.36301 16.9497 4.05025C15.637 2.7375 13.8565 2 12 2Z" fill="black"/>
                        </svg>
                        <span className="text-black font-semibold text-xl">Jakarta, Indonesia</span>
                      </div>
                      <div className="flex items-center py-2">
                        <svg className="mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3 6H21V18H3V6ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9ZM7 8C7 8.53043 6.78929 9.03914 6.41421 9.41421C6.03914 9.78929 5.53043 10 5 10V14C5.53043 14 6.03914 14.2107 6.41421 14.5858C6.78929 14.9609 7 15.4696 7 16H17C17 15.4696 17.2107 14.9609 17.5858 14.5858C17.9609 14.2107 18.4696 14 19 14V10C18.4696 10 17.9609 9.78929 17.5858 9.41421C17.2107 9.03914 17 8.53043 17 8H7Z" fill="black"/>
                        </svg>
                        <span className="text-black font-semibold text-xl">Rp.8000.000 - 10.000.000</span>
                      </div>
                      <div className="flex items-center py-2">
                        <svg className="mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6H20C20.5304 6 21.0391 6.21071 21.4142 6.58579C21.7893 6.96086 22 7.46957 22 8V19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V8C2 6.89 2.89 6 4 6H8V4C8 2.89 8.89 2 10 2ZM14 6V4H10V6H14Z" fill="black"/>
                        </svg>
                        <span className="text-black font-semibold text-xl">1-3 tahun</span>
                      </div>
                    </div>
                    <div className="flex items-center pt-4">
                        <button className="text-xs py-2 px-4 rounded-full bg-emerald-900 text-white text-center inline-flex mr-2 mb-2">
                          Aktif Hiring
                        </button>
                        <p className="text-xs text-black ml-2 font-semibold">
                          Dibuat seminggu yang lalu
                        </p>
                    </div>
                  </div>
                </li>
                
                
                
              </ul>

            </div>
          </div>
        </div>
      </section>
    </NavbarFooterLayout>
    </>
  );
}
