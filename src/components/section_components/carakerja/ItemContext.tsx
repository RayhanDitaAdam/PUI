import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let ItemContext = function () {
    const sectionRef = useRef<HTMLDivElement>(null);
    const ballRef = useRef<HTMLDivElement>(null);
    const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        if (!sectionRef.current || !ballRef.current) return;

        let mm = gsap.matchMedia();

        // 1. DESKTOP ANIMATION (DIKEMBALIKAN PERSIS ASLINYA)
        mm.add("(min-width: 768px)", () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1,
                }
            });

            gsap.set(ballRef.current, { x: 170, y: 130, scale: 1 });

            tl.to(ballRef.current, { x: 550, duration: 2 }, "step-02")
                .to(stepsRef.current[0], { borderColor: "#D4AA6A", borderWidth: "2px", duration: 0.1 }, "step-02-=1.5")
                .to(stepsRef.current[1], { borderColor: "#D4AA6A", borderWidth: "1px", duration: 0.1 }, "step-02+=1.5")

            tl.to(ballRef.current, { x: 930, duration: 2 }, "step-03")
                .to(stepsRef.current[2], { borderColor: "#D4AA6A", borderWidth: "2px", duration: 0.1 }, "step-03+=1.5")

            tl.to(ballRef.current, { y: 438, duration: 1.5 }, "step-04")
                .to(stepsRef.current[5], { borderColor: "#D4AA6A", borderWidth: "2px", duration: 0.1 }, "step-04+=1")

            tl.to(ballRef.current, { x: 550, duration: 2 }, "step-05")
                .to(stepsRef.current[4], { borderColor: "#D4AA6A", borderWidth: "2px", duration: 0.1 }, "step-05+=1.5")

            tl.to(ballRef.current, { x: 170, duration: 2 }, "step-06")
                .to(stepsRef.current[3], { borderColor: "#D4AA6A", borderWidth: "2px", duration: 0.1 }, "step-06+=1.5");
        });

        // 2. MOBILE ANIMATION (ALUR S-CURVE OTOMATIS)
        mm.add("(max-width: 767px)", () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1,
                }
            });

            // Fungsi untuk melacak titik tengah persis dari tiap kartu
            const getPos = (index: number) => {
                const el = stepsRef.current[index];
                if (!el) return { x: 0, y: 0 };
                return {
                    x: el.offsetLeft + el.offsetWidth / 2,
                    y: el.offsetTop + el.offsetHeight / 2
                };
            };

            // Mapping posisi layout (DOM Index)
            const p01 = getPos(0);
            const p02 = getPos(1);
            const p03 = getPos(2);
            const p04 = getPos(5); // Index 5 adalah step-04
            const p05 = getPos(4); // Index 4 adalah step-05
            const p06 = getPos(3); // Index 3 adalah step-06

            gsap.set(ballRef.current, { x: p01.x, y: p01.y, scale: 1 });

            // 01 -> 02 (Kanan)
            tl.to(ballRef.current, { x: p02.x, y: p02.y, duration: 2 }, "step-02")
                .to(stepsRef.current[0], { borderColor: "#D4AA6A", borderWidth: "2px", duration: 0.1 }, "step-02-=1.5")
                .to(stepsRef.current[1], { borderColor: "#D4AA6A", borderWidth: "1px", duration: 0.1 }, "step-02+=1.5")

            // 02 -> 03 (Bawah)
            tl.to(ballRef.current, { x: p03.x, y: p03.y, duration: 2 }, "step-03")
                .to(stepsRef.current[2], { borderColor: "#D4AA6A", borderWidth: "2px", duration: 0.1 }, "step-03+=1.5")

            // 03 -> 04 (Kiri)
            tl.to(ballRef.current, { x: p04.x, y: p04.y, duration: 1.5 }, "step-04")
                .to(stepsRef.current[5], { borderColor: "#D4AA6A", borderWidth: "2px", duration: 0.1 }, "step-04+=1")

            // 04 -> 05 (Bawah)
            tl.to(ballRef.current, { x: p05.x, y: p05.y, duration: 2 }, "step-05")
                .to(stepsRef.current[4], { borderColor: "#D4AA6A", borderWidth: "2px", duration: 0.1 }, "step-05+=1.5")

            // 05 -> 06 (Kanan)
            tl.to(ballRef.current, { x: p06.x, y: p06.y, duration: 2 }, "step-06")
                .to(stepsRef.current[3], { borderColor: "#D4AA6A", borderWidth: "2px", duration: 0.1 }, "step-06+=1.5");
        });

        return () => mm.revert();
    }, []);

    return (
        <div ref={sectionRef} className="relative h-[2500px] w-full">
            <div className="sticky top-0 min-h-screen w-full flex items-center justify-center pt-16 pb-16 md:pt-32 md:pb-32 px-4 md:px-0">
                <div className="w-full max-w-[1100px] relative">
                    <div className="mb-10 md:mb-14 text-center md:text-left">
                        <h4 className="text-[#003B33] font-semibold text-base md:text-lg mb-2 md:mb-3">Cara Kerja</h4>
                        <h1 className="text-3xl md:text-4xl font-extrabold leading-snug tracking-tight">
                            <span className="text-[#003B33]">Solusi Menyeluruh</span>
                            <span className="text-gray-600">&nbsp;dengan</span><br className="hidden md:block" />
                            <span className="text-gray-600 md:ml-0 ml-1">Proses Terstandar</span>
                        </h1>
                    </div>

                    <div className="relative w-full">
                        {/* Garis Path Desktop (Asli) */}
                        <div className="absolute bg-gray-800 h-[2px] top-[130px] left-[170px] right-[170px] z-0 hidden md:block"></div>
                        <div className="absolute bg-gray-800 w-[2px] top-[130px] h-[308px] right-[170px] z-0 hidden md:block"></div>
                        <div className="absolute bg-gray-800 h-[2px] top-[438px] left-[170px] right-[170px] z-0 hidden md:block"></div>

                        {/* Moving Ball (Dipakai bersama, GSAP otomatis menyesuaikan posisi) */}
                        <div
                            ref={ballRef}
                            className="absolute w-8 h-8 bg-[#D4AA6A] rounded-full z-[5] -mt-4 -ml-4 shadow-[0_0_20px_rgba(212,170,106,0.8)] border-4 border-white"
                            style={{ top: 0, left: 0 }}
                        ></div>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-6 md:gap-x-10 md:gap-y-12 relative z-10">
                            
                            {/* 01 */}
                            <div ref={el => { stepsRef.current[0] = el; }} className="step-item relative z-10 h-[260px] p-5 md:p-8 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] bg-white/40 backdrop-blur-md border border-white/60 transition-all duration-300 order-1 md:order-none">
                                {/* Garis Mobile -> ke 02 (Kanan) */}
                                <div className="absolute top-1/2 left-1/2 w-[calc(100%+1rem)] h-[2px] bg-gray-800 -z-10 block md:hidden"></div>
                                <h2 className="text-2xl md:text-3xl font-extrabold text-[#003B33] mb-3 md:mb-5">01</h2>
                                <h3 className="text-base md:text-lg font-bold text-[#003B33] mb-2 md:mb-3 leading-tight">Pemeriksaan Awal</h3>
                                <p className="text-[12px] md:text-[14px] text-[#003B33]/80 leading-relaxed font-medium">Asset mewah Anda diterima dan dilakukan pengecekan awal oleh tim ahli</p>
                            </div>

                            {/* 02 */}
                            <div ref={el => { stepsRef.current[1] = el; }} className="step-item relative z-10 h-[260px] p-5 md:p-8 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] bg-white/40 backdrop-blur-md border border-white/60 transition-all duration-300 order-2 md:order-none">
                                {/* Garis Mobile -> ke 03 (Bawah) */}
                                <div className="absolute top-1/2 left-1/2 w-[2px] h-[calc(100%+1.5rem)] bg-gray-800 -z-10 block md:hidden"></div>
                                <h2 className="text-2xl md:text-3xl font-extrabold text-[#003B33] mb-3 md:mb-5">02</h2>
                                <h3 className="text-base md:text-lg font-bold text-[#003B33] mb-2 md:mb-3 leading-tight">Pemeriksaan Awal</h3>
                                <p className="text-[12px] md:text-[14px] text-[#003B33]/80 leading-relaxed font-medium">Pengecekan kondisi fisik dan identifikasi awal oleh tenaga ahli</p>
                            </div>

                            {/* 03 */}
                            <div ref={el => { stepsRef.current[2] = el; }} className="step-item relative z-10 h-[260px] p-5 md:p-8 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] bg-white/40 backdrop-blur-md border border-white/60 transition-all duration-300 order-4 md:order-none">
                                {/* Garis Mobile -> ke 04 (Kiri) */}
                                <div className="absolute top-1/2 right-1/2 w-[calc(100%+1rem)] h-[2px] bg-gray-800 -z-10 block md:hidden"></div>
                                <h2 className="text-2xl md:text-3xl font-extrabold text-[#003B33] mb-3 md:mb-5">03</h2>
                                <h3 className="text-base md:text-lg font-bold text-[#003B33] mb-2 md:mb-3 leading-tight">Analisis Gemologi</h3>
                                <p className="text-[12px] md:text-[14px] text-[#003B33]/80 leading-relaxed font-medium">Pengujian menggunakan alat modern untuk menentukan keaslian, jenis, dan kualitas</p>
                            </div>

                            {/* 06 */}
                            <div ref={el => { stepsRef.current[3] = el; }} className="step-item relative z-10 h-[260px] p-5 md:p-8 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] bg-white/40 backdrop-blur-md border border-white/60 transition-all duration-300 order-6 md:order-none">
                                <h2 className="text-2xl md:text-3xl font-extrabold text-[#003B33] mb-3 md:mb-5">06</h2>
                                <h3 className="text-base md:text-lg font-bold text-[#003B33] mb-2 md:mb-3 leading-tight">Penerbitan & Pembiayaan</h3>
                                <p className="text-[12px] md:text-[14px] text-[#003B33]/80 leading-relaxed font-medium">Nasabah menerima hasil analisis/ sertifikasi dan dapat langsung melanjutkan proses gadai dengan pencairan dana cepat</p>
                            </div>

                            {/* 05 */}
                            <div ref={el => { stepsRef.current[4] = el; }} className="step-item relative z-10 h-[260px] p-5 md:p-8 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] bg-white/40 backdrop-blur-md border border-white/60 transition-all duration-300 order-5 md:order-none">
                                {/* Garis Mobile -> ke 06 (Kanan) */}
                                <div className="absolute top-1/2 left-1/2 w-[calc(100%+1rem)] h-[2px] bg-gray-800 -z-10 block md:hidden"></div>
                                <h2 className="text-2xl md:text-3xl font-extrabold text-[#003B33] mb-3 md:mb-5">05</h2>
                                <h3 className="text-base md:text-lg font-bold text-[#003B33] mb-2 md:mb-3 leading-tight">Penilaian Nilai</h3>
                                <p className="text-[12px] md:text-[14px] text-[#003B33]/80 leading-relaxed font-medium">Penentuan nilai aset secara kompetitif berdasarkan hasil pengujian</p>
                            </div>

                            {/* 04 */}
                            <div ref={el => { stepsRef.current[5] = el; }} className="step-item relative z-10 h-[260px] p-5 md:p-8 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] bg-white/40 backdrop-blur-md border border-white/60 transition-all duration-300 order-3 md:order-none">
                                {/* Garis Mobile -> ke 05 (Bawah) */}
                                <div className="absolute top-1/2 left-1/2 w-[2px] h-[calc(100%+1.5rem)] bg-gray-800 -z-10 block md:hidden"></div>
                                <h2 className="text-2xl md:text-3xl font-extrabold text-[#003B33] mb-3 md:mb-5">04</h2>
                                <h3 className="text-base md:text-lg font-bold text-[#003B33] mb-2 md:mb-3 leading-tight">Verifikasi & Validasi</h3>
                                <p className="text-[12px] md:text-[14px] text-[#003B33]/80 leading-relaxed font-medium">Hasil analisis dikaji ulang untuk memastikan akurasi dan keabsahan data</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { ItemContext }