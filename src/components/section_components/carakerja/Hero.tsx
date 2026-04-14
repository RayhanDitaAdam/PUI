import Header from "../../__global/Header";
import { FaWhatsapp } from "react-icons/fa";

let Hero: React.FC = () => {
  return (
    <section className="relative w-full md:h-[520px] h-[450px]">
      <div 
        className="relative md:h-[620px] h-full shadow-lg overflow-hidden" 
        style={{
          borderBottomLeftRadius: "50px",
          borderBottomRightRadius: "50px"
        }}
      >
        <img
          src="/assets/img/carakerja/467d94ec24d57b6909f5a3b71d6c34242dbff12c.png"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-black"></div>
        
        <Header />

        <div className="absolute inset-0 z-20 flex justify-center">
          <div className="w-full max-w-[1440px] relative flex flex-col items-center md:block">
            <div className="relative md:absolute md:left-32 md:top-[220px] z-20 text-center md:text-left px-6 md:px-0 mt-20 md:mt-0">
              <h3 className="text-lg md:text-2xl text-[#C5A358] md:text-white mb-2">
                Cara Kerja
              </h3>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white leading-tight">
                Pelajari & Mulai Prosesnya
              </h2>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed max-w-[280px] md:max-w-none mx-auto md:mx-0">
                Ikuti langkah mudah dan dapatkan solusi finansial Anda hari ini.
              </p>
              
              <div className="flex justify-center md:justify-start gap-4">
                <button className="group relative mt-8 md:mt-4 flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-[#12472B] to-[#0A917E] text-white text-sm rounded-full md:rounded-lg animate-pulse-whatsapp hover:scale-105 transition-all duration-300 shadow-xl">
                  <FaWhatsapp className="relative z-10 text-lg" />
                  <span className="relative z-10 font-semibold">Gratis Konsultasi Via WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero };