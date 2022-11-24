import Image from "next/image";

export default function SecAboutUs() {
  return (
    <section className="mt-10 md:mt-20 relative">
      <div className="container mx-auto justify-center text-center flex flex-wrap">
        <div className="w-full px-12 md:px-4">
          <h2 className="font-bold text-4xl">ABOUT US</h2>
          <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500">FemaleGeek is a community of women whom engaged in IT world to enhance their skills, get insights about IT careers and network. Established in 2 February 2016, this community has over than 1400 of women who participates in the community events.</p>
          <div className="absolute top-0 right-0 pt-4 bg-cover w-10/12 sm:w-6/12">
            <Image 
              src="/img/bg-pink.png"
              alt="Landscape picture"
              width={700}
              height={380}
            />
          </div>
        </div>
        <div className="w-full px-12 md:px-4">
          <div className="grid justify-items-start">
            <h2 className="font-bold text-2xl pt-8">WHAT WE DO</h2>
            <p className="font-semibold text-base pb-6 text-gray-500">Keseharian apa yang kami lakukan.</p>
          </div>
          <div className="w-full grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-5 lg:grid-cols-4 lg:gap-x-10">
            <div className="w-full p-6 bg-[#EC407A] rounded-lg group hover:bg-[#ec4079d4]">
              <div className="flex flex-col items-center">
                <div className="py-2 space-x-4 group-hover:hidden">
                  <Image 
                  src="/img/events.png"
                  alt="Landscape picture"
                  width={80}
                  height={80}
                  />
                </div>
                <div className="py-2 space-x-4 group-hover:pt-0">
                  <h2 className="font-bold text-lg text-white">Event</h2>
                </div>
                <div className="space-x-4 group-hover:pt-0">
                  <hr className="hidden group-hover:block h-px w-40 bg-gray-200 border-0"></hr>
                </div>
                <div className="pt-2 hidden group-hover:block group-hover:-p-6 group-hover:text-white group-hover:text-sm"><p>Activities organized by FemaleGeek or in collaboration with partners. The activities are useful for FemaleGeek members as well as for IT audiences</p></div>
              </div>
            </div>
            <div className="w-full p-6 bg-[#EC407A] rounded-lg group hover:bg-[#ec4079d4]">
              <div className="flex flex-col items-center">
                <div className="py-2 space-x-4 group-hover:hidden">
                  <Image 
                  src="/img/kulgram.png"
                  alt="Landscape picture"
                  width={80}
                  height={80}
                  />
                </div>
                <div className="py-2 space-x-4 group-hover:pt-0">
                  <h2 className="font-bold text-lg text-white">Kuliah Telegram</h2>
                </div>
                <div className="space-x-4 group-hover:pt-0">
                  <hr className="hidden group-hover:block h-px w-40 bg-gray-200 border-0"></hr>
                </div>
                <div className="pt-2 hidden group-hover:block group-hover:-p-6 group-hover:text-white group-hover:text-sm"><p>Facilitating members to increase their knowledge about the technology in IT</p></div>
              </div>
            </div>
            <div className="w-full p-6 bg-[#EC407A] rounded-lg group hover:bg-[#ec4079d4]">
              <div className="flex flex-col items-center">
                <div className="py-2 space-x-4 group-hover:hidden">
                  <Image 
                  src="/img/mentoring.png"
                  alt="Landscape picture"
                  width={80}
                  height={80}
                  />
                </div>
                <div className="py-2 space-x-4 group-hover:pt-0">
                  <h2 className="font-bold text-lg text-white">Mentoring</h2>
                </div>
                <div className="space-x-4 group-hover:pt-0">
                  <hr className="hidden group-hover:block h-px w-40 bg-gray-200 border-0"></hr>
                </div>
                <div className="pt-2 hidden group-hover:block group-hover:-p-6 group-hover:text-white group-hover:text-sm"><p>Mentoring program where there is 1 mentor will guide 2-3 FemaleGeek members</p></div>
              </div>
            </div>
            <div className="w-full p-6 bg-[#EC407A] rounded-lg group hover:bg-[#ec4079d4]">
              <div className="flex flex-col items-center">
                <div className="py-2 space-x-4 group-hover:hidden">
                  <Image 
                  src="/img/volunteer.png"
                  alt="Landscape picture"
                  width={80}
                  height={80}
                  />
                </div>
                <div className="py-2 space-x-4 group-hover:pt-0">
                  <h2 className="font-bold text-lg text-white">Volunteer</h2>
                </div>
                <div className="space-x-4 group-hover:pt-0">
                  <hr className="hidden group-hover:block h-px w-40 bg-gray-200 border-0"></hr>
                </div>
                <div className="pt-2 hidden group-hover:block group-hover:-p-6 group-hover:text-white group-hover:text-sm"><p>Provide opportunities for community members who have a high social life</p></div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}
