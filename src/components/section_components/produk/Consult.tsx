import { FaWhatsapp } from "react-icons/fa";

let Consult = function () {
  return (
    <div id="konsultasi" className="w-full flex justify-center bg-white pb-10 md:py-10">
      <div className="pui-wrap mt-32 mb-12 md:mt-10 md:mb-0 overflow-visible lg:!max-w-[1200px] xl:!max-w-[1350px]">
        <div className="mx-[1rem] hero flex flex-col md:flex-row-reverse items-start md:items-end gap-0 md:gap-8 pt-4 pb-0 px-8 md:p-12 md:pb-0 text-left md:text-left isolate">
          <div className="hero-deco hidden md:block"></div>
          <div className="hero-img-wrap flex-shrink-0 w-full md:w-auto flex justify-end items-end relative z-0 pointer-events-none">
            <div className="hero-person-placeholder relative h-[7.5rem] md:h-[20rem] overflow-visible">
              <img
                className="w-full h-auto pointer-events-none scale-[0.78] md:scale-[0.75] lg:scale-[0.8] lg:w-[25rem] origin-bottom translate-x-[4.75rem] -translate-y-[1rem] md:translate-x-0 md:translate-y-4 transition-transform duration-300"
                src="/assets/img/Consult.webp"
                alt="Consult" />
            </div>
          </div>

          <div className="md:pl-0 mr-8 md:mr-0 lg:mr-0 md:-mb-5 lg:p-5 lg:mt-20 md:p-1 hero-content relative z-[50] md:z-10 -mt-[19.375rem] flex flex-col items-start w-full md:w-[21.25rem] pb-10 md:pb-10 md:bottom-10">
            <h2 className="text-[1.25rem] lg:text-[2.125rem] md:text-[1.875rem] font-bold text-[#EDE8D0] leading-snug md:leading-tight mb-4 md:mb-[0.875rem] max-w-[11.875rem] md:max-w-full md:px-0">
              Punya barang mewah <br className="hidden md:block" /> dan ingin dilikuidasi?
            </h2>
            <a className="text-[0.65rem] lg:text-base md:text-sm text-white/70 mb-8 md:mb-7 leading-relaxed max-w-[16.25rem] md:max-w-[17.5rem]">
              Konsultasikan sekarang via WhatsApp. <br />Terjamin anonimitas & privasi 100%.
            </a>
            <button className="btn-wa animate-pulse-whatsapp flex items-center justify-center gap-2 bg-[#006658] border border-white/20 text-white w-full md:w-auto px-6 py-3.5 md:px-5 md:py-3 rounded-xl text-base md:text-sm font-semibold relative z-[60] pointer-events-auto">
              <FaWhatsapp className="text-xl" />
              Konsultasi Valuasi Sekarang
            </button>
          </div>
        </div>

        <div className="bg-white relative z-20">
          <div className="mx-[1rem] grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 lg:-mt-[1.1rem] md:mt-0 !bg-white pt-2 pb-4 md:pt-[2rem] md:pb-[1rem] lg:py-4 rounded-b-xl md:rounded-b-2xl border-x md:border-none border-b md:border-none border-gray-200 relative z-10" style={{ backgroundColor: 'white' }}>
            <div className="card bg-white border border-gray-200 md:border-gray-200 rounded-xl p-4 md:p-7 flex flex-col">
              <div className="card-icon-wrap w-9 h-9 md:w-12 md:h-12 bg-[#C49A6C] rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-5">
                <img src="/assets/img/81829e2cbb1d51f007adb0e183c5911e296267be.webp" width="1.5rem" className="brightness-0 w-[1.125rem] md:w-[1.5rem]" alt="image" />
              </div>
              <h3 className="text-sm lg:text-base md:text-lg font-extrabold text-[#111] mb-1.5 md:mb-2.5">
                Bawa langsung aset mewah ke kantor PUI
              </h3>
              <p className="text-xs lg:text-[10px] md:text-sm text-[#333] leading-relaxed mb-4 md:mb-6">
                Anda dapat membawa langsung aset mewah Anda ke kantor PUI
                untuk mendapatkan pengalaman layanan yang cepat, aman, dan
                transparan. Tim profesional kami akan melakukan proses valuasi
                secara detail dan akurat, memastikan Anda mendapatkan nilai
                terbaik sesuai kondisi dan pasar terkini.
              </p>
              <a href="https://wa.me/6282277777911?text=Halo%20PUI,%20saya%20ingin%20booking%20jadwal%20janji%20temu%20ke%20kantor." target="_blank" rel="noopener noreferrer" className="card-link mt-auto flex items-center gap-2 text-[#1B4332] font-semibold text-[9px] md:text-xs cursor-pointer animate-link-arrow">
                Booking Jadwal Janji Temu
                <span className="w-4 h-4 bg-[#1B4332] rounded-full flex items-center justify-center">
                  <svg width="8" height="8" viewBox="0 0 9 9" fill="none">
                    <path d="M2 4.5h5M4.5 2l2.5 2.5L4.5 7" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
            </div>

            <div className="card bg-white border border-gray-200 md:border-gray-200 rounded-xl p-4 md:p-7 flex flex-col">
              <div className="card-icon-wrap w-9 h-9 md:w-12 md:h-12 bg-[#C49A6C] rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-5">
                <img src="/assets/img/d8d020e2c5ce16700e20195204cc0d38d6ba12bb.webp" width="1.5rem" className="brightness-0 w-[1.125rem] md:w-[1.5rem]" alt="image" />
              </div>
              <h3 className="text-xs md:text-lg font-extrabold text-[#111] mb-1.5 md:mb-2.5 leading-tight">
                Layanan Jemput Barang
              </h3>
              <p className="text-[0.625rem] md:text-sm text-[#333] leading-relaxed mb-4 md:mb-6">
                Untuk kenyamanan maksimal, PUI menyediakan layanan jemput
                aset langsung ke lokasi Anda. Layanan ini dirancang bagi Anda yang
                menginginkan proses praktis tanpa perlu datang ke kantor.
                Tim kami akan datang dengan prosedur keamanan ketat dan profesionalisme tinggi dalam menangani setiap aset.
              </p>
              <a href="https://wa.me/6282277777911?text=Halo%20PUI,%20saya%20ingin%20booking%20layanan%20jemput%20aset%20ke%20lokasi%20saya." target="_blank" rel="noopener noreferrer" className="card-link mt-auto flex items-center gap-2 text-[#1B4332] font-semibold text-[0.5625rem] md:text-xs cursor-pointer animate-link-arrow">
                Booking Jadwal Jemput barang
                <span className="w-4 h-4 bg-[#1B4332] rounded-full flex items-center justify-center">
                  <svg width="8" height="8" viewBox="0 0 9 9" fill="none">
                    <path d="M2 4.5h5M4.5 2l2.5 2.5L4.5 7" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Consult };