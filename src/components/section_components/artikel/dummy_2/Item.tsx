let Item = function () {
    return (
        <div>
            <section className="">
                <h2 className="text-2xl font-bold mb-6">Rekomendasi Artikel</h2>

                <div className="grid grid-cols-3 gap-6 mb-20">

                    <div>
                        <div className="relative mb-3">
                            <div className="w-full h-[180px] rounded-xl overflow-hidden">
                                <img src="https://picsum.photos/id/10/600/400" alt="Landscape Alam" className="w-full h-full object-cover" />
                            </div>
                            <span className="absolute top-3 right-3 bg-[#008774] text-white text-xs px-3 py-1 rounded-full">Edukasi</span>
                        </div>
                        <div className="text-xs text-gray-500 mb-1 flex items-center gap-1">
                            <i className="far fa-clock"></i> 23 Mei 2024
                        </div>
                        <h4 className="font-bold text-sm mb-1">Lorem Ipsum is Simple</h4>
                        <p className="text-xs text-gray-500 mb-2 leading-relaxed">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <a href="/artikel/lorem-ipsum-is-simple" className="group text-xs text-[#008774] flex items-center gap-1 font-semibold">
                            Read More <i className="fa-solid fa-arrow-right text-[10px] transform group-hover:translate-x-1 transition-transform duration-300"></i>
                        </a>
                    </div>

                    <div>
                        <div className="relative mb-3">
                            <div className="w-full h-[180px] rounded-xl overflow-hidden">
                                <img src="https://picsum.photos/id/43/600/400" alt="City Night" className="w-full h-full object-cover" />
                            </div>
                            <span className="absolute top-3 right-3 bg-[#008774] text-white text-xs px-3 py-1 rounded-full">Edukasi</span>
                        </div>
                        <div className="text-xs text-gray-500 mb-1 flex items-center gap-1">
                            <i className="far fa-clock"></i> 23 Mei 2024
                        </div>
                        <h4 className="font-bold text-sm mb-1">Lorem Ipsum is Simple</h4>
                        <p className="text-xs text-gray-500 mb-2 leading-relaxed">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <a href="/artikel/lorem-ipsum-is-simple" className="group text-xs text-[#008774] flex items-center gap-1 font-semibold">
                            Read More <i className="fa-solid fa-arrow-right text-[10px] transform group-hover:translate-x-1 transition-transform duration-300"></i>
                        </a>
                    </div>

                    <div>
                        <div className="relative mb-3">
                            <div className="w-full h-[180px] rounded-xl overflow-hidden">
                                <img src="https://picsum.photos/id/160/600/400" alt="Tech Workspace" className="w-full h-full object-cover" />
                            </div>
                            <span className="absolute top-3 right-3 bg-[#008774] text-white text-xs px-3 py-1 rounded-full">Edukasi</span>
                        </div>
                        <div className="text-xs text-gray-500 mb-1 flex items-center gap-1">
                            <i className="far fa-clock"></i> 23 Mei 2024
                        </div>
                        <h4 className="font-bold text-sm mb-1">Lorem Ipsum is Simple</h4>
                        <p className="text-xs text-gray-500 mb-2 leading-relaxed">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <a href="/artikel/lorem-ipsum-is-simple" className="group text-xs text-[#008774] flex items-center gap-1 font-semibold">
                            Read More <i className="fa-solid fa-arrow-right text-[10px] transform group-hover:translate-x-1 transition-transform duration-300"></i>
                        </a>
                    </div>

                </div>
            </section>
        </div>
    );
}
export { Item }