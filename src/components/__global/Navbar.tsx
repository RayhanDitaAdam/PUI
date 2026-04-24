import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { FaChevronDown } from "react-icons/fa";

gsap.registerPlugin(ScrollToPlugin);

export const dropdownItems = [
  { name: "Beranda", target: "#hero" },
  { name: "Tentang PUI", target: "#about" },
  { name: "Layanan Produk", target: "#produk" },
  { name: "Konsultasi", target: "#konsultasi" },
  { name: "Alur Proses", target: "#alur" },
  { name: "Testimoni", target: "#testimoni" },
  { name: "Artikel Terbaru", target: "#artikel-home" },
];

export const profilDropdownItems = [
  { name: "Beranda Profil", target: "#hero-profil" },
  { name: "Tentang Kami", target: "#pengantar-pui" },
  { name: "Keunggulan", target: "#keunggulan-pui" },
  { name: "Laboratorium", target: "#lab-pui" },
  { name: "Visi & Misi", target: "#visi-misi-pui" },
];

export const caraKerjaDropdownItems = [
  { name: "Beranda Kerja", target: "#hero-cara-kerja" },
  { name: "Langkah Gadai", target: "#langkah-gadai" },
  { name: "Keuntungan PUI", target: "#keuntungan-pui" },
  { name: "Hubungi Kami", target: "#hubungi-kami" },
];

let Navbar: React.FC = function () {
  const [isProdukOpen, setIsProdukOpen] = useState(false);
  const [isProfilOpen, setIsProfilOpen] = useState(false);
  const [isCaraKerjaOpen, setIsCaraKerjaOpen] = useState(false);

  const getOffset = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 1024) return 130;
      return 100;
    }
    return 100;
  };

  const auto_scroll = (e: React.MouseEvent, target: string, path: string) => {
    if (window.location.pathname === path) {
      const element = document.querySelector(target);
      if (element) {
        e.preventDefault();
        gsap.to(window, {
          duration: 0.8,
          scrollTo: {
            y: target,
            offsetY: getOffset()
          },
          ease: "power2.out"
        });
        setIsProdukOpen(false);
        setIsProfilOpen(false);
        setIsCaraKerjaOpen(false);
      }
    }
  };

  useEffect(function () {
    const hash = window.location.hash;
    if (hash && document.querySelector(hash)) {
      setTimeout(() => {
        gsap.to(window, {
          duration: 0.8,
          scrollTo: {
            y: hash,
            offsetY: getOffset()
          },
          ease: "power2.out"
        });
      }, 100);
    }
  }, []);

  const linkClassName = "relative hover:text-white transition-colors duration-200 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[0.09375rem] after:bottom-[-0.25rem] after:left-0 after:bg-white after:origin-bottom-right after:transition-transform after:duration-200 hover:after:scale-x-100 hover:after:origin-bottom-left flex items-center gap-1";

  const renderDropdownItem = (item: { name: string; target: string }, path: string, isOpen: boolean, idx: number) => (
    <a
      key={item.target}
      href={`${path}${item.target}`}
      onClick={(e) => auto_scroll(e, item.target, path)}
      style={{ transitionDelay: `${idx * 20}ms` }}
      className={`
        group/item relative block px-3 py-2 text-[11px] font-medium text-gray-400 hover:text-white rounded-xl 
        transition-all duration-300 hover:pl-6 overflow-hidden 
        ${isOpen ? 'opacity-100' : 'opacity-0'}
      `}
    >
      <div className="absolute inset-0 bg-white/[0.03] translate-x-[-100%] group-hover/item:translate-x-0 transition-transform duration-200 ease-out z-0"></div>
      <span className="absolute left-1 opacity-0 group-hover/item:opacity-100 group-hover/item:left-3 transition-all duration-200 text-[#C49A6C] z-10 select-none">•</span>
      <span className="relative z-10">{item.name}</span>
    </a>
  );

  return (
    <div className="flex gap-10 text-sm text-gray-300">
      {/* Profil Perusahaan Dropdown */}
      <div 
        className="relative group h-fit"
        onMouseEnter={() => setIsProfilOpen(true)}
        onMouseLeave={() => setIsProfilOpen(false)}
      >
        <a 
          href="/profil-perusahaan" 
          onClick={(e) => auto_scroll(e, "#hero-profil", "/profil-perusahaan")} 
          className={`${linkClassName} cursor-pointer py-1`}
        >
          Profil Perusahaan <FaChevronDown className={`text-[10px] transition-transform duration-200 ${isProfilOpen ? 'rotate-180' : ''}`} />
        </a>
        
        <div className={`absolute left-0 right-0 h-4 top-full z-[190] ${isProfilOpen ? 'block' : 'hidden'}`} />

        <div className={`
          absolute top-[calc(100%+14px)] left-1/2 -translate-x-1/2 w-56 
          bg-black border-none
          shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1),inset_0_1px_0_0_rgba(255,255,255,0.2)]
          rounded-[1.5rem] p-4 lg:p-6
          transition-all duration-300 origin-top
          ${isProfilOpen ? 'opacity-100 scale-100 pointer-events-auto translate-y-0' : 'opacity-0 scale-95 pointer-events-none -translate-y-2'}
          z-[200]
        `}>
          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-black rotate-45 border-l border-t border-white/10 z-[-1] shadow-[-1px_-1px_0_0_rgba(255,255,255,0.1)]"></div>
          
          <div className="flex flex-col gap-1">
            {profilDropdownItems.map((item, idx) => renderDropdownItem(item, "/profil-perusahaan", isProfilOpen, idx))}
          </div>
        </div>
      </div>
      
      {/* Produk Dropdown */}
      <div 
        className="relative group h-fit"
        onMouseEnter={() => setIsProdukOpen(true)}
        onMouseLeave={() => setIsProdukOpen(false)}
      >
        <a 
          href="/#hero" 
          onClick={(e) => auto_scroll(e, "#hero", "/")} 
          className={`${linkClassName} cursor-pointer py-1`}
        >
          Produk <FaChevronDown className={`text-[10px] transition-transform duration-200 ${isProdukOpen ? 'rotate-180' : ''}`} />
        </a>
        
        <div className={`absolute left-0 right-0 h-4 top-full z-[190] ${isProdukOpen ? 'block' : 'hidden'}`} />

        <div className={`
          absolute top-[calc(100%+14px)] left-1/2 -translate-x-1/2 w-56 
          bg-black border-none
          shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1),inset_0_1px_0_0_rgba(255,255,255,0.2)]
          rounded-[1.5rem] p-4 lg:p-6
          transition-all duration-300 origin-top
          ${isProdukOpen ? 'opacity-100 scale-100 pointer-events-auto translate-y-0' : 'opacity-0 scale-95 pointer-events-none -translate-y-2'}
          z-[200]
        `}>
          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-black rotate-45 border-l border-t border-white/10 z-[-1] shadow-[-1px_-1px_0_0_rgba(255,255,255,0.1)]"></div>
          
          <div className="flex flex-col gap-1">
            {dropdownItems.map((item, idx) => renderDropdownItem(item, "/", isProdukOpen, idx))}
          </div>
        </div>
      </div>

      {/* Cara Kerja Dropdown */}
      <div 
        className="relative group h-fit"
        onMouseEnter={() => setIsCaraKerjaOpen(true)}
        onMouseLeave={() => setIsCaraKerjaOpen(false)}
      >
        <a 
          href="/cara-kerja" 
          onClick={(e) => auto_scroll(e, "#hero-cara-kerja", "/cara-kerja")} 
          className={`${linkClassName} cursor-pointer py-1`}
        >
          Cara Kerja <FaChevronDown className={`text-[10px] transition-transform duration-200 ${isCaraKerjaOpen ? 'rotate-180' : ''}`} />
        </a>
        
        <div className={`absolute left-0 right-0 h-4 top-full z-[190] ${isCaraKerjaOpen ? 'block' : 'hidden'}`} />

        <div className={`
          absolute top-[calc(100%+14px)] left-1/2 -translate-x-1/2 w-56 
          bg-black border-none
          shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1),inset_0_1px_0_0_rgba(255,255,255,0.2)]
          rounded-[1.5rem] p-4 lg:p-6
          transition-all duration-300 origin-top
          ${isCaraKerjaOpen ? 'opacity-100 scale-100 pointer-events-auto translate-y-0' : 'opacity-0 scale-95 pointer-events-none -translate-y-2'}
          z-[200]
        `}>
          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-black rotate-45 border-l border-t border-white/10 z-[-1] shadow-[-1px_-1px_0_0_rgba(255,255,255,0.1)]"></div>
          
          <div className="flex flex-col gap-1">
            {caraKerjaDropdownItems.map((item, idx) => renderDropdownItem(item, "/cara-kerja", isCaraKerjaOpen, idx))}
          </div>
        </div>
      </div>

      <a href="/artikel" className={linkClassName}>Artikel</a>
    </div>
  );
};

export { Navbar };