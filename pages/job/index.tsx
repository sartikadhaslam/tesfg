import { DiffieHellman } from "crypto";
import React from "react";
import NavbarFooterLayout from "../../layout/NavbarFooterLayout";
import FilterCard from "./FilterCard";

export default function JobPage() {
  return (
    <NavbarFooterLayout>
      <div className="ml-12 mt-10 mr-12">
        <div className="flex space-x-3 ml-2 mt-3 mr-2 mb-3">
          <div className="basis-1/2">
            <input type="search" name="position" id="email" className="bg-gray-200 rounded-full w-full form-control relative flex-auto block w-full px-5 py-2 text-base font-normal text-gray-700 bg-clip-padding transition ease-in-out m-0 focus:text-gray-700 focus:border-blue-600 focus:outline-none" placeholder="Cari Posisi Pekerjaan"/>
          </div>
          <div className="basis-1/2">
            <input type="search" name="position" id="email" className="bg-gray-200 rounded-full w-full form-control relative flex-auto block w-full px-5 py-2 text-base font-normal text-gray-700 bg-clip-padding transition ease-in-out m-0 focus:text-gray-700 focus:border-blue-600 focus:outline-none" placeholder="Cari Lokasi"/>
          </div>
        </div>
        <div className="ml-2 mt-3 mr-2 mb-3 space-y-4">
          <div className="flex space-x-2 text-base space-x-5">
            <a href="https://seinfeldquotes.com" className="text-blue-600 visited:text-purple-600">
              Untuk Anda
            </a>
            <a href="https://seinfeldquotes.com" className="text-blue-600 visited:text-purple-600">
              Expore
            </a>
            <a href="https://seinfeldquotes.com" className="text-blue-600 visited:text-purple-600">
              Tersimpan
            </a>
          </div>
          <div>
            <h6 className="text-pink-800 font-bold text-base">Filter Pencarian Anda</h6>
          </div>
        </div>
        <div className="flex flex-row justify-center">
          <div className="basis-1/6 text-white ml-2 mr-3 mb-3 space-y-3">
            <FilterCard>
              <p className="text-sm">Urutkan dari</p>
            </FilterCard>
            <FilterCard>
              <p className="text-sm">Tipe Pekerjaan</p>
            </FilterCard>
            <FilterCard>
              <p className="text-sm">Terbuka Untuk Remote</p>
            </FilterCard>
            <FilterCard>
              <p className="text-sm">Pengalaman</p>
            </FilterCard>
            <FilterCard>
              <p className="text-sm">Lokasi</p>
            </FilterCard>
          </div>
          <div className="basis-5/6 bg-slate-500 flex flex-wrap ml-2 mr-2 space-x-3">
            <div className="basis-1/2">
              <div className="basis-1/2 block p-6 rounded-lg shadow-lg bg-gray-200">

              </div>
            </div>
            <div className="basis-1/2">
              <div className="basis-1/2 block p-6 rounded-lg shadow-lg bg-gray-200">

              </div>
            </div>
            
          </div>
        </div>
      </div>
    </NavbarFooterLayout>
    
  );
}
