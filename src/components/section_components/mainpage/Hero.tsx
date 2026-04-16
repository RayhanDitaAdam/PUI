import React from "react";
import Header from "../../__global/Header";
import { FaWhatsapp, FaCarSide } from "react-icons/fa";
import { GiHandBag } from "react-icons/gi";
import { LuWatch } from "react-icons/lu";

let Hero: React.FC = () => {
  const words = [
    "Jam Tangan Mewah",
    "Logam Mulia",
    "Perhiasan",
    "Batu Mulia",
    "Tas Branded",
    "Kendaraan Premium",
    "Barang Kolektor"
  ];
  const [index, setIndex] = React.useState(0);
  const [prevIndex, setPrevIndex] = React.useState(-1);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setPrevIndex(index);
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <section className="z-10 relative w-full h-auto min-h-[1100px] md:min-h-0 md:h-[720px] overflow-hidden">
      <div className="relative h-full min-h-[1100px] md:min-h-0 md:h-[720px] rounded-b-[32px] md:rounded-b-[50px] shadow-lg overflow-hidden">
        <img src="/assets/img/hero-bg.png" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0"></div>
        <Header />

        {/* --- MOBILE LAYOUT (Visible only on mobile) --- */}
        <div className="md:hidden relative z-20 flex flex-col items-center pt-[140px] pb-16 px-6">
          {/* Hero Title */}
          <h1 className="text-[26px] font-bold leading-tight text-center text-white">
            Dapatkan Solusi Gadai{" "}
            <span className="text-switcher-container">
              {words.map((word, i) => {
                const isActive = i === index;
                const isExiting = i === prevIndex;
                if (!isActive && !isExiting) return null;
                return (
                  <span
                    key={word}
                    className={`text-switcher-item ${isActive ? "enter" : "exit"}`}
                  >
                    {word}
                  </span>
                );
              })}
            </span>{" "}
            untuk<br /> Aset Mewah Anda Dengan PUI
          </h1>

          {/* Kirim Foto Button */}
          <div className="mt-14 w-full flex justify-center">
            <button className="group relative bg-[#D4AA6A] text-black w-[85%] py-4 rounded-2xl text-base font-bold shadow-xl flex items-center justify-center gap-3 animate-pulse-whatsapp hover:scale-105 transition-all duration-300">
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-[#243F29]/80 backdrop-blur-md px-4 py-2 rounded-full flex gap-4 opacity-0 group-hover:opacity-100 group-hover:-top-16 transition-all duration-300 pointer-events-none border border-[#5C5E3D] shadow-2xl z-30">
                <FaCarSide className="text-[#D4AA6A] text-lg" />
                <GiHandBag className="text-[#D4AA6A] text-lg" />
                <LuWatch className="text-[#D4AA6A] text-lg" />
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#243F29]/80 rotate-45 border-r border-b border-[#5C5E3D]"></div>
              </div>
              <FaWhatsapp className="relative z-10 text-xl" />
              <span className="relative z-10">Kirim Foto Aset Anda</span>
            </button>
          </div>

          {/* PUI Info Card */}
          <div className="mt-20 text-center flex flex-col items-center max-w-sm px-4">
            <h3 className="font-bold mb-3 text-white text-xl">
              Pergadaian Utama Indonesia
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Pergadaian Utama Indonesia (PUI) adalah mitra terpercaya
              untuk solusi likuiditas aset mewah Anda, dengan layanan
              profesional, proses cepat, serta keamanan terjamin.
            </p>
            <button className="mt-6 bg-[#003D35] px-6 py-2.5 rounded-full text-sm text-white hover:bg-[#005D51] hover:scale-105 transition-all duration-300">
              Tentang PUI
            </button>
          </div>

          {/* Feature Cards Grid (2 top, 1 bottom) */}
          <div className="mt-16 w-full flex flex-col gap-4 items-center">
            <div className="grid grid-cols-2 gap-4 w-full">
              <div className="animate-floating flex items-center justify-center gap-2 bg-[#243F29] border-2 rounded-[10px] border-[#5C5E3D] px-3 py-2 text-[10px] shadow text-white" style={{ animationDelay: '0.8s' }}>
                <img className="w-[20px]" src="/assets/img/icon-clock.png" />
                Pencairan Dana Cepat
              </div>
              <div className="animate-floating flex items-center justify-center gap-2 bg-[#243F29] border-2 rounded-[10px] border-[#5C5E3D] px-3 py-2 text-[10px] shadow text-white" style={{ animationDelay: '0.4s' }}>
                <img className="w-[20px]" src="/assets/img/icon-chart.png" />
                Valuasi Aset Tinggi
              </div>
            </div>
            <div className="animate-floating flex items-center gap-2 bg-[#243F29] border-2 rounded-[10px] border-[#5C5E3D] px-4 py-2 text-[10px] shadow text-white" style={{ animationDelay: '0s' }}>
              <img className="w-[40px]" src="/assets/img/logo-ojk.png" />
              Terdaftar & diawasi OJK
            </div>
          </div>
        </div>

        {/* --- DESKTOP LAYOUT (Original behavior) --- */}
        <div className="hidden md:block">
          {/* Hero Title */}
          <div className="absolute top-[120px] w-full flex justify-center z-20 px-4">
            <h1 className="text-4xl font-bold leading-snug text-center text-white">
              Dapatkan Solusi Gadai{" "}
              <span className="text-switcher-container">
                {words.map((word, i) => {
                  const isActive = i === index;
                  const isExiting = i === prevIndex;
                  if (!isActive && !isExiting) return null;
                  return (
                    <span
                      key={word}
                      className={`text-switcher-item ${isActive ? "enter" : "exit"}`}
                    >
                      {word}
                    </span>
                  );
                })}
              </span>{" "}
              untuk<br /> Aset Mewah Anda Dengan PUI
            </h1>
          </div>

          {/* Content Wrapper */}
          <div className="absolute inset-0 z-20 flex justify-center pointer-events-none">
            <div className="w-full max-w-[1440px] relative pointer-events-none">
              {/* Info Card */}
              <div className="absolute left-20 top-[300px] z-20 max-w-xs pointer-events-auto">
                <h3 className="font-bold mb-2 text-white">
                  Pergadaian Utama Indonesia
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Pergadaian Utama Indonesia (PUI) adalah mitra terpercaya
                  untuk solusi likuiditas aset mewah Anda, dengan layanan
                  profesional, proses cepat, serta keamanan terjamin.
                </p>
                <button className="mt-4 bg-[#003D35] px-4 py-2 rounded-full text-xs text-white hover:bg-[#005D51] hover:scale-105 transition-all duration-300">
                  Tentang PUI
                </button>
              </div>

              {/* Feature Cards Column */}
              <div className="absolute right-24 top-[260px] z-20 flex flex-col gap-4 pointer-events-auto">
                <div className="animate-floating flex items-center gap-2 bg-[#243F29] border-2 rounded-[10px] border-[#5C5E3D] px-4 py-2 text-xs shadow text-white" style={{ animationDelay: '0s' }}>
                  <img className="w-[60px]" src="/assets/img/logo-ojk.png" />
                  Terdaftar & diawasi OJK
                </div>
                <div className="-ml-20">
                  <div className="animate-floating inline-flex mt-10 items-center gap-2 bg-[#243F29] border-2 rounded-[10px] border-[#5C5E3D] px-4 py-2 text-xs shadow text-white" style={{ animationDelay: '0.4s' }}>
                    <img className="w-[30px]" src="/assets/img/icon-chart.png" />
                    Valuasi Aset Tinggi
                  </div>
                </div>
                <div className="animate-floating flex items-center mt-14 gap-2 bg-[#243F29] border-2 rounded-[10px] border-[#5C5E3D] px-4 py-2 text-xs shadow text-white" style={{ animationDelay: '0.8s' }}>
                  <img className="w-[30px]" src="/assets/img/icon-clock.png" />
                  Pencairan Dana Cepat
                </div>
              </div>
            </div>
          </div>

          {/* Kirim Foto Button */}
          <div className="absolute bottom-[110px] w-full flex justify-center z-20">
            <button className="group relative bg-[#D4AA6A] text-black px-8 py-3 rounded-md text-sm font-semibold shadow-xl flex items-center gap-2 animate-pulse-whatsapp hover:scale-105 transition-all duration-300">
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-[#243F29]/80 backdrop-blur-md px-4 py-2 rounded-full flex gap-4 opacity-0 group-hover:opacity-100 group-hover:-top-16 transition-all duration-300 pointer-events-none border border-[#5C5E3D] shadow-2xl z-30">
                <FaCarSide className="text-[#D4AA6A] text-lg" />
                <GiHandBag className="text-[#D4AA6A] text-lg" />
                <LuWatch className="text-[#D4AA6A] text-lg" />
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#243F29]/80 rotate-45 border-r border-b border-[#5C5E3D]"></div>
              </div>
              <FaWhatsapp className="relative z-10 text-xl" />
              <span className="relative z-10">Kirim Foto Aset Anda</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export { Hero };