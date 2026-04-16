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
    html: `<div class="flex items-center justify-center bg-white border-2 border-[#C49A6C] rounded-full w-10 h-10 shadow-lg">
             <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="24px" width="24px" xmlns="http://www.w3.org/2000/svg" class="text-[#C49A6C]">
               <path d="M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 72h48v48h-48V72zm0 96h48v48h-48v-48zm0 96h48v48h-48v-48zm0 96h48v48h-48v-48zm144-288h48v48h-48V72zm0 96h48v48h-48v-48zm0 96h48v48h-48v-48zm0 96h48v48h-48v-48z"></path>
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

        <footer id="kontak" className={` w-full max-w-[1700px] mx-auto ${bgClass} ${isAttached ? "" : "px-0 md:px-4 pt-12 md:pb-12"} ${className}`}>
            
            {/* 1. Keamanan Section */}
            {showSecurity && (
                <div
                    style={{
                        background: "linear-gradient(135deg, rgb(0, 58, 48) 0%, rgb(0, 29, 24) 50%, rgb(0, 5, 4) 100%)",
                    }}
                    className="w-full md:max-w-7xl 2xl:max-w-[1700px] md:mx-auto pt-16 pb-12 md:pb-12 text-white rounded-t-[24px] md:rounded-t-[48px] 2xl:px-32"
                >
                    <div className="text-center mb-10 px-6">
                        <h1 className="text-2xl md:text-3xl mb-4 font-extrabold px-2">Didukung Standar Keamanan Tinggi</h1>
                        <p className="text-white/80 leading-relaxed text-[13px] md:text-sm max-w-xl mx-auto">
                            Menghadirkan perlindungan aset kelas premium dengan standar keamanan tinggi, didukung sistem profesional dan pengelolaan yang terpercaya.
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 px-6">
                        <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl w-full max-w-[340px]">
                            <img width="70" alt="OJK" src="/assets/img/logo-ojk.png" />
                            <span className="text-sm font-medium">Terdaftar &amp; diawasi OJK</span>
                        </div>
                        <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl w-full max-w-[340px]">
                            <img width="70" alt="PPGI" src="/assets/img/d8a28cc7d63c61e6d01f7699200f9f7a096d9c27.png" />
                            <span className="text-sm font-medium">Anggota Resmi PPGI</span>
                        </div>
                    </div>
                </div>
            )}

            {/* 2. Map Section with New Styled Card */}
            {showMap && (
                <div className="w-full md:max-w-7xl 2xl:max-w-[1700px] md:mx-auto h-[600px] md:h-[500px] overflow-hidden relative">
                    <MapContainer
                        center={position}
                        zoom={17}
                        scrollWheelZoom={false}
                        style={{ height: "100%", width: "100%", zIndex: 0 }}
                    >
                        <MapResizeFix />
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Polyline positions={routeCoords} color="#C49A6C" weight={4} dashArray="10, 10" opacity={0.7} />
                        <Marker position={position} icon={customIcon} />
                    </MapContainer>

                    {/* New Styled Card Overlay */}
                    <div className="absolute bottom-6 md:bottom-auto top-auto md:top-6 left-4 right-4 md:left-auto md:right-8 md:w-[420px] bg-[#F4F4F1] border border-white/50 p-4 md:p-8 rounded-3xl md:rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] pointer-events-auto">
                        <div className="flex flex-col gap-3 md:gap-6">
                            {/* Header */}
                            <div>
                                <h3 className="text-[#003D35] font-black text-xl md:text-3xl mb-1 md:mb-2">
                                    Kantor Pusat PUI
                                </h3>
                                <div className="h-[2px] md:h-[3px] w-8 md:w-12 bg-[#C49A6C]"></div>
                            </div>

                            {/* Content Body */}
                            <div className="space-y-3 md:space-y-6">
                                {/* Lokasi */}
                                <div className="flex gap-3 md:gap-4 items-start">
                                    <div className="bg-[#003D35] text-white p-2.5 md:p-3 rounded-full shadow-lg shrink-0">
                                        <FaLocationDot className="text-sm md:text-xl" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] md:text-[11px] uppercase tracking-widest text-[#8C8C8C] font-bold mb-0.5 md:mb-1">
                                            LOKASI
                                        </p>
                                        <p className="text-xs md:text-base text-[#003D35] font-bold leading-snug">
                                            The Darmawangsa Square Lt.2 No.263-264, Jakarta Selatan 12160
                                        </p>
                                    </div>
                                </div>

                                {/* Jam Operasional */}
                                <div className="flex gap-3 md:gap-4 items-start">
                                    <div className="bg-[#003D35] text-white p-2.5 md:p-3 rounded-full shadow-lg shrink-0">
                                        <FaClock className="text-sm md:text-xl" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-[10px] md:text-[11px] uppercase tracking-widest text-[#8C8C8C] font-bold mb-0.5 md:mb-1">
                                            JAM OPERASIONAL
                                        </p>
                                        <div className="space-y-0.5 md:space-y-1">
                                            <div className="flex justify-between items-center text-xs md:text-base font-bold">
                                                <span className="text-[#003D35]">Senin - Jumat:</span>
                                                <span className="text-[#C49A6C]">10:00 - 17:30</span>
                                            </div>
                                            <div className="flex justify-between items-center text-xs md:text-base font-bold">
                                                <span className="text-[#003D35]">Sabtu - Minggu:</span>
                                                <span className="text-[#C49A6C]">By Appointment</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Divider Line */}
                            <div className="h-[1px] w-full bg-[#E5E5E0] my-1"></div>

                            {/* Contact Info */}
                            <div className="space-y-2 md:space-y-3">
                                <div className="flex gap-2.5 md:gap-3 items-center">
                                    <FaPhone className="text-[#C49A6C] text-sm md:text-[18px]" />
                                    <p className="text-sm md:text-lg text-[#003D35] font-bold">
                                        021-7278-7020
                                    </p>
                                </div>
                                <div className="flex gap-2.5 md:gap-3 items-center">
                                    <FaWhatsapp className="text-[#C49A6C] text-[16px] md:text-[20px]" />
                                    <p className="text-sm md:text-lg text-[#003D35] font-bold">
                                        0822 77777 911
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
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
                            <div className="flex items-center gap-4 border border-white/30 px-4 py-4 rounded-xl hover:bg-white/5 transition-all cursor-pointer">
                                <FaPhone className="text-xl shrink-0" />
                                <span className="text-sm font-medium">Telepon:<br />021-7278-7020</span>
                            </div>
                            <div className="flex items-center gap-4 border border-white/30 px-4 py-4 rounded-xl hover:bg-white/5 transition-all cursor-pointer">
                                <FaWhatsapp className="text-xl shrink-0" />
                                <span className="text-sm font-medium">WhatsApp:<br />0822 77777 911</span>
                            </div>
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
                        <img width="50" src="/assets/img/logo-ojk.png" alt="OJK" />
                        <span className="text-[12px] font-medium">Terdaftar & diawasi OJK</span>
                    </div>
                    <div className="flex items-center gap-4 p-3 bg-white/5 rounded-xl w-full md:w-auto">
                        <img width="70" src="/assets/img/d8a28cc7d63c61e6d01f7699200f9f7a096d9c27.png" alt="PPGI" />
                        <span className="text-[12px] font-medium">Anggota Resmi PPGI</span>
                    </div>
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