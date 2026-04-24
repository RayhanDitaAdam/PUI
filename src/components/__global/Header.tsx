import React, { useState } from "react";
import { Navbar, dropdownItems, profilDropdownItems, caraKerjaDropdownItems } from "./Navbar";
import ScrollProgress from "./ScrollProgress";
import { FaWhatsapp, FaChevronDown } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProdukOpen, setIsProdukOpen] = useState(false);
  const [isProfilOpen, setIsProfilOpen] = useState(false);
  const [isCaraKerjaOpen, setIsCaraKerjaOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(typeof window !== "undefined" ? window.innerWidth >= 1024 : true);

  React.useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Prevent body scroll when menu is open
  React.useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setIsProdukOpen(false); // Reset accordions when menu closes
      setIsProfilOpen(false);
      setIsCaraKerjaOpen(false);
    }
  }, [isMenuOpen]);

  return (
    <>
      <div className={`
        ${isDesktop ? "absolute top-0" : "fixed top-0 shadow-lg"} 
        flex left-0 w-full z-[100] px-6 md:px-16 py-6 items-center justify-between backdrop-blur-md bg-black/90 transition-all duration-500
      `}>
        <ScrollProgress />

        {/* Logo */}
        <div className="flex items-center gap-2 flex-1">
          <a href="/">
            <img src="/assets/img/logo-pui.webp" className="w-[9.0625rem] h-[3rem]" alt="Logo Pui" />
          </a>
        </div>

        {/* Desktop Navbar */}
        <div className="hidden lg:flex justify-center flex-1">
          <Navbar />
        </div>

        {/* Desktop WhatsApp Button */}
        <div className="hidden lg:flex justify-end flex-1">
          <a href="https://wa.me/6282277777911" target="_blank" rel="noopener noreferrer" className="border border-gray-400 px-4 py-2 rounded-full text-sm text-white flex items-center gap-2 animate-pulse-whatsapp hover:scale-105 transition-transform duration-300 cursor-pointer">
            <FaWhatsapp className="z-50 text-white" /> 0822 77777 911
          </a>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="flex lg:hidden justify-end flex-1">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="text-white text-3xl focus:outline-none"
          >
            <HiMenuAlt3 />
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[70%] sm:w-1/2 bg-black z-[999] transform transition-transform duration-500 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"} lg:hidden shadow-2xl border-l border-gray-800`}
      >
        <div className="flex flex-col h-full p-8">
          <div className="flex justify-end mb-12">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-white text-3xl focus:outline-none"
            >
              <HiX />
            </button>
          </div>

          <nav className="flex flex-col gap-8">
            {/* Profil Accordion */}
            <div className="flex flex-col gap-4">
              <div 
                className="flex items-center justify-between text-white text-xl font-medium border-b border-white/10 pb-4 hover:text-gray-300 transition-colors cursor-pointer"
                onClick={() => setIsProfilOpen(!isProfilOpen)}
              >
                <span>Profil Perusahaan</span>
                <FaChevronDown className={`text-sm transition-transform duration-300 ${isProfilOpen ? 'rotate-180' : ''}`} />
              </div>
              <div className={`flex flex-col gap-6 pl-4 overflow-hidden transition-all duration-300 ${isProfilOpen ? 'max-h-[500px] opacity-100 mt-2 pb-4' : 'max-h-0 opacity-0'}`}>
                {profilDropdownItems.map((item) => (
                  <a 
                    key={item.target} 
                    href={`/profil-perusahaan${item.target}`} 
                    onClick={() => { setIsMenuOpen(false); setIsProfilOpen(false); }} 
                    className="text-gray-400 text-lg hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Produk Accordion */}
            <div className="flex flex-col gap-4">
              <div 
                className="flex items-center justify-between text-white text-xl font-medium border-b border-white/10 pb-4 hover:text-gray-300 transition-colors cursor-pointer"
                onClick={() => setIsProdukOpen(!isProdukOpen)}
              >
                <span>Produk</span>
                <FaChevronDown className={`text-sm transition-transform duration-300 ${isProdukOpen ? 'rotate-180' : ''}`} />
              </div>
              <div className={`flex flex-col gap-6 pl-4 overflow-hidden transition-all duration-300 ${isProdukOpen ? 'max-h-[500px] opacity-100 mt-2 pb-4' : 'max-h-0 opacity-0'}`}>
                {dropdownItems.map((item) => (
                  <a
                    key={item.target}
                    href={`/${item.target}`}
                    onClick={() => { setIsMenuOpen(false); setIsProdukOpen(false); }}
                    className="text-gray-400 text-lg hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Cara Kerja Accordion */}
            <div className="flex flex-col gap-4">
              <div 
                className="flex items-center justify-between text-white text-xl font-medium border-b border-white/10 pb-4 hover:text-gray-300 transition-colors cursor-pointer"
                onClick={() => setIsCaraKerjaOpen(!isCaraKerjaOpen)}
              >
                <span>Cara Kerja</span>
                <FaChevronDown className={`text-sm transition-transform duration-300 ${isCaraKerjaOpen ? 'rotate-180' : ''}`} />
              </div>
              <div className={`flex flex-col gap-6 pl-4 overflow-hidden transition-all duration-300 ${isCaraKerjaOpen ? 'max-h-[500px] opacity-100 mt-2 pb-4' : 'max-h-0 opacity-0'}`}>
                {caraKerjaDropdownItems.map((item) => (
                  <a 
                    key={item.target} 
                    href={`/cara-kerja${item.target}`} 
                    onClick={() => { setIsMenuOpen(false); setIsCaraKerjaOpen(false); }} 
                    className="text-gray-400 text-lg hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            <a href="/artikel" onClick={() => setIsMenuOpen(false)} className="text-white text-xl font-medium border-b border-white/10 pb-4 hover:text-gray-300 transition-colors">Artikel</a>
          </nav>

          <div className="mt-auto pt-8 border-t border-white/10">
            <a href="https://wa.me/6282277777911" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white hover:text-green-400 transition-colors">
              <FaWhatsapp className="text-2xl text-green-500" />
              <span className="text-base font-semibold">0822 77777 911</span>
            </a>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[150] lg:hidden transition-opacity duration-500"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Header;
