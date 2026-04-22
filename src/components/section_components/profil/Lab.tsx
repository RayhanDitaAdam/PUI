let Lab = function () {
    return (
        <section className="bg-[#004C41] w-full md:w-auto lg:w-full py-12 md:py-20 lg:py-32 md:mx-2 lg:mx-0 md:rounded-[1rem] lg:rounded-none">
            <div className="flex flex-col md:flex-row gap-10 md:gap-4 lg:gap-10 items-center w-full max-w-7xl mx-auto px-4 md:px-0 lg:px-10">
                <div className="w-full md:w-5/12 lg:w-1/2 order-first lg:order-last">
                    <img
                        src="/assets/img/profil/3f48b06a2025d9ddfb384280d6667a2d6c048b3f.webp"
                        className="rounded-3xl md:rounded-[1rem] lg:rounded-3xl w-full h-[18.75rem] md:h-[20rem] lg:h-[34.375rem] object-cover"
                        alt="Gemologi"
                    />
                </div>

                <div className="text-white w-full md:w-7/12 lg:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
                    <h2 className="text-3xl md:text-2xl lg:text-4xl font-semibold mb-2">Laboratorium Gemologi</h2>
                    <p className="text-base md:text-sm lg:text-base text-green-100 mb-2 md:mb-4 lg:mb-4 leading-relaxed max-w-xl">
                        Fasilitas penilaian internal untuk memastikan setiap aset dinilai dengan standart yang seharusnya.
                    </p>

                    <div className="flex items-center justify-start gap-[0.5rem] md:gap-[0.5rem] lg:gap-[1.25rem] flex-wrap mt-6 mb-10 md:mb-6 lg:mb-16 w-full">
                        {["SSEF.webp", "IGS.webp", "BNSP.webp"].map((logo, idx) => (
                            <div
                                key={idx}
                                className="w-[6.25rem] h-[2.125rem] md:w-[6.5rem] md:h-[2.2rem] lg:w-[11.0625rem] lg:h-[3.75rem]"
                                style={{
                                    backgroundImage: `url(/assets/img/profil/${logo})`,
                                    backgroundSize: "85%",
                                    backgroundPosition: "50%",
                                    backgroundRepeat: "no-repeat",
                                    backgroundColor: "white",
                                    aspectRatio: "59/20",
                                    borderRadius: "0.25rem"
                                }}
                            />
                        ))}
                    </div>

                    <div className="flex flex-col md:flex-row items-start md:items-stretch lg:items-start justify-start gap-y-6 md:gap-y-0 lg:gap-y-10 gap-x-[1.25rem] md:gap-x-2 lg:gap-x-[1.25rem] w-full">
                        {[
                            {
                                title: "Analisis Presisi",
                                subtitle: "Pengujian batu mulia dengan hasil presisi tinggi",
                                icon: "Analisi-Akurat.svg"
                            },
                            {
                                title: "Verifikasi Keaslian",
                                subtitle: "Menjamin identifikasi asli atau sintetis secara terpercaya",
                                icon: "Verifikasi-Keahlian.svg"
                            },
                            {
                                title: "Penilaian Independent",
                                subtitle: "Ditangani oleh gemologist berpengalaman dan bersertifikasi",
                                icon: "Penilaian-Independent.svg"
                            }
                        ].map((card, idx) => (
                            <div
                                key={idx}
                                className="w-full md:flex-1 lg:flex-none lg:w-[12rem] h-auto lg:h-[11.5rem] p-[1.25rem_1rem] md:p-[0.75rem_0.5rem] lg:p-[1.25rem_1rem] bg-[#007060] rounded-[0.625rem] flex flex-col items-start gap-[0.75rem] md:gap-2 lg:gap-[0.75rem]"
                            >
                                <div className="flex w-fit h-fit p-[0.40625rem] md:p-1 lg:p-[0.40625rem] flex-col justify-center items-center rounded-[0.40625rem] bg-[#0A917E]">
                                    <img
                                        src={`/assets/img/profil/${card.icon}`}
                                        alt={card.title}
                                        className="w-[1.75rem] h-[1.75rem] md:w-[1.25rem] md:h-[1.25rem] lg:w-[1.75rem] lg:h-[1.75rem] object-contain"
                                    />
                                </div>

                                <div className="w-full flex flex-col items-start gap-[0.5rem] md:gap-1 lg:gap-[0.5rem]">
                                    <h3 className="text-[#FFF] font-['Lato',sans-serif] text-[0.875rem] md:text-[0.65rem] lg:text-[0.875rem] font-bold leading-[130%] self-stretch text-left">
                                        {card.title}
                                    </h3>
                                    <p className="text-[#E4E4E4] font-['Lato',sans-serif] text-[0.75rem] md:text-[0.55rem] lg:text-[0.75rem] font-normal leading-[130%] self-stretch text-left">
                                        {card.subtitle}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
export { Lab }