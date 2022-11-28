import Image from "next/image";

export default function SecPartners() {
  return (
    <section className="relative bg-pink-200 py-10">
      <div className="container mx-auto justify-center text-center flex flex-wrap">
        <div className="w-full">
          <h2 className="font-bold text-4xl">PARTNERS</h2>
          <div className="container mx-auto mt-10 px-80 pt-8">
            <div className="grid grid-cols-3 gap-x-32 gap-y-16 items-center">
              <div className="block p-3 bg-white">
                <Image 
                  src="/partners/alkademi-dark.png"
                  alt=""
                  height="25px"
                  width="100px"
                />
              </div>
              <div className="block p-3 bg-white">
                <Image 
                  src="/partners/aws.png"
                  alt=""
                  height="50px"
                  width="70px"
                />
              </div>
              <div className="block p-3 bg-white">
                <Image 
                  src="/partners/Bukalapak.png"
                  alt=""
                  height="30px"
                  width="100px"
                />
              </div>
              <div className="block p-3 bg-white">
                <Image 
                  src="/partners/Logo_Telkom_Indonesia_2013.png"
                  alt=""
                  height="50px"
                  width="100px"
                />
              </div>
              <div className="block p-3 bg-white">
                <Image 
                  src="/partners/microsoft-logo-png-2398.png"
                  alt=""
                  height="50px"
                  width="100%"
                />
              </div>
              <div className="block p-3 bg-white">
                <Image 
                  src="/partners/Nivea.png"
                  alt=""
                  height="50px"
                  width="100px"
                />
              </div>
              <div className="block p-3 bg-white">
                <Image 
                  src="/partners/tech-in-asia-logo-vector.jpg"
                  alt=""
                  height="30px"
                  width="100px"
                />
              </div>
              <div className="block p-3 bg-white">
                <Image 
                  src="/partners/tokopedia-38840.png"
                  alt=""
                  height="30px"
                  width="100px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}