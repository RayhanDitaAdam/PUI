let MainPost = function () {
    return (
        <div className="w-full">
            <section className="text-center mb-10 md:mb-16 px-4">
                <h1 className="text-2xl md:text-4xl font-bold text-black mb-3">Artikel Kami</h1>
                <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
            </section>
            
            <section className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-20 px-4 md:px-0 md:items-stretch">
                
                <div className="md:col-span-8 h-[400px] md:h-[610px] relative rounded-3xl md:rounded-[32px] overflow-hidden group shadow-lg">
                    <img 
                        src="https://picsum.photos/id/24/800/600" 
                        alt="Buku Koleksi" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                    
                    <span className="absolute top-4 right-4 bg-[#00A294] text-white text-xs px-4 py-1.5 rounded-full font-medium z-10">
                        Edukasi
                    </span>

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-6 md:p-10">
                        <div className="text-xs text-gray-300 flex items-center gap-2 mb-2">
                            <i className="fa-solid fa-clock"></i> 20 Mei 2025
                        </div>
                        <h2 className="text-xl md:text-3xl font-bold text-white mb-3 group-hover:text-[#00A294] transition-colors line-clamp-2">
                            Buku Koleksi: Lorem Ipsum is Simple
                        </h2>
                        <p className="text-sm md:text-gray-300 mb-5 max-w-xl line-clamp-2 text-gray-200">
                            Ubah koleksi bernilai menjadi likuiditas optimal dengan dokumentasi yang tepat dan terstruktur.
                        </p>
                        <a href="#" className="flex items-center gap-2 text-[#00A294] font-bold text-sm group/btn">
                            Read More 
                            <i className="fa-solid fa-arrow-right text-xs transform group-hover/btn:translate-x-2 transition-transform"></i>
                        </a>
                    </div>
                </div>

                <div className="md:col-span-4 flex flex-col gap-6">
                    <div className="flex flex-col bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-md transition-all">
                        <div className="w-full h-40 md:h-44 flex-shrink-0 overflow-hidden">
                            <img 
                                src="https://picsum.photos/id/305/400/300" 
                                alt="Bunga Balkon" 
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                            />
                        </div>
                        <div className="p-4">
                            <span className="text-[#00A294] text-[10px] md:text-xs font-bold uppercase mb-1 block">Berita</span>
                            <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2 group-hover:text-[#00A294] transition-colors line-clamp-2">
                                Koran Dunia: Lorem Ipsum Dolor Sit Amet
                            </h3>
                            <a href="#" className="flex items-center gap-1.5 text-[#00A294] font-semibold text-xs group/btn">
                                Read More <i className="fa-solid fa-arrow-right text-[10px] transform group-hover/btn:translate-x-1.5 transition-transform"></i>
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-md transition-all">
                        <div className="w-full h-40 md:h-44 flex-shrink-0 overflow-hidden">
                            <img 
                                src="https://picsum.photos/id/111/400/300" 
                                alt="Mobil Antik" 
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                            />
                        </div>
                        <div className="p-4">
                            <span className="text-[#00A294] text-[10px] md:text-xs font-bold uppercase mb-1 block">Pesan</span>
                            <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2 group-hover:text-[#00A294] transition-colors line-clamp-2">
                                Amplop Surat: Strategi Komunikasi Efektif
                            </h3>
                            <a href="#" className="flex items-center gap-1.5 text-[#00A294] font-semibold text-xs group/btn">
                                Read More <i className="fa-solid fa-arrow-right text-[10px] transform group-hover/btn:translate-x-1.5 transition-transform"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export {MainPost};