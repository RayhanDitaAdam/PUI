import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let Items = function () {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Header Animation: Animate to visible
            gsap.to(".reveal-header", {
                opacity: 1,
                x: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".reveal-header",
                    start: "top 90%",
                    toggleActions: "play none none none"
                }
            });

            // Card Animation: Animate to visible with stagger
            gsap.to(".reveal-card", {
                opacity: 1,
                y: 0,
                stagger: 0.1,
                duration: 0.8,
                ease: "back.out(1.2)", // Subtle bounce for premium feel
                scrollTrigger: {
                    trigger: ".reveal-card",
                    start: "top 92%",
                    toggleActions: "play none none none"
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const features = [
        // ... (preserving this section exactly as is)
        {
            title: "Proses Cepat & Mudah",
            desc: "Pencairan dana dalam waktu singkat tanpa prosedur rumit.",
            img: "/assets/img/profil/9e83dda683c8326a23b19ada7a63fd44c6c71dc0.webp"
        },
        {
            title: "Spesialis Barang Mewah",
            desc: "Penaksiran akurat untuk jam tangan premium dan tas branded.",
            img: "/assets/img/profil/ee3abcda2eef6e828e2f1c99fd9ec7b9ad6f5227.webp"
        },
        {
            title: "Penilaian Profesional",
            desc: "Dilakukan oleh ahli bersertifikat di bidangnya.",
            img: "/assets/img/profil/1c1766aaa851ad680797a36295bd9e74b589b531.webp"
        },
        {
            title: "Keamanan Terjamin",
            desc: "Sistem keamanan berlapis dan asuransi penuh.",
            img: "/assets/img/profil/6d027213f36c0121fa6839cfbfcea55aeb10fe93.webp"
        },
        {
            title: "Privasi Terjaga",
            desc: "Kerahasiaan data nasabah adalah prioritas utama kami.",
            img: "/assets/img/profil/5621a4ed92942d4fd7a7ed260178126043c4a193.webp"
        },
        {
            title: "Layanan Premium",
            desc: "Layanan eksklusif dan personal untuk setiap nasabah.",
            img: "/assets/img/profil/15c7d3ecd86c33afcd8f6d95a9cd6ca74e6184bd.webp"
        }
    ];

    return (
        <section id="keunggulan-pui" ref={sectionRef} className="py-24 font-sans overflow-hidden bg-[#FAFAFA] scroll-mt-20">
            <div className="max-w-6xl mx-auto px-6">

                <div className="mb-20 space-y-2 reveal-header opacity-0 -translate-x-8 transform-gpu transition-none">
                    <span className="text-[#C49A6C] font-semibold tracking-[0.2em] uppercase text-sm block mb-1">Exclusive Services</span>
                    <div className="flex items-center gap-6">
                        <div className="h-14 w-1.5 bg-[#003A30] rounded-full hidden md:block"></div>
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold text-[#003A30] tracking-tight mb-2">Keunggulan Kami</h2>
                            <p className="text-gray-500 text-lg max-w-xl font-['Lato'] italic">Solusi pembiayaan cepat dan aman berbasis aset bernilai</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
                    {features.map((feat, i) => (
                        <div
                            key={i}
                            className="reveal-card opacity-0 translate-y-8 transform-gpu transition-none p-10 rounded-xl border border-gray-100 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,58,48,0.06)] hover:-translate-y-2 transition-all duration-700 ease-out group relative overflow-hidden"
                        >
                            <div className="relative z-20">
                                <div className="mb-8 relative inline-block">
                                    {/* Icon Container */}
                                    <div className="w-16 h-16 rounded-xl bg-[#003A30]/5 flex items-center justify-center group-hover:bg-[#003A30] transition-colors duration-500 overflow-hidden relative">
                                        <img
                                            width="34"
                                            src={feat.img}
                                            alt={feat.title}
                                            className="opacity-70 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:brightness-0 group-hover:invert transition-all duration-500 relative z-10"
                                        />
                                        {/* Soft Glass Sheen Animation */}
                                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[1.5s] ease-in-out pointer-events-none bg-gradient-to-r from-transparent via-white/20 to-transparent z-20" />
                                    </div>
                                </div>

                                <div className="relative">
                                    <h3 className="text-[1.375rem] font-bold text-[#003A30] mb-4 tracking-tight group-hover:text-[#C49A6C] transition-colors duration-500">
                                        {feat.title}
                                    </h3>
                                </div>

                                <p className="text-gray-500 text-base leading-relaxed font-['Lato'] opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                                    {feat.desc}
                                </p>
                            </div>

                            <div className="absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-tl from-[#C49A6C]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-tl-2xl pointer-events-none" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export { Items }