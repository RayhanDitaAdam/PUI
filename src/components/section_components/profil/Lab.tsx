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

                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 w-full text-left">
                        <div className="bg-[#007060] p-3 rounded-2xl flex items-center justify-center min-h-[6rem]">
                            <div className="p-2 bg-gray-200/20 w-fit rounded-xl">
                                <img src="/assets/img/profil/logo1.png" className="w-12 md:w-16 h-auto object-contain" />
                            </div>
                        </div>

                        <div className="bg-[#007060] p-3 rounded-2xl flex items-center justify-center min-h-[6rem]">
                            <div className="p-2 bg-gray-200/20 w-fit rounded-xl">
                                <img src="/assets/img/profil/logo2.png" className="w-12 md:w-16 h-auto object-contain" />
                            </div>
                        </div>

                        <div className="bg-[#007060] p-3 rounded-2xl flex items-center justify-center min-h-[6rem]">
                            <div className="p-2 bg-gray-200/20 w-fit rounded-xl">
                                <img src="/assets/img/profil/logo3.png" className="w-12 md:w-16 h-auto object-contain" />
                            </div>
                        </div>

                        <div className="bg-[#007060] p-3 rounded-2xl flex items-center justify-center min-h-[6rem]">
                            <div className="p-2 bg-gray-200/20 w-fit rounded-xl">
                                <img src="/assets/img/profil/logo4.png" className="w-12 md:w-16 h-auto object-contain" />
                            </div>
                        </div>

                        <div className="bg-[#007060] p-3 rounded-2xl flex items-center justify-center min-h-[6rem]">
                            <div className="p-2 bg-gray-200/20 w-fit rounded-xl">
                                <img src="/assets/img/profil/logo5.png" className="w-12 md:w-16 h-auto object-contain" />
                            </div>
                        </div>
                    </div>

                    <div className="w-1/2 h-[0.2rem] bg-white my-6"></div>

                    <div className="text-left w-full space-y-1">
                        <p className="text-base md:text-lg">Analisis Presisi</p>
                        <p className="text-base md:text-lg">Verifikasi Keaslian</p>
                        <p className="text-base md:text-lg">Penilaian Independent</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export { Lab }