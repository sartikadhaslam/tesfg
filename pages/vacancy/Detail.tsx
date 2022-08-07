import React from "react";
import NavbarFooterLayout from "../../layout/NavbarFooterLayout";
import Serupa from "./Serupa";
import { useState } from "react";

type Job = {
  logo: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  years: string;
  status: string;
  createdTime: string;
  about: string[];
  description: string[];
  qualification: string[];
  skills: string[];
  benefit: string[];
}

let jobDetail: Job = {
    logo: 'logo company',
    title: 'UI/UX Designer',
    company: 'Skill Academy',
    location: 'Jakarta, Indonesia',
    salary: 'Rp.7000.000 - 9.000.000',
    years: '1 - 3 tahun',
    status: 'Active Hiring',
    createdTime: 'Dibuat seminggu yang lalu',
    about: [
        'Kami Skill Academy, yaitu sebuah startup pendidikan yang memberikan'
        ,'wadah edukasi bagi pelajar di Indonesia, untuk menjembatani akses '
        ,'pendidikan di Indonesia, melaui platform aplikasi Skill Academy berbasis' 
        ,'mobile dan web.'
    ],
     description:[
        'Kerjasama dengan tim product untuk mendefinisikan user problem, diskusi, dan brainstorming. '
        ,'Kerjasama dengan tim engineering dalam proses hand-off'
        ,'Membuat tampilan wireframing s/d Hi-Fi design'
        ,'Melakukan proses interaction design'
        ,'Memahami UX Writing adalah nilai plus'
        ,'Melakukan presentasi design sebelum proses hand-off  '
    ],
    qualification: [
        'Familiar dengan Figma, Miro, dan tools lainnya'
        ,'Memahami proses hand-off'
        ,'Memiliki portofolio yang kuat'
        ,'Berpengalaman selama 1-3 tahun'
        ,'Cepat belajar'
        ,'Memahami design system dan UI Kit adalah nilai plus'
        ,'Memahami programming HTML5, CSS, dan Javascript nilai plus'
        ,'Detail-oriented dan pemikir kreatif'
        ,'Problem solver dan user-centric'
        ,'Memahami Agile Method'
    ],
    skills: [
        'UI Design',
        'UX Design'
    ],
    benefit: [
        'Gaji yang mumpuni'
        ,'Ruang untuk bertumbuh'
        ,'BPJS Kesehatan 5%'
        ,'THR' 
        ,'Bonus 2x gaji tetap'
    ]
};


export default function Detail() {
  return (
     <>
      {/* <section className="pt-20 mt-20">
        <div className="container flex px-10 ml-10"> */}
            <div id="mainvacancy" className="w-2/3">
                <div className="flex flex-col">
                    <div>                   
                        <div id="icon" className="flex items-center space-x-4">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg>                            
                            <div className="font-medium dark:text-white">
                                <div>{jobDetail.title}</div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                    {jobDetail.company}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>     
                        <div className="mt-1 flex items-center">
                            <span>
                                <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                            </span>
                            <p className="text-lg">
                                {jobDetail.location}
                            </p>
                        </div>
                         <div className="mt-1 flex items-center">
                            <span>
                                <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                                </svg>
                            </span>
                            <p className="text-lg">
                                {jobDetail.salary}
                            </p>
                        </div>
                        <div className="mt-1 flex items-center">
                            <span>
                                <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                                </svg>
                            </span>
                            <p className="text-lg">
                                {jobDetail.years}
                            </p>
                        </div>
                        <div className="mt-1 flex items-center">
                            <span className="text-lg">                               
                                <div className="rounded md:rounded-lg mr-2 px-2.5 py-0.5 bg-green-800">
                                    {jobDetail.status}
                                </div>
                            </span>
                            <span className="text-lg">
                                {jobDetail.createdTime}
                            </span>
                        </div>
                    </div>
                </div>
                <div>
                    <button type="button" className="text-white bg-pink-500 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 mr-2 mb-2">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg>
                        APPLY
                    </button>
                    <button type="button" className="text-pink-500 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 mr-2 mb-2">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg>
                        BOOKMARK
                    </button>
                    <button type="button" className="text-pink-500 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 mr-2 mb-2">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>
                        BOOKMARK
                    </button>
                </div>

                <div>
                    <p className="font-bold">Deskripsi Kerja</p>
                    <p className="text-base">
                        {jobDetail.about.map(line => {
                            return <p key={line}>{line} </p>
                        })}
                    </p>
                    <ul className="list-disc px-6 py-4">
                        {jobDetail.description.map(item => {
                            return <li key={item}>{item}</li>;
                        })}
                    </ul>
                    <div id="kualifikasi" >
                        <p className="font-bold">Kualisifikasi</p>
                        <ul className="list-disc  md:list-inside">
                            {jobDetail.qualification.map(item => {
                                return <li key={item}>{item}</li>;
                            })}
                        </ul>
                    </div>
                    <div id="skills">
                        <p className="font-bold">Must have skills</p>
                        <div className="flex flex-row">
                            {jobDetail.skills.map(item => {
                                return <span className="md:rounded-lg mr-2 px-2.5 py-0.5 bg-pink-500 md:w-auto" key={item}>
                                    {item}
                                </span> ;
                            })}
                        </div>
                        <p className="font-bold">Nice to have skills</p>
                        <div className="flex flex-row">
                            {jobDetail.skills.map(item => {
                                return <span className="md:rounded-lg mr-2 px-2.5 py-0.5 bg-pink-500 md:w-auto" key={item}>
                                    {item}
                                </span> ;
                            })}
                        </div>
                    </div>
                    <div id="benefits">
                        <p className="font-bold">Benefits</p>
                        <ul className="list-disc  md:list-inside">
                                {jobDetail.benefit.map(item => {
                                    return <li className="fa-li fa fa-check" key={item}>
                                        {item}
                                    </li> ;
                                })}
                        </ul>
                    </div>
                </div>
            </div>
            {/* </div>
      </section> */}
    </>
  );
}
