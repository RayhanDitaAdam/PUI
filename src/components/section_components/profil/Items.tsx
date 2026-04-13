import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let Items = function () {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Header muncul duluan
            gsap.from(".reveal-header", {
                opacity: 0,
                x: -30,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".reveal-header",
                    start: "top 90%",
                }
            });

            // Card muncul tipis-tipis
            gsap.from(".reveal-card", {
                opacity: 0,
                y: 20,
                stagger: 0.1,
                duration: 0.8,
                ease: "power1.out",
                scrollTrigger: {
                    trigger: ".reveal-card",
                    start: "top 85%",
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const features = [
        {
            title: "Proses Cepat & Mudah",
            desc: "Pencairan dana dalam waktu singkat tanpa prosedur rumit.",
            img: "/assets/img/profil/9e83dda683c8326a23b19ada7a63fd44c6c71dc0.png"
        },
        {
            title: "Spesialis Barang Mewah",
            desc: "Penaksiran akurat untuk jam tangan premium dan tas branded.",
            img: "/assets/img/profil/ee3abcda2eef6e828e2f1c99fd9ec7b9ad6f5227.png"
        },
        {
            title: "Penilaian Profesional",
            desc: "Dilakukan oleh ahli bersertifikat di bidangnya.",
            img: "/assets/img/profil/1c1766aaa851ad680797a36295bd9e74b589b531.png"
        },
        {
            title: "Keamanan Terjamin",
            desc: "Sistem keamanan berlapis dan asuransi penuh.",
            img: "/assets/img/profil/6d027213f36c0121fa6839cfbfcea55aeb10fe93.png"
        },
        {
            title: "Privasi Terjaga",
            desc: "Kerahasiaan data nasabah adalah prioritas utama kami.",
            img: "/assets/img/profil/5621a4ed92942d4fd7a7ed260178126043c4a193.png"
        },
        {
            title: "Layanan Premium",
            desc: "Layanan eksklusif dan personal untuk setiap nasabah.",
            img: "/assets/img/profil/15c7d3ecd86c33afcd8f6d95a9cd6ca74e6184bd.png"
        }
    ];

    return (
        <section ref={sectionRef} className="py-24 bg-white font-sans overflow-hidden">
            <div className="max-w-6xl mx-auto px-6">

                <div className="mb-20 border-l-4 border-[#003A30] pl-6 reveal-header">
                    <h2 className="text-4xl font-bold text-[#003A30] tracking-tight mb-3">Keunggulan Kami</h2>
                    <p className="text-gray-500 text-lg max-w-xl">Solusi pembiayaan cepat dan aman berbasis aset bernilai tinggi.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-gray-100">
                    {features.map((feat, i) => (
                        <div
                            key={i}
                            className="reveal-card p-10 border-r border-b border-gray-100 bg-white hover:bg-gray-50/50 transition-colors duration-300 group"
                        >
                            <div className="mb-6">
                                <img
                                    width="32"
                                    src={feat.img}
                                    className="opacity-80 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                                />
                            </div>
                            <h3 className="text-lg font-bold text-[#003A30] mb-3">{feat.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{feat.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export { Items }