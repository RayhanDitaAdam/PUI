let MainPost = function () {
    return (<div>
        <section className="text-center mb-16">
            <h1 className="text-3xl font-bold text-black mb-3">Artikel Kami</h1>
            <p className="text-gray-500 text-sm max-w-2xl mx-auto leading-relaxed">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s.
            </p>
        </section>

        <section className="grid grid-cols-12 gap-6 mb-20">

            <div className="col-span-8 relative w-[650px] h-[330px] rounded-2xl overflow-hidden group">
                <img src="https://picsum.photos/id/24/600/400" alt="Buku Koleksi" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span
                    className="absolute top-4 right-4 bg-[#00A294] text-white text-xs px-4 py-1.5 rounded-full font-medium">Edukasi</span>

                <div
                    className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8">
                    <div className="text-xs text-gray-300 flex items-center gap-2 mb-2">
                        <i className="fa-solid fa-clock"></i> 20 Mei 2025
                    </div>
                    <h2 className="text-xl font-bold text-white mb-2 group-hover:text-[#00A294] transition-colors line-clamp-1">Buku Koleksi: Lorem Ipsum is Simple</h2>
                    <p className="text-sm text-gray-300 mb-4 max-w-2xl line-clamp-2">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s.
                    </p>
                    <a href="/artikel/lorem-ipsum-is-simple" className="group text-white text-xs font-semibold flex items-center gap-1">
                        Read More <i className="fa-solid fa-arrow-right text-xs transform group-hover:translate-x-1 transition-transform duration-300"></i>
                    </a>
                </div>
            </div>

            <div className="col-span-4 -ml-20 space-y-6">

                <div className="flex w-[430px] bg-white rounded-lg shadow-md overflow-hidden group border border-gray-100 hover:border-[#00A294] transition-all duration-300">

                    <div className="w-60 h-full flex-shrink-0 relative overflow-hidden">
                        <img src="https://picsum.photos/id/305/600/400" alt="Koran Dunia" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        <span
                            className="absolute top-2 right-2 bg-[#00A294] text-white text-[10px] px-2 py-0.5 rounded-full">Berita</span>
                    </div>

                    <div className="p-4 flex-grow flex flex-col justify-between">
                        <div>
                            <div className="text-xs text-gray-400 flex items-center gap-1 mb-1">
                                <i className="fa-solid fa-clock"></i> 20 Mei 2025
                            </div>
                            <h3
                                className="text-base font-bold text-gray-900 mb-1 group-hover:text-[#00A294] transition-colors line-clamp-1">
                                Koran Dunia: Lorem Ipsum</h3>
                            <p className="text-xs text-gray-500 mb-2 line-clamp-2">Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry.</p>
                        </div>

                        <a href="/artikel/lorem-ipsum-is-simple" className="group text-[#00A294] text-xs font-semibold flex items-center gap-1">
                            Read More <i className="fa-solid fa-arrow-right text-xs transform group-hover:translate-x-1 transition-transform duration-300"></i>
                        </a>
                    </div>

                </div>
                <div className="flex w-[430px] bg-white rounded-lg shadow-md overflow-hidden group border border-gray-100 hover:border-[#00A294] transition-all duration-300">

                    <div className="w-60 h-full flex-shrink-0 relative overflow-hidden">
                        <img src="https://picsum.photos/id/111/600/400" alt="Amplop Surat" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        <span
                            className="absolute top-2 right-2 bg-[#00A294] text-white text-[10px] px-2 py-0.5 rounded-full">Pesan</span>
                    </div>

                    <div className="p-4 flex-grow flex flex-col justify-between">
                        <div>
                            <div className="text-xs text-gray-400 flex items-center gap-1 mb-1">
                                <i className="fa-solid fa-clock"></i> 20 Mei 2025
                            </div>
                            <h3
                                className="text-base font-bold text-gray-900 mb-1 group-hover:text-[#00A294] transition-colors line-clamp-1">
                                Amplop Surat: Lorem Ipsum</h3>
                            <p className="text-xs text-gray-500 mb-2 line-clamp-2">Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry.</p>
                        </div>

                        <a href="/artikel/lorem-ipsum-is-simple" className="text-[#00A294] text-xs font-semibold flex items-center gap-1 group-hover:underline">
                            Read More <i className="fa-solid fa-arrow-right text-xs"></i>
                        </a>
                    </div>

                </div>

            </div>
        </section>
    </div>);
}

export {MainPost}