import Image from "next/image";
import CardAbout from "./Cards/CardAbout";

export default function SecAboutUs() {
  return (
    <section className="mt-10 md:mt-20 relative">
      <div className="container mx-auto justify-center text-center flex flex-wrap">
        <div className="w-full px-12 md:px-4">
          <h2 className="font-bold text-4xl font-mulish">ABOUT US</h2>
          <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500 font-montserrat">FemaleGeek is a community of women whom engaged in IT world to enhance their skills, get insights about IT careers and network. Established in 2 February 2016, this community has over than 1400 of women who participates in the community events.</p>
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
            <h2 className="font-bold text-2xl pt-8 font-mulish">WHAT WE DO</h2>
            <p className="leading-normal text-base pb-6 text-gray-500 font-montserrat">Keseharian apa yang kami lakukan.</p>
          </div>
          <div className="w-full grid grid-cols-1 gap-y-6 md:gap-x-5 lg:grid-cols-4">
            <CardAbout title="Events" icon="/img/events.png" desc="Activities organized by FemaleGeek or in collaboration with partners. The activities are useful for FemaleGeek members as well as for IT audiences" />
            <CardAbout title="Kuliah Telegram" icon="/img/kulgram.png" desc="Facilitating members to increase their knowledge about the technology in IT" />
            <CardAbout title="Mentoring" icon="/img/mentoring.png" desc="Mentoring program where there is 1 mentor will guide 2-3 FemaleGeek members" />
            <CardAbout title="Volunteer" icon="/img/volunteer.png" desc="Provide opportunities for community members who have a high social life" />
          </div>
        </div>
        
      </div>
    </section>
  )
}
