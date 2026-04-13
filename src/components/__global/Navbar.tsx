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

  return (
    <div className="flex gap-10 text-sm text-gray-300">
      <a href="/profil-perusahaan">Profil Perusahaan</a>
      <a href="/#produk" onClick={(e) => auto_scroll(e, "#produk")}>Produk</a>
      <a href="/cara-kerja">Cara Kerja</a>
      <a href="/artikel">Artikel</a>
    </div>
  );
};

export { Navbar };