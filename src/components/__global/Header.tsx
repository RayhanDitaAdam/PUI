import React, { useState } from "react";
import { Navbar } from "./Navbar";
import ScrollProgress from "./ScrollProgress";
import { FaWhatsapp } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Header: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(typeof window !== "undefined" ? window.innerWidth >= 768 : true);

  React.useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const currentIsDesktop = window.innerWidth >= 768;
      setScrollY(currentScrollY);

      // Header stays sticky only while within the hero section (720px) on desktop
      if (currentIsDesktop && currentScrollY > 0 && currentScrollY < 720) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Prevent body scroll when menu is open
  React.useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  return (
    <>
      <div className={`
        ${isDesktop 
          ? (isSticky ? "fixed top-0 animate-slide-down shadow-2xl" : "absolute top-0") 
          : "fixed top-0 shadow-lg"} 
        ${(isDesktop && scrollY >= 720) ? "hidden" : "flex"} 
        left-0 w-full z-[100] px-6 md:px-16 py-6 items-center justify-between backdrop-blur-md bg-black/90 transition-all duration-500
      `}>
        <ScrollProgress />
        
        {/* Logo */}
        <div className="flex items-center gap-2 flex-1">
          <a href="/">
            <img src="/assets/img/logo-pui.png" className="w-[145px] h-[48px]" />
          </a>
        </div>

        {/* Desktop Navbar */}
        <div className="hidden md:flex justify-center flex-1">
          <Navbar />
        </div>

        {/* Desktop WhatsApp Button */}
        <div className="hidden md:flex justify-end flex-1">
          <a href="https://wa.me/6282277777911" target="_blank" rel="noopener noreferrer" className="border border-gray-400 px-4 py-2 rounded-full text-sm text-white flex items-center gap-2 animate-pulse-whatsapp hover:scale-105 transition-transform duration-300 cursor-pointer">
            <FaWhatsapp className="z-50 text-white" /> 0822 77777 911
          </a>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="flex md:hidden justify-end flex-1">
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
        className={`fixed top-0 right-0 h-full w-[70%] sm:w-1/2 bg-black z-[999] transform transition-transform duration-500 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"} md:hidden shadow-2xl border-l border-gray-800`}
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
            <a href="/profil-perusahaan" onClick={() => setIsMenuOpen(false)} className="text-white text-xl font-medium border-b border-white/10 pb-4 hover:text-gray-300 transition-colors">Profil Perusahaan</a>
            <a href="/#produk" onClick={() => setIsMenuOpen(false)} className="text-white text-xl font-medium border-b border-white/10 pb-4 hover:text-gray-300 transition-colors">Produk</a>
            <a href="/cara-kerja" onClick={() => setIsMenuOpen(false)} className="text-white text-xl font-medium border-b border-white/10 pb-4 hover:text-gray-300 transition-colors">Cara Kerja</a>
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
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[150] md:hidden transition-opacity duration-500"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Header;
