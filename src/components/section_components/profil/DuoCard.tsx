let DuoCard = function () {
    return (
        <section className="max-w-7xl mx-auto">
            <div className="hidden md:flex about-section mt-44 mx-auto relative justify-center items-center px-4 md:px-0 md:pr-4 md:pl-8 lg:px-4">
                <div className="about-content w-full flex justify-center items-center md:mb-7 relative">
                    <div className="about-card absolute left-0 lg:left-[-2rem] xl:left-[2rem] z-10 md:!w-[25.125rem] lg:!w-[39.4375rem] md:!h-[24.3125rem] lg:!h-[26.1875rem]">
                        <h2 className="md:text-2xl lg:text-[2rem]">Tentang Perusahaan</h2>
                        <div className="w-[300px] h-[3px] mt-2 mb-6 md:mb-2 lg:mb-6 bg-white"></div>
                        <div className="feature-list text-white">
                            <p className="mb-2 md:text-[0.875rem] lg:text-base">
                                PT Pergadaian Utama Indonesia (PUI) merupakan perusahaan pergadaian nasional yang menyediakan solusi pendanaan cepat dengan sistem gadai, khususnya untuk barang bernilai tinggi atau barang mewah.
                            </p>

                            <p className="md:text-[0.875rem] lg:text-base">PT Pergadaian Utama Indonesia telah:</p>

                            <ul className="ml-0.5 list-disc list-inside text-white md:text-[0.875rem] lg:text-base">
                                <li>Berizin dan diawasi oleh Otoritas Jasa Keuangan</li>
                                <li>Beroperasi sesuai regulasi OJK tentang industri pergadaian</li>
                            </ul>

                            <p className="mt-2 md:text-[0.875rem] lg:text-base">
                                Hal ini menjamin bahwa seluruh layanan PUI berjalan secara legal, aman, dan sesuai standar industri keuangan.
                            </p>
                        </div>
                    </div>
                    <div className="about-image-placeholder ml-auto" style={{
                        backgroundImage: "url('/assets/img/profil/5e6c8a11855b39c3ee0f9b523dec390495c03544.webp')"
                    }}></div>
                </div>
            </div>
            <div className="flex md:hidden flex-col w-full px-2 mt-16 mb-12">
                <div className="w-full h-[260px] rounded-2xl bg-cover bg-center shadow-md" style={{
                    backgroundImage: "url('/assets/img/profil/5e6c8a11855b39c3ee0f9b523dec390495c03544.webp')"
                }}></div>
                <div className="bg-[#004C41] rounded-2xl p-6 -mt-16 mx-2 z-10 shadow-xl text-white">
                    <h2 className="text-sm font-bold mb-3">Tentang Perusahaan</h2>
                    <div className="w-[100px] h-[2px] bg-white mb-2"></div>

                    <div className="text-xs space-y-4 leading-relaxed">
                        <p>
                            PT Pergadaian Utama Indonesia (PUI) merupakan perusahaan pergadaian nasional yang menyediakan solusi pendanaan cepat dengan sistem gadai, khususnya untuk barang bernilai tinggi atau barang mewah.
                        </p>
                        <p>PT Pergadaian Utama Indonesia telah:</p>
                        <ul className="list-disc list-outside ml-4 space-y-1">
                            <li>Berizin dan diawasi oleh Otoritas Jasa Keuangan</li>
                            <li>Beroperasi sesuai regulasi OJK tentang industri pergadaian</li>
                        </ul>
                        <p>
                            Hal ini menjamin bahwa seluruh layanan PUI berjalan secara legal, aman, dan sesuai standar industri keuangan.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
export { DuoCard }
