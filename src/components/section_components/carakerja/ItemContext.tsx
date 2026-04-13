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

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1,
                }
            });

            // Start at 01
            gsap.set(ballRef.current, { x: 170, y: 130, scale: 1 });

            // Move to 02
            tl.to(ballRef.current, { x: 550, duration: 2 }, "step-02")
                .to(stepsRef.current[0], { borderColor: "#D4AA6A", borderWidth: "2px", duration: 0.1 }, "step-02-=1.5")
                .to(stepsRef.current[1], { borderColor: "#D4AA6A", borderWidth: "1px", duration: 0.1 }, "step-02+=1.5")

            // Move to 03
            tl.to(ballRef.current, { x: 930, duration: 2 }, "step-03")
                .to(stepsRef.current[2], { borderColor: "#D4AA6A", borderWidth: "2px", duration: 0.1 }, "step-03+=1.5")

            // Move to 04 (Down)
            tl.to(ballRef.current, { y: 438, duration: 1.5 }, "step-04")
                .to(stepsRef.current[5], { borderColor: "#D4AA6A", borderWidth: "2px", duration: 0.1 }, "step-04+=1")

            // Move to 05 (Left)
            tl.to(ballRef.current, { x: 550, duration: 2 }, "step-05")
                .to(stepsRef.current[4], { borderColor: "#D4AA6A", borderWidth: "2px", duration: 0.1 }, "step-05+=1.5")

            // Move to 06 (Left)
            tl.to(ballRef.current, { x: 170, duration: 2 }, "step-06")
                .to(stepsRef.current[3], { borderColor: "#D4AA6A", borderWidth: "2px", duration: 0.1 }, "step-06+=1.5");

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={sectionRef} className="relative h-[2500px] w-full">
            <div className="sticky top-0 min-h-screen w-full flex items-center justify-center pt-32 pb-32">
                <div className="w-[1100px] relative">
                    <div className="mb-14">
                        <h4 className="text-[#003B33] font-semibold text-lg mb-3">Cara Kerja</h4>
                        <h1 className="text-4xl font-extrabold leading-snug tracking-tight">
                            <span className="text-[#003B33]">Solusi Menyeluruh</span>
                            <span className="text-gray-600">&nbsp;dengan</span><br />
                            <span className="text-gray-600">Proses Terstandar</span>
                        </h1>
                    </div>

                    <div className="relative w-full">
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
                                <h2 className="text-3xl font-extrabold text-[#003B33] mb-5">01</h2>
                                <h3 className="text-lg font-bold text-[#003B33] mb-3">Pemeriksaan Awal</h3>
                                <p className="text-[14px] text-[#003B33]/80 leading-relaxed font-medium">Asset mewah Anda diterima dan dilakukan pengecekan awal oleh tim ahli</p>
                            </div>

                            <div ref={el => { stepsRef.current[1] = el; }} className="step-item relative z-10 h-[260px] p-8 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] bg-white/40 backdrop-blur-md border border-white/60 transition-all duration-300">
                                <h2 className="text-3xl font-extrabold text-[#003B33] mb-5">02</h2>
                                <h3 className="text-lg font-bold text-[#003B33] mb-3">Pemeriksaan Awal</h3>
                                <p className="text-[14px] text-[#003B33]/80 leading-relaxed font-medium">Pengecekan kondisi fisik dan identifikasi awal oleh tenaga ahli</p>
                            </div>

                            <div ref={el => { stepsRef.current[2] = el; }} className="step-item relative z-10 h-[260px] p-8 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] bg-white/40 backdrop-blur-md border border-white/60 transition-all duration-300">
                                <h2 className="text-3xl font-extrabold text-[#003B33] mb-5">03</h2>
                                <h3 className="text-lg font-bold text-[#003B33] mb-3">Analisis Gemologi</h3>
                                <p className="text-[14px] text-[#003B33]/80 leading-relaxed font-medium">Pengujian menggunakan alat modern untuk menentukan keaslian, jenis, dan kualitas</p>
                            </div>

                            {/* Row 2: 06, 05, 04 */}
                            <div ref={el => { stepsRef.current[3] = el; }} className="step-item relative z-10 h-[260px] p-8 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] bg-white/40 backdrop-blur-md border border-white/60 transition-all duration-300">
                                <h2 className="text-3xl font-extrabold text-[#003B33] mb-5">06</h2>
                                <h3 className="text-lg font-bold text-[#003B33] mb-3">Penerbitan & Pembiayaan</h3>
                                <p className="text-[14px] text-[#003B33]/80 leading-relaxed font-medium">Nasabah menerima hasil analisis/ sertifikasi dan dapat langsung melanjutkan proses gadai dengan pencairan dana cepat</p>
                            </div>

                            <div ref={el => { stepsRef.current[4] = el; }} className="step-item relative z-10 h-[260px] p-8 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] bg-white/40 backdrop-blur-md border border-white/60 transition-all duration-300">
                                <h2 className="text-3xl font-extrabold text-[#003B33] mb-5">05</h2>
                                <h3 className="text-lg font-bold text-[#003B33] mb-3">Penilaian Nilai</h3>
                                <p className="text-[14px] text-[#003B33]/80 leading-relaxed font-medium">Penentuan nilai aset secara kompetitif berdasarkan hasil pengujian</p>
                            </div>

                            <div ref={el => { stepsRef.current[5] = el; }} className="step-item relative z-10 h-[260px] p-8 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] bg-white/40 backdrop-blur-md border border-white/60 transition-all duration-300">
                                <h2 className="text-3xl font-extrabold text-[#003B33] mb-5">04</h2>
                                <h3 className="text-lg font-bold text-[#003B33] mb-3">Verifikasi & Validasi</h3>
                                <p className="text-[14px] text-[#003B33]/80 leading-relaxed font-medium">Hasil analisis dikaji ulang untuk memastikan akurasi dan keabsahan data</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export { ItemContext }
