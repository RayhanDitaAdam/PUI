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
    <section id="hero" className="z-10 relative w-full h-auto min-h-[39rem] md:h-[68rem] lg:h-[45rem] overflow-hidden">
      <div className="relative h-full min-h-[39rem] md:h-[68rem] lg:h-[45rem] rounded-b-[1.875rem] md:rounded-b-[3.125rem] shadow-lg overflow-hidden">
        <div
          className="absolute inset-0 md:hidden bg-no-repeat"
          style={{
            backgroundImage: 'url("/assets/img/mobile-hero.webp")',
            backgroundColor: 'black',
            backgroundPosition: '-400px 120px',
            backgroundSize: '320.121% auto',
            backgroundRepeat: 'no-repeat',
            borderRadius: '0 0 1.875rem 1.875rem',
            border: '1px solid #000',
            boxShadow: '0 4px 32px 18px rgba(0, 0, 0, 0.25)'
          }}
        />
        {/* Bottom Fade Gradient for Mobile */}
        <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-black via-black/90 to-transparent md:hidden" />
        <img src="/assets/img/hero.webp" className="absolute inset-0 w-full h-full object-cover hidden md:block lg:hidden" alt="Tablet" />
        <img src="/assets/img/hero.webp" className="absolute inset-0 w-full h-full object-cover object-top hidden lg:block" alt="Hero Bg" />
        <div className="absolute inset-0"></div>
        <Header />

        {/* --- MOBILE LAYOUT (Visible only on mobile) --- */}
        <div className="md:hidden relative z-20 flex flex-col items-center pt-[8.75rem] pb-16 px-6">
          {/* Hero Title */}
          <h1 className="text-[1.625rem] font-bold leading-tight text-center text-white">
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
          <div className="mt-6 w-full flex justify-center">
            <a href="https://wa.me/6282277777911" target="_blank" rel="noopener noreferrer" className="group relative bg-[#D4AA6A] text-black w-[85%] py-3 rounded-2xl text-base font-bold shadow-xl flex items-center justify-center gap-3 animate-pulse-whatsapp hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-[#243F29]/80 backdrop-blur-md px-4 py-2 rounded-full flex gap-4 opacity-0 group-hover:opacity-100 group-hover:-top-16 transition-all duration-300 pointer-events-none border border-[#5C5E3D] shadow-2xl z-30">
                <FaCarSide className="text-[#D4AA6A] text-lg" />
                <GiHandBag className="text-[#D4AA6A] text-lg" />
                <LuWatch className="text-[#D4AA6A] text-lg" />
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#243F29]/80 rotate-45 border-r border-b border-[#5C5E3D]"></div>
              </div>
              <FaWhatsapp className="relative z-10 text-xl" />
              <span className="relative z-10">Kirim Foto Aset Anda</span>
            </a>
          </div>

          {/* PUI Info Card */}
          <div className="mt-[17rem] text-center flex flex-col items-center max-w-[90%] sm:max-w-sm bg-black/80 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1),inset_0_1px_0_0_rgba(255,255,255,0.2)] backdrop-blur-[8px] rounded-[1.5rem] p-6 sm:p-8">
            <h1 className="font-bold mb-3 animate-shine-text text-xl">
              Pergadaian Utama Indonesia
            </h1>
            <p className="text-sm text-gray-300 leading-relaxed">
              Pergadaian Utama Indonesia (PUI) adalah mitra terpercaya
              untuk solusi likuiditas aset mewah Anda, dengan layanan
              profesional, proses cepat, serta keamanan terjamin.
            </p>
            <a href="https://puigadai.co.id/profil-perusahaan" className="inline-block mt-6 bg-[#003D35] px-6 py-2.5 rounded-full text-sm text-white hover:bg-[#005D51] hover:scale-105 transition-all duration-300">
              Tentang PUI
            </a>
          </div>

          {/* Feature Cards Grid (2 top, 1 bottom) */}
          <div className="mt-10 w-full flex flex-col gap-4 items-center">
            <div className="grid grid-cols-2 gap-4 w-full">
              <div className="animate-floating flex items-center justify-center gap-2 bg-[#003D35] border-2 rounded-[0.625rem] border-[#5C5E3D] px-3 py-2 text-[0.625rem] shadow text-white" style={{ animationDelay: '0.8s' }}>
                <img className="w-[1.25rem]" src="/assets/img/icon-clock.webp" alt="Icon Clock" />
                Pencairan Dana Cepat
              </div>
              <div className="animate-floating flex items-center justify-center gap-2 bg-[#003D35] border-2 rounded-[0.625rem] border-[#5C5E3D] px-3 py-2 text-[0.625rem] shadow text-white" style={{ animationDelay: '0.4s' }}>
                <img className="w-[1.25rem]" src="/assets/img/icon-chart.webp" alt="Icon Chart" />
                Valuasi Aset Tinggi
              </div>
            </div>
            <div className="animate-floating flex items-center gap-2 bg-[#003D35] border-2 rounded-[0.625rem] border-[#5C5E3D] px-4 py-2 text-xs shadow text-white" style={{ animationDelay: '0s' }}>
              <img src="/assets/img/Layer_1.svg" className="h-[0.875rem] w-auto" alt="License Logo" />
              <span>Terdaftar & diawasi OJK</span>
            </div>
          </div>
        </div>

        {/* --- TABLET LAYOUT (Visible only on tablet) --- */}
        <div className="hidden md:flex lg:hidden relative z-20 flex-col h-full items-center pt-[10rem] pb-16 px-12">
          {/* Top Content */}
          <div className="flex flex-col items-center md:mt-[5rem]">
            {/* Hero Title */}
            <h1 className="text-[1.75rem] font-bold leading-tight text-center text-white">
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
            <div className="mt-10 w-full flex justify-center">
              <a href="https://wa.me/6282277777911" target="_blank" rel="noopener noreferrer" className="group relative bg-[#D4AA6A] text-black px-[2.5rem] py-[0.875rem] rounded-2xl text-base font-bold shadow-xl flex items-center justify-center gap-3 animate-pulse-whatsapp hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-[#243F29]/80 backdrop-blur-md px-4 py-2 rounded-full flex gap-4 opacity-0 group-hover:opacity-100 group-hover:-top-16 transition-all duration-300 pointer-events-none border border-[#5C5E3D] shadow-2xl z-30">
                  <FaCarSide className="text-[#D4AA6A] text-lg" />
                  <GiHandBag className="text-[#D4AA6A] text-lg" />
                  <LuWatch className="text-[#D4AA6A] text-lg" />
                  <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#243F29]/80 rotate-45 border-r border-b border-[#5C5E3D]"></div>
                </div>
                <FaWhatsapp className="relative z-10 text-xl" />
                <span className="relative z-10">Kirim Foto Aset Anda</span>
              </a>
            </div>
          </div>

          {/* Flex Container for Info Blocks (Bottom) */}
          <div className="mt-auto w-full flex flex-row-reverse items-center justify-center gap-[2rem] xl:gap-[4rem]">
            {/* Feature Cards Grid */}
            <div className="flex flex-col gap-4 items-center">
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="animate-floating flex items-center justify-center gap-2 bg-[#003D35] border-2 rounded-[0.625rem] border-[#5C5E3D] px-3 py-2 text-[0.625rem] shadow text-white" style={{ animationDelay: '0.8s' }}>
                  <img className="w-[1.25rem]" src="/assets/img/icon-clock.webp" alt="Icon Clock" />
                  Pencairan Dana Cepat
                </div>
                <div className="animate-floating flex items-center justify-center gap-2 bg-[#003D35] border-2 rounded-[0.625rem] border-[#5C5E3D] px-3 py-2 text-[0.625rem] shadow text-white" style={{ animationDelay: '0.4s' }}>
                  <img className="w-[1.25rem]" src="/assets/img/icon-chart.webp" alt="Icon Chart" />
                  Valuasi Aset Tinggi
                </div>
              </div>
              <div className="animate-floating flex items-center gap-2 bg-[#003D35] border-2 rounded-[0.625rem] border-[#5C5E3D] px-4 py-2 text-xs shadow text-white" style={{ animationDelay: '0s' }}>
                <img src="/assets/img/Layer_1.svg" className="h-[0.875rem] w-auto" alt="License Logo" />
                <span>Terdaftar & diawasi OJK</span>
              </div>
            </div>

            {/* PUI Info Card */}
            <div className="text-center flex flex-col items-center max-w-[20rem] bg-black/80 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1),inset_0_1px_0_0_rgba(255,255,255,0.2)] backdrop-blur-[8px] rounded-[1.5rem] p-6 lg:p-8">
              <h1 className="font-bold mb-3 animate-shine-text text-lg">
                Pergadaian Utama Indonesia
              </h1>
              <p className="text-xs text-gray-300 leading-relaxed">
                Pergadaian Utama Indonesia (PUI) adalah mitra terpercaya
                untuk solusi likuiditas aset mewah Anda, dengan layanan
                profesional, proses cepat, serta keamanan terjamin.
              </p>
              <a href="https://puigadai.co.id/profil-perusahaan" className="inline-block mt-6 bg-[#003D35] px-6 py-2 rounded-full text-xs text-white hover:bg-[#005D51] hover:scale-105 transition-all duration-300">
                Tentang PUI
              </a>
            </div>
          </div>
        </div>

        {/* --- DESKTOP LAYOUT (Original behavior) --- */}
        <div className="hidden lg:block">
          {/* Hero Title */}
          <div className="absolute top-[7.5rem] w-full flex justify-center z-20 px-4">
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
            <div className="w-full max-w-[90rem] relative pointer-events-none">
              {/* Info Card */}
              <div className="absolute left-[5rem] top-[18.75rem] z-20 max-w-xs pointer-events-auto origin-left bg-black/80 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1),inset_0_1px_0_0_rgba(255,255,255,0.2)] backdrop-blur-[8px] rounded-[1.5rem] p-6 lg:p-8">
                <h1 className="font-bold mb-2 animate-shine-text text-lg">
                  Pergadaian Utama Indonesia
                </h1>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Pergadaian Utama Indonesia (PUI) adalah mitra terpercaya
                  untuk solusi likuiditas aset mewah Anda, dengan layanan
                  profesional, proses cepat, serta keamanan terjamin.
                </p>
                <a href="https://puigadai.co.id/profil-perusahaan" className="inline-block mt-4 bg-[#003D35] px-4 py-2 rounded-full text-xs text-white hover:bg-[#005D51] hover:scale-105 transition-all duration-300">
                  Tentang PUI
                </a>
              </div>

              {/* Feature Cards Column */}
              <div className="absolute right-[6rem] top-[16.25rem] z-20 flex flex-col gap-4 pointer-events-auto origin-right">
                <div className="animate-floating flex items-center gap-2 bg-[#003D35] border-2 rounded-[0.625rem] border-[#5C5E3D] px-2 py-1 text-sm shadow text-white" style={{ animationDelay: '0s' }}>
                  <img src="/assets/img/Layer_1.svg" className="h-[2rem] w-auto" alt="License Logo" />
                  <span>Terdaftar & diawasi OJK</span>
                </div>
                <div className="-ml-[5rem]">
                  <div className="animate-floating inline-flex mt-10 items-center gap-2 bg-[#003D35] border-2 rounded-[0.625rem] border-[#5C5E3D] px-4 py-0 text-sm shadow text-white" style={{ animationDelay: '0.4s' }}>
                    <img className="w-[2.25rem]" src="/assets/img/icon-chart.webp" alt="Icon Chart" />
                    Valuasi Aset Tinggi
                  </div>
                </div>
                <div className="animate-floating flex items-center mt-14 gap-2 bg-[#003D35] border-2 rounded-[0.625rem] border-[#5C5E3D] px-2 py-0 text-sm shadow text-white" style={{ animationDelay: '0.8s' }}>
                  <img className="w-[2.25rem]" src="/assets/img/icon-clock.webp" alt="Icon Clock" />
                  Pencairan Dana Cepat
                </div>
              </div>
            </div>
          </div>

          {/* Kirim Foto Button */}
          <div className="absolute bottom-[6.875rem] w-full flex justify-center z-20">
            <a href="https://wa.me/6282277777911" target="_blank" rel="noopener noreferrer" className="group relative bg-[#D4AA6A] text-black px-8 py-3 rounded-md text-sm font-semibold shadow-xl flex items-center gap-2 animate-pulse-whatsapp hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-[#243F29]/80 backdrop-blur-md px-4 py-2 rounded-full flex gap-4 opacity-0 group-hover:opacity-100 group-hover:-top-16 transition-all duration-300 pointer-events-none border border-[#5C5E3D] shadow-2xl z-30">
                <FaCarSide className="text-[#D4AA6A] text-lg" />
                <GiHandBag className="text-[#D4AA6A] text-lg" />
                <LuWatch className="text-[#D4AA6A] text-lg" />
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#243F29]/80 rotate-45 border-r border-b border-[#5C5E3D]"></div>
              </div>
              <FaWhatsapp className="relative z-10 text-xl" />
              <span className="relative z-10">Kirim Foto Aset Anda</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export { Hero };