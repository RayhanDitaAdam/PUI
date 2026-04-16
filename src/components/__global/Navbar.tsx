import React, { useEffect } from "react";
import { gsap } from "gsap/gsap-core";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

let Navbar: React.FC = function () {
  const auto_scroll = (e: React.MouseEvent, target: string) => {
    if (window.location.pathname === "/") {
      e.preventDefault();
      gsap.to(window, {
        duration: 1,
        scrollTo: {
          y: target,
          offsetY: 80
        },
        ease: "power2.out"
      });
    }
  };
  useEffect(function () {
    if (window.location.hash === "#produk") {
      gsap.to(window, {
        duration: 1,
        scrollTo: "#produk",
      });
    }
  }, []);

  const linkClassName = "relative hover:text-white transition-colors duration-300 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1.5px] after:bottom-[-4px] after:left-0 after:bg-white after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left";

  return (
    <div className="flex gap-10 text-sm text-gray-300">
      <a href="/profil-perusahaan" className={linkClassName}>Profil Perusahaan</a>
      <a href="/#produk" onClick={(e) => auto_scroll(e, "#produk")} className={linkClassName}>Produk</a>
      <a href="/cara-kerja" className={linkClassName}>Cara Kerja</a>
      <a href="/artikel" className={linkClassName}>Artikel</a>
    </div>
  );
};

export { Navbar };