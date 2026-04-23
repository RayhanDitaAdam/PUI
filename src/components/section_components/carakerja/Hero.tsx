import Header from "../../__global/Header";


let Hero: React.FC = () => {
  return (
    <section className="relative w-full md:h-[32.5rem] h-[53.125rem]">
      <div
        className="relative md:h-[38.75rem] h-full shadow-lg overflow-hidden rounded-b-[2rem] md:rounded-b-[3.125rem]"
      >
        <img
          src="/assets/img/carakerja/mobile.webp"
          className="absolute inset-0 w-full h-full object-cover object-[-12rem_0rem] md:hidden"
         alt="Mobile" />
        <img
          src="/assets/img/carakerja/LAPTOP.webp"
          className="absolute inset-0 w-full h-full object-cover object-center hidden md:block"
         alt="Laptop" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-black"></div>

        <Header />

        <div className="absolute inset-0 z-20 flex justify-center">
          <div className="w-full max-w-[1440px] relative flex flex-col items-center md:block">
            <div className="relative md:absolute md:left-12 lg:left-32 md:top-[13.75rem] z-20 text-center md:text-left px-6 md:px-0 mt-40 md:mt-0">
              <h3 className="text-lg md:text-xl lg:text-2xl text-[#C5A358] md:text-white mb-2">
                Cara Kerja
              </h3>
              <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold mb-4 text-white leading-tight">
                Pelajari & Mulai Prosesnya
              </h2>
              <p className="text-sm md:text-sm lg:text-base text-gray-300 leading-relaxed max-w-[17.5rem] md:max-w-none mx-auto md:mx-0">
                Ikuti langkah mudah dan dapatkan solusi finansial Anda hari ini.
              </p>

              <div className="flex justify-center md:justify-start gap-4">
                {/* <button className="group relative mt-8 md:mt-4 flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-[#12472B] to-[#0A917E] text-white text-sm rounded-full md:rounded-lg animate-pulse-whatsapp hover:scale-105 transition-all duration-300 shadow-xl">
                  <FaWhatsapp className="relative z-10 text-lg" />
                  <span className="relative z-10 font-semibold">Gratis Konsultasi Via WhatsApp</span>
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero };