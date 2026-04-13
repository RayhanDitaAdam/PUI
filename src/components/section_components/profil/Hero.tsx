import React from "react";
import Header from "../../__global/Header";

let Hero: React.FC = () => {
  return (
    <section className=" relative w-full h-[750px] md:h-[520px]">
      <div className="relative h-[750px] md:h-[620px] shadow-lg overflow-hidden">
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
              <div className="flex gap-4">
                <button className="mt-4 flex items-center gap-3 px-3 py-2 bg-white/10 text-white text-sm rounded-lg">
                  <img
                    src="/assets/img/profil/logo-ojk.png"
                    alt="Logo OJK"
                    className="w-[50px] h-auto object-contain"
                  />
                  <span>Terdaftar & diawasi OJK</span>
                </button>
                <button className="mt-4 flex items-center gap-3 px-3 py-2 bg-white/10 text-white text-sm rounded-lg">
                  <img
                    src="/assets/img/profil/d8a28cc7d63c61e6d01f7699200f9f7a096d9c27.png"
                    alt="Logo PPGI"
                    className="w-[50px] h-auto object-contain"
                  />
                  <span>Anggota Resmi PPGI</span>
                </button>
              </div>
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
          <div className="flex flex-col gap-3 w-full max-w-[320px]">
            <button className="flex items-center gap-4 px-4 py-3 bg-[#242424]/80 backdrop-blur-sm border border-white/5 text-white rounded-xl w-full">
              <img
                src="/assets/img/profil/logo-ojk.png"
                alt="Logo OJK"
                className="w-12 h-auto object-contain"
              />
              <span className="text-[13px] font-medium">Terdaftar & diawasi OJK</span>
            </button>
            <button className="flex items-center gap-4 px-4 py-3 bg-[#242424]/80 backdrop-blur-sm border border-white/5 text-white rounded-xl w-full">
              <img
                src="/assets/img/profil/d8a28cc7d63c61e6d01f7699200f9f7a096d9c27.png"
                alt="Logo PPGI"
                className="w-12 h-auto object-contain"
              />
              <span className="text-[13px] font-medium">Anggota Resmi PPGI</span>
            </button>
          </div>
        </div>
        <div className="hidden md:flex absolute -bottom-20 left-0 right-0 z-20 justify-center">
          <div className="w-full max-w-[1440px] relative flex justify-end items-end pr-0">
            <img src="/assets/img/profil/b9a7ba4f124bce19449bb1ac060f6ff5edbdb775.png" alt="Person" />
          </div>
        </div>
        <div className="flex md:hidden absolute bottom-0 z-20 items-center justify-center pointer-events-none">
          <img
            src="/assets/img/profil/b9a7ba4f124bce19449bb1ac060f6ff5edbdb775.png"
            className="w-[150%] -ml-64 max-w-[980px] object-contain object-bottom"
            alt="Person Mobile"
          />
        </div>
      </div>
    </section>
  );
};
export { Hero };