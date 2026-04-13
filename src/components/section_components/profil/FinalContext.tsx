import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaMoneyBillWave, FaGem, FaShieldHalved, FaLaptop } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

let FinalContext = function () {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // 1. Animasi Header (Text Reveal)
            gsap.from(".reveal-item", {
                opacity: 0,
                y: 30,
                stagger: 0.2,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".gsap-reveal",
                    start: "top 80%",
                }
            });

            // 2. Animasi Card Visi & Misi (Slide In + Scale)
            gsap.from(".v-card", {
                opacity: 0,
                x: (index) => index === 0 ? -100 : 100, // Card kiri dari kiri, kanan dari kanan
                duration: 1.8,
                ease: "expo.out",
                stagger: 0.2,
                scrollTrigger: {
                    trigger: ".v-card",
                    start: "top 85%",
                }
            });

            // 3. Animasi Checkmark Misi (Staggered List)
            gsap.from(".misi-item", {
                opacity: 0,
                x: -20,
                stagger: 0.1,
                duration: 0.8,
                delay: 0.8, // Muncul setelah card beres
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".v-card",
                    start: "top 85%",
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="gsap-reveal py-32 px-6 max-w-7xl mx-auto font-sans overflow-hidden">
            <div className="text-center mb-20">
                <div className="reveal-item inline-block px-6 py-2 mb-6 text-sm font-bold tracking-widest text-[#003A30] uppercase bg-white/20 backdrop-blur-md border border-[#003A30]/20 rounded-full">
                    Tentang PUI
                </div>
                <p className="reveal-item text-xl md:text-2xl text-slate-600 leading-relaxed max-w-4xl mx-auto font-light">
                    PUI (Pergadaian Utama Indonesia) hadir sebagai mitra finansial strategis yang memberikan solusi pinjaman dana cepat dengan jaminan <span className="font-semibold text-slate-900 underline decoration-[#003A30]/30">aset bernilai tinggi</span>.
                </p>

                <div className="reveal-item mt-10">
                    <h1
                        style={{ color: "rgb(0, 58, 48)", fontFamily: "'Lato', sans-serif" }}
                        className="text-3xl md:text-5xl font-black tracking-tighter uppercase"
                    >
                        PT Pergadaian Utama Indonesia
                    </h1>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-center gap-8 items-stretch">
                <div className="v-card flex-1 p-10 bg-white rounded-3xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-slate-100 transition-colors duration-500 hover:border-[#003A30]/50 group">
                    <div className="w-14 h-14 bg-[#003A30] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-green-200 group-hover:rotate-6 transition-transform duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-4">Visi</h3>
                    <p className="text-slate-500 leading-relaxed text-lg font-light">
                        Menjadi lembaga pembiayaan gadai terpercaya dan terdepan di Indonesia, menghadirkan standar layanan <span className="text-[#003A30] font-medium border-b border-[#003A30]/20">premium dan inovatif</span> bagi pemilik aset bernilai tinggi.
                    </p>
                </div>

                <div className="v-card flex-[1.4] p-10 bg-white rounded-3xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-slate-100 transition-colors duration-500 hover:border-[#003A30]/50">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-1 w-12 bg-[#003A30] rounded-full animate-pulse"></div>
                        <h3 className="text-3xl font-bold text-slate-900">Misi Kami</h3>
                    </div>

                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <li className="misi-item flex items-start gap-4 group/item">
                            <div className="flex-shrink-0 bg-green-50 p-2.5 rounded-xl text-[#003A30] group-hover/item:bg-[#003A30] group-hover/item:text-white transition-all duration-300">
                                <FaMoneyBillWave className="w-5 h-5" />
                            </div>
                            <span className="text-slate-600 font-medium group-hover/item:text-slate-900 transition-colors">Pembiayaan cepat, aman, & transparan.</span>
                        </li>
                        <li className="misi-item flex items-start gap-4 group/item">
                            <div className="flex-shrink-0 bg-green-50 p-2.5 rounded-xl text-[#003A30] group-hover/item:bg-[#003A30] group-hover/item:text-white transition-all">
                                <FaGem className="w-5 h-5" />
                            </div>
                            <span className="text-slate-600 font-medium group-hover/item:text-slate-900 transition-colors">Solusi aset bernilai tinggi.</span>
                        </li>
                        <li className="misi-item flex items-start gap-4 group/item">
                            <div className="flex-shrink-0 bg-green-50 p-2.5 rounded-xl text-[#003A30] group-hover/item:bg-[#003A30] group-hover/item:text-white transition-all">
                                <FaShieldHalved className="w-5 h-5" />
                            </div>
                            <span className="text-slate-600 font-medium group-hover/item:text-slate-900 transition-colors">Kerahasiaan aset nasabah.</span>
                        </li>
                        <li className="misi-item flex items-start gap-4 group/item">
                            <div className="flex-shrink-0 bg-green-50 p-2.5 rounded-xl text-[#003A30] group-hover/item:bg-[#003A30] group-hover/item:text-white transition-all">
                                <FaLaptop className="w-5 h-5" />
                            </div>
                            <span className="text-slate-600 font-medium group-hover/item:text-slate-900 transition-colors">Layanan profesional & digital.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export { FinalContext }