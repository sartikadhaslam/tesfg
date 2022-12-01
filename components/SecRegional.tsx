import Image from "next/image";

export default function SecRegional() {
  return (
    <section className="mt-10 md:mt-20 relative" id="regional">
      <div className="container mx-auto justify-center text-center flex flex-wrap">
        {/* <div className="w-full"> */}
          <h2 className="font-bold text-4xl font-mulish">REGIONAL</h2>
          <div className="mt-10 flex justify-center">
            <img className="h-full w-full" src="/Regional.png" />
          </div>
        {/* </div> */}
      </div>
    </section>
  )
}