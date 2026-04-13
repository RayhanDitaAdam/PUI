import Header from "../../__global/Header";
import { FaWhatsapp } from "react-icons/fa";

let Hero: React.FC = () => {
  return (
    <section className="z-[9999] relative w-full h-[520px]">
      <div className="relative h-[620px] shadow-lg overflow-hidden" style={{
        borderBottomLeftRadius: "50px",
        borderBottomRightRadius: "50px"
      }}>
        <img
          src="/assets/img/carakerja/467d94ec24d57b6909f5a3b71d6c34242dbff12c.png"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-black"></div>
        <Header />
        <div className="absolute inset-0 z-20 flex justify-center">
          <div className="w-full max-w-[1440px] relative">
            <div className="absolute left-32 top-[220px] z-20">
              <h3 className="text-2xl text-white mb-2">Cara Kerja</h3>
              <h2 className="text-4xl font-bold mb-4 text-white">
                Pelajari & Mulai Prosesnya
              </h2>
              <p className="text-base text-gray-300 leading-relaxed">
                Ikuti langkah mudah dan dapatkan solusi finansial Anda hari ini.
              </p>
              <div className="flex gap-4">
                <button className="group relative mt-4 flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-[#12472B] to-[#0A917E] text-white text-sm rounded-lg animate-pulse-whatsapp hover:scale-105 transition-all duration-300">
                  <FaWhatsapp className="relative z-10" />
                  <span className="relative z-10">Gratis Konsultasi Via WhatsApp</span>
                </button>
              </div>
            </div>
            <div className="absolute -mb-32 bottom-[5px] z-20">
              <div className="flex justify-end items-end gap-2">
                <img src="/assets/img/carakerja/b9a7ba4f124bce19449bb1ac060f6ff5edbdb775.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export { Hero };