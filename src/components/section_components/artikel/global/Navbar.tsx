import React from "react";

let Navbar: React.FC = function () {
  return (
    <div className="w-full max-w-7xl mx-auto px-12 py-8 flex items-center justify-between text-white">
      <div className="flex items-center gap-2 font-bold text-2xl">
        <img className="w-[90px]" src="/assets/img/navprop/logo-pui.webp"  alt="Logo Pui" />
      </div>

      <nav className="flex space-x-8 text-sm font-medium text-gray-300">
        <a href="/profil-perusahaan">Profil Perusahaan</a>
        <a href="/#produk">Produk</a>
        <a href="/cara-kerja">Cara Kerja</a>
        <a>Artikel</a>
      </nav>

      <div className="border border-gray-600 rounded-full px-4 py-2 flex items-center gap-2 text-sm">
        <i className="fa-brands fa-whatsapp text-white text-lg"></i>
        <span>0822 77777 911</span>
      </div>
    </div>
  );
};

export { Navbar };