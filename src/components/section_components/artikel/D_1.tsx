import Header from "../../__global/Header";
import { Item } from "./dummy/Item";
import { MainPost } from "./dummy/MainPost";
import "./dummy/style/init.css";
import { useEffect } from "react";
import { initScrollAnimations } from "../../../utils/animations";
import gsap from 'gsap';
// @ts-ignore
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  FaLocationDot,
  FaClock,
  FaPhone,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn
} from "react-icons/fa6";

// Register plugin
gsap.registerPlugin(ScrollTrigger);

function D_1() {
  useEffect(function () {
    document.body.style.backgroundColor = "white";


    gsap.ticker.lagSmoothing(0);

    initScrollAnimations();

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return function () {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div className="bg-white max-w-[1700px] mx-auto text-black">
      <Header />
      <div className="pt-[120px] pb-4 md:pb-20 px-4 md:px-0">
        <div className="w-full mx-auto bg-white rounded-t-[50px] p-2 lg:p-14 md:p-10 pb-0 mb-10 text-black gsap-reveal">
          <MainPost />
          <Item />
        </div>
        <div className="w-full mx-auto">
          {/* 3. Bottom Footer - Main Content */}
          <div
            style={{
              background: "linear-gradient(135deg, rgb(0, 58, 48) 0%, rgb(0, 29, 24) 50%, rgb(0, 5, 4) 100%)",
            }}
            className={`w-full md:mx-auto text-white pt-16 md:pb-8 px-6 md:px-16 rounded-b-[30px] md:rounded-b-[24px]`}
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12 md:mb-12">
              {/* Brand & Address */}
              <div className="flex flex-col">
                <img className="w-[140px] md:w-[160px] mb-8" src="/assets/img/logo-pui.webp" alt="PUI Logo" />
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <FaLocationDot className="mt-1 text-[#C49A6C] shrink-0" />
                    <div>
                      <span className="font-bold block mb-1">Alamat:</span>
                      <p className="text-white/70 text-sm leading-relaxed">
                        The Darmawangsa Square Lt.2 No.263-264, Jalan Darmawangsa VI, Kebayoran Baru, Jakarta Selatan 12160
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaClock className="mt-1 text-[#C49A6C] shrink-0" />
                    <div>
                      <span className="font-bold block mb-1">Jam Buka:</span>
                      <ul className="text-white/70 text-sm list-disc ml-4">
                        <li>Senin s/d Jumat: 10.00 s/d 17.30</li>
                        <li>Sabtu-Minggu by Appointment</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="md:ml-16 md:mt-16">
                <h3 className="font-semibold mb-4 text-lg md:text-base">Page</h3>
                <ul className="grid grid-cols-2 md:grid-cols-1 gap-y-2 text-white/70 text-sm">
                  <li className="hover:text-white"><a href="/cara-kerja">Cara Kerja</a></li>
                  <li className="hover:text-white">Gadai Tas Branded</li>
                  <li className="hover:text-white">Profil Perusahaan</li>
                  <li className="hover:text-white">Gadai Perhiasan & Berlian</li>
                  <li className="hover:text-white">Kontak</li>
                  <li className="hover:text-white">FAQs</li>
                  <li className="hover:text-white">Gadai Jam Tangan</li>
                </ul>
              </div>

              <div className="hidden md:block"></div>

              {/* Socials & Contact Actions */}
              <div className="md:mt-16">
                <h3 className="font-semibold mb-4 text-lg md:text-base">Kontak</h3>
                <div className="space-y-3">
                  <a href="tel:02172787020" className="flex items-center gap-4 border border-white/30 px-4 py-4 rounded-xl hover:bg-white/5 transition-all cursor-pointer">
                    <FaPhone className="text-xl shrink-0" />
                    <span className="text-sm font-medium">Telepon:<br />021-7278-7020</span>
                  </a>
                  <a href="https://wa.me/6282277777911" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 border border-white/30 px-4 py-4 rounded-xl hover:bg-white/5 transition-all cursor-pointer">
                    <FaWhatsapp className="text-xl shrink-0" />
                    <span className="text-sm font-medium">WhatsApp:<br />0822 77777 911</span>
                  </a>
                </div>

                <div className="flex gap-4 mt-8">
                  {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, idx) => (
                    <div key={idx} className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#C49A6C] transition-colors cursor-pointer">
                      <Icon className="text-lg" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Regulation Logos */}
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 md:mb-12 border-t border-white/10 pt-10">
              <div className="flex items-center gap-4 p-3 bg-white/5 rounded-xl w-full md:w-auto">
                <img width="50" src="/assets/img/logo-ojk.webp" alt="OJK" />
                <span className="text-[12px] font-medium">Terdaftar & diawasi OJK</span>
              </div>
              <div className="flex items-center gap-4 p-3 bg-white/5 rounded-xl w-full md:w-auto">
                <img width="70" src="/assets/img/d8a28cc7d63c61e6d01f7699200f9f7a096d9c27.webp" alt="PPGI" />
                <span className="text-[12px] font-medium">Anggota Resmi PPGI</span>
              </div>
            </div>

            {/* Sub-footer */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-[11px] pt-6 border-t border-white/5 pb-2 md:pb-0">
              <span>Copyright © 2026</span>
              <div className="flex gap-6">
                <span className="hover:text-white cursor-pointer">Kebijakan Privasi</span>
                <span className="hover:text-white cursor-pointer">Syarat & Ketentuan</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default D_1;
