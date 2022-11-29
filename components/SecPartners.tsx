import Image from "next/image";

export default function SecPartners() {
  return (
    <section className="bg-[FDECF2] relative">
      <div className="container mx-auto justify-center text-center flex flex-wrap">
        <div className="w-full">
          <h2 className="font-bold pt-20 text-4xl font-mulish">PARTNERS</h2>
          <div className="container mx-auto mt-10 mb-10 md:px-80 md:pt-8">
            <div className="grid grid-cols-2 justify-items-center md:grid-cols-3 md:gap-x-32 md:gap-y-16">
              <div className="block p-3 bg-white">
                <Image 
                  src="/partners/alkademi-dark.png"
                  alt="Partners picture"
                  height={25}
                  width={100}
                />
              </div>
              <div className="block p-3 bg-white">
                <Image 
                  src="/partners/aws.png"
                  alt=""
                  height={50}
                  width={70}
                />
              </div>
              <div className="block p-3 bg-white">
                <Image 
                  src="/partners/Bukalapak.png"
                  alt=""
                  height={30}
                  width={100}
                />
              </div>
              <div className="block p-3 bg-white">
                <Image 
                  src="/partners/Logo_Telkom_Indonesia_2013.png"
                  alt=""
                  height={50}
                  width={100}
                />
              </div>
              <div className="block p-3 bg-white">
                <Image 
                  src="/partners/microsoft-logo-png-2398.png"
                  alt=""
                  height={50}
                  width={100}
                />
              </div>
              <div className="block p-3 bg-white">
                <Image 
                  src="/partners/Nivea.png"
                  alt=""
                  height={50}
                  width={100}
                />
              </div>
              <div className="block p-3 bg-white">
                <Image 
                  src="/partners/tech-in-asia-logo-vector.jpg"
                  alt=""
                  height={30}
                  width={100}
                />
              </div>
              <div className="block p-3 bg-white">
                <Image 
                  src="/partners/tokopedia-38840.png"
                  alt=""
                  height={30}
                  width={100}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}