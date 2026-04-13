let Lab = function () {
    return (
        <section className="bg-[#004C41] w-full py-12 md:py-20 lg:py-32">
            <div className="flex flex-col lg:flex-row gap-10 items-center w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-10">                
                <div className="w-full lg:w-1/2 order-first lg:order-last">
                    <img
                        src="/assets/img/profil/3f48b06a2025d9ddfb384280d6667a2d6c048b3f.jpg"
                        className="rounded-3xl w-full h-[300px] md:h-[450px] lg:h-[550px] object-cover"
                        alt="Gemologi"
                    />
                </div>

                <div className="text-white w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
                    <h2 className="text-3xl lg:text-4xl font-semibold mb-4">Laboratorium Gemologi</h2>
                    <p className="text-base text-green-100 mb-8 leading-relaxed max-w-xl">
                        Didukung teknologi modern dan tenaga ahli, kami menghadirkan analisis batu mulia dengan presisi tinggi untuk menjamin nilai terbaik setiap aset Anda.
                    </p>

                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 w-full text-left">
                        <div className="bg-[#007060] p-4 rounded-xl">
                            <div className="mb-3">
                                <div className="p-2 bg-[#0A917E] w-fit rounded-lg">
                                    <img src="/assets/img/profil/40de27d51bd2640550df1c7800c351a2cb1bd7d4.png" className="w-5" />
                                </div>
                            </div>
                            <h4 className="text-sm font-semibold">Analisis Akurat</h4>
                            <p className="text-[10px] md:text-xs text-green-100/80 mt-1">
                                Pengujian batu mulia dengan hasil presisi tinggi
                            </p>
                        </div>

                        <div className="bg-[#007060] p-4 rounded-xl">
                            <div className="mb-3">
                                <div className="p-2 bg-[#0A917E] w-fit rounded-lg">
                                    <img src="/assets/img/profil/dad167a7449a1e449b4429bc1e36bb2c8a1fb3ee.png" className="w-5" />
                                </div>
                            </div>
                            <h4 className="text-sm font-semibold">Teknologi Modern</h4>
                            <p className="text-[10px] md:text-xs text-green-100/80 mt-1">
                                Menggunakan alat gemologi terkini untuk pemeriksaan detail
                            </p>
                        </div>

                        <div className="bg-[#007060] p-4 rounded-xl">
                            <div className="mb-3">
                                <div className="p-2 bg-[#0A917E] w-fit rounded-lg">
                                    <img src="/assets/img/profil/88087a44b153b2ad9db0fcd2ad840bcc49ac4086.png" className="w-5" />
                                </div>
                            </div>
                            <h4 className="text-sm font-semibold">Tenaga Ahli Profesional</h4>
                            <p className="text-[10px] md:text-xs text-green-100/80 mt-1">
                                Ditangani oleh gemologist berpengalaman dan bersertifikasi
                            </p>
                        </div>

                        <div className="bg-[#007060] p-4 rounded-xl">
                            <div className="mb-3">
                                <div className="p-2 bg-[#0A917E] w-fit rounded-lg">
                                    <img src="/assets/img/profil/ece8eae23236fccd3968c71d14edfa7c96f96f40.png" className="w-5" />
                                </div>
                            </div>
                            <h4 className="text-sm font-semibold">Verifikasi Keaslian</h4>
                            <p className="text-[10px] md:text-xs text-green-100/80 mt-1">
                                Menjamin identifikasi asli atau sintetis secara terpercaya
                            </p>
                        </div>

                        <div className="bg-[#007060] p-4 rounded-xl">
                            <div className="mb-3">
                                <div className="p-2 bg-[#0A917E] w-fit rounded-lg">
                                    <img src="/assets/img/profil/cab56b7c4bd15aa742130323794c78ae6265ce4c.png" className="w-5" />
                                </div>
                            </div>
                            <h4 className="text-sm font-semibold">Penilaian Nilai Optimal</h4>
                            <p className="text-[10px] md:text-xs text-green-100/80 mt-1">
                                Menentukan kualitas dan nilai batu mulia secara kompetitif
                            </p>
                        </div>

                        <div className="bg-[#007060] p-4 rounded-xl">
                            <div className="mb-3">
                                <div className="p-2 bg-[#0A917E] w-fit rounded-lg">
                                    <img src="/assets/img/profil/83a7d07a6800a4b851117dc6256ae453aecdc06a.png" className="w-5" />
                                </div>
                            </div>
                            <h4 className="text-sm font-semibold">Standar Keamanan Tinggi</h4>
                            <p className="text-[10px] md:text-xs text-green-100/80 mt-1">
                                Proses pengujian aman dengan menjaga aset tetap terlindungi
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export { Lab }