export default function SecBanner() {
  return (
    <section className="header relative pt-16 items-center flex h-screen max-h-full">
      <div className="container mx-auto items-center flex flex-wrap z-10">
        <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
          <div className="pt-40 sm:pt-0">
            <h2 className="font-bold text-4xl text-white">Community & Support System for 
Women to Shining in Tech-Industry</h2>
          </div>
        </div>
      </div>
      <div
        className="absolute top-0 w-full h-full bg-center bg-cover z-0"
        style={{
          backgroundImage:
            "url('/img/banner.jpg')",
        }}
      >
      </div>
    </section>
  )
}
