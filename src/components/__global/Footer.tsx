import React, { useEffect } from "react";
// import { useLocation } from "react-router-dom"; (REMOVED)
import { MapContainer, TileLayer, Marker, Polyline, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import {
    FaLocationDot,
    FaClock,
    FaPhone,
    FaWhatsapp,
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn
} from "react-icons/fa6";

const customIcon = L.divIcon({
    className: "custom-marker",
    html: `<div class="flex items-center justify-center bg-white border-2 border-red-600 rounded-full w-10 h-10 shadow-lg">
             <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg" class="text-red-600">
               <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
             </svg>
           </div>`,
    iconSize: [40, 40],
    iconAnchor: [20, 20],
});

const routeCoords: [number, number][] = [
    [-6.2440, 106.8000],
    [-6.2445, 106.8015],
    [-6.2449, 106.8023]
];

const MapResizeFix: React.FC = () => {
    const map = useMap();
    useEffect(() => {
        const timer = setTimeout(() => {
            map.invalidateSize();
        }, 300);
        window.addEventListener('resize', () => map.invalidateSize());
        return () => {
            clearTimeout(timer);
            window.removeEventListener('resize', () => map.invalidateSize());
        };
    }, [map]);
    return null;
};

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
    const position: [number, number] = [-6.2449, 106.8023];

    return (
        <div className="bg-white">

            <footer id="kontak" className={`px-[1rem] md:px-0 w-full max-w-[1700px] mx-auto ${bgClass} ${isAttached ? "" : "pt-12 md:pb-12"} ${className}`}>

                {/* 1. Keamanan Section */}
                {showSecurity && (
                    <div
                        style={{
                            background: "linear-gradient(135deg, rgb(0, 58, 48) 0%, rgb(0, 29, 24) 50%, rgb(0, 5, 4) 100%)",
                        }}
                        className="w-full md:max-w-7xl 2xl:max-w-[1700px] md:mx-auto pt-20 pb-16 md:pb-24 text-white rounded-t-[24px] md:rounded-t-[48px] 2xl:px-32 text-center"
                    >
                        <img 
                            src="/assets/img/logo-pui.png" 
                            alt="PUI Logo" 
                            className="w-[9rem] h-[3.125rem] aspect-[72/25] md:w-[12rem] md:h-[4.1875rem] md:aspect-[192/67] mx-auto mb-10" 
                        />
                        <p 
                            style={{ 
                                color: "#EDE8D0", 
                                fontFamily: "Lato, sans-serif", 
                                fontSize: "clamp(1.5rem, 5vw, 2.3125rem)", 
                                fontWeight: 800, 
                                lineHeight: "130%",
                                alignSelf: "stretch"
                            }}
                            className="w-full md:w-auto max-w-4xl mx-auto px-6 text-center"
                        >
                            Pergadaian Utama Indonesia <br className="md:hidden" /> berizin dan <br className="hidden md:block" /> diawasi oleh <br className="md:hidden" /> Otoritas Jasa Keuangan
                        </p>
                    </div>
                )}

                {/* 2. Map Section with New Styled Card */}
                {showMap && (
                    <div className="w-full md:max-w-7xl 2xl:max-w-[1700px] md:mx-auto h-[450px] md:h-[350px] overflow-hidden relative">
                        <MapContainer
                            center={position}
                            zoom={17}
                            scrollWheelZoom={false}
                            style={{ height: "100%", width: "100%", zIndex: 0 }}
                        >
                            <MapResizeFix />
                            <TileLayer url="https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}" attribution="&copy; Google Maps" />
                            <Polyline positions={routeCoords} color="#C49A6C" weight={4} dashArray="10, 10" opacity={0.7} />
                            <Marker position={position} icon={customIcon} />
                        </MapContainer>

                        {/* New Styled Card Overlay (HIDDEN)
                        <div className="absolute bottom-6 md:bottom-auto top-auto md:top-6 left-4 right-4 md:left-auto md:right-8 md:w-[420px] bg-[#F4F4F1] border border-white/50 p-4 md:p-8 rounded-3xl md:rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] pointer-events-auto">
                            ... (omitted content for brevity)
                        </div>
                        */}
                    </div>
                )}
                {/* 3. Bottom Footer - Main Content */}
                <div
                    style={{
                        background: "linear-gradient(135deg, rgb(0, 58, 48) 0%, rgb(0, 29, 24) 50%, rgb(0, 5, 4) 100%)",
                    }}
                    className={`w-full md:max-w-7xl 2xl:max-w-[1700px] md:mx-auto text-white pt-16 pb-12 md:pb-16 px-6 md:px-16 2xl:px-32 rounded-b-[24px] md:rounded-b-[48px]`}
                >
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12 md:mb-12">
                        {/* Brand & Address */}
                        <div className="flex flex-col">
                            <img className="w-[140px] md:w-[160px] mb-8" src="/assets/img/logo-pui.png" alt="PUI Logo" />
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <FaLocationDot className="mt-1 text-[#C49A6C] shrink-0" />
                                    <div>
                                        <span className="font-bold block mb-1">Alamat:</span>
                                        <p className="text-white/70 text-sm leading-relaxed">
                                            The Darmawangsa Square Lt.2 No.263-264, Jln. Darmawangsa VI, Kebayoran Baru, Jakarta Selatan 12160
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
                                <a href="https://www.facebook.com/profile.php?id=61585918772400" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#C49A6C] transition-colors cursor-pointer no-underline">
                                    <FaFacebookF className="text-lg" />
                                </a>
                                <a href="https://www.instagram.com/pui.gadai" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#C49A6C] transition-colors cursor-pointer no-underline">
                                    <FaInstagram className="text-lg" />
                                </a>
                                <a href="https://www.linkedin.com/company/puigadai/about" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#C49A6C] transition-colors cursor-pointer no-underline">
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