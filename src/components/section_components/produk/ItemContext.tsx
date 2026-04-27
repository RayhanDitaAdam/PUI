import { useEffect, useRef } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
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

        // 2. MOBILE ANIMATION (VERTIKAL LURUS)
        mm.add("(max-width: 767px)", () => {
            const steps = stepsRef.current.slice(6, 12);

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 0.5,
                }
            });

            // Initial state: first card visible on top, others hidden below
            steps.forEach((step, i) => {
                if (i === 0) {
                    gsap.set(step, { opacity: 1, scale: 1, y: 0, zIndex: 50 });
                } else {
                    gsap.set(step, { opacity: 0, scale: 0.9, y: 60, zIndex: 50 - i });
                }
            });

            // Animate through steps with hold periods
            steps.forEach((step, i) => {
                const label = `step-${i}`;

                // Add a hold period for each step to make it feel "sticky"
                tl.to({}, { duration: 1 }, label);

                if (i < steps.length - 1) {
                    const nextStep = steps[i + 1];
                    const transitionLabel = `transition-${i}`;

                    tl.to(step, {
                        opacity: 0,
                        scale: 0.8,
                        y: -100,
                        duration: 1.5,
                        ease: "power2.inOut"
                    }, transitionLabel)
                        .to(nextStep, {
                            opacity: 1,
                            scale: 1,
                            y: 0,
                            duration: 1.5,
                            ease: "power2.inOut"
                        }, transitionLabel);
                }
            });
        });

        return () => mm.revert();
    }, []);

    return (
        <div ref={sectionRef} className="relative h-[3500px] w-full">
            <div className="sticky top-0 min-h-screen w-full flex flex-col items-center justify-center pt-24 pb-16 md:pt-32 md:pb-32 px-4 md:px-0">
                <div className="w-full max-w-[1100px] relative">
                    <div className="mb-10 md:mb-14 text-center md:text-left">
                        <h4 className="text-[#003B33] font-semibold text-base md:text-lg mb-2 md:mb-3">Cara Kerja</h4>
                        <h1 className="text-3xl md:text-4xl font-extrabold leading-snug tracking-tight">
                            <span className="text-[#003B33]">Solusi Menyeluruh</span>
                            <span className="text-gray-600">&nbsp;dengan </span><br className="hidden md:block" />
                            <span className="text-[#003B33]">Proses Terstandar</span>
                        </h1>
                    </div>

                    {/* DESKTOP VIEW (Original Content) */}
                    <div className="relative w-full hidden md:block">
                        {/* Path Lines */}
                        <div className="absolute bg-gray-800 h-[2px] top-[130px] left-[170px] right-[170px] z-0"></div>
                        <div className="absolute bg-gray-800 w-[2px] top-[130px] h-[308px] right-[170px] z-0"></div>
                        <div className="absolute bg-gray-800 h-[2px] top-[438px] left-[170px] right-[170px] z-0"></div>

                        {/* Moving Ball */}
                        <div
                            ref={ballRef}
                            className="absolute w-8 h-8 bg-[#D4AA6A] rounded-full z-[5] -mt-4 -ml-4 shadow-[0_0_20px_rgba(212,170,106,0.8)] border-4 border-white"
                            style={{ top: 0, left: 0 }}
                        ></div>

                        <div className="grid grid-cols-3 gap-x-10 gap-y-12 relative z-10">
                            {/* Row 1: 01, 02, 03 */}
                            <div ref={el => { stepsRef.current[0] = el; }} className="step-item relative z-10 h-[260px] p-8 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] bg-white/40 backdrop-blur-md border border-white/60 transition-all duration-300">
                                <h2 className="text-3xl font-extrabold text-[#003B33] mb-2 md:mb-[0.5rem]">01</h2>
                                <h3 className="text-lg font-bold text-[#003B33] mb-3">Pemeriksaan Awal</h3>
                                <p className="text-[14px] text-[#003B33]/80 leading-relaxed font-medium">Asset mewah Anda diterima dan dilakukan pengecekan awal oleh tim ahli</p>
                            </div>

                            <div ref={el => { stepsRef.current[1] = el; }} className="step-item relative z-10 h-[260px] p-8 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] bg-white/40 backdrop-blur-md border border-white/60 transition-all duration-300">
                                <h2 className="text-3xl font-extrabold text-[#003B33] mb-2 md:mb-[0.5rem]">02</h2>
                                <h3 className="text-lg font-bold text-[#003B33] mb-3">Pemeriksaan Awal</h3>
                                <p className="text-[14px] text-[#003B33]/80 leading-relaxed font-medium">Pengecekan kondisi fisik dan identifikasi awal oleh tenaga ahli</p>
                            </div>

                            <div ref={el => { stepsRef.current[2] = el; }} className="step-item relative z-10 h-[260px] p-8 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] bg-white/40 backdrop-blur-md border border-white/60 transition-all duration-300">
                                <h2 className="text-3xl font-extrabold text-[#003B33] mb-2 md:mb-[0.5rem]">03</h2>
                                <h3 className="text-lg font-bold text-[#003B33] mb-3">Analisis Gemologi</h3>
                                <p className="text-[14px] text-[#003B33]/80 leading-relaxed font-medium">Pengujian menggunakan alat modern untuk menentukan keaslian, jenis, dan kualitas</p>
                            </div>

                            {/* Row 2: 06, 05, 04 */}
                            <div ref={el => { stepsRef.current[3] = el; }} className="step-item relative z-10 h-[260px] p-8 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] bg-white/40 backdrop-blur-md border border-white/60 transition-all duration-300" style={{ borderWidth: '2px', borderColor: 'rgb(212, 170, 106)' }}>
                                <h2 className="text-3xl font-extrabold text-[#003B33] mb-2 md:mb-[0.5rem]">06</h2>
                                <h3 className="text-lg font-bold text-[#003B33] mb-3">Hubungi Kami Via Whatsapp</h3>
                                <p className="text-[14px] text-[#003B33]/80 leading-relaxed font-medium mb-2">Untuk memulai</p>
                                <a 
                                    href="https://wa.me/6282277777911"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                                >
                                    <FaWhatsapp className="text-2xl" />
                                </a>
                            </div>

                            <div ref={el => { stepsRef.current[4] = el; }} className="step-item relative z-10 h-[260px] p-8 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] bg-white/40 backdrop-blur-md border border-white/60 transition-all duration-300">
                                <h2 className="text-3xl font-extrabold text-[#003B33] mb-2 md:mb-[0.5rem]">05</h2>
                                <h3 className="text-lg font-bold text-[#003B33] mb-3">Penilaian Nilai</h3>
                                <p className="text-[14px] text-[#003B33]/80 leading-relaxed font-medium">Penentuan nilai aset secara kompetitif berdasarkan hasil pengujian</p>
                            </div>

                            <div ref={el => { stepsRef.current[5] = el; }} className="step-item relative z-10 h-[260px] p-8 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] bg-white/40 backdrop-blur-md border border-white/60 transition-all duration-300">
                                <h2 className="text-3xl font-extrabold text-[#003B33] mb-2 md:mb-[0.5rem]">04</h2>
                                <h3 className="text-lg font-bold text-[#003B33] mb-3">Verifikasi & Validasi</h3>
                                <p className="text-[14px] text-[#003B33]/80 leading-relaxed font-medium">Hasil analisis dikaji ulang untuk memastikan akurasi dan keabsahan data</p>
                            </div>
                        </div>
                    </div>

                    {/* MOBILE VIEW (Sticky Card Stacking) */}
                    <div className="relative w-full block md:hidden">
                        <div className="grid grid-cols-1 relative z-10 w-full min-h-[500px]">
                            {[
                                { id: "01", title: "Pemeriksaan Awal", desc: "Asset mewah Anda diterima dan dilakukan pengecekan awal oleh tim ahli", idx: 6 },
                                { id: "02", title: "Pemeriksaan Awal", desc: "Pengecekan kondisi fisik dan identifikasi awal oleh tenaga ahli", idx: 7 },
                                { id: "03", title: "Analisis Gemologi", desc: "Pengujian menggunakan alat modern untuk menentukan keaslian, jenis, dan kualitas", idx: 8 },
                                { id: "04", title: "Verifikasi & Validasi", desc: "Hasil analisis dikaji ulang untuk memastikan akurasi dan keabsahan data", idx: 9 },
                                { id: "05", title: "Penilaian Nilai", desc: "Penentuan nilai aset secara kompetitif berdasarkan hasil pengujian", idx: 10 },
                                { id: "06", title: "Hubungi Kami Via Whatsapp", desc: "Untuk memulai", idx: 11 }
                            ].map((step) => (
                                <div
                                    key={step.id}
                                    ref={el => { stepsRef.current[step.idx] = el; }}
                                    style={{ gridArea: "1 / 1 / 2 / 2" }}
                                    className="step-item relative z-10 p-8 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] bg-white/40 backdrop-blur-md border border-white/60 min-h-[260px] flex flex-col items-center md:items-start text-center md:text-left"
                                >
                                    <h2 className="text-5xl md:text-3xl font-extrabold text-[#003B33] mb-2 md:mb-[0.5rem]">{step.id}</h2>
                                    <h3 className="text-2xl md:text-lg font-bold text-[#003B33] mb-3">{step.title}</h3>
                                    <p className="text-base md:text-[14px] text-[#003B33]/80 leading-relaxed font-medium mb-2">{step.desc}</p>
                                    {step.id === "06" && (
                                        <a 
                                            href="https://wa.me/6282277777911"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                                        >
                                            <FaWhatsapp className="text-2xl" />
                                        </a>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { ItemContext }