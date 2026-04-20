import React from "react";
import Header from "../../__global/Header";

let Hero: React.FC = () => {
  return (
    <section className=" relative w-full h-[680px] md:h-[480px]">
      <div className="relative h-[680px] md:h-[580px] rounded-b-[32px] md:rounded-b-[50px] shadow-lg overflow-hidden">
        <img
          src="/assets/img/profil/hero-bg.png"
          className="absolute inset-0 w-full h-full object-cover z-0"
          alt="Hero Background"
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/90 via-black/60 to-black/90 pointer-events-none"></div>
        <Header />
        <div className="hidden md:flex absolute inset-0 z-20 justify-center">
          <div className="w-full max-w-[1440px] relative">
            <div className="absolute left-32 top-[220px]">
              <h3 className="text-2xl text-white mb-2">Profil perusahaan</h3>
              <h2 className="text-4xl font-bold mb-4 text-white">
                Pergadaian Utama Indonesia
              </h2>
              <p className="text-base text-gray-300 leading-relaxed">
                Pergadaian Utama Indonesia (PUI) adalah mitra terpercaya untuk solusi <br /> likuiditas aset mewah Anda, dengan layanan profesional, proses cepat, serta <br /> transaksi yang aman dan transparan.
              </p>
              {/* Logos removed per user request */}
            </div>
          </div>
        </div>

        <div className="flex md:hidden absolute inset-0 z-20 flex-col items-center pt-28 px-6 text-center">
          <h3 className="text-[13px] text-gray-300 mb-2">Profil Perusahaan</h3>
          <h2 className="text-[28px] font-bold text-white mb-4 leading-tight">
            Pergadaian Utama Indonesia
          </h2>
          <p className="text-[13px] text-gray-300 leading-relaxed mb-6 px-2">
            Pergadaian Utama Indonesia (PUI) adalah mitra terpercaya untuk solusi likuiditas aset mewah Anda, dengan layanan profesional, proses cepat, serta transaksi yang aman dan transparan.
          </p>
          {/* Logos removed per user request */}
        </div>
        <div className="hidden md:flex absolute -bottom-20 left-0 right-0 z-20 justify-center">
          <div className="w-full max-w-[1440px] relative flex justify-end items-end pr-0">
            <img src="/assets/img/profil/b9a7ba4f124bce19449bb1ac060f6ff5edbdb775.png" alt="Person" />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex md:hidden absolute bottom-0 z-20 items-center justify-center pointer-events-none">
            <img
              src="/assets/img/profil/b9a7ba4f124bce19449bb1ac060f6ff5edbdb775.png"
              className="w-[150%] -ml-64 max-w-[980px] object-contain object-bottom"
              alt="Person Mobile"
            />
          </div></div>
      </div>
    </section>
  );
};
export { Hero };