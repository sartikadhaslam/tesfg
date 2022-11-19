import Image from "next/image";

export default function SecAboutUs() {
  return (
    <section className="mt-10 md:mt-20 pb-40 relative">
      <div className="container mx-auto justify-center text-center flex flex-wrap">
        <div className="w-full px-12 md:px-4">
          <h2 className="font-bold text-4xl">ABOUT US</h2>
          <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500">
            FemaleGeek  merupakan sebuah komunitas yang terdiri dari perempuan-perempuan ‘strong‘ yang cinta dan bergelut dalam bidang IT. Bidang yang biasanya di dominasi oleh kaum adam ini kini mulai digeluti oleh kaum hawa.
          </p>
          <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500">
            Tidak hanya terbatas pada bagian IT tertentu, anggota FemaleGeek Indonesia ternyata berasal dari latar belakang yang berbeda seperti IT Support, Software Developer, System Analayst, IT Consultant, Mahasiswi IT dan lainnya untuk membentuk sebuah wadah yang berfokus pada pengembangan perempuan dalam dunia IT.
          </p>
          <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500">
            Komunitas yang dibangun khusus untuk para wanita ini bukan hanya terbatas pada wadah untuk berbagi namun juga sebagai inspirasi kepada semua wanita yang hendak atau sudah berkecimpung dalam dunia IT. menumbuhkan semangat dan saling mendukung dalam kelompok.
          </p>
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
          <div className="w-full grid grid-cols-1 gap-y-6 md:grid-cols-4 md:gap-x-10">
            <div className="w-full p-6 bg-[#EC407A] rounded-lg">
              <div className="flex flex-col items-center">
                <div className="py-2 space-x-4">
                  <Image 
                  src="/img/events.png"
                  alt="Landscape picture"
                  width={80}
                  height={80}
                  />
                </div>
                <div className="py-2 space-x-4">
                  <h2 className="font-bold text-lg text-white">Event</h2>
                </div>
              </div>
            </div>
            <div className="w-full p-6 bg-[#EC407A] rounded-lg">
              <div className="flex flex-col items-center">
                <div className="py-2 space-x-4">
                  <Image 
                  src="/img/kulgram.png"
                  alt="Landscape picture"
                  width={80}
                  height={80}
                  />
                </div>
                <div className="py-2 space-x-4">
                  <h2 className="font-bold text-lg text-white">Kuliah Telegram</h2>
                </div>
              </div>
            </div>
            <div className="w-full p-6 bg-[#EC407A] rounded-lg">
              <div className="flex flex-col items-center">
                <div className="py-2 space-x-4">
                  <Image 
                  src="/img/mentoring.png"
                  alt="Landscape picture"
                  width={80}
                  height={80}
                  />
                </div>
                <div className="py-2 space-x-4">
                  <h2 className="font-bold text-lg text-white">Mentoring</h2>
                </div>
              </div>
            </div>
            <div className="w-full p-6 bg-[#EC407A] rounded-lg">
              <div className="flex flex-col items-center">
                <div className="py-2 space-x-4">
                  <Image 
                  src="/img/volunteer.png"
                  alt="Landscape picture"
                  width={80}
                  height={80}
                  />
                </div>
                <div className="py-2 space-x-4">
                  <h2 className="font-bold text-lg text-white">Volunteer</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}
