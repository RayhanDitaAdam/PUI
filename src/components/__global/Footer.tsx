import React, { useEffect, useState, useRef, Suspense } from "react";
// import { useLocation } from "react-router-dom"; (REMOVED)
import {
    FaLocationDot,
    FaClock,
    FaPhone,
    FaWhatsapp,
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn
} from "react-icons/fa6";

const LazyFooterMap = React.lazy(() => import('./FooterMap'));

interface FooterProps {
    showMap?: boolean;
    showSecurity?: boolean;
    className?: string;
    isAttached?: boolean;
}

const Footer: React.FC<FooterProps> = ({
    showMap = true,
    showSecurity = true,
    className = "",
    isAttached = false
}) => {
    const bgClass = "bg-white";
    const position: [number, number] = [-6.25331135969288, 106.80142780544092];

    const [isMapVisible, setIsMapVisible] = useState(false);
    const mapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsMapVisible(true);
                    observer.disconnect(); // Stop observing once loaded
                }
            },
            { rootMargin: "300px" } // Load map 300px before it scrolls into view
        );

        if (mapRef.current) {
            observer.observe(mapRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div className="bg-white">

            <footer id="kontak" className={`px-[1rem] md:px-[1.5rem] lg:px-0 w-full lg:max-w-[1232px] xl:max-w-[1440px] 2xl:max-w-[1600px] mx-auto ${bgClass} ${isAttached ? "" : "pt-12 md:pb-12"} ${className}`}>

                {/* 1. Keamanan Section */}
                {showSecurity && (
                    <div
                        style={{
                            background: "linear-gradient(135deg, rgb(0, 58, 48) 0%, rgb(0, 29, 24) 50%, rgb(0, 5, 4) 100%)",
                        }}
                        className="w-full lg:max-w-[1232px] xl:max-w-[1440px] 2xl:max-w-[1600px] md:mx-auto pt-20 pb-16 md:pb-24 text-white rounded-t-[24px] md:rounded-t-[48px] 2xl:px-8 text-center"
                    >
                        <img
                            src="/assets/img/logo-pui.webp"
                            alt="PUI Logo"
                            className="w-[12rem] h-[4.5rem] md:w-[16rem] md:h-[6rem] mx-auto"
                        />
                        
                    </div>
                )}

                {/* 2. Map Section with New Styled Card */}
                {showMap && (
                    <div ref={mapRef} className="w-full lg:max-w-[1232px] xl:max-w-[1440px] 2xl:max-w-[1600px] md:mx-auto h-[450px] md:h-[350px] overflow-hidden relative bg-gray-100 flex items-center justify-center">
                        {!isMapVisible ? (
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#E5E5E5] animate-pulse">
                                {/* Placeholder Image or Skeleton */}
                                <img src="/assets/img/logo-pui.webp" className="w-[8rem] opacity-30 mb-4 grayscale" alt="Loading Maps..." />
                                <span className="text-gray-700 font-medium text-sm">Loading Interactive Map...</span>
                            </div>
                        ) : (
                            <Suspense fallback={
                                <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#E5E5E5] animate-pulse">
                                    <img src="/assets/img/logo-pui.webp" className="w-[8rem] opacity-30 mb-4 grayscale" alt="Loading Maps..." />
                                    <span className="text-gray-700 font-medium text-sm">Loading Interactive Map...</span>
                                </div>
                            }>
                                <LazyFooterMap position={position} />
                            </Suspense>
                        )}
                    </div>
                )}
                {/* 3. Bottom Footer - Main Content */}
                <div
                    style={{
                        background: "linear-gradient(135deg, rgb(0, 58, 48) 0%, rgb(0, 29, 24) 50%, rgb(0, 5, 4) 100%)",
                    }}
                    className={`w-full lg:max-w-[1232px] xl:max-w-[1440px] 2xl:max-w-[1600px] md:mx-auto text-white pt-16 pb-12 md:pb-16 px-6 md:px-10 lg:px-16 2xl:px-8 rounded-b-[24px] md:rounded-b-[48px]`}
                >
                    <div className="grid grid-cols-1 md:flex md:flex-row md:justify-between xl:grid xl:grid-cols-4 gap-10 md:gap-0 xl:gap-12 md:mb-12">
                        {/* Brand & Address */}
                        <div className="flex flex-col md:max-w-[320px] xl:max-w-none">
                            <img className="w-[140px] md:w-[160px] mb-8" src="/assets/img/logo-pui.webp" alt="PUI Logo" />
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <FaLocationDot className="mt-1 text-[#C49A6C] shrink-0" />
                                    <div>
                                        <span className="font-bold block mb-1">Alamat:</span>
                                        <p className="text-white/70 text-xs whitespace-nowrap leading-relaxed">
                                            The Darmawangsa Square Lt.2 No.263-264, <br /> Jl. Darmawangsa VI, Kebayoran Baru, <br className="hidden md:block" /> Jakarta Selatan 12160
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <FaClock className="mt-1 text-[#C49A6C] shrink-0" />
                                    <div>
                                        <span className="font-bold block mb-1">Jam Buka:</span>
                                        <ul className="text-white/70 text-xs whitespace-nowrap list-disc ml-4">
                                            <li>Senin s/d Jumat: 10.00 s/d 17.30</li>
                                            <li>Sabtu-Minggu by Appointment</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Navigation Links */}
                        <div className="md:ml-0 xl:ml-16 md:mt-16">
                            <h3 className="font-semibold mb-4 text-lg md:text-base">Page</h3>
                            <ul className="grid grid-cols-2 md:grid-cols-1 gap-y-2 text-white/70 text-sm">
                                <li className="hover:text-white"><a href="/profil-perusahaan">Profil Perusahaan</a></li>
                                <li className="hover:text-white"><a href="/cara-kerja">Cara Kerja</a></li>
                                <li className="hover:text-white"><a href="/#produk">Produk</a></li>
                                <li className="hover:text-white"><a href="/artikel">Artikel</a></li>
                            </ul>
                        </div>

                        <div className="hidden xl:block"></div>

                        {/* Socials & Contact Actions */}
                        <div className="md:mt-16 md:max-w-[14rem] md:w-full md:pl-4 xl:pl-0">
                            <h3 className="font-semibold mb-4 text-lg md:text-base">Kontak</h3>
                            <div className="space-y-3">
                                <a href="tel:02172787020" className="flex items-center gap-4 md:gap-3 border border-white/30 px-4 py-4 md:p-2 xl:px-4 xl:py-4 rounded-xl hover:bg-white/5 transition-all cursor-pointer md:w-full md:max-w-[14rem] xl:w-auto md:scale-[0.95] md:origin-left xl:scale-100">
                                    <FaPhone className="text-xl md:text-lg shrink-0" />
                                    <span className="text-sm md:text-xs font-medium">Telepon:<br />021-7278-7020</span>
                                </a>
                                <a href="https://wa.me/6282277777911" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 md:gap-3 border border-white/30 px-4 py-4 md:p-2 xl:px-4 xl:py-4 rounded-xl hover:bg-white/5 transition-all cursor-pointer md:w-full md:max-w-[14rem] xl:w-auto md:scale-[0.95] md:origin-left xl:scale-100">
                                    <FaWhatsapp className="text-xl shrink-0" />
                                    <span className="text-sm font-medium">WhatsApp:<br />0822 77777 911</span>
                                </a>
                            </div>

                            <div className="flex gap-4 mt-8 mb-6 md:mb-0">
                                <a aria-label="Facebook Profile" href="https://www.facebook.com/profile.php?id=61585918772400" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#C49A6C] transition-colors cursor-pointer no-underline">
                                    <FaFacebookF className="text-lg" />
                                </a>
                                <a aria-label="Instagram Profile" href="https://www.instagram.com/pui.gadai" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#C49A6C] transition-colors cursor-pointer no-underline">
                                    <FaInstagram className="text-lg" />
                                </a>
                                <a aria-label="LinkedIn Profile" href="https://www.linkedin.com/company/puigadai/about" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#C49A6C] transition-colors cursor-pointer no-underline">
                                    <FaLinkedinIn className="text-lg" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Regulation Logos */}
                    <div className="flex flex-row md:flex-row items-stretch justify-center md:justify-start gap-4 md:gap-6 md:mb-[3rem] border-t border-white/10 pt-[2.5rem]">
                        <span
                            className="w-[18.5625rem] md:w-auto md:max-w-[320px] text-white md:text-white/60 font-normal md:font-medium text-[0.75rem] md:text-[1rem] leading-[130%] font-['Lato']"
                        >
                            Pergadaian Utama Indonesia berizin dan diawasi oleh Otoritas Jasa Keuangan
                        </span>
                    </div>

                    {/* Sub-footer */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-[11px] pt-6 border-t border-white/5">
                        <span>Copyright © 2026</span>
                        <div className="flex gap-6">
                            <span className="hover:text-white cursor-pointer">Kebijakan Privasi</span>
                            <span className="hover:text-white cursor-pointer">Syarat & Ketentuan</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;