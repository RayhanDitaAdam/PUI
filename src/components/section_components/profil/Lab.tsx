let Lab = function () {
    return (
        <section className="bg-[#004C41] w-full py-12 md:py-20 lg:py-32">
            <div className="flex flex-col lg:flex-row gap-10 items-center w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-10">
                <div className="w-full lg:w-1/2 order-first lg:order-last">
                    <img
                        src="/assets/img/profil/3f48b06a2025d9ddfb384280d6667a2d6c048b3f.jpg"
                        className="rounded-3xl w-full h-[18.75rem] md:h-[28.125rem] lg:h-[34.375rem] object-cover"
                        alt="Gemologi"
                    />
                </div>

                <div className="text-white w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
                    <h2 className="text-3xl lg:text-4xl font-semibold mb-2">Laboratorium Gemologi</h2>
                    <p className="text-base text-green-100 mb-4 leading-relaxed max-w-xl">
                        Fasilitas penilaian internal untuk memastikan setiap aset dinilai dengan standart yang seharusnya.
                    </p>

                    <div className="flex items-center justify-start gap-[0.5rem] md:gap-[1.25rem] flex-wrap mt-6 mb-16">
                        {["SSEF.png", "IGS.png", "BNSP.png"].map((logo, idx) => (
                            <div 
                                key={idx}
                                className="w-[6.25rem] h-[2.125rem] md:w-[11.0625rem] md:h-[3.75rem]"
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

                    <div className="flex flex-col md:flex-row items-start justify-start gap-y-6 md:gap-y-10 gap-x-[1.25rem] w-full">
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
                                className="w-full md:w-[12rem] h-auto md:h-[11.5rem]"
                                style={{
                                    padding: "1.25rem 1rem",
                                    backgroundColor: "#007060",
                                    borderRadius: "0.625rem",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "flex-start",
                                    gap: "0.75rem"
                                }}
                            >
                                <div 
                                    style={{
                                        display: "flex",
                                        width: "fit-content",
                                        height: "fit-content",
                                        padding: "0.40625rem",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        borderRadius: "0.40625rem",
                                        background: "#0A917E"
                                    }}
                                >
                                    <img 
                                        src={`/assets/img/profil/${card.icon}`} 
                                        alt={card.title}
                                        style={{
                                            width: "1.75rem",
                                            height: "1.75rem",
                                            objectFit: "contain"
                                        }}
                                    />
                                </div>

                                <div 
                                    style={{
                                        width: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "flex-start",
                                        gap: "0.5rem"
                                    }}
                                >
                                    <h3 
                                        style={{ 
                                            color: "#FFF", 
                                            fontFamily: "Lato, sans-serif", 
                                            fontSize: "0.875rem", 
                                            fontWeight: 700, 
                                            lineHeight: "130%",
                                            alignSelf: "stretch",
                                            textAlign: "left"
                                        }}
                                    >
                                        {card.title}
                                    </h3>
                                    <p 
                                        style={{ 
                                            color: "#E4E4E4", 
                                            fontFamily: "Lato, sans-serif", 
                                            fontSize: "0.75rem", 
                                            fontWeight: 400, 
                                            lineHeight: "130%",
                                            alignSelf: "stretch",
                                            textAlign: "left"
                                        }}
                                    >
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