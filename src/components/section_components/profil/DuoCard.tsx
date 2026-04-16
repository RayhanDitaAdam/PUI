let DuoCard = function () {
    return (
        <section className="max-w-7xl mx-auto">
            <div className="hidden md:flex about-section mt-44 mx-auto relative justify-center items-center px-4">
                <div className="about-content w-full flex justify-center items-center">
                    <div className="about-card mb-7">
                        <div className="md:flex md:gap-10 md:items-start">
                            <div className="md:w-1/4">
                                <h2 className="!mb-2 !text-2xl mt-2">Tentang Perusahaan</h2>
                                <div className="w-full h-1 bg-white"></div>
                            </div>
                            
                            <div className="feature-list text-white flex-1">
                                <p className="mb-2 text-sm leading-relaxed">
                                    PT Pergadaian Utama Indonesia (PUI) merupakan perusahaan pergadaian nasional yang menyediakan solusi pendanaan cepat dengan sistem gadai, khususnya untuk barang bernilai tinggi atau barang mewah.
                                </p>

                                <div className="md:flex md:gap-6 md:items-start">
                                    <div className="flex-1">
                                        <p className="text-sm font-semibold mb-1">PUI Telah:</p>
                                        <ul className="ml-0.5 list-disc list-inside text-xs space-y-1 opacity-90">
                                            <li>Berizin dan diawasi oleh OJK</li>
                                            <li>Beroperasi sesuai regulasi OJK</li>
                                        </ul>
                                    </div>
                                    <div className="flex-1 border-l border-white/20 pl-4">
                                        <p className="text-xs opacity-70 italic mt-1">
                                            Menjamin layanan legal, aman, dan sesuai standar industri keuangan.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="about-image-placeholder -ml-32 lg:-ml-28" style={{
                        backgroundImage: "url('/assets/img/profil/5e6c8a11855b39c3ee0f9b523dec390495c03544.png')"
                    }}></div>
                </div>
            </div>
            <div className="flex md:hidden flex-col w-full px-2 mt-16 mb-12">
                <div className="w-full h-[260px] rounded-2xl bg-cover bg-center shadow-md" style={{
                    backgroundImage: "url('/assets/img/profil/5e6c8a11855b39c3ee0f9b523dec390495c03544.png')"
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