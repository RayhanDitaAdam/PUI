import { useEffect, useRef } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { settings } from "../../../data/settings";
import { getPageContent } from '../../../data/content';

gsap.registerPlugin(ScrollTrigger);

let ItemContext = function () {
    const sectionRef = useRef<HTMLDivElement>(null);
    const ballRef = useRef<HTMLDivElement>(null);
    const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
    const c = getPageContent('cara-kerja')
    const badge = c.workBadge || 'Cara Kerja'
    const wTitle = c.workTitle || 'Solusi Menyeluruh Dengan Proses Standart'
    const workSteps = c.workSteps || [
        { title: 'Penerimaan Aset', desc: 'Aset anda diterima oleh tim ahli kami di kantor PUI' },
        { title: 'Pemeriksaan Fisik', desc: 'Kondisi aset diperiksa secara menyeluruh oleh tenaga ahli' },
        { title: 'Pengujian Laboratorium', desc: 'Aset diuji di laboratorium untuk memastikan keaslian dan kualitas' },
        { title: 'Penawaran Nilai Gadai', desc: 'Kami menyampaikan nilai taksiran dan bunga kompetitif untuk disetujui' },
        { title: 'Pencairan Dana', desc: 'Setelah Anda setuju, dana langsung cair ke rekening Anda' },
        { title: 'Hubungi Kami Via Whatsapp', desc: 'Untuk memulai' },
    ]

    useEffect(() => {
        if (!sectionRef.current || !ballRef.current) return;

        let mm = gsap.matchMedia();

        // 1. DESKTOP ANIMATION (DIKEMBALIKAN PERSIS ASLINYA)
        mm.add("(min-width: 1024px)", () => {
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

        // 2. MOBILE & TABLET ANIMATION (STICKY STACKING COVER)
        mm.add("(max-width: 1023px)", () => {
            const steps = stepsRef.current.slice(6, 12);

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 0.5,
                }
            });

            // Initial state: Cards are listing downwards in Y position with depth effects (solid background)
            steps.forEach((step, i) => {
                gsap.set(step, { 
                    opacity: 1, // Keep solid as requested
                    scale: 1 - (i * 0.05), 
                    filter: `blur(${i * 1}px)`,
                    y: i * 260, 
                    zIndex: 50 + i, 
                    transformOrigin: "top center",
                    borderColor: "#E5E7EB",
                    force3D: true
                });
            });

            // Animate through steps
            steps.forEach((step, i) => {
                const label = `step-${i}`;
                tl.to({}, { duration: 1 }, label);

                if (i < steps.length - 1) {
                    const transitionLabel = `transition-${i}`;
                    const currentStep = step;

                    // Previous card fades out as it gets covered
                    tl.to(currentStep, {
                        opacity: 0,
                        duration: 1.5,
                        ease: "power1.inOut",
                        force3D: true
                    }, transitionLabel);

                    // Next cards move UP and become CLEAR / LARGER (keep solid)
                    for (let j = i + 1; j < steps.length; j++) {
                        const targetIdx = j - (i + 1);
                        tl.to(steps[j], {
                            y: targetIdx * 260,
                            opacity: 1, // Keep solid
                            scale: 1 - (targetIdx * 0.05),
                            filter: `blur(${targetIdx * 1}px)`,
                            duration: 1.5,
                            ease: "power1.inOut",
                            force3D: true
                        }, transitionLabel);
                    }
                }
            });
        });

        return () => mm.revert();
    }, []);

    return (
        <div id="langkah-gadai" ref={sectionRef} className="relative h-[3500px] w-full scroll-mt-20">
            <div className="sticky top-0 min-h-screen w-full flex flex-col items-center justify-center pt-24 pb-16 md:pt-32 md:pb-32 px-4 md:px-0">
                <div className="w-full max-w-[1100px] relative">
                    <div className="mb-10 lg:mb-14 text-center lg:text-left">
                        <h4 className="text-[#003B33] font-semibold text-base md:text-lg mb-2 lg:mb-3">{badge}</h4>
                        <h1 className="text-3xl md:text-4xl font-extrabold leading-snug tracking-tight">
                            <span className="text-[#003B33]" dangerouslySetInnerHTML={{ __html: wTitle }} />
                        </h1>
                    </div>

                    {/* DESKTOP VIEW (Original Content) */}
                    <div className="relative w-full hidden lg:block">
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
                            {[0, 1, 2].map(i => {
                                const step = workSteps[i] || { title: '', desc: '' }
                                return (
                                    <div key={i} ref={el => { stepsRef.current[i] = el; }} className="step-item relative z-10 h-[260px] p-8 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] bg-white/40 backdrop-blur-md border border-white/60 transition-all duration-300">
                                        <h2 className="text-3xl font-extrabold text-[#003B33] mb-2 md:mb-[0.5rem]">{String(i + 1).padStart(2, '0')}</h2>
                                        <h3 className="text-lg font-bold text-[#003B33] mb-3">{step.title}</h3>
                                        <p className="text-[14px] text-[#003B33]/80 leading-relaxed font-medium">{step.desc}</p>
                                    </div>
                                )
                            })}
                            {/* Row 2: 06, 05, 04 */}
                            {[5, 4, 3].map(i => {
                                const step = workSteps[i] || { title: '', desc: '' }
                                const isLast = i === 5
                                return (
                                    <div key={i} ref={el => { stepsRef.current[i] = el; }} className="step-item relative z-10 h-[260px] p-8 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] bg-white/40 backdrop-blur-md border border-white/60 transition-all duration-300">
                                        <h2 className="text-3xl font-extrabold text-[#003B33] mb-2 md:mb-[0.5rem]">{String(i + 1).padStart(2, '0')}</h2>
                                        <h3 className="text-lg font-bold text-[#003B33] mb-3">{step.title}</h3>
                                        <p className="text-[14px] text-[#003B33]/80 leading-relaxed font-medium mb-2">{step.desc}</p>
                                        {isLast && (
                                            <a href={`https://wa.me/${settings.whatsapp}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                                                <FaWhatsapp className="text-2xl" />
                                            </a>
                                        )}
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    {/* MOBILE & TABLET VIEW (Sticky Card Stacking) */}
                    <div className="relative w-full block lg:hidden">
                        <div className="grid grid-cols-1 relative z-10 w-full min-h-[400px]">
                            {workSteps.map((step, i) => (
                                <div
                                    key={i}
                                    ref={el => { stepsRef.current[i + 6] = el; }}
                                    style={{ gridArea: "1 / 1 / 2 / 2", willChange: "transform, opacity, filter" }}
                                    className="step-item relative z-10 p-4 lg:p-8 rounded-2xl shadow-sm lg:shadow-[0_10px_40px_rgba(0,0,0,0.06)] bg-white lg:bg-white/40 lg:backdrop-blur-md border border-gray-100 lg:border-white/60 min-h-[140px] lg:min-h-[260px] flex flex-col items-center lg:items-start text-center lg:text-left"
                                >
                                    <h2 className="text-2xl lg:text-3xl font-extrabold text-[#003B33] mb-1 lg:mb-[0.5rem]">{String(i + 1).padStart(2, '0')}</h2>
                                    <h3 className="text-lg lg:text-lg font-bold text-[#003B33] mb-1 lg:mb-3">{step.title}</h3>
                                    <p className="text-xs lg:text-[14px] text-[#003B33]/80 leading-relaxed font-medium mb-2">{step.desc}</p>
                                    {i === 5 && (
                                        <a href={`https://wa.me/${settings.whatsapp}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
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